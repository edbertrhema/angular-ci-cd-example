import { Component } from '@angular/core';
import { ComponentPublisher } from "../component-publisher/component-publisher";
import { ComponentSubscriber } from "../component-subscriber/component-subscriber";
import { ComponentPublisher1 } from "../component-publisher-1/component-publisher-1";
import { ComponentSubscriber1 } from "../component-subscriber-1/component-subscriber-1";

@Component({
  selector: 'app-home',
  imports: [ComponentPublisher, ComponentSubscriber, ComponentPublisher1, ComponentSubscriber1],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
