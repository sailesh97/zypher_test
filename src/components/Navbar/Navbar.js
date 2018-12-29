import React from "react";

const navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand font-weight-bold" href="/">
            My Orders
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="/"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>

          <form className="form-inline my-2 my-lg-0 d-none d-lg-block d-xl-none">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <a href="/">
            <i className="fas fa-search col-xs-3 text-secondary px-md-3" />
          </a>
          <a href="/">
            <i className="fas fa-bell col-xs-3 text-secondary px-md-3" />
          </a>
          <a href="/">
            <i className="fas fa-bookmark  text-secondary col-xs-3 px-md-3 " />
          </a>
          <a href="/">
            <i className="fas fa-shopping-bag text-secondary  col-xs-3 px-md-3 " />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default navbar;
