const body = document.querySelector("body");

const main = document.querySelector("main");
const toggleTheme = document.querySelector("#toggle-theme");

var social_a = document.querySelector(".icons-social");
var projects_w = document.querySelector(".project-grid");

const socialAccounts = [
  {
    name: "github",
    link: "https://github.com/rogergcc",
    icon: "fab fa-github",
  },

  // {
  // 	name: "gitlab",
  // 	link: "https://gitlab.com/rogergcc",
  // 	icon: "fab fa-gitlab"
  // },

  {
    name: "stackoverflow",
    link: "https://stackoverflow.com/story/rogergcc",
    icon: "fab fa-stack-overflow",
  },

  {
    name: "www",
    link: "https://www.linkedin.com/in/roger-colquehuanca-calcina/",
    icon: "fab fa-linkedin",
  },

  {
    name: "medium",
    link: "https://medium.com/@rogercolque",
    icon: "fab fa-medium",
  },

  {
    name: "codepen",
    link: "https://codepen.io/rogergcc/",
    icon: "fab fa-codepen",
  },

  {
    name: "www",
    link: "https://www.freecodecamp.org/rogergcc",
    icon: "fab fa-free-code-camp",
  },

  {
    name: "www",
    link: "https://www.hackerrank.com/rogergcc",
    icon: "fab fa-hackerrank",
  },

  {
    name: "twitter",
    link: "https://twitter.com/gccroger",
    icon: "fab fa-twitter",
  },
];

