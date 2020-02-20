# Cookie banner

Help users manage their personal data by telling them when you store cookies on their device.

[Preview the component](https://govuk-website-prototype.herokuapp.com/components/cookie-banner/)

## Example usage

**Macro**
```
{{ appCookieBanner({
  attributes: {
    'data-module': 'cookie-banner',
    'aria-label': 'Cookie banner'
  },
  buttons: {
    accept: {
      text: 'Accept cookies'
    },
    settings: {
      text: 'Cookie settings'
    }
  }
}) }}
```

**JavaScript**
```html
<script src="/public/javascripts/lib/cookie-functions.js"></script>
<script src="/public/javascripts/cookie-banner.js"></script>
<script type="text/javascript">
  var $element = $('#global-cookie-message');
  var cookieBanner = new GOVUK.Modules.CookieBanner();
  cookieBanner.start($element);
</script>
```

## Accessibility acceptance criteria

Text in the cookie banner must be clear and unambiguous and should provide a way to dismiss the message.

Links in the component must:

- accept focus
- be focusable with a keyboard
- indicate when they have focus

## Arguments

This component accepts the following arguments.

|Name|Type|Required|Description|
|---|---|---|---|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*
