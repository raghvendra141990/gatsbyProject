import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/qlogo.png"

const Header = ({ siteTitle }) => (
  <header >
    <img src={logo} className='brand-logo' alt="logo"/>
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
              color: `#3662ad`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Project`,
}

export default Header
