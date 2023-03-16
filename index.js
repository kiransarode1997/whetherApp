const { app, BrowserWindow } = require('electron');
const path = require('path');


const createWindow = () => {
  const win = new BrowserWindow({
    width: 650,
    height: 600,
    minHeight: 500,
    minWidth: 500,
    maxWidth: 700,
    maxHeight: 700

  });

  win.loadFile(path.join(__dirname, 'index.html'));

};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'kiran') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

