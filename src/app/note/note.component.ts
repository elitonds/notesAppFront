import { Component, OnInit } from '@angular/core';
import {Note} from '../dto/note.dto';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  note:Note = new Note();

  constructor() { 
    
  }

  cadastrar(){

  }

  ngOnInit() {
  }

}
