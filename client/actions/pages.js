export default {
  editMode({Session}) {
    let currentMode = Session.get('editMode')
    Session.set('editMode', !currentMode);
  },

  addElement(context, name, pageTitle, index, order) {
    const sessionPage = Session.get('currentPage')
    // do the adding here and call save page
    debugger
    let elements = sessionPage.elements.splice(index + 1, 0, {
      component: name,
      data: {}
    })
    sessionPage.elements = elements
    Session.set('currentPage', sessionPage)
    Meteor.call('page.save', sessionPage)
  },

  savePage({Meteor, Session}) {
    const sessionPage = Session.get('currentPage')
    Meteor.call('page.save', sessionPage)
  },

  deletePage({Meteor, Session}) {
    const sessionPage = Session.get('currentPage')
    Meteor.call('page.delete', sessionPage)
  },

  addPage({Meteor, Collections}, title) {
    if (Collections.Pages.findOne({title})) {
      alert('Page with that name exists already');
      return
    }
    Meteor.call('page.add', title)
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};
