import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chillinggame-site';

  goToWhatsapp(){
    window.location.href = "https://wa.link/28u8sx"
  }
}

