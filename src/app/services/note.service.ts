import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  apiUrl = "http://localhost:3000/notes";

  constructor(private http: HttpClient) { }

  getNotes(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }

  getNoteById(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}?id=${id}`);
  }

  addNote(note: any): Observable<any>{
    return this.http.post<any>(this.apiUrl, note);
  }

  updateNote(id:number, note: any): Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/${id}`, note);
  }

  deleteNote(id: number): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
