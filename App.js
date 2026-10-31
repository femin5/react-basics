       import React from "react";
       import ReactDOM from "react-dom/client";
       import logo from "./public/ubereats.png";
       import "./index.css";
       /*
       *header-
       * -logo
       * -Nav items
       * Body-
       * -search
       * -restaurent-cards
       * Footer-
       * -copyrights
       * -links
       * -about
       */

       // Header Component
       const Header=()=>{
              return (<div className="header">
                     <div className="logo-container">
                     <img className="logo" src={logo} alt="Uber Eats Logo" />                  
                     </div>
                     <div className="nav-items">
                            <ul>
                                   <li>Home</li>
                                   <li>About Us </li>
                                   <li>Carts</li>
                            </ul>
                     </div>
                            
              </div>
              
              )
       }
       // Main Component
      const App=()=>{
       return(
        <div className="App">
              <Header />
        </div>
       )
      }
      const root=ReactDOM.createRoot(document.getElementById("root"))
      root.render(<App />)

// import React from "react";
// import ReactDOM from "react-dom/client";

// // Nested HTML structure
// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     [
//         React.createElement(
//             "div",
//             { id: "child1", key: "child1" },
//             [
//                 React.createElement(
//                     "h1",
//                     { id: "heading1", key: "heading1" },
//                     "hello new react"
//                 ),
//                 React.createElement(
//                     "h2",
//                     { id: "heading2", key: "heading2" },
//                     "hello new1 react"
//                 )
//             ]
//         ),

//         React.createElement(
//             "div",
//             { id: "child2", key: "child2" },
//             [
//                 React.createElement(
//                     "h1",
//                     { id: "heading3", key: "heading3" },
//                     "hello new react"
//                 ),
//                 React.createElement(
//                     "h2",
//                     { id: "heading4", key: "heading4" },
//                     "hello new2 react"
//                 )
//             ]
//         )
//     ]
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);



// Creating react element
// // React Element => object => HTML element (when we render onto DOM)
//   const heading=React.createElement("h1",{id:"heading"},"welcome")//created an object
//   const root =ReactDOM.createRoot(document.getElementById("root"))
//   root.render(heading)//when we doing render converts into html element and push it to the browser
//   //and whatever inside ther in the root before it will replaced by this code

//creating element using jsx 
//jsx makes react element create easly
//how these code will run js it is jsx it bcz it transpile before it reaching to js engine .reactDOM doesnt understand this code so before reaching it there it transpiles it like before reaching render so its done by babel
// const heading=<h1>welcome</h1> // this is note html inside js it is jsx (jsx is html like or xml likesyntax)
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
