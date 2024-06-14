import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notepad-form',
  templateUrl: './notepad-form.component.html',
  styleUrls: ['./notepad-form.component.css']
})
export class NotepadFormComponent implements OnInit {
  title = '';
  description = '';
  id: number | null = null;

  constructor(
    private noteService: NoteService, 
    private router: Router,
    private route: ActivatedRoute){}

    ngOnInit(): void{
      this.id = this.route.snapshot.paramMap.get('id') ? Number(this.route.snapshot.paramMap.get('id')): null;
      if(this.id){
        this.noteService.getNoteById(this.id).subscribe((data: any[]) => {
          if(data.length > 0){
            const note = data[0];
            this.title = note.title;
            this.description = note.description;
          }
        })
      }
    }

  saveNote(){
    if(this.id){
      const updatedNote = {
        title: this.title,
        description: this.description
      };
      this.noteService.updateNote(this.id, updatedNote).subscribe(() =>{
        this.router.navigate(['/dashboard']);
      })
    }else{
      let idNumber = Math.floor(Math.random() * 1000)
      const newNote = {
        id: idNumber.toString(),
        title: this.title,
        description: this.description
      };
      this.noteService.addNote(newNote).subscribe(() =>{
        this.router.navigate(['/dashboard']);
      })
    }
  }

  cancel(){
    this.router.navigate(['/dashboard']);
  }
}
