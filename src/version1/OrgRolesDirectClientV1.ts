import { PagingParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { UserRolesV1 } from './UserRolesV1';
import { IOrgRolesClientV1 } from './IOrgRolesClientV1';
//import { IRolesController } from 'service-orgroles-node';

export class OrgRolesDirectClientV1 extends DirectClient<any> implements IOrgRolesClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-orgroles", "controller", "*", "*", "*"))
    }

    public async getOrganizationUsers(correlationId: string, orgId: string): Promise<string[]> {
        let timing = this.instrument(correlationId, 'org_roles.get_organization_users');
        
        try {
            return await this._controller.getOrganizationUsers(correlationId, orgId);
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
            return await this._controller.getOrganizationAdmins(correlationId, orgId);
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
            return await this._controller.getOrganizationUserRoles(correlationId, orgId, paging);
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
            return await this._controller.grantOrgRole(correlationId, orgId, userId, role);
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
            return await this._controller.revokeOrgRole(correlationId, orgId, userId, role);
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
            return await this._controller.grantDemoOrganizationUserRole(correlationId, userId, language);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

}