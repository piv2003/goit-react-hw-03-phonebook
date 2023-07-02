import PropTypes from 'prop-types';
import { Item, Name, Number } from './ContactListItem.styled';

const ContactsListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item id={id}>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </Item>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsListItem;
