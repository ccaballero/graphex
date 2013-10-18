// http://www.mediacollege.com/internet/javascript/number/round.html
function roundNumber(number,decimals){
    var newnumber=new Number(number+'').toFixed(parseInt(decimals))
    return parseFloat(newnumber)
}

var Viewport=new(function(){
    this.X = 0
    this.Y = 0
    this.scale=0
    this.axis=true

    this.right=function(){this.X+=20}
    this.left=function(){this.X-=20}
    this.up=function(){this.Y+=20}
    this.down=function(){this.Y-=20}

    this.zoomin=function(){this.scale-=0.1}
    this.zoomout=function(){this.scale+=0.1}

    this.stroke=function(){
        return this.zoom()/2
    }
    this.zoom=function(){
        return Math.pow(Math.E,this.scale-3.5)/Math.E
    }
    this.label=function(){
        $('#scale').text(roundNumber(this.scale,2))
    }
    this.repaint=function(){
        Screen.render()
    }
})()

var palette=[
    [1,1,1],
    [0,1,1],
    [1,0,1],
    [1,1,0],
    [0,0,1],
    [0,1,0],
    [1,0,0],
];

var Screen=new(function(){
    this.canvas=null
    this.fnct='empty'
    this.getCanvas=function(){
        if(!this.canvas){
            this.canvas=document.getElementById('cartesian')
        }
        return this.canvas
    }
    this.height=function(){
        if(window.innerHeight){return window.innerHeight}
        else{return document.documentElement.clientHeight}}
    this.width=function(){
        if(window.innerWidth){return window.innerWidth}
        else{return document.documentElement.clientWidth}}
    this.center=function(){
        width=this.getCanvas().width
        height=this.getCanvas().height
        _x=(width/2.0)+Viewport.X
        _y=(height/2.0)+Viewport.Y
        return [_x,_y]
    }
    this.render=function(){
        context=this.getCanvas().getContext('2d')
        width=this.getCanvas().width
        height=this.getCanvas().height
        context.fillStyle="#ffffff"
        context.fillRect(0,0,width,height)
        data=context.getImageData(0,0,width,height)
        pixels=data.data
        zoom=Viewport.zoom()
        chromatic=32
        for(var y=0;y<height;y++){
            for(var x=0;x<width;x++){
                // translation and scalation
                _x=x-(width/2.0)+Viewport.X
                _y=-1*(y-(height/2.0))+Viewport.Y
                // scalation
                _x=_x*zoom
                _y=_y*zoom
                // renderization
                value=Function[this.fnct](_x,_y)
                if(value!=Function.max){
                    _v1=Math.floor(value/chromatic)
                    _v2=value%chromatic
                }else{
                    _v1=0
                    _v2=value
                }
                _value=(_v2*255)/chromatic
                
                // set the pixel color
                index=(y*width+x)*4
                pixels[index]=palette[_v1][0]*_value
                pixels[index+1]=palette[_v1][1]*_value
                pixels[index+2]=palette[_v1][2]*_value
            }
        }
        context.putImageData(data,0,0)
        context.fillRect(0,0,0,0)
        if(Viewport.axis){
            // cartesian axes
            context.fillStyle='#cccccc'
            context.fillRect(0,height/2.0+Viewport.Y,width,1) // X
            context.fillRect(width/2.0-Viewport.X,0,1,height) // Y
        }
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

    $('.top').click(function(){Viewport.up();Viewport.repaint()})
    $('.bottom').click(function(){Viewport.down();Viewport.repaint()})
    $('.right').click(function(){Viewport.right();Viewport.repaint()})
    $('.left').click(function(){Viewport.left();Viewport.repaint()})

    $('.zoomin').click(function(){Viewport.zoomin();Viewport.label();Viewport.repaint()})
    $('.zoomout').click(function(){Viewport.zoomout();Viewport.label();Viewport.repaint()})

    $('.hide').click(function(){
        Viewport.axis=false
        $('header').hide('slow')
        $('footer').hide('slow')
        $('#show').removeClass().addClass('visible')
        return false
    })
    $('.show').click(function(){
        Viewport.axis=true
        $('#show').removeClass().addClass('hidden')
        $('header').show('slow')
        $('footer').show('slow')
        return false
    })
    $('.menu').click(function(){
        $('#menu').removeClass('hidden').addClass('visible')
    })
    $('.help').click(function(){
        $('#help').removeClass('hidden').addClass('visible')
    })
    $('.close').click(function(){
        $(this).parent().parent().removeClass('visible').addClass('hidden')
    })

    $('#menu ul li a').click(function(){
        type=$(this).attr('name')
        Screen.fnct=type
        $('#menu').removeClass('visible').addClass('hidden')
        Viewport.repaint()
    })

    window.addEventListener('keydown',function(event){
        switch(event.keyCode){
            case 33:Viewport.zoomin();break
            case 34:Viewport.zoomout();break
            case 37:Viewport.left();break
            case 38:Viewport.up();break
            case 39:Viewport.right();break
            case 40:Viewport.down();break
        }
        Viewport.label()
        Viewport.repaint()
    },true)

    // http://miloq.blogspot.com/2011/05/coordinates-mouse-click-canvas.html
//    window.addEventListener('mousedown',function(event){
//        x=new Number()
//        y=new Number()
//        canvas=Screen.getCanvas()
//        if(event.x!=undefined&&event.y!=undefined){
//            x=event.x
//            y=event.y
//        }else{
//            x=event.clientX
//                +document.body.scrollLeft
//                +document.documentElement.scrollLeft
//            y=event.clientY
//                +document.body.scrollTop
//                +document.documentElement.scrollTop
//        }
//        x-=canvas.offsetLeft
//        y-=canvas.offsetTop
//
//        center=Screen.center()
//        console.log('x:'+x+' y:'+y)
//        Viewport.X=center[0]-(x-Viewport.X)
//        Viewport.Y=center[1]-(y-Viewport.Y)
//        Viewport.repaint()
//    },false)
})
