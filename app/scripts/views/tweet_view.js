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

      if (tweet.user.name === store.getState().name) {
            $tweetView.append($(`
              <section class="edit-delete" id="edit-delete">
                <button id="edit">Edit</button>
                <button id="delete">Delete</button>
              </section>`));
        }

        $twitterFeed.append($tweetView);
  });
  return $twitterFeed;
}
