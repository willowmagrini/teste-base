import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { PanelBody, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { mediaAndText as Icon } from '@wordpress/icons';

import { SelectImage } from '../shared/SelectImage';

import metadata from './block.json';

const DEFAULT_BLOCK = ['core/paragraph', { placeholder: __('Header content', 'teste-base') }];

function Edit ({ attributes, setAttributes }) {
    const { image } = attributes;

    const blockProps = useBlockProps({ className: 'teste-base-banner-with-image-block' });

    const onImageChange = (image) => {
        const { alt, url } = image;
        setAttributes({ image: { alt, url } });
    };

    return <>
        <InspectorControls>
            <PanelBody className="teste-base-gutenberg-panel__panel-body" title={__('Layout', 'teste-base')}>
                <PanelRow>
                    <SelectImage
                        label={__('Image', 'teste-base')}
                        value={image}
                        onChange={onImageChange}
                    />
                </PanelRow>
            </PanelBody>
        </InspectorControls>

        <div {...blockProps}>
            <div className="teste-base-banner-with-image-block__grid">
                <div className="teste-base-banner-with-image-block__image">
                    {(image?.url) ? (
                        <img alt={image.alt} src={image.url}/>
                    ) : null}
                </div>
                <div className="teste-base-banner-with-image-block__text">
                    <InnerBlocks
                        allowedBlocks={true}
                        defaultBlock={DEFAULT_BLOCK}
                        orientation="vertical"
                        renderAppender={InnerBlocks.DefaultBlockAppender}
                        templateLock={false}
                    />
                </div>
            </div>
        </div>
    </>;
}

function Save ({ attributes }) {
    const { image } = attributes;

    const blockProps = useBlockProps.save({ className: 'teste-base-banner-with-image-block' });

    return (
        <div {...blockProps}>
            <div className="teste-base-banner-with-image-block__grid">
                <div className="teste-base-banner-with-image-block__image">
                    {(image?.url) ? (
                        <img alt={image.alt} src={image.url}/>
                    ) : null}
                </div>
                <div className="teste-base-banner-with-image-block__text">
                    <InnerBlocks.Content/>
                </div>
            </div>
        </div>
    );
}

registerBlockType(metadata.name, {
    icon: Icon,
    edit: Edit,
    save: Save,
});
