interface Errors {
    first: string;
    last: string;
    email: string;
    password: string;
    verify: string;
  }
  
  function Validation(values: {
    first: string;
    last: string;
    email: string;
    password: string;
    verify: string;
  }): Errors {
    let error: Errors = {
      first: "",
      last: "",
      email: "",
      password: "",
      verify: "",
    };
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern =
      /^(?=.*[a-zA-Z0-9])(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    const name_pattern = /^[A-Za-z\s]+$/;
  
    if (values.first === "") {
      error.first = "First name should not be empty";
    } else if (!name_pattern.test(values.first)) {
      error.first = "First name should only contain letters and spaces";
    } else {
      error.first = "";
    }
  
    if (values.last === "") {
      error.last = "Last name should not be empty";
    } else if (!name_pattern.test(values.last)) {
      error.last = "Last name should only contain letters and spaces";
    } else {
      error.last = "";
    }
  
    if (values.email === "") {
      error.email = "email should not be empty";
    } else if (!email_pattern.test(values.email)) {
      error.email = "Email didn't match";
    } else {
      error.email = "";
    }
  
    if (values.password === "") {
      error.password = "Password should not be empty";
    } else if (values.password.length < 8) {
      error.password = "Password must be at least 8 characters long";
    } else if (!password_pattern.test(values.password)) {
      error.password =
        "Password must contain at least one digit, one lowercase letter, one uppercase letter, and one special character";
    } else {
      error.password = "";
    }
  
    if (values.verify !== values.password) {
      error.verify = "Passwords do not match";
    } else {
      error.verify = "";
    }
  
    return error;
  }
  export default Validation;