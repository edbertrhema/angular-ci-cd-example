import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RxjsCommunication } from '../../shared/services/communication/rxjs-communication';

@Component({
  selector: 'app-component-subscriber',
  imports: [],
  templateUrl: './component-subscriber.html',
  styleUrl: './component-subscriber.css'
})
export class ComponentSubscriber implements OnDestroy{

  message = '';
  subscription!: Subscription;

  constructor(private shared: RxjsCommunication) {
    // Subscribe to message changes
    // this.subscription = this.shared.message$.subscribe(
    //   msg => this.message = msg
    // );
    this.subscription = this.shared.getChannel('A').subscribe(
      msg => this.message = msg
    );

  }

  ngOnDestroy() {
    // Clean up subscription to avoid memory leaks
    this.subscription.unsubscribe();
  }  

}
