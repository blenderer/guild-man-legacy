import React from 'react';

class CurrentQuests extends React.Component {

  componentWillReceiveProps (nextProps) {

  }

  render () {
    return (
      <ul>
        {this.props.activeQuests.map((quest, index) => {
          let remaining = (quest.start + quest.duration) - new Date().getTime();

          if (remaining < 0) {
            remaining = 'expired'
          } else {
            remaining = remaining + ' remaining';
          }

          return <li key={index}>{quest.questName}, {remaining}</li>
        })}
      </ul>
    );
  }
}

export default CurrentQuests;
