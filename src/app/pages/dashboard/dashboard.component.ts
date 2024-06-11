import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  notes: any[] = [];

  constructor(private noteService: NoteService){}

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
}
