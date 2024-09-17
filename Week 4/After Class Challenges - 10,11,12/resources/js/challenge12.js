// [IMPORTANT]
// DO NOT MODIFY challenge12.html content
// YOU MUST WORK WITH WHAT IS GIVEN TO YOU



// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
var getParas = document.getElementsByTagName('p');

function highlight_words() {

    // YOUR CODE GOES HERE
    var wordLength = prompt("Enter word length (words longer than this length will be highlighted for you)");
    for (let i = 1; i < getParas.length; i++) {
        var newPara = "";
        getParas[i].innerText.split(" ");
        for (let word of getParas[i].innerText.split(" ")) {
            if (word.length > wordLength){
                newPara += "<span style='background-color:yellow;'>" + word + "</span> ";
            }else{
                newPara += word + " ";
            }
        }
        getParas[i].innerHTML = newPara;
        
    }
}


// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function show_num_words() {

    // YOUR CODE GOES HERE
    for (let i = 1; i < getParas.length; i++) {
        var newPara = "";
        var wordCount = getParas[i].innerText.split(" ").length;
        newPara += `<strong>(${wordCount} words)</strong><br>`;
        newPara += getParas[i].innerText;

        getParas[i].innerHTML = newPara;
        
    }
}


// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function show_emoticons() {

    // YOUR CODE GOES HERE
    for (let i = 1; i < getParas.length; i++) {
        var newPara = getParas[i].innerText.replaceAll(",", "⭐");
        newPara = newPara.replaceAll("?", "❓");
        newPara = newPara.replaceAll("!", "❗");

        getParas[i].innerHTML = newPara;
        
    }
}