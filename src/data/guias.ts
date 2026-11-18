import { site } from './site';

// Guias passo a passo para clientes (/guias/<slug>).
//
// Prints de tela: salve em public/guias/<slug>/passo-<n>.png (ou .jpg / .webp),
// onde <n> é o número do passo. A página mostra a imagem sozinha quando o arquivo existe;
// sem arquivo, o passo aparece só com o texto.
//
// `text`, `note` e os itens de `before` aceitam HTML simples (<strong>, <a>, <em>).

export type Passo = {
  title: string;
  text: string;
  /** Texto alternativo do print (descreva o que aparece na tela). */
  alt?: string;
  /** Aviso curto em destaque abaixo do passo. */
  note?: string;
  /** Valor para o cliente copiar com um clique (ex.: CNPJ). */
  copy?: { label: string; value: string };
};

export type Guia = {
  slug: string;
  /** Rótulo curto (cartões e eyebrow). */
  tag: string;
  title: string;
  /** <title> e meta description (até 155 caracteres cada). */
  seoTitle: string;
  description: string;
  lede: string;
  /** Tempo aproximado para concluir. */
  tempo: string;
  /** Data da última revisão do conteúdo (AAAA-MM-DD). */
  revisado: string;
  before: string[];
  steps: Passo[];
  /** Bloco extra no fim (caminhos alternativos, avisos). */
  extra?: { title: string; text: string };
  fonte: { label: string; href: string };
};

