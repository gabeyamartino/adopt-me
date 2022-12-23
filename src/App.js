const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
}

const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "Adopt Me V8"),
      React.createElement(Pet, {
        animal: "Cat",
        name: "Hazel",
        breed: "Monster"
      }),
      React.createElement(Pet, {
        animal: "Horse",
        name: "Roach",
        breed: "Mare"
      }),
      React.createElement(Pet, {

          animal: "Dog",
          name: "Ochi",
          breed: "Mut"

      }),
    ]
  )
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));