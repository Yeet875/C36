class Player{
constructor(){

}
getCount(){
var playerCountRef =database.ref('playercount')
playerCountRef.on("value",function(data){
playercount =data.val();
})
}
updateCount(count){
    database.ref('/').update({
        playerCount:state
    });

}
update(name){
var playerIndex="player"+playercount
database.ref(playerIndex).set({
name:name
});
}
}