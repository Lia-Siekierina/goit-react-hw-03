import PropTypes from "prop-types";
import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, onChange }) => {
  return (
    <div className={styles.SearchBox}>
      <label>
        Find contacts by name
        <input type="text" value={filter} onChange={onChange} />
      </label>
    </div>
  );
};

SearchBox.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
