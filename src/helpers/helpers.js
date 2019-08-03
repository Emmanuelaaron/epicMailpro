const helper = (data) => {
    let resp = document.getElementById('errors');
    if (data.errors){
        resp.style.color = '#F00'
        if (data.errors[0].missing){
            resp.innerHTML = 'One of the fields is empty'
        }
       if (data.errors[0].message){
            resp.innerHTML = 'Invalid Email'
        }

    }
    if(data.message){
        resp.innerHTML = 'User with this email already exists! Choose another Email'
    }
}

export const validateLogin = (data) => {
    let resp = document.getElementById('errors');
    if(data.message){
        resp.innerHTML = 'Invalid Login credentials'
    }
} 
export default helper;
