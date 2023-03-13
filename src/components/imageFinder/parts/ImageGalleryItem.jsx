import css from './ImageGaleryItem.module.css';


function ImageGaleryItem ({onModal, largeImageURL, webformatURL}) {
      return (
         <li
            className={css.ImageGalleryItem}
            onClick={() => {onModal(largeImageURL)}}

         >
            <img
               className={css.ImageGalleryItem__image}
               src={webformatURL}
               alt="qwe"
            />
         </li>
      );
   }

export default ImageGaleryItem;
