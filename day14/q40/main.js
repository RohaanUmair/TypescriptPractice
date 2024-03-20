function makeAlbum(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(makeAlbum('Artist one', 'First album'));
console.log(makeAlbum('Artist two', 'Second album'));
console.log(makeAlbum('Artist three', 'Third album', 12));
