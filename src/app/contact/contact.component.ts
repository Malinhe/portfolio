import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  loadingState: boolean = false;
  // @ViewChild('myForm') myForm!: NgForm;
  @ViewChild('myForm') myForm: ElementRef;
  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('mailField') mailField: ElementRef;
  @ViewChild('messageField') messageField: ElementRef;
  @ViewChild('sendBtn') sendBtn: ElementRef;

  showLoading() {
    this.loadingState = true;
  }

  hideLoading() {
    this.loadingState = false;
  }


  async sendMail() {
  // disable fields and button
  const { nameField, mailField, messageField, sendBtn } = this;
  [nameField, mailField, messageField, sendBtn].forEach((field) => (field.nativeElement.disabled = true));

  const fd = new FormData();
  fd.append('name', nameField.nativeElement.value);
  fd.append('email', mailField.nativeElement.value);
  fd.append('message', messageField.nativeElement.value);

  // if (this.myForm.valid){ hilft auch nicht
  this.showLoading();


  // send
  await fetch('https://malaica-brunks.net/send_mail/send_mail.php', {
    method: 'POST',
    body: fd,
  });

  this.hideLoading();

  // Text anzeigen 'Nachricht gesendet'

  // enable fields and button
  [nameField, mailField, messageField, sendBtn].forEach((field) => (field.nativeElement.disabled = false));

  // clear fields
  [nameField, mailField, messageField].forEach((field) => (field.nativeElement.value = ''));
}


  // async sendMail() {
  //   //disable fields and button
  //   let nameField = this.nameField.nativeElement;
  //   let mailField = this.mailField.nativeElement;
  //   let messageField = this.messageField.nativeElement;
  //   let sendBtn = this.sendBtn.nativeElement;
  //   nameField.disabled = true;
  //   mailField.disabled = true;
  //   messageField.disabled = true;
  //   sendBtn.disabled = true;

  //   let fd = new FormData();
  //   fd.append('name', nameField.value);
  //   fd.append('email', mailField.value);
  //   fd.append('message', messageField.value);

  //   this.showLoading();

  //   //send
  //   await fetch('https://malaica-brunks.net/send_mail/send_mail.php',
  //     {
  //       method: 'POST',
  //       body: fd
  //     }
  //   );

  //  this.hideLoading();

  //   // Text anzeigen 'Nachricht gesendet'

  //   //enable fields and button
  //   nameField.disabled = false;
  //   mailField.disabled = false;
  //   messageField.disabled = false;
  //   sendBtn.disabled = false;

  //   //clear fields
  //   nameField.value = '';
  //   mailField.value = '';
  //   messageField.value = '';


  // }
}
