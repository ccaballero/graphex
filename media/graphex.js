// http://www.mediacollege.com/internet/javascript/number/round.html
function roundNumber(number,decimals){
    var newnumber=new Number(number+'').toFixed(parseInt(decimals))
    return parseFloat(newnumber)
}

var Viewport=new(function(){
    this.X = 0
    this.Y = 0
    this.scale=0

    this.right=function(){this.X+=20;this.repaint()}
    this.left=function(){this.X-=20;this.repaint()}
    this.up=function(){this.Y+=20;this.repaint()}
    this.down=function(){this.Y-=20;this.repaint()}

    this.zoomin=function(){this.scale-=0.1;this.repaint()}
    this.zoomout=function(){this.scale+=0.1;this.repaint()}

    this.stroke=function(){
        return this.zoom()/2
    }
    this.zoom=function(){
        return Math.pow(Math.E,this.scale-3.5)/Math.E
    }
    
    this.repaint=function(){
        $('#scale').text(roundNumber(this.scale,2))
        Screen.render()
    }
})()

var Screen=new(function(){
    this.height=function(){
        if(window.innerHeight){return window.innerHeight}
        else{return document.documentElement.clientHeight}}
    this.width=function(){
        if(window.innerWidth){return window.innerWidth}
        else{return document.documentElement.clientWidth}}
    this.render=function(){
        canvas=document.getElementById('cartesian')
        context=canvas.getContext('2d')
        width=canvas.width
        height=canvas.height
        context.fillStyle="#ffffff"
        context.fillRect(0,0,width,height)
        data=context.getImageData(0,0,width,height)
        pixels=data.data
        for(var y=0;y<height;y++){
            for(var x=0;x<width;x++){
                // translation
                _x=x-(width/2.0)+Viewport.X
                _y=-1*(y-(height/2.0))+Viewport.Y
                // scalation
                _x=_x*Viewport.zoom()
                _y=_y*Viewport.zoom()
                // renderization
                value=Fractal.mandelbrot(_x,_y)
                _value=(value*255)/Fractal.max
                index=(y*width+x)*4
                pixels[index]=pixels[index+1]=pixels[index+2]=_value
            }
        }
        context.putImageData(data,0,0)
        context.fillRect(0,0,0,0)
        // cartesian axes
        context.fillStyle='#ffffff'
        context.fillRect(0,height/2.0+Viewport.Y,width,1) // X
        context.fillRect(width/2.0-Viewport.X,0,1,height) // Y
    }
})()

var resize=function(){
    element=document.getElementById('cartesian')
    element.width=Screen.width()
    element.height=Screen.height()
    element.style.width=element.width+'px'
    element.style.height=element.height+'px'
    Screen.render()
}

$(window).resize(resize)
$(document).ready(resize)
$(document).ready(function(){
    Screen.render()
    $('.top').click(function(){Viewport.up()})
    $('.bottom').click(function(){Viewport.down()})
    $('.right').click(function(){Viewport.right()})
    $('.left').click(function(){Viewport.left()})

    $('.zoomin').click(function(){Viewport.zoomin()})
    $('.zoomout').click(function(){Viewport.zoomout()})

    window.addEventListener('keydown',function(event){
        switch(event.keyCode){
            case 33:Viewport.zoomin();break
            case 34:Viewport.zoomout();break
            case 37:Viewport.left();break
            case 38:Viewport.up();break
            case 39:Viewport.right();break
            case 40:Viewport.down();break
        }
    },true)
})
