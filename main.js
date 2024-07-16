const { app, BrowserView, BrowserWindow } = require('electron');

app.whenReady().then(() => {
    var win = new BrowserWindow({ width: 800, height: 1500, title: "Real-time subtitles", icon: "icon.ico" });
    

    var view = new BrowserView();
    var bounds = win.getContentBounds();

    win.setBrowserView(view);
    //win.webContents.openDevTools();
    view.setBounds({ x: 0, y: 0, width: bounds.width, height: bounds.height });
    win.on('resize', () => {
        bounds = win.getContentBounds();
        view.setBounds({ x: 0, y: 0, width: bounds.width, height: bounds.height })
    });
    view.webContents.loadFile('app/index.html')
    view.setAutoResize({ width: true, height: true });
});