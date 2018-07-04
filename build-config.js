/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

module.exports = {
	// The editor creator to use.
	editor: '@ckeditor/ckeditor5-editor-classic/src/classiceditor',

	// The name under which the editor will be exported.
	moduleName: 'ClassicEditor',

	// Plugins to include in the build.
	plugins: [
		'@ckeditor/ckeditor5-essentials/src/essentials',

		'@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter',
		'@ckeditor/ckeditor5-autoformat/src/autoformat',
		'@ckeditor/ckeditor5-basic-styles/src/bold',
		'@ckeditor/ckeditor5-basic-styles/src/italic',
		'@ckeditor/ckeditor5-block-quote/src/blockquote',
		'@ckeditor/ckeditor5-easy-image/src/easyimage',
		'@ckeditor/ckeditor5-heading/src/heading',
		'@ckeditor/ckeditor5-image/src/image',
		'@ckeditor/ckeditor5-image/src/imagecaption',
		'@ckeditor/ckeditor5-image/src/imagestyle',
		'@ckeditor/ckeditor5-image/src/imagetoolbar',
		'@ckeditor/ckeditor5-image/src/imageupload',
		'@ckeditor/ckeditor5-link/src/link',
		'@ckeditor/ckeditor5-list/src/list',
		'@ckeditor/ckeditor5-paragraph/src/paragraph',
		'@ckeditor/ckeditor5-table/src/table',
		'@ckeditor/ckeditor5-table/src/tabletoolbar'
	],

	// Editor config.
	config: {
		toolbar: {
			items: [
				'heading',
				'|',
				'bold',
				'italic',
				'link',
				'bulletedList',
				'numberedList',
				'imageUpload',
				'blockQuote',
				'undo',
				'redo',
				'insertTable'
			]
		},
		heading: {
			options: [
				{ model: "paragraph", title: "Paragraph", "class": "ck-heading_paragraph" },
				{ model: "heading1", view: "h2", title: "Heading 1", "class": "ck-heading_heading1" },
				{ model: "heading2", view: "h3", title: "Heading 2", "class": "ck-heading_heading2" },
				{ model: "heading3", view: "h4", title: "Heading 3", "class": "ck-heading_heading3" },
				{ model: "heading4", view: "h5", title: "Heading 4", "class": "ck-heading_heading4" },
				{ model: "heading5", view: "h6", title: "Heading 5", "class": "ck-heading_heading5" }
			]
		},
		image: {
			toolbar: ['imageStyle:full', 'imageStyle:side', '|', 'imageTextAlternative']
		},

		// UI language. Language codes follow the https://en.wikipedia.org/wiki/ISO_639-1 format.
		language: 'en'
	}
};
