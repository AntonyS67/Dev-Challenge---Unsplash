import React, { useState } from 'react'
import Modal from 'react-modal'
import axios from 'axios'
import { URL } from '../config';

function Form({modalIsOpen,setIsOpen,actions}) {
    const {titleForm,action,img} = actions;

    const [data,setData] = useState({
        _id: img._id ? img._id : '',
        title: img.title ? img.title : '',
        url: img.url ? img.url : '',
    })

    const [error,setError] = useState(false);

    const {_id,title,url} = data;

    const closeModal = () => {
        setIsOpen(false);
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]:e.target.value
        });
    }

    const addPhoto = () => {
        if(title.trim() === '' || url.trim() === ''){
            setError(true);
            return;
        }
        try {
            axios.post(`${URL}/images`,{title,url})
            .then(res => {
                closeModal();
            })
            .catch(error => console.log(error));
        } catch (error) {
            console.log(error);
        }
    };

    const updatePhoto = () => {
        try {
            axios.put(`${URL}/images/${_id}`,{title,url})
            .then(res => {
                closeModal();
            })
            .catch(error => console.log(error));
        } catch (error) {
            console.log(error);
        }
    }
    const deletePhoto = () => {
        try {
            axios.delete(`${URL}/images/${_id}`)
            .then(res => {
                closeModal();
            })
            .catch(error => console.log(error));
        } catch (error) {
            console.log(error);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        switch (action) {
            case 'add':
                addPhoto();
                break;
            case 'update':
                updatePhoto();
                break;
            case 'delete':
                deletePhoto();
            default:
                break;
        }
    }
    return (
        <Modal
            isOpen={modalIsOpen}
            className="modal"
        >
            <h2>{titleForm}</h2>
            <form onSubmit={handleSubmit}>
                {action === 'add' || action === 'update'
                ? 
                    <>
                        <div className="input-form-group">
                            <label htmlFor="title">Title</label>
                            <input name="title" placeholder="My photo" value={title} onChange={handleChange}/>
                        </div>
                        <div className="input-form-group">
                            <label htmlFor="url">Photo URL</label>
                            <input name="url" placeholder="http://lorempixel.com/400/400" value={url} onChange={handleChange}/>
                        </div>
                    </>
                : 
                    null
                }
                
                <div className="form-input-buttons">
                    <button onClick={closeModal} className="cancel">Cancel</button>
                    <button
                        type="submit"
                        className={action === 'add' || action === 'update' ? 'submit' : 'delete'}
                    >{action === 'add' || action === 'update' ? 'Submit' : 'delete'}</button>
                </div>
            </form>
        </Modal>
    )
}

export default Form
