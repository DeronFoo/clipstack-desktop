import type { ReactElement } from 'react'

export default function Header(): ReactElement {
  return (
    <header className="header">
      <h1 className="title">📋 ClipStack</h1>
      <p className="subtitle">Listening to your clipboard...</p>
    </header>
  )
}
