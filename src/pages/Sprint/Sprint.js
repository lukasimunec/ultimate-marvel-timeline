import React, { useEffect, useState, useRef } from "react";
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';
import Scrambler from 'scrambling-text';

import { GiWrappedSweet, GiHotSpices, GiGamepad, GiSittingDog } from 'react-icons/gi'
import { AiFillCar } from 'react-icons/ai'
import { FaSuperpowers, FaPizzaSlice, FaAtom, FaFlagUsa } from 'react-icons/fa'
import { MdScience } from 'react-icons/md'
import { BiPlanet, BiMoviePlay, BiCameraMovie } from 'react-icons/bi'

import './Sprint.css'
import HeadNav from "../../components/HeadNav";

const Sprint = () => {

    const sweets = [
        "Skittles", "Smarties", "Galaxy", "Minstrels", "Galaxy Counters", "Toffee", "Cadbury", "Starburst", "Jelly Tots", "Kinder Surprise", "Kinder Bueno", "Kinder Bars", "Haribo", "Haribo Tangfastics", "Gold Bears", "Chupa Chups", "Yorkie", "Dip Dab", "Refreshers", "Revels", "Jelly Babies", "Milky Way", "Mars Bar", "Magic Stars", "Maltesers", "Munchies", "Mighty Munch", "M&M's", "Caramel Nibbles", "Wine Gums", "Rowntree's Randoms", "Twix", "Nerds", "Ferrero Rocher", "Bounty", "Lindt Truffles", "Milky Bar", "Toblerone", "Snikers", "Lion", "Cadbury Snack", "Aero", "Aero Mint", "Crunchie", "Kit Kat", "Tootie Frooties", "Curly Wurly", "Polo Original", "Walkers", "Hunky Dory", "Doritos", "Tayto", "King", "Pringles", "Hula Hoops", "Cadbury Caramel", "Flying Saucers", "Rolo", "Cadbury Eclairs", "Choc Dip", "Love Hearts", "WHAM", "Milka", "Daim Bar", "Hubba Bubba", "Cadbury Roses", "Mini Eggs Cadbury", "Maoam", "Double Decker", "Animal Bar", "Picnic", "Mentos", "Millions", "Drumstick Lollies", "Candy Sticks", "Time Out", "Time OutMoro", "Moro", "Chomp", "Cadburys Celebrations", "Fudge", "Silvermints", "Werther's Original", "Mars Delight", "The Jelly Bean Factory", "Rowntree's Fruit Gums", "Fox's Glacier Mints", "Chickatees", "Candy Necklace", "Raspberry Bon Bons", "Candy Floss", "Quality Street", "Chipsticks", "After Eight", "Ben & Jerry's", "Jawbreaker"
    ]

    const cars = [
        "Toyota", "Honda", "Chevrolet", "Ford", "Mercedes", "Jeep", "BMW", "Porsche", "Subaru", "Nissan", "Volkswagen", "Lexus", "Audi", "Ferrari", "Volvo", "Jaguar", "GMC", "Buick", "Acura", "Dodge", "Hyundai", "Lincoln", "Mazda", "Land Rover", "Tesla", "Kia", "Chrysler", "Pontiac", "Mitsubishi", "Oldsmobile", "Maserati", "Aston Martin", "Bugatti", "Fiat", "Mini", "Alfa-Romeo", "Saab", "Suzuki", "Studebaker", "Renault", "Peugeot", "Daewoo", "Hudson", "Citroen", "MG"
    ]

    const spices = [
        "Allspice", "Angelica", "Anise", "Asafoetida", "Bay Leaf", "Basil", "Bergamot", "Black Cumin", "Black Mustard", "Black Pepper", "Borage", "Brown Mustard", "Burnet", "Caraway", "Cardamom", "Cassia", "Catnip", "Cayenne Pepper", "Celery Seed", "Chervil", "Chicory", "Chili Pepper", "Chives", "Cicely", "Cilantro", "Cinnamon", "Clove", "Coriander", "Costmary", "Cumin", "Curry", "Dill", "Fennel", "Fenugreek", "Filé", "Ginger", "Grains Of Paradise", "Holy Basil", "Horehound", "Horseradish", "Hyssop", "Lavender", "Lemon Balm", "Lemon Grass", "Lemon Verbena", "Licorice", "Lovage", "Mace", "Marjoram,Nutmeg", "Oregano", "Paprika", "Parsley", "Peppermint", "Poppy Seed", "Rosemary", "Rue", "Saffron", "Sage", "Savory", "Sesame", "Sorrel", "Star Anise", "Spearmint", "Tarragon", "Thyme", "Turmeric", "Vanilla", "Wasabi", "White Mustard"
    ]

    const periodic = [
        "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium"
    ]

    const superheroes = [
        "Batman", "Superman", "Green Lantern", "Martian Manhunter", "The Thing", "Spider", "Spider", "Captain America", "Thor", "Green Arrow", "Hawkeye", "Black Widow", "Iron Man", "Flash", "Quicksilver", "Deadpool", "Wonder Woman", "Ant", "Vision", "Cyborg", "Aquaman", "Nightwing", "Batgirl", "Red Hood", "Justice League", "The Rise of Arsenal", "Robin", "Red Robin", "Captain Atom", "The Atom", "Hawkgirl", "Hawkman", "Wolverine", "Beast", "Colossus", "Human Torch", "Invisible Woman", "Mr", "Fantastic", "Storm", "Jean Grey", "Spectre", "Dr", "Fate", "Dr", "Stephen Strange", "Firestorm", "Shazam", "Hulk", "Miss Martian", "Kid Flash", "Iron Fist", "Daredevil", "Superboy", "Plastic Man", "Red Tornado", "Aqualad", "Wonder Girl", "Blue Beetle", "Booster Gold", "She Hulk", "Batwoman", "Hawk", "Dove", "Black Canary", "Silver Surfer", "Supergirl", "Orion", "Guardian", "Black Panther", "Moon Knight", "Steel", "Captain Britain", "Vixen", "Raven", "Beast Boy", "Starfire", "Zatanna", "Huntress", "Professor X", "Rorschach", "Dr", "Manhattan", "Nite", "Nick Fury", "Gambit", "Bucky Barnes", "Giant", "Phantom Stranger", "Black Lightning", "Wasp", "Mr", "Terrific", "Animal Man", "Wildcat", "Wonder Man", "Mr", "Miracle", "Ghost Rider", "Cyclops", "Spawn", "Swamp Thing", "Saint Walker", "John Constantine", "Punisher", "Iceman", "Kitty Pryde"
    ]

    const food = [
        "Pasta", "French Fries", "Ice Cream", "Bread", "Fried Rice", "Pancakes", "Burger", "Pizza", "Pumpkin Pie", "Chicken Pot Pie", "Banana", "Apple Pie", "Bagel", "Muffins", "Alfredo Sauce", "Reece", "Peanut Cups", "Ice Cream Cake", "Cheesecake", "Cheese", "Banana Bread", "Potato Chips", "Cheetos", "Doritos", "Tacos", "Burritos", "Chimichanga", "Enchilada", "Salsa", "Marinara Sauce", "Broccoli", "Chocolate Covered Strawberries", "Kiwi", "Tomato", "Salad", "Steak", "Chicken Tenders", "Grilled Chicken", "Ribs", "Biscuits and Gravy", "Hot Dogs", "Fried Chicken", "Roasted Chicken and Garlic", "Eggs", "Bacon", "Sausage", "Mashed Potatoes", "Stuffing", "Brownies", "Cookies", "Submarine Sandwiches", "Donuts", "Turkey", "Cranberry", "Gravy", "Green Beans", "Mac and Cheese", "Soup", "Lamb Chops", "Fried Pork Chops and Gravy", "Ham", "Sushi", "Teriyaki", "Popcorn", "Shrimp", "Lasagna", "Ravioli", "Gelatin", "Pudding", "Meatballs", "Gyro Sandwhich", "Pulled Pork", "Nachos", "Onion Rings", "Chocolate Cake", "Carrot Cake", "Tater Tots", "French Toast", "Baked Potato", "Olive Garden Breadsticks", "Crepes", "Chicken Nuggets", "Croissant", "Apple Sauce", "Green Bean Casserole With Fried Onions", "Sweet Potatoes", "Potato", "Cantalope", "Apple", "Orange", "Strawberries", "Peaches", "Honeydew", "Ginger Bread", "Mango", "Raspberries", "Blueberries", "Corn", "Tamale", "Fried Zucchini Blossoms", "Calzone"
    ]

    const scientists = [
        "Isaac Newton", "Leonhard Euler", "Gottfried Von Leibniz", "Carl Friedrich Gauss", "Michael Faraday", "Euclid Of Alexandria", "Galileo Galilei", "Nikola Tesla", "Marie Sklodowska-Curie", "Albert Einstein", "Alhazen Ibn Alhaytham", "Louis Pasteur", "Johannes Kepler", "Liu Hui", "Max Planck", "Augustinlouis Cauchy", "James Clerk Maxwell", "Avicenna Of Persia", "Amedeo Avogadro", "Dmitri Mendeleev ", "Robert Koch", "Ernest Rutherford", "Nicolaus Copernicus", "Georg Bernhard Riemann", "Zhang Heng", "Blaise Pascal", "Muhammad Ibn Musa Alkhwarizmi", "Jules Henri Poincaré", "Abu Rayhan Albiruni", "Isambard Kingdom Brunel", "Claudius Galen Of Pergamon", "Josephlouis Lagrange", "Qin Jiushao", "Paul Ehrlich", "Archimedes Of Syracuse", "Nasir Aldin Altusi", "Robert Boyle", "Pierresimon Laplace", "Zhu Shijie", "Wernher Von Braun", "Henri Becquerel", "David Hilbert", "Niels Bohr", "Srinivasa Ramanujan", "Gregor Mendel", "Amelie Emmy Noether", "Antoine Lavoisier", "Brahmagupta", "Edward Jenner", "Pierre De Fermat", "Zu Chongzhi", "James Watt", "René Descartes", "John Von Neumann", "Omar Alkhayyam", "Hermann Von Helmholtz", "Robert Hooke", "George Washington Carver", "Pythagoras Of Samos", "Joseph Louis Gaylussac", "Aryabhata", "Alessandro Volta", "Christiaan Huygens", "Carl Linnaeus", "Walther Hermann Nernst", "Hippocrates Of Cos", "Charlesaugustin De Coulomb", "Girolamo Cardano", "Andrey Kolmogorov", "Hans Christian Oersted", "Andreas Vesalius", "Daniel Bernoulli", "Heinrich Hertz", "Jean Le Rond D’Alembert", "Shen Kuo", "Bhaskaracharya Of India", "John Dalton", "Andrémarie Ampère", "Enrico Fermi", "Claude Bernard", "Johann Heinrich Lambert", "James Prescott Joule", "Seki Kowa Takakazu", "Hendrik Antoon Lorentz", "Otto Hahn", "Luigi Galvani", "Jeanbaptiste Joseph Fourier", "Abukamil Ibnaslam Shuja", "Georg Simon Ohm", "William Thomson Kelvin", "John Bardeen", "Li Shizhen", "James Joseph Sylvester", "Wilhelm Conrad Roentgen", "Sergei Pavlovich Korolev", "Antonie Van Leeuwenhoek", "Jesse Ernest Wilkins Jr.", "Humphry Davy", "Lise Meitner", "Alexander Fleming"
    ]

    const planets = [
        "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Sun", "Moon"
    ]

    const games = [
        "Abes Odyssey", "Pandemonium", "Army of Two", "Call of Duty", "Modern Warfare", "Black Ops", "Far Cry", "Counterstrike", "Medal of Honor", "Frontline", "Age of Empires", "The Age of Kings", "Assassins Creed", "Sonic the Hedgehog", "Super Mario", "Crash Bandicoot", "Gears of War", "Pac Man", "Space Invaders", "Worms", "Red Dead Redemption", "The Sims", "Forza Motorsport", "Road Rash", "Tekken", "Theme Park", "Tomb Raider", "State of Emergency", "Resident Evil", "Dead Rising", "FIFA", "Grand Theft Auto", "Left 4 Dead", "Portal", "Team Fortress", "Pirates", "Saints Row", "Dead Island", "Hitman", "Spyro the Dragon", "Mortal Kombat", "Need for Speed", "Skyrim", "Tetris", "Street Fighter", "Doom", "Streets of Rage", "The Lost World", "Warriors", "Metal Gear Solid", "Rayman", "Silent Hill", "Space Jam", "Cool Spot", "Downhill Domination", "Gran Turismo", "Wipe Out", "Disc Pool", "Donkey Kong", "Battlefield", "Limbo", "Mario Kart", "Guitar Hero", "Guitar Hero", "Fighting Force", "Runescape", "Garrys Mod", "Pinball 3D"
    ]

    const shows = [
        "Friends", "The Big Bang Theory", "The Office", "How I Met Your Mother", "Modern Family", "New Girl", "The Middle", "Jane the Virgin", "Jane by Design", "Criminal Minds", "Arrow", "Breaking Bad", "Game of Thrones", "The Flash", "Supergirl", "Once", "Pretty Little Liars", "Desperate Housewives", "13 Reasons Why", "American Crime Story", "Silicon Valley", "The 100", "Blacklist", "Castle", "Unbreakable Kimmy Schmidt", "Sherlock", "Bones", "House", "Rizzoli", "Isles", "Stranger Things", "Westworld", "Awkward", "Drop Dead Diva", "Eye Candy", "Missing", "Ghost Whisperer", "Hart of Dixie", "Perception", "Reign", "The Royals", "Sex and the City", "The Vampire Diaries", "Twisted", "Orange Is the New Black", "Younger", "11", "The Walking Dead", "Supernatural", "House of Cards", "Hannibal", "True Blood", "Teen Wolf", "Scream Queens", "Mr", "Robot", "Glee", "Elementary", "Lie to Me", "Revenge", "The Simpsons", "Family Guy", "American Dad", "The Cleveland Show", "Bob", "Burgers", "South Park", "2 Broke Girls"
    ]

    const movies = [
        "The Godfather", "Citizen Kane", "Casablanca", "Psycho", "Raging Bull", "Taxi Driver", "Cinema Paradiso", "Sunset Boulevard", "A Streetcar Named Desire", "On the Waterfront", "The Shining", "Amadeus", "Seven Samurai", "City of God", "The Apartment", "All the President's Men", "Scarface", "Blue Velvet", "Pulp Fiction", "Leon: The Professional", "Lost Highway", "Forrest Gump", "The Usual Suspects", "Fight Club", "Run Lola Run", "Snatch", "Europa", "Amores Perros", "Mulholland Drive", "The Lord of the Rings", "Sin City", "Pan's Labyrinth", "The Science of Sleep", "Star Wars", "The Empire Strikes Back", "Heat", "Before Sunrise", "Before Sunset", "Elephant", "Match Point", "Volver", "The Insider", "Children of Men", "The Third Man", "One Flew Over the Cuckoo's Nest", "Rosemary's Baby", "The White Ribbon", "Gandhi", "WALL-E", "Butch Cassidy and the Sundance Kid", "Scent of a Woman", "The Wind That Shakes the Barley", "Gone With the Wind", "The Graduate", "Close Encounters of the Third Kind", "The Great Escape", "Scarecrow", "The Exterminating Angel", "The 400 Blows", "Persona", "Phantom of Liberty", "The Double Life of Veronique", "Mamma Roma", "Dog Day Afternoon", "Double Indemnity", "East of Eden", "Hiroshima Mon Amour", "Fugitive Pieces", "The Mission", "Gosford Park", "Serpico", "Platoon", "The Return", "Bicycle Thieves", "Hour of the Wolf", "Ikiru", "Blade Runner", "Carlito's Way", "Glengarry Glen Ross", "My Fair Lady", "Perfume: The Story of a Murderer", "Insomnia", "Full Metal Jacket", "Natural Born Killers", "The Deer Hunter", "Ray", "Babel", "Rear Window", "The Painted Veil", "Love and Death", "Being There", "Bonnie and Clyde", "The Prestige", "The Shawshank Redemption", "Requiem for a Dream", "Lucky Number Slevin", "Chinatown", "Brazil", "L'avventura", "WINGS OF DESIRE", "The Piano", "Three Colors: Red", "Three Colors: Blue", "Three Colors: White", "The Last Emperor", "The Motorcycle Diaries", "The Lives of Others", "Gangs of New York", "Being John Malkovich", "Saving Private Ryan", "American History X", "Memoirs of a Geisha", "Hero", "Stranger Than Fiction", "Blood Diamond", "Shakespeare in Love", "Little Miss Sunshine", "The Sea Inside", "The Blair Witch Project", "Bitter Moon", "Ocean's Eleven", "2001: A Space Odyssey", "Midnight Cowboy", "L.A. Confidential", "Short Cuts", "Fargo", "The Game", "The Seventh Seal", "La Dolce Vita", "The Big Lebowski", "Wild at Heart", "The Pianist", "Kafka", "Belle De Jour", "American Beauty", "Eyes Wide Shut", "The King of Comedy", "SOME LIKE IT HOT", "Once Upon a Time in America", "Dead Man", "Dead Man Walking", "Underground", "Lolita", "Inglourious Basterds", "Braveheart", "Strangers on a Train", "Apocalypto", "Easy Rider", "The Apartment", "Solaris", "Straw Dogs", "The Decameron", "Wild Strawberries", "A Separation", "A History of Violence", "High Noon", "Broken Flowers", "Annie Hall", "Schindler's List", "The Hustler", "The Searchers", "Walk the Line", "Goya's Ghosts", "Ghostbusters", "Throne of Blood", "Ed Wood", "The Princess and the Warrior", "Million Dollar Baby", "Gladiator", "Crash", "Talk to Her", "Saw", "Memento", "Halloween", "North by Northwest", "12 Angry Men", "Sweeney Todd: The Demon Barber of Fleet Street", "Magnolia", "Le Samurai", "Ben-Hur", "American Gangster", "Raiders of the Lost Ark", "Indiana Jones and the Temple of Doom", "Indiana Jones and the Last Crusade", "Tootsie", "Scream", "The Breakfast Club", "Youth Without Youth", "The Lion King", "True Romance", "La Strada", "Night Watch", "Day Watch", "21 Grams", "Last Tango in Paris", "Lord of War", "The Ring", "Cloverfield", "Breakfast at Tiffany's", "Renaissance", "36th Precinct", "Rope", "Basic Instinct", "Adaptation", "The Jacket", "Legends of the Fall", "Lethal Weapon", "Persepolis", "The Dreamers", "Mystic River", "Mission: Impossible", "Dracula", "The Sixth Sense", "Modern Times", "The Italian Job", "Ghost Dog: The Way of the Samurai", "It Happened One Night", "Dead Poets Society", "Once Upon a Time in the West", "Lawrence of Arabia", "A Clockwork Orange", "City Lights", "Into the Wild", "Toy Story", "The Kid", "Mary and Max", "Sherlock Jr", "There Will Be Blood", "Pi", "Tokyo Story", "Apocalypse Now", "Dirty Harry", "The Wild Bunch", "The Manchurian Candidate", "Spirited Away", "Breathless", "Dark City", "Inception", "Oldboy", "Donnie Darko", "Metropolis", "Memories of Murder", "The Fall", "Detachment", "Goodfellas", "Mad Max", "Moon", "No Country for Old Men", "Open Your Eyes", "In the Name of the Father", "A Canterbury Tale", "Network", "The Tree of Life", "To Kill a Mockingbird", "The Purple Rose of Cairo", "K-PAX", "Trilogy: The Weeping Meadow", "The Devil's Advocate", "Red Cliff", "Red Cliff II", "Life Is Beautiful", "E.T. the Extra-Terrestrial", "Alien"
    ]

    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cape Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Democratic Republic of the Congo", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Phillipines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Republic of the Congo", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "USA", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ]

    const [name, setName] = useState("...")
    const [firstRow, setFirstRow] = useState([])
    const [secondRow, setSecondRow] = useState([])
    const [thirdRow, setThirdRow] = useState([])
    const scramblerRef = useRef(new Scrambler());

    const [rows, setRows] = useState(
        [<div key={1} className="col-6 col-md-3">
            <button onClick={() => { generate(sweets); }} className="gen-btn btn btn-warning w-100" style={{ "display": "none" }}><GiWrappedSweet size={50} /><br /><b>SWEETS</b></button>
        </div>,
        <div key={2} className="col-6 col-md-3">
            <button onClick={() => { generate(cars); }} className="gen-btn btn btn-warning w-100" style={{ "display": "none" }}><AiFillCar size={50} /><br /><b>CARS</b></button>
        </div>,
        <div key={3} className="col-6 col-md-3">
            <button onClick={() => { generate(spices); }} className="gen-btn btn btn-warning w-100" style={{ "display": "none" }}><GiHotSpices size={50} /><br /><b>SPICES</b></button>
        </div>,
        <div key={4} className="col-6 col-md-3">
            <button onClick={() => { generate(periodic); }} className="gen-btn btn btn-warning w-100" style={{ "display": "none" }}><FaAtom size={50} /><br /><b>PERIODIC</b></button>
        </div>,
        <div key={5} className="col-6 col-md-3">
            <button onClick={() => { generate(animals); }} className="gen-btn btn btn-warning w-100" style={{ "display": "none" }}><GiSittingDog size={50} /><br /><b>ANIMALS</b></button>
        </div>,
        <div key={6} className="col-6 col-md-3">
            <button onClick={() => { generate(superheroes); }} className="gen-btn btn btn-warning w-100" style={{ "display": "none" }}><FaSuperpowers size={50} /><br /><b>SUPERHEROES</b></button>
        </div>,
        <div key={7} className="col-6 col-md-3">
            <button onClick={() => { generate(food); }} className="gen-btn btn btn-warning w-100" style={{ "display": "none" }}><FaPizzaSlice size={50} /><br /><b>FOOD</b></button>
        </div>,
        <div key={8} className="col-6 col-md-3">
            <button onClick={() => { generate(scientists); }} className="gen-btn btn btn-warning w-100" style={{ "display": "none" }}><MdScience size={50} /><br /><b>SCIENTISTS</b></button>
        </div>,
        <div key={9} className="col-6 col-md-3">
            <button onClick={() => { generate(planets); }} className="gen-btn btn btn-warning w-100" style={{ "display": "none" }}><BiPlanet size={50} /><br /><b>ASTRONOMY</b></button>
        </div>,
        <div key={10} className="col-6 col-md-3">
            <button onClick={() => { generate(games); }} className="gen-btn btn btn-warning w-100" style={{ "display": "none" }}><GiGamepad size={50} /><br /><b>GAMES</b></button>
        </div>,
        <div key={11} className="col-6 col-md-3">
            <button onClick={() => { generate(shows); }} className="gen-btn btn btn-warning w-100" style={{ "display": "none" }}><BiMoviePlay size={50} /><br /><b>TV SHOWS</b></button>
        </div>,
        <div key={12} className="col-6 col-md-3">
            <button onClick={() => { generate(movies); }} className="gen-btn btn btn-warning w-100" style={{ "display": "none" }}><BiCameraMovie size={50} /><br /><b>MOVIES</b></button>
        </div>
        ]
    )

    var isArray = Array.isArray || function (value) {
        return {}.toString.call(value) !== "[object Array]"
    };

    function shuffle() {
        var arrLength = 0;
        var argsLength = arguments.length;
        var rnd, tmp;

        for (var index = 0; index < argsLength; index += 1) {
            if (!isArray(arguments[index])) {
                throw new TypeError("Argument is not an array.");
            }

            if (index === 0) {
                arrLength = arguments[0].length;
            }

            if (arrLength !== arguments[index].length) {
                throw new RangeError("Array lengths do not match.");
            }
        }

        while (arrLength) {
            rnd = Math.floor(Math.random() * arrLength);
            arrLength -= 1;
            for (var argsIndex = 0; argsIndex < argsLength; argsIndex += 1) {
                tmp = arguments[argsIndex][arrLength];
                arguments[argsIndex][arrLength] = arguments[argsIndex][rnd];
                arguments[argsIndex][rnd] = tmp;
            }
        }
    }

    function addToRow(i) {
        if (firstRow.length <= 3) {
            firstRow.push(rows[i]);
        } else if (secondRow.length <= 3) {
            secondRow.push(rows[i]);
        } else if (thirdRow.length <= 3) {
            thirdRow.push(rows[i]);
        }
    }

    shuffle(rows);
    for (var i = 0; i < rows.length; i++) {
        addToRow(i);
    }

    function show(j) {
        var els = document.getElementsByClassName("gen-btn");
        for (var i = 0; i < els.length; i++) {
            if (i === j) {
                els[i].style.display = '';
                return;
            }
        }
    }

    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    useEffect(() => {
        for (var i = 0; i < nums.length; i++) {
            setTimeout(show, i * 100, nums[i])
        }
    }, [])

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function countWords(str) {
        return str.trim().split(/\s+/).length;
    }

    function generate(currentDic) {

        var dict = null;

        var num = randomIntFromInterval(1, 10);
        if (num <= 7) {
            num = 2;
        } else {
            num = 3;
        }

        if (num === 2) {
            var num2 = randomIntFromInterval(0, 1);
            if (num2 === 0) {
                dict = [colors, currentDic];
            } else {
                dict = [adjectives, currentDic];
            }
        } else {
            dict = [adjectives, colors, currentDic];
        }
        const customConfig = {
            dictionaries: dict,
            separator: ' ',
            style: 'capital',
            length: num
        };

        var name = uniqueNamesGenerator(customConfig);
        name = name.trim();

        if (countWords(name) > 4) {
            generate(currentDic);
        } else {
            scramblerRef.current.scramble(name, setName);
        }

    }

    return (
        <div className="container">
            <HeadNav title={"SPRINT NAME GENERATOR"} />
            <br />
            <br />
            <div className="col-12 text-center">
                <h2 className="text-white"><b>{name}</b></h2>
            </div>
            <br /><br />
            <div className="row justify-content-center">
                {firstRow}
            </div>
            <div className="row justify-content-center">
                {secondRow}
            </div>
            <div className="row justify-content-center">
                {thirdRow}
            </div>
            <br />
        </div>
    )
}

export default Sprint