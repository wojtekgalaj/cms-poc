export default {
  editMode({LocalState}) {
    console.log('SETTING EDIT MODE ON STATE');
    let currentMode = LocalState.get('editMode')
    LocalState.set('editMode', !currentMode);
    console.log(currentMode);
  },

  addElement() {
    console.log('Adding an element');
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};
