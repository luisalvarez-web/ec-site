export const site = {
  name: 'EC Consultoria',
  tagline: 'Conhecimento que gera resultados',
  legalName: 'Erudition Consulting Ltda',
  cnpj: '24.275.977/0001-80',
  url: 'https://ec-consultoria.com',
  foundingDate: '2016-02',
  onvio: 'https://onvio.com.br/clientcenter/company/293313ACFCAD44E1A627AC57CE66E9A6',
  portal: 'https://app.ec-consultoria.com/portal',
  // Acesso da equipe (sistema interno), linkado só no rodapé.
  equipe: 'https://app.ec-consultoria.com',
  // O WhatsApp do escritório é o mesmo número do telefone fixo.
  phone: { display: '(27) 3191-4636', href: 'tel:+552731914636', e164: '+55-27-3191-4636' },
  whatsapp: { display: '(27) 3191-4636', href: 'https://wa.me/552731914636' },
  email: 'contato@ec-consultoria.com',
  address: {
    street: 'Av. Nossa Senhora dos Navegantes, 451, sala 815',
    district: 'Enseada do Suá',
    city: 'Vitória',
    state: 'ES',
    postalCode: '29050-917',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Av.+Nossa+Senhora+dos+Navegantes+451+Enseada+do+Su%C3%A1+Vit%C3%B3ria+ES',
};

// Presencial na Grande Vitória, remoto para todo o Brasil. Cidades com clientes atendidos hoje.
export const serviceArea = {
  summary: 'Atendimento presencial na Grande Vitória e remoto para todo o Brasil.',
  cities: [
    { name: 'Vitória', state: 'ES', stateName: 'Espírito Santo', mode: 'presencial' },
    { name: 'Serra', state: 'ES', stateName: 'Espírito Santo', mode: 'presencial' },
    { name: 'Vila Velha', state: 'ES', stateName: 'Espírito Santo', mode: 'presencial' },
    { name: 'Niterói', state: 'RJ', stateName: 'Rio de Janeiro', mode: 'remoto' },
  ],
};

// Opções do botão "Entrar" (cabeçalho e menu do celular).
export const logins = [
  { href: site.portal, title: 'Portal EC', desc: 'Documentos, checklist do IRPF e solicitações ao escritório' },
  { href: site.onvio, title: 'Onvio', desc: 'Guias de impostos, folha de pagamento e relatórios contábeis' },
];

export const nav = [
  { href: '/servicos', label: 'Serviços' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/irpf', label: 'IRPF' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contato', label: 'Contato' },
];

export type Service = {
  id: string;
  code: string;
  title: string;
  summary: string;
  intro: string;
  items: string[];
  forWhom: string;
};

export const services: Service[] = [
  {
    id: 'contabilidade',
    code: 'PJ · MENSAL',
    title: 'Contabilidade',
    summary: 'Classificação, escrituração e demonstrações contábeis com precisão, prontas para banco, sócio e Fisco.',
    intro:
      'A contabilidade é a base de todas as outras rotinas. Mantemos a escrituração em dia e transformamos os lançamentos em informação útil para a gestão, não apenas em obrigação cumprida.',
    items: [
      'Classificação e conciliação contábil mensal',
      'Balancete mensal com leitura gerencial dos números',
      'Balanço patrimonial e DRE anuais',
      'ECD e ECF entregues no prazo',
      'Distribuição de lucros com respaldo contábil',
      'Relatórios para bancos, investidores e sócios',
    ],
    forWhom: 'Empresas do Simples Nacional, Lucro Presumido e Lucro Real.',
  },
  {
    id: 'consultoria-fiscal',
    code: 'PJ · TRIBUTÁRIO',
    title: 'Consultoria Fiscal',
    summary: 'Planejamento tributário, revisão de procedimentos e busca de oportunidades para reduzir a carga dentro da lei.',
    intro:
      'Escolher bem o regime tributário e manter os procedimentos fiscais corretos faz diferença direta no caixa. Revisamos a operação da sua empresa e apontamos onde é possível pagar menos, com segurança.',
    items: [
      'Planejamento tributário e comparação de regimes',
      'Apuração de tributos federais, estaduais e municipais',
      'Revisão de cadastros, CFOP, NCM e notas fiscais',
      'Obrigações acessórias: SPED Fiscal, EFD-Contribuições, EFD-Reinf, DCTFWeb',
      'Diagnóstico de recuperação de créditos tributários',
      'Preparação para a Reforma Tributária (CBS e IBS)',
    ],
    forWhom: 'Empresas que querem rever a carga tributária ou se preparar para a transição da Reforma.',
  },
  {
    id: 'imposto-de-renda',
    code: 'PF · ANUAL',
    title: 'Imposto de Renda',
    summary: 'Declaração completa, deduções bem aproveitadas e acompanhamento junto à Receita Federal depois da entrega.',
    intro:
      'A declaração do IRPF é feita com cuidado e com as deduções a que você tem direito. Depois da entrega, acompanhamos o processamento e tratamos eventuais pendências com a Receita.',
    items: [
      'Declaração anual de ajuste (completa ou simplificada, a que for melhor)',
      'Carnê-leão e ganho de capital',
      'Rendimentos de aluguel, investimentos e bolsa',
      'Acompanhamento de malha fina e retificações',
      'Declaração de espólio e de saída definitiva do país',
    ],
    forWhom: 'Pessoas físicas, sócios de empresas e profissionais liberais.',
  },
  {
    id: 'departamento-pessoal',
    code: 'PJ · MENSAL',
    title: 'Departamento Pessoal',
    summary: 'Admissões, folha, férias, rescisões e eSocial, com as rotinas trabalhistas em conformidade.',
    intro:
      'Cuidamos de toda a rotina trabalhista da sua empresa, do primeiro dia do colaborador até o desligamento, com os eventos do eSocial enviados no prazo.',
    items: [
      'Admissões, contratos e registros',
      'Folha de pagamento, pró-labore e encargos',
      'Férias, 13º salário e rescisões',
      'eSocial, FGTS Digital e DCTFWeb',
      'Orientação sobre benefícios, jornada e convenções coletivas',
    ],
    forWhom: 'Empresas com ou sem funcionários (inclusive só pró-labore dos sócios).',
  },
  {
    id: 'terceirizacao-financeira',
    code: 'PJ · MENSAL',
    title: 'Terceirização Financeira',
    summary: 'Contas a pagar e receber, conciliação bancária, fluxo de caixa e relatórios para a gestão.',
    intro:
      'Assumimos a rotina financeira para que você foque no negócio. Com o financeiro e a contabilidade no mesmo lugar, os números conversam e as decisões ficam mais seguras.',
    items: [
      'Contas a pagar e a receber',
      'Conciliação bancária',
      'Fluxo de caixa realizado e projetado',
      'Emissão de boletos e notas fiscais',
      'Relatórios gerenciais mensais',
    ],
    forWhom: 'Empresas que não têm (ou não querem ter) uma equipe financeira interna.',
  },
  {
    id: 'legalizacao-de-empresas',
    code: 'PJ · PONTUAL',
    title: 'Legalização de Empresas',
    summary: 'Abertura, alterações contratuais, alvarás e licenças nas esferas municipal, estadual e federal.',
    intro:
      'Da escolha do tipo societário ao alvará de funcionamento, conduzimos todo o processo junto à Junta Comercial, Receita Federal, Sefaz e prefeitura.',
    items: [
      'Abertura de empresas e escolha do enquadramento',
      'Alterações contratuais (sócios, endereço, atividade, capital)',
      'Transformação de MEI em ME',
      'Alvarás, licenças e inscrições',
      'Baixa e encerramento de empresas',
    ],
    forWhom: 'Quem vai abrir, mudar ou encerrar uma empresa no Espírito Santo.',
  },
  {
    id: 'terceiro-setor',
    code: 'ONG · MENSAL',
    title: 'Entidades sem Fins Lucrativos',
    summary: 'Contabilidade para ONGs, associações e fundações, com prestação de contas e manutenção de imunidades e isenções.',
    intro:
      'Entidades do terceiro setor têm regras contábeis e fiscais próprias. Cuidamos da escrituração, da prestação de contas a parceiros e financiadores e das obrigações que mantêm a entidade regular e apta a receber recursos.',
    items: [
      'Contabilidade conforme a ITG 2002 (entidades sem finalidade de lucros)',
      'Prestação de contas de convênios, termos de fomento e colaboração (MROSC)',
      'Manutenção de imunidade e isenção tributária',
      'Folha de pagamento, voluntariado e eSocial',
      'ECD, ECF, EFD-Reinf e demais obrigações acessórias',
      'Constituição, alteração de estatuto e registro de atas',
    ],
    forWhom: 'ONGs, associações, fundações, institutos e demais organizações da sociedade civil.',
  },
];

export const faq: { q: string; a: string }[] = [
  {
    q: 'Vocês atendem apenas empresas de Vitória?',
    a: 'Não. O atendimento é presencial na Grande Vitória e remoto para todo o Brasil, com documentos e guias trocados pelo Portal EC e pelo Onvio. Hoje temos clientes em Vitória, Serra, Vila Velha e Niterói (RJ).',
  },
  {
    q: 'Vocês atendem ONGs e entidades sem fins lucrativos?',
    a: 'Sim. Fazemos a contabilidade de ONGs, associações e fundações, incluindo prestação de contas de convênios e termos de fomento e a manutenção de imunidades e isenções.',
  },
  {
    q: 'Como funciona a troca de contador?',
    a: 'Nós conduzimos a migração: solicitamos a documentação ao escritório anterior, assumimos as procurações eletrônicas e acertamos o calendário com você, sem interromper as obrigações da empresa.',
  },
  {
    q: 'Como acesso o Portal EC e o Onvio?',
    a: 'Pelo botão "Entrar", no topo do site. No Portal EC você envia documentos, acompanha o checklist do IRPF e faz solicitações ao escritório; no Onvio ficam guias de impostos, folha de pagamento e relatórios contábeis. Os acessos são criados pela nossa equipe depois da contratação.',
  },
  {
    q: 'Quais regimes tributários vocês atendem?',
    a: 'Simples Nacional, Lucro Presumido e Lucro Real. Também atendemos MEIs que estão crescendo e precisam migrar para microempresa.',
  },
  {
    q: 'Vocês fazem a declaração de imposto de renda de pessoa física?',
    a: 'Sim. Fazemos a declaração anual, carnê-leão, ganho de capital e acompanhamos a declaração depois da entrega, inclusive em caso de malha fina.',
  },
  {
    q: 'Como a Reforma Tributária afeta a minha empresa?',
    a: '2026 é o ano de teste da CBS e do IBS, e a transição segue até 2033. Revisamos cadastros, notas fiscais e precificação para que a sua empresa chegue preparada a cada etapa.',
  },
  {
    q: 'Quanto custa a contabilidade mensal?',
    a: 'O honorário depende do regime tributário, do volume de notas e do número de funcionários. Fazemos um diagnóstico sem compromisso e enviamos uma proposta fechada.',
  },
  {
    q: 'Qual o horário de atendimento?',
    a: 'Atendemos em horário comercial, de segunda a sexta. Mensagens pelo WhatsApp ou e-mail costumam ser respondidas no mesmo dia.',
  },
];
