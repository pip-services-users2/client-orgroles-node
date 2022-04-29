import { PagingParams } from 'pip-services3-commons-nodex';

import { UserRolesV1 } from './UserRolesV1';

export interface IOrgRolesClientV1 {
    getOrganizationUsers(correlationId: string, orgId: string): Promise<string[]>;

    getOrganizationAdmins(correlationId: string, orgId: string): Promise<string[]>;
            
    getOrganizationUserRoles(correlationId: string, orgId: string, paging: PagingParams): Promise<UserRolesV1[]>;

    grantOrgRole(correlationId: string, orgId: string, userId: string, role: string): Promise<string[]>;

    revokeOrgRole(correlationId: string, orgId: string, userId: string, role: string): Promise<string[]>;

    grantDemoOrganizationUserRole(correlationId: string, userId: string, language: string): Promise<string>;
}
