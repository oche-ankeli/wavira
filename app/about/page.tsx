import type { Metadata } from 'next'
import MotionRuntime from '../../components/MotionRuntime'
import { SiteFooter, SiteNav } from '../../components/SiteChrome'

export const metadata: Metadata = {
  title: 'About Wavira — AI engineering and research',
  description: 'Wavira is an AI engineering and research company researching, evaluating, and building intelligent systems for real-world problems.'
}

const capabilities = [
  ['AI engineering', 'We develop machine learning systems, language technologies, agents, and applied AI for difficult real-world problems.'],
  ['Research + evaluation', 'We investigate how intelligent systems perform, design benchmarks, and evaluate them with communities and domain context in mind.'],
  ['Proprietary technology', 'We develop our own initiatives and products, including Sautra Voice for speech intelligence.'],
  ['Real-world practice', 'We care about the distance between a promising result and a system people can actually use and trust.']
]

export default function AboutPage() {
  return <main className="detail-page about-page">
    <MotionRuntime />
    <SiteNav />
    <section className="detail-hero section-pad"><div className="detail-hero-copy" data-aos="fade-up"><p className="eyebrow">Wavira — About</p><h1>Research deeply.<br /><em>Build what matters.</em></h1><p className="lede">Wavira is an AI engineering and research company. We research, engineer, evaluate, and build intelligent technology for real-world problems.</p><div className="detail-actions"><a className="button button-lime" href="/#contact">Work with us <span className="arrow-icon" aria-hidden="true" /></a><a className="text-link" href="/research">Meet the lab <span className="arrow-icon" aria-hidden="true" /></a></div></div><div className="about-mark" data-aos="fade-left"><span>W</span><small>Research / Engineering / Build</small></div></section>

    <section className="detail-intro section-pad"><div className="section-kicker">What Wavira is</div><div className="detail-split"><h2>One organisation.<br /><em>Several ways to make intelligence useful.</em></h2><p>We are not only a voice AI company, a software agency, or a detached research lab. We bring AI engineering, evaluation, product thinking, and research together so that technical work can move from difficult questions into systems with real-world value.</p></div></section>

    <section className="placeholder-image-section section-pad"><div className="placeholder-image-wrap about-image-frame" data-aos="fade-up"><img src="/assets/placeholders/team-collaboration.jpg" alt="African lab technician working in Uganda" /><span>Laboratory work / Uganda</span></div></section>

    <section className="about-capabilities section-pad"><div className="section-kicker">Our technical identity</div><div className="about-capability-grid">{capabilities.map(([title, desc]) => <article key={title} data-aos="fade-up"><span className="capability-marker" aria-hidden="true" /><h3>{title}</h3><p>{desc}</p></article>)}</div></section>

    <section className="about-grounding section-pad"><div className="section-kicker">How we think</div><div className="detail-split"><h2>Academic in our methods.<br /><em>Practical in our ambition.</em></h2><div><p>We stay close to current literature, core machine-learning and statistical methodologies, and the evidence needed to understand whether a system works.</p><p>We are young builders with deep research zeal: not interested in making tools for the sake of novelty, but in developing technology grounded in careful questions, strong evaluation, and the people and domains it is meant to serve.</p></div></div></section>

    <section className="team section-pad"><div className="section-kicker">The team</div><div className="team-intro"><h2>A small team<br /><em>with a research habit.</em></h2><p>Wavira is being built by engineers and researchers who care about technical depth, community-centred evaluation, and useful systems.</p></div><div className="team-grid"><article className="team-card"><div className="team-avatar founder-avatar team-photo"><img src="/assets/team/oche-ankeli.jpeg" alt="Oche Ankeli, Founder and CEO of Wavira" /></div><span className="team-role">Founder + CEO</span><h3>Oche Ankeli</h3><p>AI engineer, NLP researcher, and machine learning engineer working across community-centred AI evaluation, bias evaluation of LLMs, and research-led product development.</p><p>Experience includes funded community projects connected to Masakhane and Gates Foundation initiatives, collaborations with researchers across Mila, Stanford, McGill, and Microsoft Research Africa, and talks or accepted work across NeurIPS, EACL, LREC, Deep Learning Indaba, and AfriLang AI.</p></article><article className="team-card"><div className="team-avatar cto-avatar team-photo samuel-photo"><img src="/assets/team/samuel-babalola.jpeg" alt="Samuel Babalola, Co-founder and CTO of Wavira" /></div><span className="team-role">Co-founder + CTO</span><h3>Samuel Babalola</h3><p>AI researcher and engineer helping shape Wavira&apos;s technical direction, engineering practice, and research-to-system pipeline.</p><p>Samuel brings a research-grounded perspective to building dependable intelligent systems and turning ambitious technical ideas into working technology.</p></article></div></section>

    <section className="detail-callout section-pad"><div className="section-kicker">Build with us</div><h2>Good questions.<br /><em>Serious engineering.</em></h2><p>We are open to research collaborations, evaluation partnerships, Sautra Voice development, and technically ambitious projects grounded in real needs.</p><div className="detail-actions"><a className="button button-lime" href="mailto:hello@wavira.ai">Start a conversation <span className="arrow-icon" aria-hidden="true" /></a><a className="text-link" href="/sautra">Explore Sautra Voice <span className="arrow-icon" aria-hidden="true" /></a></div></section>

    <SiteFooter />
  </main>
}
