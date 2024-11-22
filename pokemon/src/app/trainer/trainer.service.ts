import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Trainer } from './Trainer';
//import { TrainerDetail } from './Trainer';


@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private apiUrl: string = environment.baseUrl + 'trainers.json';

  constructor(private http: HttpClient) { }

  getTrainers(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(this.apiUrl);
  }

  getTrainer(id: number): Observable<Trainer>{
    return this.http.get<Trainer>(this.apiUrl + id + '.json');
  }



}
