var Function=new(function(){
    this.max=32
    this.rect=function(x,y){
        diff1=Math.abs(y-1)
        diff2=Math.abs(x-1)
        if(Viewport.stroke()>diff1){return this.max}
        if(Viewport.stroke()>diff2){return this.max}
        return 0
    }
    this.identity=function(x,y){
        diff=Math.abs(y-x)
        if(Viewport.stroke()>diff){return this.max}
        return 0
    }
    this.parabolic=function(x,y){
        diff=Math.abs(y-(x*x))
        if(Viewport.stroke()>diff){return this.max}
        return 0
    }
    this.sin=function(x,y){
        diff=Math.abs(y-Math.sin(x))
        if(Viewport.stroke()>diff){return this.max}
        return 0
    }
    this.cos=function(x,y){
        diff=Math.abs(y-Math.cos(x))
        if(Viewport.stroke()>diff){return this.max}
        return 0
    }
    this.tan=function(x,y){
        diff=Math.abs(y-Math.tan(x))
        if(Viewport.stroke()>diff){return this.max}
        return 0
    }
    this.log=function(x,y){
        diff=Math.abs(y-Math.log(x))
        if(Viewport.stroke()>diff){return this.max}
        return 0
    }
    this.exp=function(x,y){
        diff=Math.abs(y-(Math.exp(x)/Math.E))
        if(Viewport.stroke()>diff){return this.max}
        return 0
    }
    this.circle=function(x,y){
        diff=Math.abs((x*x+y*y)-2)
        if(Viewport.stroke()>diff){return this.max}
        return 0
    }
})()
