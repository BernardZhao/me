---
title: "A new personal website"
description: "I finally got around to it."
date: 2020-07-27
---

Updating my personal site has been on my todo list for a long while, probably ever since I became comfortable with Vue in 2018. The big things I wanted to accomplish were to do everything custom, try out some new things like Tailwind and modern CMS systems, and have a blog I could post on. It ended up taking a long break from frontend development, the gradual maturation of static site renderers like Gridsome, and a literal quarantine before I got bored enough to finally give this a go.

## How it went

Other than the internal bikeshedding of what to actually have as content on the site, the process of building the site was easy. I was already somewhat familiar with Gridsome, and cloning a blog starter meant I didn't even have to set up the internal GraphQL queries myself. Most of the actual "coding" really just involved playing around with Tailwind classes and adding small easter eggs on the front page (try clicking on the quote). Maybe I will get around to adding something actually cool, but more on that later.

### Thoughts on Tailwind

As expected with a project involving mostly static content, most of my effort really went into making things look nice. Here are a few takeaways I had working with Tailwind:

- **Responsive design is easy**: This was the number one thing that I found nice about Tailwind. By responsive I mainly mean with respect to screen size, but even `hover` or the other psuedo classes made building reactive content super simple. Try changing the screen size here and on the home page.

- **Losing default styles is a tradeoff**: One of the hardest things for me to get initially was the loss of automatically styled and spaced `h1`, `a`, and other everyday HTML tags. I got around this by using a typography [plugin](https://tailwindcss-typography.netlify.app/) that I use it for all the extended text content on this site, and it seems to do its job okay - how does it look on your screen? That being said not having to worry about any tag having default spacing made making titles and cards much easier.

Overall the library was fun to use, and I can see now why it's been so hyped up over the last few years. There's some overhead with learning what the basic classes are, but I can see how it can be very powerful for people interested in creating their own sets of components.

### Some bullshit

No matter how simple of a project, I can never escape some ugly problem that has no real solution.

This time, it's an [issue](https://github.com/gridsome/gridsome/issues/292) in Gridsome that has yet to be addressed. The `<g-image>` optimized progressive image component that Gridsome includes doesn't yet support a dynamic `src` attribute, making the cycling of images like my portrait photos extremely cumbersome. Just look at this workaround:

```javascript
:src="require(`!!assets-loader?width=800&quality=100!@images/${portraits[portraits_counter]}`)"
```

This black magic required a Webpack alias to work, and I'm really not sure whats to blame out of the JS stack this doodoo was crafted out of.

## Next steps

Hopefully I'll eventually have something actually cool on the front page - things look pretty bare right now 😪

- **LastFM Integration**: I really want to include something on the front page of my website that shows what I've been listening to recently. I've been using LastFM more and more recently, and it seems like something like this would be using using their API. I can only hope they eventually have native Soundcloud scrobbling at some point.

- **GL Transitions**: I've been messing around with [gl-transitions](https://gl-transitions.com/), and using this to cycle my portraits could kill two birds in one stone by spicing up the site and also avoiding the g-image issues above. For a brief second it inspired me to think about my pixelsort project again, but sadly I haven't found a smart way yet to make pixelsorting a vectorizable process.

## _Future of the blog_

A blog like this is really something thats nice to have, rather than something necessarily important to posting content. Tech posts or personal thoughts could all fit on Medium or Substack and would be way easier for me to manage and promote. Those truths made me think about why I even go through all this trouble. I think the best reason I can come up with is that I would like my own website to be like my home. Visitors can come in and hear what I have to say, but also hopefully enjoy the curated environment and what it says about me. Whether this will be successful remains to be seen. Hopefully I'll have time to continue to post in the future, and I have yet to decide if I will do something more technical (CS262A Project?? 👀👀) or maybe about a hobby like billiards.

See y'all. Maybe next time I'll be writing from Forestry CMS instead of VSCode, and never touch this code again! Yeah no.

_**Special thanks to Ivy and Andy for making fun of my old website, making all of this possible.**_