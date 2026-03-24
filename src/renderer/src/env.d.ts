/// <reference types="vite/client" />

interface Window {
  api: {
    readClipboard: () => string
    writeClipboard: (text: string) => void
  }
}
