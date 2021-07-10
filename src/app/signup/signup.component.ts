import { Component, OnInit } from '@angular/core';
import { auth, createUserProfileDocument } from "../firebase.utility";
import { NgForm } from '@angular/forms';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isLoading = false;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  async signUp(form: NgForm) {
    this.isLoading = true;
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;
    const confirmPassword = form.value.confirmPassword;
    const displayName = form.value.displayName;

    if (password !== confirmPassword) {
      this.notificationService.showError('Password and Confirm Passwords do not match!', 'Error');
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      if (user) {
        await createUserProfileDocument(user, { displayName });
        this.notificationService.showSuccess('User created successfully!', 'Success');
      } else {
        this.notificationService.showError('Failed to create user', 'Error');
      }
      // clearing the form after creating the user
      form.resetForm();
    } catch (e) {
      console.log(e);
    }
  }
}
