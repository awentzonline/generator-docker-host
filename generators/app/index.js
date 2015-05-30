var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.NamedBase.extend({
    some: function () {
        this.directory('.');
    }
});
