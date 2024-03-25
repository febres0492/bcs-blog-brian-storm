
showBlogs();


S('#clearBtn')[0].addEventListener('click', () => {
    localStorage.removeItem('blogstom');
    showBlogs();
});

function S(selector) {
    return document.querySelectorAll(selector);
}
function showBlogs() {
    let blogs = [];
    if (localStorage.getItem('blogstom')) {
        blogs = JSON.parse(localStorage.getItem('blogstom'));
    }
    console.log('blogs',blogs)
    
    S('#blogContainer')[0].innerHTML = ''

    blogs.forEach((blog,i) => {
        S('#blogContainer')[0].innerHTML += `
            <div class="blog df flex-column">
                <h1 class="blog-title">${blog[1]} ${i}</h1>
                <hr>
                <p class="blog-message">${blog[2]}</p>
                <p>Posted by: ${blog[0]}</p>
            </div>
        `
    });
}