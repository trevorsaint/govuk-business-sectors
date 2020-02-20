# Attachment link

Displays a link to a file with metadata of the file contents.

This component provides a means to show a link to an attachment with some relevant file data.

It is expected to be embedded inside an element that provides text styles (such as `.govuk-body`) so does not provide its own text styling.

[Preview the component](https://govuk-website-prototype.herokuapp.com/components/attachment-link/)

## Example usage

```
{{ appAttachmentLink({
  heading: {
    text: 'Attachment one: guidance note'
  },
  href: 'https://assets.publishing.service.gov.uk/uploads/file/123456/attachment-one.pdf',
  metadata: {
    filename: 'attachment-one.pdf',
    fileSize: 123456,
    contentType: 'application/pdf',
    pageCount: 10,
    thumbnail: 'document'
  }
}) }}
```

## Accessibility acceptance criteria
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
|href|string|Yes|The URL of the attached file.|
|target|string|No|Where to display the linked URL. Options include: `_self` the current browsing context (the default) and `_blank` usually a new tab, but users can configure browsers to open a new window instead.|
|heading|object|Yes|See [heading](#heading)|
|metadata|object|Yes|See [metadata](#metadata)|
|classes|string|No|Classes to add to the span tag.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the span tag.|

### Heading

|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the heading. If `html` is provided, the `text` argument will be ignored.|
|classes|string|No|Classes to add to the heading tag.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the heading tag.|

### Metadata

|Name|Type|Required|Description|
|---|---|---|---|
|contentType|string|No|The type of attachment, for example, Portable Document Format (PDF) and spreadsheet (XLS).|
|fileSize|numeric|No|The size of the attached file in bytes.|
|pageCount|numeric|No|The number of pages in the document. Only use when attaching documents, not spreadsheets or other data formats.|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
