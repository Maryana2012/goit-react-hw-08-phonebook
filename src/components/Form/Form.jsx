import { useDispatch, useSelector} from "react-redux";
import { contactsSelector } from "redux/contact/selector";
import { addContact, updateContact } from "redux/contact/operations";
import { Button } from '@chakra-ui/react'
import { useState } from "react";
import { toast } from 'react-toastify';
import css from '../Form/Form.module.css'

export default function Form({id, name, number, onClose}) {
  const dispatch = useDispatch();
  const contact = useSelector(contactsSelector);
  const [nameUpdate, setNameUpdate] = useState(name);
  const [numberUpdate, setNumberUpdate] = useState(number);

  const nameChange = (e) =>{
    setNameUpdate(e.target.value)
  }

  const numberChange =(e)=>{
    setNumberUpdate(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const newUser = {
      id,  
      name: form.elements.name.value, 
      number: form.elements.phone.value
     }

    if(name){ 
    dispatch(updateContact(newUser));
    onClose();
    } else {
      if (contact.some(element => element.name.toLowerCase() === form.elements.name.value.toLowerCase())) {
        toast.error(`${form.elements.name.value} is already in contacts`)
        return
    } else {
      dispatch(addContact(newUser))   
      }
    }
    form.reset();
  }
  
  return (
  <form className={css.form__container} onSubmit={handleSubmit}>
    <label htmlFor="" className={css.label}><span className={css.label__form}>Name</span> 
    {name ? (<input className={css.input}
           type="text"
           name="name"
           value={nameUpdate}
           onChange={nameChange}
           required/>)
    :
    (<input className={css.input}
           type="text"
           name="name"
           required/>) 
           }
           </label>
    <label htmlFor="" className={css.label}><span className={css.label__form}>Number</span>
    {number ? (
      <input className={css.input}
          type="tel"
          name="phone"
          value={numberUpdate}
          onChange={numberChange}
          required/>
    ) 
    :(
     <input className={css.input}
            type="tel"
            name="phone"
            required/>
    )
    }
    </label>
    <Button colorScheme='yellow' size='md' className={css.button}
     type="submit">{name ? 'Update' : 'Add Contact'}</Button>
  </form>)
}
