
S('clearBtn')[0].addEventListener('click', () => {
    localStorage.removeItem('blogstom');
});

function S(selector) {
    return document.querySelectorAll(selector);
}