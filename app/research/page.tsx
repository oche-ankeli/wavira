import type { Metadata } from 'next'
import MotionRuntime from '../../components/MotionRuntime'
import { SiteFooter, SiteNav } from '../../components/SiteChrome'

export const metadata: Metadata = {
  title: 'Wavira Research Lab — Evaluation, benchmarks, and applied AI',
  description: 'The Wavira Research Lab investigates applied AI, evaluation, African language technologies, responsible systems, and low-resource environments.'
}

const focusAreas = [
  ['Real-task evaluation', 'Test systems where they will run, not only on clean proxies.'],
  ['Community expertise', 'Let local practitioners define quality, harm, and usefulness.'],
  ['Protected benchmarks', 'Use secure, refreshed tests that retain their value over time.'],
  ['Small + efficient AI', 'Measure quality alongside size, cost, latency, and access.'],
  ['African language technology', 'Build for multilingual and low-resource environments.'],
  ['Responsible deployment', 'Track reliability, bias, failure, and downstream impact.']
]

const researchMethods = [
  ['Start with the task', 'Define the decision, workflow, or interaction that matters.'],
  ['Bring in expertise', 'Use community and domain knowledge to shape the test.'],
  ['Measure the trade-offs', 'Report quality with cost, latency, size, and access.'],
  ['Learn after launch', 'Connect benchmark performance to what happens in practice.']
]

export default function ResearchPage() {
  return <main className="detail-page research-page">
    <MotionRuntime />
    <SiteNav />
    <section className="detail-hero research-hero section-pad"><div className="detail-hero-copy" data-aos="fade-up"><p className="eyebrow">Wavira — Research Lab</p><h1>Research that makes AI<br /><em>more useful, accountable, and real.</em></h1><p className="lede">We design better evaluations and turn useful findings into systems that work beyond the lab.</p><div className="detail-actions"><a className="button button-lime" href="mailto:hello@wavira.ai">Collaborate with us <span className="arrow-icon" aria-hidden="true" /></a><a className="text-link" href="/sautra">Explore Sautra Voice <span className="arrow-icon" aria-hidden="true" /></a></div></div><div className="lab-mark" data-aos="fade-left"><span>W</span><i /><i /><i /></div></section>

    <section className="detail-intro section-pad"><div className="section-kicker">The lab</div><div className="detail-split"><h2>Research inside<br /><em>an engineering practice.</em></h2><p>The lab creates questions for our engineers, evidence for our products, and methods for understanding whether systems work in the environments they are meant to serve.</p></div></section>

    <section className="research-methods section-pad"><div className="section-kicker">How we evaluate</div><div className="research-method-intro"><h2>Evidence<br /><em>with context.</em></h2><p>Our evaluation practice follows the system from the task it must perform to the impact it has after deployment.</p></div><div className="research-method-grid">{researchMethods.map(([title, desc]) => <article key={title}><span className="method-marker" aria-hidden="true" /><h3>{title}</h3><p>{desc}</p></article>)}</div></section>

    <section className="research-focus section-pad"><div className="section-kicker">Research areas</div><div className="focus-grid">{focusAreas.map(([title, desc]) => <article className="focus-card" key={title} data-aos="fade-up"><span className="focus-marker" aria-hidden="true" /><h3>{title}</h3><p>{desc}</p></article>)}</div></section>

    <section className="outputs section-pad"><div className="section-kicker">Outputs + collaboration</div><div className="outputs-panel"><div><h2>Evidence<br /><em>over theatre.</em></h2><p>Publications, benchmark reports, datasets, and collaboration notes will live here as they are ready to share.</p></div><div className="output-list"><span>Publications <b>Coming soon</b></span><span>Benchmarks <b>In development</b></span><span>Collaborations <b>Open to discussion</b></span></div></div></section>

    <SiteFooter />
  </main>
}
