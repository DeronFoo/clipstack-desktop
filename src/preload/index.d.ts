import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      readClipboard: () => string
      writeClipboard: (text: string) => void
    }
  }
}
