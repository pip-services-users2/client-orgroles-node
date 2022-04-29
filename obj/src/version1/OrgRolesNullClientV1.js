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
exports.OrgRolesNullClientV1 = void 0;
class OrgRolesNullClientV1 {
    getOrganizationUsers(correlationId, orgId) {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
    getOrganizationAdmins(correlationId, orgId) {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
    getOrganizationUserRoles(correlationId, orgId, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
    grantOrgRole(correlationId, orgId, userId, role) {
        return __awaiter(this, void 0, void 0, function* () {
            return [orgId + ':' + role];
        });
    }
    revokeOrgRole(correlationId, orgId, userId, role) {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
    grantDemoOrganizationUserRole(correlationId, userId, language) {
        return __awaiter(this, void 0, void 0, function* () {
            return 'demo';
        });
    }
}
exports.OrgRolesNullClientV1 = OrgRolesNullClientV1;
//# sourceMappingURL=OrgRolesNullClientV1.js.map