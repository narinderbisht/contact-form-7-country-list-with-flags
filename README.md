# contact-form-7-country-list-with-flags
Custom code for contact form 7. Create a country drop down with countries flags.

## Getting Started
1. Download the [latest release](https://github.com/narinderbisht/contact-form-7-country-list-with-flags/archive/master.zip).

2. Uzip the folder. Copy nb_country Folder inside your wordpress active theme root. web_root/wp-content/themes/active_theme

3. Edit your theme functions.php file. Paste the following code at the end of the file or any other perfect place according to your theme code.

```php

function nb_countryListWithFlags(){
	wp_enqueue_style( 'nb-countryFlag-style', get_stylesheet_directory_uri() . '/nb_country/css/countrySelect.min.css' );
	wp_enqueue_script( 'nb-countryFlag-script', get_stylesheet_directory_uri() . '/nb_country/js/countrySelect.js', array( 'jquery' ) );
	wp_enqueue_script( 'nb-countryFlag-custom-script', get_stylesheet_directory_uri() . '/nb_country/js/custom_script.js', array( 'jquery' ) );
}

add_action( 'wp_enqueue_scripts', 'nb_countryListWithFlags' );
```

4. Add input text in your contact form with a css class or ID attribute. Same ID/Class attribute should be use in custom_script.js file Jquery elelemnt sepecifier.
For example: countryDropdown
```js
(function($) {
	$(function() {
		$(".countryDropdown").countrySelect({
			//defaultCountry: "jp",
			//onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
			//preferredCountries: ['ca', 'gb', 'us']
		});
 });
})(jQuery);
```

# Reference

1. https://github.com/mrmarkfrench/country-select-js

# Author website and blog

http://narindersingh.in
