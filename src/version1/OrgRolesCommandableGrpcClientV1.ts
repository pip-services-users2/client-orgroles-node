import { PagingParams } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';

import { CommandableGrpcClient } from 'pip-services3-grpc-nodex';

import { UserRolesV1 } from './UserRolesV1';
import { IOrgRolesClientV1 } from './IOrgRolesClientV1';

export class OrgRolesCommandableGrpcClientV1 extends CommandableGrpcClient implements IOrgRolesClientV1 {       
    
    constructor(config?: any) {
        super('v1/org_roles');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getOrganizationUsers(correlationId: string, orgId: string): Promise<string[]> {
        let timing = this.instrument(correlationId, 'org_roles.get_organization_users');

        try {
            return await this.callCommand(
                'get_organization_users',
                correlationId,
                {
                    org_id: orgId
                }
            );    
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getOrganizationAdmins(correlationId: string, orgId: string): Promise<string[]> {
        let timing = this.instrument(correlationId, 'org_roles.get_organization_admins');

        try {
            return await this.callCommand(
                'get_organization_admins',
                correlationId,
                {
                    org_id: orgId
                }
            );  
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
    
    public async getOrganizationUserRoles(correlationId: string, orgId: string, paging: PagingParams): Promise<UserRolesV1[]> {
        let timing = this.instrument(correlationId, 'org_roles.get_organization_user_roles');

        try {
            return await this.callCommand(
                'get_organization_user_roles',
                correlationId,
                {
                    org_id: orgId,
                    paging: paging
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }     
    }

    public async grantOrgRole(correlationId: string, orgId: string, userId: string, role: string): Promise<string[]> {
        let timing = this.instrument(correlationId, 'org_roles.grant_org_role');

        try {
            return await this.callCommand(
                'grant_org_role',
                correlationId,
                {
                    org_id: orgId,
                    user_id: userId,
                    user_role: role
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async revokeOrgRole(correlationId: string, orgId: string, userId: string, role: string): Promise<string[]> {
        let timing = this.instrument(correlationId, 'org_roles.revoke_org_role');

        try {
            return await this.callCommand(
                'revoke_org_role',
                correlationId,
                {
                    org_id: orgId,
                    user_id: userId,
                    user_role: role
                }
            );   
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async grantDemoOrganizationUserRole(correlationId: string, userId: string, language: string): Promise<string> {
        let timing = this.instrument(correlationId, 'org_roles.grant_demo_organization_user_role');

        try {
            return await this.callCommand(
                'grant_demo_organization_user_role',
                correlationId,
                {
                    user_id: userId,
                    language: language
                }
            );  
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }     
    }
    
}
