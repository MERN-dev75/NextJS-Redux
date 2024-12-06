import styles from "./page.module.css";
import ButtomBlockUI from "../Component/ButtonBlock/ButtonGroup";
import CountBlock from "../Component/CountBlock/CountSection";
import ListingBlock from "../Component/ListingBlock/Listing";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.Heading}>
        Redux Data Flow
      </div>
      <div className={styles.EventSection}>
        <div className={styles.Block_Section}>
          <h1>Add Items</h1>
          <ButtomBlockUI />
        </div>
        <div className={styles.Block_Section}>
          <h1>Counts</h1>
          <CountBlock/>
        </div>
        <div className={styles.Block_Section}>
        <h1>List</h1>
        <ListingBlock/>
        </div>
      </div>
    </div>
  );
}
