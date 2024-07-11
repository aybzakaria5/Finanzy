import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Style from './Cart.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  return (
    <>
      <h3 className={Style.title}>Explore Our Car Models</h3>
      <div className={Style.container}>
        <Card style={{ width: '18rem', marginTop: '60px' }}>
          <Card.Img variant="top" src="https://example.com/sedan.jpg" />
          <Card.Body>
            <Card.Title>Sedan</Card.Title>
            <Card.Text>
              A stylish and comfortable ride.
            </Card.Text>
            <Button variant="primary">See Details</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', marginTop: '60px' }}>
          <Card.Img variant="top" src="https://example.com/suv.jpg" />
          <Card.Body>
            <Card.Title>SUV</Card.Title>
            <Card.Text>
              Perfect for family trips.
            </Card.Text>
            <Button variant="primary">See Details</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', marginTop: '60px' }}>
          <Card.Img variant="top" src="https://example.com/truck.jpg" />
          <Card.Body>
            <Card.Title>Truck</Card.Title>
            <Card.Text>
              Built for heavy-duty tasks.
            </Card.Text>
            <Button variant="primary">See Details</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', marginTop: '60px' }}>
          <Card.Img variant="top" src="https://example.com/coupe.jpg" />
          <Card.Body>
            <Card.Title>Coupe</Card.Title>
            <Card.Text>
              Sporty and sleek design.
            </Card.Text>
            <Button variant="primary">See Details</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', marginTop: '60px' }}>
          <Card.Img variant="top" src="https://example.com/hatchback.jpg" />
          <Card.Body>
            <Card.Title>Hatchback</Card.Title>
            <Card.Text>
              Compact and efficient.
            </Card.Text>
            <Button variant="primary">See Details</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', marginTop: '60px' }}>
          <Card.Img variant="top" src="https://example.com/convertible.jpg" />
          <Card.Body>
            <Card.Title>Convertible</Card.Title>
            <Card.Text>
              Enjoy the open air.
            </Card.Text>
            <Button variant="primary">See Details</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Cart;
