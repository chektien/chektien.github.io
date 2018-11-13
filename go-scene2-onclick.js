AFRAME.registerComponent('go-scene2-onclick', {
    init: function() {
        el = this.el;
        this.gotoLecture = this.gotoLecture.bind(this);
        el.addEventListener('click', this.gotoLecture);
    },
    gotoLecture: function(evt) {
        if (this.el.getAttribute('visible')) {
            console.log('in window.gotoLecture');
            var videosphere1 = document.querySelector('#videosphere1');
            var videosphere2 = document.querySelector('#videosphere2'); 

            // remove the prev video
            videosphere1.components.material.material.map.image.pause();
            videosphere1.setAttribute('visible', 'false');
            videosphere1.parentNode.removeChild(videosphere1); 

            // hide the button
            this.el.setAttribute('visible', 'false');

            //refresh playbtn
            var playbtn = document.querySelector('#playbtn');
            playbtn.pause();
            playbtn.play();

            // change the scene
            videosphere2.setAttribute('visible', 'true');
            //videosphere2.play(); // need to be after visible!
            videosphere2.components.material.material.map.image.play();

            // reestablish listeners
            document.querySelector('#scenes').play();

            // remove self
            this.el.parentNode.removeChild(this.el); 
        }
    },
});

