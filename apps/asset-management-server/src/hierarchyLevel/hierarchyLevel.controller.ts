import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HierarchyLevelService } from "./hierarchyLevel.service";
import { HierarchyLevelControllerBase } from "./base/hierarchyLevel.controller.base";

@swagger.ApiTags("hierarchyLevels")
@common.Controller("hierarchyLevels")
export class HierarchyLevelController extends HierarchyLevelControllerBase {
  constructor(protected readonly service: HierarchyLevelService) {
    super(service);
  }
}
