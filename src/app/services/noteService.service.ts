import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Note } from "../dto/note.dto";

@Injectable()
export class NoteService{
    private basePath ="";
    private headers = new HttpHeaders();

    constructor(private http:HttpClient){
        this.basePath = environment.databaseURL;
        this.headers.set('Content-Type', 'application/json; charset=utf-8');
    }

    getRequest(){
        
    }

    postRequest(service:string, note:Note){
        debugger;
        this.http.post(this.basePath+service, JSON.stringify(note), {headers:this.headers}).subscribe(res =>{
            console.log(res);
        },
        err =>{
            console.log("Error ocurred");
        }
    )
    }

    putRequest(){
        
    }

    deleteRequest(){
        
    }

}