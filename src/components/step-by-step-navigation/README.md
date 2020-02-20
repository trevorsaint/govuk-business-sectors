# Step by step navigation

Displays a series of expanding/collapsing steps designed to navigate a user through a process.

Step by step navigation shows a sequence of steps towards a specific goal, such as ‘learning to drive’. Each step can contain one or more links to pages. User research suggested that each step should be collapsed by default so that users are not overwhelmed with information.

If JavaScript is disabled the step by step navigation expands fully. All of the functionality (including the icons and aria attributes) are added using JavaScript.

This component is based on the accordion component in collections.

[Preview the component](https://govuk-website-prototype.herokuapp.com/components/step-by-step-navigation/)

## Example usage

**Macro**
```
{{ appStepByStepNavigation({
  id: 'step-by-step-navigation',
  steps: [{
    title: {
      text: 'Step 1'
    },
    contents: [{
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      text: 'Vivamus nec pharetra ipsum. Duis euismod augue nisl, sit amet dictum velit malesuada at.'
    }],
    active: true
  },
  {
    title: {
      text: 'Step 2'
    },
    contents: [{
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }],
    logic: 'and'
  },
  {
    title: {
      text: 'Step 3'
    },
    contents: [{
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }]
  }]
}) }}
```

**JavaScript**
```html
<script src="/public/javascripts/step-by-step-navigation.js"></script>
<script type="text/javascript">
  var $element = $('#step-by-step-navigation');
  var stepByStepNavigation = new GOVUK.Modules.StepByStepNavigation();
  stepByStepNavigation.start($element);
</script>
```

## Accessibility acceptance criteria

The step by step navigation must:

- indicate to users that each step can be expanded and collapsed
- inform the user when a step has been expanded or collapsed
- be usable with a keyboard
- allow users to show or hide all steps at once
- inform the user which step a link belongs to
- inform the user which step the current page is in
- be readable when only the text of the page is zoomed - achieved for the numbers and logic elements by their text being wrapped in several elements that give them a white background and ensure the text when zoomed expands to the left, not to the right, where it would obscure the step titles

The show/hide all button only needs to list the first panel id in the aria-controls attribute, rather than all of them.

Step headings must use a button element:

- so that steps can be toggled with the space and enter keys
- so that steps can’t be opened in a new tab or window

When JavaScript is unavailable the component must:

- be fully expanded
- not be marked as expandable

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
