const slide = (function(){
    const backgroundItems = document.querySelectorAll('.background-slide');
    const nextBtn = document.querySelector('.br-nextBtn');
    const prevBtn = document.querySelector('.br-prevBtn');
    let idSetInterval;
    return {
        currentBGIndex: 1,
        showSlide(){
            for(const slide of backgroundItems){
                slide.style.display = 'none';
            }
            if(this.currentBGIndex>backgroundItems.length){
                this.currentBGIndex = 1;
            }else{
                if(this.currentBGIndex<1){
                    this.currentBGIndex = backgroundItems.length;
                } 
            }
            backgroundItems[this.currentBGIndex-1].style.display = 'block';
        },
        nextBtnHandler(time){
            nextBtn.onclick = () =>{
                this.currentBGIndex++;
                this.showSlide();
                clearInterval(idSetInterval);
                this.autoShowSlide(time);
            };
        },
        prevBtnHandler(time){
            prevBtn.onclick = () =>{
                this.currentBGIndex--;
                this.showSlide();
                clearInterval(idSetInterval);
                this.autoShowSlide(time);
            };
        },
        autoShowSlide(time){
            idSetInterval =  setInterval(()=>{
                this.currentBGIndex++;
                this.showSlide();
            },time);
        },
        run(time){
            this.showSlide(this.currentBGIndex);
            this.autoShowSlide(time);
            this.nextBtnHandler(time);
            this.prevBtnHandler(time);
        }
        
    }
})();

//Time unit milisecond
slide.run(15000);

