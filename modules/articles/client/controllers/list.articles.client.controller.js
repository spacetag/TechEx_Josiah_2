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

    vm.save = function() {
      console.log("Hey!");
    }
    vm.notedata = [
      {label: 'Hey yo', children: ['This', 'Testing', '45']}
    ]
  }
})();
