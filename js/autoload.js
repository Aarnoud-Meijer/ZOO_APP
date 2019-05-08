var assets = {
	assets: {},
	include: function (asset_name, callback) {
		if (typeof callback != 'function')
			callback = function () { return false; };

		if (typeof this.assets[asset_name] != 'undefined' )
			return callback();


		var html_doc = document.getElementsByTagName('head')[0];
		var st = document.createElement('script');
		st.setAttribute('language', 'javascript');
		st.setAttribute('type', 'text/javascript');
		st.setAttribute('src', asset_name);
		st.onload = function () { assets._script_loaded(asset_name, callback); };
		html_doc.appendChild(st);
	},
	_script_loaded: function (asset_name, callback) {
		this.assets[asset_name] = true;
		callback();
	}
};

/*
assets.inlude('myfile.js', function () {
    // do stuff that depends on myfile.js
});
*/
