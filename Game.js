AFRAME.registerComponent("game-play",{
schema:{
    elementId:{type:"string", default:"#ring1"}
},
update:function(){
    this.isCollider(this.data.elementId)
},
isCollider:function(elementId){
const element=document.querySelector(elementId);
element.addEventListener("collide",(e)=>{
    if (elementId.includes("#ring")){
        console.log(elementId+" collision")
    }
    else if (elementId.includes("#hurdle")){
        console.log(elementId+" collision")
    }
})
}
})