import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {MultiOptionService} from '../Service/multi-option.service';
import {MultiOption} from '../HelperTs/MultiOption';
import { from } from 'rxjs';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-multi-option',
  templateUrl: './multi-option.component.html',
  styleUrls: ['./multi-option.component.css']
})
export class MultiOptionComponent implements OnInit {

  @Input() category:string;
  multioption:MultiOption[];
  closeResult: string;
  @Output() seletedOption= new EventEmitter<string>();
  selectedoption:string;
  size:number;
  constructor(private multiOptionService:MultiOptionService,private modalService: NgbModal) { }

  ngOnInit() {
    this.getMultiOptions(this.category);
    if(this.multioption.length>0)
    this.selectedoption=this.multioption[0].Name;
  }
  changedSelection(){
    this.seletedOption.emit(this.selectedoption);
  }
  getMultiOptions(category:string){
    this.multiOptionService.getMockMultiOption(category).subscribe(data => this.multioption=data);
    this.size=this.multioption.length;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult ='Closed with: ${result}';
    }, (reason) => {
      this.closeResult = 'Dismissed ${this.getDismissReason(reason)}';
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  'with: ${reason}';
    }
  }
}
