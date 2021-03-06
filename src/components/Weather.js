import React from "react";

import Card from 'react-bootstrap/Card';

class Weather extends React.Component {
    render() {


        return (
            <div className="cardcontainer">
                
                {this.props.showWeather &&
                    <Card style={{ width: '28rem', backgroundColor: '#b0ceff', boxShadow: '2px 2px 2px black' }} >

                        <Card.Body>
                            <Card.Title>Weather for : {this.props.cityInformation}</Card.Title>


                            {this.props.WeatherInformation.map(day =>

                                <Card.Text>
                                    {day.date} {' : '} {day.description}
                                </Card.Text>


                            )}
                        </Card.Body>
                    </Card>
                }

            </div>








            // <div>
            //     <p>

            //    date:{this.props.date}
            //    description:{this.props.desc}
            //     </p>
            // </div>
        )
    }
}
export default Weather;