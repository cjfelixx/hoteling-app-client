export const Environments = {
  DEVELOPMENT: 'development',
  TEST: 'test',
  UAT: 'uat',
  PRODUCTION: 'production'
};
export const LOCAL_STORAGE = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
};
export const UserType = {
  EMPLOYEE: 'EMPLOYEE',
  CONTRACTOR: 'CONTRACTOR',
  VISITOR: 'VISITOR',
  CUSTOMER: 'CUSTOMER',
  OTHER: 'OTHER'
};
export const ErrorMessage = {
  PASSWORD_INVALID:
    'Password contains at least:<br /> • 8 characters;<br /> • 1 upper case letter;<br /> • 1 lowercase letter;<br /> • 1 number<br /> Special characters are allowed, except plus (+) and minus (-) sign;<br />Whitespaces in the head and tail are not allowed.',
  PASSWORD_NOT_MATCH: "Password and Confirm new Password don't match.",
  EMAIL_INVALID: 'Invalid email format.',
  PHONE_INVALID: 'Invalid phone number format.',
  BLANK_FIELD: 'Missing required field.',
  CODE_INVALID: 'Incorrect verification code.',
  SPECIAL_CHARS: 'Please input only letter characters.',
  UNKNOWN: 'Unexpected error has occurred.',
  DATA_ERROR: 'Your data got errors, please check again or contact our helpdesk.'
};
