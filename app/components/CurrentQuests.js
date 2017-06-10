import React from 'react';

import Quest from './Quest';

class CurrentQuests extends React.Component {

  componentWillReceiveProps (nextProps) {

  }

  componentDidMount (props) {

  }

  render () {
    return (
      <ul>
        {this.props.activeQuests.map((quest, index) =>
          <Quest key={index} {...quest} />
        )}
      </ul>
    );
  }
}

export default CurrentQuests;
