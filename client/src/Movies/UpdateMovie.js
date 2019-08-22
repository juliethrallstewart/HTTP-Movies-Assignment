import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialItem = {
	id: '',
	title: '',
	director: '',
	metascore: '',
	// stars: []
};

export default function UpdateMovie (props) {
    const [ movie, setMovie ] = useState(initialItem);
    
    console.log(props.match.params.id)
    console.log(props)
    console.log(props.savedList)

	useEffect(
		() => {
			const id = props.match.params.id;
            const itemInArr = props.savedList.find(movie => `${movie.id}` === id);
            console.log('item in array', itemInArr)
            if (itemInArr) setMovie(itemInArr);
            console.log('movie that gets set', movie)
		},
		[ props.movieList, props.match.params.id ]
    );
    
    const handleChange = e => {
        e.persist();
        //if event is === stars need to map in the items first.. otherwise: 
        setMovie({ ...movie, [e.target.name]: e.target.value });
        console.log('handleChange', e.target.name, e.target.value, movie);

        //

    }

    const handleSubmit = e => {
        e.preventDefault();
            axios
                .put('http://localhost:5000/api/movies/${movie.id}', movie)
                .then(res => {
                    console.log(res);
                    setMovie(initialItem);
                    props.addToSavedList(res.data);
                    props.history.push('/');
                })
                .catch(e => console.log('update movie error', e))
    }

    return  (
            <>
    <div className="update-container">
        <div className="update-form">
        <h1>Update movie details</h1>
            <form className="input-container" onSubmit={handleSubmit}>
                <input className="update-input" placeholder="title" value={movie.title} name="title" onChange={handleChange} />
                <input className="update-input" placeholder="director" value={movie.director} name="director" onChange={handleChange} />
                <input className="update-input" placeholder="metascore" value={movie.metascore} name="metascore" onChange={handleChange} />
                <input className="update-input" placeholder="stars" value={movie.stars} name="stars" onChange={handleChange} />
                <button className="save-button-update" onClick={handleSubmit}>Save</button>
            </form>
        </div>
    </div>
    </>
    )
}
