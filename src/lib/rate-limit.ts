let ratelimiter: { limit(id: string): Promise<{ success: boolean }> } | null = null;

export async function getRateLimiter() {
  if (ratelimiter) return ratelimiter;

  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    const { Redis } = await import('@upstash/redis');
    const { Ratelimit } = await import('@upstash/ratelimit');
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
    ratelimiter = new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(5, '10 m') });
  } else {
    const store = new Map<string, number[]>();
    ratelimiter = {
      async limit(id: string) {
        const now = Date.now();
        const window = 10 * 60 * 1000;
        const hits = (store.get(id) ?? []).filter((t) => now - t < window);
        hits.push(now);
        store.set(id, hits);
        return { success: hits.length <= 5 };
      },
    };
    if (process.env.NODE_ENV !== 'test') {
      console.warn('[rate-limit] Upstash not configured, using in-memory fallback');
    }
  }
  return ratelimiter;
}
