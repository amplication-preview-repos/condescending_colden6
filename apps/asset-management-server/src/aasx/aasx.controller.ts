import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AasxService } from "./aasx.service";
import { AasxControllerBase } from "./base/aasx.controller.base";

@swagger.ApiTags("aasxes")
@common.Controller("aasxes")
export class AasxController extends AasxControllerBase {
  constructor(protected readonly service: AasxService) {
    super(service);
  }
}
