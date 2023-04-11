import React from 'react';
//import imgd from '../assets/logo.png'
//https://www.googleapis.com/books/v1/volumes?q=%27c%20%27   api to call
import { useState, useEffect ,useRef} from 'react';
const SeachBook = () => {
  const [data, setData] = useState([])
  const [book,setBook] = useState('')
 
  const searchRef =useRef()
  function seacrh(){
    console.log('strat')
    console.log(searchRef.current.value);
    setBook(searchRef.current.value);
  }
  useEffect(() => {
    return () => {
      console.log('mohit form function body');
      console.log(book);
      async function getdata() {
        
        const get = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}`);
        const res = await get.json();
        console.log(res)
        setData([...res.items]);

      }
      getdata();
      //console.log(data)
    };
  }, [book])
  return <>
    <div className='Book_store'>
      <h1>Find your book 
      <input type='text' ref={searchRef} ></input> 
      <button onClick={seacrh}>search book</button>
      </h1>
    </div>
    <div className='container'>
      
        {
          data.map((element, index) => {
            return (

              <div key={index} className='data'>
                <div className='books'>
                <img src={element.volumeInfo.imageLinks.thumbnail} alt='gsdc' />
                  <h2>{element.volumeInfo.publishedDate}</h2><br/>
                  <h1>Name</h1><h2>{element.volumeInfo.title}</h2><br/>
                  <h2> Author of book</h2> <h2>{element.volumeInfo.authors}</h2><br/>
                  <button> order book</button>
                </div>
              </div>
            )
          })
        }
      
    </div>

  </>;
}


export default SeachBook;
