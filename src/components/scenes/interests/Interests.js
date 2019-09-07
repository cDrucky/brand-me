import React from "react"
import Baseball from "./widgets/Baseball"
import Football from "./widgets/Football"
import { Row, Col } from "reactstrap"
const Interests = () => {
	return (
		<div>
			<h1>
				Where all the fun stuff happens! <i className="fa fa-rocket" />
			</h1>
			<Row>
				<Col>
					<Baseball />
				</Col>
				<Col>
					<Football />
				</Col>
			</Row>
		</div>
	)
}

export default Interests
