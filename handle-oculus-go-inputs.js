AFRAME.registerComponent('handle-oculus-go-inputs', {
    init: function () {
        this.togglePlay = this.togglePlay.bind(this);
        this.onClick = this.onClick.bind(this);

        // aggregate the 2 scenes here
        this.videosphere1 = document.querySelector('#videosphere1');
        this.videosphere2 = document.querySelector('#videosphere2');
        this.video1 = videosphere1.components.material.material.map.image;
        this.video2 = videosphere2.components.material.material.map.image;
        
        //dependencies: ['videosphere1', 'videosphere2'];
        console.log('in ' + this.el.id + '::oculus-go-inputs::init()');

        this.el.addEventListener('controllerconnected', function (evt) {
            console.log("CONTROLLER " + evt.detail.name);
        });

        this.el.addEventListener('triggerdown', this.onClick); 
    }, 
    onClick: function (evt) {
        console.log('in ' + this.el.id + '::onClick()');
        //var video;
        //if (this.videosphere1 && this.videosphere1.getAttribute('visible'))
            //video = this.video1;
        //else 
            //video = this.video2;

        //this.togglePlay(video, true);
    },
    onClick: function (evt) {
        console.log('in ' + this.el.id + '::onClick()');
        var video;
        if (this.videosphere1 && this.videosphere1.getAttribute('visible'))
            video = this.video1;
        else 
            video = this.video2;

        this.togglePlay(video, true);
    },
    togglePlay: function (video, isJustPlay=false) {
        console.log('in ' + this.el.id + '::oculus-go-controls::togglePlay() isJustPlay='+ isJustPlay + ' with video=' + video.id );

        if (!video)
            return;

        if (isJustPlay){
            if (video.paused)
                video.play();
        }
        else {
            if (!video.paused)
                video.pause();
            else
                video.play();
        } 
    },
    skipToEnd: function (video) {
        console.log('in ' + this.el.id + '::skipToEnd() for video=' + video.id);
        video.currentTime = 190;
        video.pause();
    },
    debug: function() {
        console.log('in ' + this.el.id + '::debug()');
    }
});

