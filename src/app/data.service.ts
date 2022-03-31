import { HttpClient } from "@angular/common/http";

export class DataService{

    constructor(private url: string, private http:HttpClient){}

    getAll(){
        return this.http.get(this.url);
    }
    
    create(resource:any){
        return this.http.post(this.url, JSON.stringify(resource));
    }

    update(resource: any){
        return this.http.put(`${this.url}/${resource.id}`, JSON.stringify(resource));
    }

    delete(id:number){
        return this.http.delete(`${this.url}/${id}`);
    }
}