import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BadgeCheck, BarChart, Bot, Cpu, HardHat, ShieldCheck, Wrench, CircleDollarSign, Microscope, Scissors, Truck } from 'lucide-react';

export const navLinks = [
  { name: 'Início', href: '/' },
  { name: 'Soluções', href: '/solucoes' },
  { name: 'Clientes e Parceiros', href: '/clientes-e-parceiros' },
  { name: 'Sobre a ACN', href: '/sobre' },
  { name: 'Contato', href: '/contato' },
];

export const solutionLinks = [
  { name: 'Torqueamento Industrial', href: '/solucoes/torqueamento-industrial' },
  { name: 'Tensionamento de Parafusos', href: '/solucoes/tensionamento-de-parafusos' },
  { name: 'Teste Hidrostático', href: '/solucoes/teste-hidrostatico' },
  { name: 'Corte a Frio de Tubulações', href: '/solucoes/corte-a-frio-de-tubulacoes' },
  { name: 'Locação e Venda de Equipamentos', href: '/solucoes/locacao-e-venda-de-equipamentos' },
  { name: 'Manutenção de Ferramentas de Torque', href: '/solucoes/manutencao-de-ferramentas-de-torque' },
];

export const contactDetails = {
  address: 'Rua Antonio Moreira, 37 – Vila Nova (Surui), Magé – RJ – CEP 25.922-372',
  phone: '+55 (21) 96430-2781',
  phoneHref: 'tel:+5521964302781',
  whatsapp: 'https://wa.me/5521964302781',
  email: 'comercial@acnmaquinas.com.br',
  emailHref: 'mailto:comercial@acnmaquinas.com.br',
  hours: 'Segunda a Sexta, 8h às 17h',
};

export const trustBadges = [
  { text: 'Confiabilidade' },
  { text: 'Caráter' },
  { text: 'Dedicação' },
  { text: 'Dinamismo' },
];

export const differentiators = [
  {
    icon: Cpu,
    title: 'Tecnologia de Ponta',
    description: 'Equipamentos modernos que garantem precisão e eficiência em todas as operações.',
  },
  {
    icon: HardHat,
    title: 'Equipe Qualificada',
    description: 'Profissionais especializados com mais de 10 anos de experiência no setor de óleo e gás.',
  },
  {
    icon: ShieldCheck,
    title: 'Compromisso com Segurança',
    description: 'Serviços 100% conformes com a legislação, com emissão de laudos e validação técnica.',
  },
  {
    icon: Bot,
    title: 'Atendimento Personalizado',
    description: 'Desenvolvemos soluções sob medida para as necessidades específicas de cada projeto.',
  },
];

const findImage = (id: string): ImagePlaceholder => {
    const image = PlaceHolderImages.find(img => img.id === id);
    if (!image) {
        // Fallback to a default image if not found
        return {
            id: 'fallback',
            description: 'Fallback image',
            imageUrl: 'https://picsum.photos/seed/fallback/800/600',
            imageHint: 'placeholder'
        };
    }
    return image;
};

