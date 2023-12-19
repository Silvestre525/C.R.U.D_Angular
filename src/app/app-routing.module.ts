import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';

const appRoutes:Routes=[
  {path: 'list', component: ListComponent},
  {path: 'form', component: FormComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ]

})
export class AppRoutingModule { }
