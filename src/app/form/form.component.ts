import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  inputWord: string = "";
  userTextValue: string;
  list;
  constructor() {
    this.userTextValue = "";
  }
  @Output() userTextChange = new EventEmitter();
  @Input()
  get userText() {
    return this.userTextValue;
  }

  set userText(val: string) {
    this.userTextValue = val;
    this.userTextChange.emit(this.userTextValue);
  }

  ngOnInit() {
  }

  translate(event){
    let text = event.path[0].value;
    this.userText = this.translateToPigLatin(text);
    console.log(this.userText);

  }

  translateToPigLatin(str: string){
    var vowels = ['a','e','i','o','u'];
    var result = (this.inputWord).split('');
    if(vowels.includes(str.charAt(0))){
      result.push(result.shift());
      result.push('i');
    } else {        
        result.push(result.shift());
        result.push('ay');
    }
    return result.join("") 
  }


}
