// Using component composition for escaping or eleminating  prop driling problem
const Navbar = ({ children }) => {
  return <nav className="nav-bar">{children}</nav>;
};

export default Navbar;
