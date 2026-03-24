import type { ReactElement } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { motion } from 'framer-motion'

export interface Clip {
  id: number
  text: string
  timestamp: number
}

interface ClipItemProps {
  clip: Clip
  onCopy: (clip: Clip) => void
  index: number
  isCopied: boolean
}

export default function ClipItem({ clip, onCopy, index, isCopied }: ClipItemProps): ReactElement {
  const relativeTime = formatDistanceToNow(clip.timestamp, { addSuffix: true })

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 40, scale: 0.9 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`clip-card ${isCopied ? 'copied' : ''}`}
      onClick={() => onCopy(clip)}
      title="Click to copy back to clipboard"
    >
      <span className="clip-index">{index + 1}</span>
      <div className="clip-body">
        <p className="clip-text">{clip.text}</p>
        <span className="clip-time">Copied {relativeTime}</span>
      </div>
      <span className="clip-action">{isCopied ? '✓ Copied' : 'Click to copy'}</span>
    </motion.div>
  )
}
