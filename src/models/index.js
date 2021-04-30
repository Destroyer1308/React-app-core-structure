import { reducer } from 'easy-peasy';

import app from './app';


const model = {
    app: reducer(app),
};

export default model;