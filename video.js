$(function() {
  // console.log('document ready');

  var iframe = $('#vimeoplayer')[0];
  // console.log('iframe', iframe);
  
  var player = $f(iframe);
  // console.log('player', player);
  
  var status = $('.status');
  // console.log('status', status);
  
  var notes = $('.notes');
  
  // When the player is ready, add listeners for pause, finish, and playProgress
  player.addEvent('ready', function() {
    status.text('ready');
  
    player.addEvent('pause', onPause);
    player.addEvent('finish', onFinish);
    player.addEvent('playProgress', onPlayProgress);
  });
  
  // Call the API when a button is pressed
  $('button').bind('click', function() {
    player.api($(this).text().toLowerCase());
  });
  
  function onPause(id) {
    status.text('paused');
  }
  
  function onFinish(id) {
    status.text('finished');
    notes.text('Congratulations. You made it to the end!');
  }
  
  function onPlayProgress(data, id) {
    status.text(data.seconds + 's played');
    if (data.seconds >= 2 && data.seconds <= 5) {
      notes.text('Notes relevant to the video between seconds 2 and 5.');
    } else if (data.seconds >= 10 && data.seconds <= 15) {
      notes.text('Notes relevant to the video between seconds 10 and 15.');
    } else {
      notes.text('');
    }
  }

})
