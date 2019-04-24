# YAMA [PI-1819v-LI51N-G21]
Projecto da Unidade Curricular Programação na Internet (PI)


## YAMA API
Os *endpoints* estão agrupados nas seguintes categorias:
* Artists
* Albums
* Playlist

***

## Artists
Estes *endpoints* podem ser usados para obter informação sobre artista(s).

### /artists/search/:name
Retorna uma lista de artistas que contenham o nome *name*.

***Método HTTP:*** GET

***HTTP body:*** Not used

***Parâmetros:***
* _:name_ - nome do artista a pesquisar

***Retorna:*** Uma lista com todos os artistas que tenham *name* no nome.

_Exemplo:_

`curl -X GET http://localhost:8080/artists/search/cher`

```json
[
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
        "images": []
    }
]
