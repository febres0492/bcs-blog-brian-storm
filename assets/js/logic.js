
// This file contains the logic for the blog page
S('button[type="submit"]')[0].addEventListener('click', (ev) => {

    // selecting the form
    const form = S('form')[0];
    
    // Getting values from the inputs
    const inputs = form.querySelectorAll('.input');
    const values = Array.from(inputs).map(input => input.value);

    // alerting if any of the values are empty
    if(values.some(v => v.length == 0)) {
        window.alert('Please fill in all the fields');
        return
    }
    
    // creating an object from the values
    const obj = {
        userName: values[0],
        title: values[1],
        content: values[2]
    }

    // saving the object to local storage
    let data = localStorage.getItem('blogstom');
    if (data) {
        data = JSON.parse(data);
        data.push(obj);
    } else {
        data = [obj];
    }
    localStorage.setItem('blogstom', JSON.stringify(data));
});

// Selector function
function S(selector) {
    return document.querySelectorAll(selector);
}
