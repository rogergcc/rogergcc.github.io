const body = document.querySelector("body");

const main = document.querySelector("main");
const toggleTheme = document.querySelector("#toggle-theme");

const social_a = document.querySelector(".icons-social");
const projects_w = document.querySelector(".project-grid");

const card = document.querySelector(".content");

const projectsNewDesign = document.querySelector(".project-flex");
const projectsNewDesignItemTechnologies = document.querySelector(
	".project-flex-item-technologies"
);

const URL_API =
	"https://script.google.com/macros/s/AKfycbzxy3v7xV1vuOsvD_0i7yJn66-53cMG1WlzGxd6_Vbxltu5W3U/exec?action=getItems";

const spinner = document.querySelector("#spinner");
//https://script.google.com/macros/s/AKfycbzxy3v7xV1vuOsvD_0i7yJn66-53cMG1WlzGxd6_Vbxltu5W3U/exec?action=getItems

const rootStyle = document.querySelector(":root");

const socialAccounts = [
	{
		name: "github",
		link: "https://github.com/rogergcc",
		icon: "fab fa-github",
		active: false,
	},

	// {
	// 	name: "gitlab",
	// 	link: "https://gitlab.com/rogergcc",
	// 	icon: "fab fa-gitlab"
	//},

	{
		name: "stackoverflow",
		link: "https://stackoverflow.com/story/rogergcc",
		icon: "fab fa-stack-overflow",
		active: true,
	},

	{
		name: "linkedin",
		link: "https://www.linkedin.com/in/roger-colquehuanca-calcina/",
		icon: "fab fa-linkedin",
		active: false,
	},

	{
		name: "medium",
		link: "https://medium.com/@rogercolque",
		icon: "fab fa-medium",
		active: true,
	},

	{
		name: "codepen",
		link: "https://codepen.io/rogergcc/",
		icon: "fab fa-codepen",
		active: false,
	},

	{
		name: "freecodecamp",
		link: "https://www.freecodecamp.org/rogergcc",
		icon: "fab fa-free-code-camp",
		active: true,
	},

	{
		name: "hackerrank",
		link: "https://www.hackerrank.com/rogergcc",
		icon: "fab fa-hackerrank",
		active: true,
	},

	{
		name: "twitter",
		link: "https://twitter.com/gccroger",
		icon: "fab fa-twitter",
		active: false,
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
			<a rel="noopener" target="_blank" href="${account.link}"><i class="${account.icon} light dark cursor-pointer"></i></a>
		`;
		})
		.join("");

	social_a.innerHTML += html;
}

let root = document.documentElement;
const socialFilter = socialAccounts.filter((account) => account.active == true);
mapSocialAccounts(socialFilter);

//Before
// body.addEventListener("click", () => {

// 	var currentClass = main.className;

// 	main.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";

// });

//Now
toggleTheme.addEventListener("click", () => {
	var currentClass = main.className;

	var rs = getComputedStyle(rootStyle);
	// Alert the value of the --blue variable
	//  alert("The value of --blue is: " + rs.getPropertyValue('--blue'));
	const colorLight = "#c7ff84";
	const colorDark = "#ec4d37";

	main.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";

	let colochangeTheme = currentClass == "dark-mode" ? "#252525" : "#ffcf40";

	rootStyle.style.setProperty("--colorTheme", colochangeTheme);

	const colorChangeButton = currentClass == "dark-mode" ? "#ffcf40" : "#252525";

	rootStyle.style.setProperty("--backgroundColor", colorChangeButton);

	localStorage.theme = main.className;
});

function mapProjectsWorks(projectsARR) {
	projects_w.innerHTML = "";

	let platform = "";
	let html = projectsARR
		//https://www.flaticon.com/svg/static/icons/svg/2222/2222841.svg
		//https://www.flaticon.com/svg/static/icons/svg/888/888839.svg

		.map((projec) => {
			if (projec.type == "Mobile App") {
				platform = `<img class="platform_project" src="https://www.flaticon.com/svg/static/icons/svg/888/888839.svg" alt="project_type">`;
			} else {
				platform = `<img class="platform_project" src="https://www.flaticon.com/svg/static/icons/svg/2920/2920277.svg" alt="project_type">`;
			}

			return `
		   <div class="project-tile">
				<a rel="noopener" target="_blank" href="${projec.url}">
					<div class="frame">
						<span class="overlay">
							<p>${projec.description}: <br>${projec.technologies} <br>Project type: ${projec.type}</p>
						</span>
						<img class="image" src="${projec.img}" alt="${projec.title}-screenshot">
						<span class="title">${projec.title}</span>
						${platform}		
					</div>
				</a>
			</div>
			`;
		})
		.join("");

	projects_w.innerHTML += html;
}

const parseProjectTechnologies = (technologiesProject) => {
	let platform = "";
	const myTecnologies = technologiesProject + "";

	const listTech = myTecnologies.split("-");

	let html = "";
	listTech.forEach((tecnologie) => {
		html += `<span class="px-2 py-1 mb-2 text-gray-700 bg-gray-200 dark:bg-gray-800 rounded dark:text-gray-400">${tecnologie} 
				</span>
				<span class="mx-1">
				</span>
			`;
	});

	return html;
};

function mapProjectsNewDesign(projectsARR) {
	projectsNewDesign.innerHTML = "";
	let platform = "";
	let html = projectsARR
		//https://www.flaticon.com/svg/static/icons/svg/2222/2222841.svg
		//https://www.flaticon.com/svg/static/icons/svg/888/888839.svg

		.map((projec) => {
			return `
				
				<div class="w-full px-6 mb-12 mb:w-1/2 md:w-1/2 lg:w-1/3 md:px-3 lg:px-6 sm:mb-16 md:mb-24">
					<div class="text-gray-800 dark:text-white">
							<div class="mb-6">
								<a href="${projec.url}" title="${projec.title}" target="_blank" rel="noopener">
										<div class="transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105 hover:-translate-y-1  gatsby-image-wrapper" style="position: relative; overflow: hidden;">
											<div style="width: 100%; padding-bottom: 67.8295%;"></div>
											<picture>
												
													<img  
														src="${projec.img}" alt="${projec.title}" 
														loading="lazy" 
														style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center center; opacity: 1; transition: opacity 500ms ease 0s;">
											</picture>
										
										</div>
								</a>
							</div>
							<div>
								<h4 class="mb-2 text-2xl font-bold md:text-2_5xl font-header">
										<a href="${projec.url}" class="light dark" target="_blank" rel="noopener">
										${projec.title}
											<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="inline mb-1 ml-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
													<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
													<polyline points="15 3 21 3 21 9"></polyline>
													<line x1="10" y1="14" x2="21" y2="3"></line>
											</svg>
										</a>
										<span class="inline mb-0 ml-1 mr-1 text-xl text-gray-600 font-body">•</span>
										<a  class="inline light dark">
											<span class="sr-only">Github: ${projec.title}</span>
											<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 480 512" class="inline mb-0 ml-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
													<path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path>
											</svg>
										</a>
								</h4>
								<p class="block mb-6 dark:text-white">${projec.description}</p>
								<div class="flex flex-wrap">
								
										${parseProjectTechnologies(projec.technologies)}
								</div>
								
						</div>
					</div>
				</div>
	   `;
		})
		.join("");

	projectsNewDesign.innerHTML += html;
}

async function fetchProjects(urlEndpoint) {
	let data;
	try {
		const response = await fetch(urlEndpoint);
		data = await response.json();

		//return (data);
	} catch (error) {
		console.log(error);
	}
	// return data;
	return data.items || data.results;
}

function clickHandler(e) {
	e.preventDefault();
	const href = this.getAttribute("href");
	const offsetTop = document.querySelector(href).offsetTop;

	scroll({
		top: offsetTop,
		behavior: "smooth",
	});
}

document.addEventListener("DOMContentLoaded", async function (e) {
	(async () => {
		const myProjects = await fetchProjects(URL_API);

		spinner.setAttribute("hidden", "");

		//mapProjectsWorks(myProjects);

		mapProjectsNewDesign(myProjects);
	})();

	const links = document.querySelectorAll("a.menu-item-scroll");

	for (const link of links) {
		link.addEventListener("click", clickHandler);
	}

	main.className = localStorage.theme ? localStorage.theme : "dark-mode";

	// https://anhek.dev/en/
});
