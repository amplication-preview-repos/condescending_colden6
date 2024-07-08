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
import { Aasx } from "./Aasx";
import { AasxCountArgs } from "./AasxCountArgs";
import { AasxFindManyArgs } from "./AasxFindManyArgs";
import { AasxFindUniqueArgs } from "./AasxFindUniqueArgs";
import { CreateAasxArgs } from "./CreateAasxArgs";
import { UpdateAasxArgs } from "./UpdateAasxArgs";
import { DeleteAasxArgs } from "./DeleteAasxArgs";
import { Asset } from "../../asset/base/Asset";
import { AasxService } from "../aasx.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Aasx)
export class AasxResolverBase {
  constructor(
    protected readonly service: AasxService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Aasx",
    action: "read",
    possession: "any",
  })
  async _aasxesMeta(
    @graphql.Args() args: AasxCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Aasx])
  @nestAccessControl.UseRoles({
    resource: "Aasx",
    action: "read",
    possession: "any",
  })
  async aasxes(@graphql.Args() args: AasxFindManyArgs): Promise<Aasx[]> {
    return this.service.aasxes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Aasx, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Aasx",
    action: "read",
    possession: "own",
  })
  async aasx(@graphql.Args() args: AasxFindUniqueArgs): Promise<Aasx | null> {
    const result = await this.service.aasx(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Aasx)
  @nestAccessControl.UseRoles({
    resource: "Aasx",
    action: "create",
    possession: "any",
  })
  async createAasx(@graphql.Args() args: CreateAasxArgs): Promise<Aasx> {
    return await this.service.createAasx({
      ...args,
      data: {
        ...args.data,

        asset: args.data.asset
          ? {
              connect: args.data.asset,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Aasx)
  @nestAccessControl.UseRoles({
    resource: "Aasx",
    action: "update",
    possession: "any",
  })
  async updateAasx(@graphql.Args() args: UpdateAasxArgs): Promise<Aasx | null> {
    try {
      return await this.service.updateAasx({
        ...args,
        data: {
          ...args.data,

          asset: args.data.asset
            ? {
                connect: args.data.asset,
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

  @graphql.Mutation(() => Aasx)
  @nestAccessControl.UseRoles({
    resource: "Aasx",
    action: "delete",
    possession: "any",
  })
  async deleteAasx(@graphql.Args() args: DeleteAasxArgs): Promise<Aasx | null> {
    try {
      return await this.service.deleteAasx(args);
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
  @graphql.ResolveField(() => Asset, {
    nullable: true,
    name: "asset",
  })
  @nestAccessControl.UseRoles({
    resource: "Asset",
    action: "read",
    possession: "any",
  })
  async getAsset(@graphql.Parent() parent: Aasx): Promise<Asset | null> {
    const result = await this.service.getAsset(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
