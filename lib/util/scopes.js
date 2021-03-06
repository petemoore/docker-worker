import { scopeMatch } from 'taskcluster-base/utils';

/**
 * Do the taskScopes satisfy all of the scopes for the given resources?
 *
 * The required scopes are generated by adding the prefix to each resource.
 * The `resources` can be an array or an object, in which case the iteration is
 * over the keys.
 *
 * @param {string} prefix
 * @param {object or array} resources
 * @param {array} taskScopes
 */
export function hasPrefixedScopes(prefix, resources, taskScopes) {
    let neededScopes = Object.keys(resources).map((r) => { return prefix + r; });
    return scopeMatch(taskScopes, [neededScopes]);
}
