// 自動アップデート
const { updateElectronApp } = require('update-electron-app');
updateElectronApp();

// インストール時のショートカットなどの作成
if (require('electron-squirrel-startup')) {
  app.quit();
}

//
const { app, BrowserWindow, ipcMain } = require('electron')

const path = require('path')

console.log(app.getVersion())

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    ipcMain.handle('ping', async () => 'pong')
    ipcMain.handle('get-app-version', async () => app.getVersion())

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})