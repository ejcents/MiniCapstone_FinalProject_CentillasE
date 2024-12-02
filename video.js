const video = document.querySelector('video');

        video.addEventListener('play', () => {
            console.log('Video is playing');
        });

        video.addEventListener('pause', () => {
            console.log('Video is paused');
        });