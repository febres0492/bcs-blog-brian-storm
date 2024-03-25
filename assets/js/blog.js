let blogs = [];
if (localStorage.getItem('blogstom')) {
    blogs = JSON.parse(localStorage.getItem('blogstom'));
}



showBlogs();


S('#clearBtn')[0].addEventListener('click', () => {
    localStorage.removeItem('blogstom');
    showBlogs();
});

function S(selector) {
    return document.querySelectorAll(selector);
}
function showBlogs() {
    blogs.forEach(blog => {
        S('#blogContainer')[0].innerHTML = ''
        S('#blogContainer')[0].innerHTML += `
            <div class="blog df flex-column bdr">
                <h1 class="blog-title">${blog[1]}</h1>
                <p>${blog[2]}</p>
                <p>Posted by: ${blog[0]}</p>
            </div>
        `
    });
}