const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
export const validateEmail = (email) => {
    return (re.test(email) === false);
};

export const validateRequiredField = (field) => {
    return (field === '')

};
