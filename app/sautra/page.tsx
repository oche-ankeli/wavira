import type { Metadata } from 'next'
import MotionRuntime from '../../components/MotionRuntime'
import { SiteFooter, SiteNav } from '../../components/SiteChrome'

export const metadata: Metadata = {
  title: 'Sautra Voice — Wavira speech intelligence',
  description: 'Sautra Voice is Wavira’s dedicated speech intelligence initiative for African languages and other underserved linguistic environments.'
}

const systems = [
  ['ASR', 'Understand local speech, accents, and code-switching.'],
  ['TTS', 'Generate natural, expressive speech across languages.'],
  ['S2S', 'Carry meaning across languages without losing context.'],
  ['Conversational', 'Build voice agents for practical workflows.']
]

const applications = [
  ['Health', 'Triage and referral support.', 'A caller explains a concern in their own language.'],
  ['Education', 'Learning and teacher support.', 'A learner asks a question by voice.'],
  ['Public services', 'Service and information access.', 'A resident asks what to do next.'],
  ['Field operations', 'Frontline workflows and support.', 'A worker records or retrieves information hands-free.']
]

export default function SautraPage() {
  return <main className="detail-page sautra-page">
    <MotionRuntime />
    <SiteNav />
    <section className="detail-hero sautra-hero section-pad">
      <div className="detail-hero-copy" data-aos="fade-up"><p className="eyebrow">Wavira — Sautra Voice</p><h1>Sautra Voice<br /><em>closer to reality.</em></h1><p className="sautra-tagline">Speech intelligence for every voice.</p><p className="lede">Sautra Voice is Wavira&apos;s dedicated speech and language technology initiative, focused on African languages and other underserved linguistic environments.</p><div className="detail-actions"><a className="button button-lime" href="mailto:hello@wavira.ai">Talk about Sautra Voice <span className="arrow-icon" aria-hidden="true" /></a><a className="text-link" href="/research">Explore the lab <span className="arrow-icon" aria-hidden="true" /></a></div></div>
      <div className="sautra-mark" data-aos="fade-left"><div className="sautra-mark-core">S</div><div className="sautra-ring ring-one" /><div className="sautra-ring ring-two" /><span className="sautra-label label-top">speech</span><span className="sautra-label label-right">language</span><span className="sautra-label label-bottom">context</span></div>
    </section>

    <section className="detail-intro section-pad"><div className="section-kicker">The initiative</div><div className="detail-split"><h2>Speech models for<br /><em>real-world use.</em></h2><p>Sautra Voice develops African language speech technology that is useful under real constraints: different accents, mixed languages, noisy audio, limited connectivity, and limited compute.</p></div></section>

    <section className="sautra-product-band section-pad"><div><span className="sautra-band-label">The product layer</span><h2>Listen. Understand.<br /><em>Respond.</em></h2></div><p>Sautra Voice brings ASR, TTS, speech-to-speech, and conversational systems into one focused product direction—designed to move from research into deployable tools.</p></section>

    <section className="sautra-systems section-pad"><div className="section-kicker">Technical direction</div><div className="system-grid">{systems.map(([name, desc]) => <article className="system-card" key={name} data-aos="fade-up"><span className="system-marker" aria-hidden="true" /><h3>{name}</h3><p>{desc}</p></article>)}</div></section>

    <section className="sautra-approach section-pad"><div className="section-kicker">How we build</div><div className="detail-split"><h2>Models shaped by<br /><em>the people who use them.</em></h2><p>Community knowledge guides data, evaluation, error analysis, and the conditions each model must survive.</p></div><div className="sautra-principles"><article><span className="principle-marker" aria-hidden="true" /><h3>Community knowledge</h3><p>Local expertise defines quality and harm.</p></article><article><span className="principle-marker" aria-hidden="true" /><h3>Real deployment</h3><p>Low bandwidth, noise, and limited compute are part of the brief.</p></article><article><span className="principle-marker" aria-hidden="true" /><h3>Small + efficient</h3><p>Quality has to justify size, cost, and energy.</p></article><article><span className="principle-marker" aria-hidden="true" /><h3>Evaluation first</h3><p>Real tasks and human judgement guide each release.</p></article></div></section>

    <section className="sautra-domains section-pad"><div className="section-kicker">Sautra Voice in practice</div><div className="domain-intro"><h2>Voice that<br /><em>closes a gap.</em></h2><p>We focus on workflows where speech is the natural interface and local-language performance can change access or capacity.</p></div><div className="domain-grid">{applications.map(([name, target, scenario]) => <article className="domain-card" key={name} data-aos="fade-up"><span className="domain-marker" aria-hidden="true" /><h3>{name}</h3><div><b>Use</b><p>{target}</p></div><div><b>Scenario</b><p>{scenario}</p></div></article>)}</div></section>

    <section className="detail-callout section-pad"><div className="section-kicker">The next releases</div><h2>New Sautra Voice<br /><em>models are on the way.</em></h2><p>We are preparing future versions of our speech models with evaluation built around real use, local expertise, and deployment constraints. Companies, researchers, and organisations interested in partnering on evaluation, efficient deployment, or domain-specific voice systems can start a conversation with us.</p><div className="detail-actions"><a className="button button-lime" href="mailto:hello@wavira.ai">Partner with Sautra Voice <span className="arrow-icon" aria-hidden="true" /></a><a className="text-link" href="/research">See our research approach <span className="arrow-icon" aria-hidden="true" /></a></div></section>

    <SiteFooter />
  </main>
}
