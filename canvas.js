const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")
const particlesArray = []

canvas.width = innerWidth
canvas.height = innerHeight

window.addEventListener("resize",()=>{
    canvas.width = innerWidth
    canvas.height = innerHeight
})

//particle
const particle = function(){

    this.x = Math.random()*canvas.width
    this.y = Math.random()*canvas.height
    this.size = Math.random()*5+1
    this.velocityX = Math.random()*3-1.5
    this.velocityY = Math.random()*3-1.5
    
    this.update = function(){
        this.x += this.velocityX
        this.y += this.velocityY
    }
    this.draw = function(){
        c.strokeStyle = "red"
        c.lineWidth = 5
        c.beginPath()
        c.arc(this.x, this.y, 15, 0, Math.PI*2)
        c.stroke()
    }
}

function init(){
    for(let i = 0;i<100;i++){
        const p = new particle()
        particlesArray.push(p)
    }
}
init()

//refresh
document.querySelector("button").addEventListener("click",()=>{
    init()
})

function animate(){
    c.clearRect(0,0,canvas.width,canvas.height)
    
    particlesArray.forEach(el=>{
        el.update()
        el.draw()
    })
    
    requestAnimationFrame(animate)
}
animate()