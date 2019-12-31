# vue-learn2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


Research items

Quick presentation or discussion on Framework purpose and fit for building app
Pros and cons for our use

Build a working single page app
Header
Run in Finesse (Engineering/Dev)
back button behavior
reload/refresh behavior
        May have issues with property input types on refresh (int becomes string) but can be handled with parse function at route definition.

resize browser issues

How the framework handles: 
    Left nav bar
    Right nav bar
    Headers
    Footers
    Central/main area
Different resolutions and DPI settings
        All of the above settings are CSS related and should be identical for all frameworks.  Should not be considered.

Maintain Navigation state: Open user profile, then return to previous view
IFrame compatibility
Conflicts with JQuery versions in finesse
        Vue has no direct dependency on jquery and can be used with vanilla java if needed.  

Client side validations

Demonstrate dynamic data updates (search results change, etc.)
All pages static mocked up views
How do they deploy in containers

Session concerns server-side
    Vue uses an add-on called vuex for state management

Session state in general
    Vue uses an add-on called vuex for state management

Demonstrate in IE11 & Chrome
Use APIs for dynamic data
No Service Broker or User profile needed.

development - multiple devs
maintenance 

Add ons
    Vuex for state managment
    Axios for promise based HTTP client
    Router for vue routing and navigation
    Vue developer plugin for Chrome - debugging tool specifically for use with Vue



    