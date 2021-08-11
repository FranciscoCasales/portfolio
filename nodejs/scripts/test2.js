class NotesStore {
  notes = new Map();

  validStates = ['completed', 'active', 'others'];

  addNotes(state, name) {
    if (!name || name.trim() === '') {
      throw new Error('Name cannot be empty');
    }
    if (!this.validStates.includes(state)) {
      throw new Error(`Invalid state ${state}`);
    }
  }
}
