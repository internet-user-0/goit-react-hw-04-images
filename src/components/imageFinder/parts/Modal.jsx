import { useEffect } from 'react';
import css from './Modal.module.css';

function Modal ({modalClose, children, modalShow}){

   useEffect(() => {
      switch (modalShow) {
         case true:
            window.addEventListener('keydown', handelKeyDawn)
            break;
         case false:
            window.removeEventListener('keydown', handelKeyDawn)
            break;
      
         default:
            break;
      }
   },[modalShow])

   function handelKeyDawn(e) {
      if (e.code === "Escape") {
         modalClose();
      }
   }

      return (
         <div  className={css.Overlay} onClick={modalClose}>
            <div>
               <div className={css.Modal}>{children}</div>
            </div>
         </div>
      );
   }


export default Modal;