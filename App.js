const parent = React.createElement(
    "div",
    { id: "parent" },
[    React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I Am A h1 Tag"),
    React.createElement("h2", {}, "I Am A h2 Tag")]
),    React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h3", {}, "I Am A h1 Tag"),
    React.createElement("h4", {}, "I Am A h2 Tag")]
)]
);


// const heading = React.createElement("h2" , {id: "heading", xyz: "abc"}  ," Vikas Trivedi");

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);