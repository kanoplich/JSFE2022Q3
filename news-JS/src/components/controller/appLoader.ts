import { Loader } from './loader';

export class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'a50fc7f66d704db0b325ff91c449866e',
        });
    }
}
