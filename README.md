# Frequently Asked Questions

This package can be used to quickly create a FAQ module.
Clicking on an FAQ-item will trigger one of the following events:
- a jQuery slideToggle() of the answer (leaving the question visible)
- A class toggle of the complete item itself. The rest is up to you.

## Installing
```
npm install @michaelkoelewijn91/faq
yarn add @michaelkoelewijn91/faq
```
* * *
  
## Usage
```
var Faq = require('@michaelkoelewijn91/faq');
$(() => {
    Faq.init({
        children: '.js-faq-item',
        question: '.js-faq-question',
        answer: '.js-faq-answer'
    })
})
```

#### Options
| Key | Value | Default | Description |
| --- | ---   |   ---   |     ---     |
| children | string | .js-faq-item | These items will be toggleable |
| question | string | .js-faq-question | Clicking on this element triggers the toggle event | 
| answer | string | .js-faq-answer | The event will target this element |
| toggle | string | slide | Use ```slide``` for a jQuery slideToggle. Use ```class``` to set an active class on the value provided for the key ```children``` |
