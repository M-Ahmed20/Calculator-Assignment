function copy(){
        // var ab = document.getElementById('sss').innerHTML = 'Hello World'
        var para = 'iske agey kuch bhi likh dia maine'
        document.getElementById('sss').innerHTML += para
    }
    
    function copy(){
        var abc = document.getElementById('fff').innerHTML
        var hmm = document.getElementById('sss').innerHTML = abc
    }
    
    function vanishImage(){
        var img = document.getElementById('sss')
        img.className = "hidden"
    }
    
    
    function zoom(){
        var ino = document.getElementById('sss')
        ino.className = ' new'
    }
    
    function num(a){
        document.getElementById('sss').value += a
    }
    
    function equal(){
        var acha = document.getElementById('sss')
        acha.value = eval(acha.value)
    }
    
    function clear(){
       var acha =  document.getElementById('clr')
       acha.value = ""
    }
    
    
    function num(a){
        //console.log(a)
        document.getElementById('clr').value += a
    }
    
    function result(){
        var acha = document.getElementById('clr')
        acha.value = eval(acha.value)
    }
    
    function empty(){
        document.getElementById('clr').value = ""
    }
    
    
