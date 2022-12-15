const services = require('../../../src/protos/orgroles_v1_grpc_pb');
const messages = require('../../../src/protos/orgroles_v1_pb');

import { PagingParams } from 'pip-services3-commons-nodex';
import { GrpcClient } from 'pip-services3-grpc-nodex';

import { IOrgRolesClientV1 } from './IOrgRolesClientV1';
import { UserRolesV1 } from './UserRolesV1';
import { OrgRolesGrpcConverterV1 } from './OrgRolesGrpcConverterV1';

export class OrgRolesGrpcClientV1 extends GrpcClient implements IOrgRolesClientV1 {
        
    public constructor() {
        super(services.OrgRolesClient);
    }

    public async getOrganizationUsers(correlationId: string, orgId: string): Promise<string[]> {

        let request = new messages.OrgIdRequest();
        request.setOrgId(orgId);

        let timing = this.instrument(correlationId, 'org_roles.get_organization_users');

        try {
            let response = await this.call<any>('get_organization_users', correlationId, request);

            if (response.error != null)
                throw OrgRolesGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? response.getUserIdsList() : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async getOrganizationAdmins(correlationId: string, orgId: string): Promise<string[]> {

        let request = new messages.OrgIdRequest();
        request.setOrgId(orgId);

        let timing = this.instrument(correlationId, 'org_roles.get_organization_admins');

        try {
            let response = await this.call<any>('get_organization_admins', correlationId, request);

            if (response.error != null)
                throw OrgRolesGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? response.getUserIds() : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }
    
    public async getOrganizationUserRoles(correlationId: string, orgId: string, paging: PagingParams): Promise<UserRolesV1[]> {

        let request = new messages.RolesListRequest();
        request.setOrgId(orgId);
        request.setPaging(paging);

        let timing = this.instrument(correlationId, 'org_roles.get_organization_user_roles');

        try {
            let response = await this.call<any>('get_organization_user_roles', correlationId, request);

            if (response.error != null)
                throw OrgRolesGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? OrgRolesGrpcConverterV1.toUserRolesList(response.getUserRolesList()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }     
    }

    public async grantOrgRole(correlationId: string, orgId: string, userId: string, role: string): Promise<string[]> {

        let request = new messages.UserRoleRequest();
        request.setOrgId(orgId);
        request.setUserId(userId);
        request.setUserRole(role);

        let timing = this.instrument(correlationId, 'org_roles.grant_org_role');

        try {
            let response = await this.call<any>('grant_org_role', correlationId, request);

            if (response.error != null)
                throw OrgRolesGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? response.getRolesList() : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async revokeOrgRole(correlationId: string, orgId: string, userId: string, role: string): Promise<string[]> {

        let request = new messages.UserRoleRequest();
        request.setOrgId(orgId);
        request.setUserId(userId);
        request.setUserRole(role);

        let timing = this.instrument(correlationId, 'org_roles.revoke_org_role');

        try {
            let response = await this.call<any>('revoke_org_role', correlationId, request);

            if (response.error != null)
                throw OrgRolesGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? response.getRolesList() : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }
    
    public async grantDemoOrganizationUserRole(correlationId: string, userId: string, language: string): Promise<string> {

        let request = new messages.DemoOrganizationRequest();
        request.setUserId(userId);
        request.setLanguage(language);

        let timing = this.instrument(correlationId, 'org_roles.grant_demo_organization_user_role');

        try {
            let response = await this.call<any>('grant_demo_organization_user_role', correlationId, request);

            if (response.error != null)
                throw OrgRolesGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? response.getOrgId() : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

}
