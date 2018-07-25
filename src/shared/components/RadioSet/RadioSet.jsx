import React from 'react';

export default class RadioSet extends React.Component{
	state = {
		checked: 0
	}

	onRadioChange = (index) => () => {
		this.setState({
			checked: index
		})
	}

	render(){
		return (this.props.setOptions) ? (
			<React.Fragment>
				{this.props.setOptions.map((option,index) => 
					<label
						key={option}>
						{option}
						<input
							type="radio"
							value={option}
							name={this.props.setName}
							ref={(index === this.state.checked) ? this.props.handleRef : null}
							onChange={this.onRadioChange(index)}
							defaultChecked={(index === 0) ? true : false}/>
					</label>
				)}
			</React.Fragment>
		) : null
	}
}