import $ from 'jquery'
import Garnish from 'garnish'
import ColorModal from './classes/ColorModal'

Garnish.$bod.on('click', 'input[type="color"]', e =>
{
	e.preventDefault()

	const $input = $(e.target)
	let modal = $input.data('color-modal')

	if(!modal)
	{
		modal = new ColorModal($input)
		$input.data('color-modal', modal)
	}

	modal.show()
})
