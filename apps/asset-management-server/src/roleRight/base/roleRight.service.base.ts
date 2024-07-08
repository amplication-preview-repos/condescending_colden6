/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  RoleRight as PrismaRoleRight,
  Role as PrismaRole,
  Right as PrismaRight,
} from "@prisma/client";

export class RoleRightServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RoleRightCountArgs, "select">
  ): Promise<number> {
    return this.prisma.roleRight.count(args);
  }

  async roleRights(
    args: Prisma.RoleRightFindManyArgs
  ): Promise<PrismaRoleRight[]> {
    return this.prisma.roleRight.findMany(args);
  }
  async roleRight(
    args: Prisma.RoleRightFindUniqueArgs
  ): Promise<PrismaRoleRight | null> {
    return this.prisma.roleRight.findUnique(args);
  }
  async createRoleRight(
    args: Prisma.RoleRightCreateArgs
  ): Promise<PrismaRoleRight> {
    return this.prisma.roleRight.create(args);
  }
  async updateRoleRight(
    args: Prisma.RoleRightUpdateArgs
  ): Promise<PrismaRoleRight> {
    return this.prisma.roleRight.update(args);
  }
  async deleteRoleRight(
    args: Prisma.RoleRightDeleteArgs
  ): Promise<PrismaRoleRight> {
    return this.prisma.roleRight.delete(args);
  }

  async getRole(parentId: string): Promise<PrismaRole | null> {
    return this.prisma.roleRight
      .findUnique({
        where: { id: parentId },
      })
      .role();
  }

  async getRight(parentId: string): Promise<PrismaRight | null> {
    return this.prisma.roleRight
      .findUnique({
        where: { id: parentId },
      })
      .right();
  }
}
