import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { Disabled, PanelBody, PanelRow, ToggleControl } from '@wordpress/components';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import ServerSideRender from '@wordpress/server-side-render';

import { QueryPanel } from '../shared/QueryPanel';
import { SelectCardModel } from '../shared/SelectCardModel';
import { SelectCardModifier } from '../shared/SelectCardModifier';
import { SelectSize } from '../shared/SelectSize';

import metadata from './block.json';

function Edit ({ attributes, setAttributes }) {
    const { cardModel, cardModifiers, gridGap, hideAuthor, hideCategories, hideDate, hideExcerpt, postsPerColumn, postsPerRow } = attributes;

    const blockProps = useBlockProps();

    return <>
        <InspectorControls>
            <PanelBody className="teste-base-gutenberg-panel__panel-body" title={__('Layout', 'teste-base')}>
                <PanelRow>
                    <SelectCardModel
                        value={cardModel}
                        onChange={(cardModel) => setAttributes({ cardModel })}
                    />
                </PanelRow>

                <PanelRow>
                    <SelectCardModifier
                        value={cardModifiers}
                        onChange={(cardModifiers) => setAttributes({ cardModifiers })}
                    />
                </PanelRow>

                <PanelRow>
                    <NumberControl
                        label={__('Grid columns', 'teste-base')}
                        min={1}
                        value={postsPerRow}
                        onChange={(raw) => setAttributes({ postsPerRow: parseInt(raw) })}
                    />
                </PanelRow>

                <PanelRow>
                    <NumberControl
                        label={__('Grid rows', 'teste-base')}
                        min={1}
                        value={postsPerColumn}
                        onChange={(raw) => setAttributes({ postsPerColumn: parseInt(raw) })}
                    />
                </PanelRow>

                <PanelRow>
                    <SelectSize
                        label={__('Grid gap', 'teste-base')}
                        value={gridGap}
                        onChange={(gridGap) => setAttributes({ gridGap })}
                    />
                </PanelRow>

                <PanelRow>
                    <ToggleControl
                        label={__('Hide author', 'teste-base')}
                        checked={hideAuthor}
                        onChange={(hideAuthor) => setAttributes({ hideAuthor })}
                    />
                </PanelRow>

                <PanelRow>
                    <ToggleControl
                        label={__('Hide categories', 'teste-base')}
                        checked={hideCategories}
                        onChange={(hideCategories) => setAttributes({ hideCategories })}
                    />
                </PanelRow>

                <PanelRow>
                    <ToggleControl
                        label={__('Hide date', 'teste-base')}
                        checked={hideDate}
                        onChange={(hideDate) => setAttributes({ hideDate })}
                    />
                </PanelRow>

                <PanelRow>
                    <ToggleControl
                        label={__('Hide excerpt', 'teste-base')}
                        checked={hideExcerpt}
                        onChange={(hideExcerpt) => setAttributes({ hideExcerpt })}
                    />
                </PanelRow>
            </PanelBody>

            <QueryPanel
                attributes={attributes}
                setAttributes={setAttributes}
            />
        </InspectorControls>

        <div {...blockProps}>
            <Disabled>
                <ServerSideRender block="teste-base/posts-grid" attributes={attributes}/>
            </Disabled>
        </div>
    </>;
}

registerBlockType(metadata.name, {
    edit: Edit,
});
