import { Component, OnInit, Inject } from '@angular/core';
import {Note} from '../dto/note.dto';
import {NoteService} from "../services/noteService.service";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  note:Note = new Note();

  constructor(private noteService:NoteService) { 

  }

  cadastrar(){
    debugger;
    this.noteService.postRequest("add_note", this.note);
    this.note = new Note();
  }

  ngOnInit() {
  }

}
