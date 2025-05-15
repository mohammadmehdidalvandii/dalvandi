const validationEmail = (email)=>{
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[cC][oO][mM]$/g;
    return pattern.test(email)
}

const validationPhone = (phone)=>{
    const pattern = /^09\d{9}$/g;
    return pattern.test(phone)
}

const validationPassword = (password)=>{
    const pattern = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/g
    return pattern.test(password)  
};


module.exports = {
    validationEmail,
    validationPhone,
    validationPassword,
}