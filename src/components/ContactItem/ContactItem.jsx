import { Name, Number, Btn } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <Name>{name}:</Name>
      <Number>{number}</Number>
      <Btn type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Btn>
    </>
  );
};
