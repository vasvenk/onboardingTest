import React from 'react';
import CardDeck from "react-bootstrap/CardDeck.js"
import PoliticalCard from "./PoliticalCard.js"

class PoliticalDeck extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CardDeck>
                {this.props["allCards"].map((data) => <PoliticalCard {...data}/>)}
            </CardDeck>
        )
    }
}

export default PoliticalDeck;