// Hello there.

// Making sure this page isn't hosted somewhere else...

if(document.location.href.indexOf('vvxweb.ga') > -1 || document.location.href.indexOf('about:blank') || document.location.href.indexOf('vvxwebsite.vercel.app')) { 
    console.log('URL STATUS...OK');
} else {

    document.location.href = 'http://vvxweb.ga';
}

// Rocket launch codes :smirk:
function launchTheRocket(a) {
var tab = window.open('about:blank', '_blank');
  tab.document.documentElement.innerHTML = '<!DOCTYPE html><html><head><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body {margin:0;overflow:hidden}</style></head><body><iframe width="100%" height="100%" src="' + a + '" frameborder="0"></iframe></body></html>';
  tab.document.close();
  
  window.location.replace("https://google.com");
    }