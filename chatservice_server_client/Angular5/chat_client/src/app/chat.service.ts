import { Injectable } from '@angular/core';
import * as io from "socket.io-client";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private url = 'http://localhost:3000/';
  private socket;
  public messageSchema = {
    username: '',
    message: ''
  };

  constructor() { 
    //this.socket = io();
  }

  public connectToChat(username: string) {
    this.socket = io(this.url);
    this.socket.emit('joinChat', { username: username });
  }

  public sendMessage(data: any) { 
    this.messageSchema.message = data.message;
    this.messageSchema.username = data.username;
    this.socket.emit('new-message', this.messageSchema);
    
  }
  
  public typingMessage(username: string) {
    if(this.socket)
      this.socket.emit('typing', { username: username });
  }

  public removeTyping() {
    if(this.socket)
      this.socket.emit('removeTyping');
  }

  public getTypingMessage = () => {
    return Observable.create((observer) => {
      if(this.socket) {
        this.socket.on('typing', (msg) => {
          observer.next(msg);
        });
      }
    });
  }

  public removeTypingMessage = () => {
    return Observable.create((observer) => {
      if(this.socket) {
        this.socket.on('removeTyping', (msg) => {
          observer.next(msg);
        });
      }
    });
  }

  public getConnectionNotification = () => {
    return Observable.create((observer) => {
      if(this.socket) {
        this.socket.on('connection', (msg) => {
          observer.next(msg);
        });
      }
    });
  }

  public getMessages = () => {
    return Observable.create((observer) => {
      if(this.socket) {
        this.socket.on('new-message', (data) => {
            observer.next(data);
        });
      }
    });
  } 
}
