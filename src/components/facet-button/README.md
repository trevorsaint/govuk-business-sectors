# Facet tags

[Preview the component](https://govuk-website-prototype.herokuapp.com/components/facet-tags/)

## Example usage

```
{{ appFacetTags({
  facets: [{
    items: [{
      label: {
        text: 'Aerospace and space'
      }
    }]
  }]
}) }}
```

## Accessibility acceptance criteria

## Arguments

This component accepts the following arguments.

|Name|Type|Required|Description|
|---|---|---|---|

### Items

|Name|Type|Required|Description|
|---|---|---|---|

#### Heading

|Name|Type|Required|Description|
|---|---|---|---|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
