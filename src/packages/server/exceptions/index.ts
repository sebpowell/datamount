import { ErrorCodes } from "@/packages/server/exceptions/exception-codes.enum";
import { StatusCodes } from "http-status-codes";

export class BadRequestError extends Error {
  status: StatusCodes;
  code: ErrorCodes;
  errors: object | null;

  constructor(code: ErrorCodes, message?: string, errors?: object) {
    super(message);
    this.status = 400;
    this.message = message || "";
    this.code = code;
    this.errors = errors || null;
  }
}

export class UnauthorisedError extends Error {
  status: StatusCodes;
  code: ErrorCodes;

  constructor(code: ErrorCodes, message?: string) {
    super(message);
    this.status = StatusCodes.UNAUTHORIZED;
    this.message = message || "";
    this.code = code;
  }
}

export class PaymentRequiredError extends Error {
  status: StatusCodes;
  code: ErrorCodes;

  constructor(code: ErrorCodes, message?: string) {
    super(message);
    this.status = StatusCodes.PAYMENT_REQUIRED;
    this.message = message || "";
    this.code = code;
  }
}

export class ServerError extends Error {
  status: StatusCodes;
  code: ErrorCodes;

  constructor(code: ErrorCodes, message?: string) {
    super(message);
    this.status = StatusCodes.INTERNAL_SERVER_ERROR;
    this.message = message || "";
    this.code = code;
  }
}
