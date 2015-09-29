# Mirror App

<img src="https://dl.dropboxusercontent.com/u/44051798/IMG_0060.JPG" width="600">

A little while ago I came across this <a href="https://github.com/HannahMitt/HomeMirror" target="_blank">excellent project</a> by @HannahMitt, explaining how she created a mirror powered by an Android application.

I wanted to recreate her great work in JavaScript to test myself and see how quickly I could create something similar. The first version of the app only took a couple of hours thanks largely to <a href="http://ionicframework.com/" target="_blank">Ionic Framework</a> &amp; <a href="https://www.firebase.com/" target="_blank">Firebase</a>, but I wasn't satisfied.

My main problem was mirrors aren't exactly an ideal input device, and I wanted to be able to customize what displays so it's always useful and relevant, so I decided to spin up a simple node server using <a href="http://sailsjs.org/" target="_blank">SailsJS</a>. Even though Sails is a bit overkill for what I'm doing here, it came with an awesome ORM, simple configuration and sockets out of the box, leaving me to spend more time doing the fun stuff. Perfect.

So how does it all come together? You throw up the server, point the app to it, load the app on your tablet and your phone (wait whaaaaaaaat) and go. Thanks to the magic of sockets, as you update the dashboard on your phone, it automatically updated on the mirror. I'll try and nurture this interaction as I create more components (a button on your phone let's you take a picture using the tablets camera etc).

**PS - This is just a fun (an ongoing) experiment. It's no way near "production ready".**

## Install It
---
1. Node v0.12.7+
2. SailsJS ~v0.11.0
3. Ionic
4. To put the app on your phone/tablet, you're going to need some platform specific stuff. I won't go in to detail about that here, but definitely check out <a href="http://ionicframework.com/getting-started/" target="_blank">Ionic's documentation</a>.

## Run it
---
1. Clone this repo
2. Go in to the server folder, and run `sails lift` (the server defaults to port 3000, you can update that in the config)
3. Go in to the app folder and open app.js, update the `apiUrl` to your server address (if you haven't changed any config, you shouldn't have to do this. You may need to update the IP if you're not running the server locally).
4. Import the project in to xcode/android studio and run.

*As Hannah mentions in her write up, you should set your tablets screen to never dim or turn off.*

**If any of this doesn't make sense, <a href="http://twitter.com/shalotelli" target="_blank">tweet me!</a>

## Make it
---
### Materials
- **Get a device**
  - If you have an old device, perfect. If not, <a href="http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=android+tablet" target="_blank">Amazon</a> has some great, affordable devices. I went with <a href="http://www.amazon.com/gp/product/B013ZIJ94G" target="_blank">this one</a>, although with hind sight I probably would have spent a little more for a device with a better screen.
- **Get a two-way mirror**
  - Hannah created a useful wiki page where she lists places to buy two-way mirrors. You can see it here <a href="https://github.com/HannahMitt/HomeMirror/wiki/Places-to-buy-a-two-way-mirror" target="_blank">https://github.com/HannahMitt/HomeMirror/wiki/Places-to-buy-a-two-way-mirror</a>. I used <a href="http://www.tapplastics.com/product/plastics/cut_to_size_plastic/two_way_mirrored_acrylic/558" target="_blank">TAP Plastics</a> and got a 16" x 9" mirrored acrlyic sheet.
- **Get some backing paper &amp; glue**
  - I went and got some black construction paper to cover the back of the mirror, and used a crafting knife to cut a hole the size of my tablets screen.
- **Either something sticky to attach the device to the mirror, or some material for a pouch**
  - So here's where it got interesting. I wanted to attach the device in a way that let's me take it off if I want to update the app etc, so sticking it permanently to the mirror wasn't an option.
  - My first idea was to get use velcro, but when I pulled the device off, the backing paper came off with it. Fail.
  - I'm currently in the process of trial &amp; error, my latest idea is to create a pouch that the tablet can slide in and out of. I'll post an update as soon as I have one.

### Instructions
#### 1. Attach backing
- Hannah explains it best so i'll go ahead and paste what she said below.
  - *Cut a piece of black backing the same size as your mirror*
  - *Decide where you want your device to show through. We did upper right. Leave a border all the way around for adhesive.*
  - *At that location, carefully cut a hole in the backing the same size as your device*
  - *CAREFULLY glue the backing to the mirror. We used spray adhesive, and practiced how we would pick it up and lay it on the mirror a couple times before going for it. We also wore black surgical gloves.*

<img src="https://dl.dropboxusercontent.com/u/44051798/FullSizeRender.jpg" width="600">

#### 2. Attach device
- First things first, fire up the app on the device. As mentioned above, I'm still testing different ways to attach the device to the mirror. Be inventive, i'd love to see what you come up with! I'll post an update as soon as I have something that works.

#### 3. Stick the mirror to the wall
- Althought I haven't got to this yet, Hannah has some great tips. She recommends getting a long usb cable so the device doesn't die. Also, you probably want the mirror near an outlet (d'uh!).

## Use It
---
- [x] Date
- [x] Time
- [ ] Weather
- [ ] News
- [ ] To Do List
- [ ] Calendar
- [ ] *Suggestions? <a href="http://twitter.com/shalotelli" target="_blank">tweet me!</a>*

<img src="https://dl.dropboxusercontent.com/u/44051798/IMG_0057.JPG" width="600">

## Improve it
---
- Mirror selfies (!!)
- Video calling (get a second opinion on our outfit... heh)
- Facial tracking using <a href="http://trackingjs.com/" target="_blank">tracking.js</a>

# Feedback?
---
I totally encourage feedback, send it to my twitter <a href="http://twitter.com/shalotelli" target="_blank">@shalotelli</a> or open an issue.

# Shout out
---
<a href="https://twitter.com/hannahmitt" target="_blank">Hannah</a>, thanks for the inspiration!
