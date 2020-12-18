import React from 'react'
import Image from './Image'
// import {images} from '../data';
function Images({images,setIsOpen,setActions}) {
    return (
        <section className="container-gallery">
            {images.map(img => (
                <Image img={img} key={img._id} setIsOpen={setIsOpen} setActions={setActions}/>
            ))}
        </section>
    )
}

export default Images
