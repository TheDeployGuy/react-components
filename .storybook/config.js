import { configure } from '@storybook/react';

function loadStories() {
    // You can require as many stories as you need here
    require('../stories/index.js');
}

configure(loadStories, module);