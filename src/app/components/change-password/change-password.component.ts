import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { tap } from 'rxjs/operators';
import { BusterService } from 'src/app/core/services/buster.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  public passwordForm: FormGroup = this.formBuilder.group({
    currentPassword: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmationPassword: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private busterService: BusterService,
    private toastService: ToastService,
    public ref: DynamicDialogRef
  ) { }

  ngOnInit(): void { }

  public changePassword() {
    this.busterService.changePassword(
      this.passwordForm.controls.currentPassword.value,
      this.passwordForm.controls.password.value,
    )
      .pipe(
        tap(
          () => this.toastService.sendToast({ severity: 'success', summary: 'Success', detail: 'Mot de passe modifié' })
        )
      )
      .subscribe(() => this.ref.close());
  }

}
