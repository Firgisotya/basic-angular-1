import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent {
  //ngSwitch
  state :string = 'dark';
  color:string='#fff'

  //ngIf
  isActive= true;

  //ngFor
  plans = [
    {
      name: "Silver500",
      premiumInDollars: 500,
      validityInYears: 2
    },
    {
      name: "Gold250",
      premiumInDollars: 250,
      validityInYears: 3
    },
    {
      name: "Platinum300",
      premiumInDollars: 300,
      validityInYears: 5
    },
    {
      name: "Bronze50",
      premiumInDollars: 50,
      validityInYears: 1.5
    },
    {
      name: "Silver 200",
      premiumInDollars: 200,
      validityInYears: 2
    }
  ];
}
