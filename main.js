const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')
let win

function createWindow(){
	win = new BrowserWindow()
	win.setMenu(null);
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}))
	win.maximize();
	//win.webContents.openDevTools();
	
}
app.on('ready', createWindow)