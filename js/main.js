// Hello there.

// Making sure this page isn't hosted somewhere else...

currentPage = window.location.href;

if (currentPage.indexOf('vvxweb.ga') || currentPage.indexOf('about:blank')) {

console.log('Check passed.');

} else {
    
    window.location.replace("https://vvxweb.ga");

}