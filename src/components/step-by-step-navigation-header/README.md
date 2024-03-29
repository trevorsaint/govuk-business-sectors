# Step by step navigation header

Shows that a content page is part of a step by step navigation.

The component indicates to the user that the current page is part of a [step by step navigation](../step-by-step-navigation/README.md), and can provide a link to it.

[Preview the component](https://govuk-website-prototype.herokuapp.com/components/step-by-step-navigation-header/)

## Example usage

```
{{ appStepByStepNavigationHeader({
  heading: {
    text: 'Learn to drive a car: step by step',
    href: '#'
  }
}) }}
```

## Accessibility acceptance criteria

The component is designed to go into the top of an existing content page and should not interfere with the heading structure of the page, so therefore should not contain a heading tag.

An early version of the component contained a hidden skip link for keyboard and screen reader users, that jumped to the step by step navigation component in the sidebar (similar to the ‘skip to content’ link at the top of all GOV.UK pages). User testing suggested that rather than helping users it confused them, so this has been removed.

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
