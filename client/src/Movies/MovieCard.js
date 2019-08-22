import React from 'react';

const MovieCard = props => {
	const { title, director, metascore, stars } = props.movie;
	return (
		<div className="movie-card">
			<h2>{title}</h2>
			<div className="movie-director">
				Director: <em>{director}</em>
			</div>
			<div className="movie-metascore">
				Metascore: <strong>{metascore}</strong>
			</div>
			<h3>Actors</h3>

			{stars.map(star => (
				<div key={star} className="movie-star">
					{star}
				</div>
			))}
			<div className="save-button" onClick={this.saveMovie}>
				Save
			</div>
			<div
				className="update-button"
				onClick={() => this.props.history.push(`/update-movie/${this.state.movie.id}`)}>
				Update
			</div>
			<div className="delete-button" onClick={this.deleteMovie}>
				Delete
			</div>
		</div>
	);
};

export default MovieCard;
