# Contents list with body

Combines [contents list](https://govuk-website-prototype.herokuapp.com/components/contents-list) and [back to top](https://govuk-website-prototype.herokuapp.com/components/back-to-top) components with block of body markup.

[Preview the component](https://govuk-website-prototype.herokuapp.com/components/contents-list-with-body/)

## Example usage

**Macro**
```
{%- call appContentsListWithBody({
  heading: {
    text: 'Contents'
  },
  items: [{
    text: 'First thing',
    href: '#first-thing'
  }, {
    text: 'Second thing',
    href: '#second-thing'
  }, {
    text: 'Third thing',
    href: '#third-thing'
  }]
}) %}

//HTML content...

{% endcall -%}
```

**JavaScript**
```html
<script src="/public/javascripts/sticky-element-container.js"></script>
<script type="text/javascript">
  var $element = $('#contents');
  var stickyElementContainer = new GOVUK.Modules.StickyElementContainer();
  stickyElementContainer.start($element);
</script>
```

## Accessibility acceptance criteria

The component must have a text contrast ratio higher than 4.5:1 against the background colour to meet [WCAG 2.1 level AA](https://www.w3.org/TR/WCAG21/).

The component embeds [contents list](https://govuk-website-prototype.herokuapp.com/components/contents-list) and [back to top](https://govuk-website-prototype.herokuapp.com/components/back-to-top) components. Please see the relevant accessibility criteria:

- [back to top](../back-to-top/README.md)
- [contents list](../contents-list/README.md)

Links in the component must:

- accept focus
- be focusable with a keyboard
- be usable with a keyboard
- indicate when they have focus
- change in appearance when touched (in the touch-down state)
- change in appearance when hovered
- be usable with touch
- be usable with [voice commands](https://www.w3.org/WAI/perspectives/voice.html)
- have visible text

## Arguments

This component accepts the following arguments.

|Name|Type|Required|Description|
|---|---|---|---|
|role|string|No|Defaults to 'navigation'|
|heading|object|Yes|See [heading](#heading)|
|items|array|Yes|An array of content item objects. See [items](#items).|
|backToTop|object|No|See [back to top](#back-to-top)|
|classes|string|No|Classes to add to the nav tag.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the anchor tag.|

#### Heading

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|headingLevel|numeric|No|A number for the heading level. Defaults to 2 (`<h2>`)|
|classes|string|No|Classes to add to the heading tag.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the heading tag.|

#### Items

|Name|Type|Required|Description|
|---|---|---|---|
|href|string|Yes|URL of the item anchor. Both href and text attributes for items need to be provided to create an item.|
|text|string|Yes|If `html` is set, this is not required. Text to use within the anchor. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the anchor. If `html` is provided, the `text` argument will be ignored.|
|active|boolean|No|Flag to mark the item as active or not. Defaults to `false`.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the item anchor.|

### Back to top

|Name|Type|Required|Description|
|---|---|---|---|
|href|string|Yes|The anchor to the top of the content.|
|text|string|Yes|If `html` is set, this is not required. Text to use within the anchor. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the anchor. If `html` is provided, the `text` argument will be ignored.|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
