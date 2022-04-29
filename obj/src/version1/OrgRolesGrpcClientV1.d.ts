import { PagingParams } from 'pip-services3-commons-nodex';
import { GrpcClient } from 'pip-services3-grpc-nodex';
import { IOrgRolesClientV1 } from './IOrgRolesClientV1';
import { UserRolesV1 } from './UserRolesV1';
export declare class OrgRolesGrpcClientV1 extends GrpcClient implements IOrgRolesClientV1 {
    constructor();
    getOrganizationUsers(correlationId: string, orgId: string): Promise<string[]>;
    getOrganizationAdmins(correlationId: string, orgId: string): Promise<string[]>;
    getOrganizationUserRoles(correlationId: string, orgId: string, paging: PagingParams): Promise<UserRolesV1[]>;
    grantOrgRole(correlationId: string, orgId: string, userId: string, role: string): Promise<string[]>;
    revokeOrgRole(correlationId: string, orgId: string, userId: string, role: string): Promise<string[]>;
    grantDemoOrganizationUserRole(correlationId: string, userId: string, language: string): Promise<string>;
}
