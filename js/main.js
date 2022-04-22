// Hello there.

// Making sure this page isn't hosted somewhere else...

if(document.location.href.indexOf('vvxweb.ga') > -1 || document.location.href.indexOf('about:blank') || document.location.href.indexOf('vvxwebsite.vercel.app')) { 
    console.log('URL STATUS...OK');
} else {

    document.location.href = 'http://vvxweb.ga';
}

// Rocket launch codes :smirk:
function launchTheRocket(a, b, c) {
    win = window.open("_self");
    var iframe = win.document.createElement('iframe');
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.src = arguments[0];
    win.document.body.appendChild(iframe);
  //  window.close();
}