# YAMA [PI-1819v-LI51N-G21]
Projecto da Unidade Curricular Programação na Internet (PI)

## YAMA API
Os *endpoints* estão agrupados nas seguintes categorias:
* Artists
* Playlists

***

## Artists
Estes *endpoints* são usados para obter informação sobre artista(s).

### GET /api/artists/search/:name
Pesquisa por artistas que contenham o nome *name*.

***Método HTTP:*** GET

***HTTP body:*** Vazio

***Parâmetros:***
* _:name_ - nome do artista a pesquisar

***Query String:***
* _page=[num] (opcional)_ - indica o número da página, valor por _default_: 1. 

***Retorna:*** Uma lista com todos os artistas que tenham *name* no nome.

_Pedido:_

`curl -X GET http://localhost:8080/api/artists/search/cher`

_Retorno:_

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
```

### GET /api/artists/:mbid/albums
Pesquisa por álbuns do artista com o id *mbid*.

***Método HTTP:*** GET

***HTTP body:*** Vazio

***Parâmetros:***
* _:mbid_ - id do artista a pesquisar

***Query String:***
* _page=[num] (opcional)_ - indica o número da página, valor por _default_: 1 . 

***Retorna:*** Uma lista com todos os álbuns do artista com o id *mbid*.

_Pedido:_

`curl -X GET http://localhost:8080/api/artists/bfcc6d75-a6a5-4bc6-8282-47aec8531818/albums`

_Retorno:_
```json
[
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
        "images": []
    }
]
```

### GET /api/artists/albums/:mbid
Pesquisa pelas músicas que compõem o álbum com o id *mbid*.

***Método HTTP:*** GET

***HTTP body:*** Vazio

***Parâmetros:***
* _:mbid_ - id do album a pesquisar

***Query String:*** Nenhum

***Retorna:*** A informação do álbum identificado por *mbid*, incluindo a lista de músicas que o constituem.

_Pedido:_

`curl -X GET http://localhost:8080/api/artists/albums/63b3a8ca-26f2-4e2b-b867-647a6ec2bebd`

_Retorno:_

```json
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
        }
    ]
}
```

## Playlists
Estes *endpoints* são usados para criar, pesquisar e editar _playlists_ e as suas músicas.

### POST /api/playlists
Cria uma _playlist_.

***Método HTTP:*** POST

***HTTP body:*** 
* _"name"_ - nome da nova _playlist_
* _"description"_ - descrição da nova _playlist_

***Parâmetros:*** Nenhum

***Query String:*** Nenhum

***Retorna:*** A informação da nova _playlist_, incluindo id, nome, descrição e a lista de músicas que a compõem.

_Pedido:_

`curl -X POST http://localhost:8080/api/playlists`

_Body do Pedido:_

```json
{
	"name": "Testing YAMA",
	"description": "Testing Yama description"
}
```

_Retorno:_

```json
{
    "id": "LdFCUWoBX2Y_7Bc7Ivsq",
    "name": "Testing YAMA",
    "description": "Testing Yama description",
    "tracks": []
}
```

### PUT /api/playlists/:playlistId
Alterar o nome e/ou a descrição da _playlist_ com o id _playlistId_.

***Método HTTP:*** PUT

***HTTP body:*** 
* _"name"_ - nome da nova _playlist_
* _"description"_ - descrição da nova _playlist_

***Parâmetros:*** 
* _:playlistId_ - id da _playlist_ a actualizar

***Query String:*** Nenhum

***Retorna:*** A informação da nova _playlist_, incluindo id, nome, descrição e a lista de músicas que a compõem.

_Pedido:_

`curl -X PUT http://localhost:8080/api/playlists/LdFCUWoBX2Y_7Bc7Ivsq`

_Body do Pedido:_

```json
{
	"name": "Testing Something",
	"description": "Testing Something Description"
}
```

_Retorno:_

```json
{
    "id": "LdFCUWoBX2Y_7Bc7Ivsq",
    "name": "Testing Something",
    "description": "Testing Something Description",
    "tracks": []
}
```

### DELETE /api/playlists/:playlistId
Eliminar a _playlist_ com o id _playlistId_.

***Método HTTP:*** DELETE

***HTTP body:*** Vazio

***Parâmetros:*** 
* _:playlistId_ - id da _playlist_ a eliminar

***Query String:*** Nenhum

***Retorna:*** A lista de músicas da _playlist_ eliminada.

_Pedido:_

`curl -X DELETE http://localhost:8080/playlists/LdFCUWoBX2Y_7Bc7Ivsq`

_Retorno:_

```json
{
    "tracks": []
}
```

### GET /api/playlists
Listar todas as _playlists_.

***Método HTTP:*** GET

***HTTP body:*** Vazio

***Parâmetros:*** Nenhum

***Query String:*** Nenhum

***Retorna:*** Uma lista com todas as _playlists_, incluindo a sua informação básica: id, nome, descrição e a lista de músicas.

_Pedido:_

`curl -X GET http://localhost:8080/api/playlists`

_Retorno:_

```json
[
    {
        "id": "LdFCUWoBX2Y_7Bc7Ivsq",
        "name": "Testing Something",
        "description": "Testing Something Description",
        "tracks": []
    }
]
```

### GET /api/playlists/:playlistId
Apresenta a informação detalhada da _playlist_ com o id _playlistId_.

***Método HTTP:*** GET

***HTTP body:*** Vazio

***Parâmetros:*** 
* _:playlistId_ - id da _playlist_ a apresentar

***Query String:*** Nenhum

***Retorna:*** A informação da nova _playlist_, incluindo id, nome, descrição e a lista de músicas que a compõem.

_Pedido:_

`curl -X GET http://localhost:8080/api/playlists/LdFCUWoBX2Y_7Bc7Ivsq`

_Retorno:_

```json
{
    "id": "LdFCUWoBX2Y_7Bc7Ivsq",
    "name": "Testing Something",
    "description": "Testing Something Description",
    "tracks": [],
    "totalDuration": 0
}
```

### PUT /api/playlists/:playlistId/track
Adiciona uma ou várias músicas à _playlist_ com o id _playlistId_.

***Método HTTP:*** PUT

***HTTP body:*** 
* _lista de músicas_ - lista de músicas a serem adicionadas à _playlist_

***Parâmetros:*** 
* _:playlistId_ - id da _playlist_ a actualizar

***Query String:*** Nenhum

***Retorna:*** A lista de músicas adicionadas à _playlist_.

_Pedido:_

`curl -X PUT http://localhost:8080/api/playlists/LdFCUWoBX2Y_7Bc7Ivsq/track`

_Body do Pedido:_

```json
{
    "tracks":
        [
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
```

_Retorno:_

```json
[
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
```

### DELETE /api/playlists/:playlistId/track
Remover uma ou várias músicas da _playlist_ com o id _playlistId_.

***Método HTTP:*** DELELE

***HTTP body:*** 
* _lista de músicas_ - lista de músicas a serem removidas da _playlist_

***Parâmetros:*** 
* _:playlistId_ - id da _playlist_ a actualizar

***Query String:*** Nenhum

***Retorna:*** A lista de músicas removidas da _playlist_.

_Pedido:_

`curl -X DELETE http://localhost:8080/api/playlists/LdFCUWoBX2Y_7Bc7Ivsq/track`

_Body do Pedido:_

```json
[
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
```

_Retorno:_

```json
[
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
```
