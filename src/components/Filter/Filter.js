import PropTypes from 'prop-types';
import { LabelFilter, InputFilter } from './Filter.styled';

const Filter = ({ onChange, filter }) => {
  return (
    <LabelFilter>
      <span>Find contacts by name</span>
      <InputFilter
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </LabelFilter>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

export default Filter;
