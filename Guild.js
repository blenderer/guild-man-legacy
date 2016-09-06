/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */

import React from 'react';
import AdventurerCollection from './AdventurerCollection';
// import adventurers from './testdata/guild';
import RandomCharacter from './utilityclasses/RandomCharacter';


let adventurers = [];
for (var i = 0; i < 5; i++) {
  adventurers.push(new RandomCharacter());
}

class Guild extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {

    return (
      <div>
        <h1>Current Guild Members:</h1>
        <AdventurerCollection adventurers={adventurers}/>
      </div>
    );
  }
}

export default Guild;
