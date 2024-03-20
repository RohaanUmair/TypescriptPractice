function makeAlbum(artist: string, title: string, tracks?: number){
    let album = {artist, title}
    if (tracks){
        album['tracks'] = tracks;
    }
    return album
}

console.log(makeAlbum('Artist one', 'First album'));
console.log(makeAlbum('Artist two', 'Second album'));
console.log(makeAlbum('Artist three', 'Third album', 12));