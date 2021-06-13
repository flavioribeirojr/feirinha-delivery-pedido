const ghpages = require('gh-pages');

ghpages.publish('out', function (err) {
  if (err) {
    console.error(err);
    return;
  }

  console.log('The public folder has been pushed to gh-pages');
});