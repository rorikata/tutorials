# Tutorial for Vue JS 2
## 07/19/2017

### What is vue.js?
- A front-end framework
- Create javascript drive web applications
- Runs in the browser
- No need to make multiple server requests for pages

### Why vue.js?
- Very lean (16kb)
- very high run-time perfoemance

### To do
- How to install vue.js the easy way
    - conditionals
    - events
    - data
- Install vue.js with the vue-cli and webpack
    - components
    - vue files & templates

### Requirements
- javascript
- HTML(& CSS)

## The Vue CLI
- Create a dev environment workflow with webpack
    - Use ES6 features
    - Compile & minify our JS into 1 files- Use single file templates
    - Compile everything on our machine, not in a browser
    - Live reload dev server

## Nesting components
Root Component  -   Header Component    -   Links Component
                |                       |-  Login Component
                |
                |-  Article Component                        
                |-  Footer Component

## Component Project
Root Component  -   Header Component    -   title
                |-  Footer Component    -   Copyright notice
                |-  Ninja Component     -   List of ninjas

## props

Root Component  -props(data)->  Header Component    -   Title
                 <-event-
                |
                |-props(data)-> Footer Component    -   Copyright notice
                |-              Ninja Component     -   List of ninjas  

## Route Params
    - localhost:8080/blog/123
    - localhost:8080/blog/500
    - localhost:8080/blog/:id -> Route Parameter
1. Set up a route:  { path: '/blog/:id', component: singleBlog }
2. In singleBlog component, detect route parameter and handle it -> make http request for correct resource
