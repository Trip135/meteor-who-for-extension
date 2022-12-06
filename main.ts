let projectile: Sprite = null
game.onUpdateInterval(750, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . c c c c . . . . . . . . 
        . . . c c c c c c c c c . . . . 
        . . c a c a a a a c c f c . . . 
        . c a a c a a a f f f f c c . . 
        c a a f f f a a c f f a c c . . 
        c a a f f f c b a a a a c c . . 
        c c a a c f a b c c a c c c c . 
        c c b b b 6 b b a c c c f f a c 
        c a a b b b 6 c c c f f f f a c 
        c a a b b b 6 6 a c f f c a a c 
        . a b b a b b 6 b a a a a b c c 
        . a b c c a b b b b b b b c c . 
        . . c b a a b c c c b c c c . . 
        . . . c b b b c c a b c . . . . 
        . . . . c b 6 a a b b c . . . . 
        . . . . . c c 6 6 b . . . . . . 
        `, randint(90, 30), randint(0, scene.screenHeight()))
})
