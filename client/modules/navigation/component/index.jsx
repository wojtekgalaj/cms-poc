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
        {pages.map(current => (
            <a key={current.title} href={`/page/${current.title}`}>{current.title} </a>
          )
        )}
      </nav>
    )
  }
}

export default Navigation;
