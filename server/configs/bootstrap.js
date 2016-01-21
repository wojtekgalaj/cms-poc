import {Pages} from '/libs/collections'

export default function () {
  if (!Pages.findOne()) {
    Pages.insert({
      title: 'home',
      elements: [
        {
          key: 0,
          component: 'titleSection',
          data: {
            title: 'Home Page',
            subTitle: 'First page you see, duh.'
          }
        },
        {
          key: 1,
          component: 'heroSection',
          data: {
            imageUrl: 'Home Page',
            caption: 'First page you see, duh.'
          }
        }

      ]
    });
    Pages.insert({
      title: 'page-one',
      elements: [
        {
          key: 0,
          component: 'titleSection',
          data: {
            title: 'First Page',
            subTitle: 'Some great stuff goes here'
          }
        }
      ]
    });
  }
}
