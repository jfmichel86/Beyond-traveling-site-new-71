// Small date helpers shared by the server (feed reader) and the calendars in
// the browser. A "booked range" is [firstBookedNight, morningItFrees): the
// guest sleeps the night of `start` and leaves on the morning of `end`, so the
// `end` day itself can still be a new guest's check-in day.

export type BookedRange = [string, string] // 'YYYY-MM-DD', end exclusive

const pad = (n: number) => String(n).padStart(2, '0')

export function addDays(ds: string, n: number): string {
  const [y, m, d] = ds.split('-').map(Number)
  const t = new Date(Date.UTC(y, m - 1, d + n))
  return `${t.getUTCFullYear()}-${pad(t.getUTCMonth() + 1)}-${pad(t.getUTCDate())}`
}

export function nightsBetween(a: string, b: string): number {
  const [y1, m1, d1] = a.split('-').map(Number)
  const [y2, m2, d2] = b.split('-').map(Number)
  return Math.round((Date.UTC(y2, m2 - 1, d2) - Date.UTC(y1, m1 - 1, d1)) / 86400000)
}

/** Every booked night as a lookup set. */
export function buildBookedSet(ranges: BookedRange[] | null | undefined): Set<string> {
  const set = new Set<string>()
  for (const [start, end] of ranges ?? []) {
    const total = nightsBetween(start, end)
    for (let i = 0; i < total && i < 800; i++) set.add(addDays(start, i))
  }
  return set
}

/** True when every night from check-in up to (not including) check-out is free. */
export function rangeIsFree(booked: Set<string>, checkIn: string, checkOut: string): boolean {
  const total = nightsBetween(checkIn, checkOut)
  for (let i = 0; i < total; i++) {
    if (booked.has(addDays(checkIn, i))) return false
  }
  return true
}
