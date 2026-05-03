/**
 * In-memory rate limiter using a Map<key, bucket>.
 *
 * Limitations:
 * - Single-process: counters are NOT shared across instances. On serverless
 *   or horizontally-scaled deployments the effective limit becomes
 *   N_instances × limit. Acceptable for low-traffic single-region sites;
 *   migrate to Upstash/Redis if multi-instance.
 * - In-memory: counters reset on process restart (not a concern for
 *   short windows).
 * - Lazy GC: expired entries are pruned only when the Map grows beyond
 *   MAX_BUCKETS, to bound memory under attack.
 */
type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();
const MAX_BUCKETS = 10_000;

function sweepExpired(now: number): void {
  for (const [k, b] of buckets) {
    if (b.resetAt <= now) buckets.delete(k);
  }
}

export type RateLimitResult = { ok: true } | { ok: false; retryAfterSec: number };

export function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number,
): RateLimitResult {
  const now = Date.now();

  if (buckets.size > MAX_BUCKETS) sweepExpired(now);

  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }

  if (existing.count >= limit) {
    return { ok: false, retryAfterSec: Math.ceil((existing.resetAt - now) / 1000) };
  }

  existing.count += 1;
  return { ok: true };
}
