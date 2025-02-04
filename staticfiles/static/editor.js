var addOptions1 = `
	<div class="editheader"><button onclick="resetPopup()" class="shortbutton"><</button><p class="editortext">Add new item:</p></div>`
var addOptions2 = `
	<button onclick="addItem('mainimagetext')"class="longbutton">Caption</button>
	<button onclick="addItem('text')"class="longbutton">Text</button>
	<button onclick="addItem('spacer')"class="longbutton">Spacer</button>
	<button onclick="addItem('heading')"class="longbutton">Heading</button>
	<button onclick="addItem('subheading')"class="longbutton">Subheading</button>
	<button onclick="addItem('section')"class="longbutton">Section</button>
	<button onclick="addItem('sectioncenter')"class="longbutton">V-aligned</button>
	<button onclick="addItem('sideimage')"class="longbutton">Flex image</button>
	<button onclick="addItem('fixedsideimage')"class="longbutton">Side image</button>
	<button onclick="addItem('smallimage')"class="longbutton">List image</button>
	<button onclick="addItem('tipimage')"class="longbutton">Small image</button>
	<button onclick="addItem('list')"class="longbutton">List</button>
	<button onclick="addItem('pointform')"class="longbutton">Bullets</button>
	<button onclick="addItem('references')"class="longbutton">References</button>
	<button onclick="addItem('galleryitem')" class="longbutton">Gallery item</button>`
var addOptions3 = `	
	<button onclick="addItem('panel')" class="longbutton">Panel</button>
	<button onclick="addItem('gallery')" class="longbutton">Gallery</button>
	<button onclick="addItem('imagecontainer')" class="longbutton">Main image</button>`;
var editOptions = `
	<button onclick="showItemList(this.parentNode, 'outside')" class="editor-new shortbutton"></button>
	<button onclick="showItemList(this.parentNode, 'inside')" class="editor-subitem shortbutton"></button>
	<span></span>
	<button onclick="moveItemUp()" class="editor-up shortbutton"></button>
	<button onclick="moveItemDown()" class="editor-down shortbutton"></button>
	<span></span>
	<button onclick="openOverlay(this.parentNode)" class="editor-edit shortbutton"></button>
	<button onclick="deleteItem()" class="editor-delete shortbutton"></button>`;
var headerOptions = `
	<button class="editor-delete headerbutton" onclick="removeHeader(this)"></button>
	<button class="editor-new headerbutton" onclick="addHeader(this.parentNode)"></button>`
var noHeaderOptions = `
	<button class="editor-new headerbutton" onclick="addHeader(this)"></button>`
