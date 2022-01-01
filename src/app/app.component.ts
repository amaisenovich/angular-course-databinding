import { Component } from '@angular/core';
import { Subscribe } from 'src/app/event-bus/subscribe.type';
import { Notify } from 'src/app/event-bus/notify.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscribe: Subscribe = null;

  notify: Notify = null;

  getSubscribe = (subscribe: Subscribe) => {
    this.subscribe = subscribe
  }

  getNotify = (notify: Notify) => {
    this.notify = notify
  }
}
