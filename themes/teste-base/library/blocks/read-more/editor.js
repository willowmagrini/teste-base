import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { PanelBody, PanelRow } from '@wordpress/components';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import clsx from 'clsx';

import metadata from './block.json';

const ALLOWED_BLOCKS = ['core/paragraph'];

const TEMPLATE = [
    ['core/paragraph', { placeholder: __('Full text', 'teste-base') }]
]

function Edit ({ attributes, setAttributes }) {
    const { lines } = attributes;

    const [expanded, setExpanded] = useState(false);

    const blockProps = useBlockProps({
        className: clsx('teste-base-read-more-block', { 'teste-base-read-more-block--expanded': expanded }),
        style: { '--lines-shown': String(lines) },
    });

    const toggleExpanded = () => setExpanded((expanded) => !expanded);

    return <>
        <InspectorControls>
            <PanelBody className="teste-base-gutenberg-panel__panel-body" title={__('Layout')}>
                <PanelRow>
                    <NumberControl
                        label={__('Lines shown', 'teste-base')}
                        min={1}
                        value={lines}
                        onChange={(value) => setAttributes({ lines: parseInt(value) })}
                    />
                </PanelRow>
            </PanelBody>
        </InspectorControls>

        <div {...blockProps}>
            <div className="teste-base-read-more-block__content">
                <InnerBlocks
                    allowedBlocks={ALLOWED_BLOCKS}
                    orientation="vertical"
                    template={TEMPLATE}
                    templateLock="all"
                />
            </div>
            <button className="teste-base-read-more-block__toggle" aria-hidden="true" onClick={toggleExpanded}>
                { expanded ? __('Read less', 'teste-base') : __('Read more', 'teste-base') }
            </button>
        </div>
    </>;
}

function Save ({ attributes }) {
    const { lines } = attributes;

    const style = { '--lines-shown': String(lines) };

    const blockProps = useBlockProps.save({ className: 'teste-base-read-more-block', style });

    return (
        <div {...blockProps}>
            <div className="teste-base-read-more-block__content">
                <InnerBlocks.Content/>
            </div>
            <button className="teste-base-read-more-block__toggle" aria-hidden="true">{__('Read more', 'teste-base')}</button>
        </div>
    );
}

registerBlockType(metadata.name, {
    edit: Edit,
    save: Save,
});
