var playlist= {
  'P!nk': 'a song from her',
  'MJ': "bill jeans"
}

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song
  return playlist
}

function updateFromPlaylist(playlist,artist){
  delete playlist[artist]
  return playlist
}
