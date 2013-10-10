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
        scale=0.0085
        context.fillStyle="#ffffff"
        context.fillRect(0,0,width,height)
        data=context.getImageData(0,0,width,height)
        pixels=data.data
        for(var y=0;y<height;y++){
            for(var x=0;x<width;x++){
                // translation
                _x=x-(width/2.0)
                _y=-1*(y-(height/2.0))
                // scalation
                _x=_x*scale
                _y=_y*scale
                value=Function.mandelbrot(_x,_y)
                _value=(value*255)/Function.max
                index=(y*width+x)*4
                pixels[index]=pixels[index+1]=pixels[index+2]=_value
            }
        }
        context.putImageData(data,0,0)
        context.fillRect(0,0,0,0)
        context.fillStyle='#ffffff'
        context.fillRect(0,height/2.0,width,1)
        context.fillRect(width/2.0,0,1,height)
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
        if(0.01>diff){return this.max}
        return 0
    }
    this.parabolic=function(x,y){
        diff=Math.abs(y-(x*x))
        if(0.01>diff){return this.max}
        return 0
    }
    this.sin=function(x,y){
        diff=Math.abs(y-Math.sin(x))
        if(0.01>diff){return this.max}
        return 0
    }
    this.tan=function(x,y){
        diff=Math.abs(y-Math.tan(x))
        if(0.01>diff){return this.max}
        return 0
    }
    this.log=function(x,y){
        diff=Math.abs(y-Math.log(x))
        if(0.01>diff){return this.max}
        return 0
    }
    this.circle=function(x,y){
        diff=Math.abs((x*x+y*y)-2)
        if(0.01>diff){return this.max}
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
$(document).ready(Screen.render)
