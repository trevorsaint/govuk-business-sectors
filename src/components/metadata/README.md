# Metadata

Used to display relevant metadata about organisations and tags for a document.

[Preview the component](https://govuk-website-prototype.herokuapp.com/components/metadata/)

## Example usage

**Macro**
```
{{ appMetadata({
  sections: [{
    heading: {
      text: 'Published:'
    },
    items: [{
      heading: {
        text: '14 June 2019'
      }
    }]
  },{
    heading: {
      text: 'Last updated:'
    },
    items: [{
      heading: {
        text: '10 September 2019'
      }
    }]
  }]
}) }}
```

**JavaScript**
```html
<script src="/public/javascripts/toggle.js"></script>
<script type="text/javascript">
  var $element = $('#metadata-toggle');
  var toggle = new GOVUK.Modules.Toggle();
  toggle.start($element);
</script>
```

## Accessibility acceptance criteria

The metadata component must:

- indicate that any expandable content can be expanded or collapsed
- indicate the initial state of expandable content
- indicate where the state of expandable content has changed

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
|sections|object|No|See [sections](#sections)|
|inverse|boolean|No|Default is `false`. Setting this to `true` renders the metadata as white text on a blue background.|
|direction|string|No|If set to ‘rtl’, content will be displayed right to left.|
|classes|string|No|Classes to add to the container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container.|

### Sections

|Name|Type|Required|Description|
|---|---|---|---|
|heading|object|Yes|See [heading](#heading)|
|items|object|No|See [items](#items)|
|limit|object|No|See [limit](#limit)|
|itemSeparator|string|No|Defaults to ‘and’|

#### Heading

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|headingLevel|numeric|No|A number for the heading level. Defaults to 2 (`<h2>`)|
|classes|string|No|Classes to add to the heading.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the heading.|

#### Items

|Name|Type|Required|Description|
|---|---|---|---|
|href|string|Yes|The URL of the resource.|
|heading|object|Yes|See [item heading](#item-heading)|
|attributes|object|No|HTML attributes (for example data attributes) to add to the anchor.|

##### Item heading

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the item heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the item heading. If `html` is provided, the `text` argument will be ignored.|

#### Limit

|Name|Type|Required|Description|
|---|---|---|---|
|count|numeric|Yes|The number of items.|
|aria-controls|boolean|Yes|Used to toggle show/hide functionality.|
|aria-expanded|string|Yes|Default to `false`. Used to toggle show/hide functionality.|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
