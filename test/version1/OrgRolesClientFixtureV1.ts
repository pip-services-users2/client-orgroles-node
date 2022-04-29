const assert = require('chai').assert;

import { IOrgRolesClientV1 } from '../../src/version1/IOrgRolesClientV1';

export class OrgRolesClientFixtureV1 {
    private _client: IOrgRolesClientV1;
    
    constructor(client: IOrgRolesClientV1) {
        this._client = client;
    }
        
    public async testGrantAndRevokeOrgRoles() {
        // Grant organization role
        let roles = await this._client.grantOrgRole(null, '1', '123', 'manager');

        assert.isArray(roles);
        assert.lengthOf(roles, 1);
        assert.equal('1:manager', roles[0]);

        // Get organization users
        let userIds = await this._client.getOrganizationUsers(null, '1');

        // assert.isArray(userIds);
        // assert.lengthOf(userIds, 4);

        // Get organization roles
        let userRoles = await this._client.getOrganizationUserRoles(null, '1', null);

        // assert.isArray(userRoles);
        // assert.lengthOf(userRoles, 4);

        // Revoke organization role
        roles = await this._client.revokeOrgRole(null, '1', '123', 'manager');

        assert.isArray(roles);
        assert.lengthOf(roles, 0);
    }

    public async testGrantDemoOrganizationUserRole() {
        let orgId = await this._client.grantDemoOrganizationUserRole(
            null,
            '123', 'en'
        );

        assert.isString(orgId);
    }
}