export const services = [
  {
    id: 'torqueamento-industrial',
    name: 'Torqueamento Industrial',
    image: findImage('service-torqueamento'),
    description: 'Garanta a vedação perfeita e a integridade dos seus ativos com nosso serviço de torqueamento controlado de alta precisão.',
    cta: 'Agendar serviço de torqueamento',
    content: {
      opening: 'Falhas em uniões flangeadas podem causar vazamentos, paradas não programadas e sérios riscos de segurança. Nosso serviço de torqueamento industrial utiliza equipamentos pneumáticos e elétricos de última geração para garantir o aperto controlado e preciso de parafusos, eliminando esses riscos e assegurando a máxima eficiência da sua planta.',
      applications: [
        { title: 'Redução de Downtime', description: 'Aplicação de torque preciso e rápido, minimizando o tempo de parada para manutenção.' },
        { title: 'Segurança Operacional', description: 'Elimina vazamentos e falhas de juntas, prevenindo acidentes e danos ambientais.' },
        { title: 'Rastreabilidade', description: 'Fornecemos relatórios detalhados de torque para conformidade e controle de qualidade.' },
      ],
      specs: 'Utilizamos máquinas de torque com encaixe para links de até 41.882 Nm, além de soquetes especiais para locais de difícil acesso, garantindo a vedação correta sem danificar estojos ou porcas.',
      faq: [
        { q: 'Qual a vantagem do torqueamento controlado?', a: 'Garante a aplicação da força exata no parafuso, evitando sobrecarga ou aperto insuficiente, o que previne falhas e aumenta a vida útil do equipamento.' },
        { q: 'Vocês emitem certificado do serviço?', a: 'Sim, todos os nossos serviços são acompanhados de laudos técnicos e certificados de calibração dos equipamentos utilizados.' },
        { q: 'Atuam em espaços confinados?', a: 'Sim, possuímos equipamentos e equipes especializadas para atuar com segurança e eficiência em espaços de acesso restrito.' },
      ],
    },
  },
  {
    id: 'tensionamento-de-parafusos',
    name: 'Tensionamento de Parafusos',
    image: findImage('service-tensionamento'),
    description: 'Obtenha controle de carga superior e uniformidade em flanges críticos através do tensionamento axial de parafusos.',
    cta: 'Falar com um engenheiro',
    content: {
      opening: 'Em aplicações críticas onde a distribuição uniforme da carga é vital, o tensionamento de parafusos é a solução superior. Ao invés de girar a porca, aplicamos uma força axial direta no estojo, garantindo uma carga precisa e uniforme em todos os parafusos simultaneamente.',
      applications: [
        { title: 'Uniformidade de Carga', description: 'Ideal para flanges críticos, trocadores de calor e reatores, onde a vedação uniforme é essencial.' },
        { title: 'Eliminação de Stress Torsional', description: 'Como não há rotação da porca sob carga, o estresse de torção e o atrito são eliminados.' },
        { title: 'Precisão e Repetibilidade', description: 'Oferece o método mais preciso de controle de carga, com alta repetibilidade entre parafusos.' },
      ],
      specs: 'Nossos sistemas de tensionamento são aplicáveis a uma vasta gama de diâmetros de parafusos e classes de flanges, seguindo as normas ASME e recomendações do fabricante.',
      faq: [
        { q: 'Quando devo escolher tensionamento em vez de torqueamento?', a: 'Tensionamento é preferível para juntas críticas, múltiplos parafusos (como flanges), e quando a precisão da carga é o fator mais importante. Torqueamento é mais versátil para aplicações gerais.' },
        { q: 'É possível tensionar apenas um parafuso?', a: 'Embora o ideal seja tensionar múltiplos parafusos simultaneamente (geralmente 50% ou 100% dos parafusos de um flange) para garantir uniformidade, o processo pode ser adaptado.' },
        { q: 'Qual a precisão do tensionamento?', a: 'O tensionamento axial direto permite uma precisão de carga tipicamente na ordem de ±5%, superior ao torqueamento.' },
      ],
    },
  },
  {
    id: 'teste-hidrostatico',
    name: 'Teste Hidrostático',
    image: findImage('service-hidrostatico'),
    description: 'Verifique a integridade estrutural e a estanqueidade de dutos, vasos de pressão e outros componentes com nossos testes hidrostáticos.',
    cta: 'Solicitar orçamento para teste hidrostático',
    content: {
      opening: 'Vazamentos ou falhas estruturais em sistemas pressurizados representam um risco inaceitável. O teste hidrostático é um método essencial para validar a integridade de equipamentos novos ou após reparos, pressurizando o sistema com água para detectar vazamentos e garantir que ele suporte a pressão de operação com segurança.',
      applications: [
        { title: 'Garantia de Integridade', description: 'Confirma que vasos de pressão, tubulações e mangueiras estão livres de vazamentos e defeitos estruturais.' },
        { title: 'Conformidade com Normas', description: 'Realizamos testes seguindo rigorosamente as normas aplicáveis (ASME, API, NR-13) para garantir a conformidade regulatória.' },
        { title: 'Relatórios Detalhados', description: 'Emitimos laudos e relatórios completos, com gráficos de pressão x tempo, para sua documentação e rastreabilidade.' },
      ],
      specs: 'Possuímos bombas de alta pressão e sistemas de medição digital para realizar testes em uma ampla faixa de pressões, com monitoramento em tempo real e registro de dados preciso.',
      faq: [
        { q: 'Qual fluido é usado no teste?', a: 'Geralmente utilizamos água, mas outros fluidos podem ser empregados dependendo da compatibilidade com o sistema testado. A água é preferida por ser incompressível e segura.' },
        { q: 'O teste pode danificar meu equipamento?', a: 'O teste é realizado de forma controlada e a pressão nunca excede os limites de projeto do equipamento, tornando-o um método seguro quando executado por profissionais qualificados.' },
        { q: 'Qual a duração de um teste hidrostático?', a: 'A duração varia conforme a norma e o volume do sistema, mas geralmente envolve um período de pressurização, estabilização e manutenção da pressão por um tempo determinado para verificar a estanqueidade.' },
      ],
    },
  },
  {
    id: 'corte-a-frio-de-tubulacoes',
    name: 'Corte a Frio de Tubulações',
    image: findImage('service-corte-a-frio'),
    description: 'Execute cortes e biselamento de tubulações com alta precisão e segurança, sem gerar faíscas ou calor, ideal para ambientes com risco de explosão.',
    cta: 'Planejar intervenção de corte',
    content: {
      opening: 'Em ambientes offshore ou industriais com presença de inflamáveis, métodos de corte a quente são inviáveis. Nossa solução de corte a frio utiliza máquinas-ferramenta portáteis que cortam e biselam tubos com precisão milimétrica, sem gerar faíscas, calor ou zona afetada termicamente (ZAT).',
      applications: [
        { title: 'Segurança Máxima', description: 'Processo intrinsecamente seguro para atmosferas explosivas (ATEX), eliminando a necessidade de paradas de produção extensas.' },
        { title: 'Precisão de Corte e Bisel', description: 'Produz um acabamento de superfície perfeito, pronto para soldagem, sem necessidade de preparação adicional.' },
        { title: 'Versatilidade', description: 'Aplicável a uma ampla gama de diâmetros e materiais de tubulação, incluindo aço carbono, inox e ligas especiais.' },
      ],
      specs: 'Nossos equipamentos são bipartidos, permitindo a montagem em qualquer ponto da linha, sem a necessidade de acesso às extremidades do tubo. Realizam operações de corte, biselamento em "V", "J" ou compostos, e faceamento.',
      faq: [
        { q: 'Este método deforma o tubo?', a: 'Não, o processo de usinagem a frio não introduz estresse ou deformação no material, mantendo a integridade dimensional e metalúrgica do tubo.' },
        { q: 'É necessário esvaziar a linha para o corte?', a: 'Sim, a linha deve ser drenada, limpa e isolada na seção onde o corte será realizado para garantir a segurança da operação.' },
        { q: 'Qual a espessura de parede que pode ser cortada?', a: 'Nossos equipamentos são capazes de cortar tubos com espessuras de parede significativas, variando conforme o diâmetro e o material. Consulte-nos sobre seu projeto específico.' },
      ],
    },
  },
  {
    id: 'locacao-e-venda-de-equipamentos',
    name: 'Locação e Venda de Equipamentos',
    image: findImage('equip-1'),
    description: 'Acesse uma vasta gama de ferramentas de torque e equipamentos industriais através de contratos flexíveis de locação ou aquisição definitiva.',
    cta: 'Ver disponibilidade de locação',
    content: {
      opening: 'Seja para uma parada programada, um projeto específico ou para complementar seu ferramental, a locação de equipamentos oferece o melhor custo-benefício. A ACN Máquinas dispõe de um amplo portfólio de equipamentos de ponta para locação e venda, com suporte técnico completo.',
      applications: [
        { title: 'Flexibilidade', description: 'Contratos de locação diários, semanais ou mensais, adaptados à duração do seu projeto.' },
        { title: 'Custo-Benefício', description: 'Evite o alto custo de aquisição e manutenção de equipamentos que não são de uso contínuo.' },
        { title: 'Disponibilidade Imediata', description: 'Amplo estoque de produtos para atender sua demanda com agilidade em diversas localidades.' },
      ],
      specs: 'Oferecemos para locação e venda: chaves de torque hidráulicas e pneumáticas, bombas, tensionadores, equipamentos para teste hidrostático, máquinas de corte a frio e muito mais. Todos os equipamentos são calibrados e certificados.',
      faq: [
        { q: 'Os equipamentos alugados vêm com certificado de calibração?', a: 'Sim, todos os nossos equipamentos de medição e aplicação de torque são fornecidos com certificados de calibração válidos.' },
        { q: 'Vocês oferecem suporte técnico para os equipamentos alugados?', a: 'Com certeza. Nossa equipe técnica está disponível para orientar na seleção e no uso correto de todas as ferramentas locadas.' },
        { q: 'Qual a área de atendimento para locação?', a: 'Atendemos todo o estado do Rio de Janeiro e regiões próximas com agilidade. Para outras localidades, consulte-nos sobre a viabilidade logística.' },
      ],
    },
  },
  {
    id: 'manutencao-de-ferramentas-de-torque',
    name: 'Manutenção de Ferramentas de Torque',
    image: findImage('service-manutencao'),
    description: 'Restaure a precisão e a confiabilidade de suas ferramentas de torque com nosso serviço especializado de análise, conserto e validação.',
    cta: 'Enviar ferramenta para avaliação',
    content: {
      opening: 'Ferramentas de torque descalibradas ou com defeito comprometem a segurança e a qualidade do seu trabalho. Nossa oficina especializada, com engenharia própria, oferece um serviço completo de manutenção para ferramentas hidráulicas, pneumáticas e elétricas, garantindo que elas operem conforme as especificações do fabricante.',
      applications: [
        { title: 'Análise Técnica Completa', description: 'Desmontagem e inspeção de todos os componentes para um diagnóstico preciso do problema.' },
        { title: 'Emissão de Laudo Técnico', description: 'Fornecemos um laudo detalhado com as condições da ferramenta e o orçamento para o reparo.' },
        { title: 'Teste e Validação', description: 'Após o conserto, a ferramenta passa por testes rigorosos e é devolvida com um novo certificado de calibração.' },
      ],
      specs: 'Somos especializados na manutenção de uma ampla variedade de marcas e modelos de chaves de torque e bombas. Utilizamos peças de reposição de alta qualidade e seguimos os procedimentos recomendados pelos fabricantes.',
      faq: [
        { q: 'Quanto tempo leva a manutenção?', a: 'O tempo de diagnóstico e reparo varia conforme a complexidade do defeito e a disponibilidade de peças. Nosso objetivo é fornecer um serviço ágil para minimizar o tempo que sua ferramenta fica parada.' },
        { q: 'Vocês oferecem garantia no serviço?', a: 'Sim, nossos serviços de manutenção possuem garantia, cobrindo as peças substituídas e a mão de obra empregada.' },
        { q: 'Como faço para enviar minha ferramenta?', a: 'Entre em contato conosco para receber as instruções de envio. Podemos coordenar a coleta dependendo da sua localidade.' },
      ],
    },
  },
];

