import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import {InputTextModule} from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesEditComponent } from './articles-edit/articles-edit.component';

import { OrderByPipe } from 'src/assets/orderBy.pipe';

import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { ArticlesService } from './articles/articles.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ArticlesComponent,
    OrderByPipe,
    ArticlesEditComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    DialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TableModule,
    SidebarModule,
    CardModule,
    ReactiveFormsModule,
    InputTextareaModule,
    CalendarModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    ArticlesService,
    OrderByPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
