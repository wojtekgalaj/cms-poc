export default {
  editMode({Session}) {
    console.log('SETTING EDIT MODE ON STATE');
    let currentMode = Session.get('editMode')
    Session.set('editMode', !currentMode);
    console.log(currentMode);
  },

  addElement() {
    console.log('Adding an element');
  },

  savePage({Session, Collections}) {
    const sessionPage = Session.get('currentPage')
    const pageToSave = Collections.Pages.update({title: sessionPage.title}, sessionPage)
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};
