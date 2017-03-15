<?php
namespace Craft;

class ColorPickerPlugin extends BasePlugin
{
	public function getName()
	{
		return Craft::t("Color Picker");
	}

	public function getDescription()
	{
		return Craft::t("Improves the color field type with a better color picker tool");
	}

	public function getVersion()
	{
		return '0.0.1';
	}

	public function getSchemaVersion()
	{
		return '0.0.1';
	}

	public function getDeveloper()
	{
		return "Spicy Web";
	}

	public function getDeveloperUrl()
	{
		return 'http://spicyweb.com.au';
	}

	public function init()
	{
		parent::init();

		if(craft()->request->isCpRequest())
		{
			$this->includeResources();
		}
	}

	protected function includeResources()
	{
		craft()->templates->includeCssResource('spicylanding/main.css');
		craft()->templates->includeJsResource('spicylanding/redactor/inlinestyle.js');
	}
}
