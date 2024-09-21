// KrazyMLBB API v1.0 - Documentation
// http://krazywoman.com/krazymlbb/


// When the webpage loads
// Display all heroes
function display_default() {

    // Display all heroes
    
    // YOUR CODE GOES HERE
    var api_endpoint_url = "http://krazywoman.com/krazymlbb/api/hero/read.php";

    axios.get(api_endpoint_url)
    .then(response => {
        console.log(response.data.records);
        populate_heroes(response.data.records);
    })
    .catch(error => {
        console.log(error.message);
    });
    
}

function populate_heroes(heroes){

    var hero_cards = document.getElementById('hero_cards');
    hero_cards.innerText = "";
    var addHero = "";

    for(let hero of heroes){
        var heroClass = hero['class'];
        var heroDesc = hero['description'];
        var heroURL = hero['img_profile_url'];
        var heroName = hero['name'];
        var battlePoints = hero['purchase']['battlepoint_cost'];
        var diamonds = hero['purchase']['diamond_cost'];
        var stats = hero['stats'];

        addHero += `<div class="card mb-3 mx-auto">
                        <div class="row no-gutters">
                            <div class="col-md-3">
                                <img src="${heroURL}" class="card-img" width="100%">
                            </div>
                            <div class="col-md-9">
                                <div class="card-body">
                                    <h5 class="card-title">${heroName}</h5>
                                    <button class='video' data-bs-toggle="modal" data-bs-target="#youtubeVideo">YouTube/Videos</button>
        
                                    <p class="card-text">${heroDesc}</p>
                                    
                                    <p class="text-center">
                                        <button type="button" class="btn mb-1" style="background-color:#ff7002; color: white; width: 220px">
                                            Battlepoint Cost <span class="badge bg-light text-dark">${battlePoints}</span>
                                        </button>
        
                                        <button type="button" class="btn mb-1" style="background-color:#1326ff; color: white; width: 220px">
                                            Diamond Cost <span class="badge bg-light text-dark">${diamonds}</span>
                                        </button>
        
                                        <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                            Movement Speed <span class="badge bg-light text-dark">${stats['movement_speed']}</span>
                                        </button>
        
                                        <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                            Physical Attack <span class="badge bg-light text-dark">${stats['physical_attack']}</span>
                                        </button>
        
                                        <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                            Physical Defense <span class="badge bg-light text-dark">${stats['physical_defense']}</span>
                                        </button>
        
                                        <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                            Magic Power <span class="badge bg-light text-dark">${stats['magic_power']}</span>
                                        </button>
        
                                        <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                            Armor <span class="badge bg-light text-dark">${stats['armor']}</span>
                                        </button>
        
                                        <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                            Magic Resistance <span class="badge bg-light text-dark">${stats['magic_resistance']}</span>
                                        </button>
        
                                        <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                            HP <span class="badge bg-light text-dark">${stats['hp']}</span>
                                        </button>
        
                                        <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                            Mana <span class="badge bg-light text-dark">${stats['mana']}</span>
                                        </button>
        
                                        <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                            Attack Speed <span class="badge bg-light text-dark">${stats['attack_speed']}</span>
                                        </button>
        
                                        <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                            HP Regen Rate <span class="badge bg-light text-dark">${stats['hp_regen_rate']}</span>
                                        </button>
        
                                        <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                            Mana Regen Rate <span class="badge bg-light text-dark">${stats['mana_regen_rate']}</span>
                                        </button>
        
                                        <button type="button" class="btn mb-1" style="background-color:#3e3b3a; color: white; width: 220px">
                                            Class <span class="badge bg-light text-dark">${heroClass}</span>
                                        </button>
                                    </p>
                                </div>
                            </div> <!-- end of col -->
                        </div> <!-- end of row -->
                    </div> <!-- end of card (one hero) -->`;
    }

    hero_cards.innerHTML = addHero;
    
}


// Given a hero_class (tank, fighter, mage, asassin, marksman, support, all)
function show_heroes(hero_class) {

    // if 'tank'
    // only display 'tank' heroes

    // if 'all'
    // display ALL heroes

    // YOUR CODE GOES HERE
    var api_endpoint_url = "http://krazywoman.com/krazymlbb/api/hero/read.php";

    if(hero_class != 'all'){
        var api_endpoint_url = `http://krazywoman.com/krazymlbb/api/hero/search.php?c=${hero_class}`;
    }

    axios.get(api_endpoint_url)
    .then(response => {
        console.log(response.data.records);
        populate_heroes(response.data.records);
    })
    .catch(error => {
        console.log(error.message);
    });

}