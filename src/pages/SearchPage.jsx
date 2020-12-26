import React from "react";
import { useStateValue } from "../StateProvider";
// import Response from "../res";
import UseGoogleSearch from "../UseGoogleSearch";
import "./SearchPage.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ImageIcon from "@material-ui/icons/Image";
import DescriptionIcon from "@material-ui/icons/Description";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RoomIcon from "@material-ui/icons/Room";
import Search from "../components/Search";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  const { data } = UseGoogleSearch(term);

  // const data = Response;

  console.log(data);
  return (
    <div className="search-page">
      <div className="search-page-header">
        <Link to="/">
          <img
            className="search-page-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
            alt=""
          />
        </Link>
        <div className="search-page-header-body">
          <Search hideButtons />
          <div className="search-page-options">
            <div className="options-left">
              <div className="option">
                <SearchIcon />
                <Link to="/news">All</Link>
              </div>
              <div className="option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="option">
                <ImageIcon />
                <Link to="/news">Images</Link>
              </div>
              <div className="option">
                <LocalOfferIcon />
                <Link to="/news">Shopping</Link>
              </div>
              <div className="option">
                <RoomIcon />
                <Link to="/news">Maps</Link>
              </div>
              <div className="option">
                <MoreVertIcon />
                <Link to="/news">More</Link>
              </div>
            </div>
            <div className="options-right">
              <div className="option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="search-page-results">
          <p className="search-page-results-count">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="search-page-result">
              <a className="search-page-result-link" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="search-page-image"
                      src={item.pagemap?.cse_image[0]?.src}
                    />
                  )}{" "}
                {item.displayLink}
              </a>
              <a className="search-page-result-title" href={item.link}>
                {item.title}
              </a>
              <p className="search-page-result-snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
