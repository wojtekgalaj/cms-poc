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
      <nav
        className='ep-main-nav'
        onClick={this.clearSessionPage.bind(this)}>
        <ul className='ep-main-nav__list'>
          {pages.map((current, index) => (
            <li key={index} className='ep-main-nav__item'>
              <a href={`/page/${current.title}`}>{current.title} </a>
            </li>
            )
          )}
        </ul>
      </nav>
    )
  }
}

export default Navigation;
