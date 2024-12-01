window.onscroll = function() {
    var height = document.documentElement.scrollTop;
    var nav = document.querySelector('.nav');
    
    if (height > 10) {
        nav.classList.add('scrolled');
        nav.style.position = 'fixed';
    } else {
        nav.classList.remove('scrolled');
        nav.style.position = 'relative';
    }
};