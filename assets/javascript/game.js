$(document).ready(function() {

    var words= {
        wordsarray:["test 1","longerword","hupa lupa"],
        charArray:[],
        wins:0,
        loss:0,
        numberofGuess:9,
        letterguessed:[],
        matchingPos:[],
        correctguess:[],
        notAmatch: function(){
                this.numberofGuess--;
                if(this.numberofGuess==0){
                   alert("Game over Bitch")
                }
            
        },
        userwon: function() {
            this.wins++
            this.charArray=[];
            this.numberofGuess=9,
            this.letterguessed=[];
            this.matchingPos=[];
            this.correctguess=[];
            audioElement.play();

        },
        userlost: function (){
            this.loss++
            this.charArray=[];
            this.numberofGuess=9,
            this.letterguessed=[];
            this.matchingPos=[];
            this.correctguess=[];
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
        pushWordChar:function(key){
            if(this.charArray.indexOf(key)==-1){
                this.charArray.push(key);     
            }
            return 
        },
        alertWin: function(){
            alert(" You Wont. Wo hoo!")        
        },
        searchkey: function(key){
            var isKeyPressedAlready=this.pushkey(key);
            if (this.numberofGuess==0){
                var restartgame=confirm("want to restart the game?")
                if (restartgame){

                    alert ("i need to restart")
                }
                else{

                    alert ("Thanks for Playing. See you soon!")

                }
            }
            else if (!isKeyPressedAlready){
                var hits=false;
                for (i=0; i<this.wordsarray[wordpick].length; i++){
                    if(wordchosen.charAt(i)==key) {
                        this.matchingPos.push(i);
                        hits=true;
                        $("."+i).removeClass("hideletter");
                    }

                }
                if (!hits && this.numberofGuess>0){
                    this.notAmatch()
                }
                else if(!hits && this.numberofGuess==0){
                    alert("Game over Bitch")
                }
                else if (hits){
                   this.correctguess.push(key)
                    if (this.charArray.length==this.correctguess.length){
                    this.userwon()
                    window.setTimeout(this.alertWin, 300);
                    }
                }
                else if (hits){

                }
            }
            else {
                alert ("This key has already been pressed. Please try another one")
                return
            }
        },
        
    }

    var wordpick=Math.floor(Math.random()*words.wordsarray.length);
    var wordchosen = words.wordsarray[wordpick];
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/images/champions.mp3");


    for (i=0; i<wordchosen.length; i++){
        //create a new element div to have the char inside and assign a class of hideletter
        var innerCharDivs= document.createElement("div");
        innerCharDivs.setAttribute("class", i+ " hideletter innerposition"+ wordchosen.charAt(i));
        innerCharDivs.innerHTML=wordchosen.charAt(i);
        
        /*create a new element div to have the previoius created div inside 
        so i can hide the letter while keeping a bottom border visible*/

        outerCharDivs=document.createElement("div");
        outerCharDivs.setAttribute("class", "position-letter");
        $(outerCharDivs).append(innerCharDivs);
        //I will append this to the ID Created on the HTML
        $("#word-to-guess").append(outerCharDivs);

        words.pushWordChar(wordchosen.charAt(i))
        console.log(words.charArray)
    }
    document.onkeyup = function(event){  
        var keyhit=words.searchkey(event.key)  
        

};
    






});