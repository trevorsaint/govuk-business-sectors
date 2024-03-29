# Share links

Displays links for linking to or sharing the current page on social media.

The component will not process a URL into a share link itself. Pass complete share URLs to the component.

[Preview the component](https://govuk-website-prototype.herokuapp.com/components/share-links/)

## Example usage

```
{{ appShareLinks({
  items: [{
    text: 'Facebook',
    icon: 'facebook',
    href: '#'
  },{
    text: 'Twitter',
    icon: 'twitter',
    href: '#'
  }]
}) }}
```

## Accessibility acceptance criteria

The share link icons must be presentational and ignored by screen readers.

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
|items|object|Yes|Options for the item elements. See [items](#items)|
|brand|string|No|See [brand options](#brand-options)|
|stacked|boolean|No|Default is `false`. If set to `true` items will be stacked vertically.|
|columns|boolean|No|Default is `false`. If set to `true` items will layout in a grid.|
|classes|string|No|Classes to add to the container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the container.|

### Items

|Name|Type|Required|Description|
|---|---|---|---|
|href|string|No|The URL of the resource.|
|text|string|Yes|If `html` is set, this is not required. Text to use within the item. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the item. If `html` is provided, the `text` argument will be ignored.|
|icon|string|No|The icon to display. Options include: `facebook`, `twitter`, `whatsapp`, `instagram`, `linkedin`, `youtube`, `flickr` and `email`.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the item anchor.|

## Brand options

Use the following crest and brand codes to display the appropriate organisation logo and associated brand colours.

|Department|Brand|
|---|---|---|
|Attorney General's Office|`attorney-generals-office`|
|Cabinet Office|`cabinet-office`|
|Department for Business, Energy & Industrial Strategy|`department-for-business-innovation-skills`|
|Department for Digital, Culture, Media & Sport|`department-for-culture-media-sport`|
|Department for Education|`department-for-education`|
|Department for Environment, Food & Rural Affairs|`department-for-environment-food-rural-affairs`|
|Department for Exiting the European Union|`department-of-energy-climate-change`|
|Department for International Development|`department-for-international-development`|
|Department for International Trade|`department-for-international-trade`|
|Department for Transport|`department-for-transport`|
|Department for Work & Pensions|`department-for-transport`|
|Department of Health & Social Care|`department-of-health`|
|Foreign & Commonwealth Office|`foreign-commonwealth-office`|
|Government Legal Department|`attorney-generals-office`|
|HM Revenue & Customs|`hm-revenue-customs`|
|HM Treasury|`hm-treasury`|
|Home Office|home-office`|
|Ministry of Defence|ministry-of-defence`|
|Ministry of Housing, Communities & Local Government|`department-for-communities-and-local-government`|
|Ministry of Justice|`ministry-of-justice`|
|Northern Ireland Office|`northern-ireland-office`|
|Office of the Advocate General for Scotland|office-of-the-advocate-general-for-scotland`|
|Office of the Leader of the House of Commons|`the-office-of-the-leader-of-the-house-of-commons`|
|Office of the Leader of the House of Lords|`office-of-the-leader-of-the-house-of-lords`|
|Office of the Secretary of State for Scotland|`scotland-office`|
|Office of the Secretary of State for Wales<br>Swyddfa Ysgrifennydd Gwladol Cymru|`wales-office`|
|Prime Minister's Office – 10 Downing Street|`cabinet-office`|
|Treasury Solicitor's Department|`attorney-generals-office`|
|UK Atomic Energy Authority|`department-for-business-innovation-skills`|
|UK Export Finance|`department-for-international-trade`|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
