import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotepadFormComponent } from './pages/notepad-form/notepad-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NoteDetailComponent } from './pages/note-detail/note-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NotepadFormComponent,
    DashboardComponent,
    NoteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
