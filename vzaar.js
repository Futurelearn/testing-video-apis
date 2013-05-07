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

})
