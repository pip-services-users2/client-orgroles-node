import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { RolesNullClientV1 } from 'client-roles-node';
import { OrganizationsNullClientV1 } from 'client-organizations-node';

import { OrgRolesController } from 'service-orgroles-node';
import { OrgRolesCommandableHttpServiceV1 } from 'service-orgroles-node';
import { OrgRolesCommandableHttpClientV1 } from '../../src/version1/OrgRolesCommandableHttpClientV1';
import { OrgRolesClientFixtureV1 } from './OrgRolesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('OrgRolesCommandableRestClientV1', ()=> {
    let service: OrgRolesCommandableHttpServiceV1;
    let client: OrgRolesCommandableHttpClientV1;
    let fixture: OrgRolesClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let controller = new OrgRolesController();

        service = new OrgRolesCommandableHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('service-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-roles', 'client', 'null', 'default', '1.0'), new RolesNullClientV1(),
            new Descriptor('service-organizations', 'client', 'null', 'default', '1.0'), new OrganizationsNullClientV1(),
            new Descriptor('service-orgroles', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-orgroles', 'service', 'commandable-http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new OrgRolesCommandableHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new OrgRolesClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('Grant and Revoke Organization Roles', async () => {
        await fixture.testGrantAndRevokeOrgRoles();
    });

    test('Grant Demo Organization User Role', async () => {
        await fixture.testGrantDemoOrganizationUserRole();
    });

});
