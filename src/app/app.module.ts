import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventBusComponent } from './event-bus/event-bus.component';
import { PanesComponent } from './panes/panes.component';
import { PaneComponent } from './panes/pane/pane.component';
import { GameComponent } from './game/game.component';
import { NumbersComponent } from './numbers/numbers.component';
import { NumberComponent } from './numbers/number/number.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBusComponent,
    PanesComponent,
    PaneComponent,
    GameComponent,
    NumbersComponent,
    NumberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
