import React from 'react';

const ImageBlock = ({ imageUrl }) => {
  return (
    <div className='image-block'>
      <div className='image-wrapper'>
        <img src={imageUrl} alt='Image' className='custom-image' />
      </div>
      <div className='text-wrapper'>
        <p>Ask questions and find similar papers with One Click</p>
      </div>
    </div>
  );
};

export default ImageBlock;
