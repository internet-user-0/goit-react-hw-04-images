import { useState } from 'react';
import Searchbar from './parts/Searchbar';
import ImageGalery from './parts/ImageGallery';
import css from './styles.module.css';
import Modal from './parts/Modal';

function ImageFinder() {
   const [name, setName] = useState('');
   const [page, setPage] = useState(12);
   const [img, setImg] = useState(null);
   const [modal, setModal] = useState(false);

   function buttonMore() {
      setPage(prev => prev + 12);
   }

   function openModal(largeImageURL) {
      setImg(largeImageURL);
      setModal(true);
   }

   function closeModal() {
      setModal(false);
   }

   function formSubmit(name) {
      setName(name);
      setPage(12);
   }

   return (
      <div className={css.App}>
         <Searchbar onSubmit={formSubmit}></Searchbar>

         <ImageGalery
            name={name}
            page={page}
            buttonMore={buttonMore}
            onModal={openModal}
         ></ImageGalery>
         {modal && (
            <Modal modalClose={closeModal} modalShow={modal}>
               <img src={img} alt="asd" />
            </Modal>
         )}
      </div>
   );
}

export default ImageFinder;
