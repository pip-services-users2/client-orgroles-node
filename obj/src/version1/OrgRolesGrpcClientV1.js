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
exports.OrgRolesGrpcClientV1 = void 0;
const services = require('../../../src/protos/orgroles_v1_grpc_pb');
const messages = require('../../../src/protos/orgroles_v1_pb');
const pip_services3_grpc_nodex_1 = require("pip-services3-grpc-nodex");
const OrgRolesGrpcConverterV1_1 = require("./OrgRolesGrpcConverterV1");
class OrgRolesGrpcClientV1 extends pip_services3_grpc_nodex_1.GrpcClient {
    constructor() {
        super(services.OrgRolesClient);
    }
    getOrganizationUsers(correlationId, orgId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.OrgIdRequest();
            request.setOrgId(orgId);
            let timing = this.instrument(correlationId, 'org_roles.get_organization_users');
            try {
                let response = yield this.call('get_organization_users', correlationId, request);
                if (response.error != null)
                    throw OrgRolesGrpcConverterV1_1.OrgRolesGrpcConverterV1.toError(response.error);
                return response ? response.getUserIdsList() : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getOrganizationAdmins(correlationId, orgId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.OrgIdRequest();
            request.setOrgId(orgId);
            let timing = this.instrument(correlationId, 'org_roles.get_organization_admins');
            try {
                let response = yield this.call('get_organization_admins', correlationId, request);
                if (response.error != null)
                    throw OrgRolesGrpcConverterV1_1.OrgRolesGrpcConverterV1.toError(response.error);
                return response ? response.getUserIds() : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getOrganizationUserRoles(correlationId, orgId, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.RolesListRequest();
            request.setOrgId(orgId);
            request.setPaging(paging);
            let timing = this.instrument(correlationId, 'org_roles.get_organization_user_roles');
            try {
                let response = yield this.call('get_organization_user_roles', correlationId, request);
                if (response.error != null)
                    throw OrgRolesGrpcConverterV1_1.OrgRolesGrpcConverterV1.toError(response.error);
                return response ? OrgRolesGrpcConverterV1_1.OrgRolesGrpcConverterV1.toUserRolesList(response.getUserRolesList()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    grantOrgRole(correlationId, orgId, userId, role) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.UserRoleRequest();
            request.setOrgId(orgId);
            request.setUserId(userId);
            request.setUserRole(role);
            let timing = this.instrument(correlationId, 'org_roles.grant_org_role');
            try {
                let response = yield this.call('grant_org_role', correlationId, request);
                if (response.error != null)
                    throw OrgRolesGrpcConverterV1_1.OrgRolesGrpcConverterV1.toError(response.error);
                return response ? response.getRolesList() : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    revokeOrgRole(correlationId, orgId, userId, role) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.UserRoleRequest();
            request.setOrgId(orgId);
            request.setUserId(userId);
            request.setUserRole(role);
            let timing = this.instrument(correlationId, 'org_roles.revoke_org_role');
            try {
                let response = yield this.call('revoke_org_role', correlationId, request);
                if (response.error != null)
                    throw OrgRolesGrpcConverterV1_1.OrgRolesGrpcConverterV1.toError(response.error);
                return response ? response.getRolesList() : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    grantDemoOrganizationUserRole(correlationId, userId, language) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.DemoOrganizationRequest();
            request.setUserId(userId);
            request.setLanguage(language);
            let timing = this.instrument(correlationId, 'org_roles.grant_demo_organization_user_role');
            try {
                let response = yield this.call('grant_demo_organization_user_role', correlationId, request);
                if (response.error != null)
                    throw OrgRolesGrpcConverterV1_1.OrgRolesGrpcConverterV1.toError(response.error);
                return response ? response.getOrgId() : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.OrgRolesGrpcClientV1 = OrgRolesGrpcClientV1;
//# sourceMappingURL=OrgRolesGrpcClientV1.js.map