const { app,BrowserWindow} = require("electron"); 

const createWindow = () => {
    const win = new BrowserWindow({
        width : 800,
        height : 600,
        webPreferences : {
            nodeIntegration:true
        },
        // autoHideMenuBar:true  /* make browser to hide helper menu */
        // alwaysOnTop : true  /* make browser screen at top ZIndex */
    });
    win.loadFile("index.html");
    // win.webContents.openDevTools();  /* make browser to open dev tools */


    /* child window */
    const child = new BrowserWindow({parent : true,resizable : false});
    child.loadFile = false;
    child.show();
};

app.whenReady().then(createWindow);