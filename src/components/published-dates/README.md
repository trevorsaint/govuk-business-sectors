# Published dates

Displays dates to reflect when content was published and updated.

[Preview the component](https://govuk-website-prototype.herokuapp.com/components/published-dates/)

## Example usage

**Macro**
```
{{ appPublishedDates({
  published: {
    timestamp: '1990-01-01T15:42:37.000+00:00'
  },
  lastUpdated: {
    timestamp: '2016-10-20T12:15:42.000+00:00'
  }
}) }}
```

## Accessibility acceptance criteria

The published dates component must:

- indicate to users that the full history section can be expanded and collapsed
- inform the user of the state of the full history section (expanded or collapsed)
- be usable with a keyboard

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

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
