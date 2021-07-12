import React from "react";
import axios from "axios";
import './App.css';
// import Button from 'react-bootstrap/Button';
import Weather from "./Weather";
import Movies from "./Movies";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      locationData: {},
      showMap: false,
      showErrorMessage: false,
      weatherData: [],
      moviesData:[],
      lat: '',
      lon: ''

    }
  }
  getData = async (e) => {
    e.preventDefault();
    await this.setState({
      cityName: e.target.city.value
    })
    //localhost:3001/weather?cityName=selecteddCity

    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_MY_KEY}&q=${this.state.cityName}&format=json`


    // the url for weather description
    let urlWeather = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.cityName}`;


    // the url  for movies description 
    let urlMovies = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.cityName}`;

    try {
      let resData = await axios.get(url);
      // console.log(this.state.cityName);
      let resData2 = await axios.get(urlWeather);
      let resData3 = await axios.get(urlMovies);

      console.log("first data", resData);
      console.log("second data", resData2);
      console.log("third data", resData3);

      this.setState({
        // because axios will return it in (data)
        locationData: resData.data[0],
        showMap: true,
        weatherData: resData2.data,
        moviesData: resData3.data

      })

      // console.log('saasas',locationData)
    } catch {
      this.setState({
        showErrorMessage: true,
      })
    }




  }


  render() {
    return (
      <div>
        <h1>CITY EXPLORER</h1>
        <form onSubmit={this.getData} >
          <input variant type='text' placeholder='city name ' name="city" />
          <input type='submit' value="SEARCH" />
          {this.state.showErrorMessage &&
            <p>something went wrong in getting data from locationiq</p>
          }

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
          {/* <p> here are online{this.state.weatherData.data.map(d)=>{return(<p>ddddd</p>)}} </p> */}


          {/* {
            this.state.weatherData.data
          } */}



          {
            this.state.weatherData.map((item,index)=>{
              return(




                <Weather 
                desc={item.description}
                date={item.date}
                key={index} />
            )
            })
          }
          {
            this.state.moviesData.map((item,index)=>{
              return(
                <Movies 
                title={item.title}
                overview={item.overview}
                average_votes={item.vote_average}
                popularity={item.popularity}
                release_date={item.release_date}
                image={`http://image.tmdb.org/t/p/w342` + item.poster_path}
                poster_path={item.poster_path}

                
                />
              )
            })
          }








        </form>



      </div>
    )
  }
}
export default App;