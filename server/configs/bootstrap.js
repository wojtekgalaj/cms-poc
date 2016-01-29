import {Pages, Elements} from '/libs/collections'

export default function () {
  if (!Pages.findOne()) {
    Pages.insert({
      title: 'home',
      elements: [
        {
          component: 'pageTitle',
          data: {
            title: 'Home Page',
            subTitle: 'First page you see, duh.'
          }
        },
        {
          component: 'textBlock',
          data: {
            text: 'First page you see, duh. This should support markdown'
          }
        }
      ]
    });

    Pages.insert({
      title: 'contact',
      elements: [
        {
          component: 'pageTitle',
          data: {
            title: 'Contect Page',
            subTitle: 'Here we are, just holla!'
          }
        },
        {
          component: 'contactInfo',
          data: {
            tel: '+31 777 77 77 77',
            email: 'holla@packlink.es'
          }
        }
      ]
    });

    let aviableComponents = [
      {componentName: 'pageTitle'},
      {componentName: 'textBlock'},
      {componentName: 'contactInfo'}
    ]

    aviableComponents.forEach(function (el) {
      Elements.insert(el)
    })

  }
}
