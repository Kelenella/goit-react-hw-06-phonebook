import { combineReducers } from 'redux';
import initContacts from '../../contacts.json';

const initState = initContacts;

const contactsList = (state = initState, action) => {
  switch (action.type) {
    case 'contact/add':
      return [...state, action.payload];

    case 'contact/delete':
      return state.filter(contact => contact.id !== action.payload.id);

    default:
      return state;
  }
};

const contactsFilter = (state = '', action) => {
  return state;
};

export const contactsReducer = combineReducers({
  contacts: contactsList,
  filter: contactsFilter,
});
