import React from "react"
import { Router } from "@reach/router"
import Stage from "./components/common/Stage"
import Resume from "./components/Resume"

const App = () => {
	return (
		<div>
			<Router>
				<Stage path="/home/*" />
				<Resume path="/resume" />
			</Router>
		</div>
	)
}

export default App
