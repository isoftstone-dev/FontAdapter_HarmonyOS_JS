export default {
    data() {
        return {
            object: {
                Head: 'head-style',
                CurrentText: 'currentText-style',
                Title: 'title-style',
                SubTitle: 'subtitle-style',
                Footer: 'footer-style'
            },
            title: 'title',
            classText:'title-style'
        };
    },
    onInit(){
        if (this.object[this.type]) {
            this.classText = this.object[this.type];
        }
    },
    props: {
        title: {
            default: 'title',
        },
        type: {
            default: 'Title'
        }
    },
}
