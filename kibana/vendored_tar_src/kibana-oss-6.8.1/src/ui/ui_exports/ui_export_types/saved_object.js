'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validations = exports.savedObjectSchemas = exports.migrations = exports.mappings = undefined;

var _reduce = require('./reduce');

var _modify_reduce = require('./modify_reduce');

// mapping types
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const mappings = exports.mappings = (0, _modify_reduce.wrap)((0, _modify_reduce.alias)('savedObjectMappings'), (0, _modify_reduce.mapSpec)((spec, type, pluginSpec) => ({
  pluginId: pluginSpec.getId(),
  properties: spec
})), _reduce.flatConcatAtType);

// Combines the `migrations` property of each plugin,
// ensuring that properties are unique across plugins.
// See saved_objects/migrations for more details.
const migrations = exports.migrations = (0, _modify_reduce.wrap)((0, _modify_reduce.alias)('savedObjectMigrations'), (0, _modify_reduce.uniqueKeys)(), _reduce.mergeAtType);

const savedObjectSchemas = exports.savedObjectSchemas = (0, _modify_reduce.wrap)((0, _modify_reduce.uniqueKeys)(), _reduce.mergeAtType);

// Combines the `validations` property of each plugin,
// ensuring that properties are unique across plugins.
// See saved_objects/validation for more details.
const validations = exports.validations = (0, _modify_reduce.wrap)((0, _modify_reduce.alias)('savedObjectValidations'), (0, _modify_reduce.uniqueKeys)(), _reduce.mergeAtType);