import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RightModuleBase } from "./base/right.module.base";
import { RightService } from "./right.service";
import { RightController } from "./right.controller";
import { RightResolver } from "./right.resolver";

@Module({
  imports: [RightModuleBase, forwardRef(() => AuthModule)],
  controllers: [RightController],
  providers: [RightService, RightResolver],
  exports: [RightService],
})
export class RightModule {}
