import React from "react"
import { Router } from "@reach/router"
import Stage from "./components/common/Stage"
const App = () => {

	return (
		<div>
			<Router>
				<Stage path="/" />
			</Router>
		</div>
	)
}

export default App
