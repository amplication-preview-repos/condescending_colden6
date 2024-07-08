import * as graphql from "@nestjs/graphql";
import { HierarchyLevelResolverBase } from "./base/hierarchyLevel.resolver.base";
import { HierarchyLevel } from "./base/HierarchyLevel";
import { HierarchyLevelService } from "./hierarchyLevel.service";

@graphql.Resolver(() => HierarchyLevel)
export class HierarchyLevelResolver extends HierarchyLevelResolverBase {
  constructor(protected readonly service: HierarchyLevelService) {
    super(service);
  }
}
