import { useState } from 'react';
import css from './/Searchbar.module.css';
import { ReactComponent as AddIcon } from './icon/iconSearch.svg';

function Searchbar({ onSubmit }) {
   const [name, setName] = useState('');

   function nameSearch(e) {
      setName(e.currentTarget.value);
   }

   function nameSubmit(e) {
      e.preventDefault();

      if (name.trim() === '') {
         alert('enter image title');
         return;
      }
      onSubmit(name);
      return setName('');
   }

   return (
      <header className={css.Searchbar}>
         <form className={css.SearchForm} onSubmit={nameSubmit}>
            <button tupe="submit" className={css.SearchForm__button}>
               <span className="button-label">
                  <AddIcon
                     display="block"
                     fill="black"
                     width="32px"
                     height="32px"
                  />
               </span>
            </button>
            <input
               className={css.SearchForm__input}
               value={name}
               type="text"
               name="name"
               autoComplete="off"
               autoFocus
               placeholder="Search images and photos"
               onChange={nameSearch}
            />
         </form>
      </header>
   );
}

export default Searchbar;
