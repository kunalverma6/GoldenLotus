import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  // Configuration,
  // OpenAIApi,
  OpenAI,
  ClientOptions,
  ConflictError,
} from 'openai';
import { environment } from '../../../../Environment/Environment';
import { OpenaiService } from '../../Services/openai-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-chat-gpt',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './chat-gpt.component.html',
  styleUrl: './chat-gpt.component.css',
})
export class ChatGptComponent {
  title = 'ChatGPT';
  chatConversation: Array<any> = [];
  response!: any | undefined;
  promptText = '';
  showSpinner = false;

  constructor(private openaiService: OpenaiService) {}
  @Input() outputText?: string;
  ngOnInit(): void {}

  checkResponse() {
    this.pushChatContent(this.promptText, 'You', 'person');
    // this.invokeGPT();
  }
  pushChatContent(content: string, person: string, cssClass: string) {
    const chatToPush: any = {
      person: person,
      response: content,
      cssClass: cssClass,
    };
    this.chatConversation.push(chatToPush);
  }

  getText(data: string) {
    return data.split('\n').filter((f) => f.length > 0);
  }

  generateText() {
    const prompt = 'Once upon a time'; // Your prompt
    this.openaiService.getCompletion(prompt).subscribe((response) => {
      console.log(response.choices[0].text); // Handle the response as needed
    });
  }
  openaiOutput?: string;
  generateAnswers(prompt: string) {
    this.openaiService.getCompletion(prompt).subscribe((response) => {
      this.openaiOutput = response.choices[0].text;
    });
  }

  // async invokeGPT() {
  //   if (this.promptText.length < 2) return;
  //   try {
  //     this.response = undefined;
  //     // let configuration = new Configuration({ apiKey: environment.apiKey });
  //     let openai = OpenAI;

  //     let requestData = {
  //       model: 'text-davinci-003',
  //       prompt: this.promptText,
  //       temperature: 0.95,
  //       max_tokens: 150,
  //       top_p: 1.0,
  //       frequency_penalty: 0.0,
  //       presence_penalty: 0.0,
  //       stream: false,
  //     };
  //     // let apiResponse = await openai.OpenAI.call(requestData); //   .createCompletion(requestData);
  //     // const headers = new HttpHeaders({
  //     //   'Content-Type': 'application/json',
  //     //   'Authorization': `Bearer ${environment.apiKey}`
  //     // });
  //     // const completion: any = await this.http.post("https://api.openai.com/v1/completions", requestData, { headers }).toPromise();

  //     this.showSpinner = true;

  //     // this.response = apiResponse.data;
  //     this.showSpinner = false;
  //     this.pushChatContent(this.response.choices[0].text.trim(), 'Bot', 'bot');
  //     this.showSpinner = false;
  //   } catch (error: any) {
  //     this.showSpinner = false;
  //     // Consider adjusting the error handling logic for your use case
  //     if (error.response) {
  //       console.error(error.response.status, error.response.data);
  //     } else {
  //       console.error(`Error with OpenAI API request: ${error.message}`);
  //     }
  //   }
  // }
}
