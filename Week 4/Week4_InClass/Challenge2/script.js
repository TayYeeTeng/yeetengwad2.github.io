// Task 1
// Add an event listener to the button (the user drags his mouse over the button)

document.getElementById('justin-btn').addEventListener('mouseover', heartEvent);
document.getElementById('justin-btn').addEventListener('mouseout', 
    function leaveEvent(){
        box.innerText = "Don't Leave Me Please";
        box.style.backgroundColor = 'black';
        box.style.color = 'red';
    }
);
 
var box = document.getElementById('result');

function heartEvent(){
    box.innerText = "Welcome to My Heart";
    box.style.backgroundColor = 'pink';
    box.style.color = 'blue';
}

// Task 2
// Add an event listener to the button (the user drags his mouse out of the button)
// function leaveEvent(){
//     box.innerText = "Don't Leave Me Please";
//     box.style.backgroundColor = 'black';
//     box.style.color = 'red';
// }