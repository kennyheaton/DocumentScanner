var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function flattenStyles(defaultStyle, overrideStyles) {
        var styles = __spreadArrays([defaultStyle], overrideStyles.filter(function (object) { return object !== undefined; }));
        return Object.keys(defaultStyle).reduce(function (flattened, currentKey) {
            var _a;
            var styleItems = styles.map(function (object) { return object[currentKey]; });
            return __assign(__assign({}, flattened), (_a = {}, _a[currentKey] = flattenObjects(styleItems), _a));
        }, {});
    }
    exports.flattenStyles = flattenStyles;
    function flattenObjects(objects) {
        return objects.reduce(function (merged, object) { return (__assign(__assign({}, merged), object)); }, {});
    }
});
//# sourceMappingURL=common.js.map