import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsCommunication {

  // BehaviorSubject starts with a default value
  private messageSource = new BehaviorSubject<string>('Hello from Service');
  // Dynamic channel
  private channels = new Map<string, BehaviorSubject<string>>();

    // Expose as observable
  message$ = this.messageSource.asObservable();

  // Method to update message
  updateMessage(newMessage: string) {
    this.messageSource.next(newMessage);
  }

  // Get or create a channel by id
  getChannel(id: string): BehaviorSubject<string> {
    if (!this.channels.has(id)) {
      this.channels.set(id, new BehaviorSubject<string>('initial'));
    }
    return this.channels.get(id)!;
  }  


}
