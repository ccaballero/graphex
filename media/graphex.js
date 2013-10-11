var Viewport=new(function(){
    this.X = 0
    this.Y = 0
    this.scale=0.05

    this.right=function(){this.X+=20;Screen.render()}
    this.left=function(){this.X-=20;Screen.render()}
    this.up=function(){this.Y+=20;Screen.render()}
    this.down=function(){this.Y-=20;Screen.render()}

    this.zoomin=function(){this.scale-=0.001;Screen.render()}
    this.zoomout=function(){this.scale+=0.001;Screen.render()}

    this.error = 0.5
    this.zoom=function(){return}
    this.stroke=function(){return 0.001}
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
                _x=_x*Viewport.scale
                _y=_y*Viewport.scale
                // renderization
                value=Function.parabolic(_x,_y)
                _value=(value*255)/Function.max
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

var Function=new(function(){
    this.max=32
    this.identity=function(x,y){
        diff=Math.abs(y-x)
        if(Viewport.error>diff){return this.max}
        return 0
    }
    this.parabolic=function(x,y){
        diff=Math.abs(y-(x*x))
        if(Viewport.stroke()>diff){return this.max}
        return 0
    }
    this.sin=function(x,y){
        diff=Math.abs(y-Math.sin(x))
        if(Viewport.error>diff){return this.max}
        return 0
    }
    this.tan=function(x,y){
        diff=Math.abs(y-Math.tan(x))
        if(Viewport.error>diff){return this.max}
        return 0
    }
    this.log=function(x,y){
        diff=Math.abs(y-Math.log(x))
        if(Viewport.error>diff){return this.max}
        return 0
    }
    this.exp=function(x,y){
        diff=Math.abs(y-Math.exp(x))
        if(Viewport.error>diff){return this.max}
        return 0
    }
    this.log2=function(x,y){
        diff=Math.abs(y-Math.log(x))
        if(Viewport.error>diff){return this.max}
        return 0
    }
    this.circle=function(x,y){
        diff=Math.abs((x*x+y*y)-2)
        if(Viewport.error>diff){return this.max}
        return 0
    }
    this.mandelbrot=function(i,j){
        value=0
        x=0
        y=0
        xx=0
        yy=0
        while((value<this.max)&&((xx+yy)<4.0)){
            y=((x+x)*y)+j
            x=(xx-yy)+i
            yy=y*y
            xx=x*x
            value++
        }
        return value
    }
})()

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
