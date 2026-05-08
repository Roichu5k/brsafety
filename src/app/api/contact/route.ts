import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/contact-schema';
import { getRateLimiter } from '@/lib/rate-limit';
import { sendContactEmail } from '@/lib/send-email';

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? '127.0.0.1';

  const limiter = await getRateLimiter();
  const { success } = await limiter.limit(ip);
  if (!success) return NextResponse.json({ error: 'rate_limit' }, { status: 429 });

  const body = await req.json();
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json(
      { error: 'validation', details: parsed.error.flatten() },
      { status: 400 }
    );

  const { website, ...data } = parsed.data;
  if (website) return NextResponse.json({ ok: true }); // honeypot

  try {
    await sendContactEmail(data);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'send_failed' }, { status: 500 });
  }
}
