import React, { useState } from "react"
import { Navbar, NavbarToggler, Collapse, CardHeader } from "reactstrap"
import Menu from "./Menu"

const Header = () => {
	const [isCollapseOpen, setIsCollapseOpen] = useState(false)

	return (
		<CardHeader>
			<Navbar color="faded" light>
				<NavbarToggler onClick={() => setIsCollapseOpen(!isCollapseOpen)} className="mr-2" />
				<h1 href="/" className="ml-auto mr-auto">
					Caleb Druckemiller
				</h1>
				<Collapse isOpen={isCollapseOpen} navbar>
					<Menu />
				</Collapse>
			</Navbar>
		</CardHeader>
	)
}

export default Header
