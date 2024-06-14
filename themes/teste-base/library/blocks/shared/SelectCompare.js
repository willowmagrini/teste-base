import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const compareOptions = [
    { label: __('OR', 'teste-base'), value: 'OR' },
    { label: __('AND', 'teste-base'), value: 'AND' },
];

export function SelectCompare ({ label = __('Compare terms', 'teste-base'), value, onChange }) {
    return (
        <SelectControl
            label={label}
            options={compareOptions}
            value={value}
            onChange={onChange}
        />
    )
}
