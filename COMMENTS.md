## Some things I had to do consider in regard to API_KEY
You might have noticed that I've committed TMDB_API_KEY into the repo in ./api/.env file.  
This has been done intentionally just for the sake of the project to work as expected. 
I know that it's not allowed to do it the real project. There were several ways I could solve it:
1. Send API KEY in an email. - I don't like sending such information using mails, it can easily be ignored.
2. Code and decode the API key. - I was thinking about this way, however it would take me more time to finish the task since 
I had to write code/decode function etc. and I think it would be an overkill for such a task
and since I had to work after my current work, I didn't have much time for it, tbh.
3. Just leave it in the repo as is.

I think test assignments should be runnable with as less hassle as possible, 
at least this is what I would be waiting from a good candidate. 
So I've decided just to leave it in the repo.

In a real project I would've never done that, it would have been a part of secrets in the CI/CD pipelines, for example Jenkins.

## What would I improve given more time?
First of all, I would work more on frontend: 
add more features like favorites; add option for sorting; maybe added last watched movie/TV-show, etc.
and of course pagination. Also, I was thinking on switching to Material UI.

## Thoughts on some other things
One thing that bothered me the most is that it wasn't quite clear enough from the task 
how should I populate the DB. I could just commit moviedb.json with all the data inside it. But I thought
it would be too easy, so I've decided to quickly write a small import function that would populate
the DB on its own as soon as the backend service is started. This is why I had to commit API_KEY. 
There were export files on the TMDB API service that they provide
each day, however the amount of movies is around 1mln. It wasn't said in the task that I had to import all these 1mln records,
just some number of movies, so I've decided just to choose first 50. 