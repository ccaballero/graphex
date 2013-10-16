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

 Function.mandelbrot=function(i,j){
    iteration=0
    x=0;xx=0
    y=0;yy=0
    while((iteration<this.max)&&((xx+yy)<4.0)){
        y=(2*x*y)+j
        x=(xx-yy)+i
        yy=y*y
        xx=x*x
        iteration++
    }
    return iteration
}
Function.mandelbrot3=function(i,j){
    iteration=0
    x=0;xx=0;xxx=0
    y=0;yy=0;yyy=0
    while((iteration<this.max)&&((xx+yy)<4.0)){
        tx=x
        ty=y
        y=(3*xx*ty)-(yyy)+j
        x=(xxx)-(3*yy*tx)+i
        yy=y*y;yyy=yy*y
        xx=x*x;xxx=xx*x
        iteration++
    }
    return iteration
}
Function.mandelbrot4=function(i,j){
    iteration=0
    x=0;xx=0;xxx=0;xxxx=0
    y=0;yy=0;yyy=0;yyyy=0
    while((iteration<this.max)&&((xx+yy)<4.0)){
        tx=x
        ty=y
        y=(4*xxx*ty)-(4*tx*yyy)+j
        x=(xxxx)-(6*xx*yy)+(yyyy)+i
        yy=y*y;yyy=yy*y;yyyy=yyy*y
        xx=x*x;xxx=xx*x;xxxx=xxx*x
        iteration++
    }
    return iteration
}
Function.mandelbrot5=function(i,j){
    iteration=0
    x=0;xx=0;xxx=0;xxxx=0;xxxxx=0
    y=0;yy=0;yyy=0;yyyy=0;yyyyy=0
    while((iteration<this.max)&&((xx+yy)<4.0)){
        tx=x
        ty=y
        y=(5*xxxx*ty)-(10*xx*yyy)+(yyyyy)+j
        x=(xxxxx)-(10*xxx*yy)+(5*tx*yyyy)+i
        yy=y*y;yyy=yy*y;yyyy=yyy*y;yyyyy=yyyy*y
        xx=x*x;xxx=xx*x;xxxx=xxx*x;xxxxx=xxxx*x
        iteration++
    }
    return iteration
}
Function.mandelbrot6=function(i,j){
    iteration=0
    x=0;xx=0;xxx=0;xxxx=0;xxxxx=0;xxxxxx=0
    y=0;yy=0;yyy=0;yyyy=0;yyyyy=0;yyyyyy=0
    while((iteration<this.max)&&((xx+yy)<4.0)){
        tx=x
        ty=y
        y=(6*xxxxx*ty)-(20*xxx*yyy)+(6*tx*yyyyy)+j
        x=(xxxxxx)-(15*xxxx*yy)+(15*xx*yyyy)-(yyyyyy)+i
        yy=y*y;yyy=yy*y;yyyy=yyy*y;yyyyy=yyyy*y;yyyyyy=yyyyy*y
        xx=x*x;xxx=xx*x;xxxx=xxx*x;xxxxx=xxxx*x;xxxxxx=xxxxx*x
        iteration++
    }
    return iteration
}
Function.mandelbrot7=function(i,j){
    iteration=0
    x=0;xx=0;xxx=0;xxxx=0;xxxxx=0;xxxxxx=0;xxxxxxx=0
    y=0;yy=0;yyy=0;yyyy=0;yyyyy=0;yyyyyy=0;yyyyyyy=0
    while((iteration<this.max)&&((xx+yy)<4.0)){
        tx=x
        ty=y
        y=(7*xxxxxx*ty)-(35*xxxx*yyy)+(21*xx*yyyyy)-(yyyyyyy)+j
        x=(xxxxxxx)-(21*xxxxx*yy)+(35*xxx*yyyy)-(7*tx*yyyyyy)+i
        yy=y*y;yyy=yy*y;yyyy=yyy*y;yyyyy=yyyy*y;yyyyyy=yyyyy*y;yyyyyyy=yyyyyy*y
        xx=x*x;xxx=xx*x;xxxx=xxx*x;xxxxx=xxxx*x;xxxxxx=xxxxx*x;xxxxxxx=xxxxxx*x
        iteration++
    }
    return iteration
}
