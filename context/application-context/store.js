const store = (state, action) => {
    switch(action.type) {
      case 'UPDATE_SUBMIT_STATUS':
        const newState = {...state}
        return newState;
      default:
        throw new Error('State not recognised');
    };
};

export { store };