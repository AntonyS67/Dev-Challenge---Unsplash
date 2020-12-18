import React from 'react'

function Image({img,setIsOpen,setActions}) {
    const {_id,title,url} = img;
    
    const handleHover = () => {
        const div = document.getElementsByClassName(`gallery-item-detail${_id}`)[0];
        if(!div.classList.contains('show')){
            div.classList.toggle('show');
        }
    }
    const handleLeave = () => {
        const div = document.getElementsByClassName(`gallery-item-detail${_id}`)[0];
        div.classList.remove('show');
    }

    const openModal = (action) => {
        setIsOpen(true);
        setActions({
            titleForm: 'Update Photo '+title,
            action,
            img
        })
    }

    return (
        <div className="gallery-item"  onMouseOver={handleHover} onMouseLeave={handleLeave}>
            <img src={url} alt={title}/>
            <div className={`gallery-item-details gallery-item-detail${_id}`}>
                <h3>{title}</h3>
                <div className="button-delete">
                    <button type="button" onClick={() => openModal('update')}>update</button>
                    <button type="button" onClick={() => openModal('delete')}>delete</button>
                </div>
            </div>
        </div>
    )
}

export default Image
