'use strict';

/**
 * e2e-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::e2e-page.e2e-page');
