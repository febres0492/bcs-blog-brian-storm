S('button[type="submit"]')[0].addEventListener('click', (ev) => {
    
    // Select the form
    const form = S('form')[0];
    
    // Get the values from the inputs
    const inputs = form.querySelectorAll('.input');
    const values = Array.from(inputs).map(input => input.value);
    if(values.length !== 3) {return}
    console.log(values)
    
    // Save the values to local storage in an array
    let data = localStorage.getItem('blogstom');
    if (data) {
        data = JSON.parse(data);
        data.push(values);
    } else {
        data = [values];
    }
    localStorage.setItem('blogstom', JSON.stringify(data));
});

function S(selector) {
    return document.querySelectorAll(selector);
}
