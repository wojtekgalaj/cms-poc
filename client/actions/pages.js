export default {
  editMode({Session}) {
    let currentMode = Session.get('editMode')
    Session.set('editMode', !currentMode);
  },

  addElement(context, name, pageTitle, index, order) {
    Meteor.call('page.addElement', name, pageTitle, index, order)
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
