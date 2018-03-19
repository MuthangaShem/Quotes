import { Component } from '@angular/core';
import {Quote} from './quote/quote.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	quotes:Quote[];

	constructor() {
		this.quotes = [
		new Quote ('In the beginning was the word', 'St. Paul', 'Mwangombe', 10),
		new Quote ('Education is the key to success', 'Tekla Lorupe', 'Shem', 8),
		new Quote ('Hakuna mbrrrrrcha', 'Mbusi', 'odi', 4),
		];
	}

	addQuote(quote:HTMLInputElement, author:HTMLInputElement, submitter:HTMLInputElement ): boolean {
		console.log(`Adding quote: ${quote.value} by:${author.value} submitted by: ${submitter.value}`);
		this.quotes.push(new Quote(quote.value, author.value, submitter.value, 0));
		quote.value = '';
		author.value = '';
		submitter.value = '';
		return false;
	}
	// sortedArticles(): Article[] {
 	//    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
 	//  }
}