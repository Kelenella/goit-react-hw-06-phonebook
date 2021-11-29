import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <div className={s.filter}>
      <label className={s.text}>
        Find contacts by name
        <input
          className={s.value}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
