'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

// Quit when all windows are closed
app.on('window-all-closed', function () {
  // Except on OS X
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// Initialize application
app.on('ready', function () {
  // Create browser window
  mainWindow = new BrowserWindow({width: 700, height: 650});

  // Load index.html
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Emitted when window is closed
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});
