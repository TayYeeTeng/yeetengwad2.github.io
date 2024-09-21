// KrazyStars API v1.0 - Documentation
// http://krazywoman.com/krazystars/


// When the webpage loads
// Randomly determine whether to show "male" stars or "female" stars
function display_default() {

    // YOUR CODE GOES HERE
    // Call API

    var randomNum = Math.floor(Math.random() * 2);
    var gender = 'f';
    if(randomNum == 1){
        gender = 'm'
    }
    populate_stars(gender);
}

function populate_stars(gender){
    api_endpoint_url = `http://krazywoman.com/krazystars/api/star/search.php?g=${gender}`;

    axios.get(api_endpoint_url)
    .then(response => {
        console.log(response.data.records);

        // retrieve the wiki link element
        var wiki_links = document.getElementById('wiki_links');
        wiki_links.innerText = "";

        // retrieve the imdb link element
        var imdb_links = document.getElementById('imdb_links');
        imdb_links.innerText = "";

        // retrieve the slideshow element
        var slide_show = document.getElementById('slide_show');
        slide_show.innerText = "";
        
        var stars = response.data.records;
        var counter = 1;

        for(let profile of stars){
            var fullname = profile['fullname'];
            var photo_background_url = profile['photo_background_url'];
            var quote = profile['quote'];
            var wikipedia_url = profile['wikipedia_url'];
            var imdb_url = profile['imdb_url'];

            var activeStatus = "";

            if(counter == 1){
                activeStatus = 'active';
            }

            // add to slideshow
            var slideshowItem = `<div class="carousel-item ${activeStatus}">
                                    <img id="image1" src="${photo_background_url}" alt="">
                                    <div class="carousel-caption">
                                        <h2 class="star_h2" id="slide_heading1" style="padding: 5px; background-color: grey; color: white">${fullname}</h2>
                                        <p id="slide_title1" style="padding: 5px; background-color: black; color: white">${quote}</p>
                                    </div>
                                </div>`;
            slide_show.innerHTML += slideshowItem;

            // add to wiki link
            var wikiLink = document.createElement('a');
            wikiLink.innerText = fullname;
            wikiLink.setAttribute('href', wikipedia_url);
            wikiLink.setAttribute('target', "_blank");
            wikiLink.setAttribute('class', "dropdown-item");
            wiki_links.appendChild(wikiLink);

            // add to imdb link
            var imdbLink = document.createElement('a');
            imdbLink.innerText = fullname;
            imdbLink.setAttribute('href', imdb_url);
            imdbLink.setAttribute('target', "_blank");
            imdbLink.setAttribute('class', "dropdown-item");
            imdb_links.appendChild(imdbLink);

            counter ++;
        }
    })
    .catch(error => {
        console.log(error.message);
    });
}

// This function is called when user clicks on "Show Male Stars" button.
function show_male_stars() {

    // YOUR CODE GOES HERE

    populate_stars('m');
    document.getElementById('male_button').setAttribute("disabled", true);
    document.getElementById('female_button').removeAttribute("disabled");
}


// This function is called when user clicks on "Show Female Stars" button.
function show_female_stars() {

    // YOUR CODE GOES HERE
    populate_stars('f');
    document.getElementById('female_button').setAttribute("disabled", true);
    document.getElementById('male_button').removeAttribute("disabled");
}