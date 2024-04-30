import React from "react";



class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state = { date: new Date(), local: 'bn-BD'  }
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

    handleClick = () => {
        this.setState({
            local:'en-US'
        });
    }
    render() {

        const { local } = this.state;

        return (
            <>

            <h1 className="Heading">
                <span className="text"> { this.state.date.toLocaleTimeString(local) } </span>
            </h1>
            
             <button onClick={this.handleClick}> click </button>
            
            </>
           
        )
    }

}


export default Clock;