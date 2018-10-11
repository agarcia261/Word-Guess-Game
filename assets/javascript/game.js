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
        console.log(event)
};
    






});