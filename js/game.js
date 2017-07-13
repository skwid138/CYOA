/*
[Adventure Game Name]
1. layout story premise
2. ask user if they want to play (close game if not)
3. prompt the user with a question and ask for input
*/

// prints to screen
function print(message) {
  var outputDiv = document.getElementById('story-text');
  outputDiv.innerHTML = message;
}

/*
This will be the master list of questions
- inside the array objects will contain the question and then each of the options 'paths' the user may choose

- the paths will be arrays with the text and expected input which can be used later in a loop to compare against their input

**maybe renaming these would help, especially as the array grows to keep coding simple

**it would be easier if we laid out mutiple choice options and then accepted the input as a number 1-X
*/
var questions = [
    {
        question : '',
        path1 : ['[text describing path]', '[epected input, this could be a number, string or boolean]'],
        path2 : '',
        path3 : '',
        path4 : '',
        path5 : ''
    }
];

// if we write the story to the webpage then we can use this variable to loop their answer into the page
var answer;

print('<h1>bold test</h1><p>not bold test</p>');
