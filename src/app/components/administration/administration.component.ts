import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem, Message, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { LoginService } from 'src/app/core/services/login.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { imgPath } from 'src/app/shared/constants/imgPath';
import { ChangePasswordComponent } from '../change-password/change-password.component';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss'],
  providers: [MessageService, DialogService]
})
export class AdministrationComponent implements OnInit {

  public imgPath = imgPath;

  public menuItems: MenuItem[] = [
    {
      label: `${this.activatedRoute.snapshot.data.whoami.firstName} ${this.activatedRoute.snapshot.data.whoami.lastName}`,
      icon: 'pi pi-fw pi-user',
      items: [
        {
          label: 'Change password',
          icon: 'pi pi-fw pi-lock',
          command: () => this.showChangePassword()
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
    private loginService: LoginService,
    private messageService: MessageService,
    private toastService: ToastService,
    public dialogService: DialogService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.toastService.onToast.subscribe(
      (message: Message) => this.messageService.add(message)
    );
  }

  public showChangePassword(): void {
    const ref = this.dialogService.open(ChangePasswordComponent, {
      header: 'Modifier votre mot de passe'
    });
  }


}
