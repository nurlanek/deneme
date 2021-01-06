import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BbService {
    private urlPrefix: String = 'http://localhost:8000';
    
    constructor(private http: HttpClient) { }
  
    getBbs(): Observable<Object[]> {
        return this.http.get<Object[]>(`${this.urlPrefix}/api/bbs/`);
    }
  
    getBb(pk: Number): Observable<Object> {
        return this.http.get<Object>(`${this.urlPrefix}/api/bbs/${pk}/`);
    }
  
    getComments(pk: Number): Observable<Object[]> {
        return this.http.get<Object[]>(`${this.urlPrefix}/api/bbs/${pk}/comments/`);
    }
    
    handleError() {
        return (error: any): Observable<Object> => {
            window.alert(error.message);
            return of(null);
        }
    }
    
    addComment(bb, author, password, content): Observable<Object> {
        const comment = {'bb': bb, 'author': author, 'content': content};
        const httpOptions = {
            headers: new HttpHeaders(
                { 'Content-Type': 'application/json',
                'Authorization': 'Basic ' + window.btoa(author + ':' + password) }
            )
        };
        return this.http.post<Object>(`${this.urlPrefix}/api/bbs/${bb}/comments/`,
        comment, httpOptions).pipe(catchError(this.handleError()));
    }
}
