import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardMeme from './CardMeme.js';


function ContainerMeme() {
  return (
	<Container>
	  <Row>
	  	<Col xs={12} class="text-center">
	  		<CardMeme/>
	  	</Col>
	  </Row>
	</Container>
  );
}

export default ContainerMeme;
