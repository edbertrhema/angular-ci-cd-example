import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';   // 👈 required for ngModel
import { RxjsCommunication } from '../../shared/services/communication/rxjs-communication';
import { debounceTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-component-publisher',
  imports: [FormsModule],
  templateUrl: './component-publisher.html',
  styleUrl: './component-publisher.css'
})
export class ComponentPublisher implements AfterViewInit{
  @ViewChild('inputBox') inputBox!: ElementRef;
  
  text = '';

  constructor(private shared: RxjsCommunication) {}

  ngAfterViewInit() {
    // Convert input events into an observable stream
    fromEvent(this.inputBox.nativeElement, 'input')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(200) // 👈 optional: only emit after user pauses typing
      )
      .subscribe(value => this.shared.getChannel('A').next(value));
  }

  sendMessage() {
    this.shared.updateMessage(this.text);
  }  

}
