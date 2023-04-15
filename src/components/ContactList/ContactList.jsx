import { ContactItem } from '../ContactItem/ContactItem';
import { ContactsList, ContactsItem } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <ContactItem
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        </ContactsItem>
      ))}
    </ContactsList>
  );
};
