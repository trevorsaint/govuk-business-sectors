# Download link

Displays a text link with a notification icon. Intended for email alert links.



[Preview the component](https://govuk-website-prototype.herokuapp.com/components/email-link/)

## Example usage

```
{{ appEmailLink({
  href: '#',
  text: 'Sign up for updates to this page'
}) }}
```

## Accessibility acceptance criteria

The email icon must:

- be presentational and ignored by screen readers

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
