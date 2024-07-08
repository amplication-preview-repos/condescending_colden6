import { Module } from "@nestjs/common";
import { AssetHierarchyModuleBase } from "./base/assetHierarchy.module.base";
import { AssetHierarchyService } from "./assetHierarchy.service";
import { AssetHierarchyController } from "./assetHierarchy.controller";
import { AssetHierarchyResolver } from "./assetHierarchy.resolver";

@Module({
  imports: [AssetHierarchyModuleBase],
  controllers: [AssetHierarchyController],
  providers: [AssetHierarchyService, AssetHierarchyResolver],
  exports: [AssetHierarchyService],
})
export class AssetHierarchyModule {}
