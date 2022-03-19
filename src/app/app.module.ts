import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { QuestionsComponent } from './questions/questions.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { ChangebgDirective } from './directive/changebg.directive';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    QuestionsComponent,
    HeaderComponent,
    PagenotFoundComponent,
    ChangebgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ChangebgDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
