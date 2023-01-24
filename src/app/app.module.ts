import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { VoterComponent } from './component-interaction/voter/voter.component';
import { VoteTakerComponent } from './component-interaction/vote-taker/vote-taker.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    ClassBindingComponent,
    PropertyBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    StructuralDirectiveComponent,
    ComponentInteractionComponent,
    VoterComponent,
    VoteTakerComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
