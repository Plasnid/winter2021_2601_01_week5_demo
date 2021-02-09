/**
 * * Story Themes
 * 
 * * Football
 * * Hockey
 * * Singing
 * * Horror
 * * Travelling
 */

let myMovie = {
	storyName: "The Return Of The Athelete Singer: A 3D Horror Story",
	storyLine: [
		"A little girl is playing football in the evening",
		"Behind her, a house has a door that slowly creeps open!",
		"A child sized mummy shambles out of the house!",
		"The mummy throws toilet paper at the little girl.",
		"The mummy sings a chilling song, that sounds like sadness and terror.",
		"The girl turns to see where the sound is coming from, but the mummy dissapears.",
		"The little girl drops the football, and sprints towards the house",
		"dusty footprints lead from the tv all the way to the front door.",
		"The house is empty, except for the sounds of static from the TV",
		"The singing begins again, and the door slams shut.",
		"Screaming in terror the little girl runs to find her parents.",
		"Creeping into her parents room, she find them motionless on the bed, wrapped like mummies."
	],
	isItADream: false,
	numMinutes: 60,
	watchWithKids: function(){
		return "the kids now have a complex...thats mean!";
	}
};

/**
 * ! movieScenes
 * * loops through array to create p tags and console logs of strings
 * @param {*} scenes - an array of strings
 */
function movieScenes(scenes){
    let pageBody = document.querySelector("body");
	for(let i=0; i<scenes.length;i++){
		let myParagraph = document.createElement("p");
		myParagraph.innerText = scenes[i];
		console.log(myParagraph);
		pageBody.appendChild(myParagraph);
	}
}

console.log(myMovie.watchWithKids());
console.log(myMovie.storyName);

/**
 * * movieTitle
 * * creates a title for our string, and console logs our title
 * @param {*} title - a string that holds our title
 */
function movieTitle(title){
    let pageBody = document.querySelector("body");
    let myTitle = document.createElement("h1");
    myTitle.innerText = title;
    console.log(myTitle);
    pageBody.appendChild(myTitle);
}
movieTitle(myMovie.storyName);
movieScenes(myMovie.storyLine);