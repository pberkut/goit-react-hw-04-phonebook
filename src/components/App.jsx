import { useState, useMemo } from 'react';
import { GlobalStyle } from './GlobalStyles';
import { Notify } from 'notiflix';
import { Container } from './Container';
import { Section } from './Section';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { getFilteredArray } from 'utils/getFilteredArray';
import { Wrapper } from './Wrapper';
import { useLocalStorage } from 'hooks/useLocalStorage';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);

  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    const isUniqueContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isUniqueContact) {
      Notify.failure(`${newContact.name} is already in contacts.`);
      return false;
    }

    setContacts(prevState => [newContact, ...prevState]);
    return true;
  };

  const editContact = updateContact => {
    setContacts(prevContacts => {
      return prevContacts.map(contact => {
        if (contact.id === updateContact.id) {
          const newContact = { ...contact, ...updateContact };
          return newContact;
        }
        return contact;
      });
    });
    // debugger;
  };

  const deleteContact = contactId =>
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );

  const setFilterContacts = event => setFilter(event.currentTarget.value);

  // const filteredContacts = getFilteredArray(contacts, filter);
  const filteredContacts = useMemo(
    () => getFilteredArray(contacts, filter),
    [contacts, filter]
  );

  return (
    <>
      <GlobalStyle />
      <Container>
        <Wrapper>
          <Section title="Phonebook">
            <ContactForm onSave={addContact} />
          </Section>
          <Section title="Search">
            <Filter value={filter} onChange={setFilterContacts} />
          </Section>
          <Section title="Contacts">
            <ContactList
              contacts={filteredContacts}
              onEditContact={editContact}
              onDeleteContact={deleteContact}
            />
          </Section>
        </Wrapper>
      </Container>
    </>
  );
};
