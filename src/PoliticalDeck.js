import React from 'react';
import CardDeck from "react-bootstrap/CardDeck.js"
import PoliticalCard from "./PoliticalCard.js"
import "./styles/politicalDeck.css"
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
});

class PoliticalDeck extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="baseline"
                spacing={24}
            >
                <Grid container justify={"center"} spacing={24}>
                {this.props["allCards"].map((data) =>
                    <Grid key={data.title} item>
                        <PoliticalCard {...data}/>
                    </Grid>
                )
                }
                </Grid>
            </Grid>
            // <CardDeck>
            //     {this.props["allCards"].map((data) => <PoliticalCard {...data}/>)}
            // </CardDeck>
        )
    }
}

// export default PoliticalDeck;
export default withStyles(styles)(PoliticalDeck);
