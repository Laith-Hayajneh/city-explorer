import React from "react";
import axios from "axios";
import './App.css';
import Button from 'react-bootstrap/Button'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationData: {},
      cityName: '',
      showMap: false

    }
  }
  getData = async (e) => {
    e.preventDefault();
    await this.setState({
      cityName: e.target.city.value
    })
    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_MY_KEY}&q=${this.state.cityName}&format=json`
    let resData = await axios.get(url);
    // console.log(this.state.cityName);
    console.log(resData);

    this.setState({
      locationData: resData.data[0],
      showMap: true
    })




  }

  render() {
    return (
      <div>
        <h1>CITY EXPLORER</h1>
        <form onSubmit={this.getData} >
          <input variant type='text' placeholder='city name ' name="city" />
          <input type='submit' value="SEARCH" />
          
          {
            this.state.showMap &&
            <p>
              <p>
                information about :<h1> {this.state.locationData.display_name} </h1>

              </p>
              <h2> Latitude: </h2>  {this.state.locationData.lat}
              <h2> Longitude :</h2>{this.state.locationData.lon}
            </p>
          }
          {this.state.showMap &&
            <img alt="" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_MY_KEY}&center=${this.state.locationData.lat},${this.state.locationData.lon}&zoom=14`} />

          }


        </form>


      </div>
    )
  }
}
export default App;