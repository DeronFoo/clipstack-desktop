import { useState, useEffect, type ReactElement } from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import ClipItem, { type Clip } from './components/ClipItem'

export default function App(): ReactElement {
  const [clips, setClips] = useState<Clip[]>([])
  const [copiedId, setCopiedId] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      const currentText = window.api.readClipboard()

      setClips((prevClips) => {
        if (!currentText || (prevClips.length > 0 && prevClips[0].text === currentText)) {
          return prevClips
        }

        const newClip: Clip = { id: Date.now(), text: currentText, timestamp: Date.now() }
        return [newClip, ...prevClips].slice(0, 5)
      })
    }, 1000)

    return (): void => clearInterval(interval)
  }, [])

  const handleCopy = (clip: Clip): void => {
    window.api.writeClipboard(clip.text)
    setCopiedId(clip.id)
    setTimeout(() => setCopiedId(null), 1200)
  }

  return (
    <div className="container">
      <Header />

      <div className="clip-list">
        {clips.length === 0 && (
          <div className="empty-state">
            <span className="empty-icon">✂️</span>
            <p>Copy something to get started</p>
          </div>
        )}

        <AnimatePresence mode="popLayout">
          {clips.map((clip, index) => (
            <ClipItem
              key={clip.id}
              clip={clip}
              onCopy={handleCopy}
              index={index}
              isCopied={copiedId === clip.id}
            />
          ))}
        </AnimatePresence>
      </div>

      <footer className="footer">
        <span className="status-dot" />
        <span>Tracking {clips.length} / 5 clips</span>
      </footer>
    </div>
  )
}

