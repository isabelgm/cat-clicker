'use strict';

// Model
  var model = {
    currentCat: null,
    cats:[
      {
        name: "Kitty Eyes",
        clickCount: 0,
        image: "images/cat1.jpg"
      },
      {
        name: "Blue-Eyed Cat",
        clickCount: 0,
        image: "images/cat2.jpg"
      },
      {
        name: "Snuggle Buddies",
        clickCount: 0,
        image: "images/cat3.jpg"
      },
      {
        name: "Siesta Time",
        clickCount: 0,
        image: "images/cat4.jpg"
      },
      {
        name: "Park Friends",
        clickCount: 0,
        image: "images/cat5.jpg"
      }
    ]
  }

// Octopus
  var octopus = {
    init: function(){
      //get cat data from Model
      model.currentCat = model.cats[0];

      //initiate views
      viewList.init();
      viewDisplay.init();
    },

    getCats: function(){
      return model.cats;
    },

    setCurrentCat: function(cat){
      model.currentCat = cat;
    },

    getCurrentCat: function(){
      return model.currentCat;
    },

    increaseCounter: function(cat){
      model.currentCat.clickCount++;
      viewDisplay.render();
    }
  };

//Views

// view for cat list
var viewList = {
  init: function(){
    this.catList = document.getElementById('cat-list');
    this.render();
  },

  render: function(){
    // Store all the cats in a variable we can use
    // Go through octopus to get cat data from model
    var cats = octopus.getCats();

    // empty cat list element
    this.catList.innerHTML = '';

    // loop over cats
    for(var i = 0; i < cats.length; i++){
      var cat = cats[i];

      // create cat list item with clickable class and cat Name
      var li = document.createElement('li');
      li.className += "clickable";
      li.textContent = cat.name;

      // set event listener so you can render view display when it's clicked
      li.addEventListener('click', (function(catCopy){
        return function(){
          octopus.setCurrentCat(catCopy);
          viewDisplay.render();
        };
      })(cat));

      // append the li element to the cat-list
      this.catList.appendChild(li);
    }
  }
};

// view for cat display area
  var viewDisplay = {
    init: function(){
      this.catName = document.getElementById('cat-name');
      this.catImage = document.getElementById('cat-img');
      this.counter = document.getElementById('counter');

      //set event listener for click on cat image
      this.catImage.addEventListener('click', function(){
        octopus.increaseCounter();
      });

      this.render();
    },

    render: function(){
      //update cat info for current cat
      var currentCat = octopus.getCurrentCat();
      this.counter.textContent = "Clicks: " + currentCat.clickCount;
      this.catName.textContent = currentCat.name;
      this.catImage.src = currentCat.image;
    }
  };


  octopus.init();
