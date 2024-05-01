import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatGptComponent } from './ChatGPT/chat-gpt/chat-gpt.component';
import { OpenaiService } from './Services/openai-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatGptComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'GoldenLotus';
  openaiOutput?: string = 'write hello word program in C#';

  constructor(private openaiService: OpenaiService) {}

  generateText(prompt: string) {
    this.openaiService.getCompletion(prompt).subscribe((response) => {
      this.openaiOutput = response.choices[0].text;
    });
  }
}
