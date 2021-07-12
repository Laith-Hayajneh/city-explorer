import React from "react";


class Weather extends React.Component {
    render() {

        
        return (
            <div>
                <p>

               date:{this.props.date}
               description:{this.props.desc}
                </p>
            </div>
        )
    }
}
export default Weather;