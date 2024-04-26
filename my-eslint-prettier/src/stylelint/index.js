module.exports = function createStyleLint() {
  return {
    'plugins': [
      'stylelint-order'
    ],
    'extends': [
      'stylelint-config-standard-scss'
    ],
    'rules': {
      // 禁止空块
      'block-no-empty': true,
      // 颜色6位长度
      'color-hex-length': 'long',
      // 兼容自定义标签名
      'selector-type-no-unknown': [true, {
        'ignoreTypes': []
      }],
      // 忽略伪类选择器 ::v-deep
      'selector-pseudo-element-no-unknown': [true, {
        'ignorePseudoElements': ['v-deep']
      }],
      // 禁止低优先级的选择器出现在高优先级的选择器之后。
      'no-descending-specificity': null,
      // 不验证@未知的名字，为了兼容scss的函数
      'at-rule-no-unknown': null,
      // 禁止空注释
      'comment-no-empty': true,
      // 禁止简写属性的冗余值
      'shorthand-property-no-redundant-values': true,
      // 禁止值的浏览器引擎前缀
      'value-no-vendor-prefix': true,
      // 属性不添加第三方厂商的前缀
      'property-no-vendor-prefix': true,
      // 样式块之间的空行
      'rule-empty-line-before': 'always',

      // 属性值的顺序
      "order/properties-order": [
        "z-index",
        "position",
        "top",
        "right",
        "bottom",
        "left",

        "float",
        "clear",

        "display",
        "flex-flow",
        "flex-direction",
        "flex-wrap",
        "justify-content",
        "align-items",
        "flex",
        "flex-basis",
        "flex-grow",
        "flex-shrink",
        
        "width",
        "min-width",
        "max-width",
        "height",
        "min-height",
        "max-height",

        "margin",
        "margin-top",
        "margin-right",
        "margin-bottom",
        "margin-left",
        "padding",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",

        "border",
        "border-style",
        "border-width",
        "border-color",
        "border-top",
        "border-top-style",
        "border-top-width",
        "border-top-color",
        "border-right",
        "border-right-style",
        "border-right-width",
        "border-right-color",
        "border-bottom",
        "border-bottom-style",
        "border-bottom-width",
        "border-bottom-color",
        "border-left",
        "border-left-style",
        "border-left-width",
        "border-left-color",
        "border-radius",

        "font-family",
        "font-size",
        "font-weight",
        "color",
        "text-align",
        "text-justify",
        "text-indent",
        "text-overflow",
        "text-decoration",
        "text-shadow",
        "white-space",
        "word-break",
        
        "background",
        "background-position",
        "background-repeat",
        "background-size",
        "background-color",
        "background-clip",

        "opacity",
        "visibility",
        "filter",
        "box-shadow",
        "outline",

        "overflow",
        "overflow-x",
        "overflow-y",
        
        "transform",
        "transition",
        "animation",
        "animation-name",
        "animation-duration",
        "animation-direction",
        "animation-timing-function",
        "animation-delay",
        "animation-play-state",
        "animation-fill-mode",
        "animation-iteration-count",
        "animation-composition",

        "cursor",
        "user-select",
        "resize",

        "list-style",
      ]
    }
  };
};