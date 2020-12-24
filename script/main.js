const home = Vue.component("home", {
  methods: {
    setPictureSize() {
      let homeBG = document.querySelector(".home-image-bg");
      let circle = document.querySelector(".circle");
      if(!homeBG) return
      let bodyWidth = document.body.offsetWidth;
      circle.style.width = bodyWidth * 0.35 + "px";
      circle.style.height = bodyWidth * 0.35 +  "px";
      homeBG.style.width = bodyWidth * 0.25 + "px";
      homeBG.style.height = bodyWidth * 0.23 +  "px";
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.setPictureSize();
    });
    this.setPictureSize();

  },
  template: `
    <div class='home-main'>
    <div class='circle'>
    <div class="home-image-bg"></div>
    </div>
    <div class='home-wrapper'></div>
    </div>`,
});
const about = Vue.component("about", {
  methods:{
    goToPage(url){
      window.location.href = url;
    }
  },
  template: `<div class="about-container">
    <div class="about-card">
      <div class="about-border">
      <div class="about-avatar">
        <img src="./asset/bidu.png" alt="" />
      </div>
      <div style='margin:0 30px'>
      <img src="./asset/codepan.png" width='50px' height='50px' alt="" style='margin-right:5px;cursor: pointer;' @click='goToPage("https://codepen.io/KayeLau")'>
      <img src="./asset/github.png" width='50px' height='50px' alt="" style='cursor: pointer;' @click='goToPage("https://github.com/kayeLau")'>
      </div>
      <hr />
      <div class="about-stats">
        <h2>Kaye Lau</h2>
        <hr />
        <div>
          <p>歡迎來到我的網頁!這是一個關於菜烏成長的故事</p>
          <br>
          <h3>Content</h3>
          <p>QQ:3236217797</p>
          <p>Email:3236217797@qq.com</p>
          </ul>
        </div>
      </div>
      </div>
    </div>
  </div>`,
});
const myWork = Vue.component('mywork',{
  data() {
    return {
      page:1,
      painting:[
        {
          title:'新婚父婦',
          img:'asset/mypaint/couple.png'
        },
        {
          title:'shopping',
          img:'asset/mypaint/girl.jpg'
        },
        {
          title:'花女',
          img:'asset/mypaint/lady.png'
        },
      ],
      work:[
        {
          title:'壁球小遊戲',
          id:'1001',
          description:'純js實現的小遊戲',
          img:'asset/mywork/ballgame/ballgame.jpg',
          keyword:['JS','小遊戲']
        },
        {
          title:'回轉壽司',
          id:'1002',
          description:'無限回轉壽司',
          img:'asset/mywork/sushitran/sushitran.jpg',
          keyword:['JS','無限滾動','回轉壽司']
        }
      ]
    }
  },
  methods:{
    switchPage(){
      this.page++
      if(this.page > 2){this.page=1}
    }
  },
  template:
  `<div id="mywork-root">
  <div class='mywork-nav'>
    <ul>
      <li @click='switchPage()'>小作品</li>
      <li  @click='switchPage()'>畫</li>
    </ul>
  </div>
  <br>
  <div id="mywork-workroot" v-show='page === 1'>
  <div class="mywork-item" v-for='(item,index) in work' >
    <router-link :to="{'path':'/mywork/'+item.id}" tag="div">
    <span class="mywork-title">{{item.title}}</span>
    <span class="mywork-description">{{item.description}}</span>
    <div class="mywork-img" :style="{'backgroundImage':'url('+item.img+')'}"></div>
    <span class="mywork-keyword" v-for='(kayword,index) in item.keyword'>#{{kayword}}</span>
    </router-link>
  </div>
  </div>
  <br>
  <div id="mywork-workroot" v-show='page === 2'>
  <div class="mypaint-item" v-for='(v,i) in painting'>
  <span class="mywork-title">{{v.title}}</span>
  <div class="mypaint-img" :style="{'backgroundImage':'url('+v.img+')'}"></div>
  </div>
  </div>
  </div>
  `
})
const work1002 = Vue.component('work1002',{
  mounted(){
    this.init();
  },
  computed:{
    Odiv(){
      return document.getElementById("sushi-sushi");
    },
    Oli(){
      return document.querySelectorAll('#sushi-sushi li');
    },
    Oul(){
      return document.querySelector("#sushi-sushi ul");
    },
    OulWidth(){
      return this.Oli[0].offsetWidth*this.Oli.length+'px';
    }
  },
  methods:{
    init(){
      this.Oul.innerHTML = this.Oul.innerHTML + this.Oul.innerHTML;
      setInterval(()=>{
        if(this.Oul.offsetLeft < -this.Oul.offsetWidth/2){
          this.Oul.style.left = '0';
        }
        this.Oul.style.left = this.Oul.offsetLeft-2+'px';
      },30);
    }
  },
  template:`
  <div id='myWorkDetail-root'>
    <div id="sushi-bg">
    <div id="sushi-sushi">
      <ul>
        <li><img src="./asset/mywork/sushitran/sushi_01.png"/></li>
        <li><img src="./asset/mywork/sushitran/sushi_02.png"/></li>
        <li><img src="./asset/mywork/sushitran/sushi_03.png"/></li>
        <li><img src="./asset/mywork/sushitran/sushi_04.png"/></li>
        <li><img src="./asset/mywork/sushitran/sushi_12.png"/></li>
        <li><img src="./asset/mywork/sushitran/sushi_05.png"/></li>
        <li><img src="./asset/mywork/sushitran/sushi_08.png"/></li>
        <li><img src="./asset/mywork/sushitran/sushi_02.png"/></li>
        <li><img src="./asset/mywork/sushitran/sushi_11.png"/></li>
        <li><img src="./asset/mywork/sushitran/sushi_12.png"/></li>
        <li><img src="./asset/mywork/sushitran/sushi_14.png"/></li>
        <li><img src="./asset/mywork/sushitran/sushi_05.png"/></li>
        <li><img src="./asset/mywork/sushitran/sushi_15.png"/></li>
        <li><img src="./asset/mywork/sushitran/sushi_01.png"/></li>
        <li><img src="./asset/mywork/sushitran/sushi_04.png"/></li>
        <li><img src="./asset/mywork/sushitran/sushi_16.png"/></li>
      </ul>
    </div>
    </div>
    <div class='myWorkDetail-detail'>
      <h1>回轉壽司</h1>
      <p>無限的回轉壽司,一次吃個夠</P>
    </div>
  </div>
  `
})
const work1001 = Vue.component('work1001',{
  data() {
    return {
      posx:0,
      posy:0,
      pospaddles:0,
      dy:-2,
      dx:2,
      ballRadius:10,
      paddleHeight:10,
      paddleWidth:80,
      rightPressed:false,
      leftPressed:false,
      brickRowCount:3,
      brickColumnCount:5,
      brickWidth:75,
      brickHeight:20,
      brickPadding:10,
      brickOffsetTop:30,
      brickOffsetLeft:30,
      bricks:[],
    }
  },
  mounted(){
    this.init();
    this.setGame();
  },
  computed: {
    canvas() {
        return document.querySelector('#game-myCanvas')
    },
    ctx(){
      return this.canvas.getContext("2d")
    },
    x:{
      get:function(){
        return this.posx + this.canvas.width/2
      },
      set:function(v){
        return this.posx +=  v
      }
    },
    y:{
      get:function(){
        return this.posy + this.canvas.height-30
      },
      set:function(v){
        return this.posy +=  v
      }
    },
    paddleX:{
      get:function(){
        return ((this.canvas.width-this.paddleWidth) / 2 ) + this.pospaddles
      },
      set:function(v){
        let max = (this.canvas.width-this.paddleWidth) / 2 
        let min = -(this.canvas.width-this.paddleWidth) / 2 
        if(this.pospaddles > max) return this.pospaddles = max 
        if(this.pospaddles < min) return this.pospaddles = min 
        return this.pospaddles += v
      }
    }
    },
  methods:{
    init(){
      for(c=0; c<this.brickColumnCount; c++) {
        this.bricks[c] = [];
          for(r=0; r<this.brickRowCount; r++) {
            this.bricks[c][r] = { x: 0, y: 0, status: 1 };
          }
      }
      document.addEventListener("keydown", this.keyDownHandler, false); //事件,function
      document.addEventListener("keyup", this.keyUpHandler, false);
      document.querySelector('#game-restart').addEventListener('click',function(){
        document.location.reload()
      })

    },
    keyUpHandler(e){
      if(e.key == "Right" || e.key == "ArrowRight") {
        this.rightPressed = false;
      }
      else if(e.key == "Left" || e.key == "ArrowLeft") {
        this.leftPressed = false;
      }
    },
    keyDownHandler(e) {
      if(e.key == "Right" || e.key == "ArrowRight") { //事件作為參數，由e變量表示
          this.rightPressed = true;
      }
      else if(e.key == "Left" || e.key == "ArrowLeft") {
          this.leftPressed = true;
      }
    },
    collisionDetection() {
      for(c=0; c<this.brickColumnCount; c++) {
          for(r=0; r<this.brickRowCount; r++) {
              let b = this.bricks[c][r];
              if(this.x > b.x && this.x < b.x+this.brickWidth && this.y > b.y && this.y < b.y+this.brickHeight && b.status == 1) {
                  this.dy = -this.dy;
                  b.status = 0;
                  this.bricks[c][r].status = 0;
              }
          }
      }
    },
    drawBricks() { //磚
      for(c=0; c<this.brickColumnCount; c++) {
          for(r=0; r<this.brickRowCount; r++) {
            if(this.bricks[c][r].status == 1) {
            let brickX = (c*(this.brickWidth+this.brickPadding))+this.brickOffsetLeft;
            let brickY = (r*(this.brickHeight+this.brickPadding))+this.brickOffsetTop;
            this.bricks[c][r].x = brickX;
            this.bricks[c][r].y = brickY;
              this.ctx.beginPath();
              this.ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight);
              this.ctx.fillStyle = "#0095DD";
              this.ctx.fill();
              this.ctx.closePath();
            }
          }
      }
    },
    drawBall() {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
      this.ctx.fillStyle = "red";
      this.ctx.fill();
      this.ctx.closePath();
    },
    drawPaddle() {
      this.ctx.beginPath();
      this.ctx.rect(this.paddleX, this.canvas.height-this.paddleHeight, this.paddleWidth, this.paddleHeight);
      this.ctx.fillStyle = "#0095DD";
      this.ctx.fill();
      this.ctx.closePath();
    },
    draw() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //清除所有
      this.drawBall();
      this.drawPaddle();
      this.drawBricks();
      this.collisionDetection();
      if(this.x + this.dx > this.canvas.width-this.ballRadius || this.x + this.dx < this.ballRadius) {
        this.dx = -this.dx;
      }
      if( this.y + this.dy < this.ballRadius) {
          this.dy = -this.dy;
      }else if(this.y + this.dy > this.canvas.height-this.ballRadius)
        if (this.x > this.paddleX && this.x < this.paddleX + this.paddleWidth) {
          this.dy = -this.dy;
        }
        else {
          document.querySelector('#game-gameover').style.display = 'block'
          // document.location.reload();   
        }

      if(this.rightPressed) {
        this.paddleX = 7;
        if (this.paddleX + this.paddleWidth > this.canvas.width){
          this.paddleX = this.canvas.width - this.paddleWidth;
        }
      }
      else if(this.leftPressed) {
        this.paddleX = -7;
        if (this.paddleX < 0){
          this.paddleX = 0;
        }
      }
      this.x = this.dx;
      this.y = this.dy;
    },
    setGame(){
      try{
        setInterval(this.draw, 10);
      }catch(e){

      }
    }
  },
  template:`
  <div id='myWorkDetail-root'>
  <div style='width:480px'>
  <div id="game-wrapper">
  <canvas id="game-myCanvas" width="480" height="320"></canvas>
  <div id="game-gameover">
    <div id='game-again'>
      <span>Game over</span>
      <button id="game-restart">Play Again</button>
    </div>
  </div>
  </div>
  </div>
  <div class='myWorkDetail-detail'>
    <h1>壁球小遊戲</h1>
    <p>純js實現的小遊戲,左右箭頭控制移動</P>
  </div>
</div>
  `
})
const blog = Vue.component('blog',{
  template:`
  <div>
    <div id='blog'>
    <div class='image'></div>
    <div>此頁正在整理喔!</div>
    </div>
  </div>
  `
})


const routes = [
  { path: "/", component: home },
  { path: "/about", component: about },
  { path: "/mywork",name:"mywork",component: myWork},
  { path: "/mywork/1001", component: work1001},
  { path: "/mywork/1002", component: work1002},
  { path: "/blog", component: blog}
]
const router = new VueRouter({
  routes,
});

const app = new Vue({
  router,
}).$mount("#app");
