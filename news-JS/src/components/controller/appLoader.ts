import { Loader } from './loader';

export class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'a50fc7f66d704db0b325ff91c449866e',
        });
    }
}
