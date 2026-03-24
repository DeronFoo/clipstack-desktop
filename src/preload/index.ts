import { contextBridge, clipboard } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

contextBridge.exposeInMainWorld('electron', electronAPI)

// Custom API to securely pass clipboard data to React
contextBridge.exposeInMainWorld('api', {
  readClipboard: () => clipboard.readText(),
  writeClipboard: (text: string) => clipboard.writeText(text)
})
