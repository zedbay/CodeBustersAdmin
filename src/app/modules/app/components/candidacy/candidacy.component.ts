import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { ContactService } from 'src/app/core/services/contact.service';
import { FileService } from 'src/app/core/services/file.service';
import { JobService } from 'src/app/core/services/job.service';
import { RankService } from 'src/app/core/services/rank.service';
import { SquadService } from 'src/app/core/services/squad.service';
import { CandidacyType, Contact } from 'src/app/shared/models/contact';
import { Job } from 'src/app/shared/models/job';
import { Squad } from 'src/app/shared/models/squad';

@Component({
  selector: 'app-candidacy',
  templateUrl: './candidacy.component.html',
  styleUrls: ['./candidacy.component.scss']
})
export class CandidacyComponent implements OnInit {

  public displaySuccessMessage: boolean = false;

  public candidacyTypes = CandidacyType;

  public candidacyForm: FormGroup = this.formBuilder.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    mail: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    freeField: ['', [Validators.required]],
    cv: [{ value: 'CV', disabled: true }, [Validators.required]],
    candidacyType: [CandidacyType.SPONTANEE, [Validators.required]]
  });

  public cv: File;

  public job: Job;
  public squad: Squad;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private fileService: FileService,
    private jobService: JobService,
    private squadService: SquadService,
    private route: ActivatedRoute,
    public rankService: RankService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.queryParams.jobId) {
      this.jobService.read(this.route.snapshot.queryParams.jobId)
        .pipe(
          tap((j: Job) => this.job = j),
          mergeMap((j: Job) => this.squadService.read(j.squad.id)),
          tap((s: Squad) => this.squad = s)
        )
        .subscribe(
          () => this.candidacyForm.controls.candidacyType.setValue(this.job.title)
        );
    }
  }

  public return() {
    this.router.navigate([this.job ? `/busters/${this.job.id}` : '/busters'])
  }

  public sendContact(): void {
    this.contactService.create({
      firstname: this.candidacyForm.controls.firstname.value,
      lastname: this.candidacyForm.controls.lastname.value,
      mail: this.candidacyForm.controls.mail.value,
      phone: this.candidacyForm.controls.phone.value,
      freeField: this.candidacyForm.controls.freeField.value,
      answerType: 'Formulaire de contact',
      candidacyType: this.candidacyForm.controls.candidacyType.value
    })
      .pipe(
        mergeMap((contact: Contact) => {
          return forkJoin([
            this.cv ? this.contactService.uploadCV(contact.id, this.cv) : of({}),
            this.job ? this.contactService.addRelationWithJob(contact.id, this.job.id) : of({})
          ]);
        }),
      )
      .subscribe(
        () => this.displaySuccessMessage = true
      );
  }

  public uploadCV(): void {
    this.fileService.uploadFile().subscribe(
      (file: File) => {
        this.cv = file;
        this.candidacyForm.controls.cv.setValue(file.name);
      }
    );
  }

}
