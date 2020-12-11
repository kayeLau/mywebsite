class Main {
    constructor(options){
        this.navWapper = document.querySelector(options.navWapper);
        this.homeBG = document.querySelector(options.homeBG);
    }
    init(){
        if(this.homeBG){
            this.setPictureSize()
            window.addEventListener('resize', ()=>{
                this.setPictureSize()
        });
        }
    }
    setPictureSize(){
        let bodyWidth = document.body.offsetWidth;
        this.homeBG.style.width = bodyWidth*0.8+'px';
        this.homeBG.style.height = bodyWidth*0.8*0.33+'px';
    }
}

let webCtrl = new Main({
    navWapper:'#nav-wrapper',
    homeBG:'#home-image-bg'
});
webCtrl.init();
window.addEventListener('onload',function(){

})