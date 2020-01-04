import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LigneSelectComponent } from './components/ligne-select/ligne-select.component';
import { FAQComponent } from './components/faq/faq.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'home',
    component:LigneSelectComponent

  },
  {
    path:'login',
    component:LoginComponent

  },

  {
  path: 'FAQ',
  component: FAQComponent

},
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '/home',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
