import { Module } from "@nestjs/common";
import { AssetModule } from "./asset/asset.module";
import { HierarchyLevelModule } from "./hierarchyLevel/hierarchyLevel.module";
import { AssetHierarchyModule } from "./assetHierarchy/assetHierarchy.module";
import { AasxModule } from "./aasx/aasx.module";
import { UserModule } from "./user/user.module";
import { RoleModule } from "./role/role.module";
import { RightModule } from "./right/right.module";
import { RoleRightModule } from "./roleRight/roleRight.module";
import { UserRoleModule } from "./userRole/userRole.module";
import { AppUserModule } from "./appUser/appUser.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    AssetModule,
    HierarchyLevelModule,
    AssetHierarchyModule,
    AasxModule,
    UserModule,
    RoleModule,
    RightModule,
    RoleRightModule,
    UserRoleModule,
    AppUserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
