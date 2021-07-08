import { Component, OnInit } from '@angular/core';
import { signInWithGoogle, auth } from "../firebase.utility";
import { NgForm } from '@angular/forms';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  isLoading = false;

  constructor(private notificationService: NotificationService) {  }

  ngOnInit(): void {
  }

  signInWithGoogle(){
    signInWithGoogle().then((res)=>{
      console.log(res);
    }).catch((err)=>{
      this.notificationService.showError(err.message, 'Error');
    });
  }

  signIn(form: NgForm){
    this.isLoading = true;
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    auth.signInWithEmailAndPassword(email, password).then((res) =>{
      this.isLoading = false;
      console.log(res);
    }).catch((err)=>{
      this.isLoading = false;
      this.notificationService.showError(err.message, 'Error');
    });
  }
}
