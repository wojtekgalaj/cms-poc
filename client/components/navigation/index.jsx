import React from 'react';


class Navigation extends React.Component {
  editMode() {
    const {editMode} = this.props;
    debugger
    editMode();
  }
  render() {
    const {pages} = this.props;
    const style = {
      button: {
        position: 'absolute',
        top: 40,
        right: 40
      }
    }
    return (
      <nav>
        {pages.map(current => (
          <a href={`/page/${current.title}`}>{current.title} </a>
        )
        )}
        <button
          style={style.button}
          onClick={this.editMode.bind(this)}>EDIT</button>
      </nav>
    )
  }
}

export default Navigation;
