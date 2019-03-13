import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/connect', label: 'Connect' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Ligature Design</a>
        </Link>
      </li>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link prefetch href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>
  </nav>
)

export default Nav
