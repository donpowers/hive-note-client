
[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Hive Notes Client https://donpowers.github.io/hive-note-client/
Repo: https://github.com/donpowers/hive-note-client
Repo:https://github.com/donpowers/hive-note-api

Technical Requirements

Build a full-stack application by making your own backend and your own front-end
Have an API of your design
Any data that can be updated or deleted must be user owned and protected.
Have an interactive front-end
Be a complete product, which most likely means multiple relationships and
CRUD functionality for at least a couple models
Use a database, whether that's one we've covered in class or one you want to learn
Implement thoughtful user stories that are significant enough to help you know
which features to build and which to scrap
Have a visually impressive design to kick your portfolio up a notch and have
something to wow future clients and employers
Be deployed online so it's publicly accessible
Not have any obvious user facing errors.

Objectives

A working API, hosted somewhere on the internet
A working client app, hosted somewhere on the internet that consumes your API
A link to your hosted working app in the URL section of your Github repo
A git repository hosted on Github, with a link to your hosted project

Requirements

##App Description

This app is intended to be used by someone who keeps bees.  A beekeeper will
inspect a hive on a regular basis during the management season (April through Ocotber)
During this inspection process the beekeeper will make observations. These
'notes' will be recorded in this app. A calendar feature is provided that allows
the user to track a future task.

Screen Shot Deployed App
![Alt text](/assets/images/HiveNoteScreenShot.png?raw=true "Hive Notes Screen Shot”)

Wireframe of front end. http://i.imgur.com/tJLH3en.jpg

##User stories

The user: beekeeper who wants to manage their hives online.

1. Story: As a User, I want to create a hive(name), So that I can add notes to it.
2. Story: As a User, I want to enter a date of my inspection, So that I can
   track what I observed on that date
3. Story: As a User, I want to record notes from my inspection, So that I can
   review them at a future time.
4. Story: As a User, I want add a task date, So that I can know when I need to
   perform a management task
5. Story: As a User, I want add a task descprition, So that I can know what I
   need to do for the management task.
6. Story: As a User, I want to update the status of the task, So that I can know
   when the task is complete.
7. Story: As a User, I want to know the status of a future task, So that I don't
   forget to perform the task on time.


##Wireframes
The initial wireframe mockup of a potential site design is located here
http://i.imgur.com/tJLH3en.jpg

##Data Model(ERD)
http://i.imgur.com/FqC1QVk.png

##Technologies Used
HTML, CSS, JavaScript, jQuery, Bootstrap, Handlebars, AJAX, Ruby Rails

##Project approach

1. Identify what is needed for Minimum Viable Product or MVP. The goal is have
a product with the minimal features, so that users feedback can be received
early, allowing adjustments to be made, with minimal work upfront.
2. Determine what DB tables are required and relationships
3. Build MVP UI for sign up/in/out/password
4. Build out rails scaffold for tables to support features.
5. Implement routes and controllers along with curl scripts for support features.
6. Add 'current_user' support.
7. Build custom route(return those notes for the user logged in)
8. Build MVP UI for CRUD operations on notes.
9. Deploy repo's to production sites.
10. Refactor basic UI to improve appearance and error handling.
11. Implement a FE framework if time permits.

##Major Hurdles

I did the prework(ERD, Wireframes and User Stories) prior to start on Day 1.
I had planned on doing Ruby On Rails.  It was several weeks since I did any
rails, with mongo and other Front End frameworks introduced after Rails.
I was not prepared for how unfamiliar Rails was when I got started.  It took a
couple of hours to get in the 'Rails' way of things.  It all came together but
took a lot to remember the in/outs.  This took a good part of the first day.
Once it was complete it was rock solid.

The next 3 days was all Front End.  My goal was to see how much I could do in
day one to make the determination if I could use Angular. By end of day one I had
used up a lot of hours and still had several items for the CRUD to do. I made the
decision to pass on the Front End Framework and implement some UI features that
I had not implemented before, Nav Bar and a collapse list. Each of these
features took many hours to finally implement.  Some simple things like getting
a click on h4 tag took me several hours to figure out.  The root of the challenge
was using Handlebars and using jquery for events. Can't add the event handler
at start up for any elements that don't exist at that time, even when they
are h4 elements.  Need to use 'document', lesson learned the hard way.

I also spent time researching how to hide elements in a list.  I tried to use
JQueryUI but got errors on page load for items it failed to load or find. In the
end I used jquery toggle.  Even though these features seem trivial to the user
it was a huge hurdle to over come.
