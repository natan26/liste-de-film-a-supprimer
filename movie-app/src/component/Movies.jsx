import React, { Component } from 'react';
import { getMovies } from "../service/fakeMovieService";


export class Movies extends Component {
    state = {
        movies: getMovies(),
    };
    handleDelete = (movie)=>{
        const movies = this.state.movies.filter((m)=> m._id !== movie._id)
        this.setState({ movies: movies})
    }

       render() {
        
        return (
            <>
        <table className="table">    
            <thead>
                <tr>
                    <th>Poster</th>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Note</th>
                </tr>
            </thead>
            <tbody> 
               {this.state.movies.map((movie)=>(
                <tr>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><button onClick={()=>this.handleDelete(movie)} className="btn btn-danger">Supprimer</button></td>
                </tr>
               ))}
                
            </tbody>
        </table>


            </>
        )
        
    }
}

export default Movies;