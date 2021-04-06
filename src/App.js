import React from 'react'
import Hero from './Hero';
import FullCard from './FullCard';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css'


const App = () => {
 const data  = [
     {
         title:"Nexia",
         description:"This is Nexia_3"
     },
     {
        title:"Spark",
        description:"This is Spark"
    },
    {
        title:"Malibu",
        description:"This is Malibu"
    },
    {
        title:"Damas",
        description:"This is Damas"
    },
    {
        title:"Matiz",
        description:"This is Matiz"
    },
    {
        title:"Tico",
        description:"This is Tico"
    },
 ]

    return (
       <Router>
           <Route exact path="/">
               <Hero data={data} />
           </Route>
           <Route  path="/cards/:title">
               <FullCard data={data} />
           </Route>
       </Router>
    )
}

export default App
