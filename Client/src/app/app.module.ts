import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { UserComponent } from './components/user/user.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { routingComponents, AppRoutingModule } from './routing/app-routing.module';
import { ApiService } from './services/api.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { TokenInterceptorService } from './interceptor/token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PagenotfoundComponent,
    LoginComponent,
    NavbarComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ApiService, AuthService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
