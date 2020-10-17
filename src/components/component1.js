import React from 'react';
import { $CombinedState } from 'redux';
import {addBox,removeBox} from '../actions';

class Component1 extends React.Component {

    onChangebox = (cb) => {
        console.log(cb);
        
       // console.log(document.getElementById("id1"));
    }

    render(){
        return (
            <div className="cmp1">
                  <label id="id1">HEL
                  <input type="checkbox" for="id1" onChange = {this.onChangebox}/>
                  </label>
                  <input type="checkbox" for="id2"/>
                  <label id="id4">DOM</label>
                  <input type="checkbox" for="id3"/>
                  <label id="id3">DSDL</label>
                  <input type="checkbox" for="id4"/>
                  <label id="id4">DDSL</label>
            </div>
        )
    }
}

export default Component1;