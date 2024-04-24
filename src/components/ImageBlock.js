import React from 'react';

const ImageBlock = ({ imageUrl }) => {
  return (
    <div className='image-block'>
      <div className='image-wrapper'>
        <img src={imageUrl} alt='Image' className='custom-image' />
      </div>
      <div className='text-wrapper'>
        <h1>Ask questions and find similar papers with One Click</h1>
      </div>
    </div>
  );
};

export default ImageBlock;
