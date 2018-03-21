import { Component, OnInit, Input, HostBinding} from '@angular/core';
import {Quote} from './quote.model';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

  export class QuoteComponent implements OnInit {
	// @HostBinding('attr.class') cssClass= 'row';
  
	// votes:number;
	// quote: string;
	// author: string;
	// submitter: string;

	@Input() quote: Quote;

  voteUp(): boolean {
  	this.quote.voteUp();
  	return false;
  }

  voteDown(): boolean{
  	this.quote.voteDown();
  	return false;
  }


  ngOnInit() {
  }

}

