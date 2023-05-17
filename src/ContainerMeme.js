import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardMeme from './CardMeme.js';


function ContainerMeme() {
  return (
	<Container>
	  <Row className='d-flex justify-content-center'>
	  	<Col xs={12} className={"d-flex justify-content-center"}>
	  		<CardMeme/>
	  	</Col>
	  </Row>
	</Container>
  );
}

export default ContainerMeme;
