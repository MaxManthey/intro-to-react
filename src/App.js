const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Cavapoo",
    }),
    React.createElement(Pet, {
      name: "Findus",
      animal: "Cat",
      breed: "Black Cat",
    }),
    React.createElement(Pet, {
      name: "Sleepy",
      animal: "Rabbit",
      breed: "idk",
    })
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
