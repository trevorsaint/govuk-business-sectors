# Important metadata

List of document-type specific metadata.

A replacement for the [metadata component](../metadata/README.md) with only the format specific details. This component separates facet metadata from publisher metadata.

[Preview the component](https://govuk-website-prototype.herokuapp.com/components/important-metadata/)

## Example usage

```
{{ appImportantMetadata({
  heading: {
    text: 'The release date has been changed'
  },
  items: [{
    term: {
      text: 'Previous date:'
    },
    definition: {
      text: '4 February 2018 9:00pm'
    }
  },{
    term: {
      text: 'Reason for change:'
    },
    definition: {
      text: 'Incorrectly input as 2018 instead of 2019'
    }
  }]
}) }}
```

## Accessibility acceptance criteria

Important metadata must:

- have a text contrast ratio higher than 4.5:1 against the background colour to meet [WCAG 2.1 level AA](https://www.w3.org/TR/WCAG21/)

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
|items|object|No|See [items](#items)|
|heading|object|Yes|See [heading](#heading)|
|classes|string|No|Classes to add to the container.|
|itemClasses|string|No|Classes to add to the definition list.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container.|

### Heading

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|headingLevel|numeric|No|A number for the heading level. Defaults to 2 (`<h2>`)|
|classes|string|No|Classes to add to the heading.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the heading.|

### Items

|Name|Type|Required|Description|
|---|---|---|---|
|term|object|Yes|See [term](#term)|
|definition|object|Yes|See [definition](#definition)|

#### Term

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the `dt` tag. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the `dt` tag. If `html` is provided, the `text` argument will be ignored.|
|classes|string|No|Classes to add to the `dt` tag.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the `dt` tag.|

#### Definition

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the `dd` tag. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the `dd` tag. If `html` is provided, the `text` argument will be ignored.|
|classes|string|No|Classes to add to the `dd` tag.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the `dd` tag.|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
