"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgRolesClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const OrgRolesNullClientV1_1 = require("../version1/OrgRolesNullClientV1");
const OrgRolesDirectClientV1_1 = require("../version1/OrgRolesDirectClientV1");
const OrgRolesHttpClientV1_1 = require("../version1/OrgRolesHttpClientV1");
const OrgRolesLambdaClientV1_1 = require("../version1/OrgRolesLambdaClientV1");
class OrgRolesClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(OrgRolesClientFactory.NullClientV1Descriptor, OrgRolesNullClientV1_1.OrgRolesNullClientV1);
        this.registerAsType(OrgRolesClientFactory.DirectClientV1Descriptor, OrgRolesDirectClientV1_1.OrgRolesDirectClientV1);
        this.registerAsType(OrgRolesClientFactory.HttpClientV1Descriptor, OrgRolesHttpClientV1_1.OrgRolesHttpClientV1);
        this.registerAsType(OrgRolesClientFactory.LambdaClientV1Descriptor, OrgRolesLambdaClientV1_1.OrgRolesLambdaClientV1);
    }
}
exports.OrgRolesClientFactory = OrgRolesClientFactory;
OrgRolesClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-orgroles', 'factory', 'default', 'default', '1.0');
OrgRolesClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-orgroles', 'client', 'null', 'default', '1.0');
OrgRolesClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-orgroles', 'client', 'direct', 'default', '1.0');
OrgRolesClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-orgroles', 'client', 'http', 'default', '1.0');
OrgRolesClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-orgroles', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=OrgRolesClientFactory.js.map