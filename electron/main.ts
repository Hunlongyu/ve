import { join } from 'path'
import { app, BrowserWindow } from 'electron'

const preload = join(__dirname, '../preload/index.js')

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'

app.whenReady().then(() => {
  new BrowserWindow({
    webPreferences: {
      preload,
      nodeIntegration: true,
      contextIsolation: false
    }
  }).loadURL('http://127.0.0.1:5173')
})
