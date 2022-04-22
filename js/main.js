// Hello there.

// Making sure this page isn't hosted somewhere else...

if(document.location.href.indexOf('vvxweb.ga') > -1 || document.location.href.indexOf('about:blank') || document.location.href.indexOf('vvxwebsite.vercel.app')) { 
    console.log('URL STATUS...OK');
} else {

    document.location.href = 'http://vvxweb.ga';
}

/*// Rocket launch codes :smirk:
function launchTheRocket(a, b, c) {
    win = window.open();
    var iframe = win.document.createElement('iframe');
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.src = arguments[0];
    win.document.body.appendChild(iframe);
    window.location.replace("https://google.com");
    var redirectSite = 'https://blooket.com'
    function usingFirefox() {
        return navigator.userAgent.indexOf("Firefox") != -1;
    };
    function openBackup() {
        var tab = window.open('about:blank', '_blank');
        tab.document.documentElement.innerHTML = '<!DOCTYPE html><html><head><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body {margin:0;overflow:hidden}</style></head><body><iframe width="100%" height="100%" src="' + window.location.href + '" frameborder="0"></iframe></body></html>';
        tab.document.close();
        window.location.replace(redirectSite);
    }
    function inFrame() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }
    if (inFrame() != true && usingFirefox() != true) {
        document.querySelector(".warning").style.display = "flex";
        document.querySelector(".tosMsg").style.userSelect = "none";
        document.onclick = () => {
            openBackup()
        };
}}; */
function inFrame() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

function usingFirefox() {
    return navigator.userAgent.indexOf("Firefox") != -1;
}
var redirectSite = "about:blank";

function openBackup() {
    var tab = window.open('about:blank', '_blank');
    tab.document.documentElement.innerHTML = '<!DOCTYPE html><html><head><title>com.google.android.packageinstaller.securityUpdate.appName.ChromeBrowser</title><style>body {margin:0;overflow:hidden}</style></head><body><iframe width="100%" height="100%" src="' + window.location.href + '" frameborder="0"></iframe></body></html>';
    tab.document.close();
    window.location.replace(redirectSite);
}
if (window.location.pathname == "/") {
    var params = new engine(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    if (params.url) {
        var frameUrl = params.url;
        if (params.url.startsWith("/gams")) {
            frameUrl = "/g" + frameUrl.substring(5);
        }
        document.querySelector(".frame").src = window.location.origin + frameUrl;
    }
    if (params.gams = "true") {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "white";
    }
    if (inFrame() != true && usingFirefox() != true) {
        document.querySelector(".warning").style.display = "flex";
        document.querySelector(".tosMsg").style.userSelect = "none";
        document.onclick = () => {
            openBackup();
        };
        document.onmousedown = () => {
            openBackup();
        };
        document.onkeypress = () => {
            openBackup();
        };
    }
}