import React from 'react';
import "./styles/slider.css"

class ScaleSlider extends React.Component{
    constructor(props) {
        super(props)
        this.state = {};
    }

    getInitialState() {
        return { scale: 1 }
    }

    onChange(event) {
        console.log(event)
        // this.setState({scale});
        // console.log(scale);
    }

    render () {
        const {scale} = this.state;
        return (
            <div className='conta'>
                <div>
                    <input type="range" step={0.01} min={1} max={2} value={scale} onChange={this.onChange}/>
                    {scale}
                </div>
            </div>
        );
    }
}

export default ScaleSlider;