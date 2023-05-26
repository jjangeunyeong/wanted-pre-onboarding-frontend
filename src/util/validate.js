export const validateEmail = email => {
  let emailRegex = /@/g;

  return emailRegex.test(email);
};

export const validatePW = password => {
  return password.length >= 8 ? true : false;
};
