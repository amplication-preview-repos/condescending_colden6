import * as graphql from "@nestjs/graphql";
import { AssetHierarchyResolverBase } from "./base/assetHierarchy.resolver.base";
import { AssetHierarchy } from "./base/AssetHierarchy";
import { AssetHierarchyService } from "./assetHierarchy.service";

@graphql.Resolver(() => AssetHierarchy)
export class AssetHierarchyResolver extends AssetHierarchyResolverBase {
  constructor(protected readonly service: AssetHierarchyService) {
    super(service);
  }
}
