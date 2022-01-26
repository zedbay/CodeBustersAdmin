import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LoginService } from 'src/app/core/services/login.service';
import { imgPath } from 'src/app/shared/constants/imgPath';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  public imgPath = imgPath;

  public menuItems: MenuItem[] = [
    {
      label: 'Antoine Heurtault',
      icon: 'pi pi-fw pi-user',
      items: [
        {
          label: 'Change password',
          icon: 'pi pi-fw pi-lock',
        },
        {
          label: 'Logout',
          icon: 'pi pi-fw pi-power-off',
          command: () => this.loginService.logout()
        }
      ]
    }
  ]

  public items: MenuItem[] = [
    { label: 'Buster', icon: 'pi pi-fw pi-user', routerLink: '/admin' },
    { label: 'Squad', icon: 'pi pi-fw pi-users', routerLink: '/admin/squad' },
    { label: 'Client', icon: 'pi pi-fw pi-id-card', routerLink: '/admin/client' },
    { label: 'Project', icon: 'pi pi-fw pi-desktop', routerLink: '/admin/project' },
    { label: 'Event', icon: 'pi pi-fw pi-calendar', routerLink: '/admin/event' },
    { label: 'Technology', icon: 'pi pi-fw pi-globe', routerLink: '/admin/technology' },
    { label: 'Job', icon: 'pi pi-fw pi-wallet', routerLink: '/admin/job' },
    { label: 'Contact', icon: 'pi pi-envelope', routerLink: '/admin/contact' },
    { label: 'Website', icon: 'pi pi-fw pi-cog', routerLink: '/admin/website' },
  ];

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

}
