export default {
  editMode({LocalState}) {
    console.log('SETTING EDIT MODE ON STATE');
    LocalState.set('editMode', true);
  },

  addElement() {
    console.log('Adding an element');
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};
