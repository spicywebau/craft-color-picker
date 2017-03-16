import $ from 'jquery'
import Garnish from 'garnish'
import Craft from 'craft'
import ColorPicker from './ColorPicker'

const template = `
	<div class="modal fitted">
		<div class="body">
			<div class="buttons right">
				<div class="btn">${ Craft.t("Cancel") }</div>
				<div class="btn submit">${ Craft.t("Save") }</div>
			</div>
		</div>
	</div>
`

export default Garnish.Modal.extend({

	init()
	{
		this.base()

		this.setContainer($(template))

		this.colorPicker = new ColorPicker()

		Garnish.$bod.append(this.$container)
	}
})
