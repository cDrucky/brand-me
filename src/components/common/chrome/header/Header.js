import React, { useState } from "react"
import { Navbar, NavbarToggler, Collapse, CardHeader, NavbarBrand } from "reactstrap"
import Menu from "./Menu"

const Header = () => {
	const [isCollapseOpen, setIsCollapseOpen] = useState(false)

	return (
		<CardHeader>
			<Navbar color="faded" light>
				<NavbarToggler onClick={() => setIsCollapseOpen(!isCollapseOpen)} className="mr-2" />
				<NavbarBrand href="/home" className="ml-auto mr-auto">
					<h1>Caleb Druckemiller</h1>
				</NavbarBrand>
				<Collapse isOpen={isCollapseOpen} navbar>
					<Menu />
				</Collapse>
			</Navbar>
		</CardHeader>
	)
}

export default Header
