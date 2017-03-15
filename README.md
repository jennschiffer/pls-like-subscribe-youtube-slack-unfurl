# Jenn's Remix of the Glitch Unfurling App
This project demonstrates how to build an app unfurling app using Slack's Events API and new chat unfurl endpoint! Jenn remixed and built this live on March 15, 2017. We have fun.

## Jenn Talks...
Originally this app unfurled Glitch project links, which you can see at [solid-tugboat.glitch.me](https://solid-tugboat.glitch.me).

For this app, I'm going to keep the datastore, oauthd, and most of the tinyspeck library stuff intact, because they drive the installation and token parts of the app that are required to work. The unfurling (cool stuff) actually happens in index.js. I'm going to document my steps in this file.

1. Update readme with charming banter about what I'm doing ✅
2. Remove all the Glitch-related code from the app ✅ (I think, haven't tested)

Okay, so this app isn't going to do anything because there are 2 "environments" for developing Slack apps - the code (this app) and the Slack app management ui. I have a long but important set of instructions on how to set your app up in SETUP.md.

3. Update SETUP.md with new links and give time for folks watching to read! ✅
  
  Aside: when setting up the app on the Slack API site, the link_shared event subscription opens up a section to add "App Unfurls Domains." You can add up to 5 domains to trigger unfurling - and they can be literally any domain, they don't have to be yours.
  I was thinking when I first heard about this feature about an unfurling app that takes nay Amazon links and adds my affiliate code to them as a cool get rich quick scheme. Also something that makes Hacker News links unfurl to, like, a gif of a cat crying.
  Anyway welcome to my blog. I'm going to make this app unfurl youtube links and all it's going to say is "PLS LIKE + SUBSCRIBE" because that's p simple and clean to do yes? Sure.
  
4. Update the landing page HTML, which is what shows up when anyone goes to [violet-vulture.glitch.me](https://violet-vulture.glitch.me) ✅

NOTE: one cool thing about Glitch is that you can let others join your project and collaborate with you. I will not be letting folks join this because this is

`~~* the jenn show *~~`

5. Install the app via the landing page and see if it works on your team!

  If you've gotten through SETUP.md you should have your app that doesn't do
much of anything set up on your team. You can test this by posting a link from
a domain you listed in the previous step. I'm going to test it out on my team
now. Also - you can click "Logs" in the Glitch sidebar to see your Activity Log
wowowowow. I like to add a lot of console logs to test stuff. ✅

![](https://cdn.glitch.com/efc7f788-41d4-4404-bcb5-2dbc8e412bca%2FScreen%20Shot%202017-03-15%20at%203.55.32%20PM.png?1489607752869)

6. Finalize what you want your unfurl to look like and have! ✅

Now that the link unfurling is working, we can finalize the unfurl to say
what we want or have images. The unfurl object is just a Slack attachment,
where you can set the border color, a thumbnail, an image, etc. You can read
the docs here: [api.slack.com/docs/message-attachments](https://api.slack.com/docs/message-attachments)

7. Revel in your extremely hot and smart unfurling app! ✅

![](https://cdn.glitch.com/efc7f788-41d4-4404-bcb5-2dbc8e412bca%2FScreen%20Shot%202017-03-15%20at%204.02.27%20PM.png?1489608160238)

Thanks for joining me in this adventure. If you made something cool, let me know by tweeting at [@glitch](https://twitter.com/glitch). 

PLS LIKE + SUBSCRIBE!
xoxo j$
