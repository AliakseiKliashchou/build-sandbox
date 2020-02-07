//JS

import 'core-js';

class App {
   
        run = async (name = 'world') => {
            console.log(`Hello ${name}`);
            console.log([1, 2, [2, 3]].flat());
            
        }
    
}
const app = new App();
app.run()
    .then( () => console.log('Done'))
    .catch( err => console.log(err));

//JSX

import React from 'react';
import ReactDOM from 'react-dom';

const AppReact = () => <p>Hello world</p>;
ReactDOM.render(<App />, document.getElementById('root'));