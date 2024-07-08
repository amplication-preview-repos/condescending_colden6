/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { RightService } from "../right.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { RightCreateInput } from "./RightCreateInput";
import { Right } from "./Right";
import { RightFindManyArgs } from "./RightFindManyArgs";
import { RightWhereUniqueInput } from "./RightWhereUniqueInput";
import { RightUpdateInput } from "./RightUpdateInput";
import { RoleRightFindManyArgs } from "../../roleRight/base/RoleRightFindManyArgs";
import { RoleRight } from "../../roleRight/base/RoleRight";
import { RoleRightWhereUniqueInput } from "../../roleRight/base/RoleRightWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RightControllerBase {
  constructor(
    protected readonly service: RightService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Right })
  @nestAccessControl.UseRoles({
    resource: "Right",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createRight(@common.Body() data: RightCreateInput): Promise<Right> {
    return await this.service.createRight({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Right] })
  @ApiNestedQuery(RightFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Right",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async rights(@common.Req() request: Request): Promise<Right[]> {
    const args = plainToClass(RightFindManyArgs, request.query);
    return this.service.rights({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Right })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Right",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async right(
    @common.Param() params: RightWhereUniqueInput
  ): Promise<Right | null> {
    const result = await this.service.right({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Right })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Right",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateRight(
    @common.Param() params: RightWhereUniqueInput,
    @common.Body() data: RightUpdateInput
  ): Promise<Right | null> {
    try {
      return await this.service.updateRight({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          description: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Right })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Right",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteRight(
    @common.Param() params: RightWhereUniqueInput
  ): Promise<Right | null> {
    try {
      return await this.service.deleteRight({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          description: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/roleRights")
  @ApiNestedQuery(RoleRightFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "RoleRight",
    action: "read",
    possession: "any",
  })
  async findRoleRights(
    @common.Req() request: Request,
    @common.Param() params: RightWhereUniqueInput
  ): Promise<RoleRight[]> {
    const query = plainToClass(RoleRightFindManyArgs, request.query);
    const results = await this.service.findRoleRights(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        role: {
          select: {
            id: true,
          },
        },

        right: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/roleRights")
  @nestAccessControl.UseRoles({
    resource: "Right",
    action: "update",
    possession: "any",
  })
  async connectRoleRights(
    @common.Param() params: RightWhereUniqueInput,
    @common.Body() body: RoleRightWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      roleRights: {
        connect: body,
      },
    };
    await this.service.updateRight({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/roleRights")
  @nestAccessControl.UseRoles({
    resource: "Right",
    action: "update",
    possession: "any",
  })
  async updateRoleRights(
    @common.Param() params: RightWhereUniqueInput,
    @common.Body() body: RoleRightWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      roleRights: {
        set: body,
      },
    };
    await this.service.updateRight({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/roleRights")
  @nestAccessControl.UseRoles({
    resource: "Right",
    action: "update",
    possession: "any",
  })
  async disconnectRoleRights(
    @common.Param() params: RightWhereUniqueInput,
    @common.Body() body: RoleRightWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      roleRights: {
        disconnect: body,
      },
    };
    await this.service.updateRight({
      where: params,
      data,
      select: { id: true },
    });
  }
}
