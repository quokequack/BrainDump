import backupRecoveryOracle from './views/college/4p/banco-de-dados/backup-recovery-oracle.html?raw'
import drpOracle from './views/college/4p/banco-de-dados/drp-oracle.html?raw'
import lgpdocApresentacao from './views/college/4p/direito-digital/LGPDoc_apresentacao.html?raw'
import segurancaBancoDados from './views/college/4p/banco-de-dados/seguranca-banco-dados.html?raw'
import senhasRecursosProfile from './views/college/4p/banco-de-dados/senhas-recursos-profile.html?raw'
import paradoxoIaEngenharia from './views/college/4p/gestao-de-pessoas-em-ti/paradoxo_ia_engenharia.html?raw'
import apresentacaoAcessibilidade from './views/college/4p/ihc/apresentacao_acessibilidade.html?raw'
import ihcPrototipo from './views/college/4p/ihc/ihc-prototipo/index.html?raw'
import knowlyAlertaTipografia from './views/college/4p/ihc/ihc-prototipo/img/alerta-tipografia.png?url'
import knowlyAttendanceBadge from './views/college/4p/ihc/ihc-prototipo/img/attendance-badge.png?url'
import knowlyBlurEffect from './views/college/4p/ihc/ihc-prototipo/img/blur-effect.png?url'
import knowlyBlurrEffect from './views/college/4p/ihc/ihc-prototipo/img/blurr-effect(2).png?url'
import knowlyCorrect from './views/college/4p/ihc/ihc-prototipo/img/correct.png?url'
import knowlyFireBadge from './views/college/4p/ihc/ihc-prototipo/img/fire-badge.png?url'
import knowlyMedal from './views/college/4p/ihc/ihc-prototipo/img/medal.png?url'
import knowlyPodio from './views/college/4p/ihc/ihc-prototipo/img/podio.png?url'
import knowlyStar from './views/college/4p/ihc/ihc-prototipo/img/star.png?url'
import knowlyStreak from './views/college/4p/ihc/ihc-prototipo/img/streak.png?url'
import knowlyTrophy from './views/college/4p/ihc/ihc-prototipo/img/trophy 1.png?url'

export type CategorySlug = 'trabalho' | 'estudos' | 'escola'

export interface Category {
  slug: CategorySlug
  title: string
  description: string
}

export interface Post {
  slug: string
  title: string
  description: string
  html: string
}

export interface Subject {
  slug: string
  title: string
  category: CategorySlug
  period: string
  description: string
  posts: Post[]
}

function resolveAssetUrls(html: string, assets: Array<[string, string]>) {
  return assets.reduce((currentHtml, asset) => currentHtml.split(asset[0]).join(asset[1]), html)
}

const ihcPrototipoHtml = resolveAssetUrls(ihcPrototipo, [
  ['img/alerta-tipografia.png', knowlyAlertaTipografia],
  ['img/attendance-badge.png', knowlyAttendanceBadge],
  ['img/blur-effect.png', knowlyBlurEffect],
  ['img/blurr-effect(2).png', knowlyBlurrEffect],
  ['img/correct.png', knowlyCorrect],
  ['img/fire-badge.png', knowlyFireBadge],
  ['img/medal.png', knowlyMedal],
  ['img/podio.png', knowlyPodio],
  ['img/star.png', knowlyStar],
  ['img/streak.png', knowlyStreak],
  ['img/trophy%201.png', knowlyTrophy],
])

export const categories: Category[] = [
  {
    slug: 'trabalho',
    title: 'Trabalho',
    description: 'Registros práticos, decisões e aprendizados de rotina profissional.',
  },
  {
    slug: 'estudos',
    title: 'Estudos',
    description: 'Notas gerais, revisões e materiais de apoio para aprendizado contínuo.',
  },
  {
    slug: 'escola',
    title: 'Escola',
    description: 'Disciplinas organizadas por período e conteúdo acadêmico.',
  },
]

export const subjects: Subject[] = [
  {
    slug: 'direito-digital',
    title: 'Direito Digital',
    category: 'estudos',
    period: '4o periodo',
    description: 'Materiais sobre direito, privacidade e protecao de dados no ambiente digital.',
    posts: [
      {
        slug: 'lgpdoc-apresentacao',
        title: 'LGPDoc',
        description: 'Apresentacao da plataforma de conformidade documental com a LGPD.',
        html: lgpdocApresentacao,
      },
    ],
  },
  {
    slug: 'banco-de-dados',
    title: 'Banco de Dados',
    category: 'escola',
    period: '4o periodo',
    description: 'Materiais sobre Oracle, seguranca, backup, recovery e administracao.',
    posts: [
      {
        slug: 'backup-recovery-oracle',
        title: 'Backup e Recovery Oracle',
        description: 'Conceitos e praticas de recuperacao em Oracle.',
        html: backupRecoveryOracle,
      },
      {
        slug: 'drp-oracle',
        title: 'DRP Oracle',
        description: 'Plano de recuperacao de desastre aplicado a Oracle.',
        html: drpOracle,
      },
      {
        slug: 'seguranca-banco-dados',
        title: 'Seguranca em Banco de Dados',
        description: 'Controles e boas praticas para proteger bancos de dados.',
        html: segurancaBancoDados,
      },
      {
        slug: 'senhas-recursos-profile',
        title: 'Senhas, Recursos e Profile',
        description: 'Politicas de senhas, limites de recursos e profiles.',
        html: senhasRecursosProfile,
      },
    ],
  },
  {
    slug: 'gestao-de-pessoas-em-ti',
    title: 'Gestao de Pessoas em TI',
    category: 'escola',
    period: '4o periodo',
    description: 'Materiais sobre pessoas, carreiras, lideranca e transformacoes no trabalho em tecnologia.',
    posts: [
      {
        slug: 'paradoxo-ia-engenharia',
        title: 'O Paradoxo da IA na Engenharia de Software',
        description: 'Impactos da IA na formacao, carreira e organizacao do trabalho em engenharia de software.',
        html: paradoxoIaEngenharia,
      },
    ],
  },
  {
    slug: 'ihc',
    title: 'IHC',
    category: 'escola',
    period: '4o periodo',
    description: 'Materiais sobre Interacao Humano-Computador.',
    posts: [
      {
        slug: 'apresentacao-acessibilidade',
        title: 'Avaliacao de Acessibilidade Web com WCAG 2.1',
        description: 'Avaliacao de acessibilidade da Ingresso.com com base nas diretrizes WCAG 2.1.',
        html: apresentacaoAcessibilidade,
      },
      {
        slug: 'ihc-prototipo',
        title: 'Knowly - Apresentacao IHC',
        description: 'Apresentacao do prototipo Knowly, com personas, cenarios, decisoes de design e avaliacao.',
        html: ihcPrototipoHtml,
      },
    ],
  },
]

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug)
}

export function getSubjectsByCategory(slug: string) {
  return subjects.filter((subject) => subject.category === slug)
}

export function getSubject(slug: string) {
  return subjects.find((subject) => subject.slug === slug)
}

export function getPost(subjectSlug: string, postSlug: string) {
  return getSubject(subjectSlug)?.posts.find((post) => post.slug === postSlug)
}
