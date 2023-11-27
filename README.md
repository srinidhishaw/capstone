# Project Title
Service Dog
## Overview

What is your app? Brief description in a couple of sentences.

My app is meant to help individuals with one or many mental health diagnoses identify what they are struggling with that may be associated with their illnesses, why they are experiencing that, and how they can manage or solve that difficulty. 
### Problem

Why is your app needed? Background information around any pain points or other reasons.

The reason why it is called Service Dog is that it is similar to having a Service Dog, for an illness like PTSD, for example, but on an app and making help more accessible to people who may not have the resources to care for a dog or therapy. Resources are greatly limited for mental health struggles that affect individuals' day to day activities, and often they do not have insight or awareness as to what they are struggling with and how to manage it. This app is there to make the process of regulation a bit easier and take some pressure off the individual.
### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.

Individuals with one or more mental health diagnoses (specifically ADHD, ASD, PTSD so far) will use it either on a computer or mobile phone.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

- Api that stores data abou 2-4 mental health conditions, along with the symptoms, difficulties, and solutions involved for each.
- The user can select their conditions and the difficulties they are dealing with that day on a form, and then the app will return the symptom they are experiencing, and a list of solutions that they can try to improve the situation, and an explanation of what they are experiencing.
- they will be able to log their symptoms from that day in a diary.

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.


- MySQL tables
- Node.js

### APIs

List any external sources of data that will be used in your app.

- Data pulled from chatGPT for the database

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

- HomePage: this has the form with a listing of the difficulties and conditions for the user to choose from
- Solutions Page: This is displayed when a response from the API is received and where the user will be redirected to read more info about what they are experiencing and potential solutions

- Diary page: This is where the user can access previous logs

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out. 

- The tables will be nested in this order for each condition:
Conditions--> Symptoms and Relevant Explanation--> Difficulties --> Solutions 

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.
- /conditions - gives a list of the conditions in the table e.g.:[{id:1,condition:ADHD},{id:2,condition:ASD}...]
- /conditions/:difficulty - retrives relevant information about the specified difficulty. e.g.: difficulty staying organised, symptom: executive dysfunction, condition:ADHD, solution:use a planner or use the Pomodoro method
- /diary - access the logs with a timestamp


### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

It is a possibility, however this will be decided upon time-permitting.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

Week 1:
Task 1: create the client and server file structures
Task 2: client side form
Task 3: set up the database
Task 4: seed basic starter data
Task 5: Set up routes

Week 2:
Task 6: Manage axios request for the data on the client side
Task 7: Display output to the user

Week 3:
Task 8: Create the diary file, write into it, and create the endpoint
Task 9: Create the diary on the client side
Task 10: Styling

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

User Authorisation and deployment.
ChatGPT chat option

***please use nodemon index.js to run the server side instead of node**
Instructions: 
- run npm i
- refer .env.sample
- npx knex migrate:latest
-npx knex seed:run

on client side:
- npm i
- npm start

*ensure your server is running