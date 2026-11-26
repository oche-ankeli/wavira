'use client'

import { useEffect, useState } from 'react'

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <header className={scrolled ? 'nav scrolled' : 'nav'}>
    <a className="logo" href="/">Wavira<span className="logo-dot">·</span></a>
    <nav className={menu ? 'nav-links open' : 'nav-links'}>
      <a href="/#platform">What we do</a><a href="/sautra">Sautra Voice</a><a href="/research">Research</a><a href="/about">About</a>
      <a className="nav-cta" href="/#contact">Work with us <span className="arrow-icon" aria-hidden="true" /></a>
    </nav>
    <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Toggle menu"><i /><i /></button>
  </header>
}

export function SiteFooter() {
  return <footer className="footer section-pad">
    <div className="footer-top">
      <a className="logo" href="/">Wavira<span className="logo-dot">·</span></a>
      <div className="footer-motto"><p>Intelligence grounded<br />in reality.</p></div>
      <nav className="footer-links" aria-label="Footer navigation">
        <a href="/#platform">What we do</a><a href="/sautra">Sautra Voice</a><a href="/research">Research</a><a href="/about">About</a><a href="/#contact">Contact</a>
      </nav>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Wavira AI</span><span>Research. Engineer. Build.</span><span>Everywhere</span></div>
  </footer>
}
