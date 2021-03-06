import React from 'react';
import {injectDeps} from 'react-simple-di';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '../modules/layouts.main/component/index.jsx';
import Page from '../modules/page/container/page.js';

export const initRoutes = (context, actions) => {

  const MainLayoutCtx = injectDeps(context, actions)(MainLayout);

  FlowRouter.route('/', {
    name: 'page',
    action() {
      FlowRouter.redirect('/page/home');
    }
  });


  FlowRouter.route('/page/:title', {
    name: 'page',
    action({title}) {
      mount(MainLayoutCtx, {
        content: () => {
          return (<Page title={title} edit={false} />)
        }
      });
    }
  });

  FlowRouter.route('/page/:title/edit', {
    name: 'page.edit',
    action({title}) {
      mount(MainLayoutCtx, {
        content: () => {
          return (<Page title={title} edit={true}/>)
        }
      });
    }
  });
};
