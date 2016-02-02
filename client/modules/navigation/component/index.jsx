import React from 'react';


class Navigation extends React.Component {

  editMode() {
    const {editMode} = this.props;
    editMode();
  }

  render() {
    const {pages} = this.props;
    return (
      <nav>
        {pages.map((current, index) => (
            <a key={index} href={`/page/${current.title}`}>{current.title} </a>
          )
        )}
      </nav>
    )
  }
}

export default Navigation;
