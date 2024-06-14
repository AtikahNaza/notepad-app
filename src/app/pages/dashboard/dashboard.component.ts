import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  notes: any[] = [];

  constructor(private noteService: NoteService, private router: Router){}

  ngOnInit(): void{
    this.loadNotes();
  }

  loadNotes(){
    this.noteService.getNotes().subscribe((data: any[]) =>{
      this.notes = data;
    })
  }

  deleteNote(id: number){
    this.noteService.deleteNote(id).subscribe(() =>{
      this.loadNotes();
    })
  }

  editNote(id: number){
    this.router.navigate(['/notepad-form', {id}]);
  }
}
