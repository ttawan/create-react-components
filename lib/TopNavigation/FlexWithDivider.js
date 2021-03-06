'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  border-left: 1px solid ', ';\n  border-right: 1px solid ', ';\n'], ['\n  border-left: 1px solid ', ';\n  border-right: 1px solid ', ';\n']);

var _Flex = require('../Flex');

var _Flex2 = _interopRequireDefault(_Flex);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FlexWithDivider = _Flex2.default.extend(_templateObject, (0, _theme.themeProp)('colors.grey150'), (0, _theme.themeProp)('colors.grey150'));

exports.default = FlexWithDivider;