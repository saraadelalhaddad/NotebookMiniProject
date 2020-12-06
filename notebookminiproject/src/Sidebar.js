import { bubble as Menu } from "react-burger-menu";
import AddButton from "./Buttons/AddButton";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <Menu>
        <a className="menu-item" href="/"></a>
        <a className="menu-item" href="/math">
          Math
        </a>
        <a className="menu-item" href="/scinace">
          Science
        </a>
        <a className="menu-item" href="/arabic">
          Arabic
        </a>
        <a className="menu-item" href="/language">
          Language Art
        </a>
        <a className="menu-item" href="/socialstudu">
          Social Study
        </a>
      </Menu>
      <AddButton />
    </>
  );
};

export default Sidebar;
