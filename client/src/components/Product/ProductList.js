import React from "react";
import { useDispatch } from "react-redux";
import "../../styles/components/Product/ProductList.css";
import { NavLink } from "react-router-dom";
import { filterChoose } from "../../action/sort-action";
import { pageReset } from "../../action/paginate";
function ProductList() {
  // const [appear,setAppear]=useState(false);
  const dispatch = useDispatch();
  // const checkActive = (match, location) => {
  //   //some additional logic to verify you are in the home URI
  //   if (!location) return false;
  //   const { pathname } = location;
  //   // console.log(pathname);
  //   return pathname === "";
  // };

  // const styles = {
  //   backgroundColor: "#B0EACD",
  // };

  return (
    <div className="widget_list widget_categories">
      <h3>Category</h3>
      <ul>
        <li>
          <NavLink
            to="/Products/?filter=fruit"
            onClick={() => {
              dispatch(filterChoose("fruit"));
              dispatch(pageReset());
            }}
          >
            Fruits
          </NavLink>
        </li>
        
        <li>
          <NavLink
            to="/Products/?filter=vegetables"
            onClick={() => {
              dispatch(filterChoose("vegetables"));
              dispatch(pageReset());
            }}
          >
            Vegetables
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Products/?filter=spices"
            onClick={() => {
              dispatch(filterChoose("spices"));
              dispatch(pageReset());
            }}
          >
            Spices
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default ProductList;
