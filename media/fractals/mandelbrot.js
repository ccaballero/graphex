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
// sooon!!
//Function.mandelbrot1c=function(i,j){
//    iteration=0
//    x=0;xx=0
//    y=0;yy=0
//    while((iteration<this.max)&&((xx+yy)<4.0)){
//        tx=x
//        ty=y
//        y=(xx*j)+(2*tx*ty*i)-(yy*j)
//        x=(xx*i)-(2*tx*ty*j)-(yy*i)+1
//        yy=y*y
//        xx=x*x
//        iteration++
//    }
//    return iteration
//}
