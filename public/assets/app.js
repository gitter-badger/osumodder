/*
Copyright (C) 2014 Donovan Glover
http://dglover.co/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


/*
	@require assets/angular.min.js
	@require assets/angular-animate.min.js
	@require assets/sugar.min.js
*/

// This is my first non-tutorial Angular app! Enjoy.
;(function(window, document, undefined) {
	"use strict";

	var app = angular.module("modder", ["ngAnimate"]);


	// using controller explicitly for testing purposes
		app.controller("MainController", function() {
			this.site = {
				
			};
			this.bbcode = {
				listStart: "[list]",
				listEnd: "[/list]",
				listItem: "[*]",
				imageStart: "[img]",
				imageEnd: "[/img]",
				headerStart: "[",
				headerEnd: "]",
				spacer: "[color=#edebfa]~[/color]",
				newLine: "\r\n"
			};
			this.build = function(sections) {

				// Define Local variables
				var header = "",
					list = "",
					returnThis = "";
				var imageUrl = /http(s*):\/\/osu.ppy.sh\/ss\/([0-9]+)/i,
					returnedMod = "";

				// BBCode Constants
				var bbc = {
					listStart: "[list]",
					listEnd: "[/list]",
					listItem: "[*]",
					imageStart: "[img]",
					imageEnd: "[/img]",
					headerStart: "[",
					headerEnd: "]",
					spacer: "[color=#edebfa]~[/color]",
					newLine: "\r\n"
				};

				// Loop through all the sections
				for(var i = 0; i < sections.length; i++) {
					header = "", list = "";


					header = bbc.headerStart + sections[i].name + bbc.headerEnd + bbc.newLine;
					

					// If the current section has mods then add them on a list
					if(sections[i].mods.length > 0) {

						list = bbc.listStart + bbc.newLine;

						for(var j = 0; j < sections[i].mods.length; j++) {
							returnedMod = "";


							if(sections[i].mods[j].endsWith(imageUrl) && !sections[i].mods[j].startsWith(imageUrl)) {
								sections[i].mods[j].words(function(currentWord) {
									if(currentWord.has(imageUrl)) {

										returnedMod = sections[i].mods[j].remove(currentWord) + bbc.newLine;
										returnedMod += bbc.newLine + bbc.imageStart + currentWord + bbc.imageEnd + bbc.newLine + bbc.spacer;
										
									}
								});
							
							} else {
							
								returnedMod = sections[i].mods[j];
							
							}

							list += bbc.listItem + returnedMod + bbc.newLine;

						}

						list += bbc.listEnd + bbc.newLine;

					}



					returnThis += header + list + bbc.newLine;


				}

				return returnThis;

			}
			this.developerMode = false;
		});


		app.controller("ModderController", function() {

			this.sections = []; // All the sections added in the mod
			this.givenSection = ""; // The current given section
			this.givenMod = "";


			// When the user submits a section...
			this.addSection = function(formValue) {
				formValue = formValue.remove(/[\[\]]/g);
				this.sections.add({
					name: formValue,
					mods: []
				}); // Append that section to the list of all sections
				this.givenSection = ""; // Remove the givenSection from the input box
			}


			this.removeSection = function(formValue) {
				for(var i = 0; i < this.sections.length; i++) {
					if(this.sections[i].name === formValue) {
						this.sections.removeAt(i);
					}
				}
			}

			this.numberOfMods = function(formValue) {
				return formValue.mods.length;
			}


			this.addMod = function(currentSection, modValue) {
				currentSection.mods.add(modValue);
				this.givenMod = "";
			}


			this.removeMod = function(currentSection, modValue) {
				currentSection.mods.remove(modValue);
			}

		});


		app.controller("PanelController", function() {
			this.tab = undefined;
			this.selectTab = function(setTab) {
				this.tab = setTab;
			}
			this.isSelected = function(checkTab) {
				return this.tab === checkTab;
			}
		});

		app.controller("AnimateController", function($scope) {
			$scope.showme = false;
		});


})(window, document);



