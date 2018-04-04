import { devices } from "!!sass-values-loader!./devices.scss"

// From http://dpi.lv
// Resolution
const viewports = {
	galaxyS3: [
		[{ w: 720/2, h: 1280/2 }]
	],
	galaxyS5: [
		[{ w: 1080/3, h: 1920/3 }]
	],
	galaxyTab4: [
		[{ w: 800/2, h: 1280/2 }]
	],
	iMac: [
		[{ w: 1920, h: 1080 }, "21\""],
		[{ w: 2560, h: 1440 }, "27\""],
		[{ w: 4096/2, h: 2304/2 }, "Retina 4K"],
		[{ w: 5120/2, h: 2880/2 }, "Retina 5K"]
	],
	iPad: [
		[{ w: 768, h: 1024 }]
	],
	iPadAir2: [
		[{ w: 1536/2, h: 2048/2 }]
	],
	iPadPro: [
		[{ w: 2048/2, h: 2732/2 }]
	],
	iPhone6: [
		[{ w: 750/2, h: 1334/2 }]
	],
	iPhone6Plus: [
		[{ w: 414, h: 736 }]
	],
	iPhoneSE: [
		[{ w: 640/2, h: 1136/2 }]
	],
	iPhone5: [
		[{ w: 640/2, h: 1136/2 }]
	],
	Lumia930: [
		[{ w: 1080/3.375, h: 1920/3.375 }]
	],
	Macbook: [
		[{ w: 2304/2, h: 1440/2 }]
	],
	Macbook2015: [
		[{ w: 2304/2, h: 1440/2 }]
	],
	MacbookPro: [
		[{ w: 2880/2, h: 1800/2 }]
	],
	SamsungTV: [
		[{ w: 1920, h: 1080 }]
	],
	Surface: [
		[{ w: 1366, h: 768 }]
	],
	iPhone6Hand: [
		[{ w: 750/2, h: 1334/2 }]
	],
	iPhone7Hand: [
		[{ w: 750/2, h: 1334/2 }]
	],
	iPhone7Hand_2: [
		[{ w: 750/2, h: 1334/2 }]
	],
	Chromebook: [
		[{ w: 1366, h: 768 }]
	],
	HtcOneM8: [
		[{ w: 1080/3, h: 1920/3 }]
	],
	HuaweiP8: [
		[{ w: 1080/3, h: 1920/3 }]
	],
	SurfacePro3: [
		[{ w: 2160/1.5, h: 1440/1.5 }]
	],
	SurfaceStudio: [
		[{ w: 4500/2, h: 3000/2 }]
	],
	iPhone7: [
		[{ w: 750/2, h: 1334/2 }]
	],
	Pixel: [
		[{ w: 411, h: 731 }]
	]
}

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
	]) => (viewports[name] || [[]]).map(([{ w, h } = {}, variant]) => ({
		name,
		variant,
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
		bottom_left,
		viewport: orientation === "portrait" ? ({ w, h }) : ({ w: h, h: w })
	}))
).reduce((a, b) => a.concat(b))