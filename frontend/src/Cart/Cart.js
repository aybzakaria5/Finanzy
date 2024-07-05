import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Style from './Cart.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  return (
    <>
    <h3 className={Style.title}>Read the biggest ebooks for free</h3> 
    <div className={Style.container}>
        <Card style={{ width: '18rem' , marginTop: '60px' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s" />
            <Card.Body>
                <Card.Title>Romance</Card.Title>
                <Card.Text>
                    100 items
                </Card.Text>
                <Button variant="primary">See Books</Button>
            </Card.Body>
        </Card>
        
        <Card style={{ width: '18rem' , marginTop: '60px'  }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s" />
            <Card.Body>
                <Card.Title>Horror</Card.Title>
                <Card.Text>
                    100 items.
                </Card.Text>
                <Button variant="primary">See Books</Button>
            </Card.Body>
        </Card>
        
        <Card style={{ width: '18rem', marginTop: '60px'  }} >
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s" />
            <Card.Body>
                <Card.Title>Biography</Card.Title>
                <Card.Text>
                    100 items
                </Card.Text>
                <Button variant="primary">See Books</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem', marginTop: '60px'  }} >
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    100 items
                </Card.Text>
                <Button variant="primary">See Books</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem', marginTop: '60px'  }} >
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s" />
            <Card.Body>
                <Card.Title>Autobiography</Card.Title>
                <Card.Text>
                    100 items
                </Card.Text>
                <Button variant="primary">See Books</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem', marginTop: '60px'  }} >
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s" />
            <Card.Body>
                <Card.Title>Fantasy</Card.Title>
                <Card.Text>
                    100 items
                </Card.Text>
                <Button variant="primary">See Books</Button>
            </Card.Body>
        </Card>

    </div>

    
        

    
    </>
  )
}

export default Cart