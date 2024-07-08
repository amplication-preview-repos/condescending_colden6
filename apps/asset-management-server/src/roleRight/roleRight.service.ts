import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RoleRightServiceBase } from "./base/roleRight.service.base";

@Injectable()
export class RoleRightService extends RoleRightServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
