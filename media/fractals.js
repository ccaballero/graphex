var Fractal=new(function(){
    this.max=32
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
