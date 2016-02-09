export default {
  editMode({Session}) {
    let currentMode = Session.get('editMode')
    Session.set('editMode', !currentMode);
  },

  addElement({Meteor, Session}, name, pageTitle, index) {
    const sessionPage = Session.get('currentPage')
    // TODO: I need a way to know how to populate data
    // for each type of component. It will need to be a
    // module I can reuse all over the place
    sessionPage.elements.splice(index + 1, 0, {
      component: name,
      data: {}
    })
    sessionPage.saved = true
    Session.set('currentPage', sessionPage)
    Meteor.call('page.save', sessionPage)
  },

  removeElement({Meteor, Session}, name, pageTitle, index) {
    const sessionPage = Session.get('currentPage')
    sessionPage.elements.splice(index, 1)
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
