import React from 'react'

function Nav({setIsOpen,setActions,setSearch}) {
    const openModal = () => {
        setIsOpen(true);
        setActions({
            titleForm:'Add a new photo',
            action: 'add',
            img:''
        })
    }
    return (
        <nav className="nav">
            <div className="nav-right">
                <a href="/"><img src="./logo.png" alt="logo" className="logo"/></a>
                <div className="input-group">
                    <i className="fas fa-search"></i>
                    <input type="search" placeholder="Seach by title" name="search" onChange={e => setSearch(e.target.value)}/>
                </div>
            </div>
            <button type="button" className="add-photo" onClick={openModal}>Add a photo</button>
        </nav>
    )
}

export default Nav
