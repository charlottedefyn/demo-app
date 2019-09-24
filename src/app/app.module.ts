import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './front/navbar/navbar.component';
import { HomeComponent } from './front/home/home.component';
import { ContactComponent } from './front/contact/contact.component';
import { NotFoundComponent } from './front/not-found/not-found.component';
import { FooterComponent } from './front/footer/footer.component' ;

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms' ;
import { HttpClientModule } from '@angular/common/http';

import { ArticlesService } from './service/articles.service';
import { MorePipe } from './pipe/more.pipe';
import { ArticleComponent } from './front/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent,
    FooterComponent,
    MorePipe,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot([
        {path : '', component: HomeComponent } ,
        {path : 'article/:titre/:id', component: ArticleComponent } ,
        {path : 'contact', component: ContactComponent } ,
        {path : '**', component: NotFoundComponent }
      ]),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ArticlesService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
