export class Quote {
	
	votes: number;
	quote: string;
	author: string;
	submitter: string;
	
	constructor(quote: string, author: string, submitter: string, votes ? : number) {
		this.quote = quote;
		this.author = author;
		this.submitter = submitter;
		this.votes = votes || 0;
	}

	voteUp():void{
		this.votes += 1;
	}
	voteDown():void{
		this.votes -=1;
	}

	domain(): string{
		try{
			const domainAndPath: string = this.quote.split('//')[1];
			return domainAndPath.split('/')[0];
		}catch (err){
			return null;
		}
	}
}