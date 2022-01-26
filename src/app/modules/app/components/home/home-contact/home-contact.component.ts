import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/core/services/contact.service';
import { Answer, bustersQuestions, Question } from 'src/app/shared/content/questions.model';

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.scss']
})
export class HomeContactComponent implements OnInit {

  public questions: Question[] = bustersQuestions;

  public selectedQuestion: Question;

  public results: string[] = [];

  public contactForm: FormGroup = this.formBuilder.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    mail: ['', [Validators.required]],
    phone: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.selectedQuestion = this.questions[0];
  }

  public atLeastOneAnswerIsSelected(): boolean {
    const result: Answer = this.selectedQuestion.answers.find(
      (a: Answer) => a.selected
    );
    return !!result;
  }

  public nextQuestion(): void {
    this.results.push(
      this.selectedQuestion.answers.find((a: Answer) => a.selected).content
    );
    if (this.questions[this.selectedQuestion.number]) {
      this.selectedQuestion = this.questions[this.selectedQuestion.number];
    }
  }

  public selectAnswer(answer: Answer): void {
    this.resetAnswer();
    answer.selected = true;
  }

  private resetAnswer(): void {
    this.selectedQuestion.answers.forEach(
      (a: Answer) => a.selected = false
    );
  }

  public sendContact(): void {
    this.contactService.create({
      firstname: this.contactForm.controls.firstname.value,
      lastname: this.contactForm.controls.lastname.value,
      mail: this.contactForm.controls.mail.value,
      phone: this.contactForm.controls.phone.value,
      answer: this.results.join('//'),
      answerType: 'Réponse aux questions'
    }).subscribe(
      () => alert('Contact send')
    )
  }

}
