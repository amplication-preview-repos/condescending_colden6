import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RoleRightService } from "./roleRight.service";
import { RoleRightControllerBase } from "./base/roleRight.controller.base";

@swagger.ApiTags("roleRights")
@common.Controller("roleRights")
export class RoleRightController extends RoleRightControllerBase {
  constructor(
    protected readonly service: RoleRightService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
