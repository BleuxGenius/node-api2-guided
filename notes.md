Dont

-GET /list-routines
-Post /new-routines, /create-routine, /routines/new

Dont

-GET 

## Exercise Journal

- view list of `Journals`
- view a list of `Exercises`
- add a new Exercise
- view a list of `users` to follow
- view  a list of followers 
- register for an `account`
- login/ logout
- update my `profile`
- view a user's public profile
- view the exercises for a workouts
- view (GET) all workouts that include x => filter
- 

20 resources x 5 => 100 endpoints.

https://www.google.com/search
?
sxsrf=ACYBGNR7Vm0y-FzFRxyhTR4lQW4J0hqH_w%3A1581442803948&ei=8-ZCXtK8OZGisAXBgZLABA&q=Rest+api&oq=Rest+api&gs_l=psy-ab.3..0i67l2j0i131i67j0i67l2j0i131j0j0i131j0l2.17670.18821..19198...0.2..0.93.281.4......0....1..gws-wiz.......0i71j0i67i70i249.2WNOMzYMCpc&ved=0ahUKEwiSgr_EhcrnAhUREawKHcGABEgQ4dUDCAs&uact=5

## Resources 

- accounts/users => /api/users
- exercise => /api/exercises
    - create => POST /api/exercises
- routines => /api/routines
- workouts: a group of sets => /api/workouts
    - sets => /api/workouts:id
    - exercises => 
- splits
- sets: have reps => exercise
- muscle groups
- profiles <- same as account

Monday workouts

- 3 sets of 10 pushups
- 3 sets of 10 pull downs
- 3 sets of 10 sit ups

what ways of sending information from the client to the server have we seen so far ? 

- query string => `req.query`
- url parameters => `req.params`
- body =>  `req.body`
- headers => `req.headers`