const $ = require('jquery');

export function init(options) {
    $(options.children).each((index, item) => {
        new Faq($(item), options);
    })
}

class Faq {
    constructor(item, options) {

        this.isOpen = false; //Current state of Faq item
        this.item = item; //jQuery object of Faq item
        this.trigger = item.find(options.question); //A click on this element will trigger a toggle
        this.answer = item.find(options.answer); //The element containing the answer.
        this.toggleType = options.toggle; //Which type is used for toggling? Class || Slidetoggle

        this.trigger.on('click', this.toggle.bind(this));

    }

    toggle() {

        //Check which toggle type is used
        //Defaults to slide (slideToggle)
        switch(this.toggleType) {
            default:
            case 'slide':
                this.answer.slideToggle();
                break;
            
            case 'class':
                if(this.isOpen) this.item.removeClass('is-active');
                else this.item.addClass('is-active');
                break;
    
        }


        //Toggle variable
        this.isOpen = !this.isOpen;
    }
}