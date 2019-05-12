module.exports = function(request) {

    function getArtists(artist, page = 1) {
        return new Promise(function(resolve, reject) {
            resolve([
            {
                "name": "Cher",
                "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
                "url": "https://www.last.fm/music/Cher",
                "images": [
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/34s/879a88760860cc472d826ca4e7fc5ad6.png"
                    },
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/64s/879a88760860cc472d826ca4e7fc5ad6.png"
                    },
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/174s/879a88760860cc472d826ca4e7fc5ad6.png"
                    },
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/300x300/879a88760860cc472d826ca4e7fc5ad6.png"
                    },
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/300x300/879a88760860cc472d826ca4e7fc5ad6.png"
                    }
                ]
            },
            {
                "name": "Cheryl Cole",
                "mbid": "2d499150-1c42-4ffb-a90c-1cc635519d33",
                "url": "https://www.last.fm/music/Cheryl+Cole",
                "images": [
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/34s/909801856baf4ce6837dd626ddfbc35b.png"
                    },
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/64s/909801856baf4ce6837dd626ddfbc35b.png"
                    },
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/174s/909801856baf4ce6837dd626ddfbc35b.png"
                    },
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/300x300/909801856baf4ce6837dd626ddfbc35b.png"
                    },
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/300x300/909801856baf4ce6837dd626ddfbc35b.png"
                    }
                ]
            },
            {
                "name": "Cher Lloyd",
                "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                "url": "https://www.last.fm/music/Cher+Lloyd",
                "images": [
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/34s/905628dd9e82cea91b4ed36fffc1890a.png"
                    },
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/64s/905628dd9e82cea91b4ed36fffc1890a.png"
                    },
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/174s/905628dd9e82cea91b4ed36fffc1890a.png"
                    },
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/300x300/905628dd9e82cea91b4ed36fffc1890a.png"
                    },
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/300x300/905628dd9e82cea91b4ed36fffc1890a.png"
                    }
                ]
            }])})   
        }

    function getTopAlbums(artist, page = 1) {
        return new Promise(function(resolve, reject) {
            resolve( [
            {
                "name": "Believe",
                "url": "https://www.last.fm/music/Cher/Believe",
                "mbid": "63b3a8ca-26f2-4e2b-b867-647a6ec2bebd",
                "images": [
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/34s/3b54885952161aaea4ce2965b2db1638.png"
                    },
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/64s/3b54885952161aaea4ce2965b2db1638.png"
                    },
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/174s/3b54885952161aaea4ce2965b2db1638.png"
                    },
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/300x300/3b54885952161aaea4ce2965b2db1638.png"
                    }
                ],
                "artist": {
                    "name": "Cher",
                    "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
                    "url": "https://www.last.fm/music/Cher",
                    "images": [
                        {
                            "url": "https://lastfm-img2.akamaized.net/i/u/34s/3b54885952161aaea4ce2965b2db1638.png"
                        },
                        {
                            "url": "https://lastfm-img2.akamaized.net/i/u/64s/3b54885952161aaea4ce2965b2db1638.png"
                        },
                        {
                            "url": "https://lastfm-img2.akamaized.net/i/u/174s/3b54885952161aaea4ce2965b2db1638.png"
                        },
                        {
                            "url": "https://lastfm-img2.akamaized.net/i/u/300x300/3b54885952161aaea4ce2965b2db1638.png"
                        }
                    ]
                }
            },
            {
                "name": "The Very Best of Cher",
                "url": "https://www.last.fm/music/Cher/The+Very+Best+of+Cher",
                "mbid": "a7e2dad7-e733-4bee-9db1-b31e3183eaf5",
                "images": [
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/34s/287bc1657795451399d8fadf64555e91.png"
                    },
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/64s/287bc1657795451399d8fadf64555e91.png"
                    },
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/174s/287bc1657795451399d8fadf64555e91.png"
                    },
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/300x300/287bc1657795451399d8fadf64555e91.png"
                    }
                ],
                "artist": {
                    "name": "Cher",
                    "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
                    "url": "https://www.last.fm/music/Cher",
                    "images": [
                        {
                            "url": "https://lastfm-img2.akamaized.net/i/u/34s/287bc1657795451399d8fadf64555e91.png"
                        },
                        {
                            "url": "https://lastfm-img2.akamaized.net/i/u/64s/287bc1657795451399d8fadf64555e91.png"
                        },
                        {
                            "url": "https://lastfm-img2.akamaized.net/i/u/174s/287bc1657795451399d8fadf64555e91.png"
                        },
                        {
                            "url": "https://lastfm-img2.akamaized.net/i/u/300x300/287bc1657795451399d8fadf64555e91.png"
                        }
                    ]
                }
            }])}  )      
    }
    
    function getAlbumInfo(album) {
        return new Promise(function(resolve, reject) {
            resolve(
            {
                "name": "Believe",
                "mbid": "63b3a8ca-26f2-4e2b-b867-647a6ec2bebd",
                "artistName": "Cher",
                "url": "https://www.last.fm/music/Cher/Believe",
                "images": [
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/34s/3b54885952161aaea4ce2965b2db1638.png"
                    },
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/64s/3b54885952161aaea4ce2965b2db1638.png"
                    },
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/174s/3b54885952161aaea4ce2965b2db1638.png"
                    },
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/300x300/3b54885952161aaea4ce2965b2db1638.png"
                    },
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/300x300/3b54885952161aaea4ce2965b2db1638.png"
                    },
                    {
                        "url": "https://lastfm-img2.akamaized.net/i/u/300x300/3b54885952161aaea4ce2965b2db1638.png"
                    }
                ],
                "tracks": [
                    {
                        "name": "Believe",
                        "url": "https://www.last.fm/music/Cher/_/Believe",
                        "duration": "240",
                        "artist": {
                            "name": "Cher",
                            "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
                            "url": "https://www.last.fm/music/Cher",
                            "images": []
                        }
                    },
                    {
                        "name": "The Power",
                        "url": "https://www.last.fm/music/Cher/_/The+Power",
                        "duration": "236",
                        "artist": {
                            "name": "Cher",
                            "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
                            "url": "https://www.last.fm/music/Cher",
                            "images": []
                        }
                    },
                    {
                        "name": "Runaway",
                        "url": "https://www.last.fm/music/Cher/_/Runaway",
                        "duration": "286",
                        "artist": {
                            "name": "Cher",
                            "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
                            "url": "https://www.last.fm/music/Cher",
                            "images": []
                        }
                    },
                    {
                        "name": "All or Nothing",
                        "url": "https://www.last.fm/music/Cher/_/All+or+Nothing",
                        "duration": "237",
                        "artist": {
                            "name": "Cher",
                            "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
                            "url": "https://www.last.fm/music/Cher",
                            "images": []
                        }
                    },
                    {
                        "name": "Strong Enough",
                        "url": "https://www.last.fm/music/Cher/_/Strong+Enough",
                        "duration": "224",
                        "artist": {
                            "name": "Cher",
                            "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
                            "url": "https://www.last.fm/music/Cher",
                            "images": []
                        }
                    },
                    {
                        "name": "Dov'è L'amore",
                        "url": "https://www.last.fm/music/Cher/_/Dov%27%C3%A8+L%27amore",
                        "duration": "258",
                        "artist": {
                            "name": "Cher",
                            "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
                            "url": "https://www.last.fm/music/Cher",
                            "images": []
                        }
                    },
                    {
                        "name": "Takin' Back My Heart",
                        "url": "https://www.last.fm/music/Cher/_/Takin%27+Back+My+Heart",
                        "duration": "272",
                        "artist": {
                            "name": "Cher",
                            "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
                            "url": "https://www.last.fm/music/Cher",
                            "images": []
                        }
                    },
                    {
                        "name": "Taxi Taxi",
                        "url": "https://www.last.fm/music/Cher/_/Taxi+Taxi",
                        "duration": "304",
                        "artist": {
                            "name": "Cher",
                            "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
                            "url": "https://www.last.fm/music/Cher",
                            "images": []
                        }
                    },
                    {
                        "name": "Love Is the Groove",
                        "url": "https://www.last.fm/music/Cher/_/Love+Is+the+Groove",
                        "duration": "271",
                        "artist": {
                            "name": "Cher",
                            "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
                            "url": "https://www.last.fm/music/Cher",
                            "images": []
                        }
                    },
                    {
                        "name": "We All Sleep Alone",
                        "url": "https://www.last.fm/music/Cher/_/We+All+Sleep+Alone",
                        "duration": "234",
                        "artist": {
                            "name": "Cher",
                            "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
                            "url": "https://www.last.fm/music/Cher",
                            "images": []
                        }
                    }
                ]
            }
        )})
    }

    return {
        getArtists: getArtists,
        getTopAlbums: getTopAlbums,
        getAlbumInfo: getAlbumInfo
    }
}()