// Using component composition for escaping or eleminating  prop driling problem
const Main = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default Main;
