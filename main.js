class DesktopScene extends Phaser.Scene {
    constructor() {
        super({key: 'DesktopScene'});
    }

    preload(){
        //this.load.image('imageName', 'location');
        this.load.spritesheet('fabianWalk', 'assets/ui/fabianwalking.png', {
            frameWidth: 300,
            frameHeight: 300
        });
        this.load.spritesheet('playGuitar', 'assets/ui/fabianguitar.png', {
            frameWidth: 300,
            frameHeight: 300
        });
        this.load.image("desktopBg", 'assets/ui/DesktopBackground.png');
        this.load.image("guitar", 'assets/ui/guitar.png');
    }

    create() {
        this.bg = this.add.image(0, 0, 'desktopBg').setOrigin(0, 0);
        this.resizeBackground();

        this.scale.on('resize', (gameSize) => {
            this.resizeBackground();
        });

        this.anims.create({
            key: 'walk-right',
            frames: this.anims.generateFrameNumbers('fabianWalk', {start: 0, end: 7}),
            frameRate: 6,
            repeat:-1
        });

        this.anims.create({
            key: 'walk-left',
            frames: this.anims.generateFrameNumbers('fabianWalk', {start: 8, end:15}),
            frameRate: 6,
            repeat: -1
        });

        this.anims.create({
            key: 'play-guitar',
            frames: this.anims.generateFrameNumbers('playGuitar', {start: 0, end: 3}),
            frameRate: 6,
            repeat: -1
            
    
        });

        this.guitar = this.add.image(600, 300, 'guitar');
        this.guitar.setScale(0.18);
        this.spaceKey = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );

        this.player = this.add.sprite(400, 300, 'fabianWalk');
        
        this.cursors = this.input.keyboard.createCursorKeys();
        
        this.promptText = this.add.text(this.guitar.x, this.guitar.y + this.guitar.displayHeight/2 + 10, "[SPACE] jazzmaster", {
            fontSize: '16px',
            fill: "#ffffff"
        });

        this.promptText.setVisible(false);

        
        //this.buttonName = this.add.image(100, 100, 'imageName').setInteractive();

        //this.buttonName.on('pointerdown', () => {
            //this.scene.start('sceneName');
            //});
    }

    update(){
        const speed = 1.2;
        const cursors = this.cursors;
        

        

        let distance = Phaser.Math.Distance.Between(
            this.player.x,
            this.player.y,
            this.guitar.x,
            this.guitar.y
        );

        if (distance < 100) {
            this.promptText.setPosition(this.guitar.x-90, this.guitar.y +130);
            this.promptText.setVisible(true);
        } else {
            this.promptText.setVisible(false);
        }


        if(distance < 100 && this.spaceKey.isDown){
            this.player.anims.play('play-guitar', true);
            this.player.setScale(0.85);
            this.guitar.setVisible(false);
            this.promptText.setVisible(false);
            return;
        } 
        

        if(cursors.left.isDown) {
            this.player.setScale(1);
           this.guitar.setVisible(true);
            this.player.x -= speed;
            this.player.anims.play('walk-left', true);
        } else if(cursors.right.isDown) {
            this.player.setScale(1);
            this.guitar.setVisible(true);
            this.player.x += speed;
            this.player.anims.play('walk-right', true);
        } else{
            this.player.anims.stop();
        }

        

        
       
    }

    resizeBackground(){
        this.bg.displayWidth = this.scale.width;
        this.bg.displayHeight = this.scale.height;
        }
}

const config = {
    type: Phaser.AUTO,
    
    backgroundColor: 0x222222,
    parent: 'game',
    scene: [DesktopScene],
    scale: {
        mode: Phaser.Scale.RESIZE,   
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

const game = new Phaser.Game(config);