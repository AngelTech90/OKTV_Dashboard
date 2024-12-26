# App component

## Introduction:

App component works as the <b>Main renderer</b> of our app, we'll import all our components there and other several <b>ES modules</b> that will works as <b>dependecies</b>, and we'll <b>route</b> this component to all our <b>Application pages</b>


## Required dependencies and ES modules:

### react-router-dom depedencie:
This dependencie works as a **router** that will **connect in our App.jsx component** all our application pages, and then we can access to that pages with low troubles

### BrowserRouter module:
This module make the function of encapsulate the main **App.jsx component** that will create a place where we can connect several routes for make easier work with pages.

#### Routes module:
This module is the **parent component** for other **routes components** that we’ll connect to page, this means that is a **container of routes for our app views (pages)**.

#### Route module:
This module work as **child components** this means that that are the **pages routed** in our **App.jsx file** so this **don’t mean that pages will be rendered, but yes that is possible enter as a link.**

#### Usage of react-router-dom:
We manage our app dependency as **ES module** that contains **web components** and we use that components for **insert in our App several pages** and when we insert our **pages** as **components** and when our components are connected we can set it a **route and the element (component) that is contained in that route**.

So with this we have an easy way of understand our **components and routes** this make easier render several pages of our page as we want, and it can **scales**  and be connected in several pages our sites in our app. ****

```javascript 
//App.jsx file

//First we will import react-router-dom modules:
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Then we add our pages as components:
import {Home, About, News}

//Then we consume and use modules as components in our app
export default App(){

	return{
		<div>
			<BrowserRouter>
				<Routes>
					<Route path = '/home' element={<Home />}/>
					<Route path = '/about' element={<About />}/>
					<Route path = '/news' element={<News />}/>
				</Routes>
			<BrowserRouter/>
		</div>
	}
}

```

#