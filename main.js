class DesktopScene extends Phaser.Scene {
    constructor() {
        super({ key: 'DesktopScene' });
    }

    preload() {
        //this.load.image('imageName', 'location');
        this.load.spritesheet('fabianWalk', 'assets/ui/fabianwalking.png', {
            frameWidth: 300,
            frameHeight: 300
        });
        this.load.spritesheet('playGuitar', 'assets/ui/fabianguitar.png', {
            frameWidth: 300,
            frameHeight: 300
        });
        this.load.spritesheet('fabianYWalk', 'assets/ui/yaxiswalk.png', {
            frameWidth: 300,
            frameHeight: 300
        });
        this.load.spritesheet('raccoongaming', 'assets/ui/raccoongaming.png', {
            frameWidth: 300,
            frameHeight: 113
        });
        this.load.spritesheet('raccoonidle', 'assets/ui/mishkaidle.png', {
            frameWidth: 300,
            frameHeight: 300
        });
        this.load.spritesheet('fabidle', 'assets/ui/fabidle.png', {
            frameWidth: 300,
            frameHeight: 300
        });
        this.load.spritesheet('mishsleeping', 'assets/ui/mishsleeping.png', {
            frameWidth: 206,
            frameHeight: 291
        });
        this.load.spritesheet('sleeping', 'assets/ui/sleeping.png', {
            frameWidth: 700,
            frameHeight: 1000
        });
        this.load.spritesheet('cuddle', 'assets/ui/cuddle.png', {
            frameWidth: 442,
            frameHeight: 398
        });
        this.load.spritesheet('foxgaming', 'assets/ui/foxgaming.png', {
            frameWidth: 268,
            frameHeight: 508
        });

        this.load.image("housebg", 'assets/ui/housebg.png');
        this.load.image("guitar", 'assets/ui/guitar.png');
        this.load.image("navyguitar", 'assets/ui/navyguitar.png');
        this.load.image("bed", 'assets/ui/bed.png');
        this.load.image("steps", 'assets/ui/steps.png');

        this.load.image("letter", 'assets/ui/letter.png');
        this.load.image("page1", 'assets/ui/page1.png');
        this.load.image("page2", 'assets/ui/page2.png');
        this.load.image("page3", 'assets/ui/page3.png');
        this.load.image("page4", 'assets/ui/page4.png');
        this.load.image("disclaimer", 'assets/ui/disclaimer.png');

        this.load.audio('kissme', 'assets/audio/kissme.mp3');

    }

    create() {
        this.kissme = this.sound.add('kissme', {
            loop: true,
            volume: 0.5
        });
        this.kissme.play();


        this.bg = this.add.image(0, 0, 'housebg').setOrigin(0, 0);
        this.resizeBackground();

        this.anims.create({
            key: 'walk-right',
            frames: this.anims.generateFrameNumbers('fabianWalk', { start: 0, end: 7 }),
            frameRate: 6,
            repeat: -1
        });

        this.anims.create({
            key: 'walk-left',
            frames: this.anims.generateFrameNumbers('fabianWalk', { start: 8, end: 15 }),
            frameRate: 6,
            repeat: -1
        });

        this.anims.create({
            key: 'play-guitar',
            frames: this.anims.generateFrameNumbers('playGuitar', { start: 0, end: 3 }),
            frameRate: 6,
            repeat: -1


        });

        this.anims.create({
            key: 'walk-down',
            frames: this.anims.generateFrameNumbers('fabianYWalk', { start: 0, end: 3 }),
            frameRate: 7,
            repeat: -1
        });

        this.anims.create({
            key: 'walk-up',
            frames: this.anims.generateFrameNumbers('fabianYWalk', { start: 4, end: 7 }),
            frameRate: 7,
            repeat: -1
        });



        this.anims.create({
            key: 'fab-idle',
            frames: this.anims.generateFrameNumbers('fabidle', { start: 0, end: 3 }),
            frameRate: 3,
            repeat: -1
        });

        this.anims.create({
            key: 'sleeping',
            frames: this.anims.generateFrameNumbers('sleeping', { start: 0, end: 3 }),
            frameRate: 3,
            repeat: -1
        });

        this.anims.create({
            key: 'cuddling',
            frames: this.anims.generateFrameNumbers('cuddle', { start: 0, end: 4 }),
            frameRate: 3,
            repeat: -1
        });
        this.anims.create({
            key: 'foxgaming',
            frames: this.anims.generateFrameNumbers('foxgaming', { start: 0, end: 1 }),
            frameRate: 3,
            repeat: -1
        });



        this.navyguitar = this.add.image(195, 100, 'navyguitar');
        this.navyguitar.setScale(0.14);

        this.guitar = this.add.image(685, 470, 'guitar');
        this.guitar.setScale(0.14);
        this.spaceKey = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );

        this.bed = this.add.image(93, 200, 'bed');
        this.bed.setScale(1.13);

        this.letter = this.add.image(405, 300, 'letter');
        this.letter.setScale(0.25);

        this.steps = this.add.image(400, 280, 'steps');
        this.steps.setScale(0.5);
        this.steps.setVisible(false);

        this.disclaimer = this.add.image(400, 280, 'disclaimer');
        this.disclaimer.setScale(0.3);
        this.disclaimer.setDepth(100);

        this.player = this.add.sprite(380, 100, 'fabidle');


        this.player.play('fab-idle');
        this.player.setScale(0.70);



        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D
        });

        this.promptText = this.add.text(this.guitar.x - 100, this.guitar.y - 20 + this.guitar.displayHeight / 2 + 10, "[SPACE] jazzmaster", {
            fontSize: '16px',
            fill: "#ffffff"
        });
        this.bedPromptText = this.add.text(this.bed.x, this.bed.y - 100, "[SPACE] take a nap", {
            fontSize: '16px',
            fill: "#ffffff"
        });
        this.cuddleText = this.add.text(260, 500, "[SPACE] cuddle", {
            fontSize: '16px',
            fill: "#ffffff"
        });
        this.EnvText = this.add.text(this.letter.x, this.letter.y, '[SPACE] read', {
            fontSize: '16px',
            fill: "#ffffff"
        });
        this.paintingText = this.add.text(200, 100, '[SPACE] examine', {
            fontSize: '16px',
            fill: "#ffffff"
        });
        this.gamingText = this.add.text(150, 450, '[SPACE] elder scrolls', {
            fontSize: '16px',
            fill: "#ffffff"
        });

        this.promptText.setVisible(false);
        this.bedPromptText.setVisible(false);
        this.cuddleText.setVisible(false);
        this.EnvText.setVisible(false);
        this.paintingText.setVisible(false);
        this.gamingText.setVisible(false);

        // In create()
        this.mishka = this.add.sprite(625, 250, 'raccoonidle').setScale(0.7);


        this.anims.create({
            key: 'mishka-idle',
            frames: this.anims.generateFrameNumbers('raccoonidle', { start: 0, end: 3 }),
            frameRate: 3,
            repeat: -1
        });

        this.anims.create({
            key: 'mishka-sleeping',
            frames: this.anims.generateFrameNumbers('mishsleeping', { start: 0, end: 2 }),
            frameRate: 3,
            repeat: -1
        });

        this.anims.create({
            key: 'mishka-gaming',
            frames: this.anims.generateFrameNumbers('raccoongaming', { start: 0, end: 3 }),
            frameRate: 3,
            repeat: -1
        });

        // Start with idle
        this.mishka.play('mishka-idle');

        // Randomly switch tasks every few seconds
        this.time.addEvent({
            delay: 4000,
            loop: true,
            callback: () => {
                const tasks = ['mishka-idle', 'mishka-sleeping', 'mishka-gaming'];
                const nextAnim = tasks[Phaser.Math.Between(0, tasks.length - 1)];

                // Only switch if it's different from current
                if (this.mishka.anims.currentAnim?.key !== nextAnim) {

                    if (nextAnim === 'mishka-gaming') {
                        this.mishka.x = 253; // bottom-left X
                        this.mishka.y = this.scale.height - 230; // bottom-left Y
                        this.mishka.setScale(1.27); // scale as needed
                    } else if (nextAnim === 'mishka-sleeping') {
                        this.mishka.x = 92; // bottom-left X
                        this.mishka.y = 195; // bottom-left Y
                        this.mishka.setScale(0.82); // scale as needed
                    }
                    else {
                        this.mishka.x = 625; // original position
                        this.mishka.y = 250;
                        this.mishka.setScale(0.7);
                    }
                    this.mishka.play(nextAnim);
                }
            }
        });

        this.letterPages = [
            this.add.image(this.scale.width / 2, this.scale.height / 2, 'page1').setVisible(false).setScale(0.18),
            this.add.image(this.scale.width / 2, this.scale.height / 2, 'page2').setVisible(false).setScale(0.18),
            this.add.image(this.scale.width / 2, this.scale.height / 2, 'page3').setVisible(false).setScale(0.18),
            this.add.image(this.scale.width / 2, this.scale.height / 2, 'page4').setVisible(false).setScale(0.18)
        ];


        this.currentPage = 0;

        //next button
        this.nextButton = this.add.text(
            this.scale.width / 2 + 240,
            this.scale.height / 2 + 260,
            'Next ->',
            { fontSize: '30px', color: '#0f7e27', backGroundColor: '#fff' }
        ).setInteractive().setVisible(false);

        //close button letter
        this.closeButton = this.add.text(
            this.scale.width / 2 + 260,
            this.scale.height / 2 - 100,
            'X',
            { fontSize: '35px', color: '#7e0f0f' }
        ).setInteractive().setVisible(false);

        //next button click  
        this.nextButton.on('pointerdown', () => {
            this.currentPage++;
            if (this.currentPage >= this.letterPages.length) {
                this.closeLetter();
                this.currentPage = 0;
            } else {
                this.showPage(this.currentPage);
            }
        });

        //close button click
        this.closeButton.on('pointerdown', () => {
            this.closeLetter();
            this.currentPage = 0;
        });

        this.closePaintingButton = this.add.text(
            this.scale.width / 2 + 300,
            this.scale.height / 2 - 270,
            'X',
            { fontSize: '35px', color: '#ffffff' }
        ).setInteractive().setVisible(false);

        this.closePaintingButton.on('pointerdown', () => {
            this.closePainting();

        });

        this.closeDisclaimerButton = this.add.text(
            this.scale.width / 2 + 200,
            this.scale.height / 2 - 250,
            'X',
            { fontSize: '35px', color: '#970e0e' }
        ).setInteractive().setVisible(true).setDepth(101);

        this.closeDisclaimerButton.on('pointerdown', () => {
            this.closeDisclaimer();

        });



        //this.buttonName = this.add.image(100, 100, 'imageName').setInteractive();

        //this.buttonName.on('pointerdown', () => {
        //this.scene.start('sceneName');
        //});
    }

    update() {
        const speed = 1.2;
        const cursors = this.cursors;
        const wasd = this.wasd;




        let distance = Phaser.Math.Distance.Between(
            this.player.x,
            this.player.y,
            this.guitar.x,
            this.guitar.y
        );

        let distBed = Phaser.Math.Distance.Between(
            this.player.x,
            this.player.y,
            this.bed.x,
            this.bed.y
        );

        let inCuddleZone =
            this.player.x > 300 && this.player.x < 400 &&
            this.player.y > 400 && this.player.y < 500;

        let gamingZone =
            this.player.x > 100 && this.player.x < 250 &&
            this.player.y > 400 && this.player.y < 550;


        if (gamingZone) {
            this.gamingText.setVisible(true);
        } else {
            this.gamingText.setVisible(false);
        }

        if (gamingZone && this.spaceKey.isDown) {
            this.player.anims.play('foxgaming', true);
            this.player.setScale(0.5);
            this.mishka.anims.play('mishka-gaming', true);
            this.player.x = 253;
            this.player.y = this.scale.height - 180;
            this.mishka.x = 253; // bottom-left X
            this.mishka.y = this.scale.height - 230; // bottom-left Y
            this.mishka.setScale(1.27);
            this.gamingText.setVisible(false);
            return;
        }



        if (distance < 100) {

            this.promptText.setVisible(true);
            this.player.setScale(0.7);
            this.guitar.setVisible(true);
        } else {
            this.promptText.setVisible(false);
        }


        if (distance < 100 && this.spaceKey.isDown) {
            this.player.anims.play('play-guitar', true);
            this.player.setScale(0.57);
            this.guitar.setVisible(false);
            this.promptText.setVisible(false);
            return;
        }

        if (distBed < 100) {
            this.bedPromptText.setPosition(this.bed.x - 90, this.bed.y + 130);
            this.bedPromptText.setVisible(true);
            this.player.setScale(0.7);
            this.mishka.setVisible(true);

        } else {
            this.bedPromptText.setVisible(false);
        }

        if (distBed < 100 && this.spaceKey.isDown) {
            this.player.anims.play('sleeping', true);
            this.bedPromptText.setVisible(false);
            this.player.x = 110;
            this.player.y = 173;
            this.player.setScale(0.290);
            this.mishka.setVisible(false);
            return;
        }
        if (inCuddleZone) {
            this.cuddleText.setVisible(true);
        } else {
            this.cuddleText.setVisible(false);
        }

        if (inCuddleZone && this.spaceKey.isDown) {
            this.player.anims.play('cuddling', true);
            this.player.x = 350;
            this.player.y = 420;
            this.player.setScale(0.4);
            this.mishka.setVisible(false);
            return;
        } else if (inCuddleZone) {
            this.cuddleText.setVisible(true);
            this.player.setScale(0.7);
        } else {
            this.cuddleText.setVisible(false);
        }


        if (cursors.left.isDown || wasd.left.isDown) {
            this.player.setScale(0.7);
            this.guitar.setVisible(true);
            this.player.x -= speed;
            this.player.anims.play('walk-left', true);
        } else if (cursors.right.isDown || wasd.right.isDown) {
            this.player.setScale(0.7);
            this.guitar.setVisible(true);
            this.player.x += speed;
            this.player.anims.play('walk-right', true);
        } else if (cursors.up.isDown || wasd.up.isDown) {
            this.player.setScale(0.7);
            this.guitar.setVisible(true);
            this.player.y -= speed;
            this.player.anims.play('walk-up', true);
        } else if (cursors.down.isDown || wasd.down.isDown) {
            this.player.setScale(0.7);
            this.guitar.setVisible(true);
            this.player.y += speed;
            this.player.anims.play('walk-down', true);
        }
        else {
            this.player.anims.play('fab-idle', true);
        }

        let paintingZone =
            this.player.x > 200 && this.player.x < 300 &&
            this.player.y > 100 && this.player.y < 200;

        if (paintingZone) {




            if (Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
                this.playerCanMove = false;
                this.steps.setVisible(true);
                this.closePaintingButton.setVisible(true);
                this.player.setVisible(false);
                this.mishka.setVisible(false);
                this.paintingText.setVisible(false);
            }
            this.paintingText.setVisible(true);

        } else {
            this.paintingText.setVisible(false);
        }




        let distEnv = Phaser.Math.Distance.Between(
            this.player.x,
            this.player.y,
            this.letter.x,
            this.letter.y
        );

        if (distEnv < 100 && Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
            this.openLetter();
            this.EnvText.setVisible(false);
        } else if (distEnv < 100) {
            this.EnvText.setVisible(true);
        } else {
            this.EnvText.setVisible(false);
        }
        if (!this.player.canMove) return;


    }

    resizeBackground() {
        this.bg.displayWidth = this.scale.width;
        this.bg.displayHeight = this.scale.height;
    }
    openLetter() {
        this.playerCanMove = false;

        this.letterPages[this.currentPage].setVisible(true);
        this.nextButton.setVisible(true);
        this.closeButton.setVisible(true);
    }
    showPage(index) {
        this.letterPages.forEach((page, i) => page.setVisible(i === index));

    }
    closeLetter() {
        this.letterPages.forEach(page => page.setVisible(false));
        this.nextButton.setVisible(false);
        this.closeButton.setVisible(false);
        this.playerCanMove = true;
    }

    closePainting() {
        this.steps.setVisible(false);
        this.closePaintingButton.setVisible(false);
        this.playerCanMove = true;
        this.player.setVisible(true);
        this.mishka.setVisible(true);
    }

    closeDisclaimer() {
        this.closeDisclaimerButton.setVisible(false);
        this.player.setVisible(true);
        this.mishka.setVisible(true);
        this.disclaimer.setVisible(false);
    }


}

const config = {
    type: Phaser.AUTO,

    backgroundColor: 0x222222,
    parent: 'game',
    scene: [DesktopScene],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600
    }
};

const game = new Phaser.Game(config);