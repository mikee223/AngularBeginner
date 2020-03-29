import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public name = "mike";
  public myId = "text1";
  public hasError = true;
  public btnId = "btn1";

  public successClass = "text-success";
  public dangerClass = "text-danger";
  public warningClass = "text-warning";
  public infoClass = "text-info";
  public italicClass = "text-italic";
  public clickVar: number = 0;
  public messageValue = "";
  public ifCondition = false;
  public switchCase = "hello";
  public colors = ["red","blue","green","yellow"];

  public ParentInteraction = "This is Parent Interaction Message";
  public childMessage = "";

  public pipeVar1 = "Acel";
  public pipeVar2 = "Mike";
  public pipeVar3 = "This is a sample message";
  public pipeVar4 = [{ "FirstName": "Mikee", "LastName": "Alora" },{ "FirstName" : "Acel", "LastName" : "Casiano" }];
  public pipeVar5  = 1255.6789;
  public pipeVar6 = 0.75;
  public pipeDate = new Date();

 


  public conditionClass = {
    "text-danger": this.hasError,
    "text-success": !this.hasError
  }

  public styleClass = {
    color : "pink",
    fontStyle : "italic",
    fontWeight : "bold",
    fontFamily: "Times New Roman"
  }

  title = 'Mike System';
  
  SayHi(){
    return "Hi " + this.name;
  }

  clickClass() {    
    this.clickVar = this.clickVar + 1;
    if (this.clickVar >= 10) {
      this.clickVar = 0
    }
  }
    
  logMessage(value) {
    this.messageValue = value    
  }



}