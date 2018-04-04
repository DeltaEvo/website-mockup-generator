import { devices } from "!!sass-values-loader!./devices.scss"
export default devices.map(
	([
		name,
		orientation,
		color,
		image_width,
		image_height,
		screen_top,
		screen_right,
		screen_bottom,
		screen_left,
		button_top,
		button_right,
		button_bottom,
		bottom_left
	]) => ({
		name,
		orientation,
		color,
		image_width,
		image_height,
		screen_width: image_width - screen_right - screen_left,
		screen_height: image_height - screen_top - screen_bottom,
		screen_top,
		screen_right,
		screen_bottom,
		screen_left,
		button_top,
		button_right,
		button_bottom,
		bottom_left
	})
)