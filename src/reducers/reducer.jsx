


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_LIST':
            return postNewData(action.new_list);
        case 'DELETE_LIST':
            return deleteData(action.list_id);
        default:
            return state;
    }
};