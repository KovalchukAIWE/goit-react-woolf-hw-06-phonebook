import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'store/selectors';
import { deleteContact } from 'store/contactSlice';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul className={styles.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          {name}: {number}
          <button
            className={styles.button}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
