export enum ErrorCodes {
  "auth_user_not_authenticated" = "auth_user_not_authenticated",
  "auth_password_incorrect" = "auth_password_incorrect",
  "auth_user_email_missing" = "auth_user_email_missing",
  "auth_user_no_account" = "auth_user_no_account",
  "entity_not_found" = "entity_not_found",
  "account_does_not_exist" = "account_does_not_exist",
  "api_key_missing" = "api_key_missing",
  "api_key_domain_not_whitelisted" = "api_key_domain_not_whitelisted",
  "api_key_does_not_exist" = "api_key_does_not_exist",
  "api_key_format_invalid" = "api_key_format_invalid",
  "user_already_exists" = "user_already_exists",
  "user_not_found" = "user_not_found",
  "invalid_values" = "invalid_values",
  "insufficient_credits" = "insufficient_credits",
  "unhandled" = "unhandled",
  "invalid_postcode" = "invalid_postcode",
  "entity_does_not_exist" = "entity_does_not_exist",
}

export const ErrorMessages = {
  [ErrorCodes.unhandled]:
    "Something went wrong. Please try again. If the errir persists, please contact us.",
};
