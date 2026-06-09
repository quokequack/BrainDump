import backupRecoveryOracle from './views/college/4p/banco-de-dados/backup-recovery-oracle.html?raw'
import drpOracle from './views/college/4p/banco-de-dados/drp-oracle.html?raw'
import segurancaBancoDados from './views/college/4p/banco-de-dados/seguranca-banco-dados.html?raw'
import senhasRecursosProfile from './views/college/4p/banco-de-dados/senhas-recursos-profile.html?raw'
import paradoxoIaEngenharia from './views/college/4p/gestao-de-pessoas-em-ti/paradoxo-ia-engenharia.html?raw'

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
    posts: [],
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
