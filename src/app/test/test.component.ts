import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {  

  @Input('parentData') public ParentInteraction;
  @Output() public childEvent = new EventEmitter();

  public childMessage = "This is from Child to Parent Interaction"

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent() {    
    this.childEvent.emit(this.childMessage)
  }
  
}
