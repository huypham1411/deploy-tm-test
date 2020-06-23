import React from "react";
import { useDispatch } from "react-redux";
import "../../styles/components/Product/ProductList.css";
import { NavLink } from "react-router-dom";
import { filterChoose } from "../../action/sort-action";
import { pageReset } from "../../action/paginate";
function ProductList() {
  // const [appear,setAppear]=useState(false);
  const dispatch = useDispatch();
  const checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if (!location) return false;
    const { pathname } = location;
    // console.log(pathname);
    return pathname === "";
  };

  const styles = {
    backgroundColor: "#B0EACD",
  };

  return (
    <nav>
      <ul className="Product-list ">
        <li className="Fruit">
          <NavLink
            to="/Products/?filter=fruit"
            isActive={checkActive}
            onClick={() => {
              dispatch(filterChoose("fruit"));
              dispatch(pageReset());
            }}
            activeStyle={styles}
          >
            <li>Fruits</li>
          </NavLink>
        </li>
        
        <li>
          <NavLink
            to="/Products/?filter=vegetables"
            activeStyle={styles}
            onClick={() => {
              dispatch(filterChoose("vegetables"));
              dispatch(pageReset());
            }}
          >
            <li>Vegetables</li>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Products/?filter=spices"
            activeStyle={styles}
            onClick={() => {
              dispatch(filterChoose("spices"));
              dispatch(pageReset());
            }}
          >
            <li>Spices</li>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default ProductList;
