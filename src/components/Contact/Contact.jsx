import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoPerson } from 'react-icons/io5';
import css from './Contacts.module.css';

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.contactContainer}>
      <div>
        <p>
          <IoPerson /> {name}
        </p>

        <p>
          <BsFillTelephoneFill /> {number}
        </p>
      </div>

      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
