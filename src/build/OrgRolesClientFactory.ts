import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { OrgRolesNullClientV1 } from '../version1/OrgRolesNullClientV1';
import { OrgRolesDirectClientV1 } from '../version1/OrgRolesDirectClientV1';
import { OrgRolesCommandableHttpClientV1 } from '../version1/OrgRolesCommandableHttpClientV1';
import { OrgRolesCommandableLambdaClientV1 } from '../version1/OrgRolesCommandableLambdaClientV1';

export class OrgRolesClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-orgroles', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-orgroles', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-orgroles', 'client', 'direct', 'default', '1.0');
	public static CmdHttpClientV1Descriptor = new Descriptor('service-orgroles', 'client', 'commandable-http', 'default', '1.0');
	public static CmdLambdaClientV1Descriptor = new Descriptor('service-orgroles', 'client', 'commandable-lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(OrgRolesClientFactory.NullClientV1Descriptor, OrgRolesNullClientV1);
		this.registerAsType(OrgRolesClientFactory.DirectClientV1Descriptor, OrgRolesDirectClientV1);
		this.registerAsType(OrgRolesClientFactory.CmdHttpClientV1Descriptor, OrgRolesCommandableHttpClientV1);
		this.registerAsType(OrgRolesClientFactory.CmdLambdaClientV1Descriptor, OrgRolesCommandableLambdaClientV1);
	}
	
}
