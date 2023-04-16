# JUNCTION TEAM MEET 

## Project Overview

This is a 10 hours coding assignment provided by Junction. The job is to create a working prototype of Junction's meeting featured based on provided UI wireframe. 

### Features successfully built (within the course of 10 hours): 
### Front-end: 
- Team browsing: the user should be able to scroll through all the teams
- Show more button: Expand the team information card to see more information
- Apply button: Allowing the user to send application by pressing the 'apply' button on the team information card
- Application view: After pressing on the apply button, the user will be taken to an APPLY view where they will be able to type in their "motivation letter" in a text field and press SEND. 
### Back-end: 
- GET /api/v1/teams to get all teams 
- GET /api/v1/teams/:id to get one team
- POST /api/v1/teams/apply/:id to send application to a team
### Testing: 
- Simple render test for the APPLY view (frontend)
- Mock test for route POST /teams/apply/:id to successfully send an application
### Good to note (within the scope of this application): 
- The application assumes the workflow where authencation has been in placed 
### Features unfinished:
- Filter: the user should be able to filter the teams based on roles and challenge 
- Team review application view
### Further improvements: 
- User authentication: user should be able to sign up/ login, create a profile and add their CV. Team members can log in to review applications
- Currently, the expand event triggers all the cards at the same time, this needs to be fixed 
- The data returned for the application information does not contain the team information (needs to check the populate method from backend) 

## Technology stacks 

### Frontend
- JavaScript 
- React
- MUI 

### Backend
- JavaScript
- NodeJS & ExpressJS
- Mongoose

### Testing
- Jest

## Running the app

After cloning the repository:

To start the server app locally: 
- Create a .env file at the root folder of /server according to the instructions

```bash
cd server & npm install & npm run dev
```
Then go to http://localhost:yourport and see the server. 

- To start the client app locally: 
```bash
cd client && npm install & npm start

```
- To run all tests (server)
```bash
cd server && npm test
```
- To run all tests (client)
```bash
cd client && npm test
```

## Project stucture 

### Client-side

```bash
|-- public
|-- src
    |-- components
    |-- config
    |-- hooks
    |-- pages
|-- App.css
|-- App.js
|-- index.css
|-- index.js
```

##### components
Contains all commonly shared UI components. All of them are functional components, and most of them are free of logic to ensure the reusalibility principle.

##### config
Contains the baseURL for all Axios requests. 

##### pages
Contains the main views of the application

##### hooks 
Contains reusable utility hooks 

### Server-side

```bash
|-- test
|-- .env
|-- package.json
|-- src
    |-- controllers
    |-- model
    |-- routes
    |-- services
|-- app.js
|-- server.js

```

##### models 
Contains all the MongoDB models 
##### controllers 
Contains all functions for APIs 
##### services 
Contains all functions that deal directly with DB
##### routes
Contains all routes created with ExpressRouter ˝



 







