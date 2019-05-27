import { Component, OnInit } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { forEach } from '@angular/router/src/utils/collection';
import { stringify } from 'querystring';


@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css']
})
export class DragComponent implements OnInit {

  constructor() { }
element:string;
newProducts=[];
  defaultActions = [
    'Action1',
    'Action2',
    'Action3'
   
  ];
  AddProduct(newPro:string){
    
    if(newPro!=null)
this.newProducts.push(newPro);

  }
  AddAction(newAction:string){
    if(this.defaultActions[0]=='Action1'){
      
      this.defaultActions[0]=newAction;
    }
    else if(this.defaultActions[1]=='Action2'){
      
      this.defaultActions[1]=newAction;
    }
    else if(this.defaultActions[2]=='Action3'){
      
      this.defaultActions[2]=newAction;
    }
  }
  AddActionTimer(newActionTimer:string){

  }
  enableAction(){
    var re = /Product1/gi;
    var str = "Product1 is Action1 with Product2 for Time1";
    var resultAction:string='';
    
    this.newProducts.forEach(function(value){
      resultAction+=value;
    });
    for(var i=0;i<=this.newProducts.length;++i)
    {
      this.newProducts.pop();
      alert('remove')
    }
    
    this.newProducts.push(resultAction);
  }
  dragEnd(event:PointerEvent){
    alert("samlw");
    console.log("X position: "+event.clientX +" Y position: "+event.clientY);

  }
  drop(event: CdkDragDrop<string[]>) {

    //get the position of every new product element
    //if it is inside Action delete that product 
    //Create new product with Merge Names
    moveItemInArray(this.defaultActions, event.previousIndex, event.currentIndex);
  }
  ngOnInit() {

  }

}
