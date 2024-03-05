class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "English", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])

function SwitchCountry() {

    let menuItem = document.querySelector('#CountryList');
    let countryLabel = document.querySelector('#CountryName');
    let languageLabel = document.querySelector('#OfficialLanguage');
    let helloLabel = document.querySelector("#HelloWorld");

    let input = menuItem.value;
    let country;

    let runProgram = prompt("Are you sure? y/n");
    if (runProgram === "y")
    {
        if (input === "USA") {
            //set country to usa 
            country = usa;

            countryLabel.innerText = usa.name;
            languageLabel.innerText = usa.lang;
            helloLabel.innerText = usa.greeting;
            
        }
        else if (input === "Mexico") {
            country = mexico;

            countryLabel.innerText = mexico.name;
            languageLabel.innerText = mexico.lang;
            helloLabel.innerText = mexico.greeting;
        }
        else if (input === "Algeria") {
            country = algeria;
            countryLabel.innerText = algeria.name
            languageLabel.innerText = algeria.lang;
            helloLabel.innerText = algeria.greeting;
        }
        
        DisplayColors(country);
    }

}

function DisplayColors(country)
{

    document.querySelector("#Color1").style.backgroundColor = country.colors[0];
    document.querySelector("#Color2").style.backgroundColor = country.colors[1];
    document.querySelector("#Color3").style.backgroundColor = country.colors[2];
    
}