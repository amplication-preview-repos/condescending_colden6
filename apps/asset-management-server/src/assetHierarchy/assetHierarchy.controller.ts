import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssetHierarchyService } from "./assetHierarchy.service";
import { AssetHierarchyControllerBase } from "./base/assetHierarchy.controller.base";

@swagger.ApiTags("assetHierarchies")
@common.Controller("assetHierarchies")
export class AssetHierarchyController extends AssetHierarchyControllerBase {
  constructor(protected readonly service: AssetHierarchyService) {
    super(service);
  }
}
