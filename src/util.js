export const playAudio = (isPlaying, audioRef) => {
    //Chequeamos si la cancion se esta reproduciendo
    if(isPlaying){
        const playPromise = audioRef.current.play();
        if(playPromise !== undefined){
            playPromise.then((audio) => {
                audioRef.current.play();
            });
        }
    }
};

