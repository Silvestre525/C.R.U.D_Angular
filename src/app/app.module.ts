import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './components/form/form.component';
import { ListaPostsComponent } from './components/list/list.component';
import { RouterModule, Routes } from '@angular/router';




const appRoutes:Routes=[
  {path: 'list', component: ListaPostsComponent},
  {path: 'form', component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListaPostsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
