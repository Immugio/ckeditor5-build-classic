/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadadapterPlugin from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockquotePlugin from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import EasyimagePlugin from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';
import ImagePlugin from '@ckeditor/ckeditor5-image/src/image';
import ImagecaptionPlugin from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImagestylePlugin from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImagetoolbarPlugin from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageuploadPlugin from '@ckeditor/ckeditor5-image/src/imageupload';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ListPlugin from '@ckeditor/ckeditor5-list/src/list';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import TablePlugin from '@ckeditor/ckeditor5-table/src/table';
import TabletoolbarPlugin from '@ckeditor/ckeditor5-table/src/tabletoolbar';

export default class ClassicEditor extends ClassicEditorBase {}

ClassicEditor.build = {
	plugins: [
		EssentialsPlugin,
		UploadadapterPlugin,
		AutoformatPlugin,
		BoldPlugin,
		ItalicPlugin,
		BlockquotePlugin,
		EasyimagePlugin,
		HeadingPlugin,
		ImagePlugin,
		ImagecaptionPlugin,
		ImagestylePlugin,
		ImagetoolbarPlugin,
		ImageuploadPlugin,
		LinkPlugin,
		ListPlugin,
		ParagraphPlugin,
		TablePlugin,
		TabletoolbarPlugin
	],
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
				{
					model: 'paragraph',
					title: 'Paragraph',
					'class': 'ck-heading_paragraph'
				},
				{
					model: 'heading1',
					view: 'h2',
					title: 'Heading 1',
					'class': 'ck-heading_heading1'
				},
				{
					model: 'heading2',
					view: 'h3',
					title: 'Heading 2',
					'class': 'ck-heading_heading2'
				},
				{
					model: 'heading3',
					view: 'h4',
					title: 'Heading 3',
					'class': 'ck-heading_heading3'
				},
				{
					model: 'heading4',
					view: 'h5',
					title: 'Heading 4',
					'class': 'ck-heading_heading4'
				},
				{
					model: 'heading5',
					view: 'h6',
					title: 'Heading 5',
					'class': 'ck-heading_heading5'
				}
			]
		},
		image: {
			toolbar: [
				'imageStyle:full',
				'imageStyle:side',
				'|',
				'imageTextAlternative'
			]
		},
		language: 'en'
	}
};
