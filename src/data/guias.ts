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
  /** Estado do mapa com bandeira (sigla minúscula). Sem sigla: Brasil (órgãos federais). */
  uf?: string;
  /** Rótulo curto (cartões e eyebrow). */
  tag: string;
  title: string;
  /** <title> e meta description (até 155 caracteres cada). */
  seoTitle: string;
  description: string;
  lede: string;
  /** Tempo aproximado para concluir. */
  tempo: string;
  /** Termos extras para a busca da página /guias (sinônimos, siglas). */
  keywords?: string[];
  /** Data da última revisão do conteúdo (AAAA-MM-DD). */
  revisado: string;
  before: string[];
  steps: Passo[];
  /** Bloco extra no fim (caminhos alternativos, avisos). */
  extra?: { title: string; text: string };
  fonte: { label: string; href: string };
};

const GOVBR_NIVEL =
  '<a href="https://www.gov.br/governodigital/pt-br/identidade/conta-gov-br/niveis-da-conta-govbr" target="_blank" rel="noopener">Veja como subir o nível</a>';
const GOVBR_2FA =
  'Para ativar, abra o app gov.br, vá em <strong>Segurança da conta</strong> e ligue a <strong>Verificação em duas etapas</strong>. Na hora de assinar, o código sai do próprio app.';

