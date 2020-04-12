


const body = document.querySelector('body');

const main = document.querySelector('main');

var social_a = document.querySelector('.icons-social');
var projects_w = document.querySelector('.project-grid');



const socialAccounts = [
	{
		name: "github",
		link: "https://github.com/rogergcc",
		icon: "fab fa-github"
	},

	{
		name: "gitlab",
		link: "https://gitlab.com/rogergcc",
		icon: "fab fa-gitlab"
	},

	{
		name: "stackoverflow",
		link: "https://stackoverflow.com/story/rogergcc",
		icon: "fab fa-stack-overflow"
	},

	{
		name: "www",
		link: "https://www.linkedin.com/in/roger-colquehuanca-calcina/",
		icon: "fab fa-linkedin"
	},

	{
		name: "medium",
		link: "https://medium.com/@rogercolquehuanca",
		icon: "fab fa-medium"
	},

	{
		name: "codepen",
		link: "https://codepen.io/rogergcc/",
		icon: "fab fa-codepen"
	},

	{
		name: "www",
		link: "https://www.freecodecamp.org/rogergcc",
		icon: "fab fa-free-code-camp"
	},


	{
		name: "www",
		link: "https://www.hackerrank.com/rogergcc",
		icon: "fab fa-hackerrank"
	},


	{
		name: "twitter",
		link: "https://twitter.com/gccroger",
		icon: "fab fa-twitter"
	}
];

