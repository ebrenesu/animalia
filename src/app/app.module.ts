import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormularioAnimalComponent } from './formulario-animal/formulario-animal.component';
import { RouterModule } from '@angular/router';

const routes=[
  {
    path:'item', 
    component:FormularioAnimalComponent 
  },
  {
    path:'home', 
    component:AppComponent 
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FormularioAnimalComponent,
  ],
  imports: 
  [ BrowserModule, 
    FormsModule,
    RouterModule.forRoot(routes,{
      anchorScrolling: 'enabled',
  }) ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
