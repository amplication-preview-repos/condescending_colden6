import * as graphql from "@nestjs/graphql";
import { AasxResolverBase } from "./base/aasx.resolver.base";
import { Aasx } from "./base/Aasx";
import { AasxService } from "./aasx.service";

@graphql.Resolver(() => Aasx)
export class AasxResolver extends AasxResolverBase {
  constructor(protected readonly service: AasxService) {
    super(service);
  }
}
