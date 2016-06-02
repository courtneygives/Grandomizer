var namerator = require('./names.js');

var groupmaker = {
  cohort: ["Tuttle", "Chris R", "Jessica", "Jennifer", "Taylor", "Erika", "Sasha", "Amy", "Cari", "Oliver", "Travis", "Courtney", "Russ", "Libby", "Lisa", "Max", "Kyle", "Suzanna", "Peter"],

  randomIndex: function(arrayLength){
    return Math.floor(Math.random() * arrayLength);
  },

  shuffleArray: function(array){
    arrayCopy = array.slice(0);
    for (c = 0; c < arrayCopy.length; c++){
      var originalIndex = c;
      var swapIndex = this.randomIndex(arrayCopy.length);

      var original = arrayCopy[originalIndex];
      var swapped = arrayCopy[swapIndex];

      arrayCopy[swapIndex] = original;
      arrayCopy[originalIndex] = swapped;
    }
    return arrayCopy;
  },

  makeGroups: function(members, desiredGroups, desiredMembers){
    var numGroups = 0;
    var finalGroups = {};  // key is the groupName, value is members
    if (desiredGroups !== 0){
      numGroups = desiredGroups;
    } else {
      numGroups = Math.round(members.length / desiredMembers);
    }
    for (var i = 0; i < numGroups; i++){
      var groupName = namerator.getPlural();
      finalGroups[groupName] = [];
    }
    var shuffledMembers = this.shuffleArray(members);
    var groupI = 0;
    while (shuffledMembers.length > 0) {
      var currentGroupName = Object.keys(finalGroups)[groupI];
      finalGroups[currentGroupName].push(shuffledMembers.pop());
      groupI++;
      if (groupI == numGroups) {
        groupI = 0;
      }
    }
    return finalGroups;
  }
};

console.log('Random group name: The ' + namerator.getPlural());

module.exports = groupmaker;
