import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { List } from './ContactsList.styled';

const ContactsList = ({ contacts, filter, onDeleteContact }) => {
  return (
    <List>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        ))}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
