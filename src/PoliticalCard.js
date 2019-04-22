import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ScaleSlider from "./Slider.js"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import './styles/politicalCard.css'



const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};

class PoliticalCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"flipped": false, "complete": false}
    }

    getCard() {
        if (this.state.complete) {
            return (
                <CardContent>
                    <img className="complete"
                         src="https://raw.githubusercontent.com/vasvenk/PublicPictures/master/TilePics/done.png"
                         height="32"
                         width="32"/>
                </CardContent>
            )
        }
        if (this.state.flipped) {
            return (
                <div className="politicalCard">
                    <CardContent>
                        <Typography
                            gutterBottom variant="h5"
                            component="h2"
                            className="politicalTitle"
                            align="center"
                        >
                            {this.props.title}
                        </Typography>
                        <Typography component="p" className="politicalTitle" paragraph="true">
                            {this.props.description}
                        </Typography>
                    </CardContent>
                </div>
            )
        }
        else {
            return (
                <div className="politicalCard">
                    <img src={this.props.image}/>
                    <CardContent>
                        <Typography
                            gutterBottom variant="h5"
                            component="h2"
                            className="politicalTitle"
                            align="center"
                        >
                            {this.props.title}
                        </Typography>
                    </CardContent>
                </div>
            )
        }
    }

    flipCard() {
        this.setState({"flipped": !this.state.flipped});
    }

    markComplete() {
        this.setState()
    }

    setCompleted() {
        this.setState({"complete": !this.state.complete});
    }

    render() {
        return (
            <div className="politicalCard"
                 onMouseEnter={() => this.flipCard()}
                 onMouseLeave={() => this.flipCard()}
                 onClick={() => this.setCompleted()}>
                <Card  className="politicalCard">
                    {this.getCard()}
                </Card>
            </div>
            // <Card>
            //     <CardContent>
            //         <Typography gutterBottom variant="h5" component="h2">
            //             {this.props.title}
            //         </Typography>
            //         <ScaleSlider/>
            //     </CardContent>
            // </Card>
        )
    }
}

export default withStyles(styles)(PoliticalCard);

// export default PoliticalCard;