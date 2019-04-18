import React from 'react';
import "./styles/"

const ScaleSlider = React.createClass({
    getInitialState() {
        return { scale: 1 }
    },  onChange({target: {value: scale}}) {
        this.setState({scale});
        console.log(scale);
    },
    render () {
        const {scale} = this.state;
        return (
            <div>
                <div>
                    <input type="range" step={0.01} min={1} max={2} value={scale} onChange={this.onChange}/>
                    Scale Value: {scale}
                </div>
                <div className="container" style={{
                    backgroundColor: 'rgba(2,30,200,1)',
                    transformOrigin: 'top left',
                    transform: `scale(${scale},${scale})`}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
})

const App = React.createClass({
    render() {
        return (
            <div>
                <section>
                    <h2>Scale Slider</h2>
                    <ScaleSlider>
                        <p>Hey</p>
                        <p>Scale Me Too!</p>
                        <div style={{height:100,width:200,backgroundColor:'white'}}></div>
                    </ScaleSlider>
                </section>
            </div>
        );
    }
});

export default ScaleSlider;