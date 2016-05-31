/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */

import React from 'react';
import AdventurerCollection from './AdventurerCollection';
import adventurers from './testdata/guild';

class Guild extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {

    return (
      <div>
        <h1>I am Guild</h1>
        <AdventurerCollection adventurers={adventurers}/>
      </div>
    );
  }
}

export default Guild;
