export default function ( store ) {
  console.log('This is a tweet view');


  //edit and delete dropdown conditional upon ownership
  var $twitterFeed = $('<ul class=""><ul>');
  var tweets = store.getState().tweets;
  tweets.forEach( function( tweet, index, array ) {
    var $tweetView = $(`
      <li class="tweet-view">
        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
        <a href="#" class="username">${tweet.user.name}</a>
        <p class="tweet-text">${tweet.tweet}</p>
        <p class="timestamp">${tweet.created}</p>
      </li>
      `);

      if (tweet.user.name === store.getState().name) {
            $tweetView.append($(`
              <section class="edit-delete">
                <button>Edit</button>
                <button>Delete</button>
                <form>
                  <input type="text"></input>
                  <input type="hidden" value="${tweet.objectId}"></input>
                  <button type="submit">SAVE</button>
                </form>
              </section>`));
        }

        $twitterFeed.append($tweetView);
  });

  $twitterFeed.find('.edit-delete form').on('submit', (event) => {
    event.preventDefault();
    var tweet = event.target.elements[0].value
    var objectId = event.target.elements[1].value
    store.dispatch({ type: "EDIT_TWEET", tweet: tweet, objectId: objectId });
  });

  $twitterFeed.find('.username').click (event => {
    event.preventDefault()
    console.log('profile clicker');
    var name = event.target.outerText;
    store.dispatch({ type: "CURRENT_PROFILE_TWEETS", name: name });
  });

  return $twitterFeed;
}
