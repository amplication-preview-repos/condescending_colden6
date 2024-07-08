import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RoleRightModuleBase } from "./base/roleRight.module.base";
import { RoleRightService } from "./roleRight.service";
import { RoleRightController } from "./roleRight.controller";
import { RoleRightResolver } from "./roleRight.resolver";

@Module({
  imports: [RoleRightModuleBase, forwardRef(() => AuthModule)],
  controllers: [RoleRightController],
  providers: [RoleRightService, RoleRightResolver],
  exports: [RoleRightService],
})
export class RoleRightModule {}
