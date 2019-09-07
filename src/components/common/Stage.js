import React from "react"
import Header from "./chrome/header/Header"
import Footer from "./chrome/footer/Footer"
import { Router } from "@reach/router"
import Interests from "../scenes/interests/Interests"
import { Container } from "reactstrap"

const Stage = () => {
	return (
		<div>
			<Header />
			<Container fluid>
				<Router>
					<Interests path="interests" />
				</Router>
			</Container>
			<Footer />
		</div>
	)
}

export default Stage
