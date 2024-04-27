import React from "react";



class Clock extends React.Component{

    render() {

        return (
            <h1 className="Heading">
                <span className="text"> { new Date().toLocaleTimeString('bn-BD') } </span>
            </h1>
        )
    }

}


export default Clock;