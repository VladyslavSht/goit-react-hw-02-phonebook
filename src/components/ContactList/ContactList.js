import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ filteredContacts, onDeleteContact }) {
  return (
    <ul className={s.list}>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id} className={s.contact}>
            {contact.name}: {contact.number}
            <button
              type="click"
              onClick={() => onDeleteContact(contact.id)}
              className={s.button}
            >
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
