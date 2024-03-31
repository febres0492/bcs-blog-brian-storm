
// displaying blogs
showBlogs();

// showiing no blogs message
S('#deleteAllBtn')[0].addEventListener('click', () => {
    localStorage.removeItem('blogstom');
    showNoPostsMessage()
});

// Selector function
function S(selector) {
    return document.querySelectorAll(selector);
}

// This function displays the blogs in the container
function showBlogs() {

    // change the innerHTML of .test to running
    let blogs = [];
    if (localStorage.getItem('blogstom')) {
        blogs = JSON.parse(localStorage.getItem('blogstom'));
    }

    // if there are no blogs
    if(blogs.length == 0) {
        showNoPostsMessage()
        return
    }

    // remove class d-none from deleteAllBtn
    S('#deleteAllBtn')[0].classList.remove('d-none');

    // clearing the container
    S('#blogContainer')[0].innerHTML = '';

    // displaying the blogs
    blogs.forEach((blog,i) => {
        const title = capAll(blog.title)
        const content = capFirst(blog.content)
        const userName = capAll(blog.userName)

        S('#blogContainer')[0].innerHTML += `
            <div class="blog df flex-column">
                <div class="df jcsb">
                    <h3 class="blog-title">${title} ${i}</h3>
                    <button class="btn" onclick="deleteBlog(${i})">Delete</button>
                </div>
                <hr>
                <p class="blog-message">${content}</p>
                <p>Posted by: ${userName}</p>
            </div>
        `
    });
}

// this function shows a message when there are no posts
function showNoPostsMessage() {
    S('#deleteAllBtn')[0].classList.add('d-none');
    S('#blogContainer')[0].innerHTML = `
        <div class="blog df flex-column bdb">
            <p>No blogs poasted yet</p>
        </div>
    `;
}

// this function deletes a blog
function deleteBlog(i) {
    let blogs = JSON.parse(localStorage.getItem('blogstom'));
    blogs.splice(i, 1);
    localStorage.setItem('blogstom', JSON.stringify(blogs));
    showBlogs();
}

// this function capitalize the first letter of a string
function capFirst(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// this function capitalze the first letter of all words in a string
function capAll(str) {
    if (!str) return str;
    return str.split(' ').map(capFirst).join(' ') || str;
}