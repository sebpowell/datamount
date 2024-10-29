import {
  BadRequestError,
  PaymentRequiredError,
  ServerError,
  UnauthorisedError,
} from "@/packages/server/exceptions";
import {
  LoggerService,
  loggerService,
} from "@/packages/server/modules/logger/logger.service";
import { ResponseValidationError } from "@ts-rest/core";
import { RequestValidationError } from "@ts-rest/next";
import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";

class HttpExceptionFilter {
  private loggerService: LoggerService;

  constructor({ loggerService }: { loggerService: LoggerService }) {
    this.loggerService = loggerService;
  }

  catch(error: unknown, req: NextApiRequest, res: NextApiResponse) {
    this.loggerService.getClient().error(error);

    if (error instanceof RequestValidationError) {
      if (error.body !== null) {
        return res
          .status(400)
          .json({ message: "Malformed Body", errors: error.body.flatten() });
      }

      return res.status(400).json({ message: "Bad Request" });
    }

    if (error instanceof ResponseValidationError) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        status: StatusCodes.BAD_REQUEST,
        message: error,
      });
    }

    if (error instanceof BadRequestError) {
      return res.status(error.status).json({
        status: error.status,
        message: error.message,
        errors: error.errors,
      });
    }

    if (
      error instanceof UnauthorisedError ||
      error instanceof PaymentRequiredError ||
      error instanceof ServerError
    ) {
      return res.status(error.status).json({
        status: error.status,
        message: error.message,
      });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      message: "Something went wrong. Please contact us.",
    });
  }
}

const httpExceptionFilter = new HttpExceptionFilter({
  loggerService,
});

export { httpExceptionFilter };
