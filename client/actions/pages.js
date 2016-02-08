export default {
  editMode({Session}) {
    let currentMode = Session.get('editMode')
    Session.set('editMode', !currentMode);
  },

  addElement({Meteor, Session}, name, pageTitle, index) {
    const sessionPage = Session.get('currentPage')
    // do the adding here and call save page
    sessionPage.elements.splice(index + 1, 0, {
      component: name,
      data: {}
    })
    sessionPage.saved = true
    Session.set('currentPage', sessionPage)
    Meteor.call('page.save', sessionPage)
  },

  savePage({Meteor, Session}) {
    const sessionPage = Session.get('currentPage')
    sessionPage.saved = true
    Session.set('currentPage', sessionPage)
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

  reset({Meteor}) {
    Meteor.call('page.reset')
  }
};
