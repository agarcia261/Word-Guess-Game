$(document).ready(function() {

    var words= {
        wordsarray:[item1={name:"minion", hint:"<img  class='image tobedeleted' src='assets/images/minion.png' alt='Minion'>"},
        item2={name:"banana", hint:"<img  class='image tobedeleted' src='assets/images/banana.png' alt='Minion Bananas'>"},
        item3={name:"pirate", hint:"<img  class='image tobedeleted' src='assets/images/pirate.png' alt='Minion pirate'>"}],
        wordchosen:"",
        charArray:[],
        wins:0,
        loss:0,
        numberofGuess:9,
        letterguessed:[],
        matchingPos:[],
        correctguess:[],
        selectword: function(){
            this.updatehtml("n-guess");
            this.updatehtml("wins");
            this.updatehtml("letters-guessed");
            var wordpick=Math.floor(Math.random()*this.wordsarray.length);
             this.wordchosen = this.wordsarray[wordpick].name;
             for (i=0; i<this.wordchosen.length; i++){
                //create a new element div to have the char inside and assign a class of hideletter
                var innerCharDivs= document.createElement("div");
                innerCharDivs.setAttribute("class", i+ " hideletter innerposition");
                innerCharDivs.innerHTML=this.wordchosen.charAt(i);
                
                /*create a new element div to have the previoius created div inside 
                so i can hide the letter while keeping a bottom border visible*/
        
                outerCharDivs=document.createElement("div");
                outerCharDivs.setAttribute("class", "position-letter tobedeleted");
                $(outerCharDivs).append(innerCharDivs);
                //I will append this to the ID Created on the HTML
                $("#word-to-guess").append(outerCharDivs);
                this.pushWordChar(this.wordchosen.charAt(i))
            }
            var image=$(".image-section")
            image.append(this.wordsarray[wordpick].hint)
            image.animate({width:"50px"});
            image.animate({width:"400px"});


        },
        cleardiv: function() {
            $(".tobedeleted").remove()
        },
        updatehtml: function (idtoupdate){
            var gRemaining=document.getElementById(idtoupdate);
            if (idtoupdate=="n-guess"){
                gRemaining.innerHTML=this.numberofGuess;
            }
            else if (idtoupdate=="wins"){
                gRemaining.innerHTML=this.wins;
            }
            else if (idtoupdate=="letters-guessed"){
                gRemaining.innerHTML=this.letterguessed
            }
        },
        notAmatch: function(){
                this.numberofGuess--;
                this.updatehtml("n-guess")
                if(this.numberofGuess==0){
                   alert("You Lost")
                   this.userlost();
                }
            
        },
        userwon: function() {
            this.wins++
            this.charArray=[];
            this.numberofGuess=9,
            this.letterguessed=[];
            this.matchingPos=[];
            this.correctguess=[];
            this.cleardiv();
            this.updatehtml("n-guess");
            this.updatehtml("wins");
            this.selectword();
            audioElement.play();
            this.musicstop();

        },
        musicstop: function (){
            window.setTimeout(stopmusic, 30000);
            function stopmusic (){
            audioElement.pause();
            }

        },
        userlost: function (){
            this.cleardiv();
            var image=$(".image-section")
            image.append("<img  class='image tobedeleted' src='assets/images/hangman_game.png' alt='Minion pirate'>")
            image.animate({width:"50px"});
            image.animate({width:"400px"});
            this.loss++
        },
        restartgameafterloss: function(){
            this.charArray=[];
            this.numberofGuess=9,
            this.letterguessed=[];
            this.matchingPos=[];
            this.correctguess=[];
            this.cleardiv();
            this.updatehtml("n-guess");
            this.updatehtml("wins");
            this.selectword();
            
        },
        pushkey:function(key){
            if (this.numberofGuess!=0){
                if(this.letterguessed.indexOf(key)==-1){
                    this.letterguessed.push(key);
                    this.updatehtml("letters-guessed");

                    return false
                }
                else{
                    return true
                }
            }
            else{
                return
            }

        },
        pushWordChar:function(key){
            if(this.charArray.indexOf(key)==-1){
                this.charArray.push(key);     
            }
            return 
        },
        alertWin: function(){
            alert(" You Won. Wo hoo!")        
        },
        searchkey: function(key){
            var isKeyPressedAlready=this.pushkey(key);
            if (this.numberofGuess==0){
                var restartgame=confirm("want to keep playing?")
                if (restartgame){

                    this.restartgameafterloss()
                }
                else{

                    alert ("Thanks for Playing. See you soon!")

                }
            }
            else if (!isKeyPressedAlready){
                var hits=false;
                for (i=0; i<this.wordchosen.length; i++){
                    if(this.wordchosen.charAt(i)==key) {
                        this.matchingPos.push(i);
                        hits=true;
                        $("."+i).removeClass("hideletter");
                    }

                }
                if (!hits && this.numberofGuess>0){
                    this.notAmatch()
                }
                else if(!hits && this.numberofGuess==0){
                    alert("Game Over")
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

    words.selectword();
    
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/images/champions.mp3");



    document.onkeyup = function(event){  
        var keyhit=words.searchkey(event.key)  
        

};
    






});