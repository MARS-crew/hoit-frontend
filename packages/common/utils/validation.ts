/**
 * Checks if the given string is a valid email
 * @param email The email to validate
 * @returns Whether the email is valid
 */
export const isValidEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Checks if the given string is a valid password
 * @param password The password to validate
 * @param minLength Minimum length required
 * @returns Whether the password is valid
 */
export const isValidPassword = (password: string, minLength: number = 8): boolean => {
  return password.length >= minLength;
};

/**
 * Checks if the given string is not empty
 * @param value The string to check
 * @returns Whether the string is not empty
 */
export const isNotEmpty = (value: string): boolean => {
  return value.trim().length > 0;
}; 