const projects = [
  {
    _id: "12",
    title: "IP Address Tracker",
    creator: "roger",
    user: "rogergcc",
    url: "https://ip-address-tracker-project.herokuapp.com/",
    type: "Front-End",
    img: "./assets/ip_adrress_tracker.webp",
    technologies: ["Nodejs", "Api", "Heroku", "Mapbox", "JS"],
  },

  {
    _id: "12",
    title: "Especialidades/Carta del día con Google Sheets.",
    creator: "roger",
    user: "rogergcc",
    url: "https://rogergcc.github.io/specials_menu/",
    type: "Front-End",
    img: "./assets/daily_menu_restaurant.webp",
    technologies: ["Google Sheets", "AppScript", "HTML", "CSS", "JS"],
  },

  {
    _id: "5",
    title: "Game App - Memory Game Movies",
    creator: "roger",
    user: "rogergcc",
    url: "https://appgallery5.huawei.com/#/app/C102550113",
    type: "Mobile App",
    img: "./assets/descarga_addfondo_2.webp",
    description: "Memory Android Game App - Movies",
    technologies: ["Android App", "Game App", "Android Studio"],
  },

  {
    _id: "1",
    title:
      "Mobile Application in Xamarin Forms and Native “Legal App” to track Administrative documents.",
    creator: "roger",
    user: "rogergcc",
    url: "https://github.com/rogergcc/AppLegal",
    type: "Mobile App",
    img: "./assets/m_tramiteLegal.webp",
    description:
      "Android Mobile Application and multiplatform App in Xamarin Forms “Legal App” to track Administrative documents . Manage contracts quickly and easily.",
    technologies: [
      "C# and Java",
      "Android App",
      "Android Studio",
      "Multiplatform App",
      "Visual Studio",
      "ASP.Net",
      "MS Sql",
    ],
  },

  {
    _id: "2",
    title:
      "Mobile App “Faedoch Qr” inventory and control of equipment in the faculty.",
    creator: "roger",
    user: "rogergcc",
    url: "https://github.com/rogergcc/AppSisfaedcoh",
    type: "Mobile App",
    img: "./assets/m_qrInventoryFaedcoh.webp",
    description:
      "Mobile App “Faedoch Qr” inventory and control of equipment in the faculty, recognition of items display of information according to their QR code.",
    technologies: [
      "Java",
      "Android App",
      "Android Studio",
      "Visual Studio Code",
      "PHP",
      "Mysql",
    ],
  },

  {
    _id: "3",
    title:
      "Mobile App “Cortesias” to carry out a control and monitoring of the courtesies.",
    creator: "roger",
    user: "rogergcc",
    url: "https://github.com/rogergcc/AppAtencionPedidos",
    type: "Front-End",
    img: "./assets/m_cortesias.webp",
    description:
      "Mobile App to carry out a control and monitoring of the courtesies that are attended in the room",
    technologies: [
      "Java",
      "Android App",
      "Android Studio",
      "ASP.Net",
      "MS Sql",
    ],
  },
  {
    _id: "4",
    title: "Mobile App “Ludopatas” related to the Money Laundering Module",
    creator: "roger",
    user: "rogergcc",
    url: "#",
    type: "Mobile App",
    img: "./assets/m_ludopatas.webp",
    description:
      "Mobile App “Ludopatas” related to the Money Laundering Module, in order to streamline the search process each client, for each gaming room of the PJ corporation, identifying, if it is an unpleasant person, a political person and a gambler",
    technologies: [
      "Java",
      "Android App",
      "Android Studio",
      "ASP.Net",
      "MS Sql",
    ],
  },

  {
    _id: "7",
    title: "Book  Ui Transition project api google books ",
    creator: "roger",
    user: "rogergcc",
    url: "https://github.com/rogergcc/BookUiProject",
    type: "Mobile App",
    img: "./assets/m_bookUiTransition.webp",
    description: "Book  Ui Transition project api google books ",
    technologies: ["Java", "Android App", "Android Studio"],
  },
  {
    _id: "8",
    title: "Music player with flexbox and deezer api (tracks)",
    creator: "roger",
    user: "rogergcc",
    url: "https://rogergcc.github.io/music-adventure/",
    type: "Front-End",
    img: "./assets/f_songs_adventure.webp",
    description: "Music player with flexbox and deezer api (tracks).",
    __v: 1,
    technologies: ["HTML5", "CSS3", "Sass scss", "JS ES6"],
  },

  {
    _id: "9",
    title: "Card Flip - Movies",
    creator: "roger",
    user: "rogergcc",
    url: "https://codepen.io/rogergcc/full/rrrNdy",
    type: "Front-End",
    img: "./assets/f_movies.webp",
    description: "Codepen Card Flip - Movies",
    __v: 1,
    technologies: ["HTML", "CSS", "SCSS", "JS "],
  },
  {
    _id: "10",
    title: "Free Code Camp | Pokemon Gens",
    creator: "roger",
    user: "rogergcc",
    url: "https://codepen.io/rogergcc/full/NeEYeN",
    type: "Front-End",
    img: "./assets/f_pokemons_gens.webp",
    description: "Pokemon Generations.",
    technologies: ["HTML5", "CSS3", "JS", "Bulma CSS Framework"],
  },
  {
    _id: "11",
    title: "Marvel APi",
    creator: "roger",
    user: "rogergcc",
    url: "https://rogergcc.github.io/ApiMarvel/",
    type: "Front-End",
    img: "./assets/f_marvel.webp",
    technologies: ["HTML", "CSS", "SCSS", "JS"],
  },
];

function mapSocialAccounts(social) {
  social_a.innerHTML = "";
  const html = social
    .map((account) => {
      return `
			<a rel="noopener" target="_blank" href="${account.link}"><i class="${account.icon}"></i></a>
		`;
    })
    .join("");

  social_a.innerHTML += html;
}

let root = document.documentElement;
mapSocialAccounts(socialAccounts);

//Before
// body.addEventListener("click", () => {

// 	var currentClass = main.className;

// 	main.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";

// });

//Now
toggleTheme.addEventListener("click", () => {
  var currentClass = main.className;

  main.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
});

function mapProjectsWorks(projectsARR) {
  projects_w.innerHTML = "";
  let html = projectsARR
    .map((projec) => {
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
    })
    .join("");

  projects_w.innerHTML += html;
}

mapProjectsWorks(projects);
