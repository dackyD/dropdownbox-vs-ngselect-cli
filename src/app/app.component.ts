import { Component, OnInit } from '@angular/core';
import { AccessGroups, AccessGroupService } from './access-group.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  accessGroups: AccessGroups[];
  hasSelectedAll: boolean;

  constructor(private accessGroupsService: AccessGroupService) {}

  ngOnInit() {
    this.accessGroups = this.accessGroupsService.getAccessGroups();
  }

  selectOrDeselectAll($event: any) {}
}
