<template>
  <div>
	<vue-draggable-resizable
		v-for="(device,i) in devices"
		:key="i"

		:handles="['ml','mr']"
		:w="device.width"
		:x="devices.slice(0,i).reduce((c,v) => c + v.width, 0)"
		:maxw="device.image_width"
		@resizing="(x,y,width,height) => device.width = Math.min(width, device.image_width)"
		class="device-container"
	>
		<div class="device"
			:data-device="device.name"
			:data-orientation="device.orientation"
			:data-color="device.color"
		>
			<div class="screen">
				<iframe
					src="https://popcorn.moe/"
					class="screen-frame"
					frameBorder="0"
					:style="{ transform: `scale(${device.width/device.image_width})` }"
					:width="device.screen_width"
					:height="device.screen_height"
				/>
			</div>
		</div>
	</vue-draggable-resizable>
  </div>
</template>

<script>
import "html5-device-mockups"
import devices from "./devices.js"
import VueDraggableResizable from "./VueDraggableResizable"
console.log(devices)

export default {
	data() {
		return {
			devices: [
				Object.assign({}, devices.find(({ name }) => name === "iPhone5"), {
					width: 300
				}),
				Object.assign({}, devices.find(({ name }) => name === "Chromebook"), {
					width: 1000
				}),
				Object.assign({}, devices.find(({ name }) => name === "Surface"), {
					width: 600
				})
			]
		}
	},
	components: {
		VueDraggableResizable
	}
}
</script>

<style>
	.screen-frame {
		transform-origin: 0 0;
	}

	.device .screen {
    	pointer-events: inherit;
	}
</style>
