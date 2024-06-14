import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotepadFormComponent } from './pages/notepad-form/notepad-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NoteDetailComponent } from './pages/note-detail/note-detail.component';

const routes: Routes = [
  {path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  {path: 'notepad-form', component: NotepadFormComponent},
  {path: 'notepad-form/:id', component: NotepadFormComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'note/:id', component: NoteDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
