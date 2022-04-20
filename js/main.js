// Hello there.

// Making sure this page isn't hosted somewhere else...

currentPage = windows.location.href;

if (currentPage.includes('vvxweb.ga') || currentPage.includes('about:blank')) {

console.log('Check passed.');

} else {
    
    window.location.replace("https://vvxweb.ga");

}