import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import ScaleSlider from "./Slider.js"
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'

class PoliticalCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card className="text-center" bg={this.props.bg} border='dark' text="white" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.text}
                    </Card.Text>
                </Card.Body>

                <Card.Footer><ScaleSlider/></Card.Footer>
            </Card>
        )
    }
}

export default PoliticalCard;