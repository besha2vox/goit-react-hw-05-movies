import { Form } from './SearchForm.styled';
import { useState } from 'react';
import PropType from 'prop-types';

const SearchForm = ({ search, onFormSubmit }) => {
  const [query, setQuery] = useState(search);

  const handlerChange = ({ target }) => {
    setQuery(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onFormSubmit(query);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handlerChange} />
      <button type="submit">Search</button>
    </Form>
  );
};

export default SearchForm;

SearchForm.propType = {
  onFormSubmit: PropType.func.isRequired,
};
