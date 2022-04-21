// Hello there.

// Making sure this page isn't hosted somewhere else...

if (window.location.href.indexOf('vvxweb.ga') || window.location.href.indexOf('about:blank')) {

    console.log('Check passed');
} else {

    window.location.replace('https://vvxweb.ga');
}