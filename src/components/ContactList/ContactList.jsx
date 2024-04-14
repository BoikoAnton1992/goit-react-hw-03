// import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList({ contact, onDelete }) {
  return (
    <ul>
      {contact.map(contact => (
        <li key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
