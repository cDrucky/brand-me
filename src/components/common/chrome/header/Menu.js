import React from "react"
import { NavItem, Nav, NavLink } from "reactstrap"
const Menu = () => {
	return (
		<Nav navbar>
			<NavItem>
				<NavLink href="/components/">Components</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="https://github.com/cDrucky/brand-me">GitHub</NavLink>
			</NavItem>
		</Nav>
	)
}

export default Menu
