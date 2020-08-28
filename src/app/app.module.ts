import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { TestComponent } from './test/test.component';
import { CommonModule } from '@angular/common';
import { SocketService } from './services/socket.service';


import { ChatComponent } from './chat/chat.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    TestComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }



