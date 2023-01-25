import PropTypes from 'prop-types';
import {
  ContactList,
  ContactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './Contacts.styled';

const Contacts = props => {
  const { data, filter } = props;
  let filterData = data.filter(el => {
    return el.name.toLowerCase().includes(filter);
  });

  const handleOnClick = evt => {
    props.onDelete(evt.currentTarget.id);
  };

  if (!filterData.length) return;
  return (
    <ContactList>
      {filterData.map(el => {
        const { name, number, id } = el;
        return (
          <ContactListItem key={id}>
            <DeleteButton id={id} type="button" onClick={handleOnClick}>
              Delete
            </DeleteButton>
            <ContactName>{name}</ContactName>
            <ContactNumber>{number}</ContactNumber>
          </ContactListItem>
        );
      })}
    </ContactList>
  );
};

export default Contacts;

Contacts.propTypes = {
  props: PropTypes.shape({
    onDelete: PropTypes.func.isRequired,
    data: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
    filter: PropTypes.string.isRequired,
  }),
};
