import React, { useEffect, useState } from 'react';

const withDimensions = (Child) => {
	const Component = () => {
		const [innerWidth, setInnerWidth] = useState(0);
		const [innerHeight, setInnerHeight] = useState(0);

		useEffect(() => {
			setInnerWidth(window.innerWidth)
			setInnerHeight(window.innerHeight)
			window.addEventListener("resize", () => {
				setInnerWidth(window.innerWidth)
				setInnerHeight(window.innerHeight)
			});
		}, [])
		
		return (<Child innerWidth={innerWidth} innerHeight={innerHeight}/>)
	}
	Component.displayName = 'withDimensions';
	return Component
}


export default withDimensions