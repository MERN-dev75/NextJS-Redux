"use client"

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./Listing.module.scss";
import { removeItem } from "../../Redux/Content/action";


const ListingBlock = () => {
  const dispatch = useDispatch();
  const ItemsValue = useSelector(state=>state?.Data?.data);

  const removeItemCall = (index) => {
    dispatch(removeItem(ItemsValue?.filter((_, i) => i !== index)))
  };

  return (
    <div className={styles.container}>
      <div className={styles.scrollable}>
        {ItemsValue.map((item, index) => (
          <div key={index} className={styles.smallBlock}>
            <span className={styles.name}>{item}</span>
            <button
              className={styles.deleteButton}
              onClick={() => removeItemCall(index)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingBlock;


// import { useState } from "react";
// import styles from "./Listing.module.scss"; // Import the SCSS module

// const ListingBlock = () => {

//   const addItem = () => {
//     if (inputValue.trim() !== "") {
//       setItems([...items, inputValue]);
//       setInputValue("");
//     }
//   };

//   // const removeItem = (index) => {
//   //   setItems(items.filter((_, i) => i !== index));
//   // };

//   return (
//     <div className={styles.container}>
//       <div className={styles.bottomLock}>
       
//       </div>
//     </div>
//   );
// };

// export default ListingBlock;
