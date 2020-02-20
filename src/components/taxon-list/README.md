# Taxon list

Displays a list of taxons


[Preview the component](https://govuk-website-prototype.herokuapp.com/components/taxon-list/)

## Example usage

```
{{ appTaxonList({
  items: [{
    href: '#',
    heading: {
      text: 'Adult Dependants’ Grant'
    },
    description: {
      text: 'Adult Dependants’ Grant for full-time students who financially support an adult - funding, how to apply, eligibility'
    }
  }, {
    href: '#',
    heading: {
      text: 'Care to Learn'
    },
    description: {
      text: 'Care to Learn helps pay for childcare while you’re studying - how to apply, money you get, courses that qualify, eligibility'
    }
  }, {
    href: '#',
    heading: {
      text: 'Childcare Grant'
    },
    description: {
      text: 'Childcare Grants for full-time students in higher education - grants, CCG1, CCG2 forms, how to apply, eligibility'
    }
  }]
}) }}
```

## Accessibility acceptance criteria

Taxon list items must:

- not use headings when there is no description
- use the correct heading level for the page when a description is provided

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
