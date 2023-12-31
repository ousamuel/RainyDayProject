import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MyContext from './MyContext';

function Cards(props)
{
  const {author, url} = props.community;
  const [isHovered, setIsHovered] = useState(false);

 
  function handleHover() 
  {
    setIsHovered(true);
  }
  
  function handleLeave() 
  {
    setIsHovered(false);
  }
    return (
        <Card style={{position:'relative' ,width: '80%', height:"100%" ,  border:'none', color:"white", borderRadius:"15%", marginBottom:"20px", marginLeft:'20px', visibility:'visible'}} onMouseOver={handleHover} onMouseLeave={handleLeave}>
           <Card.Img variant='top' className="card-img" src={url} style={{ height:'33%', width:'100%', justifySelf:'stretch',borderRadius:"15%", marginBottom:"10px", opacity: isHovered? '50%' : '100%'}} alt="dog pic" />
           <Card.Body style={{position:'absolute',bottom:'25px', left: '16px',visibility: isHovered ? 'visible' : 'hidden'}}>{author}</Card.Body>
           <Button  variant="danger" style={{position:'absolute', top:'10px', right:"16px", borderRadius:'50%',visibility: isHovered ? 'visible' : 'hidden'}}>♥</Button>
         </Card>
    );
  }

        //
          
export default Cards;