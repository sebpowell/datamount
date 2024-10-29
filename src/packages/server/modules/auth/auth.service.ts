import { users } from "@/packages/server/modules/database/schema/user.schema";
import { BadRequestError } from "@/packages/server/exceptions";
import { ErrorCodes } from "@/packages/server/exceptions/exception-codes.enum";
import {
  BcryptService,
  bcryptService,
} from "@/packages/server/modules/bcrypt/bcrypt.service";
import { IRegisterUserSchema } from "@/packages/server/modules/auth/schemas/register-user.schema";
import {
  DatabaseService,
  databaseService,
} from "@/packages/server/modules/database/database.service";
import {
  UsersService,
  userService,
} from "@/packages/server/modules/users/users.service";
import { compare } from "bcryptjs";

export class AuthService {
  private userService: UsersService;
  private bcryptService: BcryptService;
  private databaseService: DatabaseService;

  constructor(
    userService: UsersService,
    bcryptService: BcryptService,
    databaseService: DatabaseService,
  ) {
    this.userService = userService;
    this.bcryptService = bcryptService;
    this.databaseService = databaseService;
  }

  async login({
    email,
    password,
  }: {
    email: string | undefined;
    password: string | undefined;
  }) {
    if (!email || !password) {
      throw new BadRequestError(ErrorCodes.auth_user_email_missing);
    }

    const user = await this.userService.findOneByEmail(email);

    if (!user) {
      throw new BadRequestError(ErrorCodes.user_not_found);
    }

    if (!(await compare(password, user.password))) {
      throw new BadRequestError(ErrorCodes.auth_password_incorrect);
    }

    await this.databaseService
      .getClient()
      .update(users)
      .set({ totalLogins: user.totalLogins + 1, lastLoginAt: new Date() });

    return {
      id: user.id.toString(),
      email: user.email,
    };
  }

  async register(registerRequestDto: IRegisterUserSchema) {
    const { email, password } = registerRequestDto;

    const existingUser = await this.userService.findOneByEmail(email);

    if (existingUser) throw new BadRequestError(ErrorCodes.user_already_exists);

    const hash = await this.bcryptService.createPasswordHash(password);

    return await this.userService.create({
      email: email.toLowerCase().trim(),
      password: hash,
    });
  }
}

export const authService = new AuthService(
  userService,
  bcryptService,
  databaseService,
);
