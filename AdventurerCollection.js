import React from 'react';

class AdventurerCollection extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {

    let adventurers = this.props.adventurers.map((adventurer) => {

      return (
        <li key={adventurer.name}>
          <strong>{adventurer.name}</strong>: lv {adventurer.level + ' '}
          {adventurer.race} {adventurer.class}
        </li>
      );
    });

    return (
      <ul>
        {adventurers}
      </ul>
    );
  }
}

export default AdventurerCollection;
