'use client'

import MotionRuntime from '../components/MotionRuntime'
import { SiteFooter, SiteNav } from '../components/SiteChrome'

const stages = [
  ['Research', 'Investigate difficult problems and emerging AI systems.'],
  ['Engineer', 'Design models, software, and intelligent infrastructure.'],
  ['Evaluate', 'Benchmark performance in the environments that matter.'],
  ['Build', 'Turn technical insight into useful products and systems.']
]
const products = [
  ['AI Engineering', 'Efficient models, agents, and applied machine learning'], ['Evaluation + Benchmarking', 'Real-task benchmarks, human evaluations, and responsible AI'],
  ['African Language Technology', 'Multilingual, low-resource, and speech systems'], ['Proprietary Products', 'Our own tools, models, and technology initiatives']
]
const research = ['Low-resource speech', 'Multilingual AI', 'Agentic voice pipelines', 'Community-centered evaluation', 'Cultural, qualitative + quantitative metrics', 'Small + efficient deployment', 'Responsible AI']

function SignalWave({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 900 260" role="img" aria-label="Flowing voice signal">
    <defs><linearGradient id="signalGradient" x1="0" x2="1"><stop stopColor="#173b32" /><stop offset=".45" stopColor="#c7ff3d" /><stop offset=".75" stopColor="#62eee0" /><stop offset="1" stopColor="#173b32" /></linearGradient></defs>
    <path d="M-20 141 C85 75 125 211 220 139 S356 65 432 132 S548 210 622 127 S760 64 920 139" fill="none" stroke="url(#signalGradient)" strokeWidth="3" />
    <path d="M-20 158 C85 93 132 230 223 153 S355 87 436 149 S548 230 625 145 S766 90 920 158" fill="none" stroke="url(#signalGradient)" strokeOpacity=".34" strokeWidth="1.2" />
    <path d="M-20 121 C84 58 124 190 218 125 S355 41 429 112 S548 190 619 110 S760 39 920 121" fill="none" stroke="url(#signalGradient)" strokeOpacity=".2" strokeWidth="1" />
    <path d="M-20 177 C92 112 139 242 228 177 S358 105 438 170 S553 245 632 166 S770 111 920 178" fill="none" stroke="#62EEE0" strokeOpacity=".62" strokeWidth="1.4" />
    <path d="M0 140 H900" stroke="#f8f9f7" strokeOpacity=".12" strokeDasharray="2 10" />
    <circle cx="432" cy="132" r="5" fill="#c7ff3d" /><circle cx="432" cy="132" r="14" fill="none" stroke="#c7ff3d" strokeOpacity=".35" />
  </svg>
}

function NetworkDiagram() {
  return <svg className="network-diagram" viewBox="0 0 650 430" aria-label="Distributed network of voices">
    <defs><linearGradient id="networkGradient" x1="0" x2="1"><stop stopColor="#c7ff3d" /><stop offset="1" stopColor="#62eee0" /></linearGradient></defs>
    <g className="network-lines" stroke="url(#networkGradient)" strokeOpacity=".38" fill="none">
      <path d="M80 205 190 122 308 180 421 88 557 158 472 292 334 328 190 300 80 205Z" /><path d="M190 122 190 300M308 180 334 328M421 88 472 292M80 205 334 328M308 180 557 158M190 122 472 292" />
    </g>
    <g className="network-nodes" fill="#c7ff3d"><circle cx="80" cy="205" r="5" /><circle cx="190" cy="122" r="4" /><circle cx="308" cy="180" r="6" /><circle cx="421" cy="88" r="4" /><circle cx="557" cy="158" r="5" /><circle cx="472" cy="292" r="4" /><circle cx="334" cy="328" r="6" /><circle cx="190" cy="300" r="4" /></g>
    <g fill="#f8f9f7" fontFamily="Avenir Next, Helvetica Neue, sans-serif" fontSize="10"><text x="57" y="236">VOICE</text><text x="275" y="156">LANGUAGE</text><text x="430" y="67">CONTEXT</text><text x="463" y="323">COMMUNITY</text></g>
  </svg>
}

export default function Home() {
  return <main>
    <MotionRuntime />
    <SiteNav />

    <section className="hero section-pad" id="top">
      <div className="hero-bg" /><div className="hero-copy reveal">
        <p className="eyebrow">Wavira — AI engineering + research</p>
        <h1>Engineering intelligence<br /><em>into the real world.</em></h1>
        <p className="lede">We research, engineer, evaluate, and build intelligent systems and proprietary AI technology.</p>
        <div className="actions"><a className="button button-lime" href="#platform">What we do <span className="arrow-icon" aria-hidden="true" /></a><a className="text-link" href="#contact">Work with us <span className="arrow-icon" aria-hidden="true" /></a></div>
      </div>
      <div className="hero-art"><img className="hero-image" src="/assets/images/hero/hero-woman.jpeg" alt="A human profile surrounded by flowing voice signals" /></div>
      <a className="hero-explore" href="#platform">
        <span className="hero-explore-mark" aria-hidden="true"><i /><i /><i /></span>
        <span className="hero-explore-copy"><b>Explore Wavira</b><small>Research · products · impact</small></span>
      </a>
    </section>

    <section className="problem section-pad"><div className="section-kicker">The gap</div><div className="problem-grid" data-aos="fade-up"><h2>The real world<br /><em>is not a benchmark.</em></h2><div><p className="big-copy">AI systems have to work beyond the demo: across real users, complex environments, changing contexts, and the software people already rely on.</p><p className="muted">That takes more than an API call. It takes research, engineering, evaluation, and the discipline to build for what happens outside the lab.</p></div></div></section>

    <section className="approach section-pad"><div className="section-kicker">The Wavira approach</div><div className="approach-head" data-aos="fade-up"><div><h2>From research<br /><em>to real-world systems.</em></h2></div><div className="approach-aside"><p>One connected practice for moving from difficult questions to dependable technology.</p><div className="approach-index"><span>One practice</span><b>Research to system</b></div></div></div><div className="approach-visual" data-aos="fade-up"><figure><img src="/assets/placeholders/sautra-voice.jpg" alt="African women working on computers in Cameroon" /><figcaption>Research becomes useful when it meets lived context.</figcaption></figure><div className="approach-visual-note"><span>The Wavira loop</span><strong>Question · evidence · system</strong><p>We move deliberately between inquiry, engineering, evaluation, and the people who will use what we build.</p></div></div><div className="stage-line">{stages.map(([title, desc]) => <div className="stage" key={title}><div className="stage-marker" aria-hidden="true" /><h3>{title}</h3><p>{desc}</p></div>)}</div></section>

    <section className="platform section-pad" id="platform"><div className="section-kicker">What we do</div><div className="platform-head" data-aos="fade-up"><h2>Research-driven AI<br /><em>for the real world.</em></h2><p>Wavira brings AI engineering, rigorous evaluation, African language technologies, and proprietary products together under one technical practice.</p></div><div className="sautra-intro" data-aos="fade-up"><div className="sautra-intro-mark">S</div><div><span className="sautra-intro-label">Speech intelligence for every voice.</span><h3>Sautra Voice</h3><p>Our speech intelligence initiative for African languages and other underserved linguistic environments—built around community knowledge, rigorous evaluation, and efficient deployment.</p><a className="sautra-intro-link" href="/sautra">Explore Sautra Voice <span className="arrow-icon" aria-hidden="true" /></a></div></div><div className="platform-layout" data-aos="fade-up"><figure className="platform-image"><img src="/assets/placeholders/research-lab.jpg" alt="Deep Learning IndabaX Uganda attendees and trainers" /><figcaption>AI built with technical depth and collective knowledge.</figcaption><span className="platform-image-index">A technical practice</span></figure><div className="platform-capabilities">{products.map(([name, desc]) => <article className="platform-capability" key={name}><span className="capability-marker" aria-hidden="true" /><h3>{name}</h3><p>{desc}</p></article>)}</div></div></section>

    <section className="real-world section-pad"><div className="section-kicker">How we work</div><div className="real-grid" data-aos="fade-up"><h2>Technology that<br /><em>meets reality.</em></h2><div className="concepts">{['AI engineering', 'Evaluation', 'African language tech', 'Products'].map((x, i) => <div className="concept" key={x}><span className="concept-marker" aria-hidden="true" /><h3>{x}</h3><p>{['Deep technical work, from models to intelligent systems.', 'Benchmarks and human judgment, not just surface demos.', 'Research for multilingual and underserved environments.', 'Useful products shaped by evidence and real-world use.'][i]}</p></div>)}</div></div><div className="homepage-image-strip" data-aos="fade-up"><figure><img src="/assets/placeholders/sautra-voice.jpg" alt="African women working on computers in Cameroon" /><figcaption>Community-aware technical practice</figcaption></figure><figure><img src="/assets/placeholders/research-lab.jpg" alt="Deep Learning IndabaX Uganda attendees and trainers" /><figcaption>Research in context</figcaption></figure></div></section>

    <section className="research section-pad" id="research"><div className="research-visual research-image-panel" data-aos="fade-right"><img src="/assets/placeholders/team-collaboration.jpg" alt="African lab technician working in Uganda" /><div className="research-image-overlay"><span>Wavira Research Lab</span><strong>Evidence before spectacle.</strong></div><div className="research-image-caption">Laboratory work / Uganda</div></div><div className="research-copy" data-aos="fade-left"><div className="section-kicker">Wavira Research Lab</div><h2>Research that<br /><em>becomes capability.</em></h2><p>Our lab investigates applied AI, evaluation, African language technologies, and responsible systems—then turns useful findings into practical engineering work.</p><div className="research-list">{research.map(x => <span key={x}><i className="research-marker" aria-hidden="true" />{x}</span>)}</div><div className="evaluation-note"><span className="evaluation-label">Evaluation note</span><strong>Test the work people actually need.</strong><p>We design evaluations around real tasks, local languages, deployment conditions, and domain expertise—not just clean test sets. We also measure failure modes, cost, latency, and where a smaller model is enough.</p><div className="evaluation-metrics"><span>Real tasks</span><span>Local experts</span><span>Refreshed tests</span><span>Cost + latency</span></div></div><a className="research-lab-link" href="/research">Explore Wavira Research Lab <span className="arrow-icon" aria-hidden="true" /></a></div></section>

    <section className="global section-pad"><div className="global-copy" data-aos="fade-up"><div className="section-kicker">Global perspective</div><h2>Built for many contexts.<br /><em>Designed for a wider world.</em></h2><p>Our work begins with real-world constraints, including multilingual and underserved environments, but the ambition is global: useful technology that travels.</p><a className="text-link" href="#contact">Work with Wavira <span className="arrow-icon" aria-hidden="true" /></a></div><div className="global-art" data-aos="fade-left"><NetworkDiagram /><div className="network-caption"><span /> a distributed intelligence layer</div></div></section>

    <section className="vision" id="vision"><div className="section-kicker">The vision</div><h2 data-aos="fade-up">More useful intelligence.<br />More capable products.<br /><em>A more connected world.</em></h2></section>

    <section className="contact section-pad" id="contact"><div className="contact-mark" aria-hidden="true"><span /><span /><span /></div><div className="section-kicker">Start a conversation</div><h2 data-aos="fade-up">Research, engineer,<br /><em>and build with us.</em></h2><p>Bring us a difficult AI problem, a research question, an engineering challenge, or an idea for a new product.</p><div className="actions"><a className="button button-lime" href="mailto:hello@wavira.ai">Work with us <span className="arrow-icon" aria-hidden="true" /></a><a className="button button-outline" href="#research">Explore research <span className="arrow-icon" aria-hidden="true" /></a></div></section>

    <SiteFooter />
  </main>
}
