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

export const validateInbox = (data) => {
    let resp = document.getElementById('no-messages');
    if(data.message === 'Oops..you do not have any messages!'){
        resp.innerHTML = 'You do not have any received messages!'
    }else if(data.message === 'invalid token!'){
        window.location = '/login'
    }
}
export default helper;
