import React from "react";
import axios from "axios";
import './App.css';
// import Button from 'react-bootstrap/Button';
import Weather from "./components/Weather";
import Movies from "./components/Movies";
import Card from 'react-bootstrap/Card'
// import CardGroup from 'react-bootstrap/CardGroup'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      locationData: {},
      showMap: false,
      showErrorMessage: false,
      showWeather: false,
      showMovies: false,
      weatherData: '',
      WeatherInformation: [],
      MoviesInformation: [],

      moviesData: [],
      lat: '',
      lon: ''

    }
  }

  ////////////////////////////////  NEW METHODE  ///////////////////////////////////

  // Rendering Weather 
  renderWeather = async () => {

    let weatherUrl = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.cityName}`;


    let weatherData = await axios.get(weatherUrl);
    console.log('weeeessss', weatherData)

    await this.setState({
      WeatherInformation: weatherData.data,
      showWeather: true,


    })
    console.log("third dxxxata", weatherData);

  }

  // Rendering Movies 
  renderMovies = async () => {

    let moviesUrl = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.cityName}`;

    let resData3 = await axios.get(moviesUrl);
    await this.setState({
      MoviesInformation: resData3.data,
      showMovies: true,
    })
    console.log("third data", resData3);

  }









  /////////////////////////////////////////////////////////////////////
  getData = async (e) => {
    e.preventDefault();
    await this.setState({
      cityName: e.target.city.value
    })
    //localhost:3001/weather?cityName=selecteddCity

    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_MY_KEY}&q=${this.state.cityName}&format=json`

    this.renderWeather();
    this.renderMovies();

    // the url for weather description
    // let urlWeather = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.cityName}`;


    // the url  for movies description 
    // let urlMovies = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.cityName}`;

    try {
      let resData = await axios.get(url);
      // console.log(this.state.cityName);
      // let resData2 = await axios.get(urlWeather);
      // let resData3 = await axios.get(urlMovies);

      console.log("first data", resData);
      // console.log("second data", resData2);
      // console.log("third data", resData3);

      this.setState({
        // because axios will return it in (data)
        locationData: resData.data[0],
        showMap: true,
        // weatherData: resData2.data,
        // moviesData: resData3.data,
        // showWeather: true,
        // showMovies: false,


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
            <Card style={{ width: '35rem', backgroundColor: '#75c9e2', boxShadow: '2px 2px 2px black' }}>
            <Card.Img variant="top" alt="maap"  src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_MY_KEY}&center=${this.state.locationData.lat},${this.state.locationData.lon}&zoom=14`} />
            <Card.Body>
              <Card.Title>information about :<h1> {this.state.locationData.display_name} </h1>
              </Card.Title>
              <Card.Text>
                <h2> Latitude: </h2>  {this.state.locationData.lat}
                <h2> Longitude :</h2>{this.state.locationData.lon}
              </Card.Text>

            </Card.Body>
          </Card>
          }
          





          {/* weather in new way========== */}
          <Weather WeatherInformation={this.state.WeatherInformation} showWeather={this.state.showWeather} cityInformation={this.state.locationData.display_name} renderWeather={this.renderWeather} />
          {/* {
            this.state.WeatherInformation.map((weather, index) => {
              return (



                <div className={index}>

                  <Weather
                    cityInformation={this.state.locationData.display_name}
                    showWeather={this.state.showWeather}
                    WeatherInformation={weather}
                    renderWeather={this.renderWeather}

                  />
                </div>
              )
            })
          } */}


          {this.state.MoviesInformation.map((movie, index) => {
            return (
              <div className={index}>
                <Movies movie={movie} showMovies={true} />
              </div>
            )
          })}





          {/* weather old way====================== */}
          {/* {
            this.state.weatherData.map((item, index) => {
              return (




                <Weather showWeather={this.state.showWeather} 
                  desc={item.description}
                  date={item.date}
                  key={index} />
              )
            })
          } */}
          {/* the old way in movies========== */}
          {/* {
            this.state.moviesData.map((item, index) => {
              return (
                <CardGroup>
                  <Card>
                    <Movies

                      title={item.title}
                      overview={item.overview}
                      average_votes={item.vote_average}
                      popularity={item.popularity}
                      release_date={item.release_date}
                      image={`http://image.tmdb.org/t/p/w342` + item.poster_path}
                      poster_path={item.poster_path}


                    />

                  </Card>
                </CardGroup>
              )
            })
          } */}










        </form>



      </div>
    )
  }
}

export default App;