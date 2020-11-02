import { Injectable } from '@angular/core';

export interface AccessGroups {
  groupId: string;
  group: string;
  organizationId: string;
  organizationName: string;
}

@Injectable()
export class AccessGroupService {
  accessGroups = [
    {
      groupId: 'b9426f46-cb15-4be3-9fcc-005fedfd0a02',
      group: 'Gruppe 2',
      organizationId: '3c05cd87-8085-46c4-872b-926a64f6deaa',
      organizationName: 'RiksTV',
    },
    {
      groupId: '594aded3-52d2-484d-800a-013461d2fec3',
      group: 'TestGroupName - 968839',
      organizationId: '31a15049-2dbb-4cb1-9e67-03fc30e239fd',
      organizationName: 'CENTRALPARKEN',
    },
    {
      groupId: '6d6ec7b4-db7c-4440-92d7-0160f7964f53',
      group: 'Another Test Group',
      organizationId: '31a15049-2dbb-4cb1-9e67-03fc30e239fd',
      organizationName: 'CENTRALPARKEN',
    },
    {
      groupId: 'd58edf09-853d-4057-bb6b-0231be673abd',
      group: 'New Test Groupaa',
      organizationId: '31a15049-2dbb-4cb1-9e67-03fc30e239fd',
      organizationName: 'CENTRALPARKEN',
    },
    {
      groupId: '1ae64183-ac38-422d-9b34-06ce73c619e8',
      group: 'TestGroupName - 957157',
      organizationId: '31a15049-2dbb-4cb1-9e67-03fc30e239fd',
      organizationName: 'CENTRALPARKEN',
    },
    {
      groupId: '0a3e06b1-8df5-4d4b-90e2-07cb36975b79',
      group: 'newGroupName3 - 814380',
      organizationId: '31a15049-2dbb-4cb1-9e67-03fc30e239fd',
      organizationName: 'CENTRALPARKEN',
    },
    {
      groupId: '51edb130-80f5-48ec-b7fa-07ea82123d9f',
      group: 'TestGroupName - 918694',
      organizationId: '31a15049-2dbb-4cb1-9e67-03fc30e239fd',
      organizationName: 'CENTRALPARKEN',
    },
    {
      groupId: '101f1c1d-6c1b-479a-bf9f-0a9f001cb113',
      group: 'newGroupName3 - 481973',
      organizationId: '31a15049-2dbb-4cb1-9e67-03fc30e239fd',
      organizationName: 'CENTRALPARKEN',
    },
    {
      groupId: 'ce788a1c-07ac-4f85-ac81-0c890fbb7ca2',
      group: 'newGroupName3 - 749908',
      organizationId: '31a15049-2dbb-4cb1-9e67-03fc30e239fd',
      organizationName: 'CENTRALPARKEN',
    },
    {
      groupId: 'ac16fa17-57e0-4257-8628-0f4b728f3cca',
      group: 'Dyrehagegruppa',
      organizationId: '7b724e33-c87c-46a0-915d-5eccec044da3',
      organizationName: 'Dyrehage',
    },
    {
      groupId: '1612c489-0ab3-4547-a2e3-0f8f9d543d1a',
      group: 'newGroupName3 - 497284',
      organizationId: '31a15049-2dbb-4cb1-9e67-03fc30e239fd',
      organizationName: 'CENTRALPARKEN',
    },
    {
      groupId: 'a36e36de-c23b-40b4-bcdd-1439cb8bb430',
      group: 'new group',
      organizationId: '31a15049-2dbb-4cb1-9e67-03fc30e239fd',
      organizationName: 'CENTRALPARKEN',
    },
    {
      groupId: 'e9932732-2c09-46dd-8e93-1467dedd2f88',
      group: 'Overnatting Integration',
      organizationId: '31a15049-2dbb-4cb1-9e67-03fc30e239fd',
      organizationName: 'CENTRALPARKEN',
    },
    {
      groupId: 'e5e065cb-5fb2-403e-ac35-173072c84322',
      group: 'Test Jorgen',
      organizationId: '31a15049-2dbb-4cb1-9e67-03fc30e239fd',
      organizationName: 'CENTRALPARKEN',
    },
    {
      groupId: '3998e7df-f56a-411b-9bd9-18abf898e514',
      group: 'newGroupName - 365642',
      organizationId: '31a15049-2dbb-4cb1-9e67-03fc30e239fd',
      organizationName: 'CENTRALPARKEN',
    },
  ];

  constructor() {}

  getAccessGroups() {
    return this.accessGroups;
  }
}
