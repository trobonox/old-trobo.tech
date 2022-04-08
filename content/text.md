---
title: Test article
description: 'A test article to showcase the features of this blog.'
---

## Info about this Blog

As a lightweight and simple solution for my blog, I am using the Nuxt content module (`@nuxt/content`) and write the articles using mdx.

This implementation is very barebones, and the only thing i have added is a reading time estimate using the npm module `reading-time`.

Styling is done using TailwindCSS' typography plugin (`@tailwindcss/typography`) and some minor color tweaks to fit the color scheme better.

Down below you will see some examples of what can be done using mdx, and how it looks in my blog.

## HTML block below

<blockquote>
Pretend like this is some fancy and deep quote
</blockquote>

## Some enumeration

- topic content 1 [Reference](https://trobo.tech)
- something something
- more things!
- have some inline code: `pretend like this is some code`

## How about some code?

```js
export default {
  async asyncData({ $content, params }) {
    const articles = await $content()
      .only(['slug', 'title', 'description'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },
}
```

Fun fact: this is the code used to fetch the blog articles on the blog overview page.

## Tables?

| Feature     | Support |
| ----------- | ------- |
| tables      | ✔       |
| alignment   | ✔       |
| cool things | ✔       |

## And here's some closing words from our best friend Rick Astley:

We're no strangers to love <br>
You know the rules and so do I <br>
A full commitment's what I'm thinking of <br>
You wouldn't get this from any other guy <br>

I just wanna tell you how I'm feeling <br>
Gotta make you understand <br>

Never gonna give you up <br>
Never gonna let you down <br>
Never gonna run around and desert you <br>
Never gonna make you cry <br>
Never gonna say goodbye <br>
Never gonna tell a lie and hurt you <br>

😉😂
