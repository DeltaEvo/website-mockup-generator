<script>
import VueDraggableResizable from "vue-draggable-resizable";

export default {
  	mixins: [VueDraggableResizable],
  	props: {
		maxw: {
	      type: Number,
	      default: 50,
	      validator: function (val) {
	        return val > 0
	      }
	    }
	},
  	watch: {
	  	width(val) {
			if (val > this.maxw)
				this.elmW = this.width = this.maxw
	  	}
	}
}
</script>
