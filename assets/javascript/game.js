$(document).ready(function() {



    var words= {
        wordsarray:["test1","longerword","test3"],
        wins:0,
        numberofGuess:9,
        letterguessed:[],
        matchingPos:[],
        notAmatch: function(){
                this.numberofGuess--;
                if(this.numberofGuess==0){
                   alert("Game over Bitch")
                }
            
        },
        userwon: function() {
            this.wins++
            this.letterguessed.splice()
        },
        pushkey:function(key){
            if(this.letterguessed.indexOf(key)==-1){
                this.letterguessed.push(key);
                return false
            }
            else{
                return true
            }

        },
        searchkey: function(key){
            var isKeyPressedAlready=this.pushkey(key);
            if (this.numberofGuess==0){
                var restartgame=prompt("want to restart the game?")
                console.log(restartgame )
            }
            else if (!isKeyPressedAlready){
                var hits=false;
                for (i=0; i<this.wordsarray[wordpick].length; i++){
                    if(wordchosen.charAt(i)==key) {
                        this.matchingPos.push(i);
                        hits=true;
                    }

                }
                if (!hits && this.numberofGuess>0){
                    this.notAmatch()
                }
                else if(!hits && this.numberofGuess==0){
                    alert("Game over Bitch")

                }
                console.log(this.letterguessed)

                console.log(this.numberofGuess)
            }
            else {
                alert ("This key has already been pressed. Please try another one")
                return
            }
        },
        
    }

    var wordpick=Math.floor(Math.random()*words.wordsarray.length);
    var wordchosen = words.wordsarray[wordpick];

    for (i=0; i<wordchosen.length; i++){
        //create a new element div to have the char inside and assign a class of hideletter
        var innerCharDivs= document.createElement("div");
        innerCharDivs.setAttribute("class", "hideletter innerposition"+ wordchosen.charAt(i));
        innerCharDivs.innerHTML=wordchosen.charAt(i);
        
        /*create a new element div to have the previoius created div inside 
        so i can hide the letter while keeping a bottom border visible*/

        outerCharDivs=document.createElement("div");
        outerCharDivs.setAttribute("class", "position-letter");
        $(outerCharDivs).append(innerCharDivs);
        //I will append this to the ID Created on the HTML
        $("#word-to-guess").append(outerCharDivs);
    }
    document.onkeyup = function(event){  
        var keyhit=words.searchkey(event.key)      
};
    






});