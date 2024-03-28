
// getting the theme from local storage
let theme = localStorage.getItem('blog-theme') || 'light';

S('.theme-toggle')[0].textContent = 'Dark';

// setting the theme
if (theme && theme === 'dark') {
    document.body.classList.add('dark-theme');
    S('.theme-toggle')[0].textContent = 'Light';
}


// toggling the theme
S('.theme-toggle')[0].addEventListener('click', (ev) => {
    theme = localStorage.getItem('blog-theme');
    if (theme === 'light') {
        document.body.classList.add('dark-theme');
        localStorage.setItem('blog-theme', 'dark');
        S('.theme-toggle')[0].textContent = 'Light';
    }else{
        document.body.classList.remove('dark-theme');
        localStorage.setItem('blog-theme', 'light');
        S('.theme-toggle')[0].textContent = 'Dark';
    }
});

function S(selector) {
    return document.querySelectorAll(selector);
}
function capFirst(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}