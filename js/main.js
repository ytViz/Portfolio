// Hello there.

// Making sure this page isn't hosted somewhere else...

if(document.location.href.indexOf('vvxweb.ga') > -1 || document.location.href.indexOf('about:blank') || document.location.href.indexOf('vvxwebsite.vercel.app')) { 
    console.log('URL STATUS...OK');
} else {

    document.location.href = 'http://vvxweb.ga';
}

// Rocket launch codes :smirk:
function launchTheRocket(a) {
    win = window.open();
    var iframe = win.document.createElement('iframe');
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.src = a;
    win.document.body.appendChild(iframe);
    window.location.replace("https://google.com"); 
    /*var redirectSite = 'https://blooket.com';
    var tab = window.open();
    var iframe = tab.document.createElement('iframe');
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.src = arguments[0];
    tab.document.body.appendChild(iframe);
   // tab.document.documentElement.innerHTML = '<!DOCTYPE html><html><head><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body {margin:0;overflow:hidden}</style></head><body><iframe style="width: 100%; height: 100%; overflow: show;" src="' + a + '" width="100" height="100" scrolling="yes">Iframes not supported</iframe>"</body></html>';
    tab.document.close();
    window.location.replace(redirectSite);*/
}
