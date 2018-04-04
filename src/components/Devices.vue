<template>
  <div>
		<vue-draggable-resizable
			v-for="(device,i) in devices"
			:key="i"

			:handles="['ml','mr']"
			:w="device.width"
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
						:src="url"
						class="screen-frame"
						frameBorder="0"
						:style="{ transform: `scale(${(device.width * device.screen_width/device.image_width)/device.viewport.w})` }"
						:width="device.viewport.w"
						:height="device.viewport.h"
					/>
				</div>
			</div>
		</vue-draggable-resizable>
		<button @click="devicesList = !devicesList">
			Add Device
		</button>
		<ul v-if="devicesList">
			<li v-for="(device, i) in allDevices" :key="i" @click="addDevice(device)">
				{{ device.name }} - {{ device.orientation }} - {{ device.color }} - {{ device.variant }}
			</li>
		</ul>
  </div>
</template>

<script>
import "html5-device-mockups"
import devices from "./devices.js"
import VueDraggableResizable from "./VueDraggableResizable"

export default {
	data() {
		return {
			devices: [],
			url: "https://popcorn.moe/",
			devicesList: false,
			allDevices: devices
		}
	},
	methods: {
		addDevice(device) {
			this.devicesList = false;
			this.devices.push(Object.assign({}, device, {
				width: device.viewport.w/2
			}))
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
			overflow: hidden;
	}
</style>
