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
import { AssetService } from "../asset.service";
import { AssetCreateInput } from "./AssetCreateInput";
import { Asset } from "./Asset";
import { AssetFindManyArgs } from "./AssetFindManyArgs";
import { AssetWhereUniqueInput } from "./AssetWhereUniqueInput";
import { AssetUpdateInput } from "./AssetUpdateInput";
import { AasxFindManyArgs } from "../../aasx/base/AasxFindManyArgs";
import { Aasx } from "../../aasx/base/Aasx";
import { AasxWhereUniqueInput } from "../../aasx/base/AasxWhereUniqueInput";

export class AssetControllerBase {
  constructor(protected readonly service: AssetService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Asset })
  async createAsset(@common.Body() data: AssetCreateInput): Promise<Asset> {
    return await this.service.createAsset({
      data: {
        ...data,

        assetHierarchy: data.assetHierarchy
          ? {
              connect: data.assetHierarchy,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        name: true,

        assetHierarchy: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Asset] })
  @ApiNestedQuery(AssetFindManyArgs)
  async assets(@common.Req() request: Request): Promise<Asset[]> {
    const args = plainToClass(AssetFindManyArgs, request.query);
    return this.service.assets({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        name: true,

        assetHierarchy: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Asset })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async asset(
    @common.Param() params: AssetWhereUniqueInput
  ): Promise<Asset | null> {
    const result = await this.service.asset({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        name: true,

        assetHierarchy: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Asset })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAsset(
    @common.Param() params: AssetWhereUniqueInput,
    @common.Body() data: AssetUpdateInput
  ): Promise<Asset | null> {
    try {
      return await this.service.updateAsset({
        where: params,
        data: {
          ...data,

          assetHierarchy: data.assetHierarchy
            ? {
                connect: data.assetHierarchy,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          description: true,
          name: true,

          assetHierarchy: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: Asset })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAsset(
    @common.Param() params: AssetWhereUniqueInput
  ): Promise<Asset | null> {
    try {
      return await this.service.deleteAsset({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          description: true,
          name: true,

          assetHierarchy: {
            select: {
              id: true,
            },
          },
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

  @common.Get("/:id/aasxes")
  @ApiNestedQuery(AasxFindManyArgs)
  async findAasxes(
    @common.Req() request: Request,
    @common.Param() params: AssetWhereUniqueInput
  ): Promise<Aasx[]> {
    const query = plainToClass(AasxFindManyArgs, request.query);
    const results = await this.service.findAasxes(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        content: true,

        asset: {
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

  @common.Post("/:id/aasxes")
  async connectAasxes(
    @common.Param() params: AssetWhereUniqueInput,
    @common.Body() body: AasxWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      aasxes: {
        connect: body,
      },
    };
    await this.service.updateAsset({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/aasxes")
  async updateAasxes(
    @common.Param() params: AssetWhereUniqueInput,
    @common.Body() body: AasxWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      aasxes: {
        set: body,
      },
    };
    await this.service.updateAsset({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/aasxes")
  async disconnectAasxes(
    @common.Param() params: AssetWhereUniqueInput,
    @common.Body() body: AasxWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      aasxes: {
        disconnect: body,
      },
    };
    await this.service.updateAsset({
      where: params,
      data,
      select: { id: true },
    });
  }
}
