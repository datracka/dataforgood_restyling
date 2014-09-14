var filteredModules = function (group) {
    // return the modules whose positions start with group
    return _.filter(postModules, function (module) {
        return module.position.indexOf(group) == 0;
        console.log(module.position.indexOf(group));
    });
}

var post = {};

Template[getTemplate('post_item')].created = function () {
    post = this.data;
};

Template[getTemplate('post_item')].helpers({
    leftPostModules: function () {
        return filteredModules('left');
    },
    centerPostModules: function () {
        return filteredModules('center');
    },
    rightPostModules: function () {
        return filteredModules('right');
    },
    getTemplate: function () {
        return getTemplate(this.template);
    },
//mobile modules - easy return array with needed information.
    postUpVoteModule: function () {
        return [
            {
                route: 'posts_upvote_mobile',
            }
        ];
    },
    postContentModule: function () {
        return [
            {
                route: 'posts_content_mobile',
            }
        ];
    },
    postMoreModule: function () {
        return [
            {
                route: 'posts_more_mobile',
            }
        ];
    },
    moduleContext: function () { // not used for now
        var module = this;
        module.templateClass = camelToDash(this.template) + ' ' + this.position + ' cell';
        module.post = post;
        return module;
    },
    moduleClass: function () {
        return camelToDash(this.template) + ' ' + this.position + ' cell';
    }
});
