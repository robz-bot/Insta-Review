import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InstaServiceService {
  constructor(private httpClient: HttpClient) {}
  private baseUrl =
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/instaf913f18.json';

  getAllInstaReviews() {
    return this.httpClient.get<any[]>(`${this.baseUrl}`);
  }
}
