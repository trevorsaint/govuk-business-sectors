# Translation navigation

Displays a list of links to available translations.

[Preview the component](https://govuk-website-prototype.herokuapp.com/components/translation-navigation/)

## Example usage

**Macro**
```
{{ appTranslationNavigation({
  items: [{
    href: '#',
    text: 'English',
    locale: 'en',
    active: true
  }, {
    href: '#',
    text: 'Cymraeg',
    locale: 'cy'
  }]
}) }}
```

## Accessibility acceptance criteria

The component must:

- be a landmark with a navigation role
- have an accessible name in the current language, eg ‘Translations’

The translation links must:

- identify the language of the text

Watch a screen reader pronounce text differently based on lang attribute.

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
