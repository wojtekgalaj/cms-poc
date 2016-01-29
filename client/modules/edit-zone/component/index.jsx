import React from 'react';

class EditZone extends React.Component {

  showOptions() {
    console.log('SHOW OPTIONS', this.props.elements);
    console.log('editMode ', this.props.editMode);
  }

  render() {
    const {editMode, elements} = this.props;
    var style = {
      padding: 20,
      background: editMode ? '#bada55' : 'transparent'
    };

    return (
      <div onMouseOver={this.showOptions.bind(this)} style={style}></div>
    )
  }
}

export default EditZone
