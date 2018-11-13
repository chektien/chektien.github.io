AFRAME.registerComponent('show-btn-when-vid-ended', {
    //@bug (not ours) although this is single attribute schema, somehow html does not allow omitting "target:"
    schema: {
        target: {type: 'selector', default: ''}
    },
    init: function () {
        console.log('in ' + this.el.id + '::init()');
        this.showTargetBtn = this.showTargetBtn.bind(this);
        this.video = this.el.components.material.material.map.image;
    },
    update: function() {
        console.log('in ' + this.el.id + '::update(), target.id=' + this.data.target.id);
    },
    play: function () {
        console.log('in ' + this.el.id + '::play() and attaching listeners');
        this.video.addEventListener('ended', this.showTargetBtn);
    },
    pause: function () {
        console.log('in ' + this.el.id + '::pause() and removing listeners');
        this.video.removeEventListener('ended', this.showTargetBtn);
    }, 
    showTargetBtn: function() {
        console.log('in ' + this.el.id + '::showTargetBtn(), video ENDED and showing ' + this.data.target.id);

        // remove video control listeners
        document.querySelector('#scenes').pause();

        // show the 'target' button
        this.data.target.setAttribute('visible', 'true');
    }
});
