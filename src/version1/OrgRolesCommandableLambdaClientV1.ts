import { ConfigParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { CommandableLambdaClient } from 'pip-services3-aws-nodex';

import { UserRolesV1 } from './UserRolesV1';
import { IOrgRolesClientV1 } from './IOrgRolesClientV1';

export class OrgRolesCommandableLambdaClientV1 extends CommandableLambdaClient implements IOrgRolesClientV1 {

    constructor(config?: any) {
        super('org_roles');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public async getOrganizationUsers(correlationId: string, orgId: string): Promise<string[]> {
        return await this.callCommand(
            'get_organization_users',
            correlationId,
            {
                org_id: orgId
            }
        );   
    }

    public async getOrganizationAdmins(correlationId: string, orgId: string): Promise<string[]> {
        return await this.callCommand(
            'get_organization_admins',
            correlationId,
            {
                org_id: orgId
            }
        );
    }
    
    public async getOrganizationUserRoles(correlationId: string, orgId: string, paging: PagingParams): Promise<UserRolesV1[]> {
        return await this.callCommand(
            'get_organization_user_roles',
            correlationId,
            {
                org_id: orgId,
                paging: paging
            }
        );
    }

    public async grantOrgRole(correlationId: string, orgId: string, userId: string, role: string): Promise<string[]> {
        return await this.callCommand(
            'grant_org_role',
            correlationId,
            {
                org_id: orgId,
                user_id: userId,
                user_role: role
            }
        );  
    }

    public async revokeOrgRole(correlationId: string, orgId: string, userId: string, role: string): Promise<string[]> {
        return await this.callCommand(
            'revoke_org_role',
            correlationId,
            {
                org_id: orgId,
                user_id: userId,
                user_role: role
            }
        );  
    }

    public async grantDemoOrganizationUserRole(correlationId: string, userId: string, language: string): Promise<string> {
        return await this.callCommand(
            'grant_demo_organization_user_role',
            correlationId,
            {
                user_id: userId,
                language: language
            }
        );         
    }

}
