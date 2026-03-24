import type { ReactElement } from 'react'

interface HeaderProps {
  onClearAll: () => void
}

export default function Header({ onClearAll }: HeaderProps): ReactElement {
  return (
    <header className="header">
      <div className="header-top">
        <h1 className="title">
          📋 ClipStack{' '}
          <span
            style={{
              background: '#0078D4',
              padding: '2px 6px',
              borderRadius: '4px',
              fontSize: '12px',
              verticalAlign: 'middle'
            }}
          >
            v1.1.0
          </span>
        </h1>
        <button className="clear-btn" onClick={onClearAll}>
          🗑️ Clear All Clips
        </button>
      </div>
      <p className="subtitle">Listening to your clipboard...</p>
    </header>
  )
}
