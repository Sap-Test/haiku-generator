let wordArray = [
    [],
    ["are","have", "three", "they"],
    ["silent","twilight", "haiku","something"],
    ["banana","bicycle"],
    ["directory","degenerate"],
    ["cornucopia", "serendipity"],
    ["veterinarian"],
    ["intercommunicative","intelligibility"]

];
$(document).ready(function(){
    $("button#addWord").click(addWord);
    $("button#generate").click(generateHaiku);
});

function addWord(){

    let wordEntered = $("input#word").val();
    let numberOfSyllables = 0;
    let wordWithoutDash = "";
    let i = 0;

    //Check the no. of syllables
    while( i < wordEntered.length)
    {
        if(wordEntered[i] === "-")
        {
            numberOfSyllables++;
            wordWithoutDash = wordEntered.replaceAll("-","");
        }
        i++;
    }
    //if number of syllables more than 7 then give error
    if(numberOfSyllables > 6)
    {
        $("p#error").text(`The word has more than 7 syllables`);
    }
    else
    {
        // push the word to the dictionary
        wordArray[numberOfSyllables+1].push(wordWithoutDash);
    }
}


function pickRandomWord(syllables){

    //locating the array with syllable from 1 to 7
    let arrayWithWords = wordArray[syllables];

    // generates a random number based on array length
    let randomWordArray = Math.floor(Math.random() * arrayWithWords.length);
    return arrayWithWords[randomWordArray];
}

function generateHaiku() {

    let firstLine = "";
    let secondLine = "";
    let thirdLine = "";

    let randomHigh = 7;

    let syllablesLine1 = 0;
    let syllablesLine2 = 0;
    let syllablesLine3 = 0;

    let syllableIndex = (Math.floor(Math.random() * randomHigh) + 1);

    while(syllableIndex > 5)
        syllableIndex = (Math.floor(Math.random() * randomHigh) + 1);

    while (syllablesLine1 < 6)
    {
        firstLine += pickRandomWord(syllableIndex)+ " ";
        syllablesLine1 += syllableIndex;
        randomHigh = 5 - syllablesLine1 ;
        syllableIndex = (Math.floor(Math.random() * randomHigh) + 1);

        if(syllablesLine1 === 5)
            break;
    }

    randomHigh = 7;
    syllableIndex = (Math.floor(Math.random() * randomHigh) + 1);

    while (syllablesLine2 < 8)
    {
        secondLine += pickRandomWord(syllableIndex)+ " ";
        syllablesLine2 += syllableIndex;
        randomHigh = 7 -syllablesLine2;
        syllableIndex = (Math.floor(Math.random() * randomHigh) + 1);

        if(syllablesLine2 === 7)
            break;
    }

    randomHigh = 7;
    syllableIndex = (Math.floor(Math.random() * randomHigh) + 1);

    while(syllableIndex > 5)
        syllableIndex = (Math.floor(Math.random() * randomHigh) + 1);

    while (syllablesLine3 < 6)
    {
        thirdLine += pickRandomWord(syllableIndex)+ " ";
        syllablesLine3+= syllableIndex;
        randomHigh = 5 - syllablesLine3;
        syllableIndex = (Math.floor(Math.random() * randomHigh) + 1);

        if(syllablesLine3 === 5)
            break;
    }

    $("#firstLine").text(firstLine);
    $("#secondLine").text(secondLine);
    $("#thirdLine").text(thirdLine);
}