export const guias: Guia[] = [
  {
    slug: 'assinatura-protocolo-simplifica-es',
    uf: 'es',
    tag: 'Jucees · ES',
    title: 'Como assinar um protocolo no Simplifica ES',
    seoTitle: 'Como assinar protocolo no Simplifica ES (Jucees) pelo gov.br | EC Consultoria',
    description:
      'Passo a passo para o sócio ou administrador assinar pelo gov.br, no Simplifica ES, o processo de abertura, alteração ou baixa na Junta Comercial do ES.',
    lede:
      'Quando montamos a abertura, alteração ou baixa da sua empresa na Junta Comercial do Espírito Santo, cada sócio ou administrador assina o documento direto no Simplifica ES. Leva poucos minutos.',
    tempo: 'cerca de 5 minutos',
    revisado: '2026-10-27',
    keywords: ['Junta Comercial', 'Espírito Santo', 'Vitória', 'contrato social', 'alteração contratual', 'abertura de empresa', 'distrato', 'assinatura digital'],
    before: [
      'Conta <strong>gov.br</strong> nível prata ou ouro. <a href="https://www.gov.br/governodigital/pt-br/identidade/conta-gov-br/niveis-da-conta-govbr" target="_blank" rel="noopener">Veja como subir o nível</a>',
      'O app <strong>gov.br</strong> instalado e logado no celular, para receber o código de confirmação',
      'O <strong>número do protocolo</strong> que a EC enviou para você',
      'Navegador comum, fora da janela anônima',
    ],
    steps: [
      {
        title: 'Abra o Acompanhamento do Protocolo',
        text: 'Acesse <a href="https://www.simplifica.es.gov.br/" target="_blank" rel="noopener">www.simplifica.es.gov.br</a> e clique em <strong>Acompanhamento do Protocolo</strong>.',
        alt: 'Página inicial do Simplifica ES com a opção Acompanhamento do Protocolo',
      },
      {
        title: 'Informe o número do protocolo',
        text: 'Digite o número do protocolo que enviamos e clique em <strong>Acompanhar</strong>.',
        alt: 'Campo do número do protocolo e o botão Acompanhar',
      },
      {
        title: 'Entre com o gov.br',
        text: 'Quando o sistema pedir, faça login com o <strong>mesmo CPF e senha</strong> do app gov.br do seu celular.',
        alt: 'Tela de login gov.br',
      },
      {
        title: 'Abra o documento',
        text: 'Clique em <strong>Exibir conteúdo</strong> e abra o contrato (ou alteração, ou distrato) para ler. Confira seus dados antes de assinar.',
        alt: 'Protocolo aberto com o botão Exibir conteúdo',
      },
      {
        title: 'Avance até a assinatura',
        text: 'Clique em <strong>Avançar</strong> até aparecer a tela de assinatura e clique em <strong>Assinar</strong>.',
        alt: 'Tela de assinatura eletrônica do Simplifica ES com o botão Assinar',
      },
      {
        title: 'Escolha assinar com gov.br',
        text: 'Entre as opções de assinatura, escolha <strong>gov.br</strong>. Quem tem certificado digital (e-CPF ou em nuvem) também pode usar, se preferir.',
        alt: 'Opções de assinatura: gov.br, certificado digital e certificado em nuvem',
      },
      {
        title: 'Autorize com o código',
        text: 'O gov.br manda um <strong>código</strong> para o seu celular (pelo app ou por SMS). Digite o código e clique em <strong>Autorizar</strong>.',
        alt: 'Tela do gov.br pedindo o código de autorização',
        note: 'O código não chegou? Deixe o app gov.br aberto no celular e clique em assinar de novo. Às vezes o sistema também pede para fazer login outra vez; é normal.',
      },
      {
        title: 'Avise a EC',
        text: 'Pronto. Mande uma mensagem para a gente dizendo que assinou. Quando todos os sócios assinarem, protocolamos o processo na Jucees.',
      },
    ],
    extra: {
      title: 'Assine dentro do Simplifica ES',
      text: 'A Jucees só aceita a assinatura feita <strong>dentro do próprio Simplifica ES</strong>. Um PDF assinado em outro lugar (por exemplo, no assinador avulso do gov.br) não vale para o processo. Se não puder assinar pessoalmente, é possível nomear um procurador, mas isso precisa ser combinado com a gente antes de montarmos o processo.',
    },
    fonte: { label: 'Jucees · Assinatura digital de processos', href: 'https://jucees.es.gov.br/' },
  },
  {
    slug: 'assinatura-protocolo-jucerja',
    uf: 'rj',
    tag: 'Jucerja · RJ',
    title: 'Como assinar um protocolo na Jucerja',
    seoTitle: 'Como assinar protocolo na Jucerja pelo gov.br | Passo a passo EC Consultoria',
    description:
      'Passo a passo para o sócio ou administrador assinar pelo gov.br o protocolo de abertura, alteração ou baixa de empresa enviado à Junta Comercial do RJ.',
    lede:
      'Quando registramos a abertura, alteração ou baixa da sua empresa na Junta Comercial do Rio de Janeiro, cada sócio ou administrador precisa assinar o protocolo. Leva poucos minutos.',
    tempo: 'cerca de 5 minutos',
    revisado: '2026-09-15',
    keywords: ['Junta Comercial', 'Rio de Janeiro', 'Protocolo Web', 'contrato social', 'alteração contratual', 'abertura de empresa', 'assinatura digital'],
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
    slug: 'assinatura-processo-jucesc',
    uf: 'sc',
    tag: 'Jucesc · SC',
    title: 'Como assinar um processo na Jucesc',
    seoTitle: 'Como assinar processo na Jucesc (SC) pelo gov.br | Passo a passo EC Consultoria',
    description:
      'Passo a passo para o sócio ou administrador assinar pelo gov.br, no Assinador web da Jucesc, o processo de abertura, alteração ou baixa da empresa em SC.',
    lede:
      'Quando montamos a abertura, alteração ou baixa da sua empresa na Junta Comercial de Santa Catarina, cada sócio ou administrador assina o processo no Assinador web da Jucesc.',
    tempo: 'cerca de 5 minutos',
    revisado: '2026-11-03',
    keywords: ['Junta Comercial', 'Santa Catarina', 'Florianópolis', 'REGIN', 'Requerimento Universal', 'Assinador web', 'contrato social', 'alteração contratual', 'abertura de empresa', 'assinatura digital'],
    before: [
      `Conta <strong>gov.br</strong> nível prata ou ouro, com a <strong>verificação em duas etapas</strong> ativada. ${GOVBR_NIVEL}`,
      'O app <strong>gov.br</strong> instalado e logado no celular',
      'O <strong>número do protocolo ou do requerimento</strong> que a EC enviou para você',
      'Computador com navegador atualizado',
    ],
    steps: [
      {
        title: 'Entre no Requerimento Universal',
        text: 'Acesse o <a href="http://regin.jucesc.sc.gov.br/RequerimentoUniversal/NovoLogin.aspx" target="_blank" rel="noopener">Requerimento Universal da Jucesc</a> e entre com a sua conta <strong>gov.br</strong>.',
        alt: 'Tela de login do Requerimento Universal da Jucesc',
      },
      {
        title: 'Abra o Assinador web',
        text: 'Já logado, selecione a opção <strong>Assinador web</strong>.',
        alt: 'Opção Assinador web no portal da Jucesc',
      },
      {
        title: 'Encontre o processo',
        text: 'Em <strong>Instituição</strong>, escolha <em>Junta Comercial do Estado de Santa Catarina</em>. Em <strong>Nr. Protocolo / Nr. Requerimento</strong>, digite o número que enviamos.',
        alt: 'Campos Instituição e Nr. Protocolo / Nr. Requerimento no Assinador web',
      },
      {
        title: 'Clique no lápis ao lado do seu nome',
        text: 'Aparece a lista de assinantes do documento. Clique no <strong>lápis</strong> na linha com o seu nome.',
        alt: 'Lista de assinantes com o ícone de lápis',
        note: 'Seu nome não aparece na lista? Avise a gente: precisamos incluir você como assinante no requerimento.',
      },
      {
        title: 'Escolha o gov.br e assine',
        text: 'Clique no <strong>ícone do gov.br</strong> e depois em <strong>Assinar</strong>. Se o sistema pedir, entre de novo com seu CPF e senha do gov.br.',
        alt: 'Opção de assinatura com gov.br no Assinador web',
      },
      {
        title: 'Autorize com o código do app',
        text: 'No app gov.br do celular, gere o <strong>código de acesso</strong>. Digite o código no campo do assinador e clique em <strong>Autorizar</strong>.',
        alt: 'Campo para o código do gov.br e botão Autorizar',
      },
      {
        title: 'Confira e avise a EC',
        text: 'O lápis ao lado do seu nome fica <strong>verde</strong> quando a assinatura está feita. Mande uma mensagem para a gente: quando todos assinarem, enviamos o processo para a Jucesc.',
      },
    ],
    extra: {
      title: 'Ative a verificação em duas etapas antes',
      text: `Desde 2025, a assinatura gov.br nas Juntas Comerciais exige a verificação em duas etapas. ${GOVBR_2FA} No <strong>registro automático</strong>, a Jucesc só aceita a assinatura do próprio sócio ou titular, sem procurador.`,
    },
    fonte: {
      label: 'Jucesc · Assinatura gov.br pelo Portal Assinador',
      href: 'https://atendimento.jucesc.sc.gov.br/help/pt-br/72-consulta-de-viabilidade-dbe-requerimento-eletronico-e-demais-procedimentos-de-sistema/408-assinatura-gov-br-pelo-portal-assinador-da-jucesc',
    },
  },
  {
    slug: 'assinatura-processo-jucemg',
    uf: 'mg',
    tag: 'Jucemg · MG',
    title: 'Como assinar um processo na Jucemg',
    seoTitle: 'Como assinar processo na Jucemg (MG) pelo gov.br | Passo a passo EC Consultoria',
    description:
      'Passo a passo para o sócio ou administrador assinar com gov.br, no Registro Digital da Jucemg, o processo de abertura, alteração ou baixa de empresa em MG.',
    lede:
      'Quando montamos a abertura, alteração ou baixa da sua empresa na Junta Comercial de Minas Gerais, cada sócio ou administrador assina os documentos no Registro Digital da Jucemg.',
    tempo: 'cerca de 5 minutos',
    revisado: '2026-11-05',
    keywords: ['Junta Comercial', 'Minas Gerais', 'Belo Horizonte', 'Registro Digital', 'Portal de Serviços', 'contrato social', 'alteração contratual', 'abertura de empresa', 'assinatura digital'],
    before: [
      `Conta <strong>gov.br</strong> nível prata ou ouro, com a <strong>verificação em duas etapas</strong> ativada. ${GOVBR_NIVEL}`,
      'O app <strong>gov.br</strong> instalado e logado no celular',
      'O <strong>número do protocolo do Registro Digital</strong> (a Jucemg manda por e-mail e a EC também envia para você)',
      'Computador com Chrome ou Firefox',
    ],
    steps: [
      {
        title: 'Abra o assinador da Jucemg',
        text: 'Acesse <a href="https://www.jucemg.mg.gov.br/" target="_blank" rel="noopener">www.jucemg.mg.gov.br</a> e clique em <strong>Assinar documentos</strong>. Se preferir, vá direto ao <a href="https://portalservicos.jucemg.mg.gov.br/registroDigital/pages/assinador/assinador.jsf" target="_blank" rel="noopener">assinador do Registro Digital</a>.',
        alt: 'Site da Jucemg com o atalho Assinar documentos',
      },
      {
        title: 'Entre com o gov.br',
        text: 'Clique em <strong>Entrar com GOV.BR</strong> e faça login com seu CPF e senha.',
        alt: 'Tela de login do Portal de Serviços da Jucemg com o botão Entrar com GOV.BR',
      },
      {
        title: 'Pesquise o protocolo',
        text: 'Em <strong>Número do protocolo do Registro Digital</strong>, digite o número que enviamos e clique em <strong>Pesquisar</strong>.',
        alt: 'Campo Número do protocolo do Registro Digital e botão Pesquisar',
      },
      {
        title: 'Confira os documentos',
        text: 'Abra e leia os documentos do processo (contrato, alteração ou distrato) antes de assinar.',
        alt: 'Lista de documentos do processo no Registro Digital',
      },
      {
        title: 'Escolha a assinatura gov.br',
        text: 'Entre as opções de assinatura, escolha <strong>gov.br</strong>. Você vai para a página de assinatura do gov.br. Quem tem certificado digital (A1, A3 ou em nuvem) também pode usar.',
        alt: 'Opções de assinatura: certificado digital, certificado em nuvem e gov.br',
      },
      {
        title: 'Autorize com o código do app',
        text: 'Digite o <strong>código</strong> gerado no app gov.br do celular e confirme a assinatura.',
        alt: 'Página de assinatura do gov.br pedindo o código',
      },
      {
        title: 'Confira se falta algum documento',
        text: 'A Jucemg mostra quais assinaturas já foram feitas (<strong>Sim</strong>) e quais faltam (<strong>Não</strong>). Se houver mais de um documento, assine todos.',
        alt: 'Situação das assinaturas do processo',
      },
      {
        title: 'Avise a EC',
        text: 'Pronto. Mande uma mensagem para a gente: quando todos assinarem, enviamos o processo para a Jucemg e avisamos você do resultado.',
      },
    ],
    extra: {
      title: 'Ative a verificação em duas etapas antes',
      text: `Desde agosto de 2025, a Jucemg exige a verificação em duas etapas para assinar com gov.br. ${GOVBR_2FA} Atenção: se o processo precisar ser corrigido, as assinaturas são apagadas e <strong>todos assinam de novo</strong>.`,
    },
    fonte: {
      label: 'Jucemg · Certificado digital e assinatura gov.br',
      href: 'https://jucemg.mg.gov.br/pagina/180/certificado-digital',
    },
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
    revisado: '2026-10-06',
    keywords: ['e-CAC', 'ecac', 'procuração digital', 'procuração eletrônica', 'autorização de acesso', 'contador', 'Receita Federal', 'CPF', 'CNPJ'],
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
