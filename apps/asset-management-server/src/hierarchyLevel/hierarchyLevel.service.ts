import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HierarchyLevelServiceBase } from "./base/hierarchyLevel.service.base";

@Injectable()
export class HierarchyLevelService extends HierarchyLevelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
