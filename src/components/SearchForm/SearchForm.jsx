import { Form } from './SearchForm.styled';
import { useState } from 'react';

const SearchForm = ({ onFormSubmit }) => {
  const [query, setQuery] = useState('');

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
