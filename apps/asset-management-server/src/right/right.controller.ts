import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RightService } from "./right.service";
import { RightControllerBase } from "./base/right.controller.base";

@swagger.ApiTags("rights")
@common.Controller("rights")
export class RightController extends RightControllerBase {
  constructor(
    protected readonly service: RightService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
