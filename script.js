function test(){
            
}
function load(){
   for(let x = 1; x <7; x++){
    let btn = document.createElement("img");
    let divv = document.createElement('div');
        if(x == 4){
            divv.class = 'break';
            divv.id = 'break';
            document.getElementById('dados').appendChild(divv);
        }
        else if(x < 4){
            
            btn.id = x;
            btn.value = x;
            btn.className = 'img'
            btn.src = './assets/0.png'
            document.getElementById('dados').appendChild(btn);
            
        }
        else if(x > 4){
            btn.id = x - 1;
            btn.value = x - 1;
            btn.className = 'img'
            btn.src = './assets/0.png'
            document.getElementById('dados').appendChild(btn);
        }
   }
}         
function getRandomInt() {
        min = 1
        max = 6;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    cliques = 0;
    function rolada(){
        cliques++
        document.getElementById('test2').innerHTML = cliques;
        document.getElementById('test').innerHTML = null;
        const reults = [];
        for (let step = 0; step < 5; step++) {
        
        let result = getRandomInt()
        reults.push(result);
        
        
        }
        reults.sort();
        iguais = [0, 0, 0, 0, 0];
        igbckp = [0, 0, 0, 0, 0];
        for(let i = 0; i < 5;i++){
            for(let x = 0; x < 5;x++){
                if(reults[i] == reults[x]){
                    iguais[i]++;
                    igbckp[i]++;
                }
            }                
        }
        console.log(iguais);
        document.getElementById('par').innerHTML = iguais;
        bruno = document.getElementById('roladas');
        
        iguais.sort();
        if(iguais[4] == 1){
            if(reults[0] == 1 && reults[4] == 5){
                document.getElementById('test').innerHTML = 'sequencia baixa?';
            }
            if(reults[0] == 2 && reults[4] == 6){
                document.getElementById('test').innerHTML = 'sequencia alta?';
            }
        }
        if(iguais[4] == 2){
            for(let x = 0; x < 5; x++){
                    if(igbckp[x] == 2){
                        document.getElementById('test').innerHTML = 'dupla de '+reults[x]+'?';
                        }

                }   
            if(iguais[2] == 2){
                document.getElementById('test').innerHTML = 'dupla dupla?';
                for(let x = 0; x < 2; x++){
                    if(igbckp[x] == 2){
                        d1 = reults[x];
                        }

                }
                for(let x = 0; x < 5; x++){
                    if(igbckp[x] == 2){
                        d2 = reults[x];
                        }

                }
                document.getElementById('test').innerHTML = 'dupla dupla de '+d1+' e '+d2+'?';
            }
            
         
            
        }                
        else if(iguais[4] == 3){
            for(let x = 0; x < 5; x++){
                    if(igbckp[x] == 3){
                        document.getElementById('test').innerHTML = 'trinca de '+reults[x]+'?';
                        }

                }
            if(iguais[1] == 2){
                document.getElementById('test').innerHTML = 'full house de '+reults[1]+' e '+reults[4]+'?';
            }
        }
        else if(iguais[4] == 4){
            for(let i = 0; i < 5; i++){
                if(igbckp[i] == 4){
                    document.getElementById('test').innerHTML = 'quadra de '+reults[i]+'?';
                }
            }
            
        }
        else if(iguais[4] == 5){
            document.getElementById('test').innerHTML = 'general?';
            window.alert('general?');
        }
        else{
            document.getElementById('test').innerHTML = 'no bitches?';
        }
        
        bruno.innerHTML = reults;
        dudu = ""
        a = reults.length - 1;
        b = 0;
        for(let i = 0; i <= a; i++){
            if(i < a){
                bruno.innerHTML = dudu + " " + reults[i] + ','; 
            }
            else{
                bruno.innerHTML = dudu + " " + reults[i]; 
            }
            dudu = bruno.innerHTML
        }
        for(let i = 0; i < 5;i++){
            iguais[i]--;
            iguais[i]--;  
            img = document.getElementById(i + 1);
            img.src = './assets/'+reults[i]+'.png'
        }
        console.log(reults);
        
    }
    