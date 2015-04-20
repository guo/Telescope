Package.describe({summary: "Telescope tags package"});

Package.onUse(function (api) {

  api.use([
    'telescope:telescope-lib',
    'telescope-base',
    'telescope:telescope-posts',
    'aldeed:simple-schema',
    'aldeed:autoform',
    'tap:i18n',
    'fourseven:scss',
    'matb33:collection-hooks'
  ], ['client', 'server']);

  api.use([
    'jquery',
    'underscore',
    'iron:router',
    'templating'
  ], 'client');

  api.addFiles([
    'lib/categories.js',
    'lib/custom_fields.js',
    'lib/hooks.js',
    'package-tap.i18n'
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/routes.js',
    'lib/client/scss/categories.scss',
    'lib/client/templates/categories.html',
    'lib/client/templates/categories.js',
    'lib/client/templates/category_item.html',
    'lib/client/templates/category_item.js',
    'lib/client/templates/category_title.html',
    'lib/client/templates/category_title.js',
    'lib/client/templates/categories_menu.html',
    'lib/client/templates/categories_menu.js',
    'lib/client/templates/post_categories.html',
    'lib/client/templates/post_categories.js'
    ], ['client']);

  api.addFiles([
    'lib/server/publications.js',
    'lib/server/hooks.js',
  ], ['server']);

  api.addFiles([
    "i18n/bg.i18n.json",
    "i18n/de.i18n.json",
    "i18n/en.i18n.json",
    "i18n/es.i18n.json",
    "i18n/fr.i18n.json",
    "i18n/it.i18n.json",
    "i18n/zh-CN.i18n.json",
  ], ["client", "server"]);

  api.export([
    'Categories',
    'getPostCategories'
  ]);
});
