// Import Area
import React from 'react';
import ReactDOM from 'react-dom';

import Comp3 from './components/Comp3'

import ANIL from './components/Comp2';

import Comp4 from './components/Comp4';

//Lets Create our First Component

//Fat Arrow

// Named Import
import {Comp1} from './components/Comp1'

//Default Import
import Hoc from './components/Hoc'



//Classical Function defination
function App({data}) {
  return  <div>
            <Comp1 />
            <ANIL />
            <Comp3 />
            <Comp4 />
            <Hoc />
          </div>
}

let mydata = {
  "name":"ANIl",
  "surname":"DOLLOR",
}

ReactDOM.render(
  <React.StrictMode>
      <App data={mydata} />
  </React.StrictMode>,
  document.getElementById('container')
);
