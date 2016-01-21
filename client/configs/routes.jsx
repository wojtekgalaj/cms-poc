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
      mount(MainLayoutCtx, {
        content: () => (<Page title='home' />)
      });
    }
  });

  FlowRouter.route('/one', {
    name: 'page.one',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Page title='page-one' />)
      });
    }
  });
};
