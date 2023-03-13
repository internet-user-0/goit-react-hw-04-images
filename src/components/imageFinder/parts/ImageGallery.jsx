import { useState, useEffect } from 'react';
import ImageGaleryItem from './ImageGalleryItem';
import css from './ImageGalery.module.css';
import Button from './Button';
import { searchImages } from 'components/services';
import { InfinitySpin } from 'react-loader-spinner';

function ImageGalery({ name, page, buttonMore, onModal }) {
   const [arrayImage, setArrayImage] = useState(null);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      if (!name) {
         return;
      }
      setLoading(true);

      async function fetchData() {
         setArrayImage(await searchImages(name, page));
         setLoading(false);
      }
      fetchData();
   }, [name, page]);

   return (
      <>
         <ul className={css.ImageGallery}>
            {arrayImage &&
               arrayImage.map(({ id, webformatURL, largeImageURL }) => {
                  return (
                     <ImageGaleryItem
                        onModal={img => onModal(img)}
                        key={id}
                        webformatURL={webformatURL}
                        largeImageURL={largeImageURL}
                     />
                  );
               })}
         </ul>
         {loading && <InfinitySpin width="200" color="#4fa94d" />}
         {arrayImage && arrayImage.length !== 0 && (
            <Button className={css.button} more={buttonMore} />
         )}
      </>
   );
}

export default ImageGalery;
