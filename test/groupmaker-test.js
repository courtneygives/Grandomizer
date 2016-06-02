var expect = require('chai').expect;
var groupmaker = require('../modules/groupmaker.js');

var cohort = ["Tuttle", "Chris R", "Jessica", "Jennifer", "Taylor", "Erika", "Sasha", "Amy", "Cari", "Oliver", "Travis", "Courtney", "Russ", "Libby", "Lisa", "Max", "Kyle", "Suzanna", "Peter"];

describe('groupmaker', function(){
  describe('randomIndex', function(){
    it('should return a value less than or equal to the last index', function() {
      expect(groupmaker.randomIndex(10)).to.be.at.most(9);
    });
    it('should return a value greater than or equal to 0', function() {
      expect(groupmaker.randomIndex(1)).to.be.eq(0);
    });
  });


  describe('shuffleArray', function(){
    it('should return a different array than it is passed', function(){
      expect(groupmaker.shuffleArray(cohort)).not.to.eq(cohort);
    });
    it('should return an array of the same length', function(){
      expect(groupmaker.shuffleArray(cohort).length).to.eq(cohort.length);
    });

    it('result contains the same elements as the original array');
  });


  describe('makeGroups', function(){
    it('should return a map(object) with number of keys equal to the desired group number', function(){
      expect(Object.keys(groupmaker.makeGroups(cohort, 4, 0)).length).to.eq(4);
    });

    it('should calculate the number of groups based on the cohort size and user criteria', function(){
      expect(Object.keys(groupmaker.makeGroups(cohort, 0, 5)).length).to.eq(4);
    });

    it('should give each group a unique name', function(){
      var groops = groupmaker.makeGroups(cohort, 4, 0);
      var nameSet = new Set(Object.keys(groops));
      expect(nameSet.length).to.eq(groops.length);
    });

    it('should return groups of members roughly equal in size', function() {
        var groops = groupmaker.makeGroups(cohort, 4, 0);
        for(var groop in groops) {
          expect(groops[groop]).to.have.length.within(4,5);
        }
    });

    it('should produce different groups each time the function is called', function() {
      var groops1 = groupmaker.makeGroups(cohort, 4, 0);
      var groops2 = groupmaker.makeGroups(cohort, 4, 0);
      expect(groops1).not.to.deep.equal(groops2);
    });
  });
});


// finalGroups[groupname] = [array of members]
