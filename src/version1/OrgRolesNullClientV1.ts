import { PagingParams } from 'pip-services3-commons-nodex';

import { UserRolesV1 } from './UserRolesV1';
import { IOrgRolesClientV1 } from './IOrgRolesClientV1';

export class OrgRolesNullClientV1 implements IOrgRolesClientV1 {

    public async getOrganizationUsers(correlationId: string, orgId: string): Promise<string[]> {
        return [];
    }

    public async getOrganizationAdmins(correlationId: string, orgId: string): Promise<string[]> {
        return [];
    }
    
    public async getOrganizationUserRoles(correlationId: string, orgId: string, paging: PagingParams): Promise<UserRolesV1[]> {
        return [];
    }

    public async grantOrgRole(correlationId: string, orgId: string, userId: string, role: string): Promise<string[]> {
        return [orgId + ':' + role];
    }

    public async revokeOrgRole(correlationId: string, orgId: string, userId: string, role: string): Promise<string[]> {
        return [];
    }
    
    public async grantDemoOrganizationUserRole(correlationId: string, userId: string, language: string): Promise<string> {
        return 'demo';
    }

}