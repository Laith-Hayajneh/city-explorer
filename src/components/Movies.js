import React from "react";

import Card from 'react-bootstrap/Card';

// The New Way (lab09)+(lab10)
class Movies extends React.Component {
    render() {
        return (
            <>
                <div className="movie" style={{display:'inline'}}>
                    {
                        
                        <Card style={{ width: '28rem', backgroundColor: 'lightgrey', boxShadow: '2px 2px 2px black', }} >

                            <Card.Body>


                                <Card.Title style={{ height: '30px', backgroundColor: '#386ddd', boxShadow: '2px 2px 2px black', textAlign: 'center' }}> Movie Title : {this.props.movie.title}</Card.Title>


                                <Card.Text>
                                    Movie Avg. Vote :  {this.props.movie.average_votes}
                                </Card.Text>
                                <Card.Text>
                                    Movie Overview :  {this.props.movie.overview}
                                </Card.Text>

                                <Card.Text>
                                    Movie Popularity :  {this.props.movie.popularity}
                                </Card.Text>
                                <Card.Text>
                                    Movie Release_date :  {this.props.movie.release_date}
                                </Card.Text>

                                <Card.Img style={{ boxShadow: '2px 2px 2px #ccc' }} variant="top" src={this.props.movie.poster_path}
                                    alt={this.props.movie.title} />


                            </Card.Body>
                        </Card>
                    }

                </div>
            </>
        )
    }
}





























// the old way ( lab 08)
// class Movies extends React.Component {
//     render() {


//         return (
//             <>

//         <div className="movie">
//             {
//                 <Card style={{ width: '28rem', backgroundColor: 'lightgrey', boxShadow: '2px 2px 2px black' }} >

//                     <Card.Body>


//                         <Card.Title style={{ height: '30px', backgroundColor: '#386ddd', boxShadow: '2px 2px 2px black', textAlign: 'center' }}> Movie Title : {this.props.title}</Card.Title>


//                         <Card.Text>
//                             Movie Avg. Vote :  {this.props.average_votes}
//                         </Card.Text>
//                         <Card.Text>
//                             Movie Overview :  {this.props.overview}
//                         </Card.Text>

//                         <Card.Text>
//                             Movie Popularity :  {this.props.popularity}
//                         </Card.Text>
//                         <Card.Text>
//                             {/* Movie Release_date :  {this.props.release_date} */}
//                         </Card.Text>

//                         <Card.Img style={{ boxShadow: '2px 2px 2px #ccc' }} variant="top" src={this.props.poster_path}
//                             alt={this.props.title} />


//                     </Card.Body>
//                 </Card>
//             }

//         </div>
//         </>

//         )
//     }
// }


export default Movies;