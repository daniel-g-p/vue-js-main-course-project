const capitalize = (string) => {
  const trimmed = string.trim();
  return trimmed.length
    ? `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`
    : "";
};

const condition = (
  condition,
  message = "Please check your input",
  status = 400
) => {
  return condition ? { valid: true } : { valid: false, message, status };
};

const validate = (data, ...conditions) => {
  for (let condition of conditions) {
    if (!condition.valid) {
      return condition;
    }
  }
  return { status: 200, valid: true, data };
};

export const requestSchema = (request) => {
  const data = {
    firstName: capitalize(request.firstName),
    lastName: capitalize(request.lastName),
    email: capitalize(request.email),
    message: capitalize(request.message),
  };
  return validate(
    data,
    condition(data.firstName, "Please enter your first name."),
    condition(data.lastName, "Please enter your last name."),
    condition(data.email, "Please enter your email address"),
    condition(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email),
      "Please enter a valid email address"
    ),
    condition(data.message, "Please enter a message")
  );
};
