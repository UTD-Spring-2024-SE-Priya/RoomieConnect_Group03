interface Values {
    email: string;
    password: string;
  }
  
  const Validation = (values: Values) => {
    let errors: { [key: string]: string } = {};
  
    if (!values.email) {
      errors.email = "Email is required";
    } else if (values.email.length < 5) {
      errors.email = "Email address is invalid";
    }
  
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be 8 characters or more";
    }
  
    return errors;
  };
  
  export default Validation;