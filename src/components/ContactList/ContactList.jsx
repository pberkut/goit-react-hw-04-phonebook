import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import { ContactItem } from '../ContactItem';

export const ContactList = ({ contacts, onEditContact, onDeleteContact }) => {
  return (
    <div>
      <List>
        {contacts.map((contact, idx) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            index={idx}
            onEditContact={onEditContact}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </List>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
