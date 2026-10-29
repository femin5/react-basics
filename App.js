       //nested html structure
       const parent=React.createElement(
        "div",
        {id:"parent"},
       [React.createElement("div",{id:"child1"},
       [React.createElement("h1",{},"hello  new react"),
        React.createElement("h2",{},"hello  new1 react")])],
        [React.createElement("div",{id:"child2"},
       [React.createElement("h1",{},"hello  new react"),
        React.createElement("h2",{},"hello  new2 react")])]) 
       const root=ReactDOM.createRoot(document.getElementById("root"))
       root.render(parent)