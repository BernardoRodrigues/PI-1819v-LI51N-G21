module.exports = function() {
    const endpoints = require('./../../lib/config/endpoints')
    const map = new Map()

    map.set(endpoints.getArtistsEndpoint('cher'), {
        "results": {
            "opensearch:Query": {
                "#text": "",
                "role": "request",
                "searchTerms": "cher",
                "startPage": "1"
            },
            "opensearch:totalResults": "61384",
            "opensearch:startIndex": "0",
            "opensearch:itemsPerPage": "30",
            "artistmatches": {
                "artist": [
                    {
                        "name": "Cher",
                        "listeners": "1114749",
                        "mbid": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
                        "url": "https://www.last.fm/music/Cher",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Cheryl Cole",
                        "listeners": "629265",
                        "mbid": "2d499150-1c42-4ffb-a90c-1cc635519d33",
                        "url": "https://www.last.fm/music/Cheryl+Cole",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Cher Lloyd",
                        "listeners": "496524",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Black Stone Cherry",
                        "listeners": "320688",
                        "mbid": "1801bd47-46ae-49ff-bfcd-6e01b562d880",
                        "url": "https://www.last.fm/music/Black+Stone+Cherry",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Eagle-Eye Cherry",
                        "listeners": "860547",
                        "mbid": "4a5777b3-f55b-437c-8b23-d9ee7791c7fc",
                        "url": "https://www.last.fm/music/Eagle-Eye+Cherry",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Cheryl",
                        "listeners": "130114",
                        "mbid": "85df56ab-e125-4169-8ac8-e6666128d526",
                        "url": "https://www.last.fm/music/Cheryl",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Cherry Glazerr",
                        "listeners": "105111",
                        "mbid": "64a0c404-58af-4083-8fc6-a6725ef02ecb",
                        "url": "https://www.last.fm/music/Cherry+Glazerr",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Neneh Cherry",
                        "listeners": "271130",
                        "mbid": "527c65d1-9fdb-4482-8796-dde2980bd63a",
                        "url": "https://www.last.fm/music/Neneh+Cherry",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Cherub",
                        "listeners": "154092",
                        "mbid": "abf42fca-8c2e-4d55-9fc8-6b1fc65a80f1",
                        "url": "https://www.last.fm/music/Cherub",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Acid Black Cherry",
                        "listeners": "30060",
                        "mbid": "a3842d12-306c-498a-ae1d-03ee40e3f2ac",
                        "url": "https://www.last.fm/music/Acid+Black+Cherry",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Cherish",
                        "listeners": "331290",
                        "mbid": "e82500a8-70ce-46ad-a028-b0690420d560",
                        "url": "https://www.last.fm/music/Cherish",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Cherry Poppin' Daddies",
                        "listeners": "139330",
                        "mbid": "e23612fb-6dd6-4d5c-b638-2611bfc8c48a",
                        "url": "https://www.last.fm/music/Cherry+Poppin%27+Daddies",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Wild Cherry",
                        "listeners": "342519",
                        "mbid": "da5ff827-174b-48d1-9a39-9fa290bb2925",
                        "url": "https://www.last.fm/music/Wild+Cherry",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Cherry Ghost",
                        "listeners": "126582",
                        "mbid": "1e76c9f2-2f79-4521-a418-a3c22eda30fa",
                        "url": "https://www.last.fm/music/Cherry+Ghost",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Blue Cheer",
                        "listeners": "175373",
                        "mbid": "523b52d7-a819-4111-9085-69fc269c9638",
                        "url": "https://www.last.fm/music/Blue+Cheer",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Cheryl Lynn",
                        "listeners": "207802",
                        "mbid": "c2b8f775-455c-44c3-97ca-f377938da19e",
                        "url": "https://www.last.fm/music/Cheryl+Lynn",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Sonny & Cher",
                        "listeners": "288491",
                        "mbid": "c43d2302-02db-487b-b62d-8cb3c57f94c6",
                        "url": "https://www.last.fm/music/Sonny+&+Cher",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Don Cherry",
                        "listeners": "86957",
                        "mbid": "d45e4d9d-45c1-45cb-941a-8a5025874e06",
                        "url": "https://www.last.fm/music/Don+Cherry",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Cherri Bomb",
                        "listeners": "27288",
                        "mbid": "41db537e-1150-43b2-9a94-a7b8a08cd23d",
                        "url": "https://www.last.fm/music/Cherri+Bomb",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "CHERRY BULLET",
                        "listeners": "9680",
                        "mbid": "",
                        "url": "https://www.last.fm/music/CHERRY+BULLET",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Cherokee",
                        "listeners": "48409",
                        "mbid": "ea71fddc-7e41-470f-8e13-6cd50ae981da",
                        "url": "https://www.last.fm/music/Cherokee",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Jeanne Cherhal",
                        "listeners": "68317",
                        "mbid": "1c964d5b-ddf8-443f-a722-4e3d57b55d3c",
                        "url": "https://www.last.fm/music/Jeanne+Cherhal",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Cheers Elephant",
                        "listeners": "52389",
                        "mbid": "89724b2e-c0ba-43ae-9fcb-75011deb059f",
                        "url": "https://www.last.fm/music/Cheers+Elephant",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Cherish The Ladies",
                        "listeners": "71676",
                        "mbid": "c6c538ec-a3ca-43f0-8d73-6e88582de31f",
                        "url": "https://www.last.fm/music/Cherish+The+Ladies",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "CHERNIKOVSKAYA HATA",
                        "listeners": "10353",
                        "mbid": "",
                        "url": "https://www.last.fm/music/CHERNIKOVSKAYA+HATA",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Cherrelle",
                        "listeners": "61359",
                        "mbid": "2a0b3bf9-0d04-4e49-91f5-9530cbebab55",
                        "url": "https://www.last.fm/music/Cherrelle",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Cherrie",
                        "listeners": "12767",
                        "mbid": "",
                        "url": "https://www.last.fm/music/Cherrie",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "CHERRYBLOSSOM",
                        "listeners": "10405",
                        "mbid": "38f8a3fa-7379-49d6-88c2-2c16db1ac0db",
                        "url": "https://www.last.fm/music/CHERRYBLOSSOM",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Cheiro de Amor",
                        "listeners": "25200",
                        "mbid": "24604d92-b584-4546-8203-98d13cd8e5a1",
                        "url": "https://www.last.fm/music/Cheiro+de+Amor",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    },
                    {
                        "name": "Cherry Filter",
                        "listeners": "6167",
                        "mbid": "49b85217-16c5-41bb-9e40-bd83f80eb1e6",
                        "url": "https://www.last.fm/music/Cherry+Filter",
                        "streamable": "0",
                        "image": [
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "small"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "medium"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "large"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "extralarge"
                            },
                            {
                                "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                                "size": "mega"
                            }
                        ]
                    }
                ]
            },
            "@attr": {
                "for": "cher"
            }
        }
    })

    map.set(endpoints.getAlbumInfoEndpoint('488bfc7f-c1a3-4488-b8c6-750ddf2bb157'), {
        "topalbums": {
            "album": [
                {
                    "name": "Sticks & Stones",
                    "playcount": 3068844,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Sticks+&+Stones",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/8866417839664a5a97168836fbe13124.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/8866417839664a5a97168836fbe13124.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/8866417839664a5a97168836fbe13124.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/8866417839664a5a97168836fbe13124.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Swagger Jagger",
                    "playcount": 376193,
                    "mbid": "488bfc7f-c1a3-4488-b8c6-750ddf2bb157",
                    "url": "https://www.last.fm/music/Cher+Lloyd/Swagger+Jagger",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/5f3d635f7dc8448c95df66084d289106.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/5f3d635f7dc8448c95df66084d289106.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/5f3d635f7dc8448c95df66084d289106.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/5f3d635f7dc8448c95df66084d289106.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Sorry I'm Late",
                    "playcount": 1370867,
                    "mbid": "061227cc-726d-4dbb-96e2-7e6da17c2dbb",
                    "url": "https://www.last.fm/music/Cher+Lloyd/Sorry+I%27m+Late",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/779d0f722278a9933d0a43e6a1d2cd85.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/779d0f722278a9933d0a43e6a1d2cd85.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/779d0f722278a9933d0a43e6a1d2cd85.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/779d0f722278a9933d0a43e6a1d2cd85.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Want U Back",
                    "playcount": 286177,
                    "mbid": "63caff2b-f12b-4a00-9125-1b03039b5b6a",
                    "url": "https://www.last.fm/music/Cher+Lloyd/Want+U+Back",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/9d9d088469c2464bb22de0564b550821.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/9d9d088469c2464bb22de0564b550821.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/9d9d088469c2464bb22de0564b550821.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/9d9d088469c2464bb22de0564b550821.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Sirens",
                    "playcount": 94155,
                    "mbid": "e8832760-e0fd-4eff-942d-f506cd50cbb0",
                    "url": "https://www.last.fm/music/Cher+Lloyd/Sirens",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/0bbf4c60c6f14d8ccda28e5a56792969.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/0bbf4c60c6f14d8ccda28e5a56792969.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/0bbf4c60c6f14d8ccda28e5a56792969.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/0bbf4c60c6f14d8ccda28e5a56792969.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "With Ur Love",
                    "playcount": 84458,
                    "url": "https://www.last.fm/music/Cher+Lloyd/With+Ur+Love",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/d9612494f872476695afdda80e8d801b.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/d9612494f872476695afdda80e8d801b.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/d9612494f872476695afdda80e8d801b.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/d9612494f872476695afdda80e8d801b.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "I Wish",
                    "playcount": 79632,
                    "url": "https://www.last.fm/music/Cher+Lloyd/I+Wish",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/15331a64e4cc4236be6ceb52a27a0850.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/15331a64e4cc4236be6ceb52a27a0850.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/15331a64e4cc4236be6ceb52a27a0850.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/15331a64e4cc4236be6ceb52a27a0850.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "None Of My Business",
                    "playcount": 88700,
                    "url": "https://www.last.fm/music/Cher+Lloyd/None+Of+My+Business",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/a63543a79555200c1e6db3715d335dba.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/a63543a79555200c1e6db3715d335dba.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/a63543a79555200c1e6db3715d335dba.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/a63543a79555200c1e6db3715d335dba.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Activated",
                    "playcount": 54129,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Activated",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/e822dbf03e0821040e50bfcbdc14032e.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/e822dbf03e0821040e50bfcbdc14032e.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/e822dbf03e0821040e50bfcbdc14032e.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/e822dbf03e0821040e50bfcbdc14032e.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Sticks + Stones",
                    "playcount": 541855,
                    "mbid": "c5a4714a-065b-49b5-a3a5-3ef7e700f699",
                    "url": "https://www.last.fm/music/Cher+Lloyd/Sticks+%252B+Stones",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/58f01861ee21be301422dbb079b146a5.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/58f01861ee21be301422dbb079b146a5.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/58f01861ee21be301422dbb079b146a5.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/58f01861ee21be301422dbb079b146a5.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Divinity Jukebox",
                    "playcount": 12641,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Divinity+Jukebox",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "",
                            "size": "small"
                        },
                        {
                            "#text": "",
                            "size": "medium"
                        },
                        {
                            "#text": "",
                            "size": "large"
                        },
                        {
                            "#text": "",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Want U Back feat. Astro",
                    "playcount": 22463,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Want+U+Back+feat.+Astro",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/e09b9c45988348a9bf691c382253b70c.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/e09b9c45988348a9bf691c382253b70c.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/e09b9c45988348a9bf691c382253b70c.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/e09b9c45988348a9bf691c382253b70c.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "(null)",
                    "playcount": 28298,
                    "url": "https://www.last.fm/music/Cher+Lloyd/(null)",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "",
                            "size": "small"
                        },
                        {
                            "#text": "",
                            "size": "medium"
                        },
                        {
                            "#text": "",
                            "size": "large"
                        },
                        {
                            "#text": "",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Swagger Jagger - Single",
                    "playcount": 90988,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Swagger+Jagger+-+Single",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/355ab5cbe99a49e3929bc2ee7da077cb.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/355ab5cbe99a49e3929bc2ee7da077cb.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/355ab5cbe99a49e3929bc2ee7da077cb.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/355ab5cbe99a49e3929bc2ee7da077cb.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Want U Back - Single",
                    "playcount": 64911,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Want+U+Back+-+Single",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/947d4dd3ef1f42ec9acecfcc80730eb8.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/947d4dd3ef1f42ec9acecfcc80730eb8.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/947d4dd3ef1f42ec9acecfcc80730eb8.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/947d4dd3ef1f42ec9acecfcc80730eb8.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "I Wish (feat. T.I.) - Single",
                    "playcount": 68466,
                    "url": "https://www.last.fm/music/Cher+Lloyd/I+Wish+(feat.+T.I.)+-+Single",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/288851113be440db8fd94af639c4b6e8.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/288851113be440db8fd94af639c4b6e8.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/288851113be440db8fd94af639c4b6e8.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/288851113be440db8fd94af639c4b6e8.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Human",
                    "playcount": 14787,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Human",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/ed9e08171542485cc8de98a7bf5ed740.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/ed9e08171542485cc8de98a7bf5ed740.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/ed9e08171542485cc8de98a7bf5ed740.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/ed9e08171542485cc8de98a7bf5ed740.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "M.F.P.O.T.Y.",
                    "playcount": 11154,
                    "url": "https://www.last.fm/music/Cher+Lloyd/M.F.P.O.T.Y.",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/f93529bd465041f1c1c54197a318ad7d.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/f93529bd465041f1c1c54197a318ad7d.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/f93529bd465041f1c1c54197a318ad7d.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/f93529bd465041f1c1c54197a318ad7d.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "With Ur Love Feat. Mike Posner",
                    "playcount": 8403,
                    "url": "https://www.last.fm/music/Cher+Lloyd/With+Ur+Love+Feat.+Mike+Posner",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/fa3d75947679458ebf80a3dbf3c43190.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/fa3d75947679458ebf80a3dbf3c43190.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/fa3d75947679458ebf80a3dbf3c43190.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/fa3d75947679458ebf80a3dbf3c43190.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Dirty Love",
                    "playcount": 8880,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Dirty+Love",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/19b810c3ee9d4047c0da2d648501b75f.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/19b810c3ee9d4047c0da2d648501b75f.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/19b810c3ee9d4047c0da2d648501b75f.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/19b810c3ee9d4047c0da2d648501b75f.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "With Ur Love - Single",
                    "playcount": 29939,
                    "url": "https://www.last.fm/music/Cher+Lloyd/With+Ur+Love+-+Single",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/00119df2d35f4334a4c0a4b7b6db603a.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/00119df2d35f4334a4c0a4b7b6db603a.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/00119df2d35f4334a4c0a4b7b6db603a.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/00119df2d35f4334a4c0a4b7b6db603a.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Cher Lloyd",
                    "playcount": 46916,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Cher+Lloyd",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/e99266ed8b9f49cdc97294c65bb735aa.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/e99266ed8b9f49cdc97294c65bb735aa.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/e99266ed8b9f49cdc97294c65bb735aa.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/e99266ed8b9f49cdc97294c65bb735aa.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Pure... R&B Party",
                    "playcount": 7958,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Pure...+R&B+Party",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/983e55c00f1443f0c338c03c8e5b43e0.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/983e55c00f1443f0c338c03c8e5b43e0.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/983e55c00f1443f0c338c03c8e5b43e0.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/983e55c00f1443f0c338c03c8e5b43e0.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Bind Your Love",
                    "playcount": 9364,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Bind+Your+Love",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/486a940830204ad6ca270c7f5129a955.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/486a940830204ad6ca270c7f5129a955.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/486a940830204ad6ca270c7f5129a955.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/486a940830204ad6ca270c7f5129a955.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Swagger Jagger - EP",
                    "playcount": 35214,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Swagger+Jagger+-+EP",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/1b2f942c61ee986888c5f1da28fa6b87.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/1b2f942c61ee986888c5f1da28fa6b87.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/1b2f942c61ee986888c5f1da28fa6b87.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/1b2f942c61ee986888c5f1da28fa6b87.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Sticks & Stones (US Version)",
                    "playcount": 92646,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Sticks+&+Stones+(US+Version)",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/8e03f19bbf044ababa39eeebe29b440e.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/8e03f19bbf044ababa39eeebe29b440e.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/8e03f19bbf044ababa39eeebe29b440e.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/8e03f19bbf044ababa39eeebe29b440e.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Sticks & Stones (Japanese Version)",
                    "playcount": 75392,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Sticks+&+Stones+(Japanese+Version)",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/d5d698ef9709479986fa5ff4baeb6a45.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/d5d698ef9709479986fa5ff4baeb6a45.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/d5d698ef9709479986fa5ff4baeb6a45.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/d5d698ef9709479986fa5ff4baeb6a45.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "With Ur Love (feat. Mike Posner) [Remixes]",
                    "playcount": 20572,
                    "url": "https://www.last.fm/music/Cher+Lloyd/With+Ur+Love+(feat.+Mike+Posner)+%5BRemixes%5D",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/9237f9830cd24191adf6784798541d52.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/9237f9830cd24191adf6784798541d52.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/9237f9830cd24191adf6784798541d52.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/9237f9830cd24191adf6784798541d52.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Sticks & Stones (US Bonus Track Version)",
                    "playcount": 12643,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Sticks+&+Stones+(US+Bonus+Track+Version)",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "",
                            "size": "small"
                        },
                        {
                            "#text": "",
                            "size": "medium"
                        },
                        {
                            "#text": "",
                            "size": "large"
                        },
                        {
                            "#text": "",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Now That's What I Call Music! 80",
                    "playcount": 3439,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Now+That%27s+What+I+Call+Music%21+80",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/e020c8c1c40748b4b2dcb9684ee54a2a.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/e020c8c1c40748b4b2dcb9684ee54a2a.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/e020c8c1c40748b4b2dcb9684ee54a2a.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/e020c8c1c40748b4b2dcb9684ee54a2a.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "WWW.iM1MUSIC.NET",
                    "playcount": 15278,
                    "url": "https://www.last.fm/music/Cher+Lloyd/WWW.iM1MUSIC.NET",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "",
                            "size": "small"
                        },
                        {
                            "#text": "",
                            "size": "medium"
                        },
                        {
                            "#text": "",
                            "size": "large"
                        },
                        {
                            "#text": "",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Want U Back (feat. Astro)",
                    "playcount": 18143,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Want+U+Back+(feat.+Astro)",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/0442320aca7242abb71eec29de71b97a.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/0442320aca7242abb71eec29de71b97a.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/0442320aca7242abb71eec29de71b97a.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/0442320aca7242abb71eec29de71b97a.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Activated - Single",
                    "playcount": 15761,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Activated+-+Single",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/e98c4f15d711d05e35869b0a4ee7a877.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/e98c4f15d711d05e35869b0a4ee7a877.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/e98c4f15d711d05e35869b0a4ee7a877.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/e98c4f15d711d05e35869b0a4ee7a877.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Sticks  Stones",
                    "playcount": 14236,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Sticks++Stones",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/8ef893f0f2364b1abb88437130ab96e7.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/8ef893f0f2364b1abb88437130ab96e7.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/8ef893f0f2364b1abb88437130ab96e7.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/8ef893f0f2364b1abb88437130ab96e7.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "With UR Love (feat. Mike Posner) - Single",
                    "playcount": 15866,
                    "url": "https://www.last.fm/music/Cher+Lloyd/With+UR+Love+(feat.+Mike+Posner)+-+Single",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/8b429a18b7704057c0fb375f6ac25d68.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/8b429a18b7704057c0fb375f6ac25d68.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/8b429a18b7704057c0fb375f6ac25d68.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/8b429a18b7704057c0fb375f6ac25d68.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Sticks and Stones",
                    "playcount": 23240,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Sticks+and+Stones",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/60b004b934154a18bc613b69f13fc75c.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/60b004b934154a18bc613b69f13fc75c.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/60b004b934154a18bc613b69f13fc75c.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/60b004b934154a18bc613b69f13fc75c.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Oath (feat. Becky G) - Single",
                    "playcount": 11254,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Oath+(feat.+Becky+G)+-+Single",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/02ecf2391f10436e8eaf831a7dc498af.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/02ecf2391f10436e8eaf831a7dc498af.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/02ecf2391f10436e8eaf831a7dc498af.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/02ecf2391f10436e8eaf831a7dc498af.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "None Of My Business - Single",
                    "playcount": 11250,
                    "url": "https://www.last.fm/music/Cher+Lloyd/None+Of+My+Business+-+Single",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/78da0ac5baba7e2e4cf418dc6fb4c7dc.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/78da0ac5baba7e2e4cf418dc6fb4c7dc.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/78da0ac5baba7e2e4cf418dc6fb4c7dc.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/78da0ac5baba7e2e4cf418dc6fb4c7dc.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "The X Factor",
                    "playcount": 19492,
                    "url": "https://www.last.fm/music/Cher+Lloyd/The+X+Factor",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/46968c9b836e4e94cecf52b97b7f2450.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/46968c9b836e4e94cecf52b97b7f2450.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/46968c9b836e4e94cecf52b97b7f2450.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/46968c9b836e4e94cecf52b97b7f2450.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Party Hits",
                    "playcount": 1597,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Party+Hits",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "",
                            "size": "small"
                        },
                        {
                            "#text": "",
                            "size": "medium"
                        },
                        {
                            "#text": "",
                            "size": "large"
                        },
                        {
                            "#text": "",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "I Wish (Feat T.I.) - Single",
                    "playcount": 11162,
                    "url": "https://www.last.fm/music/Cher+Lloyd/I+Wish+(Feat+T.I.)+-+Single",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/b47f216dd7224f23cfb60dbc31ab54aa.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/b47f216dd7224f23cfb60dbc31ab54aa.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/b47f216dd7224f23cfb60dbc31ab54aa.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/b47f216dd7224f23cfb60dbc31ab54aa.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "The X-Factor 2010",
                    "playcount": 12987,
                    "url": "https://www.last.fm/music/Cher+Lloyd/The+X-Factor+2010",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/d34ca233a80540a7aab164482beb770d.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/d34ca233a80540a7aab164482beb770d.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/d34ca233a80540a7aab164482beb770d.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/d34ca233a80540a7aab164482beb770d.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Sirens - Single",
                    "playcount": 12602,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Sirens+-+Single",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/f0f5ffa8162649d9c98fba53085f5b96.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/f0f5ffa8162649d9c98fba53085f5b96.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/f0f5ffa8162649d9c98fba53085f5b96.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/f0f5ffa8162649d9c98fba53085f5b96.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Now That's What I Call Music! 80 [Double CD]",
                    "playcount": 2119,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Now+That%27s+What+I+Call+Music%21+80+%5BDouble+CD%5D",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "",
                            "size": "small"
                        },
                        {
                            "#text": "",
                            "size": "medium"
                        },
                        {
                            "#text": "",
                            "size": "large"
                        },
                        {
                            "#text": "",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "The Official Uk Top 40 Singles Chart 20-11-2011",
                    "playcount": 3284,
                    "url": "https://www.last.fm/music/Cher+Lloyd/The+Official+Uk+Top+40+Singles+Chart+20-11-2011",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "",
                            "size": "small"
                        },
                        {
                            "#text": "",
                            "size": "medium"
                        },
                        {
                            "#text": "",
                            "size": "large"
                        },
                        {
                            "#text": "",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Talkin' That",
                    "playcount": 5453,
                    "mbid": "9785a9c7-c43a-4229-8203-7bf54ed799f0",
                    "url": "https://www.last.fm/music/Cher+Lloyd/Talkin%27+That",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/99cce70e57cd4f42b2be663f48fdc977.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/99cce70e57cd4f42b2be663f48fdc977.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/99cce70e57cd4f42b2be663f48fdc977.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/99cce70e57cd4f42b2be663f48fdc977.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Music",
                    "playcount": 8384,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Music",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "",
                            "size": "small"
                        },
                        {
                            "#text": "",
                            "size": "medium"
                        },
                        {
                            "#text": "",
                            "size": "large"
                        },
                        {
                            "#text": "",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Oath",
                    "playcount": 8281,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Oath",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2a7918014b974a79b2e32fde62677786.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2a7918014b974a79b2e32fde62677786.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2a7918014b974a79b2e32fde62677786.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2a7918014b974a79b2e32fde62677786.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Stay (X Factor Performance) - Single",
                    "playcount": 7424,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Stay+(X+Factor+Performance)+-+Single",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/6854a1c6bce44561b6b6fa32347e02a5.png",
                            "size": "small"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/6854a1c6bce44561b6b6fa32347e02a5.png",
                            "size": "medium"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/6854a1c6bce44561b6b6fa32347e02a5.png",
                            "size": "large"
                        },
                        {
                            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/6854a1c6bce44561b6b6fa32347e02a5.png",
                            "size": "extralarge"
                        }
                    ]
                },
                {
                    "name": "Billboard USA Top 40",
                    "playcount": 2671,
                    "url": "https://www.last.fm/music/Cher+Lloyd/Billboard+USA+Top+40",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    },
                    "image": [
                        {
                            "#text": "",
                            "size": "small"
                        },
                        {
                            "#text": "",
                            "size": "medium"
                        },
                        {
                            "#text": "",
                            "size": "large"
                        },
                        {
                            "#text": "",
                            "size": "extralarge"
                        }
                    ]
                }
            ],
            "@attr": {
                "artist": "Cher Lloyd",
                "page": "1",
                "perPage": "50",
                "totalPages": "120",
                "total": "5972"
            }
        }
    })
    
    map.set(endpoints.getTopAlbumsEndpoint('bfcc6d75-a6a5-4bc6-8282-47aec8531818'), {
        "album": {
            "name": "Swagger Jagger",
            "artist": "Cher Lloyd",
            "mbid": "488bfc7f-c1a3-4488-b8c6-750ddf2bb157",
            "url": "https://www.last.fm/music/Cher+Lloyd/Swagger+Jagger",
            "image": [
                {
                    "#text": "https://lastfm-img2.akamaized.net/i/u/34s/5f3d635f7dc8448c95df66084d289106.png",
                    "size": "small"
                },
                {
                    "#text": "https://lastfm-img2.akamaized.net/i/u/64s/5f3d635f7dc8448c95df66084d289106.png",
                    "size": "medium"
                },
                {
                    "#text": "https://lastfm-img2.akamaized.net/i/u/174s/5f3d635f7dc8448c95df66084d289106.png",
                    "size": "large"
                },
                {
                    "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/5f3d635f7dc8448c95df66084d289106.png",
                    "size": "extralarge"
                },
                {
                    "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/5f3d635f7dc8448c95df66084d289106.png",
                    "size": "mega"
                },
                {
                    "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/5f3d635f7dc8448c95df66084d289106.png",
                    "size": ""
                }
            ],
            "listeners": "141245",
            "playcount": "376193",
            "tracks": {
                "track": [
                    {
                        "name": "Swagger Jagger",
                        "url": "https://www.last.fm/music/Cher+Lloyd/_/Swagger+Jagger",
                        "duration": "192",
                        "@attr": {
                            "rank": "1"
                        },
                        "streamable": {
                            "#text": "0",
                            "fulltrack": "0"
                        },
                        "artist": {
                            "name": "Cher Lloyd",
                            "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                            "url": "https://www.last.fm/music/Cher+Lloyd"
                        }
                    },
                    {
                        "name": "Swagger Jagger (Hygrade Radio Mix)",
                        "url": "https://www.last.fm/music/Cher+Lloyd/_/Swagger+Jagger+(Hygrade+Radio+Mix)",
                        "duration": "212",
                        "@attr": {
                            "rank": "2"
                        },
                        "streamable": {
                            "#text": "0",
                            "fulltrack": "0"
                        },
                        "artist": {
                            "name": "Cher Lloyd",
                            "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                            "url": "https://www.last.fm/music/Cher+Lloyd"
                        }
                    },
                    {
                        "name": "Swagger Jagger (Wideboys Radio Edit)",
                        "url": "https://www.last.fm/music/Cher+Lloyd/_/Swagger+Jagger+(Wideboys+Radio+Edit)",
                        "duration": "184",
                        "@attr": {
                            "rank": "3"
                        },
                        "streamable": {
                            "#text": "0",
                            "fulltrack": "0"
                        },
                        "artist": {
                            "name": "Cher Lloyd",
                            "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                            "url": "https://www.last.fm/music/Cher+Lloyd"
                        }
                    },
                    {
                        "name": "Swagger Jagger (Dillon Francis Remix)",
                        "url": "https://www.last.fm/music/Cher+Lloyd/_/Swagger+Jagger+(Dillon+Francis+Remix)",
                        "duration": "306",
                        "@attr": {
                            "rank": "4"
                        },
                        "streamable": {
                            "#text": "0",
                            "fulltrack": "0"
                        },
                        "artist": {
                            "name": "Cher Lloyd",
                            "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                            "url": "https://www.last.fm/music/Cher+Lloyd"
                        }
                    },
                    {
                        "name": "Swagger Jagger (Eyes Remix)",
                        "url": "https://www.last.fm/music/Cher+Lloyd/_/Swagger+Jagger+(Eyes+Remix)",
                        "duration": "268",
                        "@attr": {
                            "rank": "5"
                        },
                        "streamable": {
                            "#text": "0",
                            "fulltrack": "0"
                        },
                        "artist": {
                            "name": "Cher Lloyd",
                            "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                            "url": "https://www.last.fm/music/Cher+Lloyd"
                        }
                    }
                ]
            },
            "tags": {
                "tag": [
                    {
                        "name": "2011",
                        "url": "https://www.last.fm/tag/2011"
                    },
                    {
                        "name": "cool",
                        "url": "https://www.last.fm/tag/cool"
                    },
                    {
                        "name": "cher",
                        "url": "https://www.last.fm/tag/cher"
                    },
                    {
                        "name": "album",
                        "url": "https://www.last.fm/tag/album"
                    },
                    {
                        "name": "swagger",
                        "url": "https://www.last.fm/tag/swagger"
                    }
                ]
            }
        }
    })

    map.set(endpoints.createPlaylistEndpoint(), {
        "_index": "playlists",
        "_type": "playlist",
        "_id": "1kYqrWoB878KWpggjkcH",
        "_version": 1,
        "result": "created",
        "_shards": {
            "total": 2,
            "successful": 1,
            "failed": 0
        },
        "_seq_no": 46,
        "_primary_term": 5
    })

    map.set(endpoints.createTracksListEndpoint('1kYqrWoB878KWpggjkcH'), {
        "_index": "tracks",
        "_type": "track",
        "_id": "dxcsLWoBkLjY0VBYeo0A",
        "_version": 2,
        "result": "updated",
        "_shards": {
            "total": 2,
            "successful": 1,
            "failed": 0
        },
        "_seq_no": 55,
        "_primary_term": 5
    })

    map.set(endpoints.deleteTracksListEndpoint('1kYqrWoB878KWpggjkcH'), {
        "_index": "tracks",
        "_type": "track",
        "_id": "1kYqrWoB878KWpggjkcH",
        "_version": 2,
        "result": "deleted",
        "_shards": {
            "total": 2,
            "successful": 1,
            "failed": 0
        },
        "_seq_no": 56,
        "_primary_term": 5
    })

    map.set(endpoints.deletePlaylistEndpoint('1kYqrWoB878KWpggjkcH'), {
        "_index": "tracks",
        "_type": "track",
        "_id": "1kYqrWoB878KWpggjkcH",
        "_version": 1,
        "result": "not_found",
        "_shards": {
            "total": 2,
            "successful": 1,
            "failed": 0
        },
        "_seq_no": 57,
        "_primary_term": 5
    })

    map.set(endpoints.updatePlaylistEndpoint('1kYqrWoB878KWpggjkcH'), {
        "_index": "playlists",
        "_type": "playlist",
        "_id": "1kYqrWoB878KWpggjkcH",
        "_version": 7,
        "result": "updated",
        "_shards": {
            "total": 2,
            "successful": 1,
            "failed": 0
        },
        "_seq_no": 47,
        "_primary_term": 5
    })

    map.set(endpoints.getAllPlaylistsEndpoint(), {
        "took": 466,
        "timed_out": false,
        "_shards": {
            "total": 1,
            "successful": 1,
            "skipped": 0,
            "failed": 0
        },
        "hits": {
            "total": {
                "value": 17,
                "relation": "eq"
            },
            "max_score": 1,
            "hits": [
                {
                    "_index": "playlists",
                    "_type": "playlist",
                    "_id": "dxcsLWoBkLjY0VBYeo0A",
                    "_score": 1,
                    "_source": {
                        "name": "PlaylistTesting1",
                        "description": "Testing playlist creation"
                    }
                },
                {
                    "_index": "playlists",
                    "_type": "playlist",
                    "_id": "LQnmR2oBhOAy8TrbWWUH",
                    "_score": 1,
                    "_source": {
                        "name": "PlaylistTesting1",
                        "description": "Testing playlist creation"
                    }
                },
                {
                    "_index": "playlists",
                    "_type": "playlist",
                    "_id": "LMO1TmoBPRnACkY3Z9Ea",
                    "_score": 1,
                    "_source": {
                        "name": "Playlist Testing 1",
                        "description": "Testing playlist creation"
                    }
                },
                {
                    "_index": "playlists",
                    "_type": "playlist",
                    "_id": "LcO2TmoBPRnACkY3YdHt",
                    "_score": 1,
                    "_source": {
                        "name": "Playlist Testing 1",
                        "description": "Testing playlist creation"
                    }
                },
                {
                    "_index": "playlists",
                    "_type": "playlist",
                    "_id": "LsO2TmoBPRnACkY38tEr",
                    "_score": 1,
                    "_source": {
                        "name": "Playlist Testing 1",
                        "description": "Testing playlist creation"
                    }
                },
                {
                    "_index": "playlists",
                    "_type": "playlist",
                    "_id": "tmp0UGoBA5J2LE2CQWue",
                    "_score": 1,
                    "_source": {
                        "name": "Testing YAMA",
                        "description": "Testing Yama description"
                    }
                },
                {
                    "_index": "playlists",
                    "_type": "playlist",
                    "_id": "t2qLUGoBA5J2LE2CWmvX",
                    "_score": 1,
                    "_source": {
                        "name": "xpto",
                        "description": "something"
                    }
                },
                {
                    "_index": "playlists",
                    "_type": "playlist",
                    "_id": "uGqMUGoBA5J2LE2Cu2vu",
                    "_score": 1,
                    "_source": {
                        "name": "xpto",
                        "description": "something"
                    }
                },
                {
                    "_index": "playlists",
                    "_type": "playlist",
                    "_id": "uWqOUGoBA5J2LE2CNmst",
                    "_score": 1,
                    "_source": {
                        "name": "xpto",
                        "description": "something"
                    }
                },
                {
                    "_index": "playlists",
                    "_type": "playlist",
                    "_id": "umqOUGoBA5J2LE2C-GtI",
                    "_score": 1,
                    "_source": {
                        "name": "xpto",
                        "description": "something"
                    }
                }
            ]
        }
    })

    map.set(endpoints.getPlaylistEndpoint('1kYqrWoB878KWpggjkcH'), {
        "_index": "playlists",
        "_type": "playlist",
        "_id": "1kYqrWoB878KWpggjkcH",
        "_version": 7,
        "_seq_no": 47,
        "_primary_term": 5,
        "found": true,
        "_source": {
            "name": "Testing 101",
            "description": "Testing description 101"
        }
    })

    map.set(endpoints.getTracksListEndpoint('1kYqrWoB878KWpggjkcH'), {
        "_index": "tracks",
        "_type": "track",
        "_id": "1kYqrWoB878KWpggjkcH",
        "_version": 1,
        "_seq_no": 58,
        "_primary_term": 5,
        "found": true,
        "_source": {
            "tracks": [
                {
                    "name": "Swagger Jagger (Hygrade Radio Mix)",
                    "url": "https://www.last.fm/music/Cher+Lloyd/_/Swagger+Jagger+(Hygrade+Radio+Mix)",
                    "duration": "212",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    }
                },
                {
                    "name": "Swagger Jagger (Wideboys Radio Edit)",
                    "url": "https://www.last.fm/music/Cher+Lloyd/_/Swagger+Jagger+(Wideboys+Radio+Edit)",
                    "duration": "184",
                    "artist": {
                        "name": "Cher Lloyd",
                        "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                        "url": "https://www.last.fm/music/Cher+Lloyd"
                    }
                }
            ]
        }
    })

    map.set(endpoints.updatePlaylistEndpoint('1kYqrWoB878KWpggjkcH'),{
        "tracks": [
            {
                "name": "Swagger Jagger (Hygrade Radio Mix)",
                "url": "https://www.last.fm/music/Cher+Lloyd/_/Swagger+Jagger+(Hygrade+Radio+Mix)",
                "duration": "212",
                "artist": {
                    "name": "Cher Lloyd",
                    "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                    "url": "https://www.last.fm/music/Cher+Lloyd"
                }
            },
            {
                "name": "Swagger Jagger (Wideboys Radio Edit)",
                "url": "https://www.last.fm/music/Cher+Lloyd/_/Swagger+Jagger+(Wideboys+Radio+Edit)",
                "duration": "184",
                "artist": {
                    "name": "Cher Lloyd",
                    "mbid": "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
                    "url": "https://www.last.fm/music/Cher+Lloyd"
                }
            }
        ]
    })

    function getMockResult(endpoint) {
        return map.get(endpoint)
    }

    return {
        map: getMockResult
    }
}