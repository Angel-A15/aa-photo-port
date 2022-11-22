import React from 'react';

function Gallery() {

    const currentGallery(props) {
        name: "commercial",
        description:
            "Photos of grocery stores, food trucks, and other commercial projects",
    };
    
    return(
        <section>
            <h1>{currentCategory.name}</h1>
            <p>{currentGallery.description}}</p>
        </section>
    );
}

export default Gallery;
