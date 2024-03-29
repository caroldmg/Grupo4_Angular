import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  

  showMenu: boolean = false
  isLoggedIn = false;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(loggedIn => this.isLoggedIn = loggedIn);
}

}
