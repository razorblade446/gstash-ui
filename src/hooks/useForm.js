import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [value, setValue] = useState(initialState);

  const handleInputValue = ({ target }) => {
    setValue({
      ...value,
      [target.name]: target.value,
    });
  };

  return { value, handleInputValue };
};