var panelOptions = `
	<div id="faviconinput" onclick="openOverlay(this, false)"><button class="editor-edit subbutton"></button></div>
	<input type="text" id="titleinput"></p>
	<div id="texteditor" onmousedown="event.preventDefault();">
		<button onclick="editText(this)" id="bold" class="texteditoritem" title="Bold" type="button"><svg width="16px" height="16px"><path xmlns="http://www.w3.org/2000/svg" fill="#5f6368" fill-rule="evenodd" d="M9,3.5 C9,1.57 7.43,0 5.5,0 L1.77635684e-15,0 L1.77635684e-15,12 L6.25,12 C8.04,12 9.5,10.54 9.5,8.75 C9.5,7.45 8.73,6.34 7.63,5.82 C8.46,5.24 9,4.38 9,3.5 Z M5,2 C5.82999992,2 6.5,2.67 6.5,3.5 C6.5,4.33 5.82999992,5 5,5 L3,5 L3,2 L5,2 Z M3,10 L3,7 L5.5,7 C6.32999992,7 7,7.67 7,8.5 C7,9.33 6.32999992,10 5.5,10 L3,10 Z" transform="translate(4 3)"></path></svg></button>
		<button onclick="editText(this)" id="italic" class="texteditoritem" title="Italic" type="button"><svg width="17px" height="16px"><polygon xmlns="http://www.w3.org/2000/svg" fill="#5f6368" fill-rule="evenodd" points="4 0 4 2 6.58 2 2.92 10 0 10 0 12 8 12 8 10 5.42 10 9.08 2 12 2 12 0" transform="translate(3 3)"></polygon></svg></button>
		<button onclick="editText(this)" id="underline" class="texteditoritem" title="Underline" type="button"><svg width="18px" height="18px"><path xmlns="http://www.w3.org/2000/svg" fill="#5f6368" d="M6,12 C8.76,12 11,9.76 11,7 L11,0 L9,0 L9,7 C9,8.75029916 7.49912807,10 6,10 C4.50087193,10 3,8.75837486 3,7 L3,0 L1,0 L1,7 C1,9.76 3.24,12 6,12 Z M0,13 L0,15 L12,15 L12,13 L0,13 Z" transform="translate(3 3)"></path></svg></button>
		<button onclick="editText(this)" id="strikeThrough" class="texteditoritem" title="Strikethrough" type="button"><svg width="18px" height="16px"><path xmlns="http://www.w3.org/2000/svg" fill="#5f6368" fill-rule="evenodd" d="M2.8875,3.06 C2.8875,2.6025 2.985,2.18625 3.18375,1.8075 C3.3825,1.42875 3.66,1.10625 4.02,0.84 C4.38,0.57375 4.80375,0.3675 5.29875,0.22125 C5.79375,0.075 6.33375,0 6.92625,0 C7.53375,0 8.085,0.0825 8.58,0.25125 C9.075,0.42 9.49875,0.6525 9.85125,0.95625 C10.20375,1.25625 10.47375,1.6125 10.665,2.02875 C10.85625,2.44125 10.95,2.895 10.95,3.38625 L8.6925,3.38625 C8.6925,3.1575 8.655,2.94375 8.58375,2.74875 C8.5125,2.55 8.4,2.38125 8.25,2.2425 C8.1,2.10375 7.9125,1.99125 7.6875,1.91625 C7.4625,1.8375 7.19625,1.8 6.88875,1.8 C6.5925,1.8 6.3375,1.83375 6.11625,1.8975 C5.89875,1.96125 5.71875,2.05125 5.57625,2.1675 C5.43375,2.28375 5.325,2.41875 5.25375,2.5725 C5.1825,2.72625 5.145,2.895 5.145,3.0675 C5.145,3.4275 5.32875,3.73125 5.69625,3.975 C5.71780203,3.98908066 5.73942012,4.00311728 5.76118357,4.01733315 C6.02342923,4.18863185 6.5,4.5 7,5 L4,5 C4,5 3.21375,4.37625 3.17625,4.30875 C2.985,3.9525 2.8875,3.53625 2.8875,3.06 Z M14,6 L0,6 L0,8 L7.21875,8 C7.35375,8.0525 7.51875,8.105 7.63125,8.15375 C7.90875,8.2775 8.12625,8.40875 8.28375,8.53625 C8.44125,8.6675 8.54625,8.81 8.6025,8.96 C8.65875,9.11375 8.685,9.28625 8.685,9.47375 C8.685,9.65 8.65125,9.815 8.58375,9.965 C8.51625,10.11875 8.41125,10.25 8.2725,10.35875 C8.13375,10.4675 7.95375,10.55375 7.74,10.6175 C7.5225,10.68125 7.27125,10.71125 6.97875,10.71125 C6.6525,10.71125 6.35625,10.6775 6.09,10.61375 C5.82375,10.55 5.59875,10.445 5.41125,10.3025 C5.22375,10.16 5.0775,9.9725 4.9725,9.74375 C4.8675,9.515 4.78125,9.17 4.78125,9 L2.55,9 C2.55,9.2525 2.61,9.6875 2.72625,10.025 C2.8425,10.3625 3.0075,10.66625 3.21375,10.9325 C3.42,11.19875 3.6675,11.4275 3.94875,11.6225 C4.23,11.8175 4.53375,11.9825 4.86375,12.11 C5.19375,12.24125 5.535,12.33875 5.89875,12.39875 C6.25875,12.4625 6.6225,12.4925 6.9825,12.4925 C7.5825,12.4925 8.13,12.425 8.6175,12.28625 C9.105,12.1475 9.525,11.94875 9.87,11.69375 C10.215,11.435 10.48125,11.12 10.6725,10.74125 C10.86375,10.3625 10.95375,9.935 10.95375,9.455 C10.95375,9.005 10.875,8.6 10.72125,8.24375 C10.68375,8.1575 10.6425,8.075 10.59375,7.9925 L14,8 L14,6 Z" transform="translate(2 3)"></path></svg></button>
		<span class="texteditorseperator"></span>
		<button onclick="editText(this)" id="subscript" class="texteditoritem" title="Subscript" type="button"><svg width="16px" height="16px"><path xmlns="http://www.w3.org/2000/svg" fill="#5f6368" fill-rule="evenodd" d="M13,6 L11,6 L11,7 L13,7 L13,8 L12,8 C11.448,8 11,8.4475 11,9 L11,11 L14,11 L14,10 L12,10 L12,9 L13,9 C13.5525,9 14,8.5525 14,8 L14,7 C14,6.4475 13.5525,6 13,6 Z M5,6.5 L8,11 L9.88503367,11 L6.5,5.5 L10,0 L8,0 L5,4.5 L2,0 L0,0 L3.5,5.5 L0,11 L2,11 L5,6.5 Z" transform="translate(2 4)"></path></svg></button>
		<button onclick="editText(this)" id="superscript" class="texteditoritem" title="Superscript" type="button"><svg width="16px" height="16px"><path xmlns="http://www.w3.org/2000/svg" fill="#5f6368" fill-rule="evenodd" d="M13,0 L11,0 L11,1 L13,1 L13,2 L12,2 C11.448,2 11,2.4475 11,3 L11,5 L14,5 L14,4 L12,4 L12,3 L13,3 C13.5525,3 14,2.5525 14,2 L14,1 C14,0.4475 13.5525,0 13,0 Z M5,6.5 L8,11 L9.88503367,11 L6.5,5.5 L10,0 L8,0 L5,4.5 L2,0 L0,0 L3.5,5.5 L0,11 L2,11 L5,6.5 Z" transform="translate(2 4)"></path></svg></button>
		<span class="texteditorseperator"></span>
		<button onclick="editTooltip()" id="tooltip" class="texteditoritem editor-tooltip" title="Add tooltip" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#5f6368" fill-rule="evenodd" d="M10 13H6a1 1 0 01-1-1 4.552 4.552 0 00-1.1-1.87A7.017 7.017 0 012 6a6 6 0 1112 0 7.017 7.017 0 01-1.9 4.13A4.552 4.552 0 0011 12a1 1 0 01-1 1zm-3.188-2h2.376a8.489 8.489 0 011.328-2.093A5.415 5.415 0 0012 6a4.054 4.054 0 00-4-4 4.054 4.054 0 00-4 4 5.415 5.415 0 001.484 2.907c.543.629.99 1.334 1.328 2.093zM10 16H6a1 1 0 010-2h4a1 1 0 010 2z"></path></svg></button>
		<span class="texteditorseperator"></span>
		<button onclick="editText(this)" id="removeFormat" class="texteditoritem" title="Clear formatting" type="button"><svg width="18px" height="16px">&lt;<path xmlns="http://www.w3.org/2000/svg" fill="#5f6368" fill-rule="evenodd" d="M0.27,1.55 L5.43,6.7 L3,12 L5.5,12 L7.14,8.42 L11.73,13 L13,11.73 L1.55,0.27 L0.27,1.55 L0.27,1.55 Z M3.82,0 L5.82,2 L7.58,2 L7.03,3.21 L8.74,4.92 L10.08,2 L14,2 L14,0 L3.82,0 L3.82,0 Z" transform="translate(2 3)"></path>/svg&gt;</svg></button>
	</div>
	<p class="switchlabel">Page editor</p>
	<label class="switch">
		<input id="editortoggle" type="checkbox" checked onclick="toggleEditor()">
		<span class="slider"></span>
	</label>
	<button onclick="saveDocument()" class="editor-save switchbutton"></button>
`;

const editableItems = ".footertext, .headertext, #headerlink, #headerlink p, .pageheader span, .pagecontent p, .pagecontent li, .pagecontent p span, .pagecontent a, .pagecontent a span";
const draggableItems = ".spacer";
const popupItems = {
	".headerimage": "bottom",
	".text": "bottom",
	".spacer": "middle",
	".heading": "bottom",
	".subheading": "bottom",
	".mainimage": "bottom",
	".mainimagetext": "bottom",
	".sideimage": "top",
	".sidevideo": "top",
	".list": "bottom",
	".pointform": "bottom",
	".references": "bottom",
	".galleryitem": "top",
	".placeholder": "middle",
	".smallimage": "bottom",
	".tipimage": "bottom",
	".section": "top",
	".sectioncenter": "top",
	".fixedsideimage": "bottom",
	"iframe": "middle",
};
const sideEditorItems = {
	".panel": "bottom",
	".gallery": "bottom",
	".innerimagecontainer": "bottom",
};
const headerItems = {
	".headertext": "bottom",
};
const iconItems = {
	"#headericonlink": "bottom",
};
const iconClickItems = {
	"#headericon": "bottom",
};
const styleClasses = ["left", "center", "right"];

const defaultImage = '/staticfiles/default.jpg';
const saveUrl = 'editor/save';
const pageUrl = 'editor/page';
const imagesUrl = 'editor/fetchimages';
const saveImageUrl = 'editor/saveimage';
const deleteImageUrl = 'editor/deleteimage';
const editImageUrl = 'editor/editimage';
const saveIconUrl = 'editor/setfavicon';

let popupTarget = null;
let overlayTarget = null;
`let dragBar = null;
let editPopup = null;
let editPopupContainer = null;`
let allowTransition = false;
let currentlySaving = false;
let prevSettings = { "style": "", "image": "", "location": "", "href": "" };

