var Fractal=new(function(){
    this.max=32
    this.mandelbrot=function(i,j){
        iteration=0
        x=0;y=0;xx=0;yy=0
        while((iteration<this.max)&&((xx+yy)<4.0)){
            y=(2*x*y)+j
            x=(xx-yy)+i
            xx=x*x
            yy=y*y
            iteration++
        }
        return iteration
    }
    this.mandelbrot3=function(i,j){
        iteration=0
        x=0;y=0;xx=0;yy=0
        while((iteration<this.max)&&((xx+yy)<4.0)){
            tx=x
            ty=y
            txx=xx-yy
            tyy=2*x*y
            x=(txx*tx-tyy*ty)+i
            y=(txx*ty+tyy*tx)+j
            xx=x*x
            yy=y*y
            iteration++
        }
        return iteration
    }
    this.mandelbrot4=function(i,j){
        iteration=0
        x=0;y=0;xx=0;yy=0
        while((iteration<this.max)&&((xx+yy)<4.0)){
            tx=x
            ty=y
            txx=xx-yy
            tyy=2*x*y
            x=(txx*tx-tyy*ty)+i
            y=(txx*ty+tyy*tx)+j
            xx=x*x
            yy=y*y
            iteration++
        }
        return iteration
    }
//multibrot4 : function(x, y, it, er2) {
//		var x0 = x, y0 = y;
//		var xx = x*x, yy = y*y;
//		do {
//			y = 2*x*y;
//			x = xx - yy;
//			yy = y*y;
//			xx = x*x;
//			y = 2*x*y + y0;
//			x = xx - yy + x0;
//			yy = y*y;
//			xx = x*x;
//			if (xx+yy > er2)
//				break;
//		} while(--it)
//		return {
//			it : it, x : x, y : y, xx : xx, yy : yy
//		};
//	},
})()
