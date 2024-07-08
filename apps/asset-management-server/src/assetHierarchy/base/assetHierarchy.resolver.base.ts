/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AssetHierarchy } from "./AssetHierarchy";
import { AssetHierarchyCountArgs } from "./AssetHierarchyCountArgs";
import { AssetHierarchyFindManyArgs } from "./AssetHierarchyFindManyArgs";
import { AssetHierarchyFindUniqueArgs } from "./AssetHierarchyFindUniqueArgs";
import { CreateAssetHierarchyArgs } from "./CreateAssetHierarchyArgs";
import { UpdateAssetHierarchyArgs } from "./UpdateAssetHierarchyArgs";
import { DeleteAssetHierarchyArgs } from "./DeleteAssetHierarchyArgs";
import { AssetFindManyArgs } from "../../asset/base/AssetFindManyArgs";
import { Asset } from "../../asset/base/Asset";
import { HierarchyLevel } from "../../hierarchyLevel/base/HierarchyLevel";
import { AssetHierarchyService } from "../assetHierarchy.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AssetHierarchy)
export class AssetHierarchyResolverBase {
  constructor(
    protected readonly service: AssetHierarchyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AssetHierarchy",
    action: "read",
    possession: "any",
  })
  async _assetHierarchiesMeta(
    @graphql.Args() args: AssetHierarchyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AssetHierarchy])
  @nestAccessControl.UseRoles({
    resource: "AssetHierarchy",
    action: "read",
    possession: "any",
  })
  async assetHierarchies(
    @graphql.Args() args: AssetHierarchyFindManyArgs
  ): Promise<AssetHierarchy[]> {
    return this.service.assetHierarchies(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AssetHierarchy, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AssetHierarchy",
    action: "read",
    possession: "own",
  })
  async assetHierarchy(
    @graphql.Args() args: AssetHierarchyFindUniqueArgs
  ): Promise<AssetHierarchy | null> {
    const result = await this.service.assetHierarchy(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AssetHierarchy)
  @nestAccessControl.UseRoles({
    resource: "AssetHierarchy",
    action: "create",
    possession: "any",
  })
  async createAssetHierarchy(
    @graphql.Args() args: CreateAssetHierarchyArgs
  ): Promise<AssetHierarchy> {
    return await this.service.createAssetHierarchy({
      ...args,
      data: {
        ...args.data,

        hierarchyLevel: args.data.hierarchyLevel
          ? {
              connect: args.data.hierarchyLevel,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AssetHierarchy)
  @nestAccessControl.UseRoles({
    resource: "AssetHierarchy",
    action: "update",
    possession: "any",
  })
  async updateAssetHierarchy(
    @graphql.Args() args: UpdateAssetHierarchyArgs
  ): Promise<AssetHierarchy | null> {
    try {
      return await this.service.updateAssetHierarchy({
        ...args,
        data: {
          ...args.data,

          hierarchyLevel: args.data.hierarchyLevel
            ? {
                connect: args.data.hierarchyLevel,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => AssetHierarchy)
  @nestAccessControl.UseRoles({
    resource: "AssetHierarchy",
    action: "delete",
    possession: "any",
  })
  async deleteAssetHierarchy(
    @graphql.Args() args: DeleteAssetHierarchyArgs
  ): Promise<AssetHierarchy | null> {
    try {
      return await this.service.deleteAssetHierarchy(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Asset], { name: "assets" })
  @nestAccessControl.UseRoles({
    resource: "Asset",
    action: "read",
    possession: "any",
  })
  async findAssets(
    @graphql.Parent() parent: AssetHierarchy,
    @graphql.Args() args: AssetFindManyArgs
  ): Promise<Asset[]> {
    const results = await this.service.findAssets(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => HierarchyLevel, {
    nullable: true,
    name: "hierarchyLevel",
  })
  @nestAccessControl.UseRoles({
    resource: "HierarchyLevel",
    action: "read",
    possession: "any",
  })
  async getHierarchyLevel(
    @graphql.Parent() parent: AssetHierarchy
  ): Promise<HierarchyLevel | null> {
    const result = await this.service.getHierarchyLevel(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
