import { copy } from '@/content/copy';
import { ContactForm } from '@/components/ContactForm';

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="py-16 md:py-24"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2
            className="font-mono text-3xl md:text-4xl font-bold mb-3"
            style={{ color: 'var(--color-fg)' }}
          >
            {copy.contact.sectionTitle}
          </h2>
          <p
            className="text-base"
            style={{ color: 'var(--color-fg-dim)' }}
          >
            {copy.contact.sectionSub}
          </p>
        </div>

        {/* 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form - 2/3 */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Alt contact - 1/3 */}
          <div className="flex flex-col gap-6">
            <div
              className="p-6 border flex flex-col gap-5"
              style={{
                borderColor: 'var(--color-border)',
                background: 'var(--color-bg-elev)',
              }}
            >
              <h3
                className="font-mono text-sm font-semibold"
                style={{ color: 'var(--color-fg)' }}
              >
                Contacto directo
              </h3>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span
                    className="font-mono text-xs"
                    style={{ color: 'var(--color-fg-dim)' }}
                  >
                    Email
                  </span>
                  <a
                    href={`mailto:${copy.contact.altContact.email}`}
                    className="font-mono text-sm transition-colors"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {copy.contact.altContact.email}
                  </a>
                </div>

                <div className="flex flex-col gap-1">
                  <span
                    className="font-mono text-xs"
                    style={{ color: 'var(--color-fg-dim)' }}
                  >
                    Ubicación
                  </span>
                  <span
                    className="font-mono text-sm"
                    style={{ color: 'var(--color-fg)' }}
                  >
                    {copy.contact.altContact.location}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span
                    className="font-mono text-xs"
                    style={{ color: 'var(--color-fg-dim)' }}
                  >
                    Tiempo de respuesta
                  </span>
                  <span
                    className="font-mono text-sm"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {copy.contact.altContact.response}
                  </span>
                </div>
              </div>
            </div>

            <div
              className="p-4 border font-mono text-xs"
              style={{
                borderColor: 'rgba(0,255,136,0.1)',
                color: 'var(--color-fg-dim)',
                background: 'rgba(0,255,136,0.02)',
              }}
            >
              <span style={{ color: 'var(--color-accent)' }}>&gt; </span>
              Todos los datos enviados se tratan con confidencialidad estricta bajo RGPD.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
