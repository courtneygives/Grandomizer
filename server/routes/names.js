
 exports.namerator = {

  adjectives: ['Funky', 'Raging', 'Surly', 'Purple', 'Laminated', 'Jolly', 'Peachy', 'Gelatinous', 'Possibly Illegal', 'Hydrophobic', 'Powdery', 'Theoretical', 'Dreamy', 'Ballroom', 'Brand-Name', 'Bespectacled', 'Paleolithic', 'Jurrasic', 'Metaphorical', 'Space', 'Alpha', 'Beta', 'Online Only', 'Rogue', 'Minimalist', 'Pseudo', 'SuperZen', 'Future Proof', 'Definitely Trustworthy', 'Overpaid', 'Craft', 'Micro', 'Macro', 'Righteous', 'Iced', 'Legacy', 'Designer', 'Super Fast', 'Rambunctious', 'Cringey', 'Chrome', 'Mandibular', 'Legit', 'Likeable', 'Newsworthy', 'Solid-State', 'Soft-Spoken', 'Functional', 'SciFi', 'New-And-Improved', 'Unix-Based', 'Puppy', 'Object-Oriented', 'Extra-Strength', 'Banana', 'Truthy', 'Robot', 'Tangential', 'Cutesy', 'Shakespearian', 'Apache', 'Prairie', 'Caffeinated', 'Helicopter', 'Pixelated', 'Stereo', 'Envoked', '7.1 Surround', 'Organic', 'Compact', 'Concatenated', 'Jazz', 'High-End', 'Ultra-Light', 'Parenthetical', 'Night-Mode', 'Paper Machet', 'Turing-Complete', 'Aerospace', 'Modular', 'Fancy', 'Gluten-Free', 'Fashionable', 'Galactic', 'Indie', 'Instant', 'Incumbent', 'Slick', 'Mechanical', 'Default', 'Angular', 'Official', 'Mac-Compatible', 'Kitty', 'Fictional', 'Hyper', 'Hyperbolic', 'Fairytale'],

  singNouns: ['Component', 'Database', 'Establishment', 'ProcessingPower', 'Enthusiast', 'Array', 'Developer', 'Techie', 'Runtime', 'Wonder', 'Iterator', 'Explorer', 'Directory', 'Commit', 'Firefly', 'DataStructure', 'Mogul', 'Abstraction', 'Executable', 'Pixel', 'Node', 'Emoticon', 'Department', 'Robot', 'Enigma', 'Authority', 'Englightenment', 'Magic', 'ListItem', 'Unit', 'Debugger', 'SuperUser', 'URL', 'Jargon', 'Giant', 'Function', '"String"', 'Superstar',  'Cohort', 'SingerSongwriter', 'Prototype', 'Variable', 'Atom', 'Mastermind', 'Repository', 'Processor', 'Electron', 'PizzaLover', 'TwitterUser', 'SoAndSo', 'Magician', 'Contrarian', 'Curmudgeon', 'Singularity', 'Module', 'Acronym', 'Cult', 'Committee', 'Data', 'Contingent', 'ZooKeeper', 'Minimalist', 'SuperFan', 'Syntax', 'Technology', 'CPU',  'GameChanger', 'Visionary', 'Pragmatist', 'SearchResult', 'Tangent', 'Particle', 'Substance', 'Element', 'BananaSandwich', 'BreakfastClub', 'Regime', 'Pterodactyl', 'Ponies', 'Narwhal', 'Tauntaun', 'Entity', 'Cubes', 'Foodie', 'Hipster', 'Integer', 'Empire', 'Alliance', 'Party', 'Cylinder', 'Thespian', 'Method', 'Grammarian', 'Stack', 'FederationOfPlanets', 'Hero', 'Technician', 'SeismicEvent', 'Object', 'GrassyKnoll', 'HotDish', 'Galaxy', 'Organsim', 'LifeForm', 'HodgePodge', 'Ninja', 'Ewok', 'TimeTraveler', 'Astronaut'],

  pluralNouns: ['Establishment', 'Database', 'Components', 'Enthusiasts', 'Array', 'Wonder', 'Iterators', 'Moguls', 'Abstractions', 'Executables', 'Pixels', 'Nodes', 'Emogi', 'Department', 'Robots', 'Enigma', 'Authority', 'Englightenment', 'Magic', 'Magicians', 'Wizards', 'List Items', 'Debuggers', 'Unit', 'Super Users', 'URLs', 'Jargon', 'Giants', 'Function Expressions', '"Strings"', 'Superstars', 'Cohort', 'Singer-Songwriters', 'Prototypes', 'Variables', 'Atoms', 'Masterminds', 'Repositories', 'Processors', 'Electrons', 'Pizza Lovers', 'Tweets', 'So-And-Sos', 'Contrarians', 'Curmudgeons', 'Singularities', 'Modules', 'Acronyms', 'Cult', 'Committee', 'Data', 'Contingent', 'Zoo Keepers', 'Minimalists', 'Super Fans', 'Syntax', 'Technology', 'CPUs',  'Game-Changers', 'Visionaries', 'Pragmatists', 'Search Results', 'Tangents', 'Particles', 'Substances', 'Elements', 'Banana Sandwiches', 'Breakfast Club', 'Regime', 'Pterodactyls', 'Ponies', 'Narwhals', 'Tauntauns', 'Entity', 'Cubes', 'Foodies', 'Hipsters', 'Integers', 'Empire', 'Alliance', 'Party', 'Cylinders', 'Thespians', 'Methods', 'Grammarians', 'Stack', 'Federation Of Planets', 'Heroes', 'Technicians', 'Seismic Event', 'Objects', 'Grassy Knolls', 'Hot Dishes', 'Galaxies', 'Organsims', 'Life Forms', 'Hodge Podge', 'Ninjas', 'Ewoks', 'Time-Travelers', 'Astronauts' ],
  // ::: good for twitter handles or titles ::: //
  getSingular: function(){
    var firstIndex = Math.floor(Math.random() * this.adjectives.length);
    var secondIndex = Math.floor(Math.random() * this.singNouns.length);
    return this.adjectives[firstIndex] + ' ' + this.singNouns[secondIndex];
  },

  // ::: good for group or team names ::: //
  getPlural: function(){
    var firstIndex = Math.floor(Math.random() * this.adjectives.length);
    var secondIndex = Math.floor(Math.random() * this.pluralNouns.length);
    return this.adjectives[firstIndex] + ' ' + this.pluralNouns[secondIndex];
  }
};

exports.namerator.getPlural();
exports.namerator.getSingular();
