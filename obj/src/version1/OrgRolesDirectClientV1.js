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
exports.OrgRolesDirectClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
//import { IRolesController } from 'service-orgroles-node';
class OrgRolesDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_1.Descriptor("service-orgroles", "controller", "*", "*", "*"));
    }
    getOrganizationUsers(correlationId, orgId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'org_roles.get_organization_users');
            try {
                return yield this._controller.getOrganizationUsers(correlationId, orgId);
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
            let timing = this.instrument(correlationId, 'org_roles.get_organization_admins');
            try {
                return yield this._controller.getOrganizationAdmins(correlationId, orgId);
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
            let timing = this.instrument(correlationId, 'org_roles.get_organization_user_roles');
            try {
                return yield this._controller.getOrganizationUserRoles(correlationId, orgId, paging);
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
            let timing = this.instrument(correlationId, 'org_roles.grant_org_role');
            try {
                return yield this._controller.grantOrgRole(correlationId, orgId, userId, role);
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
            let timing = this.instrument(correlationId, 'org_roles.revoke_org_role');
            try {
                return yield this._controller.revokeOrgRole(correlationId, orgId, userId, role);
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
            let timing = this.instrument(correlationId, 'org_roles.grant_demo_organization_user_role');
            try {
                return yield this._controller.grantDemoOrganizationUserRole(correlationId, userId, language);
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
exports.OrgRolesDirectClientV1 = OrgRolesDirectClientV1;
//# sourceMappingURL=OrgRolesDirectClientV1.js.map