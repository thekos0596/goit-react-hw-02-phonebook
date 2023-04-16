import PropTypes from 'prop-types';
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

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
