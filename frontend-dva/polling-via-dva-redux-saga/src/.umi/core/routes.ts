// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/mnt/2460B65660B62E84/common/documents/projects/FrontendLearning/frontend-dva/polling-via-dva-redux-saga/node_modules/_@umijs_runtime@3.5.18@@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "exact": true,
    "component": require('@/pages/index.js').default
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
