# MentiSpam
### A stupidly simple mentimeter like spam script

### Usage
example usage:
```
node index.js https://www.menti.com/... -t 500 -r 5 -e thumbsup -a 3
```
Commands:
```
node index.js [url] -t [timeout] -c [color] -r [repeat] -v [vote key] -a [amount] -e [emoji]

  url
    Set the url to make the requests to

  -v  vote_key[string]
    Set the vote key
    default: null

  -t  timeout[int]
    Set the time between each request
    default: 50

  -c  color[int]
    Set the color of the emoji (colors 0 through 7)
    default: randomize each request

  -r  repeat[int]
    Set how many requests to make
    default: 500

  -a  amount[int]
    Set how many likes to send per request
    (You can play with this, but i've found that the best is between 1 and 3)
    default: 3

  -e  emoji[string]
    Set the emoji
    options: [
      thumbsup
    ]
    default: thumbsup

```