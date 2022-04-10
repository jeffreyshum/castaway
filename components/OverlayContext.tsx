import React from "react"

const OverlayContext = React.createContext({
	selected: {},
	update: (selected: any) => {},
})

export const useOverlay = () => {
	return React.useContext(OverlayContext)
}

export default OverlayContext
