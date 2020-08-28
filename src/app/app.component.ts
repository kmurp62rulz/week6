import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home';
}

import { ClickMeComponent } from './click.me.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
   imports: [BrowserModule],
   declarations: [ClickMeComponent],
   providers: [],
   bootstrap: [AppComponent]
})

export class AppModule {}