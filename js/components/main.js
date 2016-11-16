import React from 'react';
import divider from '../helpers/divider';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        //set initial state values
        this.state = {dividend: '', divisor: '', answer: ''};
        //bind context of event handlers
        this.divide = this.divide.bind(this);
        this.onDividendChange = this.onDividendChange.bind(this);
        this.onDivisorChange = this.onDivisorChange.bind(this);
    }
    //event handler for forms submit event will call the divider and set answer value on state
    divide(e) {
        e.preventDefault();

        //ensure provided divisor is not 0
        if(Number(this.state.divisor) === 0) {
            this.setState({answer: 'Divisor can not be 0.'});
            return;
        }
        
        //run division on provided numbers
        let result = divider(this.state.dividend, this.state.divisor);
        //set answer on state per result
        this.setState({answer: `${result.quotient} r ${result.remainder}`});
    }

    onDividendChange(e) {
        //update state change to dividend
        this.setState({dividend: e.target.value});
    }

     onDivisorChange(e) {
         //update state change to divisor
        this.setState({divisor: e.target.value});
    }

    render() {
        return (<div className="col-md-4 col-md-offset-4">
                    <h3>Divider test interface</h3>
                    <form onSubmit={this.divide}>
                        <div className="form-group">
                            <input type="number" onChange={this.onDividendChange} value={this.state.dividend} className="form-control" placeholder="Dividend"/>
                        </div>
                        <h3 className="text-center">&divide; </h3>
                        <div className="form-group">
                            <input type="number" onChange={this.onDivisorChange} value={this.state.divisor} className="form-control" placeholder="Divisor"/>
                        </div>
                        <hr/>
                        <div className="form-group">
                            <input type="text" disabled value={this.state.answer} className="form-control"/>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Divide</button>
                    </form>
            </div>);
    }
}