var showOverlayCurtain = function () {
	if (!document.getElementById("editoroverlay")) {
		var overlay = document.createElement('div');
		overlay.id = "editoroverlay";
		overlay.style.opacity = 0;
		document.body.appendChild(overlay);
	}
}
var hideOverlayCurtain = function (value = 1) {
	if (document.querySelectorAll(".editoroverlaybox").length <= value) {
		overlay = document.getElementById("editoroverlay")
		overlay.style.animationName = "fadeOut";
		overlay.addEventListener("animationend", overlay.remove);
	}
}

var saveDocument = function () {
	toggleEditor(true);
	showOverlayCurtain();
	currentlySaving = true;
	var box = document.createElement('div');
	var text = document.createElement("p");
	var content = document.createTextNode("Saving...");
	box.id = "saveoverlay";
	var reopen = false;
	if (document.getElementById("texteditor").style.opacity == 1) {
		closeTextEditor();
		reopen = true;
	}
	document.body.appendChild(box);
	box.appendChild(text);
	text.appendChild(content);
	document.body.style.overflow = "hidden";
	closePopup();

	box.addEventListener('animationend', (event) => {
		if (!currentlySaving) {
			content.textContent = "✓";
			setTimeout((e) => {
				box.classList.add("closing");
				hideOverlayCurtain(0);
			}, 200)
			box.addEventListener('animationend', (event) => {
				box.remove();
				if (reopen) openTextEditor();
			}, { once: true });
			document.body.style.overflow = "auto";
		}
		currentlySaving = false;
	}, { once: true });

	fetch((window.location.href + "/" + saveUrl).replace("//" + saveUrl, "/" + saveUrl), {
		method: 'POST',
		mode: "same-origin",
		headers: {
			"X-CSRFToken": csrftoken,
			"Accept": "network/json",
			"Content-Type": "network/json",
		},
		body: JSON.stringify({
			"title": document.title,
			"header": document.getElementsByClassName("pageheader")[0].innerHTML.trim(),
			"footer": document.getElementsByClassName("pagefooter")[0].innerHTML.trim(),
			"content": document.getElementsByClassName("pagecontent")[0].innerHTML.trim(),
		})
	}).then((response) => {
		if (response.ok) {
			toggleEditor();
			if (!currentlySaving) {
				content.textContent = "✓";
				setTimeout((e) => {
					box.classList.add("closing");
					hideOverlayCurtain(0);
				}, 200)
				box.addEventListener('animationend', (event) => {
					box.remove();
					if (reopen) openTextEditor();
				}, { once: true });
				document.body.style.overflow = "auto";
			}
			currentlySaving = false;
		} else {
			content.textContent = "Error";
		}
	})
}

