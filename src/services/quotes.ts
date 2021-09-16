import { v4 as uuid } from 'uuid';
import { reactive } from 'vue';

export interface QuoteModel {
    id: string,
    quote: string;
    artist: {
        name: string;
        url?: string;
    };
    source: {
        name: string;
        url?: string;
        image?: string;
    };
}

export function emptyQuoteModel(): QuoteModel {
    return {
        id: uuid(),
        source: {
            name: '',
            url: '',
            image: ''
        },
        artist: {
            name: '',
            url: ''
        },
        quote: ''
    }
}

let inMemoryQuotes: QuoteModel[] = [];
let retrievedRemoteQuotes = false;

export function getQuotes(): Promise<QuoteModel[]> {
    if (retrievedRemoteQuotes) {
        return Promise.resolve(inMemoryQuotes);
    }
    return fetch('/quotes.json')
        .then((response: Response) => response.json() as Promise<QuoteModel[]>)
        .then(quotes => {
            retrievedRemoteQuotes = true;
            return [...inMemoryQuotes, ...quotes];
        });
}

export function createQuote(quote: QuoteModel): Promise<QuoteModel> {
    inMemoryQuotes = [quote, ...inMemoryQuotes];
    return Promise.resolve(Object.assign({}, quote));
}

export const QUOTE_STORE = {
    state: reactive({ quotes: inMemoryQuotes }),
    createQuote(quote: QuoteModel) {
        return createQuote(quote)
            .then(() => this.state.quotes = inMemoryQuotes);
    },
    getQuotes() {
        return getQuotes()
            .then(quotes => {
                inMemoryQuotes = quotes;
                this.state.quotes = quotes;
            });
    }
};
