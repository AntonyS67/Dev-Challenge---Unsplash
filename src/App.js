import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import './App.css';
import {URL} from './config';
import Form from './Components/Form';
import Images from './Components/Images';
import Nav from './Components/Nav';
function App() {
  const [loading,setLoading] = useState(true);
  const [modalIsOpen,setIsOpen] = useState(false);
  const [images,setImages] = useState([]);
  const [actions,setActions] = useState({
    titleForm:'',
    action:'',
    img:''
  })
  const [search,setSearch] = useState('');
  useEffect(()=>{
    const getImages = async () => {
      let term;
      if(search){
        term = URL+'/images/search/'+search;
      }else{
        term = URL+'/images'
      }
      const result = await axios.get(term);
      setImages(result.data);
      setLoading(false);
    }
    getImages();
  },[modalIsOpen,search]);

  return (
    <div className="container">
      <Nav setIsOpen={setIsOpen} setActions={setActions} setSearch={setSearch}/>
      {loading 
      ?
        <ReactLoading type="spin" color="black" height={'5%'} width={'5%'} className="loading"></ReactLoading>
      :
        <>
          <Images images={images} setIsOpen={setIsOpen} setActions={setActions}/>
          {modalIsOpen && <Form modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} actions={actions}/>}
        </>
      }
     
    </div>
  );
}

export default App;
