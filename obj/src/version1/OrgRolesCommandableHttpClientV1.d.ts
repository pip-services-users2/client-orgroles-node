import { PagingParams } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';
import { UserRolesV1 } from './UserRolesV1';
import { IOrgRolesClientV1 } from './IOrgRolesClientV1';
export declare class OrgRolesCommandableHttpClientV1 extends CommandableHttpClient implements IOrgRolesClientV1 {
    constructor(config?: any);
    getOrganizationUsers(correlationId: string, orgId: string): Promise<string[]>;
    getOrganizationAdmins(correlationId: string, orgId: string): Promise<string[]>;
    getOrganizationUserRoles(correlationId: string, orgId: string, paging: PagingParams): Promise<UserRolesV1[]>;
    grantOrgRole(correlationId: string, orgId: string, userId: string, role: string): Promise<string[]>;
    revokeOrgRole(correlationId: string, orgId: string, userId: string, role: string): Promise<string[]>;
    grantDemoOrganizationUserRole(correlationId: string, userId: string, language: string): Promise<string>;
}
