// frontend/src/utils/validators.js
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const isValidPassword = (password) => {
    return password.length >= 6;
  };