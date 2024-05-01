// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class OpenaiService {
//   constructor() {}
// }
// import axios, { AxiosResponse } from 'axios';
// const openAI = require('openai-api');
// require('dotenv').config();
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../Environment/Environment';
@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  private openaiUrl = 'https://api.openai.com/v1'; // Base URL for OpenAI API
  private apiKey = environment.apiKey; // Your OpenAI API Key

  constructor(public http: HttpClient) {}

  // Method to send a completion request to OpenAI
  getCompletion(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.apiKey,
    });

    const body = {
      prompt: prompt,
      max_tokens: 150, // Adjust as needed
      model: 'text-davinci-003', // Specify the model here
    };
    let requestData = {
      model: 'text-davinci-003',
      prompt: prompt,
      temperature: 0.95,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stream: false,
    };

    return this.http.post<any>(`${this.openaiUrl}/completions`, requestData, {
      headers: headers,
    });
  }
}
