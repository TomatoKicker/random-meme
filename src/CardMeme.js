import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

async function getImage(){
	let apiMeme = await fetch("https://meme-api.com/gimme").then((res)=>res.json()).then((data)=>{return data.url})
	document.querySelector('#imageMeme').src=apiMeme

}
getImage()

function CardMeme() {
  return (
	  <Card>
      <Card.Body className='text-center'>
        <Card.Title>Random Meme</Card.Title>
        <Card.Text>
	        <Image id="imageMeme" alt="meme" className='mw-100'/>
        </Card.Text>
        <Button variant="primary" onClick={async () => {getImage()}}>Refresh</Button>
      </Card.Body>
    </Card>
  );
}

export default CardMeme;
