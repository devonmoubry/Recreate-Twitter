export default function ( store ) {
  console.log('This is a tweet view');


  //edit and delete dropdown conditional upon ownership
  var $twitterFeed = $('<ul class=""><ul>');
  var tweets = store.getState().tweets;

  tweets.forEach( function( tweet, index, array ) {
    var $tweetView = $(`
      <li class="tweet-view">
        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
        <p class="username">${tweet.user.name}</p>
        <p class="tweet-text">${tweet.tweet}</p>
        <p class="timestamp">${tweet.created}</p>
      </li>
      `);

      if (tweet.user.name === 'frank medrano') {
            $tweetView.append($(`
              <section class="edit-delete" id="edit-delete">
                <p>Edit</p>
                <p>Delete</p>
              </section>`));
        }

        $twitterFeed.append($tweetView);
  });
  return $twitterFeed;
}
