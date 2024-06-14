import { __ } from '@wordpress/i18n';

document.addEventListener('DOMContentLoaded', () => {
    const EXPANDED_CLASS = 'teste-base-read-more-block--expanded';

    document.querySelectorAll('.teste-base-read-more-block').forEach((wrapper) => {
        const toggleButton = wrapper.querySelector('.teste-base-read-more-block__toggle');

        toggleButton.addEventListener('click', (event) => {
            if (wrapper.classList.contains(EXPANDED_CLASS)) {
                wrapper.classList.remove(EXPANDED_CLASS);
                toggleButton.textContent = __('Read more', 'teste-base');
            } else {
                wrapper.classList.add(EXPANDED_CLASS);
                toggleButton.textContent = __('Read less', 'teste-base');
            }
        });
    });
});
