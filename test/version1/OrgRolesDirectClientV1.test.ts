import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { RolesNullClientV1 } from 'client-roles-node';
import { OrganizationsNullClientV1 } from 'client-organizations-node';

import { OrgRolesController } from 'service-orgroles-node';
import { OrgRolesDirectClientV1 } from '../../src/version1/OrgRolesDirectClientV1';
import { OrgRolesClientFixtureV1 } from './OrgRolesClientFixtureV1';

suite('OrgRolesDirectClientV1', ()=> {
    let client: OrgRolesDirectClientV1;
    let fixture: OrgRolesClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let controller = new OrgRolesController();

        let references: References = References.fromTuples(
            new Descriptor('service-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-roles', 'client', 'null', 'default', '1.0'), new RolesNullClientV1(),
            new Descriptor('service-organizations', 'client', 'null', 'default', '1.0'), new OrganizationsNullClientV1(),
            new Descriptor('service-orgroles', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new OrgRolesDirectClientV1();
        client.setReferences(references);

        fixture = new OrgRolesClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    test('Grant and Revoke Organization Roles', async () => {
        await fixture.testGrantAndRevokeOrgRoles();
    });

    test('Grant Demo Organization User Role', async () => {
        await fixture.testGrantDemoOrganizationUserRole();
    });

});
