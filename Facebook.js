
var database = [
	{
	username: "dylan",
	timeline: "I like Drum and bass and games",
	password: "123",
	picture: "images/side.jpg"
	},
	{
	username: "lisa",
	timeline: "I like netflix and reading",
	password: "123",
	picture: "images/lisa.jpg"
	},
	{
	username: "jordan",
	timeline: "I like minecraft and anime",
	password: "123",
	picture: "images/jordan.jpg"
	},
	{
	username: "Nutter",
	timeline: "Woof woof",
	password: "123",
	picture: "images/nutter.jpg"
	},
	{
	username: "shane",
	timeline: "i'm a game designer",
	password: "123",
	picture: "images/shane.jpg"
	},
	{
	username: "branden",
	timeline: "I like mtg",
	password: "123",
	picture: "images/branden.jpg"
	},
	{
	username: "catt",
	timeline: "I like art and mandalas",
	password: "123",
	picture: "images/catt.jpg"
	},
	{
	username: "ed",
	timeline: "ah suh du. What da fwaaaaaaaaak",
	password: "123",
	picture: "images/ed.jpg"
	},
	{
	username: "random",
	timeline: "E is the greatest meme to ever exist. It contains so much irony that in order to truly understand its overwhelming complexity takes twenty to thirty minutes. The first time I saw E in April, I needed a moment to regain my composure after one of the hardest laughing fits I ever encountered sent me to the floor. On top of the mash up of lord faarquad and markiplier, two already very dank figures due to different reasons (the knock on effect of Shrek/all star and YouTube drama respectively), the deep fried nature adds to the irony of the image. However, that is just the fuel. The spark of the memes unfathomable amount of humor comes from its simplest element. The single letter E, in its impact font glory. On top of impact font being an extremely dank format when deep fried due to its high irony, the single letter E surpasses all other possible captions due to the simple fact that the letter E is able to not only shine a window into how memes have become so meta that a single letter is hilarious, but also because the simplicity of it is able to bring out an extra level of humor due to how absurd it is. E is an absolute masterpiece and should be rendered as such",
	password: "123",
	picture: "images/random.jpg"
	}
];

var timeline = document.getElementById("timeline");
var profile = document.getElementById("profile");
var profPic = document.getElementById("profPic");

function createTimeline(user) {
	for (var i = 0; i < database.length; i++) {
			if (user != database[i].username) {
				var tlBlock = document.createElement("div");
				tlBlock.classList.add("tlBlock");

				var pic = document.createElement("img");
				pic.src = database[i].picture;

				var h1 = document.createElement("h3");
				h1.appendChild(pic);
				h1.appendChild(document.createTextNode(database[i].username));

				var p = document.createElement("p");
				p.appendChild(document.createTextNode(database[i].timeline));
				
				// tlBlock.appendChild(pic);
				tlBlock.appendChild(h1);
				tlBlock.appendChild(p);
				timeline.appendChild(tlBlock);
			} else {
				profPic.src = database[i].picture;
				var nameBlock = document.createElement("div");
				var name = document.createElement("h2");
				var pBlock = document.createElement("div");
				var p = document.createElement("p");

				name.appendChild(document.createTextNode(database[i].username));
				p.appendChild(document.createTextNode(database[i].timeline));
				nameBlock.appendChild(name);
				nameBlock.classList.add("nameBlock");
				pBlock.appendChild(p);
				pBlock.classList.add("pBlock");
				profile.appendChild(nameBlock);
				profile.appendChild(pBlock);
			}
	}
}

var SignBtn = document.getElementById("SignBtn");
var SignInBlock = document.getElementsByClassName("Modal")[0];
var userNamePrompt = document.getElementsByClassName("inputSignIn")[0];//"dylan";
var passwordPrompt = document.getElementsByClassName("inputSignIn")[1];//"123";

function isUserValid(user, pass) {
	for (var i=0; i < database.length; i++) {
		if (user === database[i].username && pass === database[i].password) {
			return true;
		}
	}
	return false;
}

function signIn(user, pass) {
	if (isUserValid(user, pass)) {
		createTimeline(user);
		SignInBlock.style.display = "none";
		}
	else {
		alert("Sorry, wrong username/ password");
	}
}

function signInKeyPress(event) {
	if (event.keyCode === 13) {
		signIn(userNamePrompt.value, passwordPrompt.value);
	}
}

SignBtn.onclick = function() {
	signIn(userNamePrompt.value, passwordPrompt.value);
}

userNamePrompt.addEventListener("keypress", signInKeyPress);
passwordPrompt.addEventListener("keypress", signInKeyPress);