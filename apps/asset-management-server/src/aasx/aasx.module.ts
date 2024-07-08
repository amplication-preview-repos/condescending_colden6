import { Module } from "@nestjs/common";
import { AasxModuleBase } from "./base/aasx.module.base";
import { AasxService } from "./aasx.service";
import { AasxController } from "./aasx.controller";
import { AasxResolver } from "./aasx.resolver";

@Module({
  imports: [AasxModuleBase],
  controllers: [AasxController],
  providers: [AasxService, AasxResolver],
  exports: [AasxService],
})
export class AasxModule {}
