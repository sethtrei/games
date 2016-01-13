var player;
var enemy;

function setup() {
  createCanvas(400, 500);
  player = createSprite(150, 435);
  var playerImage = loadImage("http://i.imgur.com/DOFe2Yz.png");
player.addImage(playerImage);
enemy = createSprite(90, 130, 8, 64);


  
}

function draw() {
  if (player.overlap(enemy)) {
  player.remove();
  enemy.remove();
  alert("Game Over");
  window.location.reload();


}
  
  
  
  background(0, 255, 0);
  if (keyDown(LEFT_ARROW)) {
  player.position.x = player.position.x - 8;
}
if (keyDown(RIGHT_ARROW)) {
  player.position.x = player.position.x + 8;
}
  enemy.position.y = enemy.position.y += 18;
 if (enemy.position.y > 500) {
  enemy.position.y = 0;
  enemy.position.x = random(400);
}
 
if(player.position.x>350){
  player.position.x = 0;
} else if(player.position.x<0){
  player.position.x = 350;
}
 
  drawSprites();
}