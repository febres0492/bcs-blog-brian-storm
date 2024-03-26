
// this file contains the logic form
document.addEventListener('DOMContentLoaded', function() {
    
    S('button[type="submit"]')[0].addEventListener('click', () => {
        
        // getting values from the inputs
        const inputs = S('form')[0].querySelectorAll('.input');
        const values = [...inputs].map(input => input.value);
    
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
});


// selector function
function S(selector) {
    return document.querySelectorAll(selector);
}
