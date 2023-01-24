import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.css']
})
export class TwowayBindingComponent {
  nametw = 'Coba';

  ngDoCheck() {
    console.log('Running change detection ', Date.now());
  }
}
