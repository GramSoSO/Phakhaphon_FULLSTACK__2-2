class media {
    constructor(info) {
        this.pubblichdate = info.pubblichdate;
        this.name = info.name;
    }
}

class song extends media {
    constructor(songdata) {
        super(songdata)
        this.artist = songdata.artist
    }

    static test(){
        console.log("SUB")
    }
}

const mySong = new song ({
    artist: "Queen!",
    name: "Hellow world!",
    pubblichdate: 1975
});

console.log(mySong)

song.test()
