(function () {
  'use strict';

  angular
    .module('articles')
    .controller('ArticlesListController', ArticlesListController);

  ArticlesListController.$inject = ['ArticlesService'];

  function ArticlesListController(ArticlesService) {
    var vm = this;
    vm.currentNote = {}

    vm.articles = ArticlesService.query();

    vm.load = function(toLoad) {
      vm.currentNote = toLoad;
    }

    vm.create = function() {
      var theNewArticle = new ArticlesService();
      // http://www.w3schools.com/jsref/jsref_unshift.asp
      // http://stackoverflow.com/questions/8159524/javascript-pushing-element-at-the-beginning-of-an-array
      vm.articles.unshift(theNewArticle)
      console.log("Creating new...");
      theNewArticle.title = "New note"
      console.log(theNewArticle);
      theNewArticle.$save(function() {
        console.log("success")
      }, function() {
        console.log("error")
      });
    }

    vm.save = function() {
      console.log("Updating...");
      vm.currentNote.$update(function() {
        console.log("success")
      }, function() {
        console.log("error")
      });
    }

    vm.delete = function(toDelete) {
      console.log("Deleting...");
      console.log(toDelete);
      for(var i=0; i < vm.articles.length; i++) {
        if(vm.articles[i]._id == toDelete._id) {
          // http://stackoverflow.com/questions/10024866/remove-object-from-array-using-javascript
          vm.articles.splice(i,1);
        }
      }
      toDelete.$remove()
    }

    vm.notedata = [
      {label: 'Hey yo', children: ['This', 'Testing', '45']}
    ]
  }
})();
