import { Module } from "@nestjs/common";
import { HierarchyLevelModuleBase } from "./base/hierarchyLevel.module.base";
import { HierarchyLevelService } from "./hierarchyLevel.service";
import { HierarchyLevelController } from "./hierarchyLevel.controller";
import { HierarchyLevelResolver } from "./hierarchyLevel.resolver";

@Module({
  imports: [HierarchyLevelModuleBase],
  controllers: [HierarchyLevelController],
  providers: [HierarchyLevelService, HierarchyLevelResolver],
  exports: [HierarchyLevelService],
})
export class HierarchyLevelModule {}
