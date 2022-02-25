import { useState } from 'react';


const useFormData = (initialValue, setterFunc) => {
  const [formValue, setFormValue] = useState(initialValue);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValue(data => ({
      ...data,
      [name]: value
    }));
  }

  const handleSubmit = e => {
    e.preventDefault();
    setterFunc(formValue);
    setFormValue(initialValue);
  }

  return [formValue, handleChange, handleSubmit]
}


export default useFormData;