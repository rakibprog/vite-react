import React from "react";



class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state = { date: new Date() }
    }

    componentDidMount() {
        setInterval( () => {

            this.setState({
                date: new Date(),
            });

        },1000);
    }

    componentWillUnmount() {
         clearInterval ( () => {

            this.setState({
                date: new Date(),
            });

         },1000)
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log('the button was clicked');
    }
    render() {

        return (
            <>

            <h1 className="Heading">
                <span className="text"> { this.state.date.toLocaleTimeString(this.props.local) } </span>
            </h1>
            
             <button onClick={this.handleClick}> click </button>
            
            </>
           
        )
    }

}


export default Clock;