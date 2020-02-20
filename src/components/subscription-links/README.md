# Subscription links

Displays links to ‘Get email alerts’ and ‘Subscribe to feed’.

[Preview the component](https://govuk-website-prototype.herokuapp.com/components/subscription-links/)

## Example usage

```
{{ appSubscriptionLinks({
  email: {
    text: 'Get email alerts',
    href: '#'
  },
  feed: {
    text: 'Subscribe to feed',
    href: '#'
  }
}) }}
```

## Accessibility acceptance criteria

Icons in subscription links must be presentational and ignored by screen readers.

Toggle elements in the component must:

- be usable with a keyboard
- be usable with touch
- be recognised by screen readers as a button
- announce to screen readers whether they are expanded or collapsed
- show hidden elements by default when Javascript is disabled

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

### Title

|Name|Type|Required|Description|
|---|---|---|---|

### Email or feed

|Name|Type|Required|Description|
|---|---|---|---|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
