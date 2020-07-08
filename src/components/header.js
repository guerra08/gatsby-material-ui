import PropTypes from "prop-types"
import React from "react"
import { AppBar, Tabs, Tab, Toolbar } from "@material-ui/core"
import { Link } from "gatsby"

const tabStyle = {
  fontSize: '1.1rem',
  minWidth: 50
}

const Header = ({ siteTitle }) => (
  <>
    <AppBar color="transparent" style={{boxShadow: 'none'}} position="relative">
      <Toolbar>
        <Tabs aria-label="simple tabs example" value={false}>
          <Link to="/" style={{textDecoration: 'none'}}><Tab label="Home" style={tabStyle}/></Link>
          <Tab label="Muito bem" style={tabStyle}/>
          <Link to="/about" style={{textDecoration: 'none'}}><Tab label="Sobre" style={tabStyle}/></Link>
          <Tab label="Plataformas" style={tabStyle}/>
        </Tabs>
      </Toolbar>
    </AppBar>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
