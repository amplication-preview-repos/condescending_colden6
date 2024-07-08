import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RightServiceBase } from "./base/right.service.base";

@Injectable()
export class RightService extends RightServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
