import React from 'react';


class EditButton extends React.Component {
  editMode(test) {
    const {editMode} = this.props;
    console.log(test);
    editMode();
  }
  render() {
    const style = {
      button: {
        position: 'absolute',
        top: 40,
        right: 40
      }
    }
    return (
      <button
          style={style.button}
          onClick={this.editMode.bind(this, 'test')}>EDIT</button>
    )
  }
}

export default EditButton;
