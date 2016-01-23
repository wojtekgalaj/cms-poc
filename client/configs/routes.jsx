import React from 'react';
import {injectDeps} from 'react-simple-di';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '../components/layouts.main/index.jsx';
import Page from '../containers/page';

export const initRoutes = (context, actions) => {

  const MainLayoutCtx = injectDeps(context, actions)(MainLayout);

  FlowRouter.route('/', {
    name: 'page.home',
    action() {
      FlowRouter.redirect('/page/home');
    }
  });


  FlowRouter.route('/page/:title', {
    name: 'page.one',
    action({title}) {
      mount(MainLayoutCtx, {
        content: () => {
          return (<Page title={title} />)
        }
      });
    }
  });
};
