if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Fixture: Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Fixture: Meteor',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'Fixture: The Meteor Book',
    url: 'http://themeteorbook.com'
  });
}