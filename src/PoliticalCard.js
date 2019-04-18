import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import ScaleSlide from "Slider.js"
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'

class PoliticalCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card className="text-center" bg="danger" border='dark' text="white" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.text}
                    </Card.Text>
                </Card.Body>
                <ScaleSlide/>
                <Card.Footer>{this.props.header}</Card.Footer>
            </Card>
        )
    }
}

export default PoliticalCard;