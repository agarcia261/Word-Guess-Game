$(document).ready(function() {



    var words= {
        wordsarray:["test1","test2","test3"],
        wins:0,
        numberofGuess:9,
        letterguessed:[],
        notAmatch: function(){
            if(this.numberofGuess>0){
                this.numberofGuess--
                if(this.numberofGuess==0){
                    //user lost
                }
            }
        },
        userwon: function() {
            this.wins++
        },
        
    }
    var wordpick=Math.floor(Math.random()*words.wordsarray.length);
    console.log(words.wordsarray[wordpick]);






});