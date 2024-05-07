import React from "react";


class Forms extends React.Component {

    state = {
        value: 'My name is rocky',
    }

    handleOnChange = (event) => {

        this.setState({
            value:event.target.value,
        })

    }
   
    render() {
        console.log(this.state.value);
         return (
             <>
                <div className="form-wrapper">
                      <input type="text" placeholder="Input your content" value={this.state.value} onChange={this.handleOnChange} />
                </div>
             </>
         )
    }
}


export default Forms;