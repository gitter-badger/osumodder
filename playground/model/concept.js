/*
	addSession(sessionName): Add a new modding session
	removeSession(sessionName): Remove an existing modding session
	changeSession(oldSessionName, newSessionName): Change the name of an existing modding session
	debugSessions(): Log the current modding sessions

	addSection(sectionName, sessionName): Add a new section to a modding session
	removeSection(sectionName, sessionName): Remove an existing section from a modding session
	changeSection(oldSectionName, newSectionName, sessionName): Change the name of an existing section from a modding session
	debugSections(sessionName): Log the current sections from a modding session

	addMod(modContent, sectionName, sessionName): Add a new mod to an existing section of a modding session
	removeMod(modContent, sectionName, sessionName): Remove an existing mod from an existing section of a modding session
	changeMod(oldModContent, newModContent, sectionName, sessionName): Change the content of an existing mod from an existing section of a modding session
	debugMod(sectionName, sessionName): Log the current mods from an existing section of a modding session

*/

var addSession = function(sessionName) {

	var selfSessionName = sessionName || undefined;
	if(!selfSessionName) return;

	moddingSessions.push({
		"name": selfSessionName,
		"sections": []
	});

}


var removeSession = function(sessionName) {

	var selfSessionName = sessionName || undefined;
	if(!selfSessionName) return;

	for(var i = 0; i < moddingSessions.length; i++) {
		if(moddingSessions[i].name === selfSessionName) {
			moddingSessions.splice(i, 1);
		}
	}

}


var changeSession = function(oldSessionName, newSessionName) {

	var selfOldSessionName = oldSessionName || undefined,
		selfNewSessionName = newSessionName || undefined;
	if(!selfNewSessionName || !selfOldSessionName) return;

	for(var i = 0; i < moddingSessions.length; i++) {
		if(moddingSessions[i].name === selfOldSessionName) {
			moddingSessions[i].name = selfNewSessionName;
		}
	}

}


var debugSessions = function() {

	for(var i = 0; i < moddingSessions.length; i++) {
		console.info(moddingSessions[i].name);
	}

}


var addSection = function(sectionName, sessionName) {

	var selfSessionName = sessionName || undefined,
		selfSectionName = sectionName || undefined;
	if(!selfSectionName || !selfSectionName) return;

	for(var i = 0; i < moddingSessions.length; i++) {
		if(moddingSessions[i].name === selfSessionName) {
			moddingSessions[i].sections.push({
				"name": selfSectionName,
				"mods": []
			});
		}
	}

}


var removeSection = function(sectionName, sessionName) {

	var selfSessionName = sessionName || undefined,
		selfSectionName = sectionName || undefined;
	if(!selfSectionName || !selfSectionName) return;

	for(var i = 0; i < moddingSessions.length; i++) {
		if(moddingSessions[i].name === selfSessionName) {
			for(var j = 0; j < moddingSessions[i].sections.length; j++) {
				if(moddingSessions[i].sections[j].name === selfSectionName) {
					moddingSessions[i].sections.splice(j, 1);
				}
			}
		}
	}

}


var changeSection = function(oldSectionName, newSectionName, sessionName) {

	var selfSessionName = sessionName || undefined,
		selfOldSectionName = oldSectionName || undefined,
		selfNewSectionName = newSectionName || undefined;
	if(!selfNewSectionName || !selfOldSectionName) return;

	for(var i = 0; i < moddingSessions.length; i++) {
		if(moddingSessions[i].name === selfSessionName) {
			for(var j = 0; j < moddingSessions[i].sections.length; j++) {
				if(moddingSessions[i].sections[j].name === selfOldSectionName) {
					moddingSessions[i].sections[j].name = selfNewSectionName;
				}
			}
		}
	}

}


var debugSections = function(sessionName) {

	var selfSessionName = sessionName || undefined;
	if(!selfSessionName) return;

	for(var i = 0; i < moddingSessions.length; i++) {
		if(moddingSessions[i].name === selfSessionName) {
			for(var j = 0; j < moddingSessions[i].sections.length; j++) {
				console.info(moddingSessions[i].sections[j].name);
			}
		}
	}

}


var addMod = function(modContent, sectionName, sessionName) {

	var selfSessionName = sessionName || undefined,
		selfSectionName = sectionName || undefined,
		selfModContent  = modContent  || undefined;
	if(!selfModContent || !selfSectionName || !selfSectionName) return;

	for(var i = 0; i < moddingSessions.length; i++) {
		if(moddingSessions[i].name === selfSessionName) {
			for(var j = 0; j < moddingSessions[i].sections.length; j++) {
				if(moddingSessions[i].sections[j].name === selfSectionName) {
					moddingSessions[i].sections[j].mods.push(modContent);
				}
			}
		}
	}

}


var removeMod = function(modContent, sectionName, sessionName) {

	var selfSessionName = sessionName || undefined,
		selfSectionName = sectionName || undefined,
		selfModContent  = modContent  || undefined;
	if(!selfModContent || !selfSectionName || !selfSectionName) return;

	for(var i = 0; i < moddingSessions.length; i++) {
		if(moddingSessions[i].name === selfSessionName) {
			for(var j = 0; j < moddingSessions[i].sections.length; j++) {
				if(moddingSessions[i].sections[j].name === selfSectionName) {
					for(var k = 0; k < moddingSessions[i].sections[j].mods.length; k++) {
						if(moddingSessions[i].sections[j].mods[k] === selfModContent) {
							moddingSessions[i].sections[j].mods.splice(k, 1);
						}
					}
				}
			}
		}
	}

}


var changeMod = function(oldModContent, newModContent, sectionName, sessionName) {

	var selfSessionName   = sessionName   || undefined,
		selfSectionName   = sectionName   || undefined,
		selfOldModContent = oldModContent || undefined,
		selfNewModContent = newModContent || undefined;
	if(!selfOldModContent || !selfNewModContent || !selfSectionName || !selfSectionName) return;

	for(var i = 0; i < moddingSessions.length; i++) {
		if(moddingSessions[i].name === selfSessionName) {
			for(var j = 0; j < moddingSessions[i].sections.length; j++) {
				if(moddingSessions[i].sections[j].name === selfSectionName) {
					for(var k = 0; k < moddingSessions[i].sections[j].mods.length; k++) {
						if(moddingSessions[i].sections[j].mods[k] === selfOldModContent) {
							moddingSessions[i].sections[j].mods[k] = selfNewModContent;
						}
					}
				}
			}
		}
	}

}


var debugMods = function(sectionName, sessionName) {

	var selfSessionName = sessionName || undefined,
		selfSectionName = sectionName || undefined;
	if(!selfSessionName || !selfSectionName) return;

	for(var i = 0; i < moddingSessions.length; i++) {
		if(moddingSessions[i].name === selfSessionName) {
			for(var j = 0; j < moddingSessions[i].sections.length; j++) {
				if(moddingSessions[i].sections[j].name === selfSectionName) {
					for(var k = 0; k < moddingSessions[i].sections[j].mods.length; k++) {
						console.info(moddingSessions[i].sections[j].mods[k]);
					}
				}
			}
		}
	}

}
