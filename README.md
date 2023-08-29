# movie-node-api
This is Movies Open API

# Description
This api is created using nodejs, expressjs,mongodb.

## Methods
### GET
It gives the total list of the movies in database \
url - https://movie-api-j42t.onrender.com/api/v1/movies

### POST
To add movies to the database from body.\
{name:"moviename",description:"about the movie",rating:3.4} \
url - https://movie-api-j42t.onrender.com/api/v1/movies

### PUT
To update a movie details in database from body with movie id in url. \
{name:"newname",description:"update about the movie",rating:4} \
id in url is dynamic. \
url - https://movie-api-j42t.onrender.com/api/v1/movies/{id}

### GET
It gives the particular movie in database by passing id of the movie from url. \
id in url is dynamic. \
url - https://movie-api-j42t.onrender.com/api/v1/movies/{id}

### DELETE
It delete the particular movie in database by passing id of the movie from url. \
id in url is dynamic. \
url - https://movie-api-j42t.onrender.com/api/v1/movies/{id}

# NOTE
is there any problem mention it
# Author
©Hemanth Kumar

