function get_all() {

    console.log("[START] get_all()");

    // YOUR CODE GOES HERE

    let api_endpoint_url = "http://krazywoman.com/krazystars/api/star/read.php";

    // from this point on, do NOT memorize, just understand the workflow

    // axios happens asynchronously
    axios.get(api_endpoint_url)
    .then(response => {
        // if i reach this point, it means the API call was successful
        // and the API response is inside 'response'
        console.log(response.data.records); 

        let array_stars = response.data.records; // so i can use it later in a for loop
        var starsDiv = document.getElementById('stars');

        // Task 1

        // METHOD 1
        // Use String Template Literals (``) to create an unordered list of stars' fullnames
        // assign to innerHTML 
        // starsDiv.innerHTML = '<ul>';
        // for(let stars of array_stars){ // do we need to write the 'let' cuz it still works if we dont
        //     var newItem = `<li>${stars['fullname']}</li>`;
        //     starsDiv.innerHTML += newItem;
        // }

        // starsDiv.innerHTML += '</ul>';

        // METHOD 2
        var list = document.createElement('ul');
        for(let star of array_stars){
            var listItem = document.createElement('li');
            var itemText = document.createTextNode(star.fullname);
            listItem.appendChild(itemText);
            list.appendChild(listItem);
        }
        starsDiv.appendChild(list);

    })
    .catch(error => {
        console.log(error.message);
    });

    console.log("[END] get_all()");
}
