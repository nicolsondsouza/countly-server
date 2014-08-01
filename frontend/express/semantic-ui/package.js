Package.describe({
  summary: "Semantic UI packaged for meteor"
});

Package.on_use(function (api) {
    api.use('jquery','client');
    api.add_files('lib/semantic-ui/build/uncompressed/css/semantic.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/collections/breadcrumb.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/collections/form.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/collections/grid.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/collections/menu.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/collections/message.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/collections/table.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/elements/basic.icon.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/elements/button.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/elements/divider.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/elements/header.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/elements/icon.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/elements/image.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/elements/input.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/elements/label.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/elements/loader.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/elements/progress.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/elements/reveal.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/elements/segment.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/elements/step.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/fonts/basic.icons.eot', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/fonts/basic.icons.svg', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/fonts/basic.icons.ttf', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/fonts/basic.icons.woff', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/fonts/icons.eot', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/fonts/icons.otf', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/fonts/icons.svg', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/fonts/icons.ttf', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/fonts/icons.woff', 'client');
    // api.add_files('lib/semantic-ui/build/uncompressed/images/loader-large-inverted.gif', 'client');
    // api.add_files('lib/semantic-ui/build/uncompressed/images/loader-large.gif', 'client');
    // api.add_files('lib/semantic-ui/build/uncompressed/images/loader-medium-inverted.gif', 'client');
    // api.add_files('lib/semantic-ui/build/uncompressed/images/loader-medium.gif', 'client');
    // api.add_files('lib/semantic-ui/build/uncompressed/images/loader-medium.gif', 'client');
    // api.add_files('lib/semantic-ui/build/uncompressed/images/loader-mini-inverted.gif', 'client');
    // api.add_files('lib/semantic-ui/build/uncompressed/images/loader-mini.gif', 'client');
    // api.add_files('lib/semantic-ui/build/uncompressed/images/loader-mini.gif', 'client');
    // api.add_files('lib/semantic-ui/build/uncompressed/images/loader-small-inverted.gif', 'client');
    // api.add_files('lib/semantic-ui/build/uncompressed/images/loader-small.gif', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/accordion.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/accordion.js', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/behavior/api.js', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/behavior/colorize.js', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/behavior/form.js', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/behavior/state.js', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/chatroom.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/chatroom.js', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/checkbox.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/checkbox.js', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/dimmer.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/dimmer.js', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/dropdown.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/dropdown.js', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/modal.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/modal.js', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/nag.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/nag.js', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/popup.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/popup.js', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/rating.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/rating.js', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/search.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/search.js', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/shape.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/shape.js', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/sidebar.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/sidebar.js', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/tab.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/tab.js', 'client');
    // api.add_files('lib/semantic-ui/build/uncompressed/modules/transition.css', 'client');
    // api.add_files('lib/semantic-ui/build/uncompressed/modules/transition.js', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/video.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/modules/video.js', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/views/comment.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/views/feed.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/views/item.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/views/list.css', 'client');
    api.add_files('lib/semantic-ui/build/uncompressed/views/statistic.css', 'client');

});