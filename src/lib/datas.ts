// Datas calculadas no build (texto inicial da página) e de novo no navegador,
// para que os exemplos acompanhem o mês corrente sem republicar o site.

const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

const abrev = (m: number) => MESES[m].slice(0, 3);
const dd = (n: number) => String(n).padStart(2, '0');

export type AgendaItem = { label: string; status: string; ok: boolean };
export type Agenda = { titulo: string; competencia: string; itens: AgendaItem[] };

/**
 * Agenda de exemplo do cliente. A contabilidade apura sempre o mês anterior fechado:
 * no mês corrente vencem as obrigações da competência anterior.
 */
export function agenda(hoje: Date): Agenda {
  const ano = hoje.getFullYear();
  const mes = hoje.getMonth();
  const dia = hoje.getDate();
  const comp = new Date(ano, mes - 1, 1);
  const compMes = comp.getMonth();
  const compRotulo = `${abrev(compMes)}/${comp.getFullYear()}`;
  const venc = (d: number) => `${dd(d)}/${dd(mes + 1)}`;

  // dia limite → status antes/depois do prazo
  const prazo = (d: number, feito: string, antes: string): Pick<AgendaItem, 'status' | 'ok'> =>
    dia > d ? { status: feito, ok: true } : { status: antes.replace('{d}', venc(d)), ok: false };

  return {
    titulo: `${abrev(mes)}/${ano}`,
    competencia: compRotulo,
    itens: [
      { label: `Folha de ${MESES[compMes]} · eSocial`, ...prazo(15, 'enviado', 'até {d}') },
      { label: 'EFD-Reinf', ...prazo(15, 'enviado', 'até {d}') },
      { label: 'DAS · Simples Nacional', ...prazo(20, 'pago', 'vence {d}') },
      { label: 'FGTS Digital', ...prazo(20, 'pago', 'vence {d}') },
      {
        label: `Balancete de ${MESES[compMes]}`,
        ...(dia >= 10 ? { status: 'disponível', ok: true } : { status: 'em fechamento', ok: false }),
      },
    ],
  };
}

/** Ano da declaração do IRPF em foco: a entrega vai até 31 de maio; de junho em diante, a próxima. */
export function anoIrpf(hoje: Date): number {
  return hoje.getMonth() <= 4 ? hoje.getFullYear() : hoje.getFullYear() + 1;
}
