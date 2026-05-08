'use client';

import { useState } from 'react';
import { copy } from '@/content/copy';
import { contactSchema } from '@/lib/contact-schema';

type FormState = 'idle' | 'sending' | 'success' | 'error' | 'ratelimit';

const inputClass =
  'bg-transparent border text-sm px-3 py-2 w-full focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00ff88] transition-colors font-mono';

export function ContactForm() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [rgpd, setRgpd] = useState(false);
  const [website, setWebsite] = useState(''); // honeypot
  const [formState, setFormState] = useState<FormState>('idle');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const inputStyle = {
    borderColor: 'var(--color-border)',
    color: 'var(--color-fg)',
  };

  const focusStyle = (field: string) => ({
    ...inputStyle,
    borderColor: validationErrors[field] ? 'var(--color-danger)' : 'var(--color-border)',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationErrors({});

    const parsed = contactSchema.safeParse({ name, company, email, service, message, website });
    if (!parsed.success) {
      const errors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        if (issue.path[0]) errors[issue.path[0] as string] = issue.message;
      });
      setValidationErrors(errors);
      return;
    }

    setFormState('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, company, email, service, message, website }),
      });

      if (res.status === 429) {
        setFormState('ratelimit');
        return;
      }

      if (!res.ok) {
        setFormState('error');
        return;
      }

      setFormState('success');
    } catch {
      setFormState('error');
    }
  };

  if (formState === 'success') {
    return (
      <div
        className="p-6 border font-mono text-sm"
        style={{
          borderColor: 'var(--color-accent)',
          color: 'var(--color-accent)',
          background: 'var(--color-accent-dim)',
        }}
      >
        <span>✓ </span>{copy.contact.successMessage}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Name */}
      <div className="flex flex-col gap-1">
        <label htmlFor="cf-name" className="font-mono text-xs" style={{ color: 'var(--color-fg-dim)' }}>
          {copy.contact.formLabels.name}
        </label>
        <input
          id="cf-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={copy.contact.formPlaceholders.name}
          className={inputClass}
          style={focusStyle('name')}
          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
          onBlur={(e) => (e.currentTarget.style.borderColor = validationErrors.name ? 'var(--color-danger)' : 'var(--color-border)')}
        />
        {validationErrors.name && (
          <span className="font-mono text-xs" style={{ color: 'var(--color-danger)' }}>
            {validationErrors.name}
          </span>
        )}
      </div>

      {/* Company */}
      <div className="flex flex-col gap-1">
        <label htmlFor="cf-company" className="font-mono text-xs" style={{ color: 'var(--color-fg-dim)' }}>
          {copy.contact.formLabels.company}
        </label>
        <input
          id="cf-company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder={copy.contact.formPlaceholders.company}
          className={inputClass}
          style={focusStyle('company')}
          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
          onBlur={(e) => (e.currentTarget.style.borderColor = validationErrors.company ? 'var(--color-danger)' : 'var(--color-border)')}
        />
        {validationErrors.company && (
          <span className="font-mono text-xs" style={{ color: 'var(--color-danger)' }}>
            {validationErrors.company}
          </span>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="cf-email" className="font-mono text-xs" style={{ color: 'var(--color-fg-dim)' }}>
          {copy.contact.formLabels.email}
        </label>
        <input
          id="cf-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={copy.contact.formPlaceholders.email}
          className={inputClass}
          style={focusStyle('email')}
          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
          onBlur={(e) => (e.currentTarget.style.borderColor = validationErrors.email ? 'var(--color-danger)' : 'var(--color-border)')}
        />
        {validationErrors.email && (
          <span className="font-mono text-xs" style={{ color: 'var(--color-danger)' }}>
            {validationErrors.email}
          </span>
        )}
      </div>

      {/* Service */}
      <div className="flex flex-col gap-1">
        <label htmlFor="cf-service" className="font-mono text-xs" style={{ color: 'var(--color-fg-dim)' }}>
          {copy.contact.formLabels.service}
        </label>
        <select
          id="cf-service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={inputClass}
          style={{
            ...focusStyle('service'),
            background: 'var(--color-bg-elev)',
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
          onBlur={(e) => (e.currentTarget.style.borderColor = validationErrors.service ? 'var(--color-danger)' : 'var(--color-border)')}
        >
          <option value="" disabled>
            {copy.contact.formPlaceholders.service}
          </option>
          {copy.contact.serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {validationErrors.service && (
          <span className="font-mono text-xs" style={{ color: 'var(--color-danger)' }}>
            {validationErrors.service}
          </span>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1">
        <label htmlFor="cf-message" className="font-mono text-xs" style={{ color: 'var(--color-fg-dim)' }}>
          {copy.contact.formLabels.message}
        </label>
        <textarea
          id="cf-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={copy.contact.formPlaceholders.message}
          rows={5}
          className={inputClass}
          style={{
            ...focusStyle('message'),
            resize: 'vertical',
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
          onBlur={(e) => (e.currentTarget.style.borderColor = validationErrors.message ? 'var(--color-danger)' : 'var(--color-border)')}
        />
        {validationErrors.message && (
          <span className="font-mono text-xs" style={{ color: 'var(--color-danger)' }}>
            {validationErrors.message}
          </span>
        )}
      </div>

      {/* RGPD */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="rgpd"
          checked={rgpd}
          onChange={(e) => setRgpd(e.target.checked)}
          className="mt-0.5"
          style={{ accentColor: 'var(--color-accent)' }}
        />
        <label
          htmlFor="rgpd"
          className="font-mono text-xs leading-relaxed cursor-pointer"
          style={{ color: 'var(--color-fg-dim)' }}
        >
          {copy.contact.formLabels.rgpd}
        </label>
      </div>

      {/* Honeypot */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}>
        <input
          type="text"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Error messages */}
      {formState === 'error' && (
        <p className="font-mono text-xs" style={{ color: 'var(--color-danger)' }}>
          {copy.contact.errorMessage}
        </p>
      )}
      {formState === 'ratelimit' && (
        <p className="font-mono text-xs" style={{ color: 'var(--color-danger)' }}>
          {copy.contact.rateLimitMessage}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === 'sending' || !rgpd}
        className="px-6 py-3 font-mono text-sm font-semibold transition-opacity disabled:opacity-50"
        style={{
          background: 'var(--color-accent)',
          color: '#0a0a0a',
          animation: formState === 'sending' ? 'pulse-dot 1s ease-in-out infinite' : undefined,
        }}
      >
        {formState === 'sending'
          ? copy.contact.formLabels.submitting
          : copy.contact.formLabels.submit}
      </button>
    </form>
  );
}
