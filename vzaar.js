$(function() {
  var player = new vzPlayer("vzvd-1240536");
  var status = $('.status');
  var notes = $('.notes');

  player.ready(function() {
    status.text('ready');

    player.addEventListener('playState', onPlayState);
    player.addEventListener('progress', onProgress);
    player.addEventListener('interaction', onInteraction);
  });

  function onPlayState(state) {
    status.text('play state: ' + state);
  }

  function onProgress(state) {
    status.text('progress: ' + state);
  }

  function onInteraction(interaction) {
    status.text('interaction: ' + interaction);
  }

  setInterval(function() {
    player.getTime(function(time) {
      displayNotes(time);
    })
  }, 1000)

  function displayNotes(time) {
    if (time >= 2 && time <= 5) {
      notes.text('Notes relevant to the video between seconds 2 and 5.');
    } else if (time >= 10 && time <= 15) {
      notes.text('Notes relevant to the video between seconds 10 and 15.');
    } else {
      notes.text('');
    }
  }
})
