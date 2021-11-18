import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/account/forgot-password/forgot-password.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { ResetPasswordComponent } from './components/account/reset-password/reset-password.component';
import { ProductsComponent } from './components/collection/products/products.component';
import { IndexComponent } from './components/home/index/index.component';

const routes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent
  },
  {
    path: "reset-password",
    component: ResetPasswordComponent
  },
  {
    path: "collection/:name",
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
