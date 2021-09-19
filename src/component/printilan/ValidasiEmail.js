export function validateEmail(emailAddress) {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const isValid = regex.test(emailAddress);
  if (emailAddress.trim() === "") {
    return {
      status: false,
      message: "Email can't be empty",
    };
  }
  if (isValid) {
    return { status: true };
  } else {
    return {
      status: false,
      message: "Please enter a valid email value",
    };
  }
}