'use strict';

/**
 * instant-camera service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::instant-camera.instant-camera');