export const guias: Guia[] = [
  {
    slug: 'assinatura-protocolo-jucerja',
    tag: 'Jucerja · RJ',
    title: 'Como assinar um protocolo na Jucerja',
    seoTitle: 'Como assinar protocolo na Jucerja pelo gov.br | Passo a passo EC Consultoria',
    description:
      'Passo a passo para o sócio ou administrador assinar pelo gov.br o protocolo de abertura, alteração ou baixa de empresa enviado à Junta Comercial do RJ.',
    lede:
      'Quando registramos a abertura, alteração ou baixa da sua empresa na Junta Comercial do Rio de Janeiro, cada sócio ou administrador precisa assinar o protocolo. Leva poucos minutos.',
    tempo: 'cerca de 5 minutos',
    revisado: '2026-11-18',
    before: [
      'Conta <strong>gov.br</strong> nível prata ou ouro (ou certificado digital e-CPF)',
      'O <strong>número do protocolo</strong> que a EC enviou para você',
      'Computador com navegador atualizado (a Jucerja funciona melhor fora do celular)',
    ],
    steps: [
      {
        title: 'Entre no site da Jucerja',
        text: 'Acesse <a href="https://www.jucerja.rj.gov.br/" target="_blank" rel="noopener">www.jucerja.rj.gov.br</a> e clique em <strong>Cadastrar / Acessar</strong>, no canto superior direito.',
        alt: 'Página inicial da Jucerja com o botão Cadastrar / Acessar destacado',
      },
      {
        title: 'Escolha entrar com gov.br',
        text: 'Na janela <em>Como deseja acessar?</em>, clique em <strong>gov.br</strong> e entre com seu CPF e senha.',
        alt: 'Janela Como deseja acessar com a opção gov.br destacada',
      },
      {
        title: 'Abra o Protocolo Web',
        text: 'Já logado, vá ao menu <strong>Serviços</strong> e clique em <strong>Protocolo Web</strong>. Na tela seguinte, clique em <strong>Começar o Protocolo Web</strong>.',
        alt: 'Menu Serviços da Jucerja com Protocolo Web e o botão Começar o Protocolo Web',
      },
      {
        title: 'Aceite o termo de utilização',
        text: 'Leia o termo, marque <strong>Concordo com os termos de utilização do serviço</strong> e clique em <strong>Avançar</strong>.',
        alt: 'Termo de utilização do serviço com a caixa Concordo marcada e o botão Avançar',
      },
      {
        title: 'Entre em Consulta e Gestão de Protocolos',
        text: 'Entre as opções do Protocolo Web, clique em <strong>Consulta e Gestão de Protocolos</strong>.',
        alt: 'Opções do Protocolo Web com Consulta e Gestão de Protocolos destacada',
      },
      {
        title: 'Encontre o seu protocolo',
        text: 'Deixe o status em <em>Todos em tramitação</em> e clique em <strong>Pesquisar</strong>. Se aparecer mais de um, confira pelo número que enviamos (ou digite-o no campo <strong>Protocolo</strong>).',
        alt: 'Tela de pesquisa de protocolos com o botão Pesquisar destacado',
      },
      {
        title: 'Assine o protocolo',
        text: 'Abra o protocolo da lista, confira os dados e use a opção de <strong>assinar</strong>. Confirme a assinatura com o gov.br (ou com o seu certificado digital, se preferir).',
        alt: 'Protocolo aberto com a opção de assinatura',
        note: 'Se o sistema pedir para instalar uma extensão de assinatura no navegador, aceite: ela é da própria Jucerja.',
      },
      {
        title: 'Avise a EC',
        text: 'Pronto. Mande uma mensagem para a gente dizendo que assinou. Quando todos os sócios assinarem, damos sequência ao registro.',
      },
    ],
    extra: {
      title: 'Tem prazo',
      text: 'A Jucerja exige que o protocolo aberto seja movimentado em até <strong>30 dias corridos</strong>. Depois disso, ele pode ser cancelado e o processo precisa recomeçar. Por isso, assine assim que receber o aviso.',
    },
    fonte: { label: 'Jucerja · Protocolo Web', href: 'https://www.jucerja.rj.gov.br/' },
  },
  {
    slug: 'procuracao-ecac',
    tag: 'Receita Federal',
    title: 'Como autorizar a EC na Receita Federal (procuração eCAC)',
    seoTitle: 'Procuração eCAC: como autorizar seu contador na Receita | EC Consultoria',
    description:
      'A procuração eletrônica do eCAC virou Autorização de Acesso. Veja como liberar a EC Consultoria no Portal de Serviços da Receita Federal com gov.br.',
    lede:
      'Para cuidarmos da sua situação na Receita Federal (pendências, parcelamentos, declarações, certidões), você precisa nos dar acesso. Desde dezembro de 2025, a antiga procuração eletrônica do eCAC se chama Autorização de Acesso.',
    tempo: 'cerca de 5 minutos',
    revisado: '2026-11-18',
    before: [
      'Conta <strong>gov.br</strong> nível prata ou ouro. <a href="https://www.gov.br/governodigital/pt-br/identidade/conta-gov-br/niveis-da-conta-govbr" target="_blank" rel="noopener">Veja como subir o nível</a>',
      'Se for para uma <strong>empresa</strong>: o gov.br do responsável legal pelo CNPJ ou o certificado digital da empresa (e-CNPJ)',
      `O CNPJ da EC Consultoria: <strong>${site.cnpj}</strong>`,
    ],
    steps: [
      {
        title: 'Abra Minhas Autorizações de Acesso',
        text: 'Acesse o <a href="https://servicos.receitafederal.gov.br/servico/autorizacoes" target="_blank" rel="noopener">Portal de Serviços da Receita Federal</a> no serviço <strong>Minhas Autorizações de Acesso</strong> e entre com o gov.br.',
        alt: 'Portal de Serviços da Receita Federal com o serviço Minhas Autorizações de Acesso',
      },
      {
        title: 'Confira em nome de quem você está',
        text: 'Para autorizar <strong>você mesmo (CPF)</strong>, siga em frente. Para autorizar uma <strong>empresa</strong>, troque o perfil de acesso para o CNPJ dela antes de continuar (ou entre com o e-CNPJ).',
        alt: 'Perfil de acesso no Portal de Serviços',
      },
      {
        title: 'Cadastre uma nova autorização',
        text: 'Na aba <strong>Concedidas</strong>, escolha a opção para cadastrar uma nova autorização de acesso.',
        alt: 'Aba Concedidas com a opção de nova autorização',
      },
      {
        title: 'Informe o CNPJ da EC Consultoria',
        text: 'No campo de quem vai receber a autorização, informe o CNPJ da EC. Confira se aparece <strong>Erudition Consulting Ltda</strong>, nossa razão social.',
        alt: 'Campo para informar o CNPJ de quem recebe a autorização',
        copy: { label: 'CNPJ da EC Consultoria', value: site.cnpj },
      },
      {
        title: 'Marque todos os serviços',
        text: 'Selecione <strong>todos os serviços</strong>. Assim também ficamos com acesso aos serviços que a Receita criar no futuro, sem precisar refazer a autorização.',
        alt: 'Lista de serviços com a opção de selecionar todos',
        note: 'Se preferir liberar só alguns serviços, combine antes com a gente quais são necessários.',
      },
      {
        title: 'Defina a validade',
        text: 'A autorização pode valer por até <strong>5 anos</strong>. Recomendamos o prazo máximo, para não interromper o atendimento no meio do caminho.',
        alt: 'Campo de data final da autorização',
      },
      {
        title: 'Confirme e avise a EC',
        text: 'Revise os dados e confirme. Depois, mande uma mensagem para a gente: a autorização só passa a valer quando a EC <strong>aceita</strong> do nosso lado, e fazemos isso no mesmo dia.',
      },
    ],
    extra: {
      title: 'Não tem gov.br prata ou ouro?',
      text: 'Nesse caso a autorização é feita pela <strong>Solicitação de Procuração Digital</strong>: um formulário da Receita que precisa ser assinado (gov.br, certificado digital ou firma reconhecida) e protocolado no eCAC, em <em>Meus Processos</em>. A análise leva em média 10 dias úteis. Fale com a gente que preparamos o formulário com você.',
    },
    fonte: {
      label: 'gov.br · Cadastrar Autorização de Acesso (Procuração Digital)',
      href: 'https://www.gov.br/pt-br/servicos/cadastrar-ou-cancelar-procuracao-para-acesso-ao-e-cac',
    },
  },
];
