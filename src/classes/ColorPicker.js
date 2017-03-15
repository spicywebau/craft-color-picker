import $ from 'jquery'
import EventEmitter from './EventEmitter'

const template = `
	<div class="sw_color-picker">
		<div class="sw_color-picker_brisat">
			<div class="sw_color-picker_brisat_pointer"></div>
		</div>
		<div class="sw_color-picker_hue">
			<div class="sw_color-picker_hue_pointer"></div>
		</div>
	</div>
`

export default class ColorPicker extends EventEmitter
{
	constructor()
	{
		this.$element = $(template)
	}
}
