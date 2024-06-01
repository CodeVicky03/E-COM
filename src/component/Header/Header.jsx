import "./Header.css";
import clock from "../../assets/clock.jpg";
import decate from "../../assets/decate-two.jpg";
import lamp from "../../assets/lamp-one.jpg";
import self from "../../assets/self.jpg";
import table from "../../assets/table.jpg";
import wall from "../../assets/wall-art.jpg";
import mirror from "../../assets/mirrir.jpg";
import bed from "../../assets/bed.jpg";
import { HiMiniArrowLongRight } from "react-icons/hi2";

function Header() {
  return (
    <div className="main-category">
      <h1>Category</h1>
      <p>
        Every piece of furniture has a story, a
        <span style={{ color: "#ff3c01" }}>heritage</span>, and a
        <span style={{ color: "#ff3c01" }}>journey</span>.
      </p>
      <div className="category">
        <div>
          <span>
            Wall Clock <HiMiniArrowLongRight />
          </span>
          <img src={clock} alt="" />
        </div>
        <div>
          <span>
            Flower Pot <HiMiniArrowLongRight />
          </span>
          <img src={decate} alt="" />
        </div>
        <div>
          <span>
            Table Lamp <HiMiniArrowLongRight />
          </span>
          <img src={lamp} alt="" />
        </div>
        <div>
          <span>
            Self <HiMiniArrowLongRight />
          </span>
          <img src={self} alt="" />
        </div>
        <div>
          <span>
            Table <HiMiniArrowLongRight />
          </span>
          <img src={table} alt="" />
        </div>
        <div>
          <span>
            Wall Painting <HiMiniArrowLongRight />
          </span>
          <img src={wall} alt="" />
        </div>
        <div>
          <span>
            Mirror <HiMiniArrowLongRight />
          </span>
          <img src={mirror} alt="" />
        </div>
        <div>
          <span>
            Bed <HiMiniArrowLongRight />
          </span>
          <img src={bed} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
