// --News data--

export interface INews {
    status: string;
    totalResults: number;
    articles: Array<NewsData>;
}

export interface NewsData {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: NewsDataSource;
    title: string;
    url: string;
    urlToImage: string;
}

export interface NewsDataSource {
    id: string;
    name: string;
}

//  --Source data--

export interface ISources {
    status: string;
    sources: Array<SourcesData>;
}

export interface SourcesData {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

//  --Error Status--

export enum ErrorStatus {
    Unauthorized = 401,
    PaymentRequired,
    Forbidden,
    NotFound,
}

//  -- Callback --

export type Callback = <T>(data?: T) => void;

//  -- Options --

export interface Options {
    [key: string]: string;
}
