console.log("App is starting...");
const parent = document.getElementById("container");
const root = ReactDOM.createRoot(parent);
const h2 = React.createElement("h2", {}, "Hello, React!");
const li1 = React.createElement("li1", {}, "java Programming");
const li2 = React.createElement("li2", {}, "C++ Programming");
const ul = React.createElement("ul", {}, li1, li2);
const div = React.createElement("div", {}, h2, ul,img);
root.render(div);