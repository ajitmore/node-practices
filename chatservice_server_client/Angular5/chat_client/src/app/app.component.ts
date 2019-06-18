import { Component } from '@angular/core';
import { ChatService } from "./chat.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'chat-client';
  message: string;
  messages: any = [];
  notification: string = '';
  typing_text: string = '';
  username: string = '';
  show: boolean;

  constructor(private chatService: ChatService) {}

  chatMessage() {
    if(this.username.trim().length > 0) {
      this.show = true;
      this.chatService.connectToChat(this.username);
      this.initiateServices();
    }
  }

  sendMessage() {
    if(this.message.trim().length > 0) {
      let data = {
        message: this.message,
        username: this.username
      }
      this.chatService.sendMessage(data);
      this.message = '';
    }
  }

  onKeyPress(event: any) {
    this.chatService.typingMessage(this.username);
  }

  onBlur(event: any) {
    this.chatService.removeTyping();
  }

  initiateServices() {
    this.chatService.getMessages().subscribe((data: any) => {
        data.username = (this.username == data.username) ? 'Me': data.username;
        this.messages.push(data.username + ': ' + data.message);
      });

    this.chatService.getConnectionNotification().subscribe((msg: string) => {
      this.notification = msg;
      setTimeout(() => {
        this.notification = '';
      }, 3000);
    });

    this.chatService.getTypingMessage().subscribe((msg: string) => {
      this.typing_text = msg;
    });

    this.chatService.removeTypingMessage().subscribe((msg: string) => {
      this.typing_text = msg;
    });

    
  }
}
