function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

var styles = {"test":"_styles-module__test__3ybTi"};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var colours = "\n  --primary-colour: orange;\n  --secondary-colour: green;\n  --tertiary-colour: purple;\n";

var typography = "\n  --font-size-large: 5rem;\n  --font-size-medium: 3rem;\n  --font-size-small: 1rem;\n";

var fontLarge = function fontLarge() {
  return "\n  font-size: var(--font-size-large);\n  color: var(--secondary-colour);\n";
};

var _templateObject;
var GlobalStyle = styled.createGlobalStyle(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  :root {\n    ", "\n    ", "\n  }\n"])), colours, typography);

var _templateObject$1;
var Title = styled__default.h1(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  font-weight: bold;\n  text-transform: uppercase;\n"])));

var BaseTitle = function BaseTitle(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement(Title, {
    className: className
  }, "Base Title");
};

var _templateObject$2;
var RedTitle = styled__default(BaseTitle)(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n  ", "\n  text-decoration: underline;\n"])), fontLarge);

var _templateObject$3;
var Button = styled__default.button(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n"])));

var BaseButton = function BaseButton(_ref) {
  var className = _ref.className,
      children = _ref.children,
      otherProps = _objectWithoutPropertiesLoose(_ref, ["className", "children"]);

  return /*#__PURE__*/React.createElement(Button, _extends({
    className: className
  }, otherProps), children);
};

var _templateObject$4;
var PrimaryButton = styled__default(BaseButton)(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteralLoose(["\n  color: white;\n  background-color: blue;\n"])));

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

exports.ExampleComponent = ExampleComponent;
exports.GlobalStyle = GlobalStyle;
exports.PrimaryButton = PrimaryButton;
exports.RedTitle = RedTitle;
//# sourceMappingURL=index.js.map
