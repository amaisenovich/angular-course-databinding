import { Component } from '@angular/core';
import { Listener } from 'src/models/Listener';
import { Subscribe } from 'src/models/Subscribe';
import { Notify } from 'src/models/Notify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listeners: { [eventName: string]: Listener[] } = {}

  subscribe: Subscribe = (eventName, callback) => {
    this.listeners[eventName] = this.listeners[eventName] ? this.listeners[eventName] : [];
    this.listeners[eventName] = [
      ...this.listeners[eventName],
      callback
    ];

    return () => {
      this.listeners[eventName] = this.listeners[eventName].filter(l => l == callback)
    }
  }

  notify: Notify = (eventName: string, ...args: any[]) => {
    if (!this.listeners[eventName]) {
      return
    }

    this.listeners[eventName].forEach(l => l(args));
  }
}
