import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RxjsCommunication } from '../../shared/services/communication/rxjs-communication';

@Component({
  selector: 'app-component-subscriber-1',
  imports: [],
  templateUrl: './component-subscriber-1.html',
  styleUrl: './component-subscriber-1.css'
})
export class ComponentSubscriber1 implements OnDestroy{

  message = '';
  subscription!: Subscription;

  constructor(private shared: RxjsCommunication) {
    // Subscribe to message changes
    // this.subscription = this.shared.message$.subscribe(
    //   msg => this.message = msg
    // );
    this.subscription = this.shared.getChannel('B').subscribe(
      msg => this.message = msg
    );
  }

  ngOnDestroy() {
    // Clean up subscription to avoid memory leaks
    this.subscription.unsubscribe();
  }  

}
