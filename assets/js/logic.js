
// getting the theme from local storage
let theme = localStorage.getItem('blog-theme') || 'light';

// setting the theme
if (theme && theme === 'dark') {
    document.body.classList.add('dark-theme');
}

// toggling the theme
document.querySelector('.theme-toggle').addEventListener('click', () => {
    theme = localStorage.getItem('blog-theme');
    if (theme === 'light') {
        document.body.classList.add('dark-theme');
        localStorage.setItem('blog-theme', 'dark');
    }else{
        document.body.classList.remove('dark-theme');
        localStorage.setItem('blog-theme', 'light');
    }
});
