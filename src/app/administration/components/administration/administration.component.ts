import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  public menuItems: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-fw pi-home' }
  ]

  public items: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/admin' },
    { label: 'Buster', icon: 'pi pi-fw pi-user', routerLink: '/admin/buster' },
    { label: 'Squad', icon: 'pi pi-fw pi-users', routerLink: '/admin/squad' },
    { label: 'Client', icon: 'pi pi-fw pi-id-card', routerLink: '/admin/client' },
    { label: 'Project', icon: 'pi pi-fw pi-desktop', routerLink: '/admin/project' },
    { label: 'Event', icon: 'pi pi-fw pi-calendar', routerLink: '/admin/event' },
    { label: 'Technology', icon: 'pi pi-fw pi-globe', routerLink: '/admin/technology' },
    { label: 'Job', icon: 'pi pi-fw pi-wallet', routerLink: '/admin/job' },
    { label: 'Website', icon: 'pi pi-fw pi-cog', routerLink: '/admin/website' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
