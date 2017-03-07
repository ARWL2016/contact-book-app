####Including Foundation
- aliased inside webpack config 
- required in app.jsx
- imported in app.scss

###Issues / Notes  
####Programatic Links
- The method for programmatically clicking a link has changed between React Router v1 and v2. The transitionTo function has been deprecated. Now, we push the link (or the name of the link) on to `this.context.router`. Also, we declare a contextTypes object on the component (but underneath). See `ManageContactForm`. So this method is related to declaring a propTypes object. 
- In the official docs https://facebook.github.io/react/docs/context.html context is described as a way to pass data between components directly, with passing the props between each component. Is they global values? In any case, it is recommended not to use context but to use Redux instead. 

####CSS 
1. I haven't been able to load the toastr css file. In Cory House's course, he specifies a list of vendor css files in a gulpfile configuration object. In webpack, it is not clear how this works. Let's review what we know: 
2. Our own styles are contained in `app.scss`. This file is not linked to in `index.html` as in a traditional web app. It is required into `app.jsx` - the root of our component system. In other words, it is bundled by webpack. Because it is not javascript, it has to be included in the bundle via three loaders, sass, css and style. In addition to these modules, there is also a node-sass module (not sure about this one). The require statement is written with an aliased url defined in webpack.config. 
3. In Eames' Webpack course, the procedure is slightly different. A loader is defined in webpackconfig and the require statement just specifies the url. 
4. An alternative method is used for Foundation. Here, the module is imported into our app.scss file. So it is included in the module system via the system we described above. In addition, the foundation-sites scss folder is referenced in webpack under sassLoader. Lastly, a foundation() function is called in app.jsx. 

####CSS-Loader and Style-Loader
1. These have different functions. The css-loader allows webpack to import a css file into the module system. It injects it into the bundle as a string. 
2. However, webpack does not know how to process this css string. So style-loader processes the css string through a set of functions that will modify the index.html in the browser environment. In short, the css is injected into style tags in the head of index.html. 
3. This approach is unorthodox, and a separate css bundle may be a better approach.  

####Refactoring to a Functional component
- Use an arrow function and pass in props
- Lose the render function - just return the JSX 
- replace this.props with props.  