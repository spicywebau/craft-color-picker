import $ from 'jquery'
import Garnish from 'garnish'
import Craft from 'craft'
import EventEmitter from './EventEmitter'
import ColorPicker from './ColorPicker'
import '../styles/ColorModal.scss'

const template = `
	<div>
		<div class="hud-footer sw_color-modal_footer">
			<div class="buttons right">
				<div class="btn">${ Craft.t("Cancel") }</div>
				<div class="btn submit">${ Craft.t("Save") }</div>
			</div>
		</div>
	</div>
`

export default class ColorModal extends EventEmitter
{
	constructor($input)
	{
		super()

		this.$input = $($input)
		this.$contents = $(template)

		this.colorPicker = new ColorPicker()
		this.$contents.prepend(this.colorPicker.$element)

		this.hud = new Garnish.HUD(this.$input, this.$contents, {
			hudClass: 'hud sw_color-modal',
			orientations: ['right', 'bottom', 'top', 'left'],
		})
	}

	show()
	{
		this.hud.show()
	}
}
