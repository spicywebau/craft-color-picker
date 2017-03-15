/**
 *
 */
export default class EventEmitter
{
	/**
	 *
	 * @param event
	 * @param callback
	 */
	on(event, callback)
	{
		if(!this._listeners)
		{
			this._listeners = {}
		}

		if(!this._listeners[event])
		{
			this._listeners[event] = new Set()
		}

		this._listeners[event].add(callback)
	}

	/**
	 *
	 * @param event
	 * @param callback
	 */
	off(event, callback=false)
	{
		if(this._listeners && this._listeners[event])
		{
			if(callback)
			{
				this._listeners[event].delete(callback)
			}
			else
			{
				delete this._listeners[event]
			}
		}
	}

	/**
	 *
	 * @param event
	 * @param data
	 */
	emit(event, data={})
	{
		if(this._listeners && this._listeners[event])
		{
			if(typeof data !== 'object')
			{
				data = { data }
			}

			Object.assign(data, { event, target: this })

			for(let callback of this._listeners[event])
			{
				callback.call(this, data)
			}
		}
	}
}
