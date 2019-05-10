# glowpro

## Google+StackOverflow like a Pro

Software development is 99% using Google+StackOverflow. Let's speed that up.

It uses complex machine learning algorithms to figure out what you are looking for (thanks to Google Search) and the vast knowledge of the software development community (that's the StackOverflow bit) to give you fast answers for your coding questions.

Works well for anything you expect to find a snippet on stackoverflow.

## Installation

```
npm i -g glowpro
```

## Usage

```
glowpro <something something something>
```

## Examples

### Outputting code

```
$ glowpro how to reverse an array in JS
var a = [3,5,7,8];
a.reverse(); // 8 7 5 3
```

### Straight into your clipboard

```
$ glowpro flexbox align center | pbcopy
```

### No need to remember things anymore!

```
$ `glowpro install brew`
```

## FAQ

### What does it do ?

A Google Search for your query filtering for stackoverflow.com, goes there, selects the first code block and prints it. Hopefully it will be from the accepted answer. We drop the complex machine learning jargon on the description to make it sound cool but the code is still [very simple to read](/blob/master/index.js) ;)

### Why is it so slow ?

I'd like to see you opening a browser typing google.com clicking on the first stackoverflow answer going there and copying the first code block faster than this :P.

### Can it be sped up ?

Yes, probably swapping puppeteer for request+cheerio. That will be v1.1.