import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Notify } from 'src/app/event-bus/notify.type';
import { Listener } from 'src/app/event-bus/listener.type';
import { Subscribe } from 'src/app/event-bus/subscribe.type';

@Component({
  selector: 'app-event-bus',
  template: ''
})
export class EventBusComponent implements OnInit {
  @Output()
  getNotify = new EventEmitter<Notify>()

  @Output()
  getSubscribe = new EventEmitter<Subscribe>()

  ngOnInit() {
    this.getNotify.emit(this.notify)
    this.getSubscribe.emit(this.subscribe)
  }

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
