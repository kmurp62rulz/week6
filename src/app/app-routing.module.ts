import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from './test/test.component';
import {LoginComponent} from './login/login.component';
import {ChatComponent} from './chat/chat.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [{path: 'test', component: TestComponent},
{path: 'account', component: AccountComponent},
{path: 'login', component: LoginComponent},
{path: 'chat', component: ChatComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
