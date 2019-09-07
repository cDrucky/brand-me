import React from "react"
import Header from "./chrome/header/Header"
import Footer from "./chrome/footer/Footer"
import { Router } from "@reach/router"
import Interests from "../scenes/Interests"
const Stage = () => {
	return (
		<div>
			<Header />
			<Router>
				<Interests path="interests" />
			</Router>
			<Footer />
		</div>
	)
}

export default Stage
