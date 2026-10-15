/**
 * Data de hoje no navegador. Só em desenvolvimento aceita ?hoje=AAAA-MM-DD
 * na URL, para testar a virada de mês e os prazos.
 */
export function hoje(): Date {
  if (import.meta.env.DEV) {
    const m = new URLSearchParams(location.search).get('hoje')?.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (m) return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  }
  return new Date();
}
