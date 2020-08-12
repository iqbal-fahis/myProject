import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Dropdown extends Component {
	constructor(props) {
        super(props);
        let loggedIn= false
		this.state = {
			manufacturer : [],
			series : [],
			model : [],
			selectedManufacturer : '--Choose Manufacturer--',
			selectedSeries : '--Choose Series--'
		};
		this.changeManufacturer = this.changeManufacturer.bind(this);
        this.changeSeries = this.changeSeries.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
	}
  
	componentDidMount() {
		this.setState({
			manufacturer : [
				{ name: 'Apple', series: [ {name: 'Iphone', model: ['7', '10', '10s', '11pro']} ] },
				{ name: 'Samsung', series: [ {name: 'Galaxy', model: ['A50','M20','M70','S80']} ] },
				{ name: 'Redmi', series: [ {name: 'Note', model: ['5pro','6pro','7pro']} ] },
				{ name: 'Oppo', series: [ {name: 'Reno', model: ['3pro','2F','4pro']} ] },
				{ name: 'Vivo', series: [ {name: 'V', model: ['5P', '7plus', '10P', '11Max']} ] },
			]
		})
	}
  
	changeManufacturer(event) {
		this.setState({selectedManufacturer: event.target.value});
		this.setState({series : this.state.manufacturer.find(cntry => cntry.name === event.target.value).series});
	}

	changeSeries(event) {
		this.setState({selectedSeries: event.target.value});
		const stats = this.state.manufacturer.find(cntry => cntry.name === this.state.selectedManufacturer).series;
		this.setState({model : stats.find(stat => stat.name === event.target.value).model});
    }

    handleChange(e) {
        this.setState({
            selectedOption: e.target.value
          });
        }
  handleSubmit(e) {
    e.preventDefault();
  //alert("Your favorite flavor is: " + this.state.value);
  this.setState({
      loggedIn:true
  })
}
	
	render() {
        if(this.state.loggedIn){
            return <Redirect to="/Problem" />
        }
		return (
			<div className="Login">
                 <form onSubmit={this.handleSubmit}>
          <center>
                <label> Select Sevice Provider   : </label><br></br>
          <select required>
          <option value="">--Choose Service--</option>
            <option value="Airtel">Airtel</option>
            <option value="Aircel">Aircel</option>
            <option value="Jio">Jio</option>
            <option value="Vodafone">Vodafone</option>
          </select><br></br><br></br>
				<div>
					<label>Select Manufacturer    :</label><br></br>
					<select  onChange={this.changeManufacturer} required>
						<option value="">--Choose Brand--</option>
						{this.state.manufacturer.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>
                <br></br>
				<div>
					<label>Select Series     :</label><br></br>
					<select  onChange={this.changeSeries} required>
						<option value="">--Choose Series--</option>
						{this.state.series.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>
				<br></br>
				<div>
					<label>Select Model    :</label><br></br>
					<select  required>
						<option value="">--Choose Model--</option>
						{this.state.model.map((e, key) => {
							return <option key={key}>{e}</option>;
						})}
					</select>

				</div>
                <br></br>
                <label>
            <input type="radio" value="Prepaid"  checked={this.state.selectedOption === "Prepaid"} onChange={this.handleChange} required="required"/>
            Prepaid             
          </label>
          <label>
            <input type="radio" value="Postpaid"  checked={this.state.selectedOption === "Postpaid"}  onChange={this.handleChange} required/>
            Postpaid
          </label>
          </center>
          <br></br><center> <input type="submit" value="Next" /></center> 
          </form> 
			</div>
		)
	}
}

export default Dropdown;