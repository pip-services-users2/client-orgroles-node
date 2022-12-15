"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgRolesCommandableGrpcClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_grpc_nodex_1 = require("pip-services3-grpc-nodex");
class OrgRolesCommandableGrpcClientV1 extends pip_services3_grpc_nodex_1.CommandableGrpcClient {
    constructor(config) {
        super('v1/org_roles');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getOrganizationUsers(correlationId, orgId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_organization_users', correlationId, {
                org_id: orgId
            });
        });
    }
    getOrganizationAdmins(correlationId, orgId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_organization_admins', correlationId, {
                org_id: orgId
            });
        });
    }
    getOrganizationUserRoles(correlationId, orgId, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_organization_user_roles', correlationId, {
                org_id: orgId,
                paging: paging
            });
        });
    }
    grantOrgRole(correlationId, orgId, userId, role) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('grant_org_role', correlationId, {
                org_id: orgId,
                user_id: userId,
                user_role: role
            });
        });
    }
    revokeOrgRole(correlationId, orgId, userId, role) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('revoke_org_role', correlationId, {
                org_id: orgId,
                user_id: userId,
                user_role: role
            });
        });
    }
    grantDemoOrganizationUserRole(correlationId, userId, language) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('grant_demo_organization_user_role', correlationId, {
                user_id: userId,
                language: language
            });
        });
    }
}
exports.OrgRolesCommandableGrpcClientV1 = OrgRolesCommandableGrpcClientV1;
//# sourceMappingURL=OrgRolesCommandableGrpcClientV1.js.map