import { Component } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notepad-form',
  templateUrl: './notepad-form.component.html',
  styleUrls: ['./notepad-form.component.css']
})
export class NotepadFormComponent {
  title = '';
  description = '';

  constructor(private noteService: NoteService, private router: Router){}

  saveNote(){
    const newNote = {
      id: Math.floor(Math.random() * 1000),
      title: this.title,
      description: this.description
    };
    this.noteService.addNote(newNote).subscribe(() =>{
      this.router.navigate(['/dashboard']);
    })
  }
}
