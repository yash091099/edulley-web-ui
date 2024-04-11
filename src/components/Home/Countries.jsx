import React from "react";
import card1 from "../../assets/australia.png";
import card2 from "../../assets/canada.png";
import card3 from "../../assets/france.png";
import card4 from "../../assets/uk.png";
import card5 from "../../assets/usa.png";
import card6 from "../../assets/ireland.png";
import { BiChevronRight } from "react-icons/bi";

const Countries = () => {
  return (
    <div className=" container  py-5">
      <h1 className="what-we-can-do-title ">Most Searched Countries</h1>
      <p className="what-we-can-do-description mt-2 mb-5">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here
      </p>
      <div className="countries-container ">
        <div className="countries">
          <img className="countries-image" src={card1} alt="USA" />
        </div>
        <div className="countries">
          <img className="countries-image" src={card2} alt="UK" />
        </div>
        <div className="countries">
          <img className="countries-image" src={card3} alt="Canada" />
        </div>
        <div className="countries">
          <img className="countries-image" src={card4} alt="Australia" />
        </div>
        <div className="countries">
          <img className="countries-image" src={card5} alt="France" />
        </div>
        <div className="countries">
          <img className="countries-image" src={card6} alt="Ireland" />
        </div>
      </div>
      {/* <div className="countries-container container">
        <div className="countries">
          <img className="countries-image" src={card4} alt="Australia" />
        </div>
        <div className="countries">
          <img className="countries-image" src={card5} alt="France" />
        </div>
        <div className="countries">
          <img className="countries-image" src={card6} alt="Ireland" />
        </div>
      </div> */}
      <div className="view-all-button">
        <button className="button">
          View All
          <BiChevronRight size={26} />
        </button>
      </div>
    </div>
  );
};

export default Countries;
