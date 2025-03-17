/*
LINKS GAME ENGINE (Carmak)
BY YUNG TURABIAN


*/



const Carmak = (function() {

		// WEBGL
		var gl = undefined;

		// WebGL variables
		function _color_buffer_bit() {
				return gl.COLOR_BUFFER_BIT;
		}


		var color_buffer_bit = _$Links.kify(_color_buffer_bit);


		function _clearColor(r, g, b, a) {
				gl.clearColor(r, g, b, a);
		}

		function _clear(mask) {
				gl.clear(mask);
		}

		var clearColor = _$Links.kify(_clearColor);
		var clear = _$Links.kify(_clear);


		// GENERAL

		// loaded: This module should only be loaded once per page; it is an error
		// to load the page more than once. "loaded" is set to true when
		// "createContext" is called for the first time.
		let loaded = false;
		let canvas = undefined;
		let ctx = null;

		function _createContext(context) { 
				// Either webgl or 2d
				canvas = document.getElementById("game-window");

				if (canvas.getContext) {
						if (context === "2d") {
								ctx = canvas.getContext(context);
						} else if (context === "webgl") {
								
								gl = canvas.getContext(context);
								if (gl === undefined) {
										alert(
										"Unable to initialize WebGL. Your browser or machine may not support it.",
										);
										return;
								}
						} else {
								console.log("Inproper rendering context selected.");
						}
				} else {
						alert("Canvas unsupported!");
						return;
				}

				loaded = true;
		}

		function _getContext() {
				return ctx;
		}

		function _fill(r, g, b) {
				ctx.fillStyle = "rgb(${r} ${g} ${b})";
		}

		function _rect(x, y, w, h) {
				ctx.fillRect(x, y, w, h);
		}

		var createContext = _$Links.kify(_createContext);
		var getContext = _$Links.kify(_getContext);

		var fill = _$Links.kify(_fill);
		var rect = _$Links.kify(_rect);

		return {
				"createContext": createContext,
				"getContext": getContext,

				"fill": fill,
				"rect": rect,

				"color_buffer_bit": color_buffer_bit,
				"clearColor": clearColor,
				"clear": clear,
		}
})();


const createContext = Carmak.createContext;
const getContext = Carmak.getContext;

const fill = Carmak.fill;
const rect = Carmak.rect;


const color_buffer_bit = Carmar.color_buffer_bit;
const clearColor = Carmak.clearColor;
const clear = Carmak.clear;
