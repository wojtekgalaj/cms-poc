import React from 'react';


class Navigation extends React.Component {

  clearSessionPage() {
    const {Session} = this.props
    Session.set('currentPage', {
      title: '',
      elements: []
    })
  }

  render() {
    const {pages} = this.props;
    return (
      <nav onClick={this.clearSessionPage.bind(this)}>
        {pages.map((current, index) => (
            <a key={index} href={`/page/${current.title}`}>{current.title} </a>
          )
        )}
      </nav>
    )
  }
}

export default Navigation;
