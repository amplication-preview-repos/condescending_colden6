import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetHierarchyServiceBase } from "./base/assetHierarchy.service.base";

@Injectable()
export class AssetHierarchyService extends AssetHierarchyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
