import PropTypes from "prop-types";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDeleteContact }) => (
  <li className={styles.Contact}>
    <div className={styles.Details}>
      <p>
        <FaUser className={styles.Icon} /> {name}
      </p>
      <p>
        <FaPhoneAlt className={styles.Icon} /> {number}
      </p>
    </div>
    <button onClick={() => onDeleteContact(id)} className={styles.DeleteButton}>
      Delete
    </button>
  </li>
);

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
