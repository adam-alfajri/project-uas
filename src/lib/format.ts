const idr = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});
const shortFmt = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});
const longFmt = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Bangkok",
});
const monthFmt = new Intl.DateTimeFormat("en-GB", {
  month: "short",
  timeZone: "UTC",
});

export const money = (n: number) => idr.format(n);

export const shortDate = (iso: string) =>
  shortFmt.format(new Date(`${iso}T00:00:00Z`));

export const todayLong = () => longFmt.format(new Date());

// Format YYYY-MM-DD untuk tanggal hari ini di Bangkok
export const todayISO = () =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Bangkok" }).format(
    new Date(),
  );

export const hourBangkok = () =>
  Number(
    new Intl.DateTimeFormat("en-GB", {
      hour: "numeric",
      hour12: false,
      timeZone: "Asia/Bangkok",
    }).format(new Date()),
  );

// Selisih hari: to - from
export const daysBetween = (from: string, to: string) =>
  Math.round(
    (Date.parse(`${to}T00:00:00Z`) - Date.parse(`${from}T00:00:00Z`)) /
      86400000,
  );

export const monthLabel = (ym: string) =>
  monthFmt.format(new Date(`${ym}-01T00:00:00Z`));

export const lastDayOfMonth = (ym: string) => {
  const [y, m] = ym.split("-").map(Number);
  return new Date(Date.UTC(y, m, 0)).toISOString().slice(0, 10);
};
