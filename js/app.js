'use strict';

alert('Are you sure you want to enter this website?');
// get the users name
var userName = prompt('Hi there! What is your name? \(first last)');
console.log('obtaining identity of \'' + userName + '\'.');
alert('Nice to have you here ' + userName + ' I\'m going to ask you questions about me. These are all yes/no questions so feel free to answer with y/n or yes/no');

// ask them 5 y/n questions

console.log('beginning download.');
var answerOne = prompt('Do I have any pets?').toLowerCase();

//Here I am testing whether I can nest an if/else inside the else

if (answerOne === 'y' || answerOne === 'yes') {
    console.log('downloading...');
    alert('Okay, so you remember my introduction from Monday. Cool.'); 
} else {
    console.log('downloading...');
    alert('HA! Guess again bub :P');
    console.log('downloading...');
    var answerOneTwo = prompt('Do I have any pets?').toLowerCase();
    if ( answerOneTwo === 'y' || answerOneTwo === 'yes') {
        alert('So you changed your mind and got it right. How about them second chances, huh?');
    } else {
        console.log('downloading...');
        alert('Seriously?! It\'s 50/50 and you still got it wrong? You should leave now.');
    }
}

//The nest works!

//I'm testing using multiple alerts after an answer to give depth to the conversation.
//I also implemented auto closing a page when the User continues to get answers wrong. I hope that doesn't fail me...heh heh...

alert('Okay then, let\'s move on.');

var answerTwo = prompt('Do I like pizza?').toLowerCase();
console.log('downloading...');

if (answerTwo === 'yes' || answerTwo === 'y') {
    alert('That was a gimme. Of course I like pizza!');
    console.log('downloading...');
} else {
    alert(' \'insert long drawn out sigh here\' I can\'t believe... Why would you even think... Is there any hope for you at all?');
    var answerTwoTwo = prompt('I\'m this close to giving up on you but I\'m no quitter. Riddle me this, if you put a seed in the ground and water it, will it grow? This may help you later.').toLowerCase();
    if (answerTwoTwo === 'y' || answerTwoTwo ==='yes') {
        alert('FINALLY! LADIES AND GENTLEMEN WE HAVE WINNER!');
        alert('Feels good to win at something doesn\'t it? That\'s why we don\'t quit.');
    } else {
        alert('...');
        alert('Please leave. You\'re killing me.');
        alert('5');
        alert('4');
        alert('3');
        alert('2');
        //I removed the window.close(); because i couldn't get it to function properly.
    }
}

alert('CONGRATULATIONS!!! Only one more question left.');

var answerThree = prompt('Do you actually want to see this webpage?').toLowerCase();
console.log('downloading...');

if (answerThree === 'y' || answerThree === 'yes') {
    console.log('downloading...');
    console.log('download complete.');
    console.log('access granted.')
    alert('BEHOLD!');
} else {
    console.log('downloading...');
    console.log('download complete.');
    alert('Thank you for your identity, foolish human.');
}