import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusterService } from 'src/app/core/services/buster.service';
import { TableAction } from 'src/app/shared/models/TableActions.model';
import { Buster } from 'src/app/shared/models/buster';

@Component({
  selector: 'app-squad-edit-members',
  templateUrl: './squad-edit-members.component.html',
  styleUrls: ['./squad-edit-members.component.scss']
})
export class SquadEditMembersComponent implements OnInit {

  @Input() squadId: number;

  @Input() members: Buster[];

  @Input('manager') set setManager(manager: Buster) {
    this.initManagerForm(manager);
    this.manager = manager;
  }

  public manager: Buster;

  public managerForm: FormGroup = this.formBuilder.group({
    firstName: [{ value: '', disabled: true }, [Validators.required]],
    lastName: [{ value: '', disabled: true }, [Validators.required]],
    email: [{ value: '', disabled: true }, [Validators.required]],
    rank: [{ value: '', disabled: true }, [Validators.required]]
  });

  public bustersListingAction: TableAction = {
    onDelete: (busterId: number) => this.removeBusterInSquad(busterId),
    onConsult: (busterId: number) => this.router.navigate(['/admin'], { queryParams: { resourceId: busterId } })
  };

  constructor(
    public busterService: BusterService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void { }

  private initManagerForm(manager: Buster): void {
    this.managerForm.controls.firstName.setValue(manager.firstName);
    this.managerForm.controls.lastName.setValue(manager.lastName);
    this.managerForm.controls.email.setValue(manager.email);
    this.managerForm.controls.rank.setValue(manager.rank);
  }

  public removeManagement(busterId: number) {
    this.busterService.removeManagement(busterId, this.squadId).subscribe(
      () => this.manager = undefined
    );
  }

  public addManagement(buster: Buster) {
    this.busterService.addManagement(buster.id, this.squadId).subscribe(
      () => {
        this.manager = buster;
        this.initManagerForm(buster);
      }
    );
  }

  public removeBusterInSquad(busterId: number) {
    this.busterService.removeMembershipOfSquad(busterId, this.squadId).subscribe(
      () => this.members = this.members.filter((b) => b.id !== busterId)
    );
  }

  public addMemberInSquad(buster: Buster) {
    this.busterService.addMembership(buster.id, this.squadId).subscribe(
      () => this.members.push(buster)
    );
  }

}
