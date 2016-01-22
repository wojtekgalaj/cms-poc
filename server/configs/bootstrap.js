import {Pages, Elements} from '/libs/collections'

export default function () {
  if (!Pages.findOne()) {
    Pages.insert({
      title: 'home',
      elements: [
        {
          key: 0,
          component: 'pageTitle',
          data: {
            title: 'Home Page',
            subTitle: 'First page you see, duh.'
          }
        },
        {
          key: 1,
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
          key: 0,
          component: 'pageTitle',
          data: {
            title: 'Contect Page',
            subTitle: 'Here we are, just holla!'
          }
        },
        {
          key: 1,
          component: 'contactInfo',
          data: {
            tel: '+31 777 77 77 77',
            email: 'holla@packlink.es'
          }
        }
      ]
    });

    Elements.insert({
      components: {
        pageTitle: {
          home: {
            title: 'Home Page',
            subtitle: 'First page you see, duh.'
          },
          contact: {
            title: 'Contact Page',
            subtitle: 'Just holla!'
          }
        },
        textBlock: {
          home: {
            text: 'This should support ***markdown***'
          }
        },
        contactInfo: {
          contact: {
            tel: '+31 777 77 77 77',
            email: 'holla@packlink.es'
          }
        }
      }
    }
    );
  }
}