const projects = [

{
		_id: "1",
		title: "Mobile Application in Xamarin Forms and Native “Legal App” to track Administrative documents.",
		creator: "588d27ad186c350012223b9d",
		user: "rogergcc",
		url: "https://www.dropbox.com/sh/p3d1d9g1g0osdb4/AADGPLQ3l-UPUAUmlY4HTzqla?dl=0",
		type: "Mobile App",
		img: "https://rogergcc.github.io/assets/m_tramiteLegal.JPG",
		description: "Android Mobile Application and multiplatform App in Xamarin Forms “Legal App” to track Administrative documents . Manage contracts quickly and easily.",
		technologies: [
			"C# and Java",
			"Android App",
			"Android Studio",
			"Multiplatform App",
			"Visual Studio",
			"ASP.Net",
			"MS Sql"
		]
	},

	{
		_id: "2",
		title: "Mobile App “Faedoch Qr” inventory and control of equipment in the faculty.",
		creator: "588d27ad186c350012223b9d",
		user: "rogergcc",
		url: "https://www.dropbox.com/sh/k1oap9rxraubvli/AAANjLJmoc614Iy1ahA6pGOma?dl=0",
		type: "Mobile App",
		img: "https://rogergcc.github.io/assets/m_qrInventoryFaedcoh.JPG",
		description: "Mobile App “Faedoch Qr” inventory and control of equipment in the faculty, recognition of items display of information according to their QR code.",
		technologies: [
			"Java",
			"Android App",
			"Android Studio",
			"Visual Studio Code",
			"PHP",
			"Mysql"
		]
	},

	{
		_id: "3",
		title: "Mobile App “Cortesias” to carry out a control and monitoring of the courtesies.",
		creator: "588d27ad186c350012223b9d",
		user: "rogergcc",
		url: "https://www.dropbox.com/s/oe1ul2m524e7jzr/manualcortesiascel.docx?dl=0",
		type: "Front-End",
		img: "https://rogergcc.github.io/assets/m_cortesias.JPG",
		description: "Mobile App to carry out a control and monitoring of the courtesies that are attended in the room",
		technologies: [

			"Java",
			"Android App",
			"Android Studio",
			"ASP.Net",
			"MS Sql"
		]
	},
	{
		_id: "4",
		title: "Mobile App “Ludopatas” related to the Money Laundering Module",
		creator: "588d27ad186c350012223b9d",
		user: "rogergcc",
		url: "https://www.dropbox.com/sh/690y8xbjw9o9b0l/AAAyA9NLg8kCfpXv7cG-Efwia?dl=0",
		type: "Mobile App",
		img: "https://rogergcc.github.io/assets/m_ludopatas.JPG",
		description: "Mobile App “Ludopatas” related to the Money Laundering Module, in order to streamline the search process each client, for each gaming room of the PJ corporation, identifying, if it is an unpleasant person, a political person and a gambler",
		technologies: [
			"Java",
			"Android App",
			"Android Studio",
			"ASP.Net",
			"MS Sql"
		]
	},
	{
		_id: "5",
		title: "Design Mobile App “GootWork” ",
		creator: "588d27ad186c350012223b9d",
		user: "rogergcc",
		url: "https://www.dropbox.com/sh/n7ii601mg4c9pv3/AAD4ayTtPak8m6DT9C-AoxZQa?dl=0",
		type: "Mobile App",
		img: "https://rogergcc.github.io/assets/m_flutter_gootwork.JPG",
		description: "Design Mobile App for place basic orders for people near you and helping them donating supplies",
		technologies: [
			"Dart",
			"Multiplatform App",
			"Visual Studio Code",
			"Flutter"
		]
	},
	
	{
		_id: "6",
		title: "Save Data Offline - Persitence Data.",
		creator: "588d27ad186c350012223b9d",
		user: "rogergcc",
		url: "https://github.com/rogergcc/SharedPreferenceFavorites",
		type: "Mobile App",
		img: "https://rogergcc.github.io/assets/m_persitenceData.JPG",
		description: "Save Data Offline - Persitence Data.",
		technologies: [
			"Java",
			"Android App",
			"Android Studio",
			
		]
	},
	{
		_id: "7",
		title: "Book  Ui Transition project api google books ",
		creator: "588d27ad186c350012223b9d",
		user: "rogergcc",
		url: "https://github.com/rogergcc/BookUiProject",
		type: "Mobile App",
		img: "https://rogergcc.github.io/assets/m_bookUiTransition.JPG",
		description: "Book  Ui Transition project api google books ",
		technologies: [
			"Java",
			"Android App",
			"Android Studio",
			
		]
	},
	{
		_id: "8",
		title: "Music player with flexbox and deezer api (tracks)",
		creator: "588d27ad186c350012223b9d",
		user: "rogergcc",
		url: "https://rogergcc.github.io/music-adventure/",
		type: "Front-End",
		img: "https://rogergcc.github.io/assets/f_songs_adventure.JPG",
		description: "Music player with flexbox and deezer api (tracks).",
		__v: 1,
		technologies: [
			"HTML5",
			"CSS3",
			"Sass scss",
			"JS ES6"
		]
	},

	{
		_id: "9",
		title: "Card Flip - Movies",
		creator: "588d27ad186c350012223b9d",
		user: "rogergcc",
		url: "https://codepen.io/rogergcc/full/rrrNdy",
		type: "Front-End",
		img: "https://rogergcc.github.io/assets/f_movies.JPG",
		description: "Codepen Card Flip - Movies",
		__v: 1,
		technologies: [
			"HTML",
			"CSS",
			"SCSS",
			"JS "
		]
	},
	{
		_id: "10",
		title: "Free Code Camp | Pokemon Gens",
		creator: "588d27ad186c350012223b9d",
		user: "rogergcc",
		url: "https://codepen.io/rogergcc/full/NeEYeN",
		type: "Front-End",
		img: "https://rogergcc.github.io/assets/f_pokemons_gens.JPG",
		description: "Pokemon Generations.",
		technologies: [
			"HTML5",
			"CSS3",
			"JS",
			"Bulma CSS Framework"
		]
	},
	{
		_id: "11",
		title: "Marvel APi",
		creator: "588d27ad186c350012223b9d",
		user: "rogergcc",
		url: "https://rogergcc.github.io/ApiMarvel/",
		type: "Front-End",
		img: "https://rogergcc.github.io/assets/f_marvel.JPG",
		technologies: [
			"HTML",
			"CSS",
			"SCSS",
			"JS",
		]
	},
	// {a
	// _id: "588d6626d5fa05f06d1ad0df",
	// title: "Free Code Camp | Tic Tac Toe",
	// creator: "588d27ad186c350012223b9d",
	// user: "jeremylshepherd",
	// url: "http://s.codepen.io/jeremylshepherd/debug/rOoORj",
	// type: "Front-End",
	// img "https://jeremylshepherd.iohttps://rogergcc.github.io/assets/tictactoe_new.JPG",
	// technologies: [
	// "Angular",
	// "Bootstrap",
	// "jQuery"
	// ]
	// }


];

function mapSocialAccounts(social) {
	social_a.innerHTML = "";
	const html = social.map(account => {
		return `
			<a target="_blank" href="${account.link}"><i class="${account.icon}"></i></a>
		`;
	}).join('');

	social_a.innerHTML += html;
}



let root = document.documentElement;
mapSocialAccounts(socialAccounts);

body.addEventListener("click", () => {

	var currentClass = main.className;

	main.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";

});


function mapProjectsWorks(projectsARR) {
	projects_w.innerHTML = "";
	let html = projectsARR.map(projec => {
		return `
		   <div class="project-tile">
			<a target="_blank" href="${projec.url}">
				<div class="frame">
					<span class="overlay">
						<p>${projec.title}: <br>${projec.technologies} <br>Project type: ${projec.type}</p>
					</span>
					<img class="image" src="${projec.img}" alt="${projec.title}-screenshot">
					<h5>${projec.title}</h5>
				</div>
			</a>
		</div>
	   `;
	}).join('');

	projects_w.innerHTML += html;
}



mapProjectsWorks(projects);

