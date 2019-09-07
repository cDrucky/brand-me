import React, { useEffect } from "react"

const Resume = () => {
	useEffect(() => {
		window.print()
	}, [])

	return <div>This will be my resume!</div>
}

export default Resume
