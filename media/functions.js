var Function=new(function(){
    this.max=32
})()

Function.empty=function(x,y){return 0}
Function.rect=function(x,y){
    diff=Math.abs(y-1)
    if(Viewport.stroke()>diff){return this.max}
    return 0
}
Function.identity=function(x,y){
    diff=Math.abs(y-x)
    if(Viewport.stroke()>diff){return this.max}
    return 0
}
Function.parabolic=function(x,y){
    diff=Math.abs(y-(x*x))
    if(Viewport.stroke()>diff){return this.max}
    return 0
}
Function.sin=function(x,y){
    diff=Math.abs(y-Math.sin(x))
    if(Viewport.stroke()>diff){return this.max}
    return 0
}
Function.cos=function(x,y){
    diff=Math.abs(y-Math.cos(x))
    if(Viewport.stroke()>diff){return this.max}
    return 0
}
Function.tan=function(x,y){
    diff=Math.abs(y-Math.tan(x))
    if(Viewport.stroke()>diff){return this.max}
    return 0
}
Function.log=function(x,y){
    diff=Math.abs(y-Math.log(x))
    if(Viewport.stroke()>diff){return this.max}
    return 0
}
Function.exp=function(x,y){
    diff=Math.abs(y-(Math.exp(x)/Math.E))
    if(Viewport.stroke()>diff){return this.max}
    return 0
}
Function.circle=function(x,y){
    diff=Math.abs((x*x+y*y)-2)
    if(Viewport.stroke()>diff){return this.max}
    return 0
}
