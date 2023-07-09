import PropTypes from 'prop-types';
import { useState } from 'react';

import { MdDeleteForever, MdEdit, MdSave } from 'react-icons/md';
import {
  Button,
  ListItem,
  Label,
  Input,
  ButtonBlock,
  ContactBlock,
} from './ContactItem.styled';

export const ContactItem = ({
  index,
  contact,
  onEditContact,
  onDeleteContact,
}) => {
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleEditContact = () => {
    if (!isEdit) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
      onEditContact({ id: contact.id, name, phone });
    }
  };

  return (
    <ListItem>
      <span>{index + 1}.</span>
      <ContactBlock>
        {isEdit ? (
          <Label>
            Name
            <Input
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces"
              required
              type="text"
            />
          </Label>
        ) : (
          <span>{name}:</span>
        )}

        {isEdit ? (
          <Label>
            Phone
            <Input
              name="phone"
              value={phone}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              type="tel"
            />
          </Label>
        ) : (
          <span>{phone}</span>
        )}
      </ContactBlock>
      <ButtonBlock>
        <Button type="button" onClick={handleEditContact} role="Edit contact">
          {isEdit ? <MdSave /> : <MdEdit />}
        </Button>
        <Button
          type="button"
          onClick={() => onDeleteContact(contact.id)}
          role="Delete contact"
        >
          <MdDeleteForever />
        </Button>
      </ButtonBlock>
    </ListItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
  onEditContact: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
