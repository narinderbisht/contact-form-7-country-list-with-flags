/* 
========================================================================
Kindly update Jquery specifier on line number 263. We are using '.countryDropdown' class specifier. 
Add this class name as attribute in contact form select dropdown field.

For detail about script. 
Kindly visit. https://github.com/mrmarkfrench/country-select-js
========================================================================
*/

(function($) {
	$(function() {
		
         $(".countryDropdown").countrySelect({
			//defaultCountry: "jp",
			//onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
			//preferredCountries: ['ca', 'gb', 'us']
		});
 });
})(jQuery);