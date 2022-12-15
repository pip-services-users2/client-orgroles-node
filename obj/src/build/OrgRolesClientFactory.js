"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgRolesClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const OrgRolesNullClientV1_1 = require("../version1/OrgRolesNullClientV1");
const OrgRolesDirectClientV1_1 = require("../version1/OrgRolesDirectClientV1");
const OrgRolesCommandableHttpClientV1_1 = require("../version1/OrgRolesCommandableHttpClientV1");
const OrgRolesCommandableLambdaClientV1_1 = require("../version1/OrgRolesCommandableLambdaClientV1");
class OrgRolesClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(OrgRolesClientFactory.NullClientV1Descriptor, OrgRolesNullClientV1_1.OrgRolesNullClientV1);
        this.registerAsType(OrgRolesClientFactory.DirectClientV1Descriptor, OrgRolesDirectClientV1_1.OrgRolesDirectClientV1);
        this.registerAsType(OrgRolesClientFactory.CmdHttpClientV1Descriptor, OrgRolesCommandableHttpClientV1_1.OrgRolesCommandableHttpClientV1);
        this.registerAsType(OrgRolesClientFactory.CmdLambdaClientV1Descriptor, OrgRolesCommandableLambdaClientV1_1.OrgRolesCommandableLambdaClientV1);
    }
}
exports.OrgRolesClientFactory = OrgRolesClientFactory;
OrgRolesClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-orgroles', 'factory', 'default', 'default', '1.0');
OrgRolesClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-orgroles', 'client', 'null', 'default', '1.0');
OrgRolesClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-orgroles', 'client', 'direct', 'default', '1.0');
OrgRolesClientFactory.CmdHttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-orgroles', 'client', 'commandable-http', 'default', '1.0');
OrgRolesClientFactory.CmdLambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-orgroles', 'client', 'commandable-lambda', 'default', '1.0');
//# sourceMappingURL=OrgRolesClientFactory.js.map