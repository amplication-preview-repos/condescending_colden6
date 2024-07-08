import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AasxServiceBase } from "./base/aasx.service.base";

@Injectable()
export class AasxService extends AasxServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
