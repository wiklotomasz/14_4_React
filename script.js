var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		img: 'https://i.ebayimg.com/images/g/Z54AAOSwnFZXV1Eh/s-l300.jpg'
	},														//Tablica z obiekatmi
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film opowidający historię króla sawanny',
		img: 'http://1.fwcdn.pl/po/68/78/6878/6927221.6.jpg'
	},
	{
		id: 3,
		title: "Pan życia i śmierci",
		desc: "Film o handlarzu bronią",
		img: "http://www.placecage.com/g/155/300"
	},
	{
		id: 4,
		title: "Lot skazańców",
		desc: "Film o locie skazańców :)",
		img: "http://www.placecage.com/c/460/300"
	},
	{
		id: 5,
		title: "Bez twarzy",
		desc: "Kolejny świetny film z Nickiem :)",
		img: "http://www.placecage.com/c/200/300"
	},
];

var Movie = React.createClass({								// 1.
	render: function(){
	 return React.createElement('li', {key: movie.id},	
			React.createElement('h2', {}, movie.title),
			React.createElement('p', {}, movie.desc),
			React.createElement('img', {src: movie.img}) 
		)
	} 
});
/*
var moviesElements = movies.map(function(movie) {  
 	React.createClass({
 		render: function(){
 			return 
 		}
 	})										   	 
}); 
*/
var moviesElements = 
	React.createClass({
		render: function(){
			return movies.map(function(movie) {React.createElement('Movie', {}, movie),
			}		
		})	
	}); 


var element = 
	React.createElement('div', {}, 
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements) // umieszczenie powyższych elementów w liście
	);


ReactDOM.render(element, document.getElementById('app'));