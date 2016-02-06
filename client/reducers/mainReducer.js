import {Redux} from 'redux'

/*
{
  currentPage: 'home',
  editMode: false,
  pageElements: [
    {
      component: 'PageTitle',
      data: {
        title: 'Home Page',
        subTitle: 'Hello'
      }
    }
  ],
  navigation: {
    home: '/home',
    contact: '/contact'
  }
}
*/


const mainReducer = (state, action) => {
  console.log(action);
  return state
}

export default mainReducer
