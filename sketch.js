/*

Officer: 5214278
CaseNum: 401-2-86031214-5214278

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and has laced the cream cheese with an ingenious but vicious toxin. This one is quite deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	

Your conditional statements should consider the following poisons:

	- hemlock
	- ricin
	- DeadlyNightshade
	- mercury
	- botulinium
	- cyanide


Your conditional statements should modify the following antidotes:

	- paracetamol
	- opioids
	- insulin
	- methylene


- There are many ways to complete this task but you should only use the following commands:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var hemlock;
var ricin;
var DeadlyNightshade;
var mercury;
var botulinium;
var cyanide;


//Declare the antidote variables
var paracetamol;
var opioids;
var insulin;
var methylene;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	hemlock = 0.5;
	ricin = 0.5;
	DeadlyNightshade = 0.5;
	mercury = 0.5;
	botulinium = 0.5;
	cyanide = 0.5;
	paracetamol = 0.5;
	opioids = 0.5;
	insulin = 0.5;
	methylene = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}



function draw()
{
    
    // When botulinium goes above 0.32 and mercury goes above 0.45, try decreasing paracetamol by 0.05
	//- When ricin dips below 0.69 or cyanide dips below 0.36, try increasing paracetamol by 0.01
	//- When cyanide dips below 0.44 or DeadlyNightshade dips below 0.34, try decreasing opioids by 0.03
	//- When mercury dips below 0.38 or hemlock dips below 0.75, increment opioids by 0.03
	//- If mercury goes above 0.4 and cyanide dips below 0.29, or on the other hand, botulinium dips below 0.52, reduce insulin by 0.04
	//- When hemlock dips below 0.62, or on the other hand, DeadlyNightshade goes above 0.63 and ricin dips below 0.41, try increasing insulin by 0.04
	//- If ricin goes above 0.31 or botulinium dips below 0.33, whilst at the same time, hemlock dips below 0.6, decrease methylene by 0.02
	//- If mercury dips below 0.53, DeadlyNightshade goes above 0.45, and also cyanide goes above 0.29, try increasing methylene by 0.05


	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...
if (botulinium > 0.32 && mercury > 0.45) { paracetamol -= 0.05}
if ( ricin < 0.69 || cyanide < 0.36) { paracetamol += 0.01}
if (cyanide < 0.44 || DeadlyNightshade < 0.34) { opioids -= 0.03}
if (mercury < 0.38 || hemlock < 0.75 ) { opioids += 0.03}
if (mercury > 0.4 && cyanide < 0.29 || botulinium < 0.52) {insulin -= 0.04}
if (hemlock < 0.62 || DeadlyNightshade > 0.63 && ricin < 0.41) {insulin += 0.04}
if ( ricin > 0.31 || botulinium < 0.33 && hemlock < 0.6) {
    methylene -= 0.02}
if (mercury < 0.53 && DeadlyNightshade > 0.45 && cyanide > 0.29) {methylene += 0.05}



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	hemlock = nextValue(graphs[0],hemlock);
	ricin = nextValue(graphs[1],ricin);
	DeadlyNightshade = nextValue(graphs[2],DeadlyNightshade);
	mercury = nextValue(graphs[3],mercury);
	botulinium = nextValue(graphs[4],botulinium);
	cyanide = nextValue(graphs[5],cyanide);


	paracetamol = constrain(paracetamol, 0, 1);
	opioids = constrain(opioids, 0, 1);
	insulin = constrain(insulin, 0, 1);
	methylene = constrain(methylene, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('hemlock: ' + nf(hemlock,1,2), 20,20);
	fill(colors[1]);
	text('ricin: ' + nf(ricin,1,2), 20,40);
	fill(colors[2]);
	text('DeadlyNightshade: ' + nf(DeadlyNightshade,1,2), 20,60);
	fill(colors[3]);
	text('mercury: ' + nf(mercury,1,2), 20,80);
	fill(colors[4]);
	text('botulinium: ' + nf(botulinium,1,2), 20,100);
	fill(colors[5]);
	text('cyanide: ' + nf(cyanide,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(paracetamol,50,'paracetamol');
	drawBar(opioids,200,'opioids');
	drawBar(insulin,350,'insulin');
	drawBar(methylene,500,'methylene');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