export const equipmentForRental = [
  { name: 'Chave de Torque Hidráulica', image: findImage('equip-1') },
  { name: 'Tensionador de Parafuso', image: findImage('equip-2') },
  { name: 'Chave de Torque Pneumática', image: findImage('equip-3') },
  { name: 'Bomba para Teste Hidrostático', image: findImage('equip-4') },
];

export const clientLogos = [
    { name: 'Client 1', logo: findImage('client-logo-1') },
    { name: 'Client 2', logo: findImage('client-logo-2') },
    { name: 'Client 3', logo: findImage('client-logo-3') },
    { name: 'Client 4', logo: findImage('client-logo-4') },
    { name: 'Client 5', logo: findImage('client-logo-5') },
    { name: 'Client 6', logo: findImage('client-logo-6') },
];

export const aboutContent = {
  text: 'Com uma equipe técnica que acumula mais de 10 anos de experiência no setor, a ACN Máquinas nasceu com o propósito de ir além da simples prestação de serviços. Nosso foco está em prover soluções completas e criar sistemas de manutenção customizados que atendam às necessidades reais de cada cliente, gerando resultados mensuráveis em segurança e produtividade.',
  pillars: [
    { name: 'Confiabilidade' },
    { name: 'Caráter' },
    { name: 'Dedicação' },
    { name: 'Dinamismo' },
  ],
  mission: 'Prover soluções e criar sistemas de manutenção adequados às necessidades do cliente, gerando resultados e agregando valor ao seu negócio.',
  vision: 'Ser uma empresa de referência em serviços de torqueamento e manutenções industriais, reconhecida pelo compromisso com a segurança e os resultados dos nossos clientes.',
  values: ['Comprometimento', 'Ética', 'Flexibilidade', 'Lealdade', 'Responsabilidade', 'Autodesenvolvimento', 'Inovação', 'Melhoria Contínua'],
};
