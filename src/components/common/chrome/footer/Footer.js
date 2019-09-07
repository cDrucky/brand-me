import React from "react"
import { Link } from "@reach/router"
import { CardFooter } from "reactstrap"
const Footer = () => {
	return (
		<div className="footer">
			<CardFooter>
				<Link to="/resume">Resume</Link>
			</CardFooter>
		</div>
	)
}

export default Footer
