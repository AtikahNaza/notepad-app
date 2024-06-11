import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent {
  note: any = {};

  constructor(private route: ActivatedRoute, private noteService: NoteService){}

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    this.noteService.getNoteById(Number(id)).subscribe((data: any) =>{
      if(data.length > 0){
        this.note = data[0];
      }
    })
  }
}
