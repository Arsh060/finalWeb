import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollegeDataService {

  private dataUrl = './assets/data/college-data.json';

  constructor(private http: HttpClient) { }

  getCollegeData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
}

