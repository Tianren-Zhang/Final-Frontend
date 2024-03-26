import React from 'react';
import Image from './Image';
import mainImage from  '../image/main.png';
export default function HomePage() {
  
  return (
    <div>
      <Image imageUrl={mainImage} />
    </div>
  );
}
