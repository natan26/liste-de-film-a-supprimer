import React, { Component } from 'react';
import { getMovies } from "../service/fakeMovieService";
import dayjs from "dayjs";
import { v4 as uuidv4 } from 'uuid';
import "./film.css";

console.log(uuidv4());
export class Movies extends Component {
    state = {
        movies: getMovies(),
    };
    handleDelete = (movie)=>{
        const movies = this.state.movies.filter((m)=> m._id !== movie._id)
        this.setState({ movies: movies})
    }
 

       render() {
        const counter = this.state.movies.length;
        
        return (
            <>
            {/* <h1>{dayjs().isBefore(dayjs())}</h1 > */}
            {/* <h1 className='top'></h1> */}
            <h2 className='top'>Il y a {counter} film(s) dans cette liste de film.
            <br />Listes des films de cinema:</h2>
        <table className="table">    
            <thead>
                <tr>
                    <th>Poster</th>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Note</th>
                    <th>  </th>
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