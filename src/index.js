import '../src/style.css';
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
        this.allItems = $(options.children);
        this.index = this.item.index();
        this.trigger = item.find(options.question); //A click on this element will trigger a toggle
        this.answer = item.find(options.answer); //The element containing the answer.
        this.toggleType = options.toggle; //Which type is used for toggling? Class || Slidetoggle || Translate3d
        this.trigger.on('click', this.toggle.bind(this));

        $(window).on('resize', this.resize.bind(this));
        this.resize();
        this.init();
    }

    resize() {
        this.height = this.answer[0].clientHeight;
    }

    init() {
        if(this.toggleType === 'translate3d') {
            this.item.parent().addClass('is-translate');
            this.item.css({ transform: 'translate3d(0,0,0)' })
            this.answer.wrap('<div style="position:relative;" />');
        }
    }

    toggle() {

        //Check which toggle type is used
        //Defaults to slide (slideToggle)
        switch(this.toggleType) {
            default:
            case 'slide':
                this.answer.stop(true, false).slideToggle();
                break;
            
            case 'class':
                if(this.isOpen) this.item.removeClass('is-active');
                else this.item.addClass('is-active');
                break;

            case 'translate3d':
                let itemsToSlideDown = this.allItems.slice(this.index + 1, this.allItems.length);
                this.allItems.removeClass('is-active');
                this.allItems.css({
                    transform: 'translate3d(0,0,0)'
                })

                this.item.addClass('is-active');
                itemsToSlideDown.css({
                    transform: `translate3d(0,${this.height}px,0)`
                })

                this.item.parent().css({
                    paddingBottom: `${this.height}px`
                })
          
                break;
    
        }


        //Toggle variable
        this.isOpen = !this.isOpen;
    }
}