var moveItemUp = function () {
	if (popupTarget.previousElementSibling) {
		popupTarget.parentNode.insertBefore(popupTarget, popupTarget.previousElementSibling);
		updatePopup(document.getElementById("editpopupcontainer"));
	};
};
var moveItemDown = function () {
	if (popupTarget.nextElementSibling) {
		popupTarget.parentNode.insertBefore(popupTarget.nextElementSibling, popupTarget);
		updatePopup(document.getElementById("editpopupcontainer"));
	};
};
var deleteItem = function () {
	popupTarget.remove();
	updatePopup(document.getElementById("editpopupcontainer"));
	showPlaceholder()
};
var allowEditing = function (element) {
	element.contentEditable = "true";
	element.addEventListener('focus', openTextEditor);
	element.addEventListener('focusout', closeTextEditor);
	element.addEventListener('mousedown', updateTextEditor);
	element.addEventListener('mouseup', updateTextEditor);
	element.addEventListener('keydown', updateTextEditorFull);
	element.addEventListener('keyup', updateTextEditorFull2);
}
var addItem = function (elmclass) {
	switch (elmclass) {
		case "panel": {
			var element = document.createElement("div");
			createSideEditor(element);
			break
		}
		case "heading":
		case "subheading":
		case "mainimagetext":
		case "list":
		case "references":
		case "text": {
			var element = document.createElement("p");
			var content = document.createTextNode("");
			element.appendChild(content);
			element.addEventListener('mouseenter', openPopup);
			element.addEventListener('mouseleave', closePopup);
			break
		}
		case "pointform": {
			var element = document.createElement("li");
			var content = document.createTextNode("");
			element.appendChild(content);
			element.addEventListener('mouseenter', openPopup);
			element.addEventListener('mouseleave', closePopup);
			break
		}
		case "section": 
		case "sectioncenter": {
			var element = document.createElement("div");
			element.addEventListener('mouseenter', openPopup);
			element.addEventListener('mouseleave', closePopup);
			break
		}
		case "galleryitem": {
			var element = document.createElement("a");
			var gallerycaption = document.createElement("span");
			var content = document.createTextNode("");
			gallerycaption.className = "gallerycaption";
			element.style.backgroundImage = `url(${defaultImage})`;
			element.appendChild(gallerycaption);
			gallerycaption.appendChild(content);
			element.addEventListener('mouseenter', openPopup);
			element.addEventListener('mouseleave', closePopup);
			break
		}
		case "imagecontainer": {
			var element = document.createElement("div");
			var innerimagecontainer = document.createElement("div");
			var mainimage = document.createElement("img");
			innerimagecontainer.className = "innerimagecontainer";
			mainimage.className = "mainimage";
			mainimage.src = defaultImage;
			element.appendChild(innerimagecontainer);
			innerimagecontainer.appendChild(mainimage);
			mainimage.addEventListener('mouseenter', openPopup);
			mainimage.addEventListener('mouseleave', closePopup);
			createSideEditor(element);
			break
		}
		case "smallimage":
		case "fixedsideimage": 
		case "tipimage": {
			var element = document.createElement("img");
			element.src = defaultImage;
			element.addEventListener('mouseenter', openPopup);
			element.addEventListener('mouseleave', closePopup);
			break
		}
		case "gallery": {
			var element = document.createElement("div");
			createSideEditor(element);
			break
		}
		case "sideimage": {
			var element = document.createElement("div");
			element.style.backgroundImage = `url(${defaultImage})`;
			element.addEventListener('mouseenter', openPopup);
			element.addEventListener('mouseleave', closePopup);
			break
		}
		default: {
			var element = document.createElement("div");
			element.addEventListener('mouseenter', openPopup);
			element.addEventListener('mouseleave', closePopup);
		}
	}
	resetPopup();
	element.setAttribute("class", elmclass);
	if (popupTarget.itemtarget == "outside") {
		popupTarget.insertAdjacentElement("afterend", element);
	} else {
		popupTarget.appendChild(element);
	}
	element.style.animation = "scaleIn .2s"
	element.addEventListener("animationend", e => { element.style.removeProperty("animation") })
	removePlaceholder()

	if (element.matches(editableItems)) {
		allowEditing(element)
	}
	element.querySelectorAll(editableItems).forEach(allowEditing)
};
var showItemList = function (editpopup, pos) {
	if (pos == "outside") {
		editpopup.innerHTML = addOptions1 + addOptions3 + addOptions2;
	} else {
		editpopup.innerHTML = addOptions1 + addOptions2;
	}
	editpopup.classList.add("options");
	popupTarget.itemtarget = pos;
};
var closeOverlay = function (box) {
	hideOverlayCurtain();
	box.style.animationName = "slideOut";
	box.addEventListener("animationend", box.remove);
	document.body.style.overflow = "auto";
}
var checkOverlayStatus = function (button, imageValue, styleValue, locationValue, hrefValue) {
	if (imageValue == prevSettings.image && styleValue == prevSettings.style && locationValue == prevSettings.location && hrefValue == prevSettings.href) {
		button.disabled = true;
	} else {
		button.disabled = false;
	}
}
var setImageFromOverlay = function (inputBox, value) {
	if (inputBox.getAttribute('isbackgroundimage')) {
		overlayTarget.style.backgroundImage = `url("${value}")`;
	} else {
		overlayTarget.src = value;
	}
}
var setHrefFromOverlay = function (value) {
	overlayTarget.href = value;
}
var setStyleClassFromOverlay = function (value) {
	styleClasses.forEach(e => {
		if (value == e) {
			overlayTarget.classList.add(e);
		} else {
			overlayTarget.classList.remove(e);
		};
	});
}
var clearOverlay = function (box) {
	overlayTarget.style = prevSettings.style
	setImageFromOverlay(document.getElementById("imageurlarea"), prevSettings.image);
	setStyleClassFromOverlay(prevSettings.location);
	setHrefFromOverlay(prevSettings.href)
	prevSettings.image = "";
	prevSettings.style = "";
	prevSettings.location = "";
	prevSettings.href = "";
	closeOverlay(box);
}
var setFavicon = function (box) {
	var imageEntry = box.querySelector("#imageurlarea");
	var fileUrl = imageEntry.value;
	if (fileUrl) {
		fetch(saveIconUrl, {
			method: 'POST',
			mode: "same-origin",
			headers: {
				"X-CSRFToken": csrftoken,
				"Accept": "network/json",
				"Content-Type": "network/json",
			},
			body: fileUrl,
		})
			.then((res) => {
				var input = document.getElementById("faviconinput");
				var image = window.getComputedStyle(input, false).backgroundImage.slice(4, -1).replace(/"/g, "");
				var date = new Date().getTime();
				input.style.backgroundImage = `url(${image}?${date})`
				document.getElementById("headericon").src = `${image}?${date}`
				document.querySelector("link[rel~='icon']").href = `${image}?${date}`;
			})
	}
	closeOverlay(box)
}

var downloadImage = function (event) {
	showOverlayCurtain();
	var box = document.createElement('div');
	box.id = "filenameoverlaybox";

	box.style.top = event.target.getBoundingClientRect().top + "px";

	document.body.appendChild(box);

	var row = document.createElement('div');
	var rowEntry = document.createElement("input");

	row.setAttribute("class", "overlayrow");
	rowEntry.setAttribute("id", "editorstyleentry");
	rowEntry.setAttribute("placeholder", "Type filename here...")

	var button = document.createElement("button");
	button.setAttribute("class", "shortbutton editor-check");
	button.setAttribute("id", "uselocalimage");
	var save = (e) => {
		var value = rowEntry.value;
		if (value) {
			var imageEntry = document.getElementById("imageurlarea");
			fetch((saveImageUrl), {
				method: 'POST',
				mode: "same-origin",
				headers: {
					"X-CSRFToken": csrftoken,
					"Accept": "network/json",
					"Content-Type": "network/json",
				},
				body: JSON.stringify({
					"name": value,
					"url": imageEntry.value,
				}),
			})
				.then((res) => res.json())
				.then((json) => {
					event.target.imageFunc(json.url);
				})
			box.style.animationName = "fadeOut";
			box.addEventListener("animationend", box.remove)
			document.getElementById("imagebuttonareabox").style.display = "revert";
		} else {
			rowEntry.style.removeProperty("animation");
			setTimeout(e => {
				rowEntry.style.animation = "flash 1s forwards";
			}, 1);
		}
	};
	var button2 = document.createElement("button");
	button2.setAttribute("class", "shortbutton editor-close");

	rowEntry.addEventListener('keyup', function (event) { if (event.key === 'Enter') { save() } });
	button.addEventListener('click', save);
	button2.addEventListener('click', e => {
		box.style.animationName = "fadeOut";
		box.addEventListener("animationend", box.remove)
		document.getElementById("imagebuttonareabox").style.display = "revert";
	});

	box.appendChild(row);
	row.appendChild(rowEntry);
	row.appendChild(button);
	row.appendChild(button2);

	rowEntry.focus();
	document.getElementById("imagebuttonareabox").style.display = "none";
}
var openOverlay = function (editpopup, fulloptions = true) {
	showOverlayCurtain();
	if (fulloptions) {
		overlayTarget = popupTarget;
	}

	var box = document.createElement('div');
	box.className = "editoroverlaybox";

	box.style.top = editpopup.getBoundingClientRect().top + "px";
	box.style.left = editpopup.getBoundingClientRect().left + "px";
	box.style.height = editpopup.offsetHeight + "px";
	box.style.width = editpopup.offsetWidth + "px";

	document.body.appendChild(box);
	document.body.style.overflow = "hidden";

	var header = document.createElement('div');
	header.setAttribute("id", "overlayheader");
	var text = document.createElement("p");
	var button = document.createElement("button");
	button.setAttribute("disabled", true);
	button.setAttribute("class", "shortbutton editor-check");
	var button2 = document.createElement("button");
	button2.setAttribute("class", "shortbutton editor-close");

	if (fulloptions) {
		button.addEventListener("click", e => closeOverlay(box));
		button2.addEventListener("click", e => clearOverlay(box));
		var content = document.createTextNode("Edit " + overlayTarget.classList[0] + ":");
	} else {
		button.addEventListener("click", e => setFavicon(box));
		button2.addEventListener("click", e => closeOverlay(box));
		var content = document.createTextNode("Set icon:");
	}

	closePopup();
	box.appendChild(header);
	header.appendChild(text);
	header.appendChild(button);
	header.appendChild(button2);
	text.appendChild(content);

	var imageSelector = document.createElement('div');
	var imageInputBox = document.createElement('div');
	var imageButtonBox = document.createElement('div');
	var imageDisplayBox = document.createElement('img');
	var imageButtonDownload = document.createElement('button');
	var imageButtonDelete = document.createElement('button');
	var imageButtonNew = document.createElement('button');
	var imageInput = document.createElement("input");
	imageSelector.setAttribute("id", "imagedroparea");
	imageInputBox.setAttribute("id", "imageurlareabox");
	imageDisplayBox.setAttribute("id", "imagedisplayarea");
	imageDisplayBox.setAttribute("alt", "");
	imageButtonBox.setAttribute("id", "imagebuttonareabox");
	imageInput.setAttribute("id", "imageurlarea");
	imageInput.setAttribute("placeholder", "Type image url here or drag image");
	imageInput.setAttribute("type", "text");
	imageButtonNew.setAttribute("class", "shortbutton editor-new");
	imageButtonDelete.setAttribute("class", "shortbutton editor-delete");
	imageButtonDelete.setAttribute("disabled", true);
	imageButtonDownload.setAttribute("class", "shortbutton editor-download");
	imageButtonDownload.setAttribute("disabled", true);

	if (fulloptions) {
		var row = document.createElement('div');
		var rowText = document.createElement("p");
		var rowTextContent = document.createTextNode("Style:");
		var rowEntry = document.createElement("input");
		var rowEntry2 = document.createElement("input");
		var rowSelector = document.createElement('div');
		var rowSelectorText = document.createElement('p');
		var rowSelectorContent = document.createTextNode(styleClasses[0]);
		var rowSelectorBox = document.createElement('div');
		rowSelector.addEventListener("click", e => {
			rowSelectorBox.classList.toggle("show");
		});
		prevSettings.location = styleClasses[0]

		styleClasses.forEach(e => {
			if (overlayTarget.classList.contains(e)) {
				rowSelectorContent.nodeValue = e;
				prevSettings.location = e;
			}
			var rowSelectorOption = document.createElement('button');
			rowSelectorOption.setAttribute("class", "longbutton");
			rowSelectorOption.appendChild(document.createTextNode(e));
			rowSelectorOption.addEventListener("click", c => {
				rowSelectorContent.nodeValue = e;
				setStyleClassFromOverlay(e);
				checkOverlayStatus(button, imageInput.value, rowEntry.value, e, rowEntry2.value)
			});
			rowSelectorBox.appendChild(rowSelectorOption);
		});
		row.setAttribute("class", "overlayrow");
		rowEntry.setAttribute("id", "editorstyleentry");
		rowSelector.setAttribute("class", "dropbutton");
		rowSelectorText.setAttribute("id", "posdropdown");
		rowEntry.addEventListener("keyup", e => {
			overlayTarget.style = rowEntry.value;
			checkOverlayStatus(button, imageInput.value, rowEntry.value, rowSelectorText.innerText, rowEntry2.value)
			setImageFromOverlay(imageInput, imageInput.value);
		})
		if (overlayTarget.hasAttribute("style")) {
			rowEntry.value = overlayTarget.getAttribute("style").replace(/( |)background-image.*?(;|$)/, '');
			prevSettings.style = rowEntry.value;
		}
		box.appendChild(row);
		row.appendChild(rowText);
		row.appendChild(rowEntry);
		row.appendChild(rowSelector);
		rowSelector.appendChild(rowSelectorText);
		rowSelectorText.appendChild(rowSelectorContent)
		rowSelector.appendChild(rowSelectorBox);
		rowText.appendChild(rowTextContent);

		if (overlayTarget.tagName == "A") {
			var row2 = document.createElement('div');
			var rowText2 = document.createElement("p");
			var rowTextContent2 = document.createTextNode("Url:");
			var url = overlayTarget.getAttribute("href");
			if (!url) { url = "" };
			row2.setAttribute("class", "overlayrow");
			rowEntry2.setAttribute("id", "editorurlentry");
			rowEntry2.setAttribute("value", url)
			prevSettings.href = url;
			rowEntry2.addEventListener("keyup", e => {
				checkOverlayStatus(button, imageInput.value, rowEntry.value, rowSelectorText.innerText, rowEntry2.value)
				setHrefFromOverlay(rowEntry2.value);
			})
			box.appendChild(row2);
			row2.appendChild(rowText2);
			row2.appendChild(rowEntry2);
			rowText2.appendChild(rowTextContent2);
		} else {
			prevSettings.href = "";
		}
	}

	var blankImage = ""

	var loadImage = url => {
		if (imageDisplayBox.src != url) {
			imageInput.value = url;
			if (url == "") {
				url = blankImage;
			}
			imageDisplayBox.src = url;
			imageButtonDownload.setAttribute("disabled", true);
			imageButtonDelete.setAttribute("disabled", true);
			imageDisplayBox.style.opacity = 0;

			if (fulloptions) {
				setImageFromOverlay(imageInput, url);
				checkOverlayStatus(button, imageInput.value, rowEntry.value, rowSelectorText.innerText, rowEntry2.value)
			} else {
				button.setAttribute("disabled", true);
			}
		}
	}
	imageDisplayBox.imageFunc = loadImage
	imageButtonDownload.addEventListener("click", downloadImage);
	imageButtonDelete.addEventListener("click", e => { loadImage("") });
	imageButtonNew.addEventListener("click", openImagesOverlay);
	imageButtonDownload.imageFunc = loadImage;
	imageButtonNew.imageFunc = loadImage;

	box.appendChild(imageSelector);
	imageSelector.appendChild(imageDisplayBox);
	if (fulloptions) {
		imageSelector.appendChild(imageButtonBox);
		imageButtonBox.appendChild(imageButtonDownload);
		imageButtonBox.appendChild(imageButtonDelete);
		imageButtonBox.appendChild(imageButtonNew);
	};
	imageSelector.appendChild(imageInputBox);
	imageInputBox.appendChild(imageInput);

	if (fulloptions) {
		var selector = (/url\(["']?([^"']*)["']?\)/);
		if (selector.test(overlayTarget.style.backgroundImage)) {
			var fileUrl = overlayTarget.style.backgroundImage.match(selector)[1];
			if (fileUrl != "") {
				fileUrl = (new URL(fileUrl, document.location).href);
			};
			prevSettings.image = fileUrl;
			loadImage(fileUrl);
			imageInput.setAttribute("isbackgroundimage", true);
		} else if (overlayTarget.src) {
			var fileUrl = overlayTarget.src;
			isBackgroundImage = false;
			if (fileUrl != "") {
				fileUrl = (new URL(fileUrl, document.location).href);
			};
			prevSettings.image = fileUrl;
			loadImage(fileUrl);
		} else {
			imageInput.setAttribute("isbackgroundimage", true);
			imageInput.value = "";
		}
	} else {
		imageDisplayBox.style.width = "revert";
		if (editpopup.src) {
			blankImage = editpopup.src;
		} else {
			var style = window.getComputedStyle(editpopup, false);
			blankImage = style.backgroundImage.slice(4, -1).replace(/"/g, "")
		}
		loadImage(blankImage)
		imageInput.value = "";
	}

	imageSelector.addEventListener('dragover', (event) => {
		event.stopPropagation();
		event.preventDefault();
		imageSelector.style.outlineWidth = "2px";
	});
	imageSelector.addEventListener('dragleave', (event) => {
		event.stopPropagation();
		event.preventDefault();
		imageSelector.style.outlineWidth = "0px";
	});
	imageSelector.addEventListener('drop', (event) => {
		event.stopPropagation();
		event.preventDefault();
		/*fileUrl = event.dataTransfer.getData("URL");*/
		try {
			fileUrl = event.dataTransfer.getData("text/html");
			fileUrl = fileUrl.match('src="(.*?)"')[0]
			fileUrl = fileUrl.toString().slice(4, -1).replace(/"/g, "")
			loadImage(fileUrl);
			imageSelector.style.outlineWidth = "0px";
		} catch {
			imageSelector.style.outlineWidth = "0px";
		}
	});
	imageInput.addEventListener("keyup", (event) => {
		fileUrl = imageInput.value;
		loadImage(fileUrl);
	});
	imageDisplayBox.addEventListener('load', (event) => {
		imageButtonDelete.disabled = false;
		if (!fulloptions && imageInput.value != 0) { button.disabled = false }
		var hrefURL = new URL(imageDisplayBox.src);
		var pageURL = new URL(window.location);
		imageDisplayBox.style.opacity = 1;
		if (hrefURL.host === pageURL.host) {
			imageButtonDownload.disabled = true;
		} else {
			imageButtonDownload.disabled = false;
		}
	});
};
var openImagesOverlay = function (event) {
	var box = document.createElement('div');
	box.id = "imageoverlaybox";

	box.style.top = event.target.getBoundingClientRect().top + "px";
	box.style.left = event.target.getBoundingClientRect().left + "px";
	box.style.height = event.target.offsetHeight + "px";
	box.style.width = event.target.offsetWidth + "px";

	document.body.appendChild(box);

	var header = document.createElement('div');
	header.setAttribute("id", "overlayheader");
	var text = document.createElement("p");
	var content = document.createTextNode("Select image:");
	var button = document.createElement("button");
	button.setAttribute("class", "shortbutton editor-check");
	button.setAttribute("id", "uselocalimage");
	button.setAttribute("disabled", true)

	button.onclick = (e) => {
		document.querySelectorAll('#selectedimage img').forEach(e => {
			event.target.imageFunc(e.src);
		});
		box.style.animationName = "slideOut";
		box.addEventListener("animationend", box.remove);
		document.getElementbyId("editoroverlay").removeEventListener("click", clearImageSelection);
	};
	var button2 = document.createElement("button");
	button2.setAttribute("class", "shortbutton editor-close");
	button2.onclick = (e) => {
		box.style.animationName = "slideOut";
		box.addEventListener("animationend", box.remove);
		document.getElementById("editoroverlay").removeEventListener("click", clearImageSelection);
	};

	box.appendChild(header);
	header.appendChild(text);
	header.appendChild(button);
	header.appendChild(button2);
	text.appendChild(content);

	var imagecontainerbox = document.createElement('div');
	imagecontainerbox.setAttribute("id", "localimagecontainerbox")
	var imageContainer = document.createElement('div');
	imageContainer.setAttribute("id", "localimagecontainer")
	box.appendChild(imagecontainerbox);
	imagecontainerbox.appendChild(imageContainer);

	fetch(imagesUrl)
		.then((res) => res.json())
		.then((json) => {
			json.images.forEach(e => {
				var imageBox = document.createElement('div');
				imageBox.setAttribute("class", "localimagebox");
				var imageButtons = document.createElement('div');
				imageButtons.setAttribute("class", "localimagebuttonbox");
				var editButton = document.createElement('button');
				editButton.setAttribute("class", "headerbutton editor-edit");
				var deleteButton = document.createElement('button');
				deleteButton.setAttribute("class", "headerbutton editor-delete");
				var image = document.createElement('img');
				image.setAttribute("class", "localimage");
				image.setAttribute("src", e);
				imageBox.addEventListener("click", function () { localImageClick(imageBox, image) });
				editButton.addEventListener("click", function () { localImageEdit(image) });
				deleteButton.addEventListener("click", function () { localImageDelete(imageBox, image) });
				image.onload = e => {
					imageBox.style.opacity = 1;
				}
				imageContainer.appendChild(imageBox);
				imageBox.appendChild(image);
				imageBox.appendChild(imageButtons);
				imageButtons.appendChild(editButton);
				imageButtons.appendChild(deleteButton);
			})
		})
		.catch(err => { throw err });

	var text2 = document.createElement("p");
	var content2 = document.createTextNode("");
	text2.setAttribute("id", "localimagesrc");
	box.appendChild(text2);
	text2.appendChild(content2);

	document.getElementById("editoroverlay").addEventListener("click", clearImageSelection);
}
var clearImageSelection = function (event) {
	document.querySelectorAll('#selectedimage').forEach(e => e.removeAttribute("id"));
	document.getElementById("localimagesrc").innerText = "";
	document.getElementById("uselocalimage").disabled = true;
}
var localImageEdit = function (image) {
	fetch(editImageUrl, {
		method: 'POST',
		mode: "same-origin",
		headers: {
			"X-CSRFToken": csrftoken,
			"Accept": "network/json",
			"Content-Type": "network/json",
		},
		body: JSON.stringify({
			"url": image.src,
		})
	})
}
var localImageDelete = function (box, image) {
	fetch(deleteImageUrl, {
		method: 'POST',
		mode: "same-origin",
		headers: {
			"X-CSRFToken": csrftoken,
			"Accept": "network/json",
			"Content-Type": "network/json",
		},
		body: JSON.stringify({
			"url": image.src,
		})
	});
	box.style.animation = "fadeOut .25s";
	box.addEventListener("animationend", e => {
		box.remove();
		clearImageSelection();
	});
	var imageDisplayBox = document.getElementById("imagedisplayarea");
	if (image.src == imageDisplayBox.src) {
		imageDisplayBox.imageFunc("");
	}
	if (image.src == prevSettings.image) {
		prevSettings.image = "";
	}
}
var localImageClick = function (box, image) {
	document.querySelectorAll('#selectedimage').forEach(e => e.removeAttribute("id"));
	box.setAttribute("id", "selectedimage");
	document.getElementById("localimagesrc").innerText = image.src;
	document.getElementById("uselocalimage").disabled = false;
}
var finishClosingPopup = function (event) {
	if (allowTransition) {
		document.getElementById("editpopupcontainer").style.display = "none";
		if (document.querySelectorAll('.sideeditorcontainer:hover').length === 0) {
			popupTarget = null;
		}
	};
};
var closePopup = function (event, force) {
	var editPopup = document.getElementById("editpopup");
	if ((document.querySelectorAll('#editpopup:hover, #dragbar:hover').length === 0 && editPopup != null) || (force)) {
		allowTransition = true;
		editPopup.style.opacity = 0;
		`if (!dragging) {
			dragBar.style.opacity = 0;
		}`
	};
};
var resetPopup = function (event) {
	popups = document.querySelectorAll(".options"); /*event.currentTarget*/
	popups.forEach(e => {
		e.innerHTML = editOptions;
		e.classList.remove("options");
	});
};
var updatePopup = function (container) {
	if (popupTarget.offsetParent) {
		targetAttr = popupTarget.getBoundingClientRect();
		itemPosition = popupItems["." + popupTarget.classList[0]]
		switch (itemPosition) {
			case "top":
				container.style.top = targetAttr.top + document.documentElement.scrollTop + "px";
				break;
			case "middle":
				container.style.top = (((targetAttr.bottom - targetAttr.top) / 2) + targetAttr.top) + document.documentElement.scrollTop + "px";
				break;
			default:
				container.style.top = targetAttr.bottom + document.documentElement.scrollTop + "px";
		};
		container.style.left = targetAttr.left + document.documentElement.scrollLeft + "px";
		container.style.width = popupTarget.offsetWidth + "px";

		`if (popupTarget.matches(draggableItems)) {
			dragBar.style.top = targetAttr.top + document.documentElement.scrollTop + "px";
			dragBar.style.left = targetAttr.left + document.documentElement.scrollLeft + "px";
			dragBar.style.height = targetAttr.height + "px";
			dragBar.style.width = targetAttr.width + "px";
			dragBar.style.marginLeft = "0px";
		} else {
			dragBar.style.top = targetAttr.top + document.documentElement.scrollTop + "px";
			dragBar.style.left = targetAttr.right + document.documentElement.scrollLeft + "px";
			dragBar.style.height = "16px";
			dragBar.style.width = "16px";
			dragBar.style.marginLeft = "-16px";
		}`
	} else {
		closePopup(null, true);
	}
}
var openPopup = function (event) {
	allowTransition = false;
	var target = popupTarget;
	popupTarget = event.currentTarget;
	var container = document.getElementById("editpopupcontainer")
	var editpopup = document.getElementById("editpopup")
	container.style.display = "";
	editpopup.style.opacity = 1;

	if (target === null) {
		container.classList.add('notransition');
		updatePopup(container);
		container.offsetHeight;
		container.classList.remove('notransition');
	} else {
		updatePopup(container);
	};
	container.setAttribute("parentclass", popupTarget.classList[0]);
	
	`if (!popupTarget.matches(draggableItems)) {
		dragBar.style.opacity = 1;
	}`
};
var closeTextEditor = function () {
	document.getElementById("texteditor").style.opacity = 0;
	document.getElementById("texteditor").style.pointerEvents = "none";
}
var updateTextEditorFull = function (event) {
	var content = event.target.innerHTML.replace("&nbsp;", " ");
	if ((content.match("<br><br>|<br>|.<br>|.?") == content) && (event.key === 'Backspace' || event.key === 'Delete')) {
		event.preventDefault();
		event.target.innerHTML = "";
	} else if (event.target.innerHTML == "" && event.key === 'Enter') {
		var item = document.createElement("br");
		event.target.appendChild(item)
	}
	updateTextEditor();
};
var updateTextEditorFull2 = function (event) {
	if (event.target.innerHTML == "<br>" && (event.key === 'Backspace' || event.key === 'Delete')) {
		event.target.innerHTML = "";
	}
	updateTextEditor();
};
var updateTextEditor = function () {
	document.querySelectorAll(".texteditoritem").forEach(e => {
		var itemid = e.id;
		if (document.queryCommandState(itemid)) {
			e.classList.add("active");
		} else {
			e.classList.remove("active");
		}
	})
};
var openTextEditor = function () {
	document.getElementById("texteditor").style.opacity = 1;
	document.getElementById("texteditor").style.pointerEvents = "all";
}
var editText = function (elm) {
	document.execCommand(elm.id, false, null);
	updateTextEditor();
};
var editTooltip = function () {
	document.execCommand("insertHTML", false, "<span class='tooltip'>" + document.getSelection() + "<span class='tooltiptext'>Insert tip here.</span></span>");
	updateTextEditor();
}
var updateTitle = function (event) {
	document.title = event.target.value;
}
var showHeaderPlaceholder = function () {
	document.querySelectorAll(".pageheader").forEach(e => {
		if (document.querySelectorAll(".headertext").length == 0) {
			editor = document.createElement("div")
			editor.id = "headereditorshown";
			editor.innerHTML = noHeaderOptions;
			e.appendChild(editor);
		}
	})
}
var removeHeaderPlaceholder = function () {
	var element = document.querySelector("#headereditorshown")
	if (element) {
		element.remove()
	}
}
var removeHeader = function (element) {
	element.parentNode.parentNode.remove()
	showHeaderPlaceholder();
}

var addHeader = function (element) {
	var element = element.parentNode;
	var link = document.createElement("a");
	link.className = "headertext";
	link.contentEditable = "true";
	var content = document.createTextNode("New page");
	element.insertAdjacentElement("afterend", link);
	link.appendChild(content);
	createHeaderEditor(link);
	removeHeaderPlaceholder();
}
var iconClick = function (event) {
	event.preventDefault();
	openOverlay(event.target, false);
}
var toggleEditor = function (forcedisable = false) {
	var toggle = document.getElementById("editortoggle");
	var label = document.getElementById("editortogglelabel");
	var editor = document.getElementById("editor");
	if (toggle.checked && !forcedisable) {
		editor.classList.remove("editingdisabled");
		document.body.className += "showguides";

		var headers = document.body.querySelectorAll(editableItems);
		headers.forEach(allowEditing);

		headers = document.querySelectorAll(Object.keys(popupItems));
		headers.forEach(e => {
			e.addEventListener('mouseenter', openPopup);
			e.addEventListener('mouseleave', closePopup);
		});
		headers = document.querySelectorAll(Object.keys(sideEditorItems));
		headers.forEach(e => {
			createSideEditor(e);
		});
		headers = document.querySelectorAll(Object.keys(headerItems));
		headers.forEach(e => {
			createHeaderEditor(e);
		});
		headers = document.querySelectorAll(Object.keys(iconItems));
		headers.forEach(e => {
			createIconEditor(e);
		});
		headers = document.querySelectorAll(Object.keys(iconClickItems));
		headers.forEach(e => {
			e.addEventListener("click", iconClick);
		});
		titleInput = document.getElementById("titleinput");
		titleInput.value = document.title;
		titleInput.addEventListener('keyup', updateTitle);
		showPlaceholder();
		showHeaderPlaceholder();
	} else {
		editor.classList.add("editingdisabled");
		document.body.classList.remove("showguides");
		var headers = document.body.querySelectorAll(editableItems);
		headers.forEach(e => {
			e.contentEditable = "false";
			e.removeEventListener('focus', openTextEditor);
			e.removeEventListener('focusout', closeTextEditor);
			e.removeEventListener('mousedown', updateTextEditor);
			e.removeEventListener('mouseup', updateTextEditor);
			e.removeEventListener('keydown', updateTextEditorFull);
			e.removeEventListener('keyup', updateTextEditorFull2);
		});
		headers = document.querySelectorAll(Object.keys(popupItems));
		headers.forEach(e => {
			e.removeEventListener('mouseenter', openPopup);
			e.removeEventListener('mouseleave', closePopup);
		});
		headers = document.querySelectorAll(".sideeditorcontainer, .headereditor, .targetbox, .subbutton");
		headers.forEach(e => {
			e.remove();
		});
		headers = document.querySelectorAll(Object.keys(iconClickItems));
		headers.forEach(e => {
			e.removeEventListener("click", iconClick);
		});
		titleInput = document.getElementById("titleinput");
		titleInput.removeEventListener('keyup', updateTitle);
		removePlaceholder();
		removeHeaderPlaceholder();
	};
};
var createPanel = function (elm) {
	var panel = document.createElement('div');
	panel.classList.add("pagefooter", "editorfooter");
	panel.id = "editor"
	panel.innerHTML = panelOptions;
	document.body.appendChild(panel);
}
var removePlaceholder = function () {
	var documents = document.querySelectorAll(".placeholder");
	documents.forEach(e => {
		e.remove();
	})
}
var showPlaceholder = function () {
	var documents = document.querySelectorAll(".document");
	documents.forEach(e => {
		if (e.innerHTML.trim() === "") {
			var element = document.createElement("div");
			element.innerHTML = addOptions1 + addOptions3 + addOptions2;
			element.addEventListener('mouseover', e => {
				popupTarget = element;
				popupTarget.itemtarget = "outside";
			});
			element.setAttribute("class", "placeholder");
			e.appendChild(element);
		}
	})
}
var changeTarget = function (event) {
	element = event.target;
	var prevTemplate = element.getAttribute("template");
	var newTemplate = element.value;

	var headers = document.querySelectorAll(".headertext[href=" + newTemplate + "]");
	element.parentNode.href = newTemplate;

	if (headers.length === 0) {
		element.setAttribute("template", newTemplate)
		fetch(pageUrl, {
			method: 'POST',
			mode: "same-origin",
			headers: {
				"X-CSRFToken": csrftoken,
				"Accept": "network/json",
				"Content-Type": "network/json",
			},
			body: JSON.stringify({
				"previous": prevTemplate,
				"new": newTemplate,
			})
		})
	}
}
var createHeaderEditor = function (elm) {
	var editor = document.createElement("div");
	editor.className = "headereditor";
	editor.contentEditable = false;
	editor.innerHTML = headerOptions;
	var targetBox = document.createElement("input");
	targetBox.placeholder = "Target:";
	targetBox.className = "targetbox";
	var location = elm.getAttribute("href");
	if (!location) { location = "" };
	targetBox.value = location;
	targetBox.setAttribute("template", location)
	targetBox.addEventListener('keyup', changeTarget);
	elm.appendChild(targetBox);
	elm.appendChild(editor);
}
var createIconEditor = function (elm) {
	var editor = document.createElement("button");
	editor.className = "editor-edit subbutton";
	elm.appendChild(editor);
}
var createSideEditor = function (elm) {
	var container = document.createElement("div");
	var editor = document.createElement("div");
	var line = document.createElement("div");
	container.className = "sideeditorcontainer";
	editor.className = "sideeditor";
	line.className = "sideeditorline";
	editor.innerHTML = editOptions;
	elm.insertAdjacentElement('afterbegin', container);
	container.appendChild(line);
	container.appendChild(editor);
	container.addEventListener('mouseenter', function () {
		popupTarget = elm;
	});
	container.addEventListener('mouseleave', resetPopup);
}
var createPopup = function (elm) {
	var container = document.createElement("div");
	var editpopup = document.createElement("div");
	container.id = "editpopupcontainer";
	editpopup.id = "editpopup";
	container.onmouseleave = closePopup;
	editpopup.innerHTML = editOptions;
	container.style.display = "none";
	editpopup.style.opacity = 0;
	document.body.appendChild(container);
	container.appendChild(editpopup);

	editpopup.addEventListener('transitionend', finishClosingPopup);
	editpopup.addEventListener('mouseleave', resetPopup);
	`
	editPopupContainer = document.createElement("div");
	editPopup = document.createElement("div");
	editPopupContainer.id = "editpopupcontainer";
	editPopup.id = "editpopup";
	editPopup.innerHTML = editOptions;
	editPopupContainer.style.display = "none";
	editPopup.style.opacity = 0;
	document.body.appendChild(editPopupContainer);
	editPopupContainer.appendChild(editPopup);

	dragBar = document.createElement("div");
	dragBar.id = "dragbar";
	document.body.appendChild(dragBar);

	editPopupContainer.addEventListener('mouseleave', closePopup);
	dragBar.addEventListener('mouseleave', closePopup);

	editPopup.addEventListener('transitionend', finishClosingPopup);
	editPopup.addEventListener('mouseleave', resetPopup);`
}


createPanel();
createPopup();
toggleEditor();

document.getElementById("backtotop").style.bottom = "60px";
document.body.style.marginBottom = "53px";

document.addEventListener('keydown', e => {
	if (e.ctrlKey && e.key === 's') {
		e.preventDefault();
		saveDocument()
	}
});

window.onload = event => {
	window.addEventListener('click', e => {
		if (!e.target.matches('.dropbutton p')) {
			var dropdowns = document.querySelectorAll(".dropbutton div");
			dropdowns.forEach(d => {
				d.classList.remove("show");
			})
		}
		if (!e.target.matches('#filenameoverlaybox input, #filenameoverlaybox button, #imagebuttonareabox button')) {
			var dropdowns = document.querySelectorAll("#filenameoverlaybox");
			var canChange = false;
			dropdowns.forEach(d => {
				canChange = true;
				d.style.animationName = "fadeOut";
				d.addEventListener("animationend", d.remove);
			})
			if (canChange) {
				document.getElementById("imagebuttonareabox").style.display = "revert";
			}
		}
	})
}
`
let seperator = document.createElement("div")
let dragTarget = null;
seperator.className = "spacer"
seperator.id = "dropseperator"
seperator.style.opacity = "0.4"

let dragImage = document.createElement("button")
dragImage.classList.add("editor-new", "headerbutton")

let dragging = false;
let directDragging = false;

function handleDragStart(e) {
	e.preventDefault();
	dragTarget = popupTarget;
	directDragging = false;
	seperator.style.display = "flex";
	dragTarget.style.opacity = '0.4';
	dragBar.style.opacity = 1;
	this.id = "dragbardragging";
	this.classList.add("editor-new", "headerbutton");
	dragging = true;
	closePopup(null, true);
}
function handleDragMove(e) {
	if (dragging) {
		dragBar.style.top = e.pageY + "px";
		dragBar.style.left = e.pageX + "px";
		var element = document.elementsFromPoint(e.clientX, e.clientY)[1]
		var domRect = element.getBoundingClientRect();

		if (element.matches(Object.keys(popupItems))) {
			if (element.parentNode.classList.contains("panel") || element.parentNode.classList.contains("gallery")) {
				if (e.clientX > (domRect.x + domRect.width)/2) {
					element.parentNode.insertBefore(seperator, element.nextSibling);
				} else {
					element.parentNode.insertBefore(seperator, element);
				}
			} else {
				if (e.clientY > (domRect.y + (domRect.height/2))) {
					element.parentNode.insertBefore(seperator, element.nextSibling);
				} else {
					element.parentNode.insertBefore(seperator, element);
				}
			}
		} else if (element.matches(Object.keys(sideEditorItems))) {
			element.appendChild(seperator);
		}
	}
}
function handleDragEnd(e) {
	seperator.style.display = "none";
	dragging = false;
	if (!directDragging) {
		dragTarget.style.opacity = 1;
	}
	this.style = "";
	this.classList.remove("editor-new", "headerbutton");
	this.id = "dragbar";
	seperator.parentNode.insertBefore(dragTarget, seperator);
  }

dragBar.addEventListener('mousedown', handleDragStart);
document.body.addEventListener('mousemove', handleDragMove);
dragBar.addEventListener('mouseup', handleDragEnd);
`