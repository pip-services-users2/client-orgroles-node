import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { OrgRolesNullClientV1 } from '../version1/OrgRolesNullClientV1';
import { OrgRolesDirectClientV1 } from '../version1/OrgRolesDirectClientV1';
import { OrgRolesHttpClientV1 } from '../version1/OrgRolesHttpClientV1';
import { OrgRolesLambdaClientV1 } from '../version1/OrgRolesLambdaClientV1';

export class OrgRolesClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-orgroles', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-orgroles', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-orgroles', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('service-orgroles', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('service-orgroles', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(OrgRolesClientFactory.NullClientV1Descriptor, OrgRolesNullClientV1);
		this.registerAsType(OrgRolesClientFactory.DirectClientV1Descriptor, OrgRolesDirectClientV1);
		this.registerAsType(OrgRolesClientFactory.HttpClientV1Descriptor, OrgRolesHttpClientV1);
		this.registerAsType(OrgRolesClientFactory.LambdaClientV1Descriptor, OrgRolesLambdaClientV1);
	}
	
}
