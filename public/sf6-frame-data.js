const SF6_FRAME_DATA = {
  "ryu": [
    {
      "name": "Standing Light Punch",
      "input": "5lp",
      "startup": 4,
      "active": "4-6",
      "recovery": 7,
      "onBlock": -1,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Standing Medium Punch",
      "input": "5mp",
      "startup": 6,
      "active": "6-9",
      "recovery": 11,
      "onBlock": -1,
      "onHit": 7,
      "notes": ""
    },
    {
      "name": "Standing Heavy Punch",
      "input": "5hp",
      "startup": 10,
      "active": "10-14",
      "recovery": 18,
      "onBlock": -2,
      "onHit": 4,
      "notes": "Forces the opponent into a standing position"
    },
    {
      "name": "Standing Light Kick",
      "input": "5lk",
      "startup": 5,
      "active": "5-7",
      "recovery": 11,
      "onBlock": -4,
      "onHit": 2,
      "notes": ""
    },
    {
      "name": "Standing Medium Kick",
      "input": "5mk",
      "startup": 9,
      "active": "9-11",
      "recovery": 18,
      "onBlock": -4,
      "onHit": 4,
      "notes": ""
    },
    {
      "name": "Standing Heavy Kick",
      "input": "5hk",
      "startup": 12,
      "active": "12-15",
      "recovery": 20,
      "onBlock": 1,
      "onHit": 9,
      "notes": "Forces a juggle state when hitting a mid-air opponent; Produces a crumple stun for 36 frames when the attack lands as a Punish Counter; Juggle state time is extended when attack hits a mid-air opponent as a Punish Counter"
    },
    {
      "name": "Crouching Light Punch",
      "input": "2lp",
      "startup": 4,
      "active": "4-5",
      "recovery": 9,
      "onBlock": -1,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Punch",
      "input": "2mp",
      "startup": 6,
      "active": "6-9",
      "recovery": 13,
      "onBlock": 0,
      "onHit": 5,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Punch",
      "input": "2hp",
      "startup": 9,
      "active": "9-14",
      "recovery": 22,
      "onBlock": -7,
      "onHit": 1,
      "notes": "Can only be canceled on the 1st active frame if the attack hits; Forces the opponent into a standing position"
    },
    {
      "name": "Crouching Light Kick",
      "input": "2lk",
      "startup": 5,
      "active": "5-6",
      "recovery": 10,
      "onBlock": -3,
      "onHit": 3,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Kick",
      "input": "2mk",
      "startup": 8,
      "active": "8-10",
      "recovery": 19,
      "onBlock": -6,
      "onHit": 1,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Kick",
      "input": "2hk",
      "startup": 9,
      "active": "9-11",
      "recovery": 23,
      "onBlock": -12,
      "onHit": "",
      "notes": "Knockdown time extended when attack lands as a counter or Punish Counter"
    },
    {
      "name": "Jumping Light Punch",
      "input": "j>lp",
      "startup": 4,
      "active": "4-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Punch",
      "input": "j>mp",
      "startup": 8,
      "active": "8-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Heavy Punch",
      "input": "j>hp",
      "startup": 9,
      "active": "9-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a slam knockdown on counter or Punish Counter when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Light Kick",
      "input": "j>lk",
      "startup": 6,
      "active": "6-15",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Medium Kick",
      "input": "j>mk",
      "startup": 7,
      "active": "7-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Heavy Kick",
      "input": "j>hk",
      "startup": 12,
      "active": "12-19",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Collarbone Breaker",
      "input": "6mp",
      "startup": 20,
      "active": "2-23",
      "recovery": 19,
      "onBlock": -1,
      "onHit": 3,
      "notes": "An overhead attack that cannot be blocked while crouching; Second attack becomes an overhead only if the first attack whiffs"
    },
    {
      "name": "Solar Plexus Strike",
      "input": "6hp",
      "startup": 20,
      "active": "20-24",
      "recovery": 16,
      "onBlock": 3,
      "onHit": 6,
      "notes": "A forward-moving attack that allows you to act before an opponent even if blocked"
    },
    {
      "name": "Short Uppercut",
      "input": "4hp",
      "startup": 7,
      "active": "7-10",
      "recovery": 26,
      "onBlock": -13,
      "onHit": 1,
      "notes": "A quick strike that can be canceled into special moves; Can only be canceled on the 1st active frame if the attack hits; Forces the opponent into a standing position"
    },
    {
      "name": "Whirlwind Kick",
      "input": "6hk",
      "startup": 16,
      "active": "16-19",
      "recovery": 20,
      "onBlock": -4,
      "onHit": 2,
      "notes": "A kick with long reach. Useful as a counter to an opponent's sweeps; Can only be canceled with an Overdrive Aerial Tatsumaki Senpu-kyaku"
    },
    {
      "name": "Axe Kick",
      "input": "4hk",
      "startup": 10,
      "active": "10-14-20-23",
      "recovery": 21,
      "onBlock": -4,
      "onHit": 0,
      "notes": "A multi-hit kick that can be canceled into special moves; First attack Forces the opponent into a standing position; Second attack produces a ground bound on a mid-air hit"
    },
    {
      "name": "High Double Strike",
      "input": "5hp>5hk",
      "startup": 9,
      "active": "9-12",
      "recovery": 20,
      "onBlock": -8,
      "onHit": "",
      "notes": "A multi-hit attack with a lenient input window for follow-ups; Can only be canceled into Denjin Charge on hit."
    },
    {
      "name": "Fuwa Triple Strike (2)",
      "input": "5mp>5lk",
      "startup": 5,
      "active": "5-7",
      "recovery": 16,
      "onBlock": -4,
      "onHit": 1,
      "notes": "A multi-hit attack that doesn't leave you wide open even if stopped partway through"
    },
    {
      "name": "Fuwa Triple Strike (3)",
      "input": "5mp>5lk>5hk",
      "startup": 17,
      "active": "17-20",
      "recovery": 20,
      "onBlock": -8,
      "onHit": "",
      "notes": "A multi-hit attack that doesn't leave you wide open even if stopped partway through; Can only be canceled into Denjin Charge on hit."
    },
    {
      "name": "Hadoken (Light)",
      "input": "236lp",
      "startup": 16,
      "active": "",
      "recovery": "",
      "onBlock": -5,
      "onHit": 1,
      "notes": "Fire a ki blast directly forward. Useful for attacking opponents at range"
    },
    {
      "name": "Hadoken (Medium)",
      "input": "236mp",
      "startup": 14,
      "active": "",
      "recovery": "",
      "onBlock": -7,
      "onHit": -1,
      "notes": "Fire a ki blast directly forward. Useful for attacking opponents at range"
    },
    {
      "name": "Hadoken (Heavy)",
      "input": "236hp",
      "startup": 12,
      "active": "",
      "recovery": "",
      "onBlock": -9,
      "onHit": -3,
      "notes": "Fire a ki blast directly forward. Useful for attacking opponents at range"
    },
    {
      "name": "Hadoken (OD)",
      "input": "236(pp)",
      "startup": 12,
      "active": "",
      "recovery": "",
      "onBlock": -1,
      "onHit": "",
      "notes": "Fire a ki blast directly forward. Useful for attacking opponents at range"
    },
    {
      "name": "[Denjin Charge] Hadoken",
      "input": "236*p",
      "startup": 12,
      "active": "",
      "recovery": "",
      "onBlock": -3,
      "onHit": "",
      "notes": "Envelop your fists with the Power of Nothingness, enhancing moves such as the Hadoken and Hashogeki. Leaves you wide open, making the timing of its usage critical"
    },
    {
      "name": "[Denjin Charge] Hadoken (OD)",
      "input": "236(pp)",
      "startup": 12,
      "active": "",
      "recovery": "",
      "onBlock": 2,
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Shoryuken (Light)",
      "input": "623lp",
      "startup": 5,
      "active": "5-14",
      "recovery": 21,
      "onBlock": -23,
      "onHit": "",
      "notes": "Leap into the air and perform a powerful uppercut. A Shoryuken is invincible to an opponent's jumping attacks, making it a great anti-air tool; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 14; Considered airborne from frames 7 - 34; Note: After the 3rd active frame this move deals only 800 damage"
    },
    {
      "name": "Shoryuken (Medium)",
      "input": "623mp",
      "startup": 6,
      "active": "6-15",
      "recovery": 30,
      "onBlock": -32,
      "onHit": "",
      "notes": "Leap into the air and perform a powerful uppercut. A Shoryuken is invincible to an opponent's jumping attacks, making it a great anti-air tool; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 9; Considered airborne from frames 8 - 44; Note: After the 3rd active frame this move deals only 800 damage"
    },
    {
      "name": "Shoryuken (Heavy)",
      "input": "623hp",
      "startup": 7,
      "active": "7-16",
      "recovery": 34,
      "onBlock": -39,
      "onHit": "",
      "notes": "Leap into the air and perform a powerful uppercut. A Shoryuken is invincible to an opponent's jumping attacks, making it a great anti-air tool; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 8; Considered airborne from frames 9 - 49; Note: After the 2nd active frame this move deals only 800 damage"
    },
    {
      "name": "Shoryuken (OD)",
      "input": "623(pp)",
      "startup": 6,
      "active": "6-7-8-15",
      "recovery": 37,
      "onBlock": -40,
      "onHit": "",
      "notes": "Leap into the air and perform a powerful uppercut. A Shoryuken is invincible to an opponent's jumping attacks, making it a great anti-air tool; Completely invincible from frames 1 - 10; Considered airborne from frames 8 - 51"
    },
    {
      "name": "Tatsumaki Senpu-kyaku (Light)",
      "input": "214lk",
      "startup": 12,
      "active": "12-14",
      "recovery": 14,
      "onBlock": -15,
      "onHit": "",
      "notes": "Unleash a series of roundhouse kicks while moving forward. A useful attack for knocking opponents away; Considered airborne from frames 5 - 28"
    },
    {
      "name": "Tatsumaki Senpu-kyaku (Medium)",
      "input": "214mk",
      "startup": 14,
      "active": "14-15-29-30",
      "recovery": 11,
      "onBlock": -13,
      "onHit": "",
      "notes": "Unleash a series of roundhouse kicks while moving forward. A useful attack for knocking opponents away; Considered airborne from frames 8 - 41; Values listed for Super Art gauge increases and Parry or Drive Block induced Drive Gauge increases are per hit"
    },
    {
      "name": "Tatsumaki Senpu-kyaku (Heavy)",
      "input": "214hk",
      "startup": 16,
      "active": "16-17-31-32-46-47",
      "recovery": 14,
      "onBlock": -13,
      "onHit": "",
      "notes": "Unleash a series of roundhouse kicks while moving forward. A useful attack for knocking opponents away; Considered airborne from frames 10 - 61; Values listed for Super Art gauge increases and Parry or Drive Block induced Drive Gauge increases are per hit"
    },
    {
      "name": "Tatsumaki Senpu-kyaku (OD)",
      "input": "214(kk)",
      "startup": 13,
      "active": "13-14-19-20-25-26-30-31-36-37",
      "recovery": 10,
      "onBlock": -14,
      "onHit": "",
      "notes": "Unleash a series of roundhouse kicks while moving forward. A useful attack for knocking opponents away"
    },
    {
      "name": "Aerial Tatsumaki Senpu-kyaku",
      "input": "9>214*k",
      "startup": 11,
      "active": "11-12-18-19-26-27",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A Tatsumaki Senpu-kyaku performed while airborne. Useful for altering the trajectory of your jump, or for staging a surprise attack from above"
    },
    {
      "name": "Aerial Tatsumaki Senpu-kyaku (OD)",
      "input": "9>214(kk)",
      "startup": 11,
      "active": "11-12-14-16-18-20-22-24-27-28",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A Tatsumaki Senpu-kyaku performed while airborne. Useful for altering the trajectory of your jump, or for staging a surprise attack from above"
    },
    {
      "name": "High Blade Kick (Light)",
      "input": "236lk",
      "startup": 14,
      "active": "14-19",
      "recovery": 22,
      "onBlock": -11,
      "onHit": "",
      "notes": "A thrust kick that quickly closes distance, and can be used to surprise an opponent between their attacks. Strike with the tip of the foot for maximum effectiveness"
    },
    {
      "name": "High Blade Kick (Medium)",
      "input": "236mk",
      "startup": 18,
      "active": "18-26",
      "recovery": 19,
      "onBlock": -8,
      "onHit": "",
      "notes": "A thrust kick that quickly closes distance, and can be used to surprise an opponent between their attacks. Strike with the tip of the foot for maximum effectiveness"
    },
    {
      "name": "High Blade Kick (Heavy)",
      "input": "236hk",
      "startup": 29,
      "active": "29-37",
      "recovery": 16,
      "onBlock": -5,
      "onHit": "",
      "notes": "A thrust kick that quickly closes distance, and can be used to surprise an opponent between their attacks. Strike with the tip of the foot for maximum effectiveness; Juggle state time is extended when attack lands as a Punish Counter"
    },
    {
      "name": "High Blade Kick (OD)",
      "input": "236(kk)",
      "startup": 17,
      "active": "17-21",
      "recovery": 33,
      "onBlock": -18,
      "onHit": "",
      "notes": "A thrust kick that quickly closes distance, and can be used to surprise an opponent between their attacks. Strike with the tip of the foot for maximum effectiveness"
    },
    {
      "name": "Hashogeki (Light)",
      "input": "214lp",
      "startup": 12,
      "active": "12-17",
      "recovery": 18,
      "onBlock": -3,
      "onHit": 2,
      "notes": "Concentrate ki in the palm and unleash it directly forward. Useful as a follow-up after blocks and combos; Forces a juggle state when the attack lands as a counter or Punish Counter"
    },
    {
      "name": "Hashogeki (Medium)",
      "input": "214mp",
      "startup": 19,
      "active": "19-24",
      "recovery": 17,
      "onBlock": -6,
      "onHit": 2,
      "notes": "Concentrate ki in the palm and unleash it directly forward. Useful as a follow-up after blocks and combos; Forces a juggle state when the attack lands as a counter or Punish Counter"
    },
    {
      "name": "Hashogeki (Heavy)",
      "input": "214hp",
      "startup": 18,
      "active": "18-23",
      "recovery": 19,
      "onBlock": 4,
      "onHit": "",
      "notes": "Concentrate ki in the palm and unleash it directly forward. Useful as a follow-up after blocks and combos; Produces a crumple stun for 39 frames when the attack lands"
    },
    {
      "name": "Hashogeki (OD)",
      "input": "214(pp)",
      "startup": 18,
      "active": "18-22",
      "recovery": 20,
      "onBlock": 3,
      "onHit": 3,
      "notes": "Concentrate ki in the palm and unleash it directly forward. Useful as a follow-up after blocks and combos"
    },
    {
      "name": "[Denjin Charge] Hashogeki",
      "input": "214*p",
      "startup": 20,
      "active": "20-24",
      "recovery": 19,
      "onBlock": 3,
      "onHit": "",
      "notes": ""
    },
    {
      "name": "[Denjin Charge] Hashogeki (OD)",
      "input": "214(pp)",
      "startup": 18,
      "active": "18-23",
      "recovery": 19,
      "onBlock": 4,
      "onHit": "",
      "notes": "Produces a crumple stun for 39 frames when the attack lands"
    },
    {
      "name": "Shinku Hadoken",
      "input": "236236*p",
      "startup": 7,
      "active": "",
      "recovery": "",
      "onBlock": -24,
      "onHit": "",
      "notes": "A Hadoken in which the body's ki is concentrated and condensed into your palms before firing. Its swift speed and invulnerability can quickly turn the tables on an opponent; Invincible to strikes and throws from frame 1 to frame 8.; Values do not change when the attack lands as a counter or Punish Counter; The minimum guaranteed damage is 30%"
    },
    {
      "name": "[Denjin Charge] Shinku Hadoken",
      "input": "236236*p",
      "startup": 7,
      "active": "",
      "recovery": "",
      "onBlock": -24,
      "onHit": "",
      "notes": "A Hadoken in which the body's ki is concentrated and condensed into your palms before firing. Its swift speed and invulnerability can quickly turn the tables on an opponent; Invincible to strikes and throws from frame 1 to frame 8.; Values do not change when the attack lands as a counter or Punish Counter; The minimum guaranteed damage is 30%"
    },
    {
      "name": "Shin Hashogeki (Level 1)",
      "input": "214214*p",
      "startup": 12,
      "active": "12-17",
      "recovery": 39,
      "onBlock": -20,
      "onHit": "",
      "notes": "A Hashogeki enhanced through spiritual focus. Hold the button to charge the attack and increase its power; Completely invincible from frame 1 to frame 13; Hold down the button to change the properties of this move; Changes to Level 2 version if the button is held for more than 8 frames and then released; Changes to Level 3 version if the button is held for more than 38 frames and then released; Invincible to strikes and throws from frame 2 to frame 8; Values do not change when the attack lands as a counter or Punish Counter; The minimum guaranteed damage is 40%"
    },
    {
      "name": "Shin Hashogeki (Level 2)",
      "input": "214214*p",
      "startup": 20,
      "active": "20-25",
      "recovery": 39,
      "onBlock": -20,
      "onHit": "",
      "notes": "A Hashogeki enhanced through spiritual focus. Hold the button to charge the attack and increase its power; Completely invincible from frame 1 to frame 9; Hold down the button to change the properties of this move; Changes to Level 2 version if the button is held for more than 8 frames and then released; Changes to Level 3 version if the button is held for more than 38 frames and then released; Invincible to strikes and throws from frame 2 to frame 8; Values do not change when the attack lands as a counter or Punish Counter; The minimum guaranteed damage is 40%"
    },
    {
      "name": "Shin Hashogeki (Level 3)",
      "input": "214214*p",
      "startup": 70,
      "active": "70-75",
      "recovery": 39,
      "onBlock": -20,
      "onHit": "",
      "notes": "A Hashogeki enhanced through spiritual focus. Hold the button to charge the attack and increase its power; Completely invincible from frame 1 to frame 13; Hold down the button to change the properties of this move; Changes to Level 2 version if the button is held for more than 8 frames and then released; Changes to Level 3 version if the button is held for more than 38 frames and then released; Invincible to strikes and throws from frame 2 to frame 8; Values do not change when the attack lands as a counter or Punish Counter; The minimum guaranteed damage is 40%"
    },
    {
      "name": "[Denjin Charge] Shin Hashogeki (Level 1)",
      "input": "214214*p",
      "startup": 12,
      "active": "12-17",
      "recovery": 39,
      "onBlock": -20,
      "onHit": "",
      "notes": "A Hashogeki enhanced through spiritual focus. Hold the button to charge the attack and increase its power; Completely invincible from frame 1 to frame 9; Hold down the button to change the properties of this move; Changes to Level 2 version if the button is held for more than 8 frames and then released; Changes to Level 3 version if the button is held for more than 38 frames and then released; Invincible to strikes and throws from frame 2 to frame 8; Values do not change when the attack lands as a counter or Punish Counter; The minimum guaranteed damage is 40%"
    },
    {
      "name": "[Denjin Charge] Shin Hashogeki (Level 2)",
      "input": "214214*p",
      "startup": 20,
      "active": "20-25",
      "recovery": 39,
      "onBlock": -20,
      "onHit": "",
      "notes": "Completely invincible from frame 1 to frame 9; Hold down the button to change the properties of this move; Changes to Level 2 version if the button is held for more than 8 frames and then released; Changes to Level 3 version if the button is held for more than 38 frames and then released; Invincible to strikes and throws from frame 2 to frame 8; Values do not change when the attack lands as a counter or Punish Counter; The minimum guaranteed damage is 40%"
    },
    {
      "name": "[Denjin Charge] Hashogeki (Level 3)",
      "input": "214214*p",
      "startup": 70,
      "active": "70-75",
      "recovery": 39,
      "onBlock": -20,
      "onHit": "",
      "notes": "Completely invincible from frame 1 to frame 9; Hold down the button to change the properties of this move; Changes to Level 2 version if the button is held for more than 8 frames and then released; Changes to Level 3 version if the button is held for more than 38 frames and then released; Invincible to strikes and throws from frame 2 to frame 8; Values do not change when the attack lands as a counter or Punish Counter; The minimum guaranteed damage is 40%"
    },
    {
      "name": "Shin Shoryuken",
      "input": "236236*k",
      "startup": 5,
      "active": "5-6-7-8-9-10-11-12-13-14-15-16",
      "recovery": 71,
      "onBlock": -52,
      "onHit": "",
      "notes": "A powerful Shoryuken unleashed at short range. An overwhelming technique that aims for an opponent's vitals; Completely invincible from frame 1 to frame 16; Values do not change when the attack lands as a counter or Punish Counter; The minimum guaranteed damage is 50%; Note: Can only be canceled into from special moves"
    },
    {
      "name": "Shin Shoryuken (Critical Art)",
      "input": "236236*k",
      "startup": 5,
      "active": "5-6-7-8-9-10-11-12-13-14-15-16",
      "recovery": 71,
      "onBlock": -52,
      "onHit": "",
      "notes": "When under 25% vitality; A powerful Shoryuken unleashed at short range. An overwhelming technique that aims for an opponent's vitals; Completely invincible from frame 1 to frame 16; Values do not change when the attack lands as a counter or Punish Counter; The minimum guaranteed damage is 50%; Note: Can only be canceled into from special moves"
    },
    {
      "name": "Shoulder Throw",
      "input": "(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab your opponent and\u2014bearing the brunt of their weight with your arm and back\u2014toss them forward. Throws your opponent without switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Somersault Throw",
      "input": "(4lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab your opponent, place your foot on their torso, and throw them behind you as you fall backwards. Throws your opponent while switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Denjin Charge",
      "input": "22*p",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Envelop your fists with the Power of Nothingness, enhancing moves such as the Hadoken and Hashogeki. Leaves you wide open, making the timing of its usage critical; Denjin Charge stock added on the 51st frame. Only 1 Denjin Charge stock can be held at a time; Hadoken, Hashogeki, Shinku Hadoken, and Shin Hashogeki\u2019s properties are enhanced when a Denjin Charge is held"
    }
  ],
  "ken": [
    {
      "name": "Standing Light Punch",
      "input": "5lp",
      "startup": 4,
      "active": "4-6",
      "recovery": 7,
      "onBlock": -1,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Standing Medium Punch",
      "input": "5mp",
      "startup": 5,
      "active": "5-8",
      "recovery": 14,
      "onBlock": -2,
      "onHit": 4,
      "notes": ""
    },
    {
      "name": "Standing Heavy Punch",
      "input": "5hp",
      "startup": 10,
      "active": "10-14",
      "recovery": 17,
      "onBlock": -2,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Standing Light Kick",
      "input": "5lk",
      "startup": 5,
      "active": "5-6",
      "recovery": 12,
      "onBlock": -2,
      "onHit": 0,
      "notes": ""
    },
    {
      "name": "Standing Medium Kick",
      "input": "5mk",
      "startup": 8,
      "active": "8-10",
      "recovery": 20,
      "onBlock": -5,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Standing Heavy Kick",
      "input": "5hk",
      "startup": 12,
      "active": "12-13",
      "recovery": 23,
      "onBlock": -5,
      "onHit": 1,
      "notes": "2 frames of recovery added when the attack misses; Forces a spinning knockdown on Punish Counter"
    },
    {
      "name": "Crouching Light Punch",
      "input": "2lp",
      "startup": 4,
      "active": "4-5",
      "recovery": 9,
      "onBlock": -1,
      "onHit": 5,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Punch",
      "input": "2mp",
      "startup": 6,
      "active": "6-8",
      "recovery": 14,
      "onBlock": 0,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Punch",
      "input": "2hp",
      "startup": 8,
      "active": "8-11",
      "recovery": 24,
      "onBlock": -10,
      "onHit": 3,
      "notes": "Can be canceled until the 2nd active frame"
    },
    {
      "name": "Crouching Light Kick",
      "input": "2lk",
      "startup": 5,
      "active": "5-7",
      "recovery": 10,
      "onBlock": -3,
      "onHit": 1,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Kick",
      "input": "2mk",
      "startup": 7,
      "active": "7-9",
      "recovery": 19,
      "onBlock": -6,
      "onHit": -2,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Kick",
      "input": "2hk",
      "startup": 8,
      "active": "8-10",
      "recovery": 24,
      "onBlock": -10,
      "onHit": "",
      "notes": "Forces a Hard Knock Down when hitting an opponent on the ground; Knockdown time extended when attack lands as a counter or Punish Counter; 1 frame of recovery added when blocked"
    },
    {
      "name": "Jumping Light Punch",
      "input": "j>lp",
      "startup": 5,
      "active": "5-11",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Punch",
      "input": "j>mp",
      "startup": 6,
      "active": "6-9",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Heavy Punch",
      "input": "j>hp",
      "startup": 9,
      "active": "9-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a slam knockdown on counter or Punish Counter"
    },
    {
      "name": "Jumping Light Kick",
      "input": "j>lk",
      "startup": 6,
      "active": "6-11",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Medium Kick",
      "input": "j>mk",
      "startup": 7,
      "active": "7-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Neutral Heavy Kick",
      "input": "8hk",
      "startup": 6,
      "active": "6-11",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Heavy Kick",
      "input": "{7|9}+hk",
      "startup": 10,
      "active": "10-16",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Quick Dash",
      "input": "(kk)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Swiftly sprint a set distance forward; Can transition to branching attacks from frame 12"
    },
    {
      "name": "Emergency Stop",
      "input": "lk",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During Quick Dash; Performed from Quick Dash, this maneuver will make you stop dead in your tracks"
    },
    {
      "name": "Thunder Kick",
      "input": "mk",
      "startup": 18,
      "active": "18-20",
      "recovery": 20,
      "onBlock": -3,
      "onHit": 3,
      "notes": "During Quick Dash; An overhead attack performed from Quick Dash that cannot be blocked crouching; Can be canceled into Level 3 Super Art or Critical Art"
    },
    {
      "name": "Forward Step Kick",
      "input": "hk",
      "startup": 10,
      "active": "10-13",
      "recovery": 20,
      "onBlock": -4,
      "onHit": 3,
      "notes": "During Quick Dash; A forward kick with long reach that is performed from Quick Dash; Can be canceled into any Super Art"
    },
    {
      "name": "Chin Buster",
      "input": "mp>hp",
      "startup": 11,
      "active": "11-13",
      "recovery": 27,
      "onBlock": -14,
      "onHit": "",
      "notes": "A quick series of attacks that can be canceled into special moves"
    },
    {
      "name": "Triple Flash Kicks (2)",
      "input": "mk>mk",
      "startup": 11,
      "active": "11-12",
      "recovery": 27,
      "onBlock": -12,
      "onHit": "",
      "notes": "A sequence of three kicks with long reach"
    },
    {
      "name": "Triple Flash Kicks (3)",
      "input": "mk>mk>hk",
      "startup": 13,
      "active": "13-15",
      "recovery": 28,
      "onBlock": -11,
      "onHit": "",
      "notes": "A sequence of three kicks with long reach; Always in Punish Counter state during execution"
    },
    {
      "name": "Hadoken (Light)",
      "input": "236lp",
      "startup": 16,
      "active": "",
      "recovery": "",
      "onBlock": -7,
      "onHit": -1,
      "notes": "Fire a ki blast directly forward. Useful for attacking opponents at range"
    },
    {
      "name": "Hadoken (Medium)",
      "input": "236mp",
      "startup": 14,
      "active": "",
      "recovery": "",
      "onBlock": -9,
      "onHit": -3,
      "notes": "Fire a ki blast directly forward. Useful for attacking opponents at range"
    },
    {
      "name": "Hadoken (Heavy)",
      "input": "236hp",
      "startup": 12,
      "active": "",
      "recovery": "",
      "onBlock": -11,
      "onHit": -5,
      "notes": "Fire a ki blast directly forward. Useful for attacking opponents at range"
    },
    {
      "name": "Hadoken (OD)",
      "input": "236(pp)",
      "startup": 12,
      "active": "",
      "recovery": "",
      "onBlock": 2,
      "onHit": -2,
      "notes": "Fire a ki blast directly forward. Useful for attacking opponents at range"
    },
    {
      "name": "Shoryuken (Light)",
      "input": "623lp",
      "startup": 5,
      "active": "5-14",
      "recovery": 21,
      "onBlock": -23,
      "onHit": "",
      "notes": "Leap into the sky with a devastating uppercut. Useful as an anti-air attack or as a way to end combos; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 14; Considered airborne from frames 8 - 35; Does 800 individual damage from the 3rd active frame and on"
    },
    {
      "name": "Shoryuken (Medium)",
      "input": "623mp",
      "startup": 6,
      "active": "6-8-9-15",
      "recovery": 28,
      "onBlock": -28,
      "onHit": "",
      "notes": "Leap into the sky with a devastating uppercut. Useful as an anti-air attack or as a way to end combos; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 8; Considered airborne from frames 8 - 43"
    },
    {
      "name": "Shoryuken (Heavy)",
      "input": "623hp",
      "startup": 7,
      "active": "7-8-9-10-11-16",
      "recovery": 35,
      "onBlock": -36,
      "onHit": "",
      "notes": "Leap into the sky with a devastating uppercut. Useful as an anti-air attack or as a way to end combos; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 9; Invincible to projectiles from frames 5 - 11; Considered airborne from frames 9 - 51"
    },
    {
      "name": "Shoryuken (OD)",
      "input": "623(pp)",
      "startup": 6,
      "active": "6-7-8-15-30-31-32-32-33-34-35-39",
      "recovery": 35,
      "onBlock": -40,
      "onHit": "",
      "notes": "Leap into the sky with a devastating uppercut. Useful as an anti-air attack or as a way to end combos; Completely invincible from frames 1 - 10; Considered airborne from frames 9 - 24 and 33 - 74"
    },
    {
      "name": "[Quick Dash] Shoryuken",
      "input": "623*p",
      "startup": 8,
      "active": "8-8-9-9-10-10-11-11-12-17",
      "recovery": 33,
      "onBlock": -35,
      "onHit": "",
      "notes": "During Quick Dash; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 18; Invincible to projectiles from frames 3 - 11; Considered airborne from frames 11 - 51"
    },
    {
      "name": "Tatsumaki Senpu-kyaku (Light)",
      "input": "214lk",
      "startup": 4,
      "active": "4-5-12-14",
      "recovery": 32,
      "onBlock": -14,
      "onHit": "",
      "notes": "Unleash a series of roundhouse kicks while moving forward. Useful when canceled into from normal moves to create combos; Considered airborne from frames 5 - 28"
    },
    {
      "name": "Tatsumaki Senpu-kyaku (Medium)",
      "input": "214mk",
      "startup": 14,
      "active": "14-15-29-30",
      "recovery": 31,
      "onBlock": -12,
      "onHit": "",
      "notes": "Unleash a series of roundhouse kicks while moving forward. Useful when canceled into from normal moves to create combos; Considered airborne from frames 8 - 41"
    },
    {
      "name": "Tatsumaki Senpu-kyaku (Heavy)",
      "input": "214hk",
      "startup": 16,
      "active": "16-17-31-32-46-47",
      "recovery": 31,
      "onBlock": -12,
      "onHit": "",
      "notes": "Unleash a series of roundhouse kicks while moving forward. Useful when canceled into from normal moves to create combos; Considered airborne from frames 10 - 61"
    },
    {
      "name": "Tatsumaki Senpu-kyaku (OD)",
      "input": "214(kk)",
      "startup": 9,
      "active": "9-12-18-20-27-29-36-38-54-56",
      "recovery": 22,
      "onBlock": -61,
      "onHit": "",
      "notes": "Unleash a series of roundhouse kicks while moving forward. Useful when canceled into from normal moves to create combos; Considered airborne from frames 10 - 77"
    },
    {
      "name": "[Quick Dash] Tatsumaki Senpu-kyaku",
      "input": "214*k",
      "startup": 13,
      "active": "13-14-17-19-22-23-26-28-31-32-35-37-40-41-44-46-49-50-56-58",
      "recovery": 20,
      "onBlock": -9,
      "onHit": 3,
      "notes": "During Quick Dash; Does not hit the opponent in front of you on the 2nd, 4th, 6th, 8th, and 10th hits; Considered airborne from frames 10 - 61"
    },
    {
      "name": "Aerial Tatsumaki Senpu-kyaku",
      "input": "9>214*k",
      "startup": 11,
      "active": "11-12-18-19-26-27",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A Tatsumaki Senpu-kyaku performed while airborne. Useful for altering the trajectory of your jump, or for staging a surprise attack from above"
    },
    {
      "name": "Aerial Tatsumaki Senpu-kyaku (OD)",
      "input": "9>214(kk)",
      "startup": 11,
      "active": "11-12-14-15-18-19-22-23-27-28",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A Tatsumaki Senpu-kyaku performed while airborne. Useful for altering the trajectory of your jump, or for staging a surprise attack from above; Considered airborne from frames 10 - 77; Does not hit the opponent in front of you on the 2nd and 4th attacks; (The 2nd and 4th attacks do 700 damage and increases the Super Art gauge by 600); 7 frames of recovery added when the attack misses"
    },
    {
      "name": "Dragonlash Kick (Light)",
      "input": "623lk",
      "startup": 18,
      "active": "18-23",
      "recovery": 21,
      "onBlock": -4,
      "onHit": 2,
      "notes": "A leaping roundhouse kick that pulls your opponent toward you. An extremely versatile move that can be used to launch surprise attacks from mid-range, as a way to continue your offensive pressure, or in combos; Does not hit opponents on the ground from frames 18 - 20; Does 950 damage from frames 21 - 23; Considered airborne from frames 9 - 28"
    },
    {
      "name": "Dragonlash Kick (Medium)",
      "input": "623mk",
      "startup": 23,
      "active": "23-27",
      "recovery": 25,
      "onBlock": -8,
      "onHit": 3,
      "notes": "A leaping roundhouse kick that pulls your opponent toward you. An extremely versatile move that can be used to launch surprise attacks from mid-range, as a way to continue your offensive pressure, or in combos; Does not hit opponents on the ground from frames 23 - 24; Considered airborne from frames 14 - 32"
    },
    {
      "name": "Dragonlash Kick (Heavy)",
      "input": "623hk",
      "startup": 28,
      "active": "28-32",
      "recovery": 21,
      "onBlock": 1,
      "onHit": 3,
      "notes": "A leaping roundhouse kick that pulls your opponent toward you. An extremely versatile move that can be used to launch surprise attacks from mid-range, as a way to continue your offensive pressure, or in combos; Does not hit opponents on the ground from frames 28 - 29; Considered airborne from frames 19 - 37"
    },
    {
      "name": "Dragonlash Kick (OD)",
      "input": "623(kk)",
      "startup": 9,
      "active": "9-10-18-24",
      "recovery": 24,
      "onBlock": -9,
      "onHit": 1,
      "notes": "A leaping roundhouse kick that pulls your opponent toward you. An extremely versatile move that can be used to launch surprise attacks from mid-range, as a way to continue your offensive pressure, or in combos; Does not hit opponents on the ground from frames 9 - 12 and 18; Considered airborne from frames 10 - 27; Does not have additional combo scaling if the 2nd attack hits"
    },
    {
      "name": "[Quick Dash] Dragonlash Kick",
      "input": "623*k",
      "startup": 9,
      "active": "9-12-18-23",
      "recovery": 24,
      "onBlock": -8,
      "onHit": 2,
      "notes": "During Quick Dash; Does not hit opponents on the ground from frames 9 - 12 and 18 - 19; Considered airborne from frames 10 - 28; Does not have additional combo scaling if the 2nd attack hits"
    },
    {
      "name": "Jinrai Kick (Light)",
      "input": "236lk",
      "startup": 12,
      "active": "12-14",
      "recovery": 28,
      "onBlock": -11,
      "onHit": 1,
      "notes": "A forward-moving roundhouse kick that can be followed up by one of three different kicks; Can transition to Kazekama Shin Kick and Gorai Axe Kick from frames 32 - 35; Can transition to Senka Snap Kick from frames 30 - 35"
    },
    {
      "name": "Jinrai Kick (Medium)",
      "input": "236mk",
      "startup": 16,
      "active": "16-18",
      "recovery": 24,
      "onBlock": -7,
      "onHit": 2,
      "notes": "A forward-moving roundhouse kick that can be followed up by one of three different kicks; Can transition to Kazekama Shin Kick and Gorai Axe Kick from frames 32 - 35; Can transition to Senka Snap Kick from frames 30 - 35"
    },
    {
      "name": "Jinrai Kick (Heavy)",
      "input": "236hk",
      "startup": 25,
      "active": "25-27",
      "recovery": 19,
      "onBlock": -2,
      "onHit": "",
      "notes": "A forward-moving roundhouse kick that can be followed up by one of three different kicks; Can transition to Kazekama Shin Kick and Gorai Axe Kick from frames 36 - 41; Can transition to Senka Snap Kick from frames 34 - 41"
    },
    {
      "name": "Kazekama Shin Kick",
      "input": "6lk",
      "startup": 6,
      "active": "6-9",
      "recovery": 19,
      "onBlock": -5,
      "onHit": 3,
      "notes": "During Jinrai Kick; A low kick performed from Jinrai Kick that cannot be blocked standing. Useful against opponents who try to move after your Jinrai Kick; Always in Punish Counter state during execution"
    },
    {
      "name": "Gorai Axe Kick",
      "input": "6mk",
      "startup": 18,
      "active": "18-20",
      "recovery": 20,
      "onBlock": -3,
      "onHit": 3,
      "notes": "During Jinrai Kick; An axe kick performed from Jinrai Kick that cannot be blocked crouching. Useful against opponents who try to stiffen their guard against your Jinrai Kick; Always in Punish Counter state during execution; Adds a floor bounding effect during a mid-air hit"
    },
    {
      "name": "Senka Snap Kick",
      "input": "6hk",
      "startup": 10,
      "active": "10-12",
      "recovery": 25,
      "onBlock": -3,
      "onHit": "",
      "notes": "During Jinrai Kick; A roundhouse that can be used to combo from Jinrai Kick. Effective when used to make a combo after landing a Jinrai Kick; Always in Punish Counter state during execution; Does not hit on crouching opponents"
    },
    {
      "name": "Jinrai Kick (OD)",
      "input": "236(kk)",
      "startup": 13,
      "active": "13-15",
      "recovery": 25,
      "onBlock": -7,
      "onHit": -4,
      "notes": "During Jinrai Kick OD; A forward-moving roundhouse kick that can be followed up by one of three different kicks; Can transition to Overdrive Kazekama Shin Kick and Overdrive Gorai Axe Kick from frames 21 - 27; Can transition to Overdrive Senka Snap Kick from frames 19 - 27"
    },
    {
      "name": "Kazekama Shin Kick (OD)",
      "input": "6lk",
      "startup": 6,
      "active": "6-8",
      "recovery": 20,
      "onBlock": -5,
      "onHit": 3,
      "notes": "During Jinrai Kick OD; A low kick performed from Jinrai Kick that cannot be blocked standing. Useful against opponents who try to move after your Jinrai Kick; Can transition to Kasai Thrust Kick from frame 11; Always in Punish Counter state during execution"
    },
    {
      "name": "Kasai Thrust Kick (1)",
      "input": "6*k",
      "startup": 15,
      "active": "15-17",
      "recovery": 29,
      "onBlock": -12,
      "onHit": "",
      "notes": "During Jinrai Kick OD or Kazekam Shin Kick OD; A sequence of kicks performed following any type of OD Jinrai Kick. Useful for slipping through your opponent's guard to tack on additional damage; Always in Punish Counter state during execution"
    },
    {
      "name": "Gorai Axe Kick (OD)",
      "input": "6mk",
      "startup": 17,
      "active": "17-19",
      "recovery": 24,
      "onBlock": -7,
      "onHit": -3,
      "notes": "During Jinrai Kick OD; An axe kick performed from Jinrai Kick that cannot be blocked crouching. Useful against opponents who try to stiffen their guard against your Jinrai Kick; Can transition to Kasai Thrust Kick from frame 11; Always in Punish Counter state during execution"
    },
    {
      "name": "Kasai Thrust Kick (2)",
      "input": "6*k",
      "startup": 11,
      "active": "11-13",
      "recovery": 29,
      "onBlock": -12,
      "onHit": "",
      "notes": "During Jinrai Kick OD or Gorai Axe Kick OD; A sequence of kicks performed following any type of OD Jinrai Kick. Useful for slipping through your opponent's guard to tack on additional damage; Always in Punish Counter state during execution"
    },
    {
      "name": "Senka Snap Kick (OD)",
      "input": "6hk",
      "startup": 10,
      "active": "10-13",
      "recovery": 20,
      "onBlock": -4,
      "onHit": "",
      "notes": "During Jinrai Kick OD; A roundhouse that can be used to combo from Jinrai Kick. Effective when used to make a combo after landing a Jinrai Kick; Can transition to Kasai Thrust Kick from frame 11; Always in Punish Counter state during execution"
    },
    {
      "name": "Kasai Thrust Kick (3)",
      "input": "6*k",
      "startup": 15,
      "active": "15-17",
      "recovery": 37,
      "onBlock": -20,
      "onHit": "",
      "notes": "During Jinrai Kick OD or Senka Snap Kick OD; A sequence of kicks performed following any type of OD Jinrai Kick. Useful for slipping through your opponent's guard to tack on additional damage; Always in Punish Counter state during execution"
    },
    {
      "name": "Dragonlash Flame",
      "input": "214214*k",
      "startup": 7,
      "active": "7-9",
      "recovery": 41,
      "onBlock": -24,
      "onHit": "",
      "notes": "Launch your opponent into the sky and then perform a series of kicks on them while airborne. It is invincible at the beginning, and you switch positions with your opponent upon completion; Invincible to strikes and throws on frames 1 - 9; Values do not change on counter or Punish Counter; Minimum guaranteed damage is set to 30%"
    },
    {
      "name": "Shippu Jinrai-kyaku",
      "input": "236236*k",
      "startup": 6,
      "active": "6-7-18-20-31-33-45-47-59-60",
      "recovery": 32,
      "onBlock": -19,
      "onHit": "",
      "notes": "Unleash a flurry of kicks and then finish with a rising Tatsumaki Senpu-kyaku. This move is quick to execute, making it useful for counterattacks and in combos; Transitions to the full attack after the 6th attack; Values do not change on counter or Punish Counter; Minimum guaranteed damage is set to 40%"
    },
    {
      "name": "Shinryu Reppa",
      "input": "236236*p",
      "startup": 7,
      "active": "7-9-11-13-14-16-33-35-36-37-38-39-40-41-42-43-44-45",
      "recovery": 45,
      "onBlock": -30,
      "onHit": "",
      "notes": "A one-two Shoryuken combination followed by one final mighty Shoryuken with an added spin to it. If the first hit misses, a single additional Shoryuken will come out afterward; Completely invincible from frames 1 - 18; Values do not change on counter or Punish Counter; Minimum guaranteed damage is set to 50%; Following properties occur if the first attack is blocked or misses; - Damage is 2100; - Reduces Drive Gauge by 9000 on hit; - Does not go into full cinematic animation; Can only be canceled into from special moves"
    },
    {
      "name": "Shinryu Reppa (Critical Art)",
      "input": "236236*p",
      "startup": 7,
      "active": "7-9-11-13-14-16-33-35-36-37-38-39-40-41-42-43-44-45",
      "recovery": 45,
      "onBlock": -30,
      "onHit": "",
      "notes": "When under 25% vitality; A one-two Shoryuken combination followed by one final mighty Shoryuken with an added spin to it. If the first hit misses, a single additional Shoryuken will come out afterward; Completely invincible from frames 1 - 18; Values do not change on counter or Punish Counter; Minimum guaranteed damage is set to 50%; Following properties occur if the first attack is blocked or misses; - Damage is 2200; - Reduces Drive Gauge by 16000 on hit; - Does not go into full cinematic animation; Can only be canceled into from special moves"
    },
    {
      "name": "Knee Strikes",
      "input": "(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab your opponent, disrupt their balance with a knee strike, and toss them forward. Throws your opponent without switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Hell Wheel",
      "input": "(2lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab your opponent and roll backwards with your foot placed on their torso. Throws your opponent while switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    }
  ],
  "chunli": [
    {
      "name": "Standing Light Punch",
      "input": "5lp",
      "startup": 4,
      "active": "4-6",
      "recovery": 7,
      "onBlock": -3,
      "onHit": 5,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Standing Medium Punch",
      "input": "5mp",
      "startup": 5,
      "active": "5-8",
      "recovery": 10,
      "onBlock": 1,
      "onHit": 6,
      "notes": ""
    },
    {
      "name": "Standing Heavy Punch",
      "input": "5hp",
      "startup": 13,
      "active": "13-15",
      "recovery": 20,
      "onBlock": -3,
      "onHit": 2,
      "notes": "Can be canceled into Serenity Stream on hit or block"
    },
    {
      "name": "Standing Light Kick",
      "input": "5lk",
      "startup": 5,
      "active": "5-7",
      "recovery": 10,
      "onBlock": -2,
      "onHit": 2,
      "notes": ""
    },
    {
      "name": "Standing Medium Kick",
      "input": "5mk",
      "startup": 7,
      "active": "7-10",
      "recovery": 16,
      "onBlock": -2,
      "onHit": 4,
      "notes": ""
    },
    {
      "name": "Standing Heavy Kick",
      "input": "5hk",
      "startup": 14,
      "active": "14-16",
      "recovery": 18,
      "onBlock": 0,
      "onHit": 4,
      "notes": "Can be canceled into Serenity Stream on hit or block; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Crouching Light Punch",
      "input": "2lp",
      "startup": 4,
      "active": "4-6",
      "recovery": 7,
      "onBlock": -2,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Punch",
      "input": "2mp",
      "startup": 6,
      "active": "6-9",
      "recovery": 13,
      "onBlock": -2,
      "onHit": 4,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Punch",
      "input": "2hp",
      "startup": 11,
      "active": "11-13-19-23",
      "recovery": 18,
      "onBlock": -3,
      "onHit": 1,
      "notes": "Forces a juggle state when the first attack hits a mid-air opponent"
    },
    {
      "name": "Crouching Light Kick",
      "input": "2lk",
      "startup": 4,
      "active": "4-5",
      "recovery": 10,
      "onBlock": -2,
      "onHit": 0,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Kick",
      "input": "2mk",
      "startup": 7,
      "active": "7-9",
      "recovery": 19,
      "onBlock": -6,
      "onHit": -2,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Kick",
      "input": "2hk",
      "startup": 9,
      "active": "9-14",
      "recovery": 19,
      "onBlock": -7,
      "onHit": "",
      "notes": "Can be canceled into Serenity Stream on hit or block; Knockdown time extended when attack lands as a counter or Punish Counter; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Light Punch",
      "input": "j>lp",
      "startup": 4,
      "active": "4-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Punch",
      "input": "j>mp",
      "startup": 7,
      "active": "7-10-17-21",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Heavy Punch",
      "input": "j>hp",
      "startup": 9,
      "active": "9-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Light Kick",
      "input": "j>lk",
      "startup": 4,
      "active": "4-11",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Kick",
      "input": "j>mk",
      "startup": 6,
      "active": "6-10",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Heavy Kick",
      "input": "{7|9}>hk",
      "startup": 8,
      "active": "8-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Neutral Jumping Heavy Kick",
      "input": "8>hk",
      "startup": 8,
      "active": "8-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Swift Thrust",
      "input": "{6mp|4mp}",
      "startup": 7,
      "active": "7-9",
      "recovery": 15,
      "onBlock": -3,
      "onHit": 2,
      "notes": "A strike with long reach that can be canceled into special moves"
    },
    {
      "name": "Hakkei",
      "input": "4hp",
      "startup": 8,
      "active": "8-13",
      "recovery": 14,
      "onBlock": -1,
      "onHit": 5,
      "notes": "A strong attack with quick recovery time"
    },
    {
      "name": "Water Lotus Fist",
      "input": "3hp",
      "startup": 21,
      "active": "21-24",
      "recovery": 14,
      "onBlock": -2,
      "onHit": 1,
      "notes": "An overhead attack that cannot be blocked while crouching; Can be canceled into Serenity Stream on hit or block"
    },
    {
      "name": "Yokusen Kick",
      "input": "6hk",
      "startup": 16,
      "active": "16-17",
      "recovery": 23,
      "onBlock": -4,
      "onHit": -1,
      "notes": "A jumping kick with long reach that is effective against an opponent's sweeps; Can be canceled into Serenity Stream on hit or block; Causes a crumple stun when the attack lands as a Punish Counter; Forces a juggle state when the attack lands as a Punish Counter on a mid-air opponent; Considered airborne from frames 6 - 28"
    },
    {
      "name": "Falling Crane",
      "input": "3hk",
      "startup": 37,
      "active": "37-38",
      "recovery": 1,
      "onBlock": 3,
      "onHit": 7,
      "notes": "A knee strike performed after placing yourself behind your opponent while leaping into the air; Has cross-up attack properties; Forces a juggle state when hitting a mid-air opponent; Considered airborne from frames 7 - 39"
    },
    {
      "name": "Yoso Kick (1)",
      "input": "j>2mk",
      "startup": 3,
      "active": "3-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A stomping attack performed while jumping. Follow-ups can be performed after the first hit connects with or is blocked by the opponent; Has cross-up attack properties; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Yoso Kick (2)",
      "input": "j>2mk>2mk",
      "startup": 6,
      "active": "6-16",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A stomping attack performed while jumping. Follow-ups can be performed after the first hit connects with or is blocked by the opponent; Has cross-up attack properties; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Yoso Kick (3)",
      "input": "j>2mk>2mk>2mk",
      "startup": 6,
      "active": "6-16",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A stomping attack performed while jumping. Follow-ups can be performed after the first hit connects with or is blocked by the opponent; Has cross-up attack properties; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Wall Jump",
      "input": "9",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "While jumping, kick off a wall to perform another jump"
    },
    {
      "name": "Soaring Eagle Punches",
      "input": "j>hp>hp",
      "startup": 6,
      "active": "6-9",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A series of attacks performed while jumping; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Kikoken (Light)",
      "input": "[4]>6lp",
      "startup": 15,
      "active": "15-104",
      "recovery": "",
      "onBlock": -7,
      "onHit": -3,
      "notes": "Fire a ki blast directly forward. Useful for attacking opponents at range"
    },
    {
      "name": "Kikoken (Medium)",
      "input": "[4]>6mp",
      "startup": 12,
      "active": "12-66",
      "recovery": "",
      "onBlock": -3,
      "onHit": -7,
      "notes": "Fire a ki blast directly forward. Useful for attacking opponents at range"
    },
    {
      "name": "Kikoken (Heavy)",
      "input": "[4]>6hp",
      "startup": 11,
      "active": "11-35",
      "recovery": "",
      "onBlock": -6,
      "onHit": -2,
      "notes": "Fire a ki blast directly forward. Useful for attacking opponents at range"
    },
    {
      "name": "Kikoken (OD)",
      "input": "[4]>6pp",
      "startup": 11,
      "active": "",
      "recovery": "",
      "onBlock": 5,
      "onHit": 0,
      "notes": "Fire a ki blast directly forward. Useful for attacking opponents at range"
    },
    {
      "name": "Serenity Stream",
      "input": "214*p",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Adopt a very low, stationary fighting stance. While in this stance, each attack button produces different attacks; Can be canceled by any normal or unique attack that is consideres special-cancelable; Can be canceled into any branching attacks from frame 15 of the technique, as well as block; Position can be held by continually pressing down"
    },
    {
      "name": "Orchid Palm",
      "input": "lp",
      "startup": 5,
      "active": "5-9",
      "recovery": 17,
      "onBlock": -4,
      "onHit": -3,
      "notes": "During serenity stream; A quick strike, performed during Serenity Stream; Values represent if Serenity Stream is held; Can start blocking from frame 17 of recovery"
    },
    {
      "name": "Snake Strike",
      "input": "mp",
      "startup": 11,
      "active": "11-17",
      "recovery": 20,
      "onBlock": -11,
      "onHit": "",
      "notes": "During serenity stream; A forward-moving, repeatable low profile strike, performed during Serenity Stream; Values represent if Serenity Stream is held; Can start blocking from frame 20 of recovery"
    },
    {
      "name": "Lotus Fist",
      "input": "hp",
      "startup": 23,
      "active": "23-24-31-32",
      "recovery": 19,
      "onBlock": -3,
      "onHit": 2,
      "notes": "During serenity stream; An overhead attack that cannot be blocked while crouching, performed during Serenity Stream; Second attack becomes an overhead only if the first attack whiffs"
    },
    {
      "name": "Forward Strike",
      "input": "lk",
      "startup": 8,
      "active": "8-12",
      "recovery": 13,
      "onBlock": -5,
      "onHit": -1,
      "notes": "During serenity stream; A quick, low kick, performed during Serenity Stream; Values represent if Serenity Stream is held; Can start blocking from frame 13 of recovery"
    },
    {
      "name": "Senpu Kick",
      "input": "mk",
      "startup": 10,
      "active": "10-14",
      "recovery": 28,
      "onBlock": -10,
      "onHit": -6,
      "notes": "During serenity stream; A low kick with long reach, performed during Serenity Stream; Values represent if Serenity Stream is held; Can start blocking from frame 28 of recovery"
    },
    {
      "name": "Tenku Kick",
      "input": "hk",
      "startup": 8,
      "active": "8-12",
      "recovery": 24,
      "onBlock": -9,
      "onHit": "",
      "notes": "During serenity stream; A launching kick, performed during Serenity Stream. Can immediately be canceled into a jump on hit; Can only be canceled into a jump if the attack hits"
    },
    {
      "name": "Hundred Lightning Kicks (Light)",
      "input": "236lk",
      "startup": 8,
      "active": "8-9-15-16-22-23",
      "recovery": 20,
      "onBlock": -8,
      "onHit": 3,
      "notes": "Unleash a series of high-speed kicks. Useful for creating combos out of normal attacks; Only the 2nd hit can be canceled into a Level 3 Super Art or Critical Art"
    },
    {
      "name": "Hundred Lightning Kicks (Medium)",
      "input": "236mk",
      "startup": 14,
      "active": "14-15-20-21-26-27-33-34",
      "recovery": 22,
      "onBlock": -8,
      "onHit": 3,
      "notes": "Unleash a series of high-speed kicks. Useful for creating combos out of normal attacks; Only the 3rd hit can be canceled into a Level 3 Super Art or Critical Art"
    },
    {
      "name": "Hundred Lightning Kicks (Heavy)",
      "input": "236hk",
      "startup": 23,
      "active": "23-24-28-29-32-33-38-39-46-47",
      "recovery": 15,
      "onBlock": -3,
      "onHit": "",
      "notes": "Unleash a series of high-speed kicks. Useful for creating combos out of normal attacks; Only the 4th hit can be canceled into a Level 3 Super Art or Critical Art"
    },
    {
      "name": "Hundred Lightning Kicks (OD)",
      "input": "236(kk)",
      "startup": 8,
      "active": "8-9-14-15-20-21-26-27-32-33",
      "recovery": 21,
      "onBlock": -3,
      "onHit": 3,
      "notes": "Unleash a series of high-speed kicks. Useful for creating combos out of normal attacks; Only the 5th hit can be canceled into a Level 3 Super Art or Critical Art; Can transition into Lightning Kick Barrage either on hit or block"
    },
    {
      "name": "Lightning Kicks Barrage",
      "input": "(kk)",
      "startup": 11,
      "active": "11-12-18-19-24-25-31-32-46",
      "recovery": 25,
      "onBlock": -13,
      "onHit": "",
      "notes": "A series of kicks that can be performed following an OD Hundred Lightning Kicks. Useful for tacking on additional damage while also knocking down your opponent"
    },
    {
      "name": "Aerial Hundred Lightning Kicks (Light)",
      "input": "{8|9}>236lk",
      "startup": 8,
      "active": "8-9-14-15-20-21",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A Hundred Lightning Kicks performed while jumping. Effective when used to convert a jumping attack into a combo; Does not hit crouching opponents; 3 frames of recovery added when the attack misses"
    },
    {
      "name": "Aerial Hundred Lightning Kicks (Medium)",
      "input": "{8|9}>236mk",
      "startup": 10,
      "active": "10-11-16-17-22-23-29-30",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A Hundred Lightning Kicks performed while jumping. Effective when used to convert a jumping attack into a combo; Does not hit crouching opponents; 3 frames of recovery added when the attack misses"
    },
    {
      "name": "Aerial Hundred Lightning Kicks (Heavy)",
      "input": "{8|9}>236hk",
      "startup": 12,
      "active": "12-13-18-19-23-24-29-30-34-35",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A Hundred Lightning Kicks performed while jumping. Effective when used to convert a jumping attack into a combo; Does not hit crouching opponents; 3 frames of recovery added when the attack misses"
    },
    {
      "name": "Aerial Hundred Lightning Kicks (OD)",
      "input": "{8|9}>236(kk)",
      "startup": 6,
      "active": "6-7-12-13-16-17-21-22-25-26-30-31",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A Hundred Lightning Kicks performed while jumping. Effective when used to convert a jumping attack into a combo; Does not hit crouching opponents"
    },
    {
      "name": "Spinning Bird Kick (Light)",
      "input": "[2]>8lk",
      "startup": 9,
      "active": "9-10-17-18-25-26",
      "recovery": 6,
      "onBlock": -18,
      "onHit": "",
      "notes": "A series of rotating, upside-down kicks with your legs extended wide. This move does lots of damage, and is useful when performing combos against opponents that have left themselves wide open; Considered airborne from frames 8 - 32"
    },
    {
      "name": "Spinning Bird Kick (Medium)",
      "input": "[2]>8mk",
      "startup": 16,
      "active": "16-17-24-25-32-33-41-42-47-48",
      "recovery": 8,
      "onBlock": -17,
      "onHit": "",
      "notes": "A series of rotating, upside-down kicks with your legs extended wide. This move does lots of damage, and is useful when performing combos against opponents that have left themselves wide open; Considered airborne from frames 15 - 56"
    },
    {
      "name": "Spinning Bird Kick (Heavy)",
      "input": "[2]>8hk",
      "startup": 21,
      "active": "21-22-27-28-37-38-45-46-52-53-59-60-64-65",
      "recovery": 8,
      "onBlock": -18,
      "onHit": "",
      "notes": "A series of rotating, upside-down kicks with your legs extended wide. This move does lots of damage, and is useful when performing combos against opponents that have left themselves wide open; Considered airborne from frames 19 -73"
    },
    {
      "name": "Spinning Bird Kick (OD)",
      "input": "[2]>8(kk)",
      "startup": 16,
      "active": "16-17-22-23-28-29-35-36-41-42-48-49-54-55",
      "recovery": 8,
      "onBlock": -12,
      "onHit": "",
      "notes": "A series of rotating, upside-down kicks with your legs extended wide. This move does lots of damage, and is useful when performing combos against opponents that have left themselves wide open; Considered airborne from frames 14 - 63"
    },
    {
      "name": "Hazanshu (Light)",
      "input": "214lk",
      "startup": 23,
      "active": "23-24",
      "recovery": 21,
      "onBlock": -9,
      "onHit": 0,
      "notes": "Leap forward, rotate in the air, and slam your leg downward with a powerful kick. Useful for checking an opponent's sweeps, or as a way to close distance; Bottom half of the body is projectile invincible from frames 7 - 18; Considered airborne from frames 5 - 20"
    },
    {
      "name": "Hazanshu (Medium)",
      "input": "214mk",
      "startup": 27,
      "active": "27-29",
      "recovery": 16,
      "onBlock": -3,
      "onHit": 2,
      "notes": "Leap forward, rotate in the air, and slam your leg downward with a powerful kick. Useful for checking an opponent's sweeps, or as a way to close distance; Bottom half of the body is projectile invincible from frames 7 - 21; Considered airborne from frames 6 - 24"
    },
    {
      "name": "Hazanshu (Heavy)",
      "input": "214hk",
      "startup": 32,
      "active": "32-34",
      "recovery": 18,
      "onBlock": -3,
      "onHit": 4,
      "notes": "Leap forward, rotate in the air, and slam your leg downward with a powerful kick. Useful for checking an opponent's sweeps, or as a way to close distance; Bottom half of the body is projectile invincible from frames 7 - 26; Considered airborne from frames 6 - 29"
    },
    {
      "name": "Hazanshu (OD)",
      "input": "214(kk)",
      "startup": 26,
      "active": "26-28",
      "recovery": 16,
      "onBlock": -5,
      "onHit": "",
      "notes": "Leap forward, rotate in the air, and slam your leg downward with a powerful kick. Useful for checking an opponent's sweeps, or as a way to close distance; Bottom half of the body is projectile invincible from frames 7 - 21; Projectile invincible from frames 22 - 28; Considered airborne from frames 6 - 23"
    },
    {
      "name": "Tensho Kicks (Light)",
      "input": "22lk",
      "startup": 5,
      "active": "5-6-17-18",
      "recovery": 27,
      "onBlock": -37,
      "onHit": "",
      "notes": "Rise into the air with multiple kicks. Useful for countering an opponent's jumping attacks, or as a way to close out combos; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 10; Considered airborne from frames 8 - 45"
    },
    {
      "name": "Tensho Kicks (Medium)",
      "input": "22mk",
      "startup": 7,
      "active": "7-8-19-20",
      "recovery": 31,
      "onBlock": -41,
      "onHit": "",
      "notes": "Rise into the air with multiple kicks. Useful for countering an opponent's jumping attacks, or as a way to close out combos; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 10; Considered airborne from frames 8 - 51"
    },
    {
      "name": "Tensho Kicks (Heavy)",
      "input": "22hk",
      "startup": 9,
      "active": "9-10-19-20-29-30-42-43",
      "recovery": 26,
      "onBlock": -57,
      "onHit": "",
      "notes": "Rise into the air with multiple kicks. Useful for countering an opponent's jumping attacks, or as a way to close out combos; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 10; Considered airborne from frames 8 - 69"
    },
    {
      "name": "Tensho Kicks (OD)",
      "input": "22(kk)",
      "startup": 6,
      "active": "6-8-14-16-42-43-49-50-55-56-64-65",
      "recovery": 14,
      "onBlock": -40,
      "onHit": "",
      "notes": "Rise into the air with multiple kicks. Useful for countering an opponent's jumping attacks, or as a way to close out combos; Completely invincible from frames 1- 7; Considered airborne from frames 8 - 32; The 3rd hit of the attack comes out only if the 2nd attack hits"
    },
    {
      "name": "Kikosho",
      "input": "236236*p",
      "startup": 7,
      "active": "7-76",
      "recovery": "",
      "onBlock": -22,
      "onHit": "",
      "notes": "Create a mass of energy directly in front of you. Its swift speed and invulnerability can quickly turn the tables on an opponent; Invincible to strikes and throws from frames 1 - 7; Minimum guaranteed damage is 30%; Values do not change on counter or Punish Counter"
    },
    {
      "name": "Aerial Kikosho",
      "input": "j>236236*p",
      "startup": 7,
      "active": "7-56",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Fire a kikosho diagonally downward while jumping. Effective when used to convert a jumping attack into a combo; Completely invincible on frame 1; Minimum guaranteed damage is 30%; Values do not change on counter or Punish Counter"
    },
    {
      "name": "Hoyoku-sen",
      "input": "236236*k",
      "startup": 11,
      "active": "11-12-14-15-17-18-20-21-24-25-27-28-30-31-33-34-46-47-50-51-54-55-58-59-62-63-66-67-69-70-94-96",
      "recovery": 48,
      "onBlock": -35,
      "onHit": "",
      "notes": "Move forward while unleashing a series of kicks and then launch your opponent into the air. The last hit can be immediately canceled into a jump; Completely invincible on frames 1 - 12; Minimum guaranteed damage is 40%; Values do not change on counter or Punish Counter; The final hit can be canceled into a jump"
    },
    {
      "name": "Soten Ranka",
      "input": "214214*k",
      "startup": 8,
      "active": "8-9-34-34-42",
      "recovery": 40,
      "onBlock": -24,
      "onHit": "",
      "notes": "Perform a roundhouse kick, knock your opponent into the air with a series of attacks, and then smash them with a devastating kick. Useful for tacking on big damage in a combo, or as a quick way to turn the tables; Completely invincible on frames 1 - 9; Minimum guaranteed damage is 50%; Values do not change on counter or Punish Counter; Can only be canceled into from special moves"
    },
    {
      "name": "Soten Ranka (Critical Art)",
      "input": "214214*k",
      "startup": 8,
      "active": "8-9-34-42",
      "recovery": 40,
      "onBlock": -24,
      "onHit": "",
      "notes": "When under 25% vitality; Completely invincible on frames 1 - 9; Minimum guaranteed damage is 50%; Values do not change on counter or Punish Counter; Can only be canceled into from special moves"
    },
    {
      "name": "Koshuto",
      "input": "(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Seize your opponent by the arm, spin them around you, and throw them aside. Throws your opponent without switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Taiji Fan",
      "input": "(4lp+hk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Disrupt your opponent's balance with an elbow strike, scoop them up, and toss them behind you. Throws your opponent while switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Ryuseiraku",
      "input": "j>(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During a jump; When near opponent; Catch your opponent in mid-air and slam them into the ground. Throws your opponent without switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    }
  ],
  "guile": [
    {
      "name": "Standing Light Punch",
      "input": "5lp",
      "startup": 5,
      "active": "5-7",
      "recovery": 7,
      "onBlock": -2,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Standing Medium Punch",
      "input": "5mp",
      "startup": 7,
      "active": "7-9",
      "recovery": 15,
      "onBlock": 0,
      "onHit": 6,
      "notes": ""
    },
    {
      "name": "Standing Heavy Punch",
      "input": "5hp",
      "startup": 7,
      "active": "7-9",
      "recovery": 23,
      "onBlock": -6,
      "onHit": -1,
      "notes": "Punish counter +14"
    },
    {
      "name": "Standing Light Kick",
      "input": "5lk",
      "startup": 5,
      "active": "5-6",
      "recovery": 12,
      "onBlock": -1,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Standing Medium Kick",
      "input": "5mk",
      "startup": 7,
      "active": "7-11",
      "recovery": 18,
      "onBlock": -4,
      "onHit": 1,
      "notes": ""
    },
    {
      "name": "Standing Heavy Kick",
      "input": "5hk",
      "startup": 13,
      "active": "13-15",
      "recovery": 21,
      "onBlock": -4,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Crouching Light Punch",
      "input": "2lp",
      "startup": 4,
      "active": "4-6",
      "recovery": 8,
      "onBlock": -2,
      "onHit": 5,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Punch",
      "input": "2mp",
      "startup": 6,
      "active": "6-8",
      "recovery": 13,
      "onBlock": -2,
      "onHit": 4,
      "notes": "3 frames of recovery added when the attack misses"
    },
    {
      "name": "Crouching Heavy Punch",
      "input": "2hp",
      "startup": 9,
      "active": "9-13",
      "recovery": 20,
      "onBlock": -9,
      "onHit": 0,
      "notes": ""
    },
    {
      "name": "Crouching Light Kick",
      "input": "2lk",
      "startup": 5,
      "active": "5-6",
      "recovery": 13,
      "onBlock": -5,
      "onHit": 1,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Kick",
      "input": "2mk",
      "startup": 8,
      "active": "8-10",
      "recovery": 18,
      "onBlock": -5,
      "onHit": 4,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Kick",
      "input": "2hk",
      "startup": 9,
      "active": "9-10-27-29",
      "recovery": 21,
      "onBlock": -12,
      "onHit": "",
      "notes": "Forces a juggle state when the first attack lands as a Punish Counter"
    },
    {
      "name": "Jumping Light Punch",
      "input": "j>lp",
      "startup": 4,
      "active": "4-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Punch",
      "input": "j>mp",
      "startup": 7,
      "active": "7-9",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Heavy Punch",
      "input": "j>hp",
      "startup": 9,
      "active": "9-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent for a counter"
    },
    {
      "name": "Jumping Light Kick",
      "input": "j>lk",
      "startup": 6,
      "active": "6-15",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Medium Kick",
      "input": "j>mk",
      "startup": 7,
      "active": "7-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Heavy Kick",
      "input": "j>hk",
      "startup": 10,
      "active": "10-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Full Bullet Magnum",
      "input": "6mp",
      "startup": 20,
      "active": "20-22",
      "recovery": 19,
      "onBlock": -3,
      "onHit": 2,
      "notes": "An overhead attack that cannot be blocked while crouching; Forces a slam knockdown when hitting a mid-air opponent"
    },
    {
      "name": "Burning Straight",
      "input": "4hp",
      "startup": 9,
      "active": "9-11",
      "recovery": 21,
      "onBlock": -4,
      "onHit": 1,
      "notes": "A quick strike that can be canceled into special moves"
    },
    {
      "name": "Spinning Back Knuckle",
      "input": "6hp",
      "startup": 16,
      "active": "16-18",
      "recovery": 20,
      "onBlock": 3,
      "onHit": 5,
      "notes": "Move forward while striking with the back of your fist. Allows you to move before your opponent even if blocked"
    },
    {
      "name": "Knee Bazooka",
      "input": "4lk",
      "startup": 8,
      "active": "8-11",
      "recovery": 15,
      "onBlock": -4,
      "onHit": 0,
      "notes": "A forward-moving knee strike that's quick and difficult to counterattack. Can be performed while maintaining your backward charge"
    },
    {
      "name": "Rolling Sobat (Backward)",
      "input": "4mk",
      "startup": 11,
      "active": "11-13",
      "recovery": 18,
      "onBlock": -6,
      "onHit": 3,
      "notes": "A quick hop kick that's difficult to counterattack. Depending on what direction you hold, you can move either forward or backward while performing it; Invincible to low attacks from frames 7 - 17"
    },
    {
      "name": "Rolling Sobat (Forward)",
      "input": "6mk",
      "startup": 11,
      "active": "11-13",
      "recovery": 18,
      "onBlock": -6,
      "onHit": 3,
      "notes": "A quick hop kick that's difficult to counterattack. Depending on what direction you hold, you can move either forward or backward while performing it; Invincible to low attacks from frames 7 - 17; 23 frames of recovery (34 frames overall) added if the attack misses"
    },
    {
      "name": "Reverse Spin Kick",
      "input": "6hk",
      "startup": 17,
      "active": "17-19",
      "recovery": 26,
      "onBlock": -8,
      "onHit": -1,
      "notes": "An attack with long reach that is useful against an opponent's sweeps; Invincible to throws and low attacks on frames 4 - 28; Forces a juggle state knockdown on counter hit; Produces a crumple stun on PunisH Counter"
    },
    {
      "name": "Guile High Kick",
      "input": "3hk",
      "startup": 10,
      "active": "10-12",
      "recovery": 23,
      "onBlock": -9,
      "onHit": 0,
      "notes": "A high kick that is useful against jumping opponents. Can be performed while maintaining your downward charge; Forces a juggle state when the attack lands for a Punish Counter; Forces a juggle state when hitting a mid-air opponent for a counter; Can be canceled into a special move from frames 18 - 19"
    },
    {
      "name": "Recoil Cannon",
      "input": "5mp>4hp",
      "startup": 16,
      "active": "16-18",
      "recovery": 26,
      "onBlock": -9,
      "onHit": "",
      "notes": "A combination attack that sends an opponent flying; Can cancel into a special move or Super Art from frames 8 - 9"
    },
    {
      "name": "Double Shot",
      "input": "2mp>2mp",
      "startup": 12,
      "active": "12-14",
      "recovery": 16,
      "onBlock": -6,
      "onHit": "",
      "notes": "A quick series of attacks that can be canceled into special moves"
    },
    {
      "name": "Drake Fang",
      "input": "2mk>6mp",
      "startup": 20,
      "active": "20-22",
      "recovery": 21,
      "onBlock": -5,
      "onHit": 1,
      "notes": "A low attack followed by an overhead attack"
    },
    {
      "name": "Phantom Cutter",
      "input": "2hk>3hk",
      "startup": 10,
      "active": "10-12",
      "recovery": 25,
      "onBlock": -12,
      "onHit": "",
      "notes": "A low attack into a high kick that launches an opponent into the air. These two hits form a combo if done as a Punish Counter"
    },
    {
      "name": "Dragon Suplex",
      "input": "(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Whirl behind your opponent and, while grabbing one of their arms and their head, slam them into the ground with a suplex. Throws your opponent without switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Judo Throw",
      "input": "(4lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab your opponent and toss them behind you, placing their weight on your arm and shoulder. Throws your opponent while switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Flying Mare",
      "input": "j>(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During a jump; When near opponent; Grab an airborne opponent and toss them to the ground below. Throws your opponent without switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Flying Buster Drop",
      "input": "j>(4lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During a jump; When near opponent; Grab an airborne opponent and smash their back with your shoulder as you descend. Throws your opponent while switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Sonic Boom (Light)",
      "input": "[4]>6lp",
      "startup": 10,
      "active": "",
      "recovery": "",
      "onBlock": -3,
      "onHit": 3,
      "notes": "Cross your arms with such speed that you fire a rotating aerial slash. Useful for checking distant opponents or as a way to start offensive pressure; Can transition to the normal Sonic Break (Attack available during Super Art 2) from frames 12 - 20"
    },
    {
      "name": "[Perfect timing] Sonic Boom (Light)",
      "input": "[4]>6lp",
      "startup": 10,
      "active": "",
      "recovery": "",
      "onBlock": -3,
      "onHit": 4,
      "notes": "Can transition to the normal Sonic Break (Attack available during Super Art 2) from frames 12 - 20"
    },
    {
      "name": "Sonic Boom (Medium)",
      "input": "[4]>6mp",
      "startup": 10,
      "active": "",
      "recovery": "",
      "onBlock": -3,
      "onHit": 3,
      "notes": "Cross your arms with such speed that you fire a rotating aerial slash. Useful for checking distant opponents or as a way to start offensive pressure; Can transition to the normal Sonic Break (Attack available during Super Art 2) from frames 12 - 20"
    },
    {
      "name": "[Perfect timing] Sonic Boom (Medium)",
      "input": "[4]>6mp",
      "startup": 10,
      "active": "",
      "recovery": "",
      "onBlock": -3,
      "onHit": 4,
      "notes": "Can transition to the normal Sonic Break (Attack available during Super Art 2) from frames 12 - 20"
    },
    {
      "name": "Sonic Boom (Heavy)",
      "input": "[4]>6hp",
      "startup": 10,
      "active": "",
      "recovery": "",
      "onBlock": -3,
      "onHit": 3,
      "notes": "Cross your arms with such speed that you fire a rotating aerial slash. Useful for checking distant opponents or as a way to start offensive pressure; Can transition to the normal Sonic Break (Attack available during Super Art 2) from frames 12 - 20"
    },
    {
      "name": "[Perfect timing] Sonic Boom (Heavy)",
      "input": "[4]>6hp",
      "startup": 10,
      "active": "",
      "recovery": "",
      "onBlock": -3,
      "onHit": 4,
      "notes": "Can transition to the normal Sonic Break (Attack available during Super Art 2) from frames 12 - 20"
    },
    {
      "name": "Sonic Boom (OD)",
      "input": "[4]>6(pp)",
      "startup": 10,
      "active": "",
      "recovery": "",
      "onBlock": 3,
      "onHit": "",
      "notes": "Cross your arms with such speed that you fire a rotating aerial slash. Useful for checking distant opponents or as a way to start offensive pressure; Can transition to Overdrive Sonic Break (Attack available during Super Art 2) from frames 12 - 20"
    },
    {
      "name": "Somersault Kick (Light)",
      "input": "[2]>8lk",
      "startup": 5,
      "active": "5-10",
      "recovery": 26,
      "onBlock": -30,
      "onHit": "",
      "notes": "Perform a backwards somersault while unleashing a devastating kick. It is invincible against jumping attacks, making it useful as an anti-air technique; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 7; Considered airborne from frames 8 - 36; Does 800 individual damage after the 3rd active frame"
    },
    {
      "name": "[Perfect timing] Somersault Kick (Light)",
      "input": "[2]>8lk",
      "startup": 5,
      "active": "5-10",
      "recovery": 26,
      "onBlock": -30,
      "onHit": "",
      "notes": "Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 7; Considered airborne from frames 8 - 36; Does 1000 individual damage when the attack lands after the 3rd active frame"
    },
    {
      "name": "Somersault Kick (Medium)",
      "input": "[2]>8mk",
      "startup": 6,
      "active": "6-11",
      "recovery": 27,
      "onBlock": -31,
      "onHit": "",
      "notes": "Perform a backwards somersault while unleashing a devastating kick. It is invincible against jumping attacks, making it useful as an anti-air technique; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 8; Considered airborne from frames 8 - 38; Does 800 individual damage after the 3rd active frame"
    },
    {
      "name": "[Perfect timing] Somersault Kick (Medium)",
      "input": "[2]>8mk",
      "startup": 6,
      "active": "6-11",
      "recovery": 27,
      "onBlock": -31,
      "onHit": "",
      "notes": "Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 8; Considered airborne from frames 8 - 38; Does 1000 individual damage when the attack lands after the 3rd active frame"
    },
    {
      "name": "Somersault Kick (Heavy)",
      "input": "[2]>8hk",
      "startup": 7,
      "active": "7-12",
      "recovery": 28,
      "onBlock": -32,
      "onHit": "",
      "notes": "Perform a backwards somersault while unleashing a devastating kick. It is invincible against jumping attacks, making it useful as an anti-air technique; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 9; Considered airborne from frames 8 - 40; Does 800 individual damage after the 3rd active frame"
    },
    {
      "name": "[Perfect timing] Somersault Kick (Heavy)",
      "input": "[2]>8hk",
      "startup": 7,
      "active": "7-12",
      "recovery": 28,
      "onBlock": -32,
      "onHit": "",
      "notes": "Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 9; Considered airborne from frames 8 - 40; Does 1000 individual damage when the attack lands after the 3rd active frame"
    },
    {
      "name": "Somersault Kick (OD)",
      "input": "[2]>8(kk)",
      "startup": 6,
      "active": "6-11",
      "recovery": 26,
      "onBlock": -33,
      "onHit": "",
      "notes": "Perform a backwards somersault while unleashing a devastating kick. It is invincible against jumping attacks, making it useful as an anti-air technique; Completely invincible from frames 1 - 11; Considered airborne from frames 8 - 37; Does 700 individual damage from frames 3 - 4"
    },
    {
      "name": "Sonic Blade (Light)",
      "input": "214lp",
      "startup": 16,
      "active": "16-60",
      "recovery": "",
      "onBlock": -4,
      "onHit": -3,
      "notes": "Used to fire aerial slashes while Solid Puncher is active. The speed of the projectile can be modified with directional inputs; Can transition to all Sonic Break variations from frames 35 - 40"
    },
    {
      "name": "Sonic Blade (Medium)",
      "input": "214mp",
      "startup": 21,
      "active": "21-105",
      "recovery": "",
      "onBlock": -7,
      "onHit": -6,
      "notes": "Used to fire aerial slashes while Solid Puncher is active. The speed of the projectile can be modified with directional inputs; Can transition to any Sonic Cross from frames 40 - 46"
    },
    {
      "name": "Sonic Blade (Heavy)",
      "input": "214hp",
      "startup": 31,
      "active": "31-130",
      "recovery": "",
      "onBlock": -1,
      "onHit": 1,
      "notes": "Used to fire aerial slashes while Solid Puncher is active. The speed of the projectile can be modified with directional inputs; Can transition to any Sonic Cross from frames 50 - 54"
    },
    {
      "name": "Sonic Blade (OD)",
      "input": "214pp",
      "startup": 15,
      "active": "15-114",
      "recovery": "",
      "onBlock": -4,
      "onHit": "",
      "notes": "Used to fire aerial slashes while Solid Puncher is active. The speed of the projectile can be modified with directional inputs; Can transition to any Sonic Cross from frames 34 - 39"
    },
    {
      "name": "Sonic Cross (Light)",
      "input": "6lp",
      "startup": 10,
      "active": "",
      "recovery": "",
      "onBlock": -1,
      "onHit": "",
      "notes": "During Sonic Blade; Combine Sonic Blade with another aerial slash and fire it as a projectile"
    },
    {
      "name": "[Perfect timing] Sonic Cross (Light)",
      "input": "6lp",
      "startup": 10,
      "active": "",
      "recovery": "",
      "onBlock": -1,
      "onHit": "",
      "notes": "During Sonic Blade"
    },
    {
      "name": "Sonic Cross (Medium)",
      "input": "6mp",
      "startup": 10,
      "active": "",
      "recovery": "",
      "onBlock": -1,
      "onHit": "",
      "notes": "During Sonic Blade; Combine Sonic Blade with another aerial slash and fire it as a projectile"
    },
    {
      "name": "[Perfect timing] Sonic Cross (Medium)",
      "input": "6mp",
      "startup": 10,
      "active": "",
      "recovery": "",
      "onBlock": -1,
      "onHit": "",
      "notes": "During Sonic Blade"
    },
    {
      "name": "Sonic Cross (Heavy)",
      "input": "6hp",
      "startup": 10,
      "active": "",
      "recovery": "",
      "onBlock": -1,
      "onHit": "",
      "notes": "During Sonic Blade; Combine Sonic Blade with another aerial slash and fire it as a projectile"
    },
    {
      "name": "[Perfect timing] Sonic Cross (Heavy)",
      "input": "6hp",
      "startup": 10,
      "active": "",
      "recovery": "",
      "onBlock": -1,
      "onHit": "",
      "notes": "During Sonic Blade"
    },
    {
      "name": "Sonic Cross (OD 1)",
      "input": "pp",
      "startup": 10,
      "active": "",
      "recovery": "",
      "onBlock": 6,
      "onHit": "",
      "notes": "During Sonic Blade; Combine Sonic Blade with another aerial slash and fire it as a projectile"
    },
    {
      "name": "Sonic Cross (OD 1 \u2014 Sonic Blade OD)",
      "input": "*p",
      "startup": 10,
      "active": "",
      "recovery": "",
      "onBlock": 6,
      "onHit": "",
      "notes": "During Solinc Blade OD; Combine Sonic Blade with another aerial slash and fire it as a projectile"
    },
    {
      "name": "Sonic Cross (OD 2)",
      "input": "pp",
      "startup": 10,
      "active": "",
      "recovery": "",
      "onBlock": 6,
      "onHit": "",
      "notes": "During Sonic Blade OD; Combine Sonic Blade with another aerial slash and fire it as a projectile; Produces a wall splat after it hits"
    },
    {
      "name": "Sonic Hurricane (Up)",
      "input": "[4]>646hp",
      "startup": 7,
      "active": "7-58",
      "recovery": "",
      "onBlock": -2,
      "onHit": "",
      "notes": "Fire a massive aerial slash directly ahead. An extremely versatile move that can be used in combos, to counter projectiles, or as a way to turn the tables when being pressured. The angle of the attack can be changed depending on the command input; Invincible to throws and strikes on frame 1; Minimum guaranteed damage is set to 30%; Values do not change on counter or Punish Counter"
    },
    {
      "name": "Sonic Hurricane (Side)",
      "input": "[4]>646+{lp|mp}",
      "startup": 8,
      "active": "8-58",
      "recovery": "",
      "onBlock": -26,
      "onHit": "",
      "notes": "Fire a massive aerial slash directly ahead. An extremely versatile move that can be used in combos, to counter projectiles, or as a way to turn the tables when being pressured. The angle of the attack can be changed depending on the command input; Invincible to throws and strikes from frames 1 - 8; Minimum guaranteed damage is set to 30%; Values do not change on counter or Punish Counter"
    },
    {
      "name": "Solid Puncher",
      "input": "214214*p",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Envelop both arms in aerial slashes and enables the use of Sonic Break; Sonic Break can be performed after this technique is activated"
    },
    {
      "name": "Sonic Break (Single Shot)",
      "input": "pp",
      "startup": 11,
      "active": "",
      "recovery": "",
      "onBlock": -2,
      "onHit": 2,
      "notes": "During Solid Puncher; Used to fire aerial slashes while Solid Puncher is active. The speed of the projectile can be modified with directional inputs; Can transition to a regular Sonic Break (available while Level 2 Super Art is active) from frames 13 - 21"
    },
    {
      "name": "Sonic Break (Variation)",
      "input": "*p",
      "startup": 11,
      "active": "",
      "recovery": "",
      "onBlock": -2,
      "onHit": 2,
      "notes": "During Solid Puncher; During Sonic Boom or Sonic Break; Used to fire aerial slashes while Solid Puncher is active. The speed of the projectile can be modified with directional inputs; Can transition to a regular Sonic Break (available while Level 2 Super Art is active) from frames 13 - 21, up to 3 times; The last transition\u2019s recovery is reduced by 1 frame"
    },
    {
      "name": "Sonic Break (OD)",
      "input": "*p",
      "startup": 11,
      "active": "",
      "recovery": "",
      "onBlock": 3,
      "onHit": "",
      "notes": "During Solid Puncher; During Sonic Boom OD or Sonic Break OD; Used to fire aerial slashes while Solid Puncher is active. The speed of the projectile can be modified with directional inputs; Can transition to Overdrive Sonic Break (available while Level 2 Super Art is active) once from frames 13 - 21"
    },
    {
      "name": "Crossfire Somersault",
      "input": "[4]>646*k",
      "startup": 9,
      "active": "9-14",
      "recovery": 30,
      "onBlock": -59,
      "onHit": "",
      "notes": "When under 25% vitality; Launch your opponent into the air and follow up with a mighty somersault kick. It has invincibility at the beginning, making it useful as an anti-air attack or as a way to turn the tables on your opponent; Completely invincible from frames 1 - 14; Considered airborne from frames 12 - 44; Minimum guaranteed damage is set to 50%; Values do not change on counter or Punish Counter; Does 3000 individual damage when the attack lands after the 3rd active frame; Applied only when canceling a special move"
    },
    {
      "name": "Crossfire Somersault (Critical Art)",
      "input": "[4]>646*k",
      "startup": 9,
      "active": "9-14",
      "recovery": 30,
      "onBlock": -59,
      "onHit": "",
      "notes": "When under 25% vitality; Launch your opponent into the air and follow up with a mighty somersault kick. It has invincibility at the beginning, making it useful as an anti-air attack or as a way to turn the tables on your opponent; Completely invincible from frames 1 - 14; Considered airborne from frames 12 - 44; Minimum guaranteed damage is set to 50%; Values do not change on counter or Punish Counter; Does 3500 individual damage when the attack lands after the 3rd active frame; Applied only when canceling a special move"
    }
  ],
  "zangief": [
    {
      "name": "Standing Light Punch",
      "input": "5lp",
      "startup": 7,
      "active": "7-9",
      "recovery": 9,
      "onBlock": 2,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Standing Light Punch (Rapid Cancel)",
      "input": "5lp",
      "startup": 4,
      "active": "4-6",
      "recovery": 9,
      "onBlock": 2,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Standing Medium Punch",
      "input": "5mp",
      "startup": 9,
      "active": "9-12",
      "recovery": 17,
      "onBlock": -2,
      "onHit": 2,
      "notes": ""
    },
    {
      "name": "Standing Heavy Punch",
      "input": "5hp",
      "startup": 16,
      "active": "16-18",
      "recovery": 22,
      "onBlock": -3,
      "onHit": 3,
      "notes": "Forces a juggle state when the attack lands as a Punish Counter; 5 frames of recovery added when the attack misses; When the button is held, 1 hit of super armor is added to the upper half of the body from frame 4; Hold down the button for over 23 frames to change its properties"
    },
    {
      "name": "Standing Heavy Punch (Charged)",
      "input": "5[hp]",
      "startup": 32,
      "active": "32-34",
      "recovery": 22,
      "onBlock": 3,
      "onHit": "",
      "notes": "Super Armor for 1 attack from frames 4 - 34; juggle state time increased when attack lands as a Punish Counter; 2 frames of recovery added when the attack misses"
    },
    {
      "name": "Standing Light Kick",
      "input": "5lk",
      "startup": 7,
      "active": "7-8",
      "recovery": 17,
      "onBlock": -4,
      "onHit": -2,
      "notes": ""
    },
    {
      "name": "Standing Medium Kick",
      "input": "5mk",
      "startup": 10,
      "active": "10-13",
      "recovery": 19,
      "onBlock": -4,
      "onHit": 1,
      "notes": ""
    },
    {
      "name": "Standing Heavy Kick",
      "input": "5hk",
      "startup": 13,
      "active": "13-16",
      "recovery": 21,
      "onBlock": 1,
      "onHit": 3,
      "notes": "Forces a juggle state when hitting a mid-air opponent; Force a juggle state and increase juggle state time when attack lands as a Punish Counter"
    },
    {
      "name": "Crouching Light Punch",
      "input": "2lp",
      "startup": 6,
      "active": "6-7",
      "recovery": 8,
      "onBlock": 1,
      "onHit": 6,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Light Punch (Rapid Cancel)",
      "input": "2lp",
      "startup": 3,
      "active": "3-4",
      "recovery": 8,
      "onBlock": 1,
      "onHit": 6,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Punch",
      "input": "2mp",
      "startup": 8,
      "active": "8-10",
      "recovery": 16,
      "onBlock": -1,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Punch",
      "input": "2hp",
      "startup": 11,
      "active": "11-19",
      "recovery": 35,
      "onBlock": -20,
      "onHit": "",
      "notes": "Increase juggle state time when attack lands as a Punish Counter; Adds a floor bounding effect on Punish Counter"
    },
    {
      "name": "Crouching Light Kick",
      "input": "2lk",
      "startup": 4,
      "active": "4-6",
      "recovery": 12,
      "onBlock": -3,
      "onHit": 0,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Light Kick (Rapid Cancel)",
      "input": "2lk",
      "startup": 3,
      "active": "3-5",
      "recovery": 12,
      "onBlock": -3,
      "onHit": 0,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Kick",
      "input": "2mk",
      "startup": 9,
      "active": "9-11",
      "recovery": 18,
      "onBlock": -2,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Kick",
      "input": "2hk",
      "startup": 12,
      "active": "12-14",
      "recovery": 27,
      "onBlock": -13,
      "onHit": "",
      "notes": "Changes juggle state on Punish Counter; Increases knockdown time on Punish Counter"
    },
    {
      "name": "Jumping Light Punch",
      "input": "j>lp",
      "startup": 5,
      "active": "5-11",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Punch",
      "input": "j>mp",
      "startup": 8,
      "active": "8-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Heavy Punch",
      "input": "j>hp",
      "startup": 9,
      "active": "9-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a slam knockdown when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Light Kick",
      "input": "j>lk",
      "startup": 5,
      "active": "5-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Medium Kick",
      "input": "j>mk",
      "startup": 8,
      "active": "8-15",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Heavy Kick",
      "input": "j>hk",
      "startup": 10,
      "active": "10-16",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Hold down the button for over 20 frames to change its properties"
    },
    {
      "name": "Jumping Heacy Punch (Charged)",
      "input": "j>[hp]",
      "startup": 32,
      "active": "32-37",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Transitions to unique hit and block action, and adds 10 frames to landing recovery; Forces a wall bound on Punish Counter"
    },
    {
      "name": "Double Lariat",
      "input": "(pp)",
      "startup": 15,
      "active": "15-16-26-27-36-37-44-45",
      "recovery": 27,
      "onBlock": -12,
      "onHit": "",
      "notes": "A lariat performed by extending both arms and spinning. Invulnerable to projectiles during the duration of the spin; Projectile invincibility from frames 6 - 45; Press left or right during the attack to move"
    },
    {
      "name": "Double Lariat (OD)",
      "input": "(ppp)",
      "startup": 12,
      "active": "12-13-16-17-21-22-29-30-35-36",
      "recovery": 26,
      "onBlock": -11,
      "onHit": "",
      "notes": "A lariat performed by extending both arms and spinning. Invulnerable to projectiles during the duration of the spin; Projectile invincibility from frames 1 - 36; Invincible against projectiles and strikes with mid-air hitboxes from frames 6 - 12; Press left or right during the attack to move; First attack produces a crumple stun on hit"
    },
    {
      "name": "Screw Piledriver (Light)",
      "input": "{360}+lp",
      "startup": 5,
      "active": "5-7",
      "recovery": 54,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Throw an opponent, leap into the air, and smash them into the ground with a spinning slam. Its high damage and long reach make it a key part of a grappler's arsenal; Does 2875 individual damage when the attack lands as a Punish Counter"
    },
    {
      "name": "Screw Piledriver (Medium)",
      "input": "{360}+mp",
      "startup": 5,
      "active": "5-7",
      "recovery": 54,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Throw an opponent, leap into the air, and smash them into the ground with a spinning slam. Its high damage and long reach make it a key part of a grappler's arsenal; Does 3335 individual damage when the attack lands as a Punish Counter"
    },
    {
      "name": "Screw Piledriver (Heavy)",
      "input": "{360}+hp",
      "startup": 5,
      "active": "5-7",
      "recovery": 54,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Throw an opponent, leap into the air, and smash them into the ground with a spinning slam. Its high damage and long reach make it a key part of a grappler's arsenal; With Classic Controls; Does 3795 individual damage when the attack lands as a Punish Counter; With Modern Controls; Does 3795 individual damage when the attack lands as a Punish Counter; Does 3036 individual damage using simplified inputs"
    },
    {
      "name": "Screw Piledriver (OD)",
      "input": "{360}+pp",
      "startup": 5,
      "active": "5-7",
      "recovery": 54,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Throw an opponent, leap into the air, and smash them into the ground with a spinning slam. Its high damage and long reach make it a key part of a grappler's arsenal; With Classic Controls; Does 3910 individual damage when the attack lands as a Punish Counter; With Modern Controls; Does 3910 individual damage when the attack lands as a Punish Counter; Does 3128 individual damage using simplified inputs"
    },
    {
      "name": "Borscht Dynamite",
      "input": "j>{360}+*k",
      "startup": 4,
      "active": "4-6",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab a mid-air opponent, juggling them and then smashing them into the ground with a spinning slam. Can only be used against airborne opponents; Only hits airborne opponents; With Classic Controls; Does 3260 individual damage when the attack lands as a Punish Counter; With Modern Controls; Does 3260 individual damage when the attack lands as a Punish Counter; Does 2608 individual damage using simplified inputs"
    },
    {
      "name": "Borscht Dynamite (OD)",
      "input": "j>{360}+kk",
      "startup": 4,
      "active": "4-6",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Grab a mid-air opponent, juggling them and then smashing them into the ground with a spinning slam. Can only be used against airborne opponents; Only hits airborne opponents; With Classic Controls; Does 3375 individual damage when the attack lands as a Punish Counter; With Modern Controls; Does 3375 individual damage when the attack lands as a Punish Counter; Does 2700 individual damage using simplified inputs"
    },
    {
      "name": "Russian Suplex",
      "input": "63214*k",
      "startup": 10,
      "active": "10-11",
      "recovery": 50,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab an opponent and slam them into the ground with two powerful suplexes. This move will only activate when close to an opponent. When far away, Siberian Express will activate instead; With Classic Controls; Does 3335 individual damage when the attack lands as a Punish Counter; With Modern Controls; Does 3335 individual damage when the attack lands as a Punish Counter; *Does 2668 individual damage using simplified inputs"
    },
    {
      "name": "Russian Suplex (OD)",
      "input": "63214(kk)",
      "startup": 10,
      "active": "10-11",
      "recovery": 50,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab an opponent and slam them into the ground with two powerful suplexes. This move will only activate when close to an opponent. When far away, Siberian Express will activate instead; With Classic Controls; Does 3680 individual damage when the attack lands as a Punish Counter; With Modern Controls; Does 2944 individual damage when the attack lands as a Punish Counter"
    },
    {
      "name": "Siberian Express (Close Range)",
      "input": "63214*k",
      "startup": 28,
      "active": "28-29",
      "recovery": 41,
      "onBlock": "",
      "onHit": "",
      "notes": "When close to opponent; Run to an opponent and grab them before slamming them to the ground with a devastating powerbomb. When you're at a longer distance from the opponent, this is useful for making a surprise attack or breaking through their blocks; With Classic Controls; Does 3105 individual damage when the attack lands as a Punish Counter; With Modern Controls; Does 2484 individual damage when the attack lands as a Punish Counter"
    },
    {
      "name": "Siberian Express (Close Range OD)",
      "input": "63214(kk)",
      "startup": 23,
      "active": "23-24",
      "recovery": 44,
      "onBlock": "",
      "onHit": "",
      "notes": "When close to opponent; Run to an opponent and grab them before slamming them to the ground with a devastating powerbomb. When you're at a longer distance from the opponent, this is useful for making a surprise attack or breaking through their blocks; With Classic Controls; Does 3450 individual damage when the attack lands as a Punish Counter; With Modern Controls; Does 2760 individual damage when the attack lands as a Punish Counter"
    },
    {
      "name": "Siberian Express (Far Range)",
      "input": "63214*k",
      "startup": 55,
      "active": "55-56",
      "recovery": 40,
      "onBlock": "",
      "onHit": "",
      "notes": "When far from opponent; Run to an opponent and grab them before slamming them to the ground with a devastating powerbomb. When you're at a longer distance from the opponent, this is useful for making a surprise attack or breaking through their blocks; Super Armor for 1 attack from frames 10 - 56; Travel distance changes depending on the distance from the opponent; *Frame data displays the shortest distance; With Classic Controls; Does 3105 individual damage when the attack lands as a Punish Counter; With Modern Controls; Does 2484 individual damage when the attack lands as a Punish Counter"
    },
    {
      "name": "Siberian Express (Far Range OD)",
      "input": "63214(kk)",
      "startup": 54,
      "active": "54-55",
      "recovery": 40,
      "onBlock": "",
      "onHit": "",
      "notes": "When far from opponent; Run to an opponent and grab them before slamming them to the ground with a devastating powerbomb. When you're at a longer distance from the opponent, this is useful for making a surprise attack or breaking through their blocks; Super Armor for 2 attacks from frames 3 - 55; Travel distance changes depending on the distance from the opponent; *Frame data displays the shortest distance; With Classic Controls; Does 3450 individual damage when the attack lands as a Punish Counter; With Modern Controls; Does 2760 individual damage when the attack lands as a Punish Counter"
    },
    {
      "name": "Tundra Storm",
      "input": "22hk",
      "startup": 5,
      "active": "5-55",
      "recovery": 24,
      "onBlock": "",
      "onHit": "",
      "notes": "Counter an opponent's grounded kick and throw them. Can only be used against certain attacks, but makes up for that limitation with its big damage"
    },
    {
      "name": "Aerial Russian Slam",
      "input": "236236*k",
      "startup": 11,
      "active": "11-17",
      "recovery": 60,
      "onBlock": "",
      "onHit": "",
      "notes": "Jump diagonally upward, grabbing an airborne opponent before viciously slamming them into the ground. Useful as an anti-air counter when predicting your opponent's jumps or when worked into combos; Completely invincible from frames 1- 17; Considered airborne from frames 2 - 30; Can only work on mid-air opponents; Minimum guaranteed damage is 30%; Does 2100 individual damage when using simplified inputs; As the simplified input damage figure above is after it has already been scaled to 80%, the 30% minimum guaranteed damage will equal 787 damage when using simplified inputs; Values do not change on counter or Punish Counter"
    },
    {
      "name": "Cyclone Lariat (Charged)",
      "input": "236236[*p]",
      "startup": 18,
      "active": "18-111-33-35-41-42-50-51-60-61-69-70-79-80-90-91-99-100-110-111-120-122",
      "recovery": 52,
      "onBlock": -35,
      "onHit": "",
      "notes": "Rotate at high speeds to pull in an opponent and grab them before slamming them into the ground with a powerful throw. You can choose what direction to throw your opponent by inputting left or right during the throw; Completely invincible from frames 1- 18; Projectile invincibility from frames 19 - 122; Shifts to throw when the button is not held down; Minimum guaranteed damage is 40%; Values do not change on counter or Punish Counter; Active vaccuum hitbox"
    },
    {
      "name": "Cyclone Lariat (Immediate)",
      "input": "236236*p",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Rotate at high speeds to pull in an opponent and grab them before slamming them into the ground with a powerful throw. You can choose what direction to throw your opponent by inputting left or right during the throw"
    },
    {
      "name": "Cyclone Lariat (Movement)",
      "input": "236236*p",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Rotate at high speeds to pull in an opponent and grab them before slamming them into the ground with a powerful throw. You can choose what direction to throw your opponent by inputting left or right during the throw; Press left or right to move"
    },
    {
      "name": "Bolshoi Storm Buster",
      "input": "{720}+*p",
      "startup": 6,
      "active": "6-7",
      "recovery": 116,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; A powerful throw that puts an opponent in a finishing hold with pro-wrestling flair. Can be used to slip through an opponent's guard at close range and deliver massive damage; Minimum guaranteed damage is 50%; Values do not change on counter or Punish Counter"
    },
    {
      "name": "Bolshoi Storm Buster (Critical Art)",
      "input": "{720}+*p",
      "startup": 6,
      "active": "6-7",
      "recovery": 116,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; When under 25% vitality; A powerful throw that puts an opponent in a finishing hold with pro-wrestling flair. Can be used to slip through an opponent's guard at close range and deliver massive damage; Minimum guaranteed damage is 50%; Values do not change on counter or Punish Counter"
    },
    {
      "name": "Hellstab",
      "input": "3mp",
      "startup": 7,
      "active": "7-9",
      "recovery": 21,
      "onBlock": -3,
      "onHit": -1,
      "notes": "A quick thrust that can be canceled into special moves; Forces the opponent into a standing position"
    },
    {
      "name": "Knee Hammer",
      "input": "6mk",
      "startup": 14,
      "active": "14-20",
      "recovery": 13,
      "onBlock": -4,
      "onHit": 1,
      "notes": "A knee strike with long reach and quick recovery time"
    },
    {
      "name": "Headbutt",
      "input": "6hp",
      "startup": 14,
      "active": "14-18",
      "recovery": 15,
      "onBlock": 4,
      "onHit": 7,
      "notes": "A headbutt that can be canceled into a special move and lets you act before your opponent, even if they block it; 2 frames of recovery added when the attack misses"
    },
    {
      "name": "Cyclone Wheel Kick",
      "input": "6hk",
      "startup": 22,
      "active": "22-28",
      "recovery": 25,
      "onBlock": -9,
      "onHit": "",
      "notes": "An overhead attack that cannot be blocked while crouching; Adds a floor bounding effect on Punish Counter"
    },
    {
      "name": "Smetana Dropkick",
      "input": "3hk",
      "startup": 16,
      "active": "16-19",
      "recovery": 40,
      "onBlock": -18,
      "onHit": "",
      "notes": "A dropkick that is effective at countering an opponent's sweep; Throw invincible from frames 5 - 26; Wall splat effect added on Punish Counter"
    },
    {
      "name": "Flying Body Press",
      "input": "j>2hp",
      "startup": 9,
      "active": "9-17",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A body press with an area of attack so wide that it can hit an opponent even if it crosses over them; Has cross-up attack properties"
    },
    {
      "name": "Flying Headbutt",
      "input": "8>8hp",
      "startup": 8,
      "active": "8-11",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A headbutt that can be canceled into aerial special moves; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Machine Gun Chops (2)",
      "input": "5mp>5mp",
      "startup": 9,
      "active": "9-12",
      "recovery": 20,
      "onBlock": -6,
      "onHit": 2,
      "notes": "A potent series of chops. Hits repeatedly if the first hit connects as a counter hit"
    },
    {
      "name": "Machine Gun Chops (3)",
      "input": "5mp>5mp>5mp",
      "startup": 15,
      "active": "15-17",
      "recovery": 32,
      "onBlock": -17,
      "onHit": "",
      "notes": "A potent series of chops. Hits repeatedly if the first hit connects as a counter hit"
    },
    {
      "name": "Power Stomps (1)",
      "input": "22mk",
      "startup": 9,
      "active": "9-11",
      "recovery": 17,
      "onBlock": -3,
      "onHit": 4,
      "notes": "A series of attacks, the third of which can be canceled into special moves"
    },
    {
      "name": "Power Stomps (2)",
      "input": "22mk>5mk",
      "startup": 9,
      "active": "9-11",
      "recovery": 19,
      "onBlock": -4,
      "onHit": -3,
      "notes": "A series of attacks, the third of which can be canceled into special moves"
    },
    {
      "name": "Power Stomps (3)",
      "input": "22mk>5mk>5mk",
      "startup": 10,
      "active": "10-12",
      "recovery": 24,
      "onBlock": -10,
      "onHit": -2,
      "notes": "A series of attacks, the third of which can be canceled into special moves"
    },
    {
      "name": "Bodyslam",
      "input": "(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Lift an opponent above your head and toss them into the ground back-first. Throws your opponent without switching places with them; Punish Counter properties; - Damage set to 2040; - Super Art gauge increases by 3800; - Produces a Hard Knockdown; Press the throw button again during the animation for 600 extra damage"
    },
    {
      "name": "Capture Suplex",
      "input": "(4lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab an opponent and slam them to the ground while leaping backwards. Throws your opponent while switching places with them; Punish Counter properties; - Damage set to 2380; - Super Art gauge increases by 4000; - Produces a Hard Knockdown"
    },
    {
      "name": "German Suplex",
      "input": "(6lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab an opponent from behind and, arching your back, smash them into the ground. Throws your opponent without switching places with them; Punish Counter properties; - Damage set to 2550; - Super Art gauge increases by 4000; - Produces a Hard Knockdown"
    },
    {
      "name": "Spinebuster",
      "input": "(3lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Lift your opponent up and fall on top of them with their back to the ground. Throws your opponent without switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Russian Drop",
      "input": "(1lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Disrupt your opponent's balance with a kick, then smash their head into the ground as you fall backwards. Throws your opponent while switching places with them; Punish Counter properties; - Damage set to 2550; - Super Art gauge increases by 4000; - Produces a Hard Knockdown"
    },
    {
      "name": "Brainbuster",
      "input": "(2lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Lift your opponent upside-down and send them flying to the ground behind you back-first. Throws your opponent while switching places with them; Punish Counter properties; - Damage set to 2550; - Super Art gauge increases by 4000; - Produces a Hard Knockdown"
    }
  ],
  "dhalsim": [
    {
      "name": "Standing Light Punch",
      "input": "5lp",
      "startup": 4,
      "active": "4-6",
      "recovery": 8,
      "onBlock": -1,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Standing Medium Punch",
      "input": "5mp",
      "startup": 14,
      "active": "14-16",
      "recovery": 19,
      "onBlock": -5,
      "onHit": 0,
      "notes": ""
    },
    {
      "name": "Standing Heavy Punch",
      "input": "5hp",
      "startup": 16,
      "active": "16-19",
      "recovery": 27,
      "onBlock": -11,
      "onHit": -6,
      "notes": "Forces a juggle state on Punish Counter"
    },
    {
      "name": "Standing Light Kick",
      "input": "5lk",
      "startup": 9,
      "active": "9-12",
      "recovery": 11,
      "onBlock": -6,
      "onHit": 2,
      "notes": ""
    },
    {
      "name": "Standing Medium Kick",
      "input": "5mk",
      "startup": 12,
      "active": "12-14",
      "recovery": 18,
      "onBlock": -6,
      "onHit": -2,
      "notes": ""
    },
    {
      "name": "Standing Heavy Kick",
      "input": "5hk",
      "startup": 17,
      "active": "17-19",
      "recovery": 20,
      "onBlock": -6,
      "onHit": 3,
      "notes": "Forces a juggle state when hitting a mid-air opponent; Adds 24 frames of advantage on Punish Counter"
    },
    {
      "name": "Crouching Light Punch",
      "input": "2lp",
      "startup": 5,
      "active": "5-7",
      "recovery": 9,
      "onBlock": -1,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Punch",
      "input": "2mp",
      "startup": 12,
      "active": "12-14",
      "recovery": 16,
      "onBlock": -4,
      "onHit": 0,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Punch",
      "input": "2hp",
      "startup": 19,
      "active": "19-22",
      "recovery": 24,
      "onBlock": -12,
      "onHit": -1,
      "notes": ""
    },
    {
      "name": "Crouching Light Kick",
      "input": "2lk",
      "startup": 4,
      "active": "4-10",
      "recovery": 16,
      "onBlock": -10,
      "onHit": -5,
      "notes": ""
    },
    {
      "name": "Crouching Medium Kick",
      "input": "2mk",
      "startup": 10,
      "active": "10-22",
      "recovery": 14,
      "onBlock": -10,
      "onHit": -3,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Kick",
      "input": "2hk",
      "startup": 12,
      "active": "12-27",
      "recovery": 20,
      "onBlock": -16,
      "onHit": "",
      "notes": "Knockdown time extended when attack lands as a counter or Punish Counter"
    },
    {
      "name": "Jumping Light Punch",
      "input": "j>lp",
      "startup": 4,
      "active": "4-7",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Punch",
      "input": "j>mp",
      "startup": 9,
      "active": "9-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Heavy Punch",
      "input": "j>hp",
      "startup": 13,
      "active": "13-16",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a slam knockdown when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Light Kick",
      "input": "j>lk",
      "startup": 6,
      "active": "6-9",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Medium Kick",
      "input": "j>mk",
      "startup": 11,
      "active": "11-16",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Heavy Kick",
      "input": "j>hk",
      "startup": 10,
      "active": "10-19",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Yoga Uppercut",
      "input": "4mp",
      "startup": 8,
      "active": "8-13",
      "recovery": 16,
      "onBlock": -3,
      "onHit": 2,
      "notes": "An anti-air attack that can be canceled into special moves"
    },
    {
      "name": "Yoga Lance",
      "input": "4hp",
      "startup": 14,
      "active": "14-20",
      "recovery": 29,
      "onBlock": -16,
      "onHit": -9,
      "notes": "A punch with long reach. Useful against opponents who jump diagonally forward; Forces a juggle state when hitting a mid-air opponent on counter or Punish Counter"
    },
    {
      "name": "Nirvana Punch",
      "input": "1hp",
      "startup": 10,
      "active": "10-13",
      "recovery": 20,
      "onBlock": -3,
      "onHit": 3,
      "notes": "A damaging punch that can be canceled into special moves"
    },
    {
      "name": "Agile Kick",
      "input": "1lk",
      "startup": 5,
      "active": "5-7",
      "recovery": 10,
      "onBlock": -5,
      "onHit": 1,
      "notes": "A quick low attack that cannot be blocked standing; Can be rapid canceled"
    },
    {
      "name": "Divine Kick",
      "input": "4mk",
      "startup": 7,
      "active": "7-10",
      "recovery": 17,
      "onBlock": 0,
      "onHit": 3,
      "notes": "A quick kick that can be canceled into special moves"
    },
    {
      "name": "Thrust Kick",
      "input": "1mk",
      "startup": 8,
      "active": "8-10",
      "recovery": 20,
      "onBlock": -7,
      "onHit": -3,
      "notes": "A low attack that cannot be blocked standing and can be canceled into special moves"
    },
    {
      "name": "Yoga Mountain",
      "input": "4hk",
      "startup": 14,
      "active": "14-19",
      "recovery": 20,
      "onBlock": -9,
      "onHit": 0,
      "notes": "A kick that is useful against an opponent's neutral jumps and blows the opponent back on hit; Forces a juggle state when hitting a mid-air opponent on counter or Punish Counter"
    },
    {
      "name": "Karma Kick",
      "input": "1hk",
      "startup": 9,
      "active": "9-11",
      "recovery": 22,
      "onBlock": -7,
      "onHit": "",
      "notes": "A low attack that cannot be blocked standing and knocks an opponent down; Knockdown time extended when attack lands as a counter or Punish Counter"
    },
    {
      "name": "Yoga Mummy",
      "input": "j>2lp",
      "startup": 10,
      "active": "10",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A special-cancelable descending attack that be performed while jumping; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Drill Kick (Light)",
      "input": "j>2lk",
      "startup": 9,
      "active": "9",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A descending attack with a long duration that can be performed while jumping"
    },
    {
      "name": "Drill Kick (Medium)",
      "input": "j>2mk",
      "startup": 9,
      "active": "9",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A descending attack with a long duration that can be performed while jumping"
    },
    {
      "name": "Drill Kick (Heavy)",
      "input": "j>2hk",
      "startup": 9,
      "active": "9",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A descending attack with a long duration that can be performed while jumping"
    },
    {
      "name": "Long Sliding Kick",
      "input": "2hk",
      "startup": 12,
      "active": "12-27",
      "recovery": 20,
      "onBlock": -16,
      "onHit": "",
      "notes": "Knockdown time extended when attack lands as a counter or Punish Counter"
    },
    {
      "name": "Yoga Fire (Light)",
      "input": "236lp",
      "startup": 15,
      "active": "",
      "recovery": "",
      "onBlock": -6,
      "onHit": -2,
      "notes": "Spit a ball of flame from your mouth. Useful in combos and for checking opponents from a distance"
    },
    {
      "name": "Yoga Fire (Light Charged)",
      "input": "236[lp]",
      "startup": 43,
      "active": "",
      "recovery": "",
      "onBlock": -3,
      "onHit": "",
      "notes": "Hold the button for 29 frames and the held button version will be performed automatically"
    },
    {
      "name": "Yoga Fire (Medium)",
      "input": "236mp",
      "startup": 15,
      "active": "",
      "recovery": "",
      "onBlock": -6,
      "onHit": -2,
      "notes": "Spit a ball of flame from your mouth. Useful in combos and for checking opponents from a distance"
    },
    {
      "name": "Yoga Fire (Medium Charged)",
      "input": "236[mp]",
      "startup": 43,
      "active": "",
      "recovery": "",
      "onBlock": -3,
      "onHit": "",
      "notes": "Hold the button for 29 frames and the held button version will be performed automatically"
    },
    {
      "name": "Yoga Fire (Heavy)",
      "input": "236hp",
      "startup": 15,
      "active": "",
      "recovery": "",
      "onBlock": -6,
      "onHit": -2,
      "notes": "Spit a ball of flame from your mouth. Useful in combos and for checking opponents from a distance"
    },
    {
      "name": "Yoga Fire (Heavy Charged)",
      "input": "236[hp]",
      "startup": 43,
      "active": "",
      "recovery": "",
      "onBlock": -3,
      "onHit": "",
      "notes": "Hold the button for 29 frames and the held button version will be performed automatically"
    },
    {
      "name": "Yoga Fire (Light OD)",
      "input": "236(lp+mp)",
      "startup": 13,
      "active": "",
      "recovery": "",
      "onBlock": -3,
      "onHit": "",
      "notes": "Spit a ball of flame from your mouth. Useful in combos and for checking opponents from a distance"
    },
    {
      "name": "Yoga Fire (Medium OD)",
      "input": "236(lp+hp)",
      "startup": 13,
      "active": "",
      "recovery": "",
      "onBlock": -3,
      "onHit": "",
      "notes": "Spit a ball of flame from your mouth. Useful in combos and for checking opponents from a distance"
    },
    {
      "name": "Yoga Fire (Heavy OD)",
      "input": "236(mp+hp)",
      "startup": 13,
      "active": "",
      "recovery": "",
      "onBlock": -3,
      "onHit": "",
      "notes": "Spit a ball of flame from your mouth. Useful in combos and for checking opponents from a distance"
    },
    {
      "name": "Yoga Arch (Light)",
      "input": "236lk",
      "startup": 18,
      "active": "",
      "recovery": "",
      "onBlock": -1,
      "onHit": 1,
      "notes": "Spit a curving ball of flame from your mouth. Useful for filling space above you that's usually difficult to cover"
    },
    {
      "name": "Yoga Arch (Medium)",
      "input": "236mk",
      "startup": 18,
      "active": "",
      "recovery": "",
      "onBlock": -1,
      "onHit": 1,
      "notes": "Spit a curving ball of flame from your mouth. Useful for filling space above you that's usually difficult to cover"
    },
    {
      "name": "Yoga Arch (Heavy)",
      "input": "236hk",
      "startup": 18,
      "active": "",
      "recovery": "",
      "onBlock": -1,
      "onHit": 1,
      "notes": "Spit a curving ball of flame from your mouth. Useful for filling space above you that's usually difficult to cover"
    },
    {
      "name": "Yoga Arch (Light OD)",
      "input": "236(lk+mk)",
      "startup": 18,
      "active": "",
      "recovery": "",
      "onBlock": -3,
      "onHit": 1,
      "notes": "Spit a curving ball of flame from your mouth. Useful for filling space above you that's usually difficult to cover"
    },
    {
      "name": "Yoga Arch (Medium OD)",
      "input": "236(lk+hk)",
      "startup": 18,
      "active": "",
      "recovery": "",
      "onBlock": -3,
      "onHit": 1,
      "notes": "Spit a curving ball of flame from your mouth. Useful for filling space above you that's usually difficult to cover"
    },
    {
      "name": "Yoga Arch (Heavy OD)",
      "input": "236(mk+hk)",
      "startup": 18,
      "active": "",
      "recovery": "",
      "onBlock": -3,
      "onHit": 1,
      "notes": "Spit a curving ball of flame from your mouth. Useful for filling space above you that's usually difficult to cover"
    },
    {
      "name": "Yoga Flame (Light)",
      "input": "63214lp",
      "startup": 16,
      "active": "16-30",
      "recovery": "",
      "onBlock": -4,
      "onHit": "",
      "notes": "Blow a large ball of flames from your mouth. Can be used both in combos and as a way to check your opponent while grounded"
    },
    {
      "name": "Yoga Flame (Medium)",
      "input": "63214mp",
      "startup": 20,
      "active": "19-34",
      "recovery": "",
      "onBlock": -4,
      "onHit": "",
      "notes": "Blow a large ball of flames from your mouth. Can be used both in combos and as a way to check your opponent while grounded"
    },
    {
      "name": "Yoga Flame (Heavy)",
      "input": "63214hp",
      "startup": 26,
      "active": "26-42",
      "recovery": "",
      "onBlock": -4,
      "onHit": "",
      "notes": "Blow a large ball of flames from your mouth. Can be used both in combos and as a way to check your opponent while grounded"
    },
    {
      "name": "Yoga Flame (OD)",
      "input": "63214(pp)",
      "startup": 18,
      "active": "18-42",
      "recovery": "",
      "onBlock": -11,
      "onHit": "",
      "notes": "Blow a large ball of flames from your mouth. Can be used both in combos and as a way to check your opponent while grounded"
    },
    {
      "name": "Yoga Blast (Light)",
      "input": "63214lk",
      "startup": 12,
      "active": "12-21",
      "recovery": "",
      "onBlock": -6,
      "onHit": "",
      "notes": "Blow a large ball of flames diagonally upward. Can be used both as an early anti-air attack and in aerial combos; Clashes with projectiles"
    },
    {
      "name": "Yoga Blast (Medium)",
      "input": "63214mk",
      "startup": 15,
      "active": "15-24",
      "recovery": "",
      "onBlock": -3,
      "onHit": "",
      "notes": "Blow a large ball of flames diagonally upward. Can be used both as an early anti-air attack and in aerial combos; Clashes with projectiles"
    },
    {
      "name": "Yoga Blast (Heavy)",
      "input": "63214hk",
      "startup": 15,
      "active": "15-24",
      "recovery": "",
      "onBlock": -3,
      "onHit": "",
      "notes": "Blow a large ball of flames diagonally upward. Can be used both as an early anti-air attack and in aerial combos; Clashes with projectiles"
    },
    {
      "name": "Yoga Blast (OD)",
      "input": "63214(kk)",
      "startup": 12,
      "active": "12-21",
      "recovery": "",
      "onBlock": 0,
      "onHit": "",
      "notes": "Blow a large ball of flames diagonally upward. Can be used both as an early anti-air attack and in aerial combos; Clashes with projectiles"
    },
    {
      "name": "Yoga Comet (Light)",
      "input": "j>63214lp",
      "startup": 30,
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Blow a ball of flame from mid-air aimed toward the ground. Useful as a way to check opponents from the air"
    },
    {
      "name": "Yoga Comet (Medium)",
      "input": "j>63214mp",
      "startup": 30,
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Blow a ball of flame from mid-air aimed toward the ground. Useful as a way to check opponents from the air"
    },
    {
      "name": "Yoga Comet (Heavy)",
      "input": "j>63214hp",
      "startup": 30,
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Blow a ball of flame from mid-air aimed toward the ground. Useful as a way to check opponents from the air"
    },
    {
      "name": "Yoga Comet (OD)",
      "input": "j>63214(pp)",
      "startup": 30,
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Blow a ball of flame from mid-air aimed toward the ground. Useful as a way to check opponents from the air; Can perform moves from frame 50"
    },
    {
      "name": "Yoga Float (Immediate)",
      "input": "2(kk)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Immediately; Rise into the air and float for a moment. Jumping attacks and aerial special moves can be used while floating; Considered airborne from frame 13; Can perform moves from frame 36"
    },
    {
      "name": "Yoga Float (Forward)",
      "input": "3(kk)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Rise into the air and float for a moment. Jumping attacks and aerial special moves can be used while floating; Considered airborne on frame 13; Can perform moves from frame 36"
    },
    {
      "name": "Aerial Yoga Float",
      "input": "j>2(kk)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "While airborne, transition into a float. Jumping attacks and aerial special moves can be used while floating; Can perform moves from frame 16"
    },
    {
      "name": "Yoga Teleport (Punch)",
      "input": "6(ppp)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Used to instantaneously warp set distances. Its invincibility on startup can be used to evade attacks, and can also be used to set up an offense; Completely invincible from frames 5 - 15"
    },
    {
      "name": "Yoga Teleport (Kick)",
      "input": "6(kkk)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Used to instantaneously warp set distances. Its invincibility on startup can be used to evade attacks, and can also be used to set up an offense; Completely invincible from frames 5 - 15"
    },
    {
      "name": "Aerial Yoga Teleport (Punch)",
      "input": "j>6(ppp)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Used to instantaneously warp set distances while in the air. Jumping attacks and aerial special moves can be used after completing the teleport; Completely invincible from frames 10 - 15; Can perform moves from frame 30"
    },
    {
      "name": "Aerial Yoga Teleport (Kick)",
      "input": "j>6(kkk)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Used to instantaneously warp set distances while in the air. Jumping attacks and aerial special moves can be used after completing the teleport; Completely invincible from frames 10 - 15; Can perform moves from frame 30"
    },
    {
      "name": "Yoga Teleport (Backward)",
      "input": "4+{(ppp)|(kkk)}",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Used to instantaneously warp set distances. Its invincibility on startup can be used to evade attacks, and can also be used to set up an offense; Completely invincible from frames 5 - 15"
    },
    {
      "name": "Aerial Yoga Teleport (Backward Punch)",
      "input": "j>4(ppp)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Used to instantaneously warp set distances while in the air. Jumping attacks and aerial special moves can be used after completing the teleport; Completely invincible from frames 10 - 15; Can perform moves from frame 35"
    },
    {
      "name": "Aerial Yoga Teleport (Backward Kick)",
      "input": "j>4(kkk)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Used to instantaneously warp set distances while in the air. Jumping attacks and aerial special moves can be used after completing the teleport; Completely invincible from frames 10 - 15; Can perform moves from frame 35"
    },
    {
      "name": "Yoga Inferno (Light)",
      "input": "236236lp",
      "startup": 10,
      "active": "10-93",
      "recovery": "",
      "onBlock": -10,
      "onHit": "",
      "notes": "Blow flames in a variety of directions. Its quick execution makes it useful as a counterattack or as a way of converting normal attacks into combos. The direction of the flame will change depending on which button you input; Invincible to throws from frames 1 - 11; Minimum guaranteed damage is 30%; Values do not change on counter or Punish Counter; Deals 792 of recoverable damage on block"
    },
    {
      "name": "Yoga Inferno (Medium)",
      "input": "236236mp",
      "startup": 10,
      "active": "10-93",
      "recovery": "",
      "onBlock": -10,
      "onHit": "",
      "notes": "Blow flames in a variety of directions. Its quick execution makes it useful as a counterattack or as a way of converting normal attacks into combos. The direction of the flame will change depending on which button you input; Invincible to throws from frames 1 - 11; Minimum guaranteed damage is 30%; Values do not change on counter or Punish Counter; Deals 792 of recoverable damage on block"
    },
    {
      "name": "Yoga Inferno (Heavy)",
      "input": "236236hp",
      "startup": 10,
      "active": "10-93",
      "recovery": "",
      "onBlock": -22,
      "onHit": "",
      "notes": "Blow flames in a variety of directions. Its quick execution makes it useful as a counterattack or as a way of converting normal attacks into combos. The direction of the flame will change depending on which button you input; Invincible to throws from frames 1 - 11; Minimum guaranteed damage is 30%; Values do not change on counter or Punish Counter; Deals 792 of recoverable damage on block"
    },
    {
      "name": "Yoga Sunburst (Lv1)",
      "input": "214214*k",
      "startup": 7,
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Blow an enormous mass of flames into the air which then fall to the ground. Can be used as an anti-air attack or in combos after knocking an opponent into the air; Completely invincible from frames 1 - 9; Minimum guaranteed damage is 40%; Values do not change on counter or Punish Counter; Level 1 activates if the button is released within 139 frames"
    },
    {
      "name": "Yoga Sunburst (Lv2)",
      "input": "214214[*k]",
      "startup": 7,
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Blow an enormous mass of flames into the air which then fall to the ground. Can be used as an anti-air attack or in combos after knocking an opponent into the air; Completely invincible from frames 1 - 9; Minimum guaranteed damage is 40%; Values do not change on counter or Punish Counter; Hold the button for over 140 frames to activate the Level 2 version"
    },
    {
      "name": "Yoga Sunburst (Lv3)",
      "input": "214214[*k]",
      "startup": 7,
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Blow an enormous mass of flames into the air which then fall to the ground. Can be used as an anti-air attack or in combos after knocking an opponent into the air; Completely invincible from frames 1 - 9; Minimum guaranteed damage is 40%; Values do not change on counter or Punish Counter; Hold the button for over 188 frames to activate the Level 2 version"
    },
    {
      "name": "Merciless Yoga",
      "input": "236236*k",
      "startup": 10,
      "active": "10-14",
      "recovery": 75,
      "onBlock": -62,
      "onHit": "",
      "notes": "When under 25% vitality; A powerful move that unleashes a series of attacks followed by a devastating headbutt. Useful in combos, as an anti-air attack, or as a way to interrupt an opponent's pressure; Completely invincible from frames 1 - 14; Minimum guaranteed damage is 50%; Values do not change on counter or Punish Counter; Can only be canceled into from special moves"
    },
    {
      "name": "Merciless Yoga (Critical Art)",
      "input": "236236*k",
      "startup": 10,
      "active": "10-14",
      "recovery": 75,
      "onBlock": -62,
      "onHit": "",
      "notes": "A powerful move that unleashes a series of attacks followed by a devastating headbutt. Useful in combos, as an anti-air attack, or as a way to interrupt an opponent's pressure; Completely invincible from frames 1 - 14; Minimum guaranteed damage is 50%; Values do not change on counter or Punish Counter; Can only be canceled into from special moves"
    },
    {
      "name": "Yoga Smash",
      "input": "(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab and punch your opponent's head twice before sending them flying with a palm strike. Throws your opponent without switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Yoga Throw",
      "input": "(5lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab your opponent with both arms and toss them behind you. Throws your opponent while switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Yoga Splash",
      "input": "(2lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab an opponent's legs to disrupt their balance and send them flying. Throws your opponent without switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    }
  ],
  "ehonda": [
    {
      "name": "Standing Light Punch",
      "input": "5lp",
      "startup": 5,
      "active": "5-7",
      "recovery": 10,
      "onBlock": -1,
      "onHit": 4,
      "notes": ""
    },
    {
      "name": "Standing Medium Punch",
      "input": "5mp",
      "startup": 10,
      "active": "10-13",
      "recovery": 13,
      "onBlock": 1,
      "onHit": 6,
      "notes": ""
    },
    {
      "name": "Standing Heavy Punch",
      "input": "5hp",
      "startup": 8,
      "active": "8-14",
      "recovery": 20,
      "onBlock": -6,
      "onHit": -1,
      "notes": "Produces a crumple stun on Punish Counter if the opponent is standing on the ground; Forces a juggle state on Punish Counter when hitting a mid-air opponent; Can be canceled up until the 3rd active frame; Can be canceled by Hundred Hand Slap from frames 8 - 14 if Sumo Spirit is active"
    },
    {
      "name": "Standing Light Kick",
      "input": "5lk",
      "startup": 4,
      "active": "4-5",
      "recovery": 9,
      "onBlock": -1,
      "onHit": 5,
      "notes": ""
    },
    {
      "name": "Standing Medium Kick",
      "input": "5mk",
      "startup": 10,
      "active": "10-13",
      "recovery": 16,
      "onBlock": -3,
      "onHit": 4,
      "notes": "Can be canceled into Hundred Hand Slap if Sumo Spirit is active"
    },
    {
      "name": "Standing Heavy Kick",
      "input": "5hk",
      "startup": 8,
      "active": "8-9-11-14",
      "recovery": 22,
      "onBlock": -5,
      "onHit": -1,
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Crouching Light Punch",
      "input": "2lp",
      "startup": 4,
      "active": "4-6",
      "recovery": 10,
      "onBlock": -1,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Punch",
      "input": "2mp",
      "startup": 8,
      "active": "8-11",
      "recovery": 16,
      "onBlock": -3,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Punch",
      "input": "2hp",
      "startup": 11,
      "active": "11-14",
      "recovery": 17,
      "onBlock": -3,
      "onHit": 3,
      "notes": "Adds +2 frames of recovery on armor hit or if the attack misses; Can be canceled into Hundred Hand Slap if Sumo Spirit is active"
    },
    {
      "name": "Crouching Light Kick",
      "input": "2lk",
      "startup": 5,
      "active": "5-6",
      "recovery": 9,
      "onBlock": -3,
      "onHit": 3,
      "notes": "Can be rapid canceled; Can be canceled into Hundred Hand Slap if Sumo Spirit is active"
    },
    {
      "name": "Crouching Medium Kick",
      "input": "2mk",
      "startup": 9,
      "active": "9-11",
      "recovery": 17,
      "onBlock": -2,
      "onHit": 6,
      "notes": "Can be canceled into Hundred Hand Slap if Sumo Spirit is active"
    },
    {
      "name": "Crouching Heavy Kick",
      "input": "2hk",
      "startup": 11,
      "active": "11-13-20-24",
      "recovery": 14,
      "onBlock": -10,
      "onHit": "",
      "notes": "Knockdown time extended when attack lands as a counter or Punish Counter"
    },
    {
      "name": "Jumping Light Punch",
      "input": "j>lp",
      "startup": 5,
      "active": "5-10",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Punch",
      "input": "j>mp",
      "startup": 6,
      "active": "6-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Heavy Punch",
      "input": "{7|9}>hp",
      "startup": 9,
      "active": "9-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a slam knockdown on counter or Punish Counter when hitting a mid-air opponent"
    },
    {
      "name": "Neutral Jumping Heavy Punch",
      "input": "8>hp",
      "startup": 10,
      "active": "10-17",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Light Kick",
      "input": "j>lk",
      "startup": 6,
      "active": "6-11",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Kick",
      "input": "j>mk",
      "startup": 9,
      "active": "9-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Heavy Kick",
      "input": "j>hk",
      "startup": 10,
      "active": "10-17",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Hundred Hand Slap (Light)",
      "input": "214lp",
      "startup": 12,
      "active": "12-13-18-19-22-22-25-26-28-30-31",
      "recovery": 14,
      "onBlock": -4,
      "onHit": 2,
      "notes": "Unleash a series of high-speed slaps. Useful for creating combos from normal moves; Only the last hit can be canceled; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Sumo Spirit Hundred Hand Slap (Light)",
      "input": "214lp",
      "startup": 12,
      "active": "12-13-18-19-22-22-25-26-28-30-31",
      "recovery": 14,
      "onBlock": -4,
      "onHit": 4,
      "notes": "Unleash a series of high-speed slaps. Useful for creating combos from normal moves; Only the last hit can be canceled; Only transitions into the final hit if the 2nd hit connects; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Hundred Hand Slap (Medium)",
      "input": "214mp",
      "startup": 18,
      "active": "18-19-24-25-27-27-31-31-34-34-38-38-42-43-45-45-48-49",
      "recovery": 17,
      "onBlock": -8,
      "onHit": 2,
      "notes": "Unleash a series of high-speed slaps. Useful for creating combos from normal moves; Only the last hit can be canceled; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Sumo Spirit Hundred Hand Slap (Medium)",
      "input": "214mp",
      "startup": 18,
      "active": "18-19-24-25-27-27-31-31-34-34-38-38-42-43-45-45-48-49",
      "recovery": 17,
      "onBlock": -8,
      "onHit": 4,
      "notes": "Unleash a series of high-speed slaps. Useful for creating combos from normal moves; Only the last hit can be canceled; Only transitions into the final hit if the 5th hit connects; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Hundred Hand Slap (Heavy)",
      "input": "214hp",
      "startup": 21,
      "active": "21-22-27-28-32-32-36-36-40-40-44-44-48-48-52-52-55-55-58-58-61-61-63-64",
      "recovery": 17,
      "onBlock": -8,
      "onHit": 2,
      "notes": "Unleash a series of high-speed slaps. Useful for creating combos from normal moves; Only the last hit can be canceled; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Sumo Spirit Hundred Hand Slap (Heavy)",
      "input": "214hp",
      "startup": 21,
      "active": "21-22-27-28-32-32-36-36-40-40-44-44-48-48-52-52-55-55-58-58-61-61-63-64",
      "recovery": 17,
      "onBlock": -8,
      "onHit": 4,
      "notes": "Unleash a series of high-speed slaps. Useful for creating combos from normal moves; Only the last hit can be canceled; Only transitions into the final hit if the 8th hit connects; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Hundred Hand Slap (OD)",
      "input": "214(pp)",
      "startup": 19,
      "active": "19-22-29-30-34-35-39-40-45-46-49-50-53-54-57-58-60-61",
      "recovery": 12,
      "onBlock": -3,
      "onHit": 4,
      "notes": "Unleash a series of high-speed slaps. Useful for creating combos from normal moves; Only the last hit can be canceled; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Sumo Spirit Hundred Hand Slap (OD)",
      "input": "214(pp)",
      "startup": 19,
      "active": "19-22-29-30-34-35-39-40-45-46-49-50-53-54-57-58-60-61",
      "recovery": 12,
      "onBlock": -3,
      "onHit": 6,
      "notes": "Unleash a series of high-speed slaps. Useful for creating combos from normal moves; Only the last hit can be canceled; Only transitions into the final hit if the 5th hit connects; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Sumo Headbutt (Light)",
      "input": "[4]>6lp",
      "startup": 10,
      "active": "10-31",
      "recovery": 20,
      "onBlock": -3,
      "onHit": "",
      "notes": "Fly horizontally forward with a powerful headbutt. Useful as a surprise attack to approach your opponent, as well as a way to tack on additional hits in combos; Can be canceled until the 4th active frame; Invincible against projectiles and strikes with mid-air hitboxes from frames 4 - 13; Considered airborne from frames 14 - 33; Does 1000 damage after the 5th active frame"
    },
    {
      "name": "Sumo Headbutt (Medium)",
      "input": "[4]>6mp",
      "startup": 10,
      "active": "10-33",
      "recovery": 20,
      "onBlock": -3,
      "onHit": "",
      "notes": "Fly horizontally forward with a powerful headbutt. Useful as a surprise attack to approach your opponent, as well as a way to tack on additional hits in combos; Can be canceled until the 4th active frame; Invincible against projectiles and strikes with mid-air hitboxes from frames 5 - 13; Considered airborne from frames 14 - 35; Does 1100 damage after the 5th active frame"
    },
    {
      "name": "Sumo Headbutt (Heavy)",
      "input": "[4]>6hp",
      "startup": 14,
      "active": "14-36",
      "recovery": 20,
      "onBlock": -3,
      "onHit": "",
      "notes": "Fly horizontally forward with a powerful headbutt. Useful as a surprise attack to approach your opponent, as well as a way to tack on additional hits in combos; Can be canceled until the 4th active frame; Invincible against projectiles and strikes with mid-air hitboxes from frames 6 - 16; Considered airborne from frames 18 - 40; Does 1300 damage after the 5th active frame; If Honda and the opponent switch sides after the 19th frame, transitions into ending animation action"
    },
    {
      "name": "Sumo Headbutt (OD)",
      "input": "[4]>6(pp)",
      "startup": 9,
      "active": "9-13-14-56",
      "recovery": 20,
      "onBlock": -20,
      "onHit": "",
      "notes": "Fly horizontally forward with a powerful headbutt. Useful as a surprise attack to approach your opponent, as well as a way to tack on additional hits in combos; Super Armor for 2 hits from the 1st frame until the end of the active frames; If Honda and the opponent switch sides after the 27th frame, transitions into ending animation action; Considered airborne from frame 14; Always in Punish Counter state during execution"
    },
    {
      "name": "Sumo Smash (Light)",
      "input": "[2]>8lk",
      "startup": 11,
      "active": "11-14-41-48",
      "recovery": "",
      "onBlock": 1,
      "onHit": "",
      "notes": "Leap diagonally into the air and then descend directly downward with a hip slam. Useful as a way to launch a surprise attack while avoiding grounded attacks, and as a way to pressure an opponent's guard; Has cross-up attack properties; Produces a wall bounce only when the falling attack hits as a Punish Counter; If the falling attack hits as a cross-up, damage is 800; Produces a hard knockdown when the falling attack part hits"
    },
    {
      "name": "Sumo Smash (Medium)",
      "input": "[2]>8mk",
      "startup": 11,
      "active": "11-14-39-45",
      "recovery": "",
      "onBlock": 1,
      "onHit": "",
      "notes": "Leap diagonally into the air and then descend directly downward with a hip slam. Useful as a way to launch a surprise attack while avoiding grounded attacks, and as a way to pressure an opponent's guard; Has cross-up attack properties; Produces a wall bounce only when the falling attack hits as a Punish Counter; If the falling attack hits as a cross-up, damage is 800; Produces a hard knockdown when the falling attack part hits"
    },
    {
      "name": "Sumo Smash (Heavy)",
      "input": "[2]>8hk",
      "startup": 11,
      "active": "11-14-37-42",
      "recovery": "",
      "onBlock": 1,
      "onHit": "",
      "notes": "Leap diagonally into the air and then descend directly downward with a hip slam. Useful as a way to launch a surprise attack while avoiding grounded attacks, and as a way to pressure an opponent's guard; Has cross-up attack properties; Produces a wall bounce only when the falling attack hits as a Punish Counter; If the falling attack hits as a cross-up, damage is 800; Produces a hard knockdown when the falling attack part hits"
    },
    {
      "name": "Sumo Smash (OD)",
      "input": "[2]>8(kk)",
      "startup": 6,
      "active": "6-17-31-39",
      "recovery": "",
      "onBlock": 2,
      "onHit": "",
      "notes": "Leap diagonally into the air and then descend directly downward with a hip slam. Useful as a way to launch a surprise attack while avoiding grounded attacks, and as a way to pressure an opponent's guard; Has cross-up attack properties; Invincible against projectiles and strikes with mid-air hitboxes from frames 5 - 17; Invincible to throws from frames 5 - 13; Produces a wall bounce only when the falling attack hits as a Punish Counter; If the falling attack hits as a cross-up, damage is 800; Produces a hard knockdown when the falling attack part hits"
    },
    {
      "name": "Oicho Throw (Light)",
      "input": "63214lp",
      "startup": 7,
      "active": "7-9",
      "recovery": 52,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab your opponent by the head, slam them into the ground, and follow up with a Sumo Slam. Useful for breaking through an opponent's guard at close range; Damage set to 2300 on Punish Counter"
    },
    {
      "name": "Oicho Throw (Medium)",
      "input": "63214mp",
      "startup": 7,
      "active": "7-9",
      "recovery": 52,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab your opponent by the head, slam them into the ground, and follow up with a Sumo Slam. Useful for breaking through an opponent's guard at close range; Damage set to 2645 on Punish Counter"
    },
    {
      "name": "Oicho Throw (Heavy)",
      "input": "63214hp",
      "startup": 7,
      "active": "7-9",
      "recovery": 52,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab your opponent by the head, slam them into the ground, and follow up with a Sumo Slam. Useful for breaking through an opponent's guard at close range; With Classic Controls; Does 2760 individual damage when the attack lands as a Punish Counter; With Modern Controls; Does 2208 individual damage when the attack lands as a Punish Counter"
    },
    {
      "name": "Oicho Throw (OD)",
      "input": "63214(pp)",
      "startup": 7,
      "active": "7-9",
      "recovery": 52,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab your opponent by the head, slam them into the ground, and follow up with a Sumo Slam. Useful for breaking through an opponent's guard at close range; With Classic Controls; Does 3220 individual damage when the attack lands as a Punish Counter; With Modern Controls; Does 2576 individual damage when the attack lands as a Punish Counter"
    },
    {
      "name": "Sumo Dash",
      "input": "236*k",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Move forward with a traditional sumo shuffle. Useful for closing the distance with your opponent; Can transition to Taiho Cannon Lift or Teppo Triple Slap from frames 14 - 43"
    },
    {
      "name": "Sumo Dash (OD)",
      "input": "236(kk)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Move forward with a traditional sumo shuffle. Useful for closing the distance with your opponent; Can transition to Teppo Triple Slap from frames 13 - 27; Can transition to Taiho Cannon Lift from frames 11 - 27"
    },
    {
      "name": "Teppo Triple Slap (1)",
      "input": "*p",
      "startup": 9,
      "active": "9-11-25-27",
      "recovery": 22,
      "onBlock": -3,
      "onHit": "",
      "notes": "During Sumo Dash; A sequence of slaps performed from Sumo Dash. Useful for checking your opponent up close or as a way to continue your offensive pressure; Can only transition to the last hit on frame 34 if the attack hits"
    },
    {
      "name": "Teppo Triple Slap (2)",
      "input": "*p>*p",
      "startup": 14,
      "active": "14-16",
      "recovery": 38,
      "onBlock": -24,
      "onHit": "",
      "notes": "During Sumo Dash; A sequence of slaps performed from Sumo Dash. Useful for checking your opponent up close or as a way to continue your offensive pressure"
    },
    {
      "name": "Teppo Triple Slap (OD 1)",
      "input": "*p",
      "startup": 9,
      "active": "9-11-25-27",
      "recovery": 17,
      "onBlock": 2,
      "onHit": 3,
      "notes": "During Sumo Dash OD; A sequence of slaps performed from Sumo Dash. Useful for checking your opponent up close or as a way to continue your offensive pressure; Can transition to the final attack on the 33th frame on either hit or block."
    },
    {
      "name": "Teppo Triple Slap (OD 2)",
      "input": "*p>*p",
      "startup": 14,
      "active": "14-16",
      "recovery": 38,
      "onBlock": -24,
      "onHit": "",
      "notes": "During Sumo Dash OD; A sequence of slaps performed from Sumo Dash. Useful for checking your opponent up close or as a way to continue your offensive pressure"
    },
    {
      "name": "Taiho Cannon Lift",
      "input": "2*p",
      "startup": 12,
      "active": "12-13-31-33",
      "recovery": 32,
      "onBlock": -22,
      "onHit": "",
      "notes": "During Sumo Dash; A sequence of two strikes performed from Sumo Dash that launch an opponent into the air. Can be used to deal big damage in combos performed on opponents who have left themselves wide open; On hit, recovery is 15 frames and the total attack is 49 frames"
    },
    {
      "name": "Taiho Cannon Lift (OD)",
      "input": "2*p",
      "startup": 12,
      "active": "12-13-31-33",
      "recovery": 32,
      "onBlock": -22,
      "onHit": "",
      "notes": "During Sumo Dash OD; A sequence of two strikes performed from Sumo Dash that launch an opponent into the air. Can be used to deal big damage in combos performed on opponents who have left themselves wide open; On hit, recovery is 15 frames and the total attack is 49 frames"
    },
    {
      "name": "Neko Damashi",
      "input": "22*p",
      "startup": 11,
      "active": "11-15",
      "recovery": 14,
      "onBlock": -3,
      "onHit": 3,
      "notes": "Clap the palms of both hands together in front of your face. Not only can it be used as an attack, but it can also be used to negate projectiles; Has a clash hitbox from frames 11 - 15; Can be canceled into Hundred Hand Slap if Sumo Spirit is active"
    },
    {
      "name": "Sumo Spirit",
      "input": "22*k",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Perform a sumo kata that enhances your next Hundred Hand Slap. This enhancement will be maintained until a Hundred Hand Slap is used; Stocks Sumo Spirit on frame 51; Changes the properties of the next Hundred Hand Slap performed"
    },
    {
      "name": "Show of Force",
      "input": "236236*p",
      "startup": 7,
      "active": "7-11",
      "recovery": 48,
      "onBlock": -33,
      "onHit": "",
      "notes": "Push your opponent out of the sumo ring with a mighty shove. This move is invincible at the beginning, making it useful for turning the tables on your opponent; Invincible to strikes and projectiles from frames 1 - 11; Minimum guaranteed damage is set to 30%; Values do not change on counter or Punish Counter"
    },
    {
      "name": "Ultimate Killer Head Ram",
      "input": "[4]>646*k",
      "startup": 12,
      "active": "12-13-16-36",
      "recovery": 45,
      "onBlock": -27,
      "onHit": "",
      "notes": "Perform a headbutt followed by a sequence of slaps, and finish off with a final twisting headbutt. The initial headbutt travels a long distance, making it excellent both in combos and as a way of dealing with projectiles; Completely invincible from frames 1 - 18; Invincible to projectiles from frames 19 - 36; Transitions to hand slaps if the second hit of the headbutt connects; Transitions again during the last hit of the hand slaps; Minimum guaranteed damage is set to 40%; Values do not change on counter or Punish Counter; If Honda and the opponent switch sides after the 24th frame, transitions into ending animation action"
    },
    {
      "name": "The Final Bout",
      "input": "214214*p",
      "startup": 9,
      "active": "9-11-20-22",
      "recovery": 51,
      "onBlock": -34,
      "onHit": "",
      "notes": "When under 25% vitality; Swing your opponent in a circle to draw the outline of a sumo ring, then just as you're about to push them out of it, throw them to the ground behind you with a brutal slam. This move has long reach and comes out quickly, making it quite versatile; Completely invincible from frames 1 - 11; Minimum guaranteed damage is set to 50%; Values do not change on counter or Punish Counter"
    },
    {
      "name": "The Final Bout (Critical Art)",
      "input": "214214*p",
      "startup": 9,
      "active": "9-11-20-22",
      "recovery": 51,
      "onBlock": -34,
      "onHit": "",
      "notes": "Swing your opponent in a circle to draw the outline of a sumo ring, then just as you're about to push them out of it, throw them to the ground behind you with a brutal slam. This move has long reach and comes out quickly, making it quite versatile; Completely invincible from frames 1 - 11; Minimum guaranteed damage is set to 50%; Values do not change on counter or Punish Counter"
    },
    {
      "name": "Harai Kick",
      "input": "6hk",
      "startup": 14,
      "active": "14-16",
      "recovery": 21,
      "onBlock": -5,
      "onHit": 1,
      "notes": "A low attack with long reach that cannot be blocked standing; Forces a juggle state on Punish Counter"
    },
    {
      "name": "Power Stomp",
      "input": "3hk",
      "startup": 22,
      "active": "22-27",
      "recovery": 18,
      "onBlock": -3,
      "onHit": 3,
      "notes": "An overhead attack that cannot be blocked while crouching; Produces a floor bound and hard knockdown when hitting a mid-air opponent; Can cancel into a special move or Super Art on frame 15 when the attack misses"
    },
    {
      "name": "Flying Sumo Press",
      "input": "9>2mk",
      "startup": 11,
      "active": "11-19",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During a forward jump; A body press with an area of attack so wide that it can hit an opponent even if it crosses over them; Has cross-up attack properties"
    },
    {
      "name": "Double Slaps",
      "input": "5lp>5mp",
      "startup": 4,
      "active": "4-7",
      "recovery": 20,
      "onBlock": -10,
      "onHit": "",
      "notes": "A quick series of attacks that can be canceled into special moves"
    },
    {
      "name": "Toko Shizume",
      "input": "5mp>3hk",
      "startup": 22,
      "active": "22-27",
      "recovery": 18,
      "onBlock": -3,
      "onHit": 3,
      "notes": "A series of attacks, the second of which cannot be blocked crouching; Produces a floor bound and hard knockdown when hitting a mid-air opponent; Can cancel into a special move or Super Art on frame 14 when the attack misses; Can only be canceled into Sumo Spirit on hit"
    },
    {
      "name": "Saba Ori",
      "input": "(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Clasp both arms around your opponent's back, squeeze them, and slam them to the ground. Throws your opponent without switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Tawara Throw",
      "input": "(4lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Clasp both arms around your opponent's back and toss them behind you. Throws your opponent while switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    }
  ],
  "blanka": [
    {
      "name": "Standing Light Punch",
      "input": "5lp",
      "startup": 5,
      "active": "5-7",
      "recovery": 10,
      "onBlock": -3,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Standing Medium Punch",
      "input": "5mp",
      "startup": 10,
      "active": "10-12",
      "recovery": 15,
      "onBlock": -4,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Standing Heavy Punch",
      "input": "5hp",
      "startup": 10,
      "active": "10-16",
      "recovery": 22,
      "onBlock": -3,
      "onHit": 3,
      "notes": "Forces the opponent into a standing position"
    },
    {
      "name": "Standing Light Kick",
      "input": "5lk",
      "startup": 4,
      "active": "4-7",
      "recovery": 7,
      "onBlock": -2,
      "onHit": 5,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Standing Medium Kick",
      "input": "5mk",
      "startup": 8,
      "active": "8-10",
      "recovery": 17,
      "onBlock": -2,
      "onHit": 4,
      "notes": "3 frames of recovery added when the attack misses"
    },
    {
      "name": "Standing Heavy Kick",
      "input": "5hk",
      "startup": 7,
      "active": "7-15",
      "recovery": 18,
      "onBlock": -4,
      "onHit": 6,
      "notes": "Forces a juggle state when the attack lands as a counter or Punish Counter on a mid-air opponent; Forces the opponent into a standing position"
    },
    {
      "name": "Crouching Light Punch",
      "input": "2lp",
      "startup": 6,
      "active": "6-8",
      "recovery": 8,
      "onBlock": -2,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Punch",
      "input": "2mp",
      "startup": 9,
      "active": "9-13",
      "recovery": 16,
      "onBlock": -5,
      "onHit": -1,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Punch",
      "input": "2hp",
      "startup": 15,
      "active": "15-19",
      "recovery": 20,
      "onBlock": -5,
      "onHit": 0,
      "notes": "Forces a juggle state when the attack lands as a Punish Counter; Forces the opponent into a standing position"
    },
    {
      "name": "Crouching Light Kick",
      "input": "2lk",
      "startup": 5,
      "active": "5-6",
      "recovery": 10,
      "onBlock": -3,
      "onHit": 3,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Kick",
      "input": "2mk",
      "startup": 8,
      "active": "8-10",
      "recovery": 16,
      "onBlock": -5,
      "onHit": 5,
      "notes": "2 frames of recovery added when the attack is blocked or misses"
    },
    {
      "name": "Crouching Heavy Kick",
      "input": "2hk",
      "startup": 11,
      "active": "11-14",
      "recovery": 23,
      "onBlock": -12,
      "onHit": "",
      "notes": "Knockdown time extended when attack lands as a counter or Punish Counter"
    },
    {
      "name": "Jumping Light Punch",
      "input": "j>lp",
      "startup": 4,
      "active": "4-8",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Punch",
      "input": "j>mp",
      "startup": 7,
      "active": "7-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Heavy Punch",
      "input": "{7|9}>hp",
      "startup": 9,
      "active": "9",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a slam knockdown when hitting a mid-air opponent"
    },
    {
      "name": "Neutral Jumping Heavy Punch",
      "input": "8>hp",
      "startup": 7,
      "active": "7-9",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Light Kick",
      "input": "j>lk",
      "startup": 5,
      "active": "5-10",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Kick",
      "input": "j>mk",
      "startup": 7,
      "active": "7-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Heavy Kick",
      "input": "j>hk",
      "startup": 11,
      "active": "11-16",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Electric Thunder",
      "input": "214*p",
      "startup": 10,
      "active": "10-11-15-16-20-21",
      "recovery": 17,
      "onBlock": -3,
      "onHit": "",
      "notes": "Envelop your entire body with electricity to shock your opponent. This move executes quickly, making it useful to combo into from normal moves; Hold down the button to continue that attack"
    },
    {
      "name": "[Lightning Beast] Electric Thunder",
      "input": "214*p",
      "startup": 10,
      "active": "10-11-15-16-20-21",
      "recovery": 17,
      "onBlock": -3,
      "onHit": "",
      "notes": "Envelop your entire body with electricity to shock your opponent. This move executes quickly, making it useful to combo into from normal moves; Hold down the button to continue that attack"
    },
    {
      "name": "Electric Thunder (OD)",
      "input": "214(pp)",
      "startup": 10,
      "active": "10-11-15-16-17-18",
      "recovery": 17,
      "onBlock": 4,
      "onHit": "",
      "notes": "Envelop your entire body with electricity to shock your opponent. This move executes quickly, making it useful to combo into from normal moves; Hold down the button to continue that attack"
    },
    {
      "name": "[Lightning Beast] Electric Thunder (OD)",
      "input": "214(pp)",
      "startup": 10,
      "active": "10-11-15-16-17-18",
      "recovery": 17,
      "onBlock": 4,
      "onHit": "",
      "notes": "Envelop your entire body with electricity to shock your opponent. This move executes quickly, making it useful to combo into from normal moves; Hold down the button to continue that attack"
    },
    {
      "name": "Rolling Attack (Light)",
      "input": "[4]>6lp",
      "startup": 10,
      "active": "10-20",
      "recovery": 11,
      "onBlock": -23,
      "onHit": "",
      "notes": "Curl your body into a ball and fly forward with a spinning tackle. Useful for launching surprise attacks from far away; Considered airborne from frames 10 - 23"
    },
    {
      "name": "[Lightning Beast] Rolling Attack (Light)",
      "input": "[4]>6lp",
      "startup": 10,
      "active": "10-20",
      "recovery": 11,
      "onBlock": -21,
      "onHit": "",
      "notes": "Curl your body into a ball and fly forward with a spinning tackle. Useful for launching surprise attacks from far away; Considered airborne from frames 10 - 23; Consumes 100 of the Super Art 2 timer; Can transition to Rolling Cannon on hit or block"
    },
    {
      "name": "Rolling Attack (Medium)",
      "input": "[4]>6mp",
      "startup": 12,
      "active": "12-30",
      "recovery": 11,
      "onBlock": -23,
      "onHit": "",
      "notes": "Curl your body into a ball and fly forward with a spinning tackle. Useful for launching surprise attacks from far away; Considered airborne from frames 12 - 23; Juggle state time is extended when attack hits for a Punish Counter; Can cancel into Level 3 Super Art until active frame 11"
    },
    {
      "name": "[Lightning Beast] Rolling Attack (Medium)",
      "input": "[4]>6mp",
      "startup": 12,
      "active": "12-30",
      "recovery": 11,
      "onBlock": -21,
      "onHit": "",
      "notes": "Curl your body into a ball and fly forward with a spinning tackle. Useful for launching surprise attacks from far away; Considered airborne from frames 12 - 23; Consumes 100 of the Super Art 2 timer; Juggle state time is extended when attack hits for a Punish Counter; Can transition to Rolling Cannon on hit or block"
    },
    {
      "name": "Rolling Attack (Heavy)",
      "input": "[4]>6hp",
      "startup": 22,
      "active": "22-41",
      "recovery": 26,
      "onBlock": -15,
      "onHit": "",
      "notes": "Curl your body into a ball and fly forward with a spinning tackle. Useful for launching surprise attacks from far away; Considered airborne from frames 20 - 42; Juggle state time is extended when attack hits for a Punish Counter; Can cancel into Level 3 Super Art until active frame 6"
    },
    {
      "name": "[Lightning Beast] Rolling Attack (Heavy)",
      "input": "[4]>6hp",
      "startup": 22,
      "active": "22-41",
      "recovery": 26,
      "onBlock": -21,
      "onHit": "",
      "notes": "Curl your body into a ball and fly forward with a spinning tackle. Useful for launching surprise attacks from far away; Considered airborne from frames 20 - 42; Consumes 100 of the Super Art 2 timer; Juggle state time is extended when attack hits for a Punish Counter; Can transition to Rolling Cannon on hit or block"
    },
    {
      "name": "Rolling Attack (OD)",
      "input": "[4]>6(pp)",
      "startup": 18,
      "active": "18-39",
      "recovery": 17,
      "onBlock": -7,
      "onHit": "",
      "notes": "Curl your body into a ball and fly forward with a spinning tackle. Useful for launching surprise attacks from far away; Considered airborne from frames 18 - 41; Can cancel into Level 3 Super Art until active frame 2"
    },
    {
      "name": "[Lightning Beast] Rolling Attack (OD)",
      "input": "[4]>6(pp)",
      "startup": 18,
      "active": "18-39",
      "recovery": 17,
      "onBlock": -7,
      "onHit": "",
      "notes": "Curl your body into a ball and fly forward with a spinning tackle. Useful for launching surprise attacks from far away; Considered airborne from frames 18 - 40; Consumes 100 of the Super Art 2 timer; Can transition to Rolling Cannon on hit or block"
    },
    {
      "name": "Vertical Rolling Attack (Light)",
      "input": "[2]>8lk",
      "startup": 8,
      "active": "8-27",
      "recovery": 31,
      "onBlock": -27,
      "onHit": "",
      "notes": "Curl your body into a ball and rise upward with a spinning tackle. This move has invincibility against jumping attacks while it is rising; Considered airborne from frames 6 - 57; Invincible against projectiles and strikes with mid-air hitboxes from frames 8 - 26"
    },
    {
      "name": "[Lightning Beast] Vertical Rolling Attack (Light)",
      "input": "[2]>8lk",
      "startup": 8,
      "active": "8-27",
      "recovery": 31,
      "onBlock": -27,
      "onHit": "",
      "notes": "Curl your body into a ball and rise upward with a spinning tackle. This move has invincibility against jumping attacks while it is rising; Consumes 100 of the Super Art 2 timer; Can transition to Rolling Cannon on hit or block; Considered airborne from frames 6 - 57; Invincible against projectiles and strikes with mid-air hitboxes from frames 8 - 26"
    },
    {
      "name": "Vertical Rolling Attack (Medium)",
      "input": "[2]>8mk",
      "startup": 8,
      "active": "8-27",
      "recovery": 31,
      "onBlock": -27,
      "onHit": "",
      "notes": "Curl your body into a ball and rise upward with a spinning tackle. This move has invincibility against jumping attacks while it is rising; Considered airborne from frames 6 - 57; Invincible against projectiles and strikes with mid-air hitboxes from frames 8 - 26"
    },
    {
      "name": "[Lightning Beast] Vertical Rolling Attack (Medium)",
      "input": "[2]>8mk",
      "startup": 8,
      "active": "8-27",
      "recovery": 31,
      "onBlock": -27,
      "onHit": "",
      "notes": "Curl your body into a ball and rise upward with a spinning tackle. This move has invincibility against jumping attacks while it is rising; Consumes 100 of the Super Art 2 timer; Can transition to Rolling Cannon on hit or block; Considered airborne from frames 6 - 57; Invincible against projectiles and strikes with mid-air hitboxes from frames 8 - 26"
    },
    {
      "name": "Vertical Rolling Attack (Heavy)",
      "input": "[2]>8hk",
      "startup": 8,
      "active": "8-27",
      "recovery": 31,
      "onBlock": -27,
      "onHit": "",
      "notes": "Curl your body into a ball and rise upward with a spinning tackle. This move has invincibility against jumping attacks while it is rising; Considered airborne from frames 6 - 57; Invincible against projectiles and strikes with mid-air hitboxes from frames 8 - 26"
    },
    {
      "name": "[Lightning Beast] Vertical Rolling Attack (Heavy)",
      "input": "[2]>8hk",
      "startup": 8,
      "active": "8-27",
      "recovery": 31,
      "onBlock": -27,
      "onHit": "",
      "notes": "Curl your body into a ball and rise upward with a spinning tackle. This move has invincibility against jumping attacks while it is rising; Consumes 100 of the Super Art 2 timer; Can transition to Rolling Cannon on hit or block; Considered airborne from frames 6 - 57; Invincible against projectiles and strikes with mid-air hitboxes from frames 8 - 26"
    },
    {
      "name": "Vertical Rolling Attack (OD)",
      "input": "[2]>8(kk)",
      "startup": 7,
      "active": "7-14-17-22",
      "recovery": 31,
      "onBlock": -40,
      "onHit": "",
      "notes": "Curl your body into a ball and rise upward with a spinning tackle. This move has invincibility against jumping attacks while it is rising; Considered airborne from frames 4 - 53; Completely invincible to attacks from frames 1 - 10"
    },
    {
      "name": "[Lightning Beast] Vertical Rolling Attack (OD)",
      "input": "[2]>8(kk)",
      "startup": 7,
      "active": "7-14-17-22",
      "recovery": 31,
      "onBlock": -40,
      "onHit": "",
      "notes": "Curl your body into a ball and rise upward with a spinning tackle. This move has invincibility against jumping attacks while it is rising; Consumes 100 of the Super Art 2 timer; Can transition to Rolling Cannon on hit or block; Considered airborne from frames 4 - 53; Completely invincible to attacks from frames 1 - 10"
    },
    {
      "name": "Backstep Rolling Attack (Light)",
      "input": "63214lk",
      "startup": 41,
      "active": "41",
      "recovery": "",
      "onBlock": 3,
      "onHit": 9,
      "notes": "Take a quick step backwards, then perform a spinning tackle through the air in a triangular arc. Useful when launching an offensive intended to confuse your opponent"
    },
    {
      "name": "[Lightning Beast] Backstep Rolling Attack (Light)",
      "input": "63214lk",
      "startup": 41,
      "active": "41",
      "recovery": "",
      "onBlock": 3,
      "onHit": 9,
      "notes": "Take a quick step backwards, then perform a spinning tackle through the air in a triangular arc. Useful when launching an offensive intended to confuse your opponent; Consumes 100 of the Super Art 2 timer; Can transition to Rolling Cannon on hit or block"
    },
    {
      "name": "Backstep Rolling Attack (Medium)",
      "input": "63214mk",
      "startup": 41,
      "active": "41",
      "recovery": "",
      "onBlock": 2,
      "onHit": 8,
      "notes": "Take a quick step backwards, then perform a spinning tackle through the air in a triangular arc. Useful when launching an offensive intended to confuse your opponent"
    },
    {
      "name": "[Lightning Beast] Backstep Rolling Attack (Medium)",
      "input": "63214mk",
      "startup": 41,
      "active": "41",
      "recovery": "",
      "onBlock": 2,
      "onHit": 8,
      "notes": "Take a quick step backwards, then perform a spinning tackle through the air in a triangular arc. Useful when launching an offensive intended to confuse your opponent; Consumes 100 of the Super Art 2 timer; Can transition to Rolling Cannon on hit or block"
    },
    {
      "name": "Backstep Rolling Attack (Heavy)",
      "input": "63214hk",
      "startup": 41,
      "active": "41",
      "recovery": "",
      "onBlock": 4,
      "onHit": 8,
      "notes": "Take a quick step backwards, then perform a spinning tackle through the air in a triangular arc. Useful when launching an offensive intended to confuse your opponent"
    },
    {
      "name": "[Lightning Beast] Backstep Rolling Attack (Heavy)",
      "input": "63214hk",
      "startup": 41,
      "active": "41",
      "recovery": "",
      "onBlock": 4,
      "onHit": 8,
      "notes": "Take a quick step backwards, then perform a spinning tackle through the air in a triangular arc. Useful when launching an offensive intended to confuse your opponent; Consumes 100 of the Super Art 2 timer; Can transition to Rolling Cannon on hit or block"
    },
    {
      "name": "Backstep Rolling Attack (OD)",
      "input": "63214(kk)",
      "startup": 8,
      "active": "8-12-41-61-63-66",
      "recovery": "",
      "onBlock": 6,
      "onHit": 10,
      "notes": "Take a quick step backwards, then perform a spinning tackle through the air in a triangular arc. Useful when launching an offensive intended to confuse your opponent; First attack produces a juggle state knockdown; Can be canceled into Level 2 or 3 Super Art until the 3rd active frame of the first attack"
    },
    {
      "name": "[Lightning Beast] Backstep Rolling Attack (OD)",
      "input": "63214(kk)",
      "startup": 8,
      "active": "8-12-41-61-63-66",
      "recovery": "",
      "onBlock": 6,
      "onHit": 10,
      "notes": "Take a quick step backwards, then perform a spinning tackle through the air in a triangular arc. Useful when launching an offensive intended to confuse your opponent; First attack produces a juggle state knockdown; Consumes 100 of the Super Art 2 timer; Can transition to Rolling Cannon when the rotating part hits or is blocked"
    },
    {
      "name": "Aerial Rolling Attack (Light)",
      "input": "j>[4]>6lp",
      "startup": 13,
      "active": "13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During a jump; Quickly descend from the air with a spinning tackle. Effective when used as a surprise attack while feigning a backward jump; Has cross-up attack properties"
    },
    {
      "name": "[Lightning Beast] Aerial Rolling Attack (Light)",
      "input": "j>[4]>6lp",
      "startup": 13,
      "active": "13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Quickly descend from the air with a spinning tackle. Effective when used as a surprise attack while feigning a backward jump; Consumes 100 of the Super Art 2 timer; Can transition to Rolling Cannon on hit or block; Has cross-up attack properties"
    },
    {
      "name": "Aerial Rolling Attack (Medium)",
      "input": "j>[4]>6mp",
      "startup": 13,
      "active": "13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During a jump; Quickly descend from the air with a spinning tackle. Effective when used as a surprise attack while feigning a backward jump; Has cross-up attack properties"
    },
    {
      "name": "[Lightning Beast] Aerial Rolling Attack (Medium)",
      "input": "j>[4]>6mp",
      "startup": 13,
      "active": "13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Quickly descend from the air with a spinning tackle. Effective when used as a surprise attack while feigning a backward jump; Consumes 100 of the Super Art 2 timer; Can transition to Rolling Cannon on hit or block; Has cross-up attack properties"
    },
    {
      "name": "Aerial Rolling Attack (Heavy)",
      "input": "j>[4]>6hp",
      "startup": 13,
      "active": "13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During a jump; Quickly descend from the air with a spinning tackle. Effective when used as a surprise attack while feigning a backward jump; Has cross-up attack properties"
    },
    {
      "name": "[Lightning Beast] Aerial Rolling Attack (Heavy)",
      "input": "j>[4]>6hp",
      "startup": 13,
      "active": "13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Quickly descend from the air with a spinning tackle. Effective when used as a surprise attack while feigning a backward jump; Consumes 100 of the Super Art 2 timer; Can transition to Rolling Cannon on hit or block; Has cross-up attack properties"
    },
    {
      "name": "Aerial Rolling Attack (OD)",
      "input": "j>[4]>6(pp)",
      "startup": 13,
      "active": "13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During a jump; Quickly descend from the air with a spinning tackle. Effective when used as a surprise attack while feigning a backward jump; Has cross-up attack properties"
    },
    {
      "name": "[Lightning Beast] Aerial Rolling Attack (OD)",
      "input": "j>[4]>6(pp)",
      "startup": 13,
      "active": "13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Quickly descend from the air with a spinning tackle. Effective when used as a surprise attack while feigning a backward jump; Consumes 100 of the Super Art 2 timer; Can transition to Rolling Cannon on hit or block; Has cross-up attack properties"
    },
    {
      "name": "Wild Hunt (Light)",
      "input": "236lk",
      "startup": 34,
      "active": "34-36",
      "recovery": 57,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Leap at an opponent, pin them down, and scratch them multiple times. Useful for slipping through the guard of opponents who are committed to blocking; Considered airborne from frames 9 - 26"
    },
    {
      "name": "Wild Hunt (Medium)",
      "input": "236mk",
      "startup": 39,
      "active": "39-41",
      "recovery": 57,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Leap at an opponent, pin them down, and scratch them multiple times. Useful for slipping through the guard of opponents who are committed to blocking; Considered airborne from frames 14 - 36"
    },
    {
      "name": "Wild Hunt (Heavy)",
      "input": "236hk",
      "startup": 43,
      "active": "43-45",
      "recovery": 57,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Leap at an opponent, pin them down, and scratch them multiple times. Useful for slipping through the guard of opponents who are committed to blocking; Considered airborne from frames 18 - 36"
    },
    {
      "name": "Wild Hunt (OD)",
      "input": "236(pp)",
      "startup": 32,
      "active": "32-34",
      "recovery": 57,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Leap at an opponent, pin them down, and scratch them multiple times. Useful for slipping through the guard of opponents who are committed to blocking; Considered airborne from frames 9 - 36"
    },
    {
      "name": "Blanka-chan Bomb",
      "input": "22*p",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Toss out a Blanka-chan doll designed to resemble Blanka himself. Once it lands on the ground, touching it with an electrical special move will cause it to run toward and attack your opponent; Disappears 1000 frames after landing on the ground; Works as a projectile attack when activated by any special moves that produces electricity or comes in contact with a Super Art until the 1000th frame; The trajectory of the thrown doll changes if it touches the edge of the screen"
    },
    {
      "name": "Shout of Earth",
      "input": "236236*p",
      "startup": 8,
      "active": "8-16",
      "recovery": "",
      "onBlock": -29,
      "onHit": "",
      "notes": "Leap into the air and slam both fists into the ground, creating a powerful electric shock. Its invincibility makes it useful for turning the tables, but it is also effective in combos; Invincible to strikes and throws from frames 1 - 9; Minimum guaranteed damage is set to 30%; Values do not change on counter or Punish Counter"
    },
    {
      "name": "[Lightning Beast] Shout of Earth",
      "input": "236236*p",
      "startup": 8,
      "active": "8-16",
      "recovery": "",
      "onBlock": -29,
      "onHit": "",
      "notes": "Leap into the air and slam both fists into the ground, creating a powerful electric shock. Its invincibility makes it useful for turning the tables, but it is also effective in combos; Invincible to strikes and throws from frames 1 - 9; Minimum guaranteed damage is set to 30%; Values do not change on counter or Punish Counter"
    },
    {
      "name": "Lightning Beast",
      "input": "214214*p",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Electrically charge your own body to power up your special moves and Super Arts. It also enables the use of Rolling Cannon from all rolling-type special moves; Super Art 2 timer is set to 1500; Changes the properties of special moves except for Wild Hunt while active; Allows any Rolling-type attack to cancel into Rolling Cannon while active; Allows the following attacks to be cancel into without any directional charge; - Rolling Attack; - Vertical Rolling Attack; - Aerial Rolling Attack"
    },
    {
      "name": "Ground Shave Cannonball",
      "input": "236236*k",
      "startup": 10,
      "active": "10-12",
      "recovery": 61,
      "onBlock": -46,
      "onHit": "",
      "notes": "When under 25% vitality; Leap onto your opponent and bite them multiple times before slamming into them with an electrically charged spinning tackle. The leap performed upon activation can be used to deal with projectiles; Completely invincible from frames 1 - 12; Minimum guaranteed damage is set to 50%; Values do not change on counter or Punish Counter; Can only be canceled into from special moves"
    },
    {
      "name": "Ground Shave Cannonball (Critical Art)",
      "input": "236236*k",
      "startup": 10,
      "active": "10-12",
      "recovery": 61,
      "onBlock": -46,
      "onHit": "",
      "notes": "Leap onto your opponent and bite them multiple times before slamming into them with an electrically charged spinning tackle. The leap performed upon activation can be used to deal with projectiles; Completely invincible from frames 1 - 12; Minimum guaranteed damage is set to 50%; Values do not change on counter or Punish Counter; *Can only be canceled into from special moves"
    },
    {
      "name": "Rolling Cannon",
      "input": "d+*p",
      "startup": 3,
      "active": "3-27",
      "recovery": 9,
      "onBlock": "",
      "onHit": "",
      "notes": "A spinning attack that can be used while Lightning Beast is active. It allows for rolling-type special moves to be followed up with up to three additional attacks; Can transition into any Rolling-style attack a maximum of 3 times"
    },
    {
      "name": "Rock Crusher",
      "input": "6mp",
      "startup": 20,
      "active": "20-22",
      "recovery": 20,
      "onBlock": -3,
      "onHit": 3,
      "notes": "An overhead attack that cannot be blocked while crouching; Second attack becomes an overhead only if the first attack whiffs"
    },
    {
      "name": "Double Knee Bombs",
      "input": "6mk",
      "startup": 9,
      "active": "9-11-19-20",
      "recovery": 18,
      "onBlock": -2,
      "onHit": 6,
      "notes": "A combination attack consisting of two forward-moving knee strikes"
    },
    {
      "name": "Wild Edge",
      "input": "4mk",
      "startup": 9,
      "active": "9-14",
      "recovery": 12,
      "onBlock": 2,
      "onHit": 8,
      "notes": "A special-cancelable kick. Useful against jumping opponents"
    },
    {
      "name": "Wild Nail",
      "input": "6hp",
      "startup": 18,
      "active": "18-21",
      "recovery": 31,
      "onBlock": -15,
      "onHit": "",
      "notes": "An attack with long reach that slams an opponent into the ground. Can be followed up with a Coward Crouch on hit or on block; Can transition to Coward Crouch between frames 33 - 34; Properties change to the following when the attack lands as a Punish Counter:; - Produces a crumple stun if the opponent is standing on the ground; - Forces a floor bound if the attack hits a mid-air opponent"
    },
    {
      "name": "Amazon River Run",
      "input": "3hp",
      "startup": 14,
      "active": "14-23",
      "recovery": 22,
      "onBlock": -18,
      "onHit": "",
      "notes": "Slide along the ground toward your opponent. This is a low attack that cannot be blocked standing; Forces a Hard Knockdown on Punish Counter"
    },
    {
      "name": "Coward Crouch",
      "input": "c(pp)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Crouch in place and adopt a low stance. From this stance you can perform Wild Lift (an attack), or Raid Jump (a special jump); Hold down on the stick during the move to continue the technique for 48 more frames; During the crouch, press up on the stick to cancel the technique; Can transition to Surprise Forward Hop or Surprise Backward Hop from frames 18 - 111 (longest time)"
    },
    {
      "name": "Wild Lift",
      "input": "*p",
      "startup": 8,
      "active": "8-14",
      "recovery": 31,
      "onBlock": -21,
      "onHit": "",
      "notes": "During coward crouch; A launching attack performed from Coward Crouch"
    },
    {
      "name": "Raid Jump",
      "input": "*k",
      "startup": "",
      "active": "",
      "recovery": 43,
      "onBlock": "",
      "onHit": "",
      "notes": "During coward crouch; A forward jump performed from Coward Crouch; Considered airborne from frames 9 - 43; Can be canceled from mid-air normal attacks or special moves from frames 15 - 43"
    },
    {
      "name": "Surprise Forward Hop",
      "input": "6(kkk)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A movement technique that allows you to swiftly advance toward your opponent. Useful for surprise attacks; Can be canceled into any special-canceable normal or unique attack"
    },
    {
      "name": "Surprise Back Hop",
      "input": "4(kkk)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A movement technique that allows you to swiftly fall back and place distance between you and your opponent; Considered airborne from frames 11 - 21; Can be canceled into any special-canceable normal or unique attack"
    },
    {
      "name": "Wild Fang",
      "input": "(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Latch onto your opponent, bite them a few times, and kick off of them. Throws your opponent without switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Jungle Flip",
      "input": "(4lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Place your hands on your opponent's shoulders, climb on top of them, then send them tumbling as you kick off their back. Throws your opponent while switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Wild Bites",
      "input": "j>(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During a jump; When near opponent; Grab an airborne opponent, bite them while falling to the ground, and then bite them once again. Throws your opponent without switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    }
  ],
  "cammy": [
    {
      "name": "Standing Light Punch",
      "input": "5lp",
      "startup": 4,
      "active": "4-6",
      "recovery": 7,
      "onBlock": -2,
      "onHit": 5,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Standing Medium Punch",
      "input": "5mp",
      "startup": 6,
      "active": "6-9",
      "recovery": 13,
      "onBlock": -1,
      "onHit": 6,
      "notes": ""
    },
    {
      "name": "Standing Heavy Punch",
      "input": "5hp",
      "startup": 8,
      "active": "8-10",
      "recovery": 20,
      "onBlock": -3,
      "onHit": 2,
      "notes": ""
    },
    {
      "name": "Standing Light Kick",
      "input": "5lk",
      "startup": 5,
      "active": "5-7",
      "recovery": 10,
      "onBlock": -3,
      "onHit": 2,
      "notes": ""
    },
    {
      "name": "Standing Medium Kick",
      "input": "5mk",
      "startup": 8,
      "active": "8-10",
      "recovery": 18,
      "onBlock": -4,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Standing Heavy Kick",
      "input": "5hk",
      "startup": 11,
      "active": "11-13",
      "recovery": 21,
      "onBlock": -3,
      "onHit": 2,
      "notes": "Forces a juggle state on Punish Counter; 2 frames of recovery added when the attack misses"
    },
    {
      "name": "Crouching Light Punch",
      "input": "2lp",
      "startup": 4,
      "active": "4-5",
      "recovery": 8,
      "onBlock": -2,
      "onHit": 5,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Punch",
      "input": "2mp",
      "startup": 7,
      "active": "7-9",
      "recovery": 14,
      "onBlock": -2,
      "onHit": 5,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Punch",
      "input": "2hp",
      "startup": 10,
      "active": "10-13",
      "recovery": 15,
      "onBlock": 1,
      "onHit": 7,
      "notes": ""
    },
    {
      "name": "Crouching Light Kick",
      "input": "2lk",
      "startup": 5,
      "active": "5-7",
      "recovery": 7,
      "onBlock": -2,
      "onHit": 3,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Kick",
      "input": "2mk",
      "startup": 8,
      "active": "8-10",
      "recovery": 18,
      "onBlock": -5,
      "onHit": 1,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Kick",
      "input": "2hk",
      "startup": 9,
      "active": "9-11",
      "recovery": 24,
      "onBlock": -10,
      "onHit": "",
      "notes": "Forces a Hard Knock Down when hitting an opponent on the ground; Knockdown time extended when attack lands as a counter or Punish Counter; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Light Punch",
      "input": "j>lp",
      "startup": 4,
      "active": "4-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Punch",
      "input": "j>mp",
      "startup": 6,
      "active": "6-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Heavy Punch",
      "input": "j>hp",
      "startup": 8,
      "active": "8-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a slam knockdown when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Light Kick",
      "input": "j>lk",
      "startup": 4,
      "active": "4-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Medium Kick",
      "input": "j>mk",
      "startup": 7,
      "active": "7-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Heavy Kick",
      "input": "j>hk",
      "startup": 10,
      "active": "10-15",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Lift Uppercut",
      "input": "4mp",
      "startup": 5,
      "active": "5-9",
      "recovery": 12,
      "onBlock": -1,
      "onHit": 4,
      "notes": "A quick uppercut. Useful against jumping opponents"
    },
    {
      "name": "Delayed Ripper",
      "input": "6hk",
      "startup": 18,
      "active": "18-20",
      "recovery": 25,
      "onBlock": -12,
      "onHit": "",
      "notes": "A kick unleashed after stepping backward. Can be canceled into special moves; Increase juggle state time when attack lands as a Punish Counter"
    },
    {
      "name": "Assault Blade",
      "input": "4hk",
      "startup": 9,
      "active": "9-11",
      "recovery": 18,
      "onBlock": -7,
      "onHit": "",
      "notes": "A launching kick that can be canceled into special moves. It can be jumped out of on hit; Can only be canceled into a jump if the attack hits"
    },
    {
      "name": "Lift Combination",
      "input": "4mp>hk",
      "startup": 9,
      "active": "9-11",
      "recovery": 23,
      "onBlock": -12,
      "onHit": "",
      "notes": "A two-hit combination attack that can be canceled into special moves. If it connects, the second hit can be jumped out of; Can only be canceled into a jump if the attack hits"
    },
    {
      "name": "Swing Combination",
      "input": "5hp>5hk",
      "startup": 13,
      "active": "13-15-29-31",
      "recovery": 29,
      "onBlock": -12,
      "onHit": "",
      "notes": "A series of attacks, the first and second of which can be canceled into special moves; Only the first hit can be canceled into a special move"
    },
    {
      "name": "Spiral Arrow (Light)",
      "input": "236lk",
      "startup": 9,
      "active": "9-21",
      "recovery": 21,
      "onBlock": -12,
      "onHit": "",
      "notes": "A spinning kick with both legs that travels low along the ground. Useful for launching surprise attacks from a distance or used out of normal moves to create combos; Considered airborne from frames 9 - 24"
    },
    {
      "name": "Spiral Arrow (Medium)",
      "input": "236mk",
      "startup": 9,
      "active": "9-23",
      "recovery": 21,
      "onBlock": -14,
      "onHit": "",
      "notes": "A spinning kick with both legs that travels low along the ground. Useful for launching surprise attacks from a distance or used out of normal moves to create combos; Considered airborne from frames 9 - 26"
    },
    {
      "name": "Spiral Arrow (Heavy)",
      "input": "236hk",
      "startup": 15,
      "active": "15-17-19-30",
      "recovery": 21,
      "onBlock": -12,
      "onHit": "",
      "notes": "A spinning kick with both legs that travels low along the ground. Useful for launching surprise attacks from a distance or used out of normal moves to create combos; Considered airborne from frames 18 - 33"
    },
    {
      "name": "Spiral Arrow (Charged)",
      "input": "236+[hk]",
      "startup": 27,
      "active": "27-29-31-33-34-36-37-39-40-42",
      "recovery": 20,
      "onBlock": -14,
      "onHit": "",
      "notes": "A spinning kick with both legs that travels low along the ground. Useful for launching surprise attacks from a distance or used out of normal moves to create combos; Hold the button for more than 16 frames to change its properties; Considered airborne from frames 30 - 45"
    },
    {
      "name": "Spiral Arrow (OD)",
      "input": "236(kk)",
      "startup": 13,
      "active": "13-15-17-19-20-22-23-25-26-28",
      "recovery": 20,
      "onBlock": -14,
      "onHit": "",
      "notes": "A spinning kick with both legs that travels low along the ground. Useful for launching surprise attacks from a distance or used out of normal moves to create combos; Considered airborne from frames 16 - 32"
    },
    {
      "name": "Cannon Spike (Light)",
      "input": "623lk",
      "startup": 5,
      "active": "5-16",
      "recovery": 24,
      "onBlock": -36,
      "onHit": "",
      "notes": "From a low stance, kick upward while rising into the air. It is invincible against jumping attacks, making it useful as an anti-air attack; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 14; Considered airborne from frames 7 - 40; Does 800 individual damage after the 3rd active frame"
    },
    {
      "name": "Cannon Spike (Medium)",
      "input": "623mk",
      "startup": 6,
      "active": "6-17",
      "recovery": 25,
      "onBlock": -36,
      "onHit": "",
      "notes": "From a low stance, kick upward while rising into the air. It is invincible against jumping attacks, making it useful as an anti-air attack; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 9; Considered airborne from frames 8 - 42; Does 800 individual damage after the 3rd active frame"
    },
    {
      "name": "Cannon Spike (Heavy)",
      "input": "623hk",
      "startup": 7,
      "active": "7-18",
      "recovery": 28,
      "onBlock": -36,
      "onHit": "",
      "notes": "From a low stance, kick upward while rising into the air. It is invincible against jumping attacks, making it useful as an anti-air attack; Hold down the button for over 23 frames to change its properties; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 8; Considered airborne from frames 10 - 36; Does 800 individual damage from the 3rd active frame and on"
    },
    {
      "name": "Cannon Spike (Charged)",
      "input": "623+[hk]",
      "startup": 24,
      "active": "24-35",
      "recovery": 29,
      "onBlock": -40,
      "onHit": "",
      "notes": "From a low stance, kick upward while rising into the air. It is invincible against jumping attacks, making it useful as an anti-air attack; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 7; Completely invincible from frames 20 - 25; Considered airborne from frames 26 - 64; Does 900 individual damage after the 5th active frame"
    },
    {
      "name": "Cannon Spike (OD)",
      "input": "623(kk)",
      "startup": 6,
      "active": "6-17",
      "recovery": 30,
      "onBlock": -40,
      "onHit": "",
      "notes": "From a low stance, kick upward while rising into the air. It is invincible against jumping attacks, making it useful as an anti-air attack; Completely invincible from frames 1 - 7; Considered airborne from frames 8 - 47; Does 900 individual damage after the 5th active frame"
    },
    {
      "name": "Quick Spin Knuckle (Light)",
      "input": "214lp",
      "startup": 21,
      "active": "21-24",
      "recovery": 16,
      "onBlock": -3,
      "onHit": 2,
      "notes": "Take a spinning hop forward and strike with the back of your fist. Useful for continuing your offensive pressure or as a way to slip through an opponent's guard"
    },
    {
      "name": "Quick Spin Knuckle (Medium)",
      "input": "214mp",
      "startup": 24,
      "active": "24-27",
      "recovery": 16,
      "onBlock": -2,
      "onHit": 3,
      "notes": "Take a spinning hop forward and strike with the back of your fist. Useful for continuing your offensive pressure or as a way to slip through an opponent's guard; Invincible to projectiles from frames 9 - 23"
    },
    {
      "name": "Quick Spin Knuckle (Heavy)",
      "input": "214hp",
      "startup": 28,
      "active": "28-31",
      "recovery": 17,
      "onBlock": 3,
      "onHit": 5,
      "notes": "Take a spinning hop forward and strike with the back of your fist. Useful for continuing your offensive pressure or as a way to slip through an opponent's guard; Invincible to projectiles from frames 9 - 27"
    },
    {
      "name": "Quick Spin Knuckle (OD)",
      "input": "214(pp)",
      "startup": 25,
      "active": "25-28",
      "recovery": 17,
      "onBlock": -2,
      "onHit": 7,
      "notes": "Take a spinning hop forward and strike with the back of your fist. Useful for continuing your offensive pressure or as a way to slip through an opponent's guard; Invincible to projectiles from frames 3 - 24; When performed at close range, Cammy will go behind her opponent and attack. In this situation, start up is 3 frames later"
    },
    {
      "name": "Cannon Strike",
      "input": "9>214*k",
      "startup": 13,
      "active": "13-23",
      "recovery": "",
      "onBlock": -5,
      "onHit": 1,
      "notes": "A descending kick performed while airborne. Useful as a way to approach an opponent or as a means of continuing your offensive pressure; Recovery value difference is when the attack is performed at its fastest"
    },
    {
      "name": "Cannon Strike (OD)",
      "input": "9>214(kk)",
      "startup": 13,
      "active": "13-22",
      "recovery": "",
      "onBlock": -2,
      "onHit": 2,
      "notes": "A descending kick performed while airborne. Useful as a way to approach an opponent or as a means of continuing your offensive pressure; Recovery value difference is when the attack is performed at its fastest"
    },
    {
      "name": "Hooligan Combination",
      "input": "236*p",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Perform a spinning jump through the air in a parabolic arc. While airborne, many other moves can be performed out of this one; From frame 21 until landing, can be canceled into any offshoot attacks except for Razor\u2019s Edge Slicer on frame 7 or later. Is considered airborne"
    },
    {
      "name": "Razor's Edge Slicer",
      "input": "5",
      "startup": 10,
      "active": "10-18",
      "recovery": 13,
      "onBlock": 2,
      "onHit": "",
      "notes": "A low kick performed after landing from Hooligan Combination. This move is performed if nothing is input during the Hooligan Combination"
    },
    {
      "name": "Hooligan Cannon Strike",
      "input": "*k",
      "startup": 13,
      "active": "13-23",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During hooligan combination; A descending kick performed from Hooligan Combination. If you cross over your opponent before activating this move, the kick will automatically turn around so it heads toward your opponent; Recovery changes depending on the height of the attack when it hits or is blocked"
    },
    {
      "name": "Reverse Edge",
      "input": "2*k",
      "startup": 18,
      "active": "18-21",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During hooligan combination; A downward kick performed from Hooligan Combination. It is an overhead attack that cannot be blocked crouching, making it useful for breaking through an opponent's guard; Recovery changes depending on the height of the attack when it hits or is blocked"
    },
    {
      "name": "Fatal Leg Twister",
      "input": "(lplk)",
      "startup": 10,
      "active": "10-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During hooligan combination; When close to a standing opponent; A throw performed from Hooligan Combination. It can grab opponents who are standing while on the ground and does massive damage"
    },
    {
      "name": "Silent Step",
      "input": "*p",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During hooligan combination; A quick descent performed from Hooligan Combination. This fast maneuver is useful as a feint after making an opponent think you're about to attack"
    },
    {
      "name": "Hooligan Combination (Charged)",
      "input": "236+[hp]",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Perform a spinning jump through the air in a parabolic arc. While airborne, many other moves can be performed out of this one; Hold the button for more than 18 frames to change its properties; From frame 41 until landing, can be canceled into any offshoot attacks except for Razor\u2019s Edge Slicer on frame 27 or later. Is considered airborne"
    },
    {
      "name": "Razor's Edge Slicer (Charged)",
      "input": "5",
      "startup": 10,
      "active": "10-18-29-33",
      "recovery": 17,
      "onBlock": 2,
      "onHit": "",
      "notes": "A low kick performed after landing from Hooligan Combination. This move is performed if nothing is input during the Hooligan Combination; Only the final attack can be canceled into a Level 3 Super Art or Critical Art"
    },
    {
      "name": "Hooligan Cannon Strike (Charged)",
      "input": "*k",
      "startup": 13,
      "active": "13-22",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A descending kick performed from Hooligan Combination. If you cross over your opponent before activating this move, the kick will automatically turn around so it heads toward your opponent; Recovery changes depending on the height of the attack when it hits or is blocked"
    },
    {
      "name": "Reverse Edge (Charged)",
      "input": "2*k",
      "startup": 18,
      "active": "18-21-36-39",
      "recovery": "",
      "onBlock": -2,
      "onHit": 8,
      "notes": "A downward kick performed from Hooligan Combination. It is an overhead attack that cannot be blocked crouching, making it useful for breaking through an opponent's guard"
    },
    {
      "name": "Fatal Leg Twister (Charged)",
      "input": "(lplk)",
      "startup": 10,
      "active": "10-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A throw performed from Hooligan Combination. It can grab opponents who are standing while on the ground and does massive damage"
    },
    {
      "name": "Silent Step (Charged)",
      "input": "*p",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A quick descent performed from Hooligan Combination. This fast maneuver is useful as a feint after making an opponent think you're about to attack"
    },
    {
      "name": "Hooligan Combination (OD)",
      "input": "236(pp)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Perform a spinning jump through the air in a parabolic arc. While airborne, many other moves can be performed out of this one; From frame 21 until landing, can be canceled into any offshoot attacks except for Overdrive Razor\u2019s Edge Slicer on frame 7 or later. Is considered airborne"
    },
    {
      "name": "Razor's Edge Slicer (OD)",
      "input": "5",
      "startup": 10,
      "active": "10-18-29-33",
      "recovery": 17,
      "onBlock": 2,
      "onHit": "",
      "notes": "A low kick performed after landing from Hooligan Combination. This move is performed if nothing is input during the Hooligan Combination; Only the final attack can be canceled into a Level 3 Super Art or Critical Art"
    },
    {
      "name": "Hooligan Cannon Strike (OD)",
      "input": "*k",
      "startup": 13,
      "active": "13-22",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A descending kick performed from Hooligan Combination. If you cross over your opponent before activating this move, the kick will automatically turn around so it heads toward your opponent; Recovery changes depending on the height of the attack when it hits or is blocked"
    },
    {
      "name": "Reverse Edge (OD)",
      "input": "236(pp)>2*k",
      "startup": 18,
      "active": "18-21-36-39",
      "recovery": "",
      "onBlock": -2,
      "onHit": 8,
      "notes": "A downward kick performed from Hooligan Combination. It is an overhead attack that cannot be blocked crouching, making it useful for breaking through an opponent's guard"
    },
    {
      "name": "Fatal Leg Twister (OD)",
      "input": "(lplk)",
      "startup": 10,
      "active": "10-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A throw performed from Hooligan Combination. It can grab opponents who are standing while on the ground and does massive damage"
    },
    {
      "name": "Silent Step (OD)",
      "input": "*p",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A quick descent performed from Hooligan Combination. This fast maneuver is useful as a feint after making an opponent think you're about to attack"
    },
    {
      "name": "Spin Drive Smasher",
      "input": "236236*k",
      "startup": 9,
      "active": "9-19",
      "recovery": 38,
      "onBlock": -24,
      "onHit": "",
      "notes": "A forward-moving combination attack consisting of a Spiral Arrow followed by a Cannon Spike. It has invincibility on startup, making it useful for turning the tables; Invincible to strikes and throws from frame 1 to frame 11.; The 6th attack is only performed if the 5th attack hits"
    },
    {
      "name": "Killer Bee Spin",
      "input": "214214*k",
      "startup": 13,
      "active": "13-21",
      "recovery": 37,
      "onBlock": -24,
      "onHit": "",
      "notes": "Jump into the air, seize your opponent with a quick descending kick, and perform a chokehold on them. This move executes quickly, making it easy to combo into from grounded moves; Attack does not transition into the cinematic attack when hitting an airborne opponent; Damage is 220 x n (multiple hits until Cammy lands on the ground)"
    },
    {
      "name": "Aerial Killer Bee Spin",
      "input": "9>214214*k",
      "startup": 13,
      "active": "13",
      "recovery": 37,
      "onBlock": -23,
      "onHit": "",
      "notes": "During a forward jump; Performed while airborne, seize your opponent with a quick descending kick and perform a chokehold on them. Easy to combo into from aerial specials; Attack does not transition into the cinematic attack when hitting an airborne opponent; Damage is 220 x n (multiple hits until Cammy lands on the ground)"
    },
    {
      "name": "Delta Red Assault",
      "input": "236236*p",
      "startup": 9,
      "active": "9-23",
      "recovery": 4,
      "onBlock": -33,
      "onHit": "",
      "notes": "When under 25% vitality; Send your opponent to their knees with a series of high-speed attacks and finish with a powerful kick. A highly versatile move, useful both in combos and as a way of dealing with projectiles; Completely invincible from frames 1 - 13; Considered airborn from frames 9 - 27; Minimum guaranteed damage is set to 50%; Values do not change on counter or Punish Counter; Can only be canceled into from special moves"
    },
    {
      "name": "Delta Red Assault (Critical Art)",
      "input": "236236*p",
      "startup": 9,
      "active": "9-23",
      "recovery": 4,
      "onBlock": -33,
      "onHit": "",
      "notes": "Send your opponent to their knees with a series of high-speed attacks and finish with a powerful kick. A highly versatile move, useful both in combos and as a way of dealing with projectiles; Completely invincible from frames 1 - 13; Considered airborn from frames 9 - 27; Minimum guaranteed damage is set to 50%; Values do not change on counter or Punish Counter; *Can only be canceled into from special moves"
    },
    {
      "name": "Rough Landing",
      "input": "(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Latch onto your opponent and whirl around them before smashing their face into the ground. Throws your opponent without switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Delta Throw",
      "input": "(2lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab your opponent's head between your legs and perform a spin that tosses them behind you, switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Leg Scissors Choke",
      "input": "j>(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During a jump; When near opponent; Grab an airborne opponent between your legs and drive their head into the ground. Throws your opponent without switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    }
  ],
  "deejay": [
    {
      "name": "Standing Light Punch",
      "input": "5lp",
      "startup": 4,
      "active": "4-6",
      "recovery": 6,
      "onBlock": -1,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Standing Medium Punch",
      "input": "5mp",
      "startup": 7,
      "active": "7-8",
      "recovery": 13,
      "onBlock": 2,
      "onHit": 5,
      "notes": ""
    },
    {
      "name": "Standing Heavy Punch",
      "input": "5hp",
      "startup": 9,
      "active": "9-14",
      "recovery": 18,
      "onBlock": -4,
      "onHit": 3,
      "notes": "Can be canceled up until the 2nd active frame; Forces the opponent into a standing position"
    },
    {
      "name": "Standing Light Kick",
      "input": "5lk",
      "startup": 5,
      "active": "5-6",
      "recovery": 12,
      "onBlock": -2,
      "onHit": 2,
      "notes": ""
    },
    {
      "name": "Standing Medium Kick",
      "input": "5mk",
      "startup": 9,
      "active": "9-11",
      "recovery": 16,
      "onBlock": -1,
      "onHit": 6,
      "notes": ""
    },
    {
      "name": "Standing Heavy Kick",
      "input": "5hk",
      "startup": 12,
      "active": "12-14",
      "recovery": 22,
      "onBlock": -5,
      "onHit": 1,
      "notes": "4 frames of recovery are added if the attack misses; Adds +18 of frame advantage on Punish Counter"
    },
    {
      "name": "Crouching Light Punch",
      "input": "2lp",
      "startup": 5,
      "active": "5-7",
      "recovery": 8,
      "onBlock": -1,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Punch",
      "input": "2mp",
      "startup": 6,
      "active": "6-9",
      "recovery": 14,
      "onBlock": -1,
      "onHit": 4,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Punch",
      "input": "2hp",
      "startup": 8,
      "active": "8-9",
      "recovery": 20,
      "onBlock": -2,
      "onHit": 6,
      "notes": "Adds +12 of frame advantage on Punish Counter"
    },
    {
      "name": "Crouching Light Kick",
      "input": "2lk",
      "startup": 5,
      "active": "5-6",
      "recovery": 10,
      "onBlock": -2,
      "onHit": 2,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Kick",
      "input": "2mk",
      "startup": 8,
      "active": "8-11",
      "recovery": 19,
      "onBlock": -6,
      "onHit": "",
      "notes": "Forces a Hard Knockdown on Punish Counter"
    },
    {
      "name": "Crouching Heavy Kick",
      "input": "2hk",
      "startup": 14,
      "active": "14-23",
      "recovery": 15,
      "onBlock": -11,
      "onHit": "",
      "notes": "Knockdown time extended when attack lands as a counter or Punish Counter"
    },
    {
      "name": "Jumping Light Punch",
      "input": "j>lp",
      "startup": 4,
      "active": "4-10",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Punch",
      "input": "j>mp",
      "startup": 6,
      "active": "6-9",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Heavy Punch",
      "input": "j>hp",
      "startup": 9,
      "active": "9-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a slam knockdown when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Light Kick",
      "input": "j>lk",
      "startup": 4,
      "active": "4-9",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Kick",
      "input": "j>mk",
      "startup": 8,
      "active": "8-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Heavy Kick",
      "input": "j>hk",
      "startup": 10,
      "active": "10-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Knee Shot",
      "input": "j>2lk",
      "startup": 6,
      "active": "6",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "An attack that stays active for a long time and allows you to move first even if it is blocked"
    },
    {
      "name": "Sunrise Heel",
      "input": "6mk",
      "startup": 19,
      "active": "19-23",
      "recovery": 16,
      "onBlock": 1,
      "onHit": 5,
      "notes": "An axe kick with long reach that allows you to move first even if it is blocked; Forces a slam knockdown when hitting a mid-air opponent"
    },
    {
      "name": "Face Breaker",
      "input": "6hk",
      "startup": 7,
      "active": "7-8-9-12",
      "recovery": 20,
      "onBlock": -5,
      "onHit": 1,
      "notes": "A multi-hit kick that can be canceled into special moves; Does 800 individual damage when the attack lands on a mid-air opponent; Forces a juggle state when the first attack lands on a mid-air opponent; Forces the opponent into a standing position"
    },
    {
      "name": "Threebeat Combo (2)",
      "input": "lp>mk",
      "startup": 9,
      "active": "9-11",
      "recovery": 20,
      "onBlock": -3,
      "onHit": 2,
      "notes": "A quick combination attack that hits multiple times"
    },
    {
      "name": "Threebeat Combo (3)",
      "input": "lp>mk>mk",
      "startup": 14,
      "active": "14-16",
      "recovery": 19,
      "onBlock": -8,
      "onHit": 3,
      "notes": "A quick combination attack that hits multiple times"
    },
    {
      "name": "Dee Jay Special (2)",
      "input": "mp>hp",
      "startup": 11,
      "active": "11-17",
      "recovery": 24,
      "onBlock": -11,
      "onHit": -2,
      "notes": "A series of attacks, the third of which can be canceled into Super Arts; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Dee Jay Special (3)",
      "input": "mp>hp>hk",
      "startup": 13,
      "active": "13-15",
      "recovery": 30,
      "onBlock": -13,
      "onHit": "",
      "notes": "A series of attacks, the third of which can be canceled into Super Arts"
    },
    {
      "name": "Funky Dance (2)",
      "input": "mp>mp",
      "startup": 12,
      "active": "12-13",
      "recovery": 17,
      "onBlock": -2,
      "onHit": 2,
      "notes": "A multi-hit attack that doesn't leave you wide open even if stopped partway through; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Funky Dance (3)",
      "input": "mp>mp>hp",
      "startup": 20,
      "active": "20-21",
      "recovery": 24,
      "onBlock": -8,
      "onHit": "",
      "notes": "A multi-hit attack that doesn't leave you wide open even if stopped partway through"
    },
    {
      "name": "Funky Dance Feint",
      "input": "mp>mp>4hp",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A sequence of two attacks into a feint. Useful for confusing an opponent"
    },
    {
      "name": "Party in the Air",
      "input": "j>mp>hp",
      "startup": 8,
      "active": "8-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A combination attack that is useful against jumping opponents; Forces a slam knockdown when hitting a mid-air opponent"
    },
    {
      "name": "Speedy Maracas",
      "input": "22(pp)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A special move that builds your Super Art Gauge for as long as the command used to perform it is held; Super Art gauge increases by 2000 on frame 22; Super Art gauge increases by 49 every frame after frame 46; Extend the move by holding down the button during its execution"
    },
    {
      "name": "Air Slasher (Light)",
      "input": "[4]>6lp",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Produce a forward-moving shockwave with a high-speed uppercut. Useful for checking opponents at range"
    },
    {
      "name": "Air Slasher (Medium)",
      "input": "[4]>6mp",
      "startup": 17,
      "active": "",
      "recovery": "",
      "onBlock": -5,
      "onHit": 0,
      "notes": "Produce a forward-moving shockwave with a high-speed uppercut. Useful for checking opponents at range; Can be canceled into Speedy Maracas on frame 23"
    },
    {
      "name": "Air Slasher (Heavy)",
      "input": "[4]>6hp",
      "startup": 17,
      "active": "",
      "recovery": "",
      "onBlock": -3,
      "onHit": 3,
      "notes": "Produce a forward-moving shockwave with a high-speed uppercut. Useful for checking opponents at range; Can be canceled into Speedy Maracas on frames 35 - 36"
    },
    {
      "name": "Air Slasher (OD)",
      "input": "[4]>6(pp)",
      "startup": 10,
      "active": "",
      "recovery": "",
      "onBlock": 2,
      "onHit": 5,
      "notes": "Produce a forward-moving shockwave with a high-speed uppercut. Useful for checking opponents at range; Can be canceled into Speedy Maracas on frames 31"
    },
    {
      "name": "Air Slasher Projectile (OD)",
      "input": "[4]>6(pp)",
      "startup": 22,
      "active": "",
      "recovery": "",
      "onBlock": 9,
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jackknife Maximum (Light)",
      "input": "[2]>8lk",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Unleash a series of kicks while jumping diagonally upwards. Useful in combos and as an anti-air attack; Considered airborne from frames 6 - 45; Can be canceled into a normal jumping attack or a unique attack from frames 23 - 40"
    },
    {
      "name": "Jackknife Maximum (Medium)",
      "input": "[2]>8mk",
      "startup": 6,
      "active": "6-8-19-22",
      "recovery": 22,
      "onBlock": -32,
      "onHit": "",
      "notes": "Unleash a series of kicks while jumping diagonally upwards. Useful in combos and as an anti-air attack; Considered airborne from frames 4 - 44; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 5; Invincible to throws from frames 5 - 6"
    },
    {
      "name": "Jackknife Maximum (Heavy)",
      "input": "[2]>8hk",
      "startup": 6,
      "active": "6-9-18-22-31-34",
      "recovery": 17,
      "onBlock": -44,
      "onHit": "",
      "notes": "Unleash a series of kicks while jumping diagonally upwards. Useful in combos and as an anti-air attack; Considered airborne from frames 4 - 51; Invincible against projectiles and strikes with mid-air hitboxes from frames 1- 9"
    },
    {
      "name": "Jackknife Maximum (OD)",
      "input": "[2]>8(kk)",
      "startup": 6,
      "active": "6-11-19-21-31-33-49-51-61-64",
      "recovery": 29,
      "onBlock": -55,
      "onHit": "",
      "notes": "Unleash a series of kicks while jumping diagonally upwards. Useful in combos and as an anti-air attack; Will only transition into the 4th and later attacks if the first three attacks hit; Completely invincible from frames 1 - 11; Considered airborne from frames 2 - 62 (on block, or if the attack misses)"
    },
    {
      "name": "Roll Through Feint",
      "input": "236lk",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Spin forward while feinting a kicking attack. Useful for confusing opponents at close range"
    },
    {
      "name": "Quick Rolling Sobat",
      "input": "236mk",
      "startup": 12,
      "active": "12-14",
      "recovery": 23,
      "onBlock": -6,
      "onHit": "",
      "notes": "Unleash a fierce spinning kick while moving forward. When used to check an opponent while vying for position, it is most effective when the tip of the foot connects with the opponent"
    },
    {
      "name": "Double Rolling Sobat",
      "input": "236hk",
      "startup": 15,
      "active": "15-17-36-39",
      "recovery": 24,
      "onBlock": -10,
      "onHit": 2,
      "notes": "Unleash two fierce spinning kicks while moving forward. Its high damage makes it a potent way to finish combos"
    },
    {
      "name": "Double Rolling Sobat (OD)",
      "input": "236(kk)",
      "startup": 19,
      "active": "19-20-30-32",
      "recovery": 19,
      "onBlock": -2,
      "onHit": "",
      "notes": "Unleash two fierce spinning kicks while moving forward. Its high damage makes it a potent way to finish combos; Can be canceled into a Level 2 or 3 Super Art or Critical Art only on the 2nd attack"
    },
    {
      "name": "Machine Gun Uppercut (Light)",
      "input": "214lp",
      "startup": 15,
      "active": "15-18",
      "recovery": 35,
      "onBlock": -19,
      "onHit": "",
      "notes": "A series of high-speed uppercuts. Slow to execute, but does massive damage if you manage to land it; Will only transition to the next attacks if the first attack hits"
    },
    {
      "name": "Machine Gun Uppercut (Medium)",
      "input": "214mp",
      "startup": 22,
      "active": "22-25",
      "recovery": 35,
      "onBlock": -19,
      "onHit": "",
      "notes": "A series of high-speed uppercuts. Slow to execute, but does massive damage if you manage to land it; Will only transition to the next attacks if the first attack hits"
    },
    {
      "name": "Machine Gun Uppercut (Heavy)",
      "input": "214hp",
      "startup": 28,
      "active": "28-31",
      "recovery": 35,
      "onBlock": -19,
      "onHit": "",
      "notes": "A series of high-speed uppercuts. Slow to execute, but does massive damage if you manage to land it; Will only transition to the next attacks if the first attack hits"
    },
    {
      "name": "Machine Gun Uppercut (OD)",
      "input": "214(pp)",
      "startup": 28,
      "active": "28-31",
      "recovery": 35,
      "onBlock": -19,
      "onHit": "",
      "notes": "A series of high-speed uppercuts. Slow to execute, but does massive damage if you manage to land it; Will only transition to the next attacks if the first attack hits; The final attack forces a Hard Knockdown"
    },
    {
      "name": "Jus Cool",
      "input": "214*k",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A retreating sway that can lead into kicking attacks or forward-moving maneuvers; Can transition into branching attacks from frames 13 - 24"
    },
    {
      "name": "Funky Slicer",
      "input": "lk",
      "startup": 12,
      "active": "12-14",
      "recovery": 22,
      "onBlock": -15,
      "onHit": 2,
      "notes": "A low attack performed from Jus Cool that cannot be blocked standing. It is very quick, making it easy to use in combos or as a way of checking your opponent; 2 frames of recovery subtracted when attack is blocked; Adds +3 frames of recovery on armor hit or if the attack misses"
    },
    {
      "name": "Waning Moon",
      "input": "mk",
      "startup": 25,
      "active": "25-27",
      "recovery": 16,
      "onBlock": 1,
      "onHit": "",
      "notes": "A roundhouse kick performed from Jus Cool that cannot be blocked crouching. You can continue your attack even if blocked, making it useful when worked into sequences intended to slip through an opponent's guard; Forces a slam knockdown when hitting a mid-air opponent; Adds a floor bounding effect on Punish Counter"
    },
    {
      "name": "Maximum Strike",
      "input": "hk",
      "startup": 15,
      "active": "15-19",
      "recovery": 25,
      "onBlock": -10,
      "onHit": "",
      "notes": "A launching kick performed from Jus Cool. If done early it can be used as an anti-air attack, and is also effective as a combo starter"
    },
    {
      "name": "Juggling Dash",
      "input": "6*p",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A quick forward-moving maneuver performed from Jus Cool. While in motion, you are invincible to projectiles; Invincible to projectiles from frames 1 - 20; Can transition to Juggling Sway from frames 17 - 23"
    },
    {
      "name": "Jus Cool (OD)",
      "input": "214(kk)",
      "startup": 8,
      "active": "8-12",
      "recovery": 36,
      "onBlock": -29,
      "onHit": "",
      "notes": "A retreating sway that can lead into kicking attacks or forward-moving maneuvers; Can transition into branching attacks from frames 25 - 39; Can transition into Juggling Dash from frame 19"
    },
    {
      "name": "Juggling Sway",
      "input": "6*p>4*p",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Allows for a hasty retreat after moving forward with a Juggling Dash. Useful as a feint to confuse opponents after making them think you're going to approach"
    },
    {
      "name": "Funky Slicer (OD)",
      "input": "lk",
      "startup": 9,
      "active": "9-11",
      "recovery": 19,
      "onBlock": -2,
      "onHit": 6,
      "notes": "A low attack performed from Jus Cool that cannot be blocked standing. It is very quick, making it easy to use in combos or as a way of checking your opponent; Forces a spinning knockdown when hitting a mid-air opponent"
    },
    {
      "name": "Waning Moon (OD)",
      "input": "mk",
      "startup": 19,
      "active": "19-23",
      "recovery": 17,
      "onBlock": -4,
      "onHit": 7,
      "notes": "A roundhouse kick performed from Jus Cool that cannot be blocked crouching. You can continue your attack even if blocked, making it useful when worked into sequences intended to slip through an opponent's guard; Adds a floor bounding effect during a mid-air hit"
    },
    {
      "name": "Maximum Strike (OD)",
      "input": "hk",
      "startup": 11,
      "active": "11-15",
      "recovery": 21,
      "onBlock": -8,
      "onHit": "",
      "notes": "A launching kick performed from Jus Cool. If done early it can be used as an anti-air attack, and is also effective as a combo starter"
    },
    {
      "name": "Juggling Dash (OD)",
      "input": "6*p",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A quick forward-moving maneuver performed from Jus Cool. While in motion, you are invincible to projectiles; Invincible to projectiles from frames 1 - 20; Can transition to Juggling Sway from frames 16 - 17"
    },
    {
      "name": "Juggling Sway (OD)",
      "input": "6*p>4*p",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Allows for a hasty retreat after moving forward with a Juggling Dash. Useful as a feint to confuse opponents after making them think you're going to approach"
    },
    {
      "name": "The Greatest Sobat",
      "input": "236236*k",
      "startup": 7,
      "active": "7-10",
      "recovery": 33,
      "onBlock": -12,
      "onHit": "",
      "notes": "Remain in place and put your whole body into a single spinning kick. It executes quickly, making it useful in combos and as a counterattack; Punish Counter properties; - Produces a crumple stun if the opponent is standing on the ground; - Produces a wall bounce when hitting a mid-air opponent; Values do not change on counter or Punish Counter; Minimum guaranteed damage is 30%"
    },
    {
      "name": "Lowkey Sunrise Festival",
      "input": "236236lp",
      "startup": 12,
      "active": "12-16",
      "recovery": 46,
      "onBlock": -29,
      "onHit": 6,
      "notes": "Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can only go into the following attacks if the first attack hits; Can transition to the 2nd attack from frames 18 - 30; Values do not change on counter or Punish Counter; Minimum guaranteed damage is 40%"
    },
    {
      "name": "Lowkey Sunrise Festival (2)",
      "input": "236236lp>lp",
      "startup": 11,
      "active": "11-14",
      "recovery": 24,
      "onBlock": -7,
      "onHit": 6,
      "notes": "Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can transition to the 3rd attack from frames 19 - 24"
    },
    {
      "name": "Lowkey Sunrise Festival (3)",
      "input": "236236lp>lp>mp",
      "startup": 10,
      "active": "10-11",
      "recovery": 23,
      "onBlock": -5,
      "onHit": 6,
      "notes": "Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can transition to the 4th attack from frames 17 - 23"
    },
    {
      "name": "Lowkey Sunrise Festival (4)",
      "input": "236236lp>lp>mp>hp",
      "startup": 12,
      "active": "12-14",
      "recovery": 23,
      "onBlock": -5,
      "onHit": 6,
      "notes": "Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can transition to the 5th attack from frames 1 - 26"
    },
    {
      "name": "Lowkey Sunrise Festival (5)",
      "input": "236236lp>lp>mp>hp>lk",
      "startup": 15,
      "active": "15-18",
      "recovery": 35,
      "onBlock": -16,
      "onHit": 6,
      "notes": "Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can transition to the 6th attack from frames 27 - 31"
    },
    {
      "name": "Lowkey Sunrise Festival (6)",
      "input": "236236lp>lp>mp>hp>lk>mk",
      "startup": 17,
      "active": "17-19",
      "recovery": 45,
      "onBlock": -22,
      "onHit": 6,
      "notes": "Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can transition to the 7th attack from frames 31 - 36"
    },
    {
      "name": "Lowkey Sunrise Festival (7)",
      "input": "236236lp>lp>mp>hp>lk>mk>hk",
      "startup": 18,
      "active": "18-20-26-28",
      "recovery": 79,
      "onBlock": -61,
      "onHit": "",
      "notes": "Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can transition to a branching attack from frames 11 - 36"
    },
    {
      "name": "Marvelous Sunrise Festival",
      "input": "236236mp",
      "startup": 12,
      "active": "12-16",
      "recovery": 46,
      "onBlock": -29,
      "onHit": 6,
      "notes": "Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can only go into the following attacks if the first attack hits; Can transition to the 2nd attack from frames 12 - 17; If the 2nd attack is input between frames 2 - 11, or 18 - 30, it will fail to come out; Values do not change on counter or Punish Counter; Minimum guaranteed damage is 40%"
    },
    {
      "name": "Marvelous Sunrise Festival (2)",
      "input": "236236mp>lp",
      "startup": 11,
      "active": "11-14",
      "recovery": 24,
      "onBlock": -7,
      "onHit": 6,
      "notes": "Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can transition to the 3rd attack from frames 10 - 23; If the 3rd attack is input between frames 2 - 9, or 24 - 25, it will fail to come out"
    },
    {
      "name": "Marvelous Sunrise Festival (3)",
      "input": "236236mp>lp>mp",
      "startup": 10,
      "active": "10-11",
      "recovery": 23,
      "onBlock": -5,
      "onHit": 6,
      "notes": "Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can transition to the 4th attack from frames 9 - 20; If the 4th attack is input between frames 2 - 8, or 21 - 23, it will fail to come out"
    },
    {
      "name": "Marvelous Sunrise Festival (4)",
      "input": "236236mp>lp>mp>hp",
      "startup": 12,
      "active": "12-14",
      "recovery": 23,
      "onBlock": -5,
      "onHit": 6,
      "notes": "Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can transition to the 5th attack from frames 11 - 25; If the 5th attack is input between frames 2 - 10, or 26 - 27, it will fail to come out"
    },
    {
      "name": "Marvelous Sunrise Festival (5)",
      "input": "236236mp>lp>mp>hp>lk",
      "startup": 15,
      "active": "15-18",
      "recovery": 35,
      "onBlock": -16,
      "onHit": 6,
      "notes": "Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can transition to the 6th attack from frames 12 - 28; If the 6th attack is input between frames 2 - 11, or 29 - 31, it will fail to come out"
    },
    {
      "name": "Marvelous Sunrise Festival (6)",
      "input": "236236mp>lp>mp>hp>lk>mk",
      "startup": 17,
      "active": "17-19",
      "recovery": 45,
      "onBlock": -22,
      "onHit": 6,
      "notes": "Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can transition to the 7th attack from frames 14 - 33; If the 7th attack is input between frames 2 - 13, or 34 - 36, it will fail to come out"
    },
    {
      "name": "Marvelous Sunrise Festival (7)",
      "input": "236236mp>lp>mp>hp>lk>mk>hk",
      "startup": 18,
      "active": "18-20-26-28",
      "recovery": 64,
      "onBlock": -43,
      "onHit": "",
      "notes": "Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can transition to a branching attack from frames 11 - 36"
    },
    {
      "name": "Headliner Sunrise Festival",
      "input": "236236hp",
      "startup": 12,
      "active": "12-16",
      "recovery": 46,
      "onBlock": -29,
      "onHit": 6,
      "notes": "Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can only go into the following attacks if the first attack hits; Can transition to the 2nd attack from frames 13 - 17; If the 2nd attack is input between frames 2 - 12, or 18 - 30, it will fail to come out; Values do not change on counter or Punish Counter; Minimum guaranteed damage is 40%"
    },
    {
      "name": "Headliner Sunrise Festival (2)",
      "input": "236236hp>lp",
      "startup": 11,
      "active": "11-14",
      "recovery": 24,
      "onBlock": -7,
      "onHit": 6,
      "notes": "Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can transition to the 3rd attack from frames 15 - 20; If the 3rd attack is input between frames 2 - 14, or 21 - 25, it will fail to come out"
    },
    {
      "name": "Headliner Sunrise Festival (3)",
      "input": "236236hp>lp>mp",
      "startup": 10,
      "active": "10-11",
      "recovery": 23,
      "onBlock": -5,
      "onHit": 6,
      "notes": "Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can transition to the 4th attack from frames 13 - 18; If the 4th attack is input between frames 2 - 12, or 18 - 23, it will fail to come out"
    },
    {
      "name": "Headliner Sunrise Festival (4)",
      "input": "236236hp>lp>mp>hp",
      "startup": 12,
      "active": "12-14",
      "recovery": 23,
      "onBlock": -5,
      "onHit": 6,
      "notes": "Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can transition to the 5th attack from frames 13 - 18; If the 5th attack is input between frames 2 - 15, or 22 - 27, it will fail to come out"
    },
    {
      "name": "Headliner Sunrise Festival (5)",
      "input": "236236hp>lp>mp>hp>lk",
      "startup": 15,
      "active": "15-18",
      "recovery": 35,
      "onBlock": -16,
      "onHit": 6,
      "notes": "Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can transition to the 6th attack from frames 17 - 30; If the 6th attack is input between frames 2 - 16, or 31 - 36, it will fail to come out"
    },
    {
      "name": "Headliner Sunrise Festival (6)",
      "input": "236236hp>lp>mp>hp>lk>mk",
      "startup": 17,
      "active": "17-19",
      "recovery": 45,
      "onBlock": -22,
      "onHit": 6,
      "notes": "Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can transition to the 7th attack from frames 13 - 18; If the 7th attack is input between frames 2 - 12, or 18 - 23, it will fail to come out"
    },
    {
      "name": "Headliner Sunrise Festival (7)",
      "input": "236236hp>lp>mp>hp>lk>mk>hk",
      "startup": 18,
      "active": "18-20-26-28",
      "recovery": 64,
      "onBlock": -43,
      "onHit": "",
      "notes": "Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can transition to a branching attack from frames 11 - 36"
    },
    {
      "name": "Climactic Strike (Marvelous)",
      "input": "hp",
      "startup": 11,
      "active": "11-13-91-97",
      "recovery": 84,
      "onBlock": -66,
      "onHit": "",
      "notes": "After Marvelous Sunrise Festival connects; Launch an opponent into the air with an uppercut and smack them in the face as they come back down. Switches positions with your opponent upon completion"
    },
    {
      "name": "Climactic Strike (Headliner)",
      "input": "hp",
      "startup": 11,
      "active": "11-13-91-97",
      "recovery": 84,
      "onBlock": -66,
      "onHit": "",
      "notes": "After Headliner Sunrise Festival connects; Launch an opponent into the air with an uppercut and smack them in the face as they come back down. Switches positions with your opponent upon completion"
    },
    {
      "name": "Encore Beat (Marvelous)",
      "input": "hk",
      "startup": 33,
      "active": "33-39",
      "recovery": 112,
      "onBlock": -97,
      "onHit": "",
      "notes": "After Marvelous Sunrise Festival connects; Plant both arms on the ground and kick upwards with both legs. Most effective when used with your opponent in the corner"
    },
    {
      "name": "Encore Beat (Headliner)",
      "input": "hk",
      "startup": 33,
      "active": "33-39",
      "recovery": 112,
      "onBlock": -97,
      "onHit": "",
      "notes": "After Headliner Sunrise Festival connects; Plant both arms on the ground and kick upwards with both legs. Most effective when used with your opponent in the corner"
    },
    {
      "name": "Failed Sunrise Festival (2)",
      "input": "236236lp>lp",
      "startup": 11,
      "active": "11-14",
      "recovery": 24,
      "onBlock": -7,
      "onHit": 6,
      "notes": "Failed version; Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can transition to the 3rd attack from frames 19 - 24"
    },
    {
      "name": "Failed Sunrise Festival (3)",
      "input": "236236lp>lp>mp",
      "startup": 10,
      "active": "10-11",
      "recovery": 23,
      "onBlock": -5,
      "onHit": 6,
      "notes": "Failed version; Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can transition to the 4th attack from frames 17 - 23"
    },
    {
      "name": "Failed Sunrise Festival (4)",
      "input": "236236lp>lp>mp>hp",
      "startup": 12,
      "active": "12-14",
      "recovery": 23,
      "onBlock": -5,
      "onHit": 6,
      "notes": "Failed version; Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can transition to the 5th attack from frames 1 - 26"
    },
    {
      "name": "Failed Sunrise Festival (5)",
      "input": "236236lp>lp>mp>hp>lk",
      "startup": 15,
      "active": "15-18",
      "recovery": 35,
      "onBlock": -16,
      "onHit": 6,
      "notes": "Failed version; Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can transition to the 6th attack from frames 27 - 31"
    },
    {
      "name": "Failed Sunrise Festival (6)",
      "input": "236236lp>lp>mp>hp>lk>mk",
      "startup": 17,
      "active": "17-19",
      "recovery": 45,
      "onBlock": -22,
      "onHit": 6,
      "notes": "Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order; Can transition to the 7th attack from frames 31 - 36"
    },
    {
      "name": "Failed Sunrise Festival (7)",
      "input": "236236lp>lp>mp>hp>lk>mk>hk",
      "startup": 18,
      "active": "18-20-26-28",
      "recovery": 64,
      "onBlock": -43,
      "onHit": "",
      "notes": "Lunge forward and perform a sequence of attacks starting with a knee strike. All attacks after the first one must be activated by pressing buttons in the correct order"
    },
    {
      "name": "Weekend Pleasure",
      "input": "214214*p",
      "startup": 9,
      "active": "9-13",
      "recovery": 48,
      "onBlock": -28,
      "onHit": "",
      "notes": "When under 25% vitality; Launch an opponent into the air with an uppercut and then unleash a powerful high-speed barrage of fists upon them as they come back down. Extremely versatile, this move is useful both in combos and as an anti-air attack; Values do not change on counter or Punish Counter; Minimum guaranteed damage is set to 50%; Can only be canceled into from special moves"
    },
    {
      "name": "Weekend Pleasure (Critical Art)",
      "input": "214214*p",
      "startup": 9,
      "active": "9-13",
      "recovery": 48,
      "onBlock": -28,
      "onHit": "",
      "notes": "Launch an opponent into the air with an uppercut and then unleash a powerful high-speed barrage of fists upon them as they come back down. Extremely versatile, this move is useful both in combos and as an anti-air attack; Values do not change on counter or Punish Counter; Minimum guaranteed damage is set to 50%; Can only be canceled into from special moves"
    },
    {
      "name": "Diss Track",
      "input": "(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Disrupt your opponent's balance, hop on their knee, and kick off of their face. Throws your opponent without switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Flip Throw",
      "input": "4(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Latch onto your opponent, place both feet on their torso, and toss them behind you while falling backward. Throws your opponent while switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    }
  ],
  "manon": [
    {
      "name": "Standing Light Punch",
      "input": "5lp",
      "startup": 4,
      "active": "4-6",
      "recovery": 10,
      "onBlock": -1,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Standing Medium Punch",
      "input": "5mp",
      "startup": 7,
      "active": "7-10",
      "recovery": 14,
      "onBlock": -1,
      "onHit": 2,
      "notes": ""
    },
    {
      "name": "Standing Heavy Punch",
      "input": "5hp",
      "startup": 10,
      "active": "10-13",
      "recovery": 20,
      "onBlock": -3,
      "onHit": 0,
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Standing Light Kick",
      "input": "5lk",
      "startup": 5,
      "active": "5-6",
      "recovery": 12,
      "onBlock": -2,
      "onHit": 2,
      "notes": ""
    },
    {
      "name": "Standing Medium Kick",
      "input": "5mk",
      "startup": 10,
      "active": "10-12",
      "recovery": 18,
      "onBlock": -5,
      "onHit": -2,
      "notes": ""
    },
    {
      "name": "Standing Heavy Kick",
      "input": "5hk",
      "startup": 15,
      "active": "15-17",
      "recovery": 26,
      "onBlock": -6,
      "onHit": -2,
      "notes": "Adds +17 frames of advantage on a standing opponent during a Punish Counter; Forces a juggle state when hitting a mid-air opponent for a Punish Counter"
    },
    {
      "name": "Crouching Light Punch",
      "input": "2lp",
      "startup": 4,
      "active": "4-5",
      "recovery": 11,
      "onBlock": -2,
      "onHit": 3,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Punch",
      "input": "2mp",
      "startup": 7,
      "active": "7-9",
      "recovery": 11,
      "onBlock": -1,
      "onHit": 6,
      "notes": "2 frames of recovery added when the attack misses"
    },
    {
      "name": "Crouching Heavy Punch",
      "input": "2hp",
      "startup": 10,
      "active": "10-14",
      "recovery": 21,
      "onBlock": -8,
      "onHit": -2,
      "notes": ""
    },
    {
      "name": "Crouching Light Kick",
      "input": "2lk",
      "startup": 5,
      "active": "5-6",
      "recovery": 13,
      "onBlock": -5,
      "onHit": -1,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Kick",
      "input": "2mk",
      "startup": 8,
      "active": "8-11",
      "recovery": 16,
      "onBlock": -2,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Kick",
      "input": "2hk",
      "startup": 11,
      "active": "11-12",
      "recovery": 27,
      "onBlock": -12,
      "onHit": "",
      "notes": "Knockdown time extended when attack lands as a counter or Punish Counter"
    },
    {
      "name": "Jumping Light Punch",
      "input": "j>lp",
      "startup": 5,
      "active": "5-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Punch",
      "input": "j>mp",
      "startup": 8,
      "active": "8-11",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Heavy Punch",
      "input": "j>hp",
      "startup": 9,
      "active": "9-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a slam knockdown when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Light Kick",
      "input": "j>lk",
      "startup": 6,
      "active": "6-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Medium Kick",
      "input": "j>mk",
      "startup": 7,
      "active": "7-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Heavy Kick",
      "input": "j>hk",
      "startup": 11,
      "active": "11-15",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "R\u00e9v\u00e9rence",
      "input": "4hp",
      "startup": 8,
      "active": "8-13",
      "recovery": 17,
      "onBlock": 1,
      "onHit": 3,
      "notes": "A quick attack that can be canceled into special moves; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Tomoe Derri\u00e8re",
      "input": "3hk",
      "startup": 11,
      "active": "11-19",
      "recovery": 32,
      "onBlock": -23,
      "onHit": 26,
      "notes": "A kick with long reach that launches opponents into the air; juggle state changes when attack lands as a Punish Counter on a grounded opponent; Forces a juggle state when the attack lands as a Punish Counter on a mid-air opponent"
    },
    {
      "name": "\u00c0 Terre",
      "input": "mp>mk",
      "startup": 10,
      "active": "10-11",
      "recovery": 17,
      "onBlock": -5,
      "onHit": 2,
      "notes": "A quick combination attack that pulls your opponent toward you"
    },
    {
      "name": "En Haut (1)",
      "input": "4mk",
      "startup": 10,
      "active": "10-13",
      "recovery": 19,
      "onBlock": -3,
      "onHit": -1,
      "notes": "A two-hit series of attacks, the second of which cannot be blocked crouching; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "En Haut (2)",
      "input": "4mk>5mk",
      "startup": 14,
      "active": "14-20",
      "recovery": 21,
      "onBlock": -11,
      "onHit": -3,
      "notes": "A two-hit series of attacks, the second of which cannot be blocked crouching; Adds a floor bounding effect during a mid-air hit"
    },
    {
      "name": "Temps Li\u00e9",
      "input": "5hp>5hp",
      "startup": 5,
      "active": "5-6",
      "recovery": 20,
      "onBlock": -8,
      "onHit": 3,
      "notes": "A two-hit combination attack that pulls your opponent toward you; 2 frames of recovery added when the attack misses"
    },
    {
      "name": "Allong\u00e9",
      "input": "2hp>5hp",
      "startup": 4,
      "active": "4-7",
      "recovery": 26,
      "onBlock": -10,
      "onHit": 1,
      "notes": "A two-hit combination attack. Useful against jumping opponents"
    },
    {
      "name": "Man\u00e8ge Dor\u00e9 (Light)",
      "input": "63214lp",
      "startup": 10,
      "active": "10-11",
      "recovery": 49,
      "onBlock": "",
      "onHit": "",
      "notes": "Attack changes according to medal level; When near opponent; Grab your opponent at close range, disrupt their balance, and toss them to the ground with a powerful throw. Landing this move will raise your medal level, and the move's effect will change depending on that level; Medal level increases by a single level on hit; Damage increases the higher the Medal level; Medal Level 1: 2000 (2300); Medal Level 2: 2300 (2645); Medal Level 3: 2700 (3105); Medal Level 4: 3000 (3450); Medal level 5: 3700 (4255); Values in parentheses represent damage on Punish Counter"
    },
    {
      "name": "Man\u00e8ge Dor\u00e9 (Medium)",
      "input": "63214mp",
      "startup": 8,
      "active": "8-9",
      "recovery": 51,
      "onBlock": "",
      "onHit": "",
      "notes": "Attack changes according to medal level; When near opponent; Grab your opponent at close range, disrupt their balance, and toss them to the ground with a powerful throw. Landing this move will raise your medal level, and the move's effect will change depending on that level; Medal level increases by a single level on hit; Damage increases the higher the Medal level; Medal Level 1: 2000 (2300); Medal Level 2: 2300 (2645); Medal Level 3: 2700 (3105); Medal Level 4: 3000 (3450); Medal level 5: 3700 (4255); Values in parentheses represent damage on Punish Counter"
    },
    {
      "name": "Man\u00e8ge Dor\u00e9 (Heavy)",
      "input": "63214hp",
      "startup": 5,
      "active": "5-6",
      "recovery": 54,
      "onBlock": "",
      "onHit": "",
      "notes": "Attack changes according to medal level; When near opponent; Grab your opponent at close range, disrupt their balance, and toss them to the ground with a powerful throw. Landing this move will raise your medal level, and the move's effect will change depending on that level; With Classic Controls; Medal level increases by a single level on hit; Damage increases the higher the Medal level; Medal Level 1: 2000 (2300); Medal Level 2: 2300 (2645); Medal Level 3: 2700 (3105); Medal Level 4: 3000 (3450); Medal level 5: 3700 (4255); Values in parentheses represent damage on Punish Counter; With Modern Controls; Medal level increases by a single level on hit; Damage increases the higher the Medal level; Medal Level 1: 1600 (2000) / 1840 (2300); Medal Level 2: 1840 (2300) / 2116 (2645); Medal Level 3: 2160 (2700) / 2484 (3105); Medal Level 4: 2400 (3000) / 2760 (3450); Medal level 5: 2960 (3700) / 3404 (4255); Values after the backslash represent damage on Punish Counter"
    },
    {
      "name": "Man\u00e8ge Dor\u00e9 (OD)",
      "input": "63214(pp)",
      "startup": 8,
      "active": "8-9",
      "recovery": 51,
      "onBlock": "",
      "onHit": "",
      "notes": "Attack changes according to medal level; When near opponent; Grab your opponent at close range, disrupt their balance, and toss them to the ground with a powerful throw. Landing this move will raise your medal level, and the move's effect will change depending on that level; With Classic Controls; Medal level increases by a single level on hit; Damage increases the higher the Medal level; Medal Level 1: 2000 (2300); Medal Level 2: 2300 (2645); Medal Level 3: 2700 (3105); Medal Level 4: 3000 (3450); Medal Level 5: 3700 (4255); Values in parentheses represent damage on Punish Counter; With Modern Controls; Medal level increases by a single level on hit; Damage increases the higher the Medal level; Medal Level 1: 1600 (2000) / 1840 (2300); Medal Level 2: 1840 (2300) / 2116 (2645); Medal Level 3: 2160 (2700) / 2484 (3105); Medal Level 4: 2400 (3000) / 2760 (3450); Medal Level 5: 2960 (3700) / 3404 (4255); Values after the backslash represent damage on Punish Counter"
    },
    {
      "name": "Rond-point (Light)",
      "input": "236lk",
      "startup": 9,
      "active": "9-11-14-15",
      "recovery": 29,
      "onBlock": -15,
      "onHit": "",
      "notes": "A swift, upwards kick performed while spinning. Useful in combos or, if done early, as an anti-air attack; The upper part of Manon\u2019s body is invincible against projectiles and strikes with mid-air hitboxes from frames 5 - 15; Only the first hit can be canceled into a Level 3 Super Art or Critical Art"
    },
    {
      "name": "Rond-point (Medium)",
      "input": "236mk",
      "startup": 11,
      "active": "11-13-17-19",
      "recovery": 27,
      "onBlock": -14,
      "onHit": "",
      "notes": "A swift, upwards kick performed while spinning. Useful in combos or, if done early, as an anti-air attack; The upper part of Manon\u2019s body is invincible against projectiles and strikes with mid-air hitboxes from frames 7 - 19; Only the first hit can be canceled into a Level 3 Super Art or Critical Art"
    },
    {
      "name": "Rond-point (Heavy)",
      "input": "236hk",
      "startup": 14,
      "active": "14-16-20-22",
      "recovery": 24,
      "onBlock": -11,
      "onHit": "",
      "notes": "A swift, upwards kick performed while spinning. Useful in combos or, if done early, as an anti-air attack; The upper part of Manon\u2019s body is invincible against projectiles and strikes with mid-air hitboxes from frames 9 - 22; On hit, block or armored hit, can be canceled into a special move or Super Art from frames 44 - 46; Only the first hit can be canceled into a Level 3 Super Art or Critical Art"
    },
    {
      "name": "Rond-point (OD)",
      "input": "236(kk)",
      "startup": 8,
      "active": "8-11-14-16",
      "recovery": 30,
      "onBlock": -19,
      "onHit": "",
      "notes": "A swift, upwards kick performed while spinning. Useful in combos or, if done early, as an anti-air attack; Invincible against projectiles and strikes with mid-air hitboxes from frames 4 - 16; On hit, block or armored hit, can be canceled into a special move or Super Art from frames 41 - 46"
    },
    {
      "name": "D\u00e9gag\u00e9 (Light)",
      "input": "214lk",
      "startup": 16,
      "active": "16-17-28-31",
      "recovery": 36,
      "onBlock": -24,
      "onHit": "",
      "notes": "A powerful thrusting kick performed with all the grace of ballet. Useful for catching opponents by surprise and slipping through their guard"
    },
    {
      "name": "D\u00e9gag\u00e9 (Medium)",
      "input": "214mk",
      "startup": 16,
      "active": "16-19-34-39",
      "recovery": 22,
      "onBlock": -13,
      "onHit": "",
      "notes": "Considered airborne from frames 15 - 39"
    },
    {
      "name": "D\u00e9gag\u00e9 (Heavy)",
      "input": "214hk",
      "startup": 20,
      "active": "20-22",
      "recovery": 24,
      "onBlock": -9,
      "onHit": "",
      "notes": "A powerful thrusting kick performed with all the grace of ballet. Useful for catching opponents by surprise and slipping through their guard; Low attack invincibility from frames 9 - 19"
    },
    {
      "name": "D\u00e9gag\u00e9 (OD)",
      "input": "214(kk)",
      "startup": 22,
      "active": "22-24",
      "recovery": 22,
      "onBlock": -3,
      "onHit": "",
      "notes": "A powerful thrusting kick performed with all the grace of ballet. Useful for catching opponents by surprise and slipping through their guard; Low attack invincibility from frames 11 - 12, as well as throw invincibility; Considered airborne from frames 9 - 21"
    },
    {
      "name": "Renvers\u00e9 (Light)",
      "input": "236lp",
      "startup": 22,
      "active": "22-23",
      "recovery": 37,
      "onBlock": -23,
      "onHit": "",
      "notes": "Attack changes according to medal level; Spin toward your opponent and grab them before sending them flying. Landing this move will raise your medal level, and the move's effect will change depending on that level; With Classic Controls; Projectile invincibility from frames 3 - 21; Transition into feint by holding the button (total 33 frames); Medal level increases by a single level on hit; Damage increases the higher the Medal level; Medal Level 1: 1350 (1360); Medal Level 2: 1500 (1510); Medal Level 3: 1650 (1660); Medal Level 4: 1800 (1810); Medal Level 5: 1950 (1960); Values in parentheses represent damage on Punish Counter; With Modern Controls; Medal level increases by a single level on hit; Damage increases the higher the Medal level; Medal Level 1: 1080 / 1088; Medal Level 2: 1200 / 1208; Medal Level 3: 1320 / 1328; Medal Level 4: 1440 / 1448; Medal Level 5: 1560 / 1568; Values after the backslash represent damage on Punish Counter"
    },
    {
      "name": "Renvers\u00e9 (Medium)",
      "input": "236mp",
      "startup": 25,
      "active": "25-26",
      "recovery": 34,
      "onBlock": -20,
      "onHit": "",
      "notes": "Spin toward your opponent and grab them before sending them flying. Landing this move will raise your medal level, and the move's effect will change depending on that level; Projectile invincibility from frames 3 - 24; Transition into feint by holding the button (total 34 frames); Medal level increases by a single level on hit; Damage increases the higher the Medal level; Medal Level 1: 1400 (1420); Medal Level 2: 1550 (1570); Medal Level 3: 1700 (1720); Medal Level 4: 1850 (1870); Medal Level 5: 2000 (2020); Values in parentheses represent damage on Punish Counter"
    },
    {
      "name": "Renvers\u00e9 (Heavy)",
      "input": "236hp",
      "startup": 29,
      "active": "29-30",
      "recovery": 30,
      "onBlock": -16,
      "onHit": "",
      "notes": "Attack changes according to medal level; Spin toward your opponent and grab them before sending them flying. Landing this move will raise your medal level, and the move's effect will change depending on that level; Projectile invincibility from frames 3 - 28; Transition into feint by holding the button (total 35 frames); Medal level increases by a single level on hit; Damage increases the higher the Medal level; Medal Level 1: 1500 (1540); Medal Level 2: 1650 (1690); Medal Level 3: 1800 (1840); Medal Level 4: 1950 (1990); Medal Level 5: 2100 (2140); Values in parentheses represent damage on Punish Counter"
    },
    {
      "name": "Renvers\u00e9 (OD)",
      "input": "236(pp)",
      "startup": 25,
      "active": "25-26",
      "recovery": 34,
      "onBlock": -20,
      "onHit": "",
      "notes": "Attack changes according to medal level; Spin toward your opponent and grab them before sending them flying. Landing this move will raise your medal level, and the move's effect will change depending on that level; With Classic Controls; Invincible against strikes from the knee and up from frames 3 - 26; Invincible against projectiles from frames 3 - 26; Transition into feint by holding the button (total 35 frames); Medal level increases by a single level on hit; Damage increases the higher the Medal level; Medal Level 1: 1500 (1540); Medal Level 2: 1650 (1690); Medal Level 3: 1800 (1840); Medal Level 4: 1950 (1990); Medal Level 5: 2100 (2140); Values in parentheses represent damage on Punish Counter; With Modern Controls; Medal level increases by a single level on hit; Damage increases the higher the Medal level; Medal Level 1: 1200 / 1232; Medal Level 2: 1320 / 1352; Medal Level 3: 1440 / 1472; Medal Level 4: 1560 / 1592; Medal Level 5: 1680 / 1712; Values after the backslash represent damage on Punish Counter"
    },
    {
      "name": "Grand Fouett\u00e9",
      "input": "*k",
      "startup": 10,
      "active": "10-15",
      "recovery": 22,
      "onBlock": -5,
      "onHit": "",
      "notes": "During Renvers\u00e9; A kick that can be performed from the forward lunge in Renvers\u00e9. Useful in combos or as a way of checking opponents from mid-range"
    },
    {
      "name": "Grand Fouett\u00e9 (OD)",
      "input": "*k",
      "startup": 11,
      "active": "11-16",
      "recovery": 22,
      "onBlock": -12,
      "onHit": "",
      "notes": "A kick that can be performed from the forward lunge in Renvers\u00e9. Useful in combos or as a way of checking opponents from mid-range"
    },
    {
      "name": "Arabesque",
      "input": "236236*k",
      "startup": 10,
      "active": "10-13",
      "recovery": 65,
      "onBlock": -49,
      "onHit": "",
      "notes": "A kick performed while sliding forward along the ground that sends your opponent flying. This move is invincible on startup, making it useful as a way to turn the tables; Invincible against strikes and throws from frames 1 - 13; Minimum guaranteed damage is 30%; Values do not change on counter or Punish Counter"
    },
    {
      "name": "\u00c9toile",
      "input": "214214*k",
      "startup": 7,
      "active": "7-9-21-26-72-80",
      "recovery": 38,
      "onBlock": -61,
      "onHit": "",
      "notes": "Launch your opponent into the air with a quick one-two combination of kicks, and follow up with a powerful leaping kick. This move executes quickly, making it useful as an anti-air attack or as a way to combo airborne opponents; Completely invincible from frames 1 - 9; Considered airborne from frames 21 - 36 and 68 - 118; Minimum guaranteed damage is 40%; Values do not change on counter or Punish Counter"
    },
    {
      "name": "Pas de Deux",
      "input": "236236*p",
      "startup": 7,
      "active": "7-8",
      "recovery": 72,
      "onBlock": "",
      "onHit": "",
      "notes": "When under 25% vitality; Attack as though performing a ballet dance and then smash your opponent into the ground with a devastating slam. Can be used to slip through an opponent's guard at close range and deal tons of damage all at once; Completely invincible from frames 1 - 8; Minimum guaranteed damage is 50%; Values do not change on counter or Punish Counter; Can only be canceled into standing heavy punch and Rond-point; Damage increases the higher the Medal level; Medal Level 1: 4000; Medal Level 2: 4100; Medal Level 3: 4200; Medal Level 4: 4400; Medal Level 5: 4600"
    },
    {
      "name": "Pas de Deux (Critical Art)",
      "input": "236236*p",
      "startup": 7,
      "active": "7-8",
      "recovery": 72,
      "onBlock": "",
      "onHit": "",
      "notes": "When under 25% vitality; When near opponent; Completely invincible from frames 1 - 8; Minimum guaranteed damage is 50%; Values do not change on counter or Punish Counter; Can only be canceled into standing heavy punch and Rond-point; Damage increases the higher the Medal level; Medal Level 1: 4500; Medal Level 2: 4600; Medal Level 3: 4700; Medal Level 4: 4900; Medal Level 5: 5100"
    },
    {
      "name": "Ouchi Gari",
      "input": "(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grapple with your opponent, slipping your leg between theirs and tossing them to the ground. Throws your opponent without switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Uchi Mata",
      "input": "(4lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grapple with your opponent, slipping your leg between theirs and lifting them over you. Throws your opponent while switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    }
  ],
  "marisa": [
    {
      "name": "Standing Light Punch",
      "input": "5lp",
      "startup": 6,
      "active": "6-8",
      "recovery": 11,
      "onBlock": -2,
      "onHit": 0,
      "notes": ""
    },
    {
      "name": "Standing Medium Punch",
      "input": "5mp",
      "startup": 7,
      "active": "7-10",
      "recovery": 15,
      "onBlock": -1,
      "onHit": 2,
      "notes": "2 frames of recovery added when the attack misses"
    },
    {
      "name": "Standing Heavy Punch",
      "input": "5hp",
      "startup": 12,
      "active": "12-13",
      "recovery": 23,
      "onBlock": -3,
      "onHit": 3,
      "notes": "Hold the button for more than 21 frames to change its properties"
    },
    {
      "name": "Standing Heavy Punch (Charged)",
      "input": "5(hp)",
      "startup": 26,
      "active": "26-27",
      "recovery": 22,
      "onBlock": 4,
      "onHit": 7,
      "notes": "Forces a juggle state knockdown when hitting a mid-air opponent; 15 frames of advantage added when the attack lands as a Punish Counter.; 1 frames of recovery added on hit or when blocked"
    },
    {
      "name": "Standing Light Kick",
      "input": "5lk",
      "startup": 6,
      "active": "6-7",
      "recovery": 14,
      "onBlock": -2,
      "onHit": 0,
      "notes": ""
    },
    {
      "name": "Standing Medium Kick",
      "input": "5mk",
      "startup": 11,
      "active": "11-14",
      "recovery": 16,
      "onBlock": -2,
      "onHit": 4,
      "notes": ""
    },
    {
      "name": "Standing Heavy Kick",
      "input": "5hk",
      "startup": 15,
      "active": "15-16",
      "recovery": 25,
      "onBlock": -3,
      "onHit": 1,
      "notes": "Hold the button for more than 17 frames to change its properties; Forces a juggle state knockdown when hitting a mid-air opponent; Forces a juggle state knockdown when the attack lands for a Punish Counter"
    },
    {
      "name": "Standing Heavy Kick (Charged)",
      "input": "5(hk)",
      "startup": 27,
      "active": "27-28",
      "recovery": 25,
      "onBlock": 1,
      "onHit": "",
      "notes": "Increase juggle state time when attack lands as a Punish Counter"
    },
    {
      "name": "Crouching Light Punch",
      "input": "2lp",
      "startup": 4,
      "active": "4-5",
      "recovery": 10,
      "onBlock": -3,
      "onHit": 3,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Punch",
      "input": "2mp",
      "startup": 8,
      "active": "8-10",
      "recovery": 16,
      "onBlock": -2,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Punch",
      "input": "2hp",
      "startup": 9,
      "active": "9-13",
      "recovery": 23,
      "onBlock": -6,
      "onHit": "",
      "notes": "Hold the button for more than 17 frames to change its properties"
    },
    {
      "name": "Crouching Heavy Punch (Charged)",
      "input": "2+[hp]",
      "startup": 21,
      "active": "21-26",
      "recovery": 21,
      "onBlock": -3,
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Crouching Light Kick",
      "input": "2lk",
      "startup": 5,
      "active": "5-7",
      "recovery": 12,
      "onBlock": -3,
      "onHit": 0,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Kick",
      "input": "2mk",
      "startup": 9,
      "active": "9-11",
      "recovery": 18,
      "onBlock": -2,
      "onHit": 2,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Kick",
      "input": "2hk",
      "startup": 11,
      "active": "11-13",
      "recovery": 26,
      "onBlock": -11,
      "onHit": "",
      "notes": "Hold the button for more than 20 frames to change its properties; Knockdown time extended when attack lands as a counter or Punish Counter"
    },
    {
      "name": "Crouching Heavy Kick (Charged)",
      "input": "2+[hk]",
      "startup": 23,
      "active": "23-25",
      "recovery": 23,
      "onBlock": -3,
      "onHit": "",
      "notes": "Knockdown time extended when attack lands as a counter or Punish Counter; 3 frames of recovery added on hit or when blocked"
    },
    {
      "name": "Jumping Light Punch",
      "input": "j>lp",
      "startup": 4,
      "active": "4-10",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Punch",
      "input": "j>mp",
      "startup": 7,
      "active": "7-10",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Heavy Punch",
      "input": "j>hp",
      "startup": 10,
      "active": "10-16",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Hold the button for more than 20 frames to change its properties; Produces a slam knockdown when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Heavy Punch (Charged)",
      "input": "j>[hp]",
      "startup": 28,
      "active": "28-33",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Light Kick",
      "input": "j>lk",
      "startup": 5,
      "active": "5-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Medium Kick",
      "input": "j>mk",
      "startup": 8,
      "active": "8-15",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Heavy Kick",
      "input": "j>hk",
      "startup": 10,
      "active": "10-16",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Hold down the button for over 20 frames to change its properties"
    },
    {
      "name": "Jumping Heavy Kick (Charged)",
      "input": "j>[hk]",
      "startup": 29,
      "active": "29-34",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Light Two Hitter",
      "input": "lp>lp",
      "startup": 14,
      "active": "14-16",
      "recovery": 22,
      "onBlock": -6,
      "onHit": -3,
      "notes": "A rapid series of attacks"
    },
    {
      "name": "Medium Two Hitter",
      "input": "mp>mp",
      "startup": 14,
      "active": "14-15",
      "recovery": 23,
      "onBlock": -8,
      "onHit": -3,
      "notes": "A two-hit combination attack that can be canceled into special moves"
    },
    {
      "name": "Heavy Two Hitter",
      "input": "hp>hp",
      "startup": 24,
      "active": "24-26",
      "recovery": 19,
      "onBlock": 2,
      "onHit": "",
      "notes": "A two-hit combination attack that allows you to move first even if blocked"
    },
    {
      "name": "Volare Combo",
      "input": "j>mp>mp",
      "startup": 10,
      "active": "10-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A series of attacks performed while jumping"
    },
    {
      "name": "Caelum Arc",
      "input": "j>2hp",
      "startup": 9,
      "active": "9-17",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A move with an area of attack so wide that it can even hit opponents who are behind you; Hold down the button for over 20 frames to change its properties; Produces a slam knockdown when hitting a mid-air opponent; Has cross-up attack properties"
    },
    {
      "name": "Caelum Arc (Charged)",
      "input": "j>2[hp]",
      "startup": 28,
      "active": "28-36",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A move with an area of attack so wide that it can even hit opponents who are behind you; Has cross-up attack properties"
    },
    {
      "name": "Magna Bunker",
      "input": "4hp",
      "startup": 8,
      "active": "8-9",
      "recovery": 21,
      "onBlock": -1,
      "onHit": 3,
      "notes": "A forward-moving attack that can be canceled into special moves; Hold down the button for over 17 frames to change its properties; 3 frames of recovery added if the attack misses"
    },
    {
      "name": "Magna Bunker (Charged)",
      "input": "4[hp]",
      "startup": 20,
      "active": "20-21",
      "recovery": 24,
      "onBlock": 4,
      "onHit": 13,
      "notes": "A forward-moving attack that can be canceled into special moves; 6 frames of recovery added when the attack misses"
    },
    {
      "name": "Novacula Swipe",
      "input": "6mp>5hp",
      "startup": 11,
      "active": "11-12",
      "recovery": 26,
      "onBlock": -12,
      "onHit": "",
      "notes": "A two-hit combination attack that can knock an opponent down"
    },
    {
      "name": "Novacula Thrust",
      "input": "6mp>5hk",
      "startup": 11,
      "active": "11-14",
      "recovery": 23,
      "onBlock": -10,
      "onHit": "",
      "notes": "A combination attack that hits twice against standing opponents; Can be canceled into a Super Art; Does not hit crouching opponents"
    },
    {
      "name": "Malleus Breaker (1)",
      "input": "3hp",
      "startup": 21,
      "active": "21-22",
      "recovery": 21,
      "onBlock": -3,
      "onHit": 0,
      "notes": "A two-hit combination attack that cannot be blocked crouching; Hold down the button for over 17 frames to change its properties; Produces a floor bound when hitting a mid-air opponent"
    },
    {
      "name": "Malleus Breaker (1 Charged)",
      "input": "3[hp]",
      "startup": 31,
      "active": "31-32",
      "recovery": 19,
      "onBlock": 2,
      "onHit": 5,
      "notes": "A two-hit combination attack that cannot be blocked crouching; Adds a floor bounding effect during a mid-air hit"
    },
    {
      "name": "Malleus Breaker (2)",
      "input": "3hp>3hp",
      "startup": 18,
      "active": "18-19",
      "recovery": 24,
      "onBlock": -12,
      "onHit": -3,
      "notes": "A two-hit combination attack that cannot be blocked crouching"
    },
    {
      "name": "Falx Crusher (1)",
      "input": "6hk",
      "startup": 14,
      "active": "14-17",
      "recovery": 21,
      "onBlock": -3,
      "onHit": 0,
      "notes": "Forces the opponent into a standing position; Hold the button for more than 21 frames to change its properties"
    },
    {
      "name": "Falx Crusher (1 Charged)",
      "input": "6[hk]",
      "startup": 27,
      "active": "27-30",
      "recovery": 19,
      "onBlock": 3,
      "onHit": 10,
      "notes": "Forces the opponent into a standing position; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Falx Crusher (2)",
      "input": "6hk>6hk",
      "startup": 16,
      "active": "16-20",
      "recovery": 25,
      "onBlock": -12,
      "onHit": "",
      "notes": "A two-hit combination attack with long reach"
    },
    {
      "name": "Gladius (Light)",
      "input": "236lp",
      "startup": 17,
      "active": "17-20",
      "recovery": 21,
      "onBlock": -5,
      "onHit": "",
      "notes": "A devastating straight punch. Can be powered up by holding the attack button; Hold down the button for over 26 frames to change its properties; Upper body has Super Armor for 1 hit from frames 5 - 10"
    },
    {
      "name": "Gladius (Light Charged)",
      "input": "236[lp]",
      "startup": 30,
      "active": "30-33",
      "recovery": 20,
      "onBlock": 4,
      "onHit": "",
      "notes": "Upper body has Super Armor for 1 hit from frames 5 - 26; Has armor break properties"
    },
    {
      "name": "Gladius (Medium)",
      "input": "236mp",
      "startup": 19,
      "active": "19-22",
      "recovery": 21,
      "onBlock": -5,
      "onHit": "",
      "notes": "A devastating straight punch. Can be powered up by holding the attack button; Hold down the button for over 29 frames to change its properties; Upper body has Super Armor for 1 hit from frames 5 - 12"
    },
    {
      "name": "Gladius (Medium Charged)",
      "input": "236[mp]",
      "startup": 35,
      "active": "35-38",
      "recovery": 20,
      "onBlock": 4,
      "onHit": "",
      "notes": "Upper body has Super Armor for 1 hit from frames 5 - 29; Has armor break properties"
    },
    {
      "name": "Gladius (Heavy)",
      "input": "236hp",
      "startup": 22,
      "active": "22-25",
      "recovery": 21,
      "onBlock": -5,
      "onHit": "",
      "notes": "A devastating straight punch. Can be powered up by holding the attack button; Hold down the button for over 35 frames to change its properties; Upper body has Super Armor for 1 hit from frames 5 - 15"
    },
    {
      "name": "Gladius (Heavy Charged)",
      "input": "236[hp]",
      "startup": 41,
      "active": "41-44",
      "recovery": 20,
      "onBlock": 4,
      "onHit": "",
      "notes": "A devastating straight punch. Can be powered up by holding the attack button; Upper body has Super Armor for 1 hit from frames 5 - 35; Has armor break properties"
    },
    {
      "name": "Gladius (OD)",
      "input": "236(pp)",
      "startup": 19,
      "active": "19-22",
      "recovery": 21,
      "onBlock": -2,
      "onHit": "",
      "notes": "A devastating straight punch. Can be powered up by holding the attack button; Hold down the button for over 29 frames to change its properties; Upper body has Super Armor for 2 hits from frames 1 - 22; Has armor break properties"
    },
    {
      "name": "Gladius (OD Charged)",
      "input": "236[pp]",
      "startup": 35,
      "active": "35-38",
      "recovery": 20,
      "onBlock": 4,
      "onHit": "",
      "notes": "Upper body has Super Armor for 2 hits from frames 1 - 38; Has armor break properties"
    },
    {
      "name": "Dimachaerus (Light 1)",
      "input": "214lp",
      "startup": 12,
      "active": "12-15",
      "recovery": 30,
      "onBlock": -16,
      "onHit": -3,
      "notes": "An uppercut with a wide swing followed by a second punch that slams an opponent to the ground. Useful when used out of normal or unique attacks to create combos; Hold down the button for over 35 frames to change its properties; Can transition to branching attacks from frames 22 - 32"
    },
    {
      "name": "Dimachaerus (Light 2)",
      "input": "214lp>6*p",
      "startup": 13,
      "active": "13-17",
      "recovery": 23,
      "onBlock": -13,
      "onHit": "",
      "notes": "An uppercut with a wide swing followed by a second punch that slams an opponent to the ground. Useful when used out of normal or unique attacks to create combos"
    },
    {
      "name": "Dimachaerus (Medium 1)",
      "input": "214mp",
      "startup": 16,
      "active": "16-20",
      "recovery": 30,
      "onBlock": -16,
      "onHit": 0,
      "notes": "An uppercut with a wide swing followed by a second punch that slams an opponent to the ground. Useful when used out of normal or unique attacks to create combos; Can transition to branching attacks from frames 27 - 36"
    },
    {
      "name": "Dimachaerus (Medium 2)",
      "input": "214mp>6*p",
      "startup": 13,
      "active": "13-17",
      "recovery": 24,
      "onBlock": -14,
      "onHit": "",
      "notes": "An uppercut with a wide swing followed by a second punch that slams an opponent to the ground. Useful when used out of normal or unique attacks to create combos"
    },
    {
      "name": "Dimachaerus (Heavy 1)",
      "input": "214hp",
      "startup": 22,
      "active": "22-25",
      "recovery": 30,
      "onBlock": -16,
      "onHit": "",
      "notes": "An uppercut with a wide swing followed by a second punch that slams an opponent to the ground. Useful when used out of normal or unique attacks to create combos; Can transition to branching attacks from frames 35 - 42"
    },
    {
      "name": "Dimachaerus (Heavy 2)",
      "input": "214hp>6*p",
      "startup": 18,
      "active": "18-22",
      "recovery": 23,
      "onBlock": -13,
      "onHit": "",
      "notes": "An uppercut with a wide swing followed by a second punch that slams an opponent to the ground. Useful when used out of normal or unique attacks to create combos"
    },
    {
      "name": "Dimachaerus (OD 1)",
      "input": "214(pp)",
      "startup": 16,
      "active": "16-19",
      "recovery": 26,
      "onBlock": -12,
      "onHit": "",
      "notes": "An uppercut with a wide swing followed by a second punch that slams an opponent to the ground. Useful when used out of normal or unique attacks to create combos; Invincible against projectiles and strikes with mid-air hitboxes from frames 5 - 19; Can transition to branching attacks from frames 31 - 39; Has armor break properties"
    },
    {
      "name": "Dimachaerus (OD 2)",
      "input": "214(pp)>6*p",
      "startup": 13,
      "active": "13-17",
      "recovery": 23,
      "onBlock": -13,
      "onHit": "",
      "notes": "An uppercut with a wide swing followed by a second punch that slams an opponent to the ground. Useful when used out of normal or unique attacks to create combos"
    },
    {
      "name": "Phalanx (Light)",
      "input": "623lp",
      "startup": 25,
      "active": "25-27",
      "recovery": 18,
      "onBlock": 2,
      "onHit": "",
      "notes": "Leap into the air and come down with a powerful downward punch. Allows you to move first even if it is blocked, making it effective for continuing offensive pressure; Upper body has Super Armor from frames 7 - 11; Invincible to projectiles from frames 12 - 27; Considered airborne from frames 11 - 29"
    },
    {
      "name": "Phalanx (Medium)",
      "input": "623mp",
      "startup": 28,
      "active": "28-30",
      "recovery": 18,
      "onBlock": 2,
      "onHit": "",
      "notes": "Leap into the air and come down with a powerful downward punch. Allows you to move first even if it is blocked, making it effective for continuing offensive pressure; Upper body has Super Armor for 1 hit from frames 7 - 13; Lower body is invincible to projectiles from frames 12 - 30; Considered airborne from frames 14 - 32"
    },
    {
      "name": "Phalanx (Heavy)",
      "input": "623hp",
      "startup": 32,
      "active": "32-34",
      "recovery": 18,
      "onBlock": 2,
      "onHit": "",
      "notes": "Leap into the air and come down with a powerful downward punch. Allows you to move first even if it is blocked, making it effective for continuing offensive pressure; Upper body has Super Armor from frames 10 - 15; Invincible to projectiles from frames 12 - 34; Considered airborne from frames 17 - 36"
    },
    {
      "name": "Phalanx (OD)",
      "input": "623(pp)",
      "startup": 28,
      "active": "28-30",
      "recovery": 18,
      "onBlock": 4,
      "onHit": "",
      "notes": "Leap into the air and come down with a powerful downward punch. Allows you to move first even if it is blocked, making it effective for continuing offensive pressure; Upper body has Super Armor from frames 6 - 12; Invincible to projectiles from frames 12 - 30; Considered airborne from frames 14 - 32; Produces a wall splat if the opponent reaches the wall; Has armor break properties"
    },
    {
      "name": "Quadriga (Light)",
      "input": "236lk",
      "startup": 20,
      "active": "20-23",
      "recovery": 24,
      "onBlock": -6,
      "onHit": "",
      "notes": "Hop forward with a powerful front kick. Useful as a surprise attack that allows you to close the distance with your opponent, and can also be used to tack on additional hits in combos"
    },
    {
      "name": "Quadriga (Medium)",
      "input": "236mk",
      "startup": 24,
      "active": "24-27",
      "recovery": 22,
      "onBlock": -4,
      "onHit": "",
      "notes": "Hop forward with a powerful front kick. Useful as a surprise attack that allows you to close the distance with your opponent, and can also be used to tack on additional hits in combos"
    },
    {
      "name": "Quadriga (Heavy)",
      "input": "236hk",
      "startup": 29,
      "active": "29-32",
      "recovery": 21,
      "onBlock": -3,
      "onHit": "",
      "notes": "Hop forward with a powerful front kick. Useful as a surprise attack that allows you to close the distance with your opponent, and can also be used to tack on additional hits in combos"
    },
    {
      "name": "Quadriga (OD)",
      "input": "236(kk)",
      "startup": 24,
      "active": "24-27",
      "recovery": 24,
      "onBlock": -6,
      "onHit": "",
      "notes": "Hop forward with a powerful front kick. Useful as a surprise attack that allows you to close the distance with your opponent, and can also be used to tack on additional hits in combos; Produces a wall splat on hit"
    },
    {
      "name": "Scutum",
      "input": "214*k",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A defensive maneuver in which you cover your head with both arms, giving armor to your upper body and automatically countering your opponent's attacks if hit. If you continue holding the button following a counter, you will return to the Scutum stance; Upper body has Super Armor for 1 hit from frames 3 - 28; Automatically transitions into a special attack when the Super Armor absorbs the opponent\u2019s attack; Can transition to branching attacks from frames 9 - 14; Hold down the button to extend the technique"
    },
    {
      "name": "Scutum (Physical Counter)",
      "input": "214*k",
      "startup": 7,
      "active": "7-10",
      "recovery": 20,
      "onBlock": -3,
      "onHit": -1,
      "notes": "Take an attack during Scutum; Always in Punish Counter state during execution; Scutum stance continues while the button is held"
    },
    {
      "name": "Scutum (OD)",
      "input": "214(kk)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A defensive maneuver in which you cover your head with both arms, giving armor to your upper body and automatically countering your opponent's attacks if hit. If you continue holding the button following a counter, you will return to the Scutum stance; Upper body has Super Armor for 2 hits from frames 1 - 28; Automatically transitions into a special attack when the Super Armor absorbs the opponent\u2019s attack; Can transition to branching attacks from frames 9 - 14; Hold down the button to extend the technique"
    },
    {
      "name": "Scutum (OD Physical Counter)",
      "input": "214(kk)",
      "startup": 7,
      "active": "7-10",
      "recovery": 20,
      "onBlock": -3,
      "onHit": -1,
      "notes": "Take an attack during OD Scutum; Always in Punish Counter state during execution; Scutum stance continues while the button is held"
    },
    {
      "name": "Tonitrus (1)",
      "input": "*p",
      "startup": 15,
      "active": "15-17",
      "recovery": 23,
      "onBlock": -3,
      "onHit": 1,
      "notes": "During Scutum; A two-hit attack that can be performed from Scutum. The first hit is an overhead attack that cannot be blocked crouching, making it useful for penetrating defenses; Always in Punish Counter state during execution; 2 frames of recovery added if the attack misses; Can transition to branching attacks on hit or block"
    },
    {
      "name": "Tonitrus (2)",
      "input": "*p>*p",
      "startup": 20,
      "active": "20-22",
      "recovery": 36,
      "onBlock": -21,
      "onHit": "",
      "notes": "During Scutum; A two-hit attack that can be performed from Scutum. The first hit is an overhead attack that cannot be blocked crouching, making it useful for penetrating defenses; Always in Punish Counter state during execution"
    },
    {
      "name": "Procella",
      "input": "*k",
      "startup": 16,
      "active": "16-18",
      "recovery": 37,
      "onBlock": -24,
      "onHit": "",
      "notes": "During Scutum; A sweeping kick that can be performed from Scutum. It is a low attack with long reach that cannot be blocked standing, making it useful for surprise attacks; Always in Punish Counter state during execution"
    },
    {
      "name": "Enfold",
      "input": "(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 54,
      "onBlock": "",
      "onHit": "",
      "notes": "During scutum; A throw that can be performed from Scutum. Pin your opponent to the ground and pound them with a single powerful punch. Useful as a way to break through the guard of an opponent who is expecting Scutum to be followed by a punch or kick; Always in Punish Counter state during execution; With Classic Controls; Does 2875 individual damage when the attack lands as a Punish Counter; With Modern Controls; Does 2300 individual damage when the attack lands as a Punish Counter"
    },
    {
      "name": "Javelin of Marisa",
      "input": "236236*p",
      "startup": 19,
      "active": "19-23",
      "recovery": 60,
      "onBlock": -43,
      "onHit": "",
      "notes": "Bring a full-power punch down on your opponent with a wide swing. Hold the button to increase its damage; Hold down the button for over 27 frames to change its properties; Super Armor for 2 hits from frames 1 - 23; Minimum guaranteed damage is set to 30%; Values do not change on counter or Punish Counter"
    },
    {
      "name": "Javelin of Marisa (Charged)",
      "input": "236236[*p]",
      "startup": 42,
      "active": "42-47",
      "recovery": 60,
      "onBlock": -42,
      "onHit": "",
      "notes": "Bring a full-power punch down on your opponent with a wide swing. Hold the button to increase its damage; Transitions to attack when hit by an opponent\u2019s attack between frames 1 - 27; Upper body has Super Armor for 2 hits from frames 28 - 47; Minimum guaranteed damage is set to 30%; Values do not change on counter or Punish Counter; Properties change to the following if the attack lands on frames 46 - 47; - Damage is 2600; - Does not go into full cinematic animation"
    },
    {
      "name": "Javelin of Marisa (Physical Counter)",
      "input": "236236*p",
      "startup": 7,
      "active": "7-9",
      "recovery": 54,
      "onBlock": -37,
      "onHit": "",
      "notes": "Bring a full-power punch down on your opponent with a wide swing. Hold the button to increase its damage; Completely invincible from frames 1 - 10"
    },
    {
      "name": "Meteorite",
      "input": "214214*p",
      "startup": 9,
      "active": "9-15-49-51",
      "recovery": 59,
      "onBlock": -44,
      "onHit": "",
      "notes": "Leap into the air with a tackle and descend with a single devastating punch. Useful as an anti-air attack or as a way to tack on big damage at the end of a combo; Completely invincible from frames 1 - 15; Minimum guaranteed damage is set to 40%; Considered airborne from frames 16 - 48; Values do not change on counter or Punish Counter; Properties change to the following if the attack lands between frames 49 - 51; - Damage is 2500; - Does not go into full cinematic animation"
    },
    {
      "name": "Goddess of the Hunt",
      "input": "236236*k",
      "startup": 13,
      "active": "13-19",
      "recovery": 60,
      "onBlock": -39,
      "onHit": "",
      "notes": "After sending your opponent to their knees with a vicious tackle, hit them with a devastating punch that sends them flying against the wall. A versatile move that can counter projectiles, be used in combos, and can turn the tables when under pressure; Completely invincible from frames 1 - 19; Values do not change on counter or Punish Counter; Minimum guaranteed damage is set to 50%"
    },
    {
      "name": "Goddess of the Hunt (Critical Art)",
      "input": "236236*k",
      "startup": 13,
      "active": "13-19",
      "recovery": 60,
      "onBlock": -39,
      "onHit": "",
      "notes": "When under 25% vitality; After sending your opponent to their knees with a vicious tackle, hit them with a devastating punch that sends them flying against the wall. A versatile move that can counter projectiles, be used in combos, and can turn the tables when under pressure; Completely invincible from frames 1 - 19; Values do not change on counter or Punish Counter; Minimum guaranteed damage is set to 50%"
    },
    {
      "name": "Mounted Grace",
      "input": "(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab an opponent by the leg to send them tumbling to the ground, and punch them from above. Throws your opponent without switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Ponte Milvio",
      "input": "4(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Lift an opponent up on your shoulders and then toss them behind you. Throws your opponent while switching places with them"
    }
  ],
  "jp": [
    {
      "name": "Standing Light Punch",
      "input": "5lp",
      "startup": 6,
      "active": "6-8",
      "recovery": 10,
      "onBlock": -2,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Standing Medium Punch",
      "input": "5mp",
      "startup": 12,
      "active": "12-14",
      "recovery": 21,
      "onBlock": -6,
      "onHit": 1,
      "notes": ""
    },
    {
      "name": "Standing Heavy Punch",
      "input": "5hp",
      "startup": 12,
      "active": "12-13",
      "recovery": 22,
      "onBlock": -3,
      "onHit": 3,
      "notes": "Forces a juggle state when hitting a mid-air opponent; Adds +25 frames of advantage on a Punish Counter"
    },
    {
      "name": "Standing Light Kick",
      "input": "5lk",
      "startup": 5,
      "active": "5-7",
      "recovery": 11,
      "onBlock": -2,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Standing Medium Kick",
      "input": "5mk",
      "startup": 8,
      "active": "8-10",
      "recovery": 19,
      "onBlock": -3,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Standing Heavy Kick",
      "input": "5hk",
      "startup": 12,
      "active": "12-15",
      "recovery": 17,
      "onBlock": 2,
      "onHit": 7,
      "notes": ""
    },
    {
      "name": "Crouching Light Punch",
      "input": "2lp",
      "startup": 4,
      "active": "4-5",
      "recovery": 11,
      "onBlock": -1,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Punch",
      "input": "2mp",
      "startup": 7,
      "active": "7-10",
      "recovery": 14,
      "onBlock": -2,
      "onHit": 6,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Punch",
      "input": "2hp",
      "startup": 9,
      "active": "9-14",
      "recovery": 20,
      "onBlock": -6,
      "onHit": 1,
      "notes": "Forces the opponent into a standing position"
    },
    {
      "name": "Crouching Light Kick",
      "input": "2lk",
      "startup": 6,
      "active": "6-7",
      "recovery": 10,
      "onBlock": -2,
      "onHit": 2,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Kick",
      "input": "2mk",
      "startup": 9,
      "active": "9-11",
      "recovery": 17,
      "onBlock": -3,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Kick",
      "input": "2hk",
      "startup": 10,
      "active": "10-12",
      "recovery": 21,
      "onBlock": -6,
      "onHit": "",
      "notes": "Knockdown time extended when attack lands as a counter or Punish Counter"
    },
    {
      "name": "Jumping Light Punch",
      "input": "j>lp",
      "startup": 5,
      "active": "5-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Punch",
      "input": "j>mp",
      "startup": 12,
      "active": "12-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Heavy Punch",
      "input": "j>hp",
      "startup": 9,
      "active": "9-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a slam knockdown on counter or Punish Counter when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Light Kick",
      "input": "j>lk",
      "startup": 6,
      "active": "6-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Medium Kick",
      "input": "j>mk",
      "startup": 7,
      "active": "7-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Heavy Kick",
      "input": "j>hk",
      "startup": 11,
      "active": "11-16",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Triglav (Light)",
      "input": "22lp",
      "startup": 22,
      "active": "22-31",
      "recovery": "",
      "onBlock": -2,
      "onHit": "",
      "notes": "Thrust your staff into the ground, causing thorns of Psycho Power to emerge at a distant location. Useful in combos and as a way to check opponents from a distance"
    },
    {
      "name": "Triglav (Medium)",
      "input": "22mp",
      "startup": 22,
      "active": "22-31",
      "recovery": "",
      "onBlock": -2,
      "onHit": "",
      "notes": "Thrust your staff into the ground, causing thorns of Psycho Power to emerge at a distant location. Useful in combos and as a way to check opponents from a distance"
    },
    {
      "name": "Triglav (Heavy)",
      "input": "22hp",
      "startup": 22,
      "active": "22-31",
      "recovery": "",
      "onBlock": -2,
      "onHit": "",
      "notes": "Thrust your staff into the ground, causing thorns of Psycho Power to emerge at a distant location. Useful in combos and as a way to check opponents from a distance"
    },
    {
      "name": "Triglav (OD Light)",
      "input": "22(lp+mp)",
      "startup": 20,
      "active": "20-39",
      "recovery": "",
      "onBlock": 3,
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Triglav (OD Medium)",
      "input": "22(lp+hp)",
      "startup": 20,
      "active": "20-39",
      "recovery": "",
      "onBlock": 3,
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Triglav (OD Heavy)",
      "input": "22(mp+hp)",
      "startup": 20,
      "active": "20-39",
      "recovery": "",
      "onBlock": 3,
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Stribog (Light)",
      "input": "236lp",
      "startup": 16,
      "active": "16-21",
      "recovery": "",
      "onBlock": -10,
      "onHit": "",
      "notes": "Perform a forward swing with your staff to generate a barrier of Psycho Power. Effective for tacking on additional damage in combos or as a way to get your opponent away from you; Increases the Drive Gauge by 10,000 during a Perfect Parry; Clashes with projectiles; 3 frames of recovery added on Perfect Parry"
    },
    {
      "name": "Stribog (Medium)",
      "input": "236mp",
      "startup": 20,
      "active": "20-22-24-26",
      "recovery": "",
      "onBlock": -8,
      "onHit": "",
      "notes": "Perform a forward swing with your staff to generate a barrier of Psycho Power. Effective for tacking on additional damage in combos or as a way to get your opponent away from you; Increases the Drive Gauge by 10,000 during a Perfect Parry; Clashes with projectiles"
    },
    {
      "name": "Stribog (Heavy)",
      "input": "236hp",
      "startup": 28,
      "active": "28-30-40-42",
      "recovery": "",
      "onBlock": 4,
      "onHit": "",
      "notes": "Perform a forward swing with your staff to generate a barrier of Psycho Power. Effective for tacking on additional damage in combos or as a way to get your opponent away from you; Increases the Drive Gauge by 10,000 during a Perfect Parry; Clashes with projectiles"
    },
    {
      "name": "Stribog (OD)",
      "input": "236(pp)",
      "startup": 19,
      "active": "19-21-28-30",
      "recovery": "",
      "onBlock": 2,
      "onHit": "",
      "notes": "Perform a forward swing with your staff to generate a barrier of Psycho Power. Effective for tacking on additional damage in combos or as a way to get your opponent away from you; Increases the Drive Gauge by 10,000 during a Perfect Parry; Clashes with projectiles; 3 frames of recovery added on Perfect Parry; Only the first attack can be canceled into Super Art 2/Super Art 3/Critical Art"
    },
    {
      "name": "Departure (Light)",
      "input": "214lp",
      "startup": 150,
      "active": "150-159",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Place a void of Psycho Power in the air from which thorns spawn. Useful as a way of limiting your opponent's movement when vying for position"
    },
    {
      "name": "Departure (Medium)",
      "input": "214mp",
      "startup": 150,
      "active": "150-159",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Place a void of Psycho Power in the air from which thorns spawn. Useful as a way of limiting your opponent's movement when vying for position"
    },
    {
      "name": "Departure (Heavy)",
      "input": "214hp",
      "startup": 150,
      "active": "150-159",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Place a void of Psycho Power in the air from which thorns spawn. Useful as a way of limiting your opponent's movement when vying for position"
    },
    {
      "name": "Departure (OD Light)",
      "input": "214(lp+mp)",
      "startup": 110,
      "active": "110-119-140-149",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Place a void of Psycho Power in the air from which thorns spawn. Useful as a way of limiting your opponent's movement when vying for position"
    },
    {
      "name": "Departure (OD Medium)",
      "input": "214(lp+hp)",
      "startup": 110,
      "active": "110-119-140-149",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Place a void of Psycho Power in the air from which thorns spawn. Useful as a way of limiting your opponent's movement when vying for position"
    },
    {
      "name": "Departure (OD Heavy)",
      "input": "214(mp+hp)",
      "startup": 110,
      "active": "110-119-140-149",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Place a void of Psycho Power in the air from which thorns spawn. Useful as a way of limiting your opponent's movement when vying for position"
    },
    {
      "name": "Departure: Window",
      "input": "214+{lp|mp}",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "While departure is active; Instantly warp to the active Departure. Jumping attacks can be used upon exiting the warp; Completely invincible from frames 6 - 25; Considered airborne from frame 26; Can perform moves from frame 31"
    },
    {
      "name": "Departure: Shadow",
      "input": "214hp",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "While departure is active; Spawn thorns from a placed Departure at a timing of your choosing. Useful for checking opponents with thorns at a different timing than if they were left to spawn automatically"
    },
    {
      "name": "Amnesia",
      "input": "22*k",
      "startup": 3,
      "active": "3-20",
      "recovery": 35,
      "onBlock": "",
      "onHit": "",
      "notes": "Ward off an opponent's attack while sticking them with a bomb of Psycho Power. The bomb will detonate after a period of time, damaging the opponent; Drive Gauge increases by 10,000 if the move is successful; Fires a projectile if the move is successful; Combo scaling occurs after the 3rd hit"
    },
    {
      "name": "Amnesia (OD)",
      "input": "22(kk)",
      "startup": 1,
      "active": "1-20",
      "recovery": 35,
      "onBlock": "",
      "onHit": "",
      "notes": "Ward off an opponent's attack while sticking them with a bomb of Psycho Power. The bomb will detonate after a period of time, damaging the opponent; Fires a projectile if the move is successful; Combo scaling occurs after the 3rd hit"
    },
    {
      "name": "Torbalan (Light)",
      "input": "236lk",
      "startup": 22,
      "active": "",
      "recovery": "",
      "onBlock": -6,
      "onHit": "",
      "notes": "Craft a clone out of Psycho Power and send it flying at your opponent. Useful for checking your opponent and causing damage at long range; Start up value listed is when the attack is performed at close range"
    },
    {
      "name": "Torbalan (Medium)",
      "input": "236mk",
      "startup": 26,
      "active": "",
      "recovery": "",
      "onBlock": -8,
      "onHit": 6,
      "notes": "Craft a clone out of Psycho Power and send it flying at your opponent. Useful for checking your opponent and causing damage at long range; Start up value listed is when the attack is performed at close range"
    },
    {
      "name": "Torbalan (Heavy)",
      "input": "236hk",
      "startup": 26,
      "active": "",
      "recovery": "",
      "onBlock": -8,
      "onHit": 6,
      "notes": "Craft a clone out of Psycho Power and send it flying at your opponent. Useful for checking your opponent and causing damage at long range; Start up value listed is when the attack is performed at close range"
    },
    {
      "name": "Torbalan (OD)",
      "input": "236(kk)",
      "startup": 22,
      "active": "",
      "recovery": "",
      "onBlock": 25,
      "onHit": "",
      "notes": "Craft a clone out of Psycho Power and send it flying at your opponent. Useful for checking your opponent and causing damage at long range; Start up value listed is when the attack is performed at close range; Only the first attack can be canceled into Super Art 2/Super Art 3/Critical Art"
    },
    {
      "name": "Embrace",
      "input": "214*k",
      "startup": 26,
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A throw that sends a clone to grapple with the opponent and explode with Psycho Power. The amount of time it takes for the grab to execute depends on the distance from your opponent; With Classic Controls; Does 2070 individual damage when the attack lands as a Punish Counter; Start up value listed is when the attack is performed at close range; With Modern Controls; Does 1656 individual damage when the attack lands as a Punish Counter"
    },
    {
      "name": "Embrace (OD)",
      "input": "214(kk)",
      "startup": 26,
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A throw that sends a clone to grapple with the opponent and explode with Psycho Power. The amount of time it takes for the grab to execute depends on the distance from your opponent; With Classic Controls; Does 2990 individual damage when the attack lands as a Punish Counter; Start up value listed is when the attack is performed at close range; With Modern Controls; Does 2392 individual damage when the attack lands as a Punish Counter"
    },
    {
      "name": "Guillotinna",
      "input": "6mk",
      "startup": 22,
      "active": "22-23",
      "recovery": 19,
      "onBlock": -3,
      "onHit": 3,
      "notes": "An overhead attack that cannot be blocked while crouching"
    },
    {
      "name": "Malice",
      "input": "3hp",
      "startup": 16,
      "active": "16-18",
      "recovery": 31,
      "onBlock": -14,
      "onHit": "",
      "notes": "An attack with long reach that knocks opponents down; Knockdown time extended when attack lands as a counter or Punish Counter"
    },
    {
      "name": "Bylina",
      "input": "6hk",
      "startup": 11,
      "active": "11-12-13-16",
      "recovery": 24,
      "onBlock": -5,
      "onHit": "",
      "notes": "A launching kick that can be canceled into special moves; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Grom Strelka (1)",
      "input": "4mp",
      "startup": 8,
      "active": "8-10",
      "recovery": 16,
      "onBlock": -1,
      "onHit": 5,
      "notes": "A quick series of attacks that can be canceled into special moves"
    },
    {
      "name": "Grom Strelka (2)",
      "input": "4mp>5mp",
      "startup": 10,
      "active": "10-12",
      "recovery": 20,
      "onBlock": -6,
      "onHit": 3,
      "notes": "A quick series of attacks that can be canceled into special moves"
    },
    {
      "name": "Zilant",
      "input": "hk>hp",
      "startup": 20,
      "active": "20-22",
      "recovery": 20,
      "onBlock": -3,
      "onHit": 3,
      "notes": "A two-hit combination attack that can be canceled into special moves"
    },
    {
      "name": "Zilant Mid",
      "input": "hk>hp>hp",
      "startup": 21,
      "active": "21-23",
      "recovery": 22,
      "onBlock": -4,
      "onHit": 3,
      "notes": "An overhead attack performed out of Zilant that cannot be blocked crouching"
    },
    {
      "name": "Zilant Low",
      "input": "hk>hp>hk",
      "startup": 21,
      "active": "21-23",
      "recovery": 22,
      "onBlock": -4,
      "onHit": 3,
      "notes": "A low attack performed out of Zilant that cannot be blocked standing"
    },
    {
      "name": "Ravina",
      "input": "(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab your opponent by the arm, disrupt their balance, and stab them with your staff. Throws your opponent without switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Uragan",
      "input": "(4lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab your opponent by the arm, push their back, and send them tumbling behind you. Throws your opponent while switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Tornado",
      "input": "j>(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During a jump; When near opponent; Grab your opponent's arm while airborne and toss them to ground behind you. Throws your opponent while switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Chornobog",
      "input": "236236*p",
      "startup": 8,
      "active": "",
      "recovery": "",
      "onBlock": -33,
      "onHit": "",
      "notes": "Fire two interlocked shockwaves of Psycho Power directly forward. Easy to work into combos or to use as a counter attack, even when performed at close range; Invincible to strikes and throws from frames 1 - 10; Minimum guaranteed damage is 30%; Values do not change on counter or Punish Counter"
    },
    {
      "name": "Lovushka",
      "input": "214214*p",
      "startup": 29,
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Generate clones to attack your opponent from all directions. Can be used to make combos utilizing your clones, or as a way of breaking through your opponent's guard; Minimum guaranteed damage is 40%; Values do not change on counter or Punish Counter; Combo scaling occurs after the 3rd hit"
    },
    {
      "name": "Interdiction",
      "input": "236236*k",
      "startup": 18,
      "active": "18-23",
      "recovery": 62,
      "onBlock": -50,
      "onHit": "",
      "notes": "Grab your opponent and send Psycho Power flowing through their body, causing them to explode from within. You will instantly warp to your opponent upon activating this move, making it useful in a variety of situations; Completely invincible from frames 1 - 23; Minimum guaranteed damage is 50%; Values do not change on counter or Punish Counter; Can only be canceled into from special moves"
    },
    {
      "name": "Interdiction (Critical Art)",
      "input": "236236*k",
      "startup": 18,
      "active": "18-23",
      "recovery": 62,
      "onBlock": -50,
      "onHit": "",
      "notes": "When under 25% vitality; Grab your opponent and send Psycho Power flowing through their body, causing them to explode from within. You will instantly warp to your opponent upon activating this move, making it useful in a variety of situations; Completely invincible from frames 1 - 23; Minimum guaranteed damage is 50%; Values do not change on counter or Punish Counter; Can only be canceled into from special moves"
    }
  ],
  "juri": [
    {
      "name": "Standing Light Punch",
      "input": "5lp",
      "startup": 4,
      "active": "4-7",
      "recovery": 7,
      "onBlock": -2,
      "onHit": 5,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "[Chain combo] Standing Light Punch",
      "input": "5lp",
      "startup": 4,
      "active": "4-7",
      "recovery": 7,
      "onBlock": -2,
      "onHit": 5,
      "notes": "Can be rapid canceled; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Standing Medium Punch",
      "input": "5mp",
      "startup": 6,
      "active": "6-9",
      "recovery": 12,
      "onBlock": 2,
      "onHit": 7,
      "notes": ""
    },
    {
      "name": "[Chain combo] Standing Medium Punch",
      "input": "5mp",
      "startup": 6,
      "active": "6-9",
      "recovery": 12,
      "onBlock": 2,
      "onHit": 7,
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Standing Heavy Punch",
      "input": "5hp",
      "startup": 10,
      "active": "10-12",
      "recovery": 24,
      "onBlock": -5,
      "onHit": -1,
      "notes": ""
    },
    {
      "name": "[Chain combo] Standing Heavy Punch",
      "input": "5hp",
      "startup": 10,
      "active": "10-12",
      "recovery": 24,
      "onBlock": -5,
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Standing Light Kick",
      "input": "5lk",
      "startup": 5,
      "active": "5-7",
      "recovery": 9,
      "onBlock": -3,
      "onHit": 2,
      "notes": ""
    },
    {
      "name": "[Chain combo] Standing Light Kick",
      "input": "5lk",
      "startup": 5,
      "active": "5-7",
      "recovery": 9,
      "onBlock": -3,
      "onHit": 2,
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Standing Medium Kick",
      "input": "5mk",
      "startup": 5,
      "active": "5-6-8-10",
      "recovery": 17,
      "onBlock": -4,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "[Chain combo] Standing Medium Kick",
      "input": "5mk",
      "startup": 5,
      "active": "5-6-8-10",
      "recovery": 17,
      "onBlock": -4,
      "onHit": 3,
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Standing Heavy Kick",
      "input": "5hk",
      "startup": 17,
      "active": "17-20",
      "recovery": 19,
      "onBlock": -3,
      "onHit": 2,
      "notes": "Forces a juggle state knockdown on Punish Counter, or when it hits as a mid-air Counter or Punish Counter; Juggle state time is extended when attack hits a mid-air opponent as a Punish Counter"
    },
    {
      "name": "[Chain combo] Standing Heavy Kick",
      "input": "5hk",
      "startup": 17,
      "active": "17-20",
      "recovery": 19,
      "onBlock": -3,
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Crouching Light Punch",
      "input": "2lp",
      "startup": 4,
      "active": "4-6",
      "recovery": 8,
      "onBlock": -1,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "[Chain combo] Crouching Light Punch",
      "input": "2lp",
      "startup": 4,
      "active": "4-6",
      "recovery": 8,
      "onBlock": -1,
      "onHit": 4,
      "notes": "Can be rapid canceled; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Crouching Medium Punch",
      "input": "2mp",
      "startup": 6,
      "active": "6-9",
      "recovery": 14,
      "onBlock": -2,
      "onHit": 5,
      "notes": ""
    },
    {
      "name": "[Chain combo] Crouching Medium Punch",
      "input": "2mp",
      "startup": 6,
      "active": "6-9",
      "recovery": 14,
      "onBlock": -2,
      "onHit": 5,
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Crouching Heavy Punch",
      "input": "2hp",
      "startup": 8,
      "active": "8-11",
      "recovery": 23,
      "onBlock": -11,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "[Chain combo] Crouching Heavy Punch",
      "input": "2hp",
      "startup": 8,
      "active": "8-11",
      "recovery": 23,
      "onBlock": -11,
      "onHit": "",
      "notes": "Can be canceled into a jump if the attack hits"
    },
    {
      "name": "Crouching Light Kick",
      "input": "2lk",
      "startup": 5,
      "active": "5-7",
      "recovery": 8,
      "onBlock": -1,
      "onHit": 3,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "[Chain combo] Crouching Light Kick",
      "input": "2lk",
      "startup": 5,
      "active": "5-7",
      "recovery": 8,
      "onBlock": -1,
      "onHit": 3,
      "notes": "Can be rapid canceled; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Crouching Medium Kick",
      "input": "2mk",
      "startup": 8,
      "active": "8-10",
      "recovery": 19,
      "onBlock": -6,
      "onHit": 1,
      "notes": ""
    },
    {
      "name": "[Chain combo] Crouching Medium Kick",
      "input": "2mk",
      "startup": 8,
      "active": "8-10",
      "recovery": 19,
      "onBlock": -6,
      "onHit": 1,
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Crouching Heavy Kick",
      "input": "2hk",
      "startup": 10,
      "active": "10-12",
      "recovery": 23,
      "onBlock": -11,
      "onHit": "",
      "notes": "Knockdown time extended when attack lands as a counter or Punish Counter"
    },
    {
      "name": "[Chain combo] Crouching Heavy Kick",
      "input": "2hk",
      "startup": 10,
      "active": "10-12",
      "recovery": 23,
      "onBlock": -11,
      "onHit": "",
      "notes": "Knockdown time extended when attack lands as a counter or Punish Counter"
    },
    {
      "name": "Jumping Light Punch",
      "input": "j>lp",
      "startup": 5,
      "active": "5-10",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "[Chain combo] Jumping Light Punch",
      "input": "j>lp",
      "startup": 5,
      "active": "5-10",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Medium Punch",
      "input": "j>mp",
      "startup": 7,
      "active": "7-11",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "[Chain combo] Jumping Medium Punch",
      "input": "j>mp",
      "startup": 7,
      "active": "7-11",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Heavy Punch",
      "input": "j>hp",
      "startup": 12,
      "active": "12-17",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties; Produces a slam knockdown"
    },
    {
      "name": "Jumping Light Kick",
      "input": "j>lk",
      "startup": 4,
      "active": "4-9",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "[Chain combo] Jumping Light Kick",
      "input": "j>lk",
      "startup": 4,
      "active": "4-9",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Medium Kick",
      "input": "j>mk",
      "startup": 6,
      "active": "6-11",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "[Chain combo] Jumping Medium Kick",
      "input": "j>mk",
      "startup": 6,
      "active": "6-11",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Heavy Kick",
      "input": "{7|9}>hk",
      "startup": 10,
      "active": "10-15",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "[Chain combo] Jumping Heavy Kick",
      "input": "{7|9}>hk",
      "startup": 10,
      "active": "10-15",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Neutral Jumping Heavy Kick",
      "input": "8>hk",
      "startup": 10,
      "active": "10-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "[Chain combo] Neutral Jumping Heavy Kick",
      "input": "8>hk",
      "startup": 10,
      "active": "10-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Kyosesho",
      "input": "6mp",
      "startup": 8,
      "active": "8-10",
      "recovery": 17,
      "onBlock": -3,
      "onHit": 4,
      "notes": "A forward-moving attack that can be canceled into special moves"
    },
    {
      "name": "[Chain combo] Kyosesho",
      "input": "6mp",
      "startup": 8,
      "active": "8-10",
      "recovery": 17,
      "onBlock": -3,
      "onHit": 4,
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Senkai Kick",
      "input": "6mk",
      "startup": 21,
      "active": "21-22",
      "recovery": 23,
      "onBlock": -3,
      "onHit": 2,
      "notes": "An overhead attack that cannot be blocked while crouching; 2 frames of recovery added when the attack misses"
    },
    {
      "name": "[Chain combo] Senkai Kick",
      "input": "6mk",
      "startup": 21,
      "active": "21-22",
      "recovery": 23,
      "onBlock": -3,
      "onHit": "",
      "notes": "An overhead attack that cannot be blocked while crouching; 2 frames of recovery added when the attack misses; Produces a slam knockdown"
    },
    {
      "name": "Renko Kicks",
      "input": "6hp",
      "startup": 15,
      "active": "15-17-23-25",
      "recovery": 20,
      "onBlock": -4,
      "onHit": 2,
      "notes": "A two-hit sequence of kicks that can be canceled into special moves; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "[Chain combo] Renko Kicks",
      "input": "6hp",
      "startup": 15,
      "active": "15-17-23-25",
      "recovery": 20,
      "onBlock": -4,
      "onHit": "",
      "notes": "A two-hit sequence of kicks that can be canceled into special moves"
    },
    {
      "name": "Korenzan",
      "input": "4hk",
      "startup": 10,
      "active": "10-12-19-21",
      "recovery": 19,
      "onBlock": -6,
      "onHit": -2,
      "notes": "A multi-hit kick that can be canceled into special moves; Second attack produces a ground bound when hitting a mid-air opponent"
    },
    {
      "name": "[Chain combo] Korenzan",
      "input": "4hk",
      "startup": 10,
      "active": "10-12-19-21",
      "recovery": 19,
      "onBlock": -6,
      "onHit": "",
      "notes": "Second attack produces a ground bound when hitting a mid-air opponent"
    },
    {
      "name": "Death Crest (2)",
      "input": "5mp>4hp",
      "startup": 12,
      "active": "12-14",
      "recovery": 19,
      "onBlock": -3,
      "onHit": "",
      "notes": "A combination attack that sends an opponent flying"
    },
    {
      "name": "Death Crest (3)",
      "input": "5mp>4hp>5hp",
      "startup": 17,
      "active": "17-19",
      "recovery": 27,
      "onBlock": -16,
      "onHit": "",
      "notes": "A combination attack that sends an opponent flying; *Can only be canceled into a Super Art on hit"
    },
    {
      "name": "Fuhajin (Light)",
      "input": "214lk",
      "startup": 10,
      "active": "10-13",
      "recovery": 21,
      "onBlock": -4,
      "onHit": "",
      "notes": "Perform an upwards kick while capturing ki from your immediate surroundings. Increases your Fuha stock by 1 upon completion; Has a clash hitbox from frames 8 - 13; Adds 1 Fuha stock on frame 10; 2 frames of recovery added when the attack misses"
    },
    {
      "name": "Fuhajin (Medium)",
      "input": "214mk",
      "startup": 13,
      "active": "13-16",
      "recovery": 21,
      "onBlock": -6,
      "onHit": "",
      "notes": "Perform an upwards kick while capturing ki from your immediate surroundings. Increases your Fuha stock by 1 upon completion; Has a clash hitbox from frames 11 - 16; Adds 1 Fuha stock on frame 13"
    },
    {
      "name": "Fuhajin (Heavy)",
      "input": "214hk",
      "startup": 25,
      "active": "25-28",
      "recovery": 20,
      "onBlock": -8,
      "onHit": "",
      "notes": "Perform an upwards kick while capturing ki from your immediate surroundings. Increases your Fuha stock by 1 upon completion; Has a clash hitbox from frames 23 - 28; Adds 1 Fuha stock on frame 25"
    },
    {
      "name": "Fuhajin (OD)",
      "input": "214(kk)",
      "startup": 12,
      "active": "12-17",
      "recovery": 21,
      "onBlock": -12,
      "onHit": "",
      "notes": "Perform an upwards kick while capturing ki from your immediate surroundings. Increases your Fuha stock by 1 upon completion; Has a clash hitbox from frames 12 - 17; Adds 1 Fuha stock on frame 16"
    },
    {
      "name": "Saihasho",
      "input": "236lk",
      "startup": 16,
      "active": "",
      "recovery": "",
      "onBlock": -8,
      "onHit": -2,
      "notes": "A roundhouse kick that fires a projectile low to the ground. Useful for checking your opponents, in combos, or as a way to start offensive pressure; Can be followed up with an Ankensatsu or Go Ohsatsu when a Fuha is stocked"
    },
    {
      "name": "[Boosted] Saihasho",
      "input": "236lk",
      "startup": 16,
      "active": "",
      "recovery": "",
      "onBlock": -3,
      "onHit": 1,
      "notes": "A roundhouse kick that fires a projectile low to the ground. Useful for checking your opponents, in combos, or as a way to start offensive pressure; Can transition to boosted Ankenstatsu or boosted Go Ohsatsu when Fuha is stocked; Cannot use the same attack twice"
    },
    {
      "name": "Saihasho (OD)",
      "input": "236(lk+mk)",
      "startup": 11,
      "active": "",
      "recovery": "",
      "onBlock": -2,
      "onHit": "",
      "notes": "A roundhouse kick that fires a projectile low to the ground. Useful for checking your opponents, in combos, or as a way to start offensive pressure; Can transition to Overdrive Ankensatsu or Overdrive Go Ohsatsu when Fuha is stocked; Cannot use the same attack twice"
    },
    {
      "name": "Ankensatsu",
      "input": "236mk",
      "startup": 24,
      "active": "24-27",
      "recovery": 19,
      "onBlock": -10,
      "onHit": 5,
      "notes": "Leap forward in a low arc and come down with an axe kick. Useful as a way to approach while avoiding attacks targeted at your feet, and can also be used in combos; Invincible against projectiles and strikes with mid-air hitboxes from frames 8 - 27; Produces a slam knockdown on a mid-air hit"
    },
    {
      "name": "[Boosted] Ankensatsu",
      "input": "236mk",
      "startup": 24,
      "active": "24-27",
      "recovery": 19,
      "onBlock": -10,
      "onHit": 8,
      "notes": "Leap forward in a low arc and come down with an axe kick. Useful as a way to approach while avoiding attacks targeted at your feet, and can also be used in combos; Considered airborne from frames 8 - 27; Can transition to boosted Saihasho or boosted Go Ohsatsu when Fuha is stocked; Cannot use the same attack twice; Produces a floor bound during a mid-air hit"
    },
    {
      "name": "Ankensatsu (OD)",
      "input": "236(lk+hk)",
      "startup": 24,
      "active": "24-27",
      "recovery": 19,
      "onBlock": -10,
      "onHit": 9,
      "notes": "Leap forward in a low arc and come down with an axe kick. Useful as a way to approach while avoiding attacks targeted at your feet, and can also be used in combos; Considered airborne from frames 8 - 27; Can transition to Overdrive Saihasho or Overdrive Go Ohsatsu when Fuha is stocked; Cannot use the same attack twice; Produces a floor bound during a mid-air hit"
    },
    {
      "name": "Go Ohsatsu",
      "input": "236hk",
      "startup": 18,
      "active": "18-21",
      "recovery": 27,
      "onBlock": -11,
      "onHit": "",
      "notes": "Lunge forward and let fly a swift overhead roundhouse. Its long reach makes it effective when used for surprise attacks from a distance, and it can also be canceled into from normal moves to make combos"
    },
    {
      "name": "[Boosted] Go Ohsatsu",
      "input": "236hk",
      "startup": 18,
      "active": "18-21-34-36",
      "recovery": 27,
      "onBlock": -10,
      "onHit": "",
      "notes": "Lunge forward and let fly a swift overhead roundhouse. Its long reach makes it effective when used for surprise attacks from a distance, and it can also be canceled into from normal moves to make combos; Can transition to boosted Saihasho or boosted Ankensatsu when Fuha is stocked; Cannot use the same attack twice"
    },
    {
      "name": "Go Ohsatsu (OD)",
      "input": "236(mk+hk)",
      "startup": 18,
      "active": "18-21-34-36-65-69",
      "recovery": 28,
      "onBlock": -16,
      "onHit": "",
      "notes": "Lunge forward and let fly a swift overhead roundhouse. Its long reach makes it effective when used for surprise attacks from a distance, and it can also be canceled into from normal moves to make combos; Can transition to Overdrive Saihasho or Overdrive Ankensatsu when Fuha is stocked; Cannot use the same attack twice"
    },
    {
      "name": "Tensenrin (Light)",
      "input": "623lp",
      "startup": 11,
      "active": "11-13-16-17",
      "recovery": 22,
      "onBlock": -8,
      "onHit": "",
      "notes": "Rotate like a windmill while unleashing a series of kicks. Can be used in a variety of situations to deal big damage"
    },
    {
      "name": "Tensenrin (Medium)",
      "input": "623mp",
      "startup": 5,
      "active": "5-12-18-19-23-24",
      "recovery": "",
      "onBlock": -37,
      "onHit": "",
      "notes": "Rotate like a windmill while unleashing a series of kicks. Can be used in a variety of situations to deal big damage; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 8; Considered airborne from frames 8 - 48"
    },
    {
      "name": "Tensenrin (Heavy)",
      "input": "623hp",
      "startup": 5,
      "active": "5-12-18-19-23-24",
      "recovery": "",
      "onBlock": -37,
      "onHit": "",
      "notes": "Rotate like a windmill while unleashing a series of kicks. Can be used in a variety of situations to deal big damage; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 8; Considered airborne from frames 8 - 48"
    },
    {
      "name": "Tensenrin (OD)",
      "input": "623(pp)",
      "startup": 6,
      "active": "6-9-11-12-19-20-23-24",
      "recovery": "",
      "onBlock": -48,
      "onHit": "",
      "notes": "Rotate like a windmill while unleashing a series of kicks. Can be used in a variety of situations to deal big damage; Completely invincible from frames 1 - 9; Only transitions to the final attack if the attack hits"
    },
    {
      "name": "Shiku-sen",
      "input": "9>214*k",
      "startup": 18,
      "active": "18",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A surprise attack performed by kicking while airborne. Useful for surprise attacks or as a way to approach your opponent"
    },
    {
      "name": "Shiku-sen (OD)",
      "input": "9>214(kk)",
      "startup": 16,
      "active": "16",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A surprise attack performed by kicking while airborne. Useful for surprise attacks or as a way to approach your opponent"
    },
    {
      "name": "Shiren-sen",
      "input": "*k",
      "startup": 6,
      "active": "6-9-14-17-35-38",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "After shiku-sen; A series of kicks performed from Shiku-sen that tack on additional damage and knock the opponent down"
    },
    {
      "name": "Shiren-sen (OD)",
      "input": "(kk)",
      "startup": 6,
      "active": "6-9-14-17-35-38",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A series of kicks performed from Shiku-sen that tack on additional damage and knock the opponent down"
    },
    {
      "name": "Sakkai Fuhazan",
      "input": "236236*k",
      "startup": 7,
      "active": "",
      "recovery": "",
      "onBlock": -32,
      "onHit": "",
      "notes": "Fire multiple ki blasts with a kick and follow it up with another giant ki blast to knock an opponent away. Easy to work into aerial combos against opponents who have been launched into the air; Invincible to strikes and throws from frames 1 - 8; Minimum guaranteed damage is set to 30%; Values do not change on counter or Punish Counter; Hold down the button to increase damage by 300"
    },
    {
      "name": "Feng Shui Engine",
      "input": "214214*p",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Power up your abilities by unleashing the power of the Feng Shui Engine embedded in your eye. Once powered up, you will be able to cancel normal moves into other normal moves or even unique attacks; Allows you to perform chain combos on the ground or in the air while the technique is active; Can use the same strength attack button or a stronger attack button, but cannot chain down to weaker attacks; All normal attacks and some unique attacks can now cancel into special moves; Hold down the button during startup to rush forward"
    },
    {
      "name": "Feng Shui Engine (Rush)",
      "input": "214214[*p]",
      "startup": 9,
      "active": "9-19",
      "recovery": 26,
      "onBlock": -17,
      "onHit": -4,
      "notes": "During Feng Shui Engine's activation start-up; Power up your abilities by unleashing the power of the Feng Shui Engine embedded in your eye. Once powered up, you will be able to cancel normal moves into other normal moves or even unique attacks; Minimum guaranteed damage is set to 40%; Values do not change on counter or Punish Counter; Hold down the button to rush forward; Forces a juggle state knockdown when hitting a mid-air opponent; Can cancel into normal moves, unique attacks, special moves, super arts, and Drive Impacts"
    },
    {
      "name": "Kaisen Dankai Raku",
      "input": "214214*k",
      "startup": 10,
      "active": "10-13",
      "recovery": 52,
      "onBlock": -31,
      "onHit": "",
      "notes": "Unleash the full power of the Feng Shui Engine to perform a powerful sequence of attacks. Useful when trying to tack on big damage during combos or when turning the tables on your opponent; Completely invincible from frames 1 - 13; Minimum guaranteed damage is set to 50%; Values do not change on counter or Punish Counter; Can only be canceled into from special moves"
    },
    {
      "name": "Kaisen Dankai Raku (Critical Art)",
      "input": "214214*k",
      "startup": 10,
      "active": "10-13",
      "recovery": 52,
      "onBlock": -31,
      "onHit": "",
      "notes": "When under 25% vitality; Unleash the full power of the Feng Shui Engine to perform a powerful sequence of attacks. Useful when trying to tack on big damage during combos or when turning the tables on your opponent; Completely invincible from frames 1 - 13; Minimum guaranteed damage is set to 50%; Values do not change on counter or Punish Counter; Can only be canceled into from special moves"
    },
    {
      "name": "Spider Fang Throw",
      "input": "(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab your opponent's head with your foot to make them hunch over, and send them flying with two kicks. Throws your opponent without switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Shadow Kick Throw",
      "input": "(4lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Use one foot to knock your opponent down, and follow up by stepping on their back. Throws your opponent while switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Zanka-sen",
      "input": "j>(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During a jump; When near opponent; Latch onto an airborne opponent's back and kick them to the ground behind you. Throws your opponent while switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    }
  ],
  "kimberly": [
    {
      "name": "Standing Light Punch",
      "input": "5lp",
      "startup": 5,
      "active": "5-6",
      "recovery": 8,
      "onBlock": -2,
      "onHit": 5,
      "notes": ""
    },
    {
      "name": "Standing Medium Punch",
      "input": "5mp",
      "startup": 6,
      "active": "6-8",
      "recovery": 18,
      "onBlock": -2,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Standing Heavy Punch",
      "input": "5hp",
      "startup": 9,
      "active": "9-11",
      "recovery": 20,
      "onBlock": -4,
      "onHit": 3,
      "notes": "Add +23 frames of advantage on Punish Counter"
    },
    {
      "name": "Standing Light Kick",
      "input": "5lk",
      "startup": 5,
      "active": "5-7",
      "recovery": 11,
      "onBlock": -3,
      "onHit": 1,
      "notes": ""
    },
    {
      "name": "Standing Medium Kick",
      "input": "5mk",
      "startup": 8,
      "active": "8-10",
      "recovery": 18,
      "onBlock": -4,
      "onHit": 1,
      "notes": ""
    },
    {
      "name": "Standing Heavy Kick",
      "input": "5hk",
      "startup": 12,
      "active": "12-15",
      "recovery": 17,
      "onBlock": 2,
      "onHit": 7,
      "notes": ""
    },
    {
      "name": "Crouching Light Punch",
      "input": "2lp",
      "startup": 4,
      "active": "4-6",
      "recovery": 7,
      "onBlock": -2,
      "onHit": 4,
      "notes": ""
    },
    {
      "name": "Crouching Medium Punch",
      "input": "2mp",
      "startup": 6,
      "active": "6-8",
      "recovery": 13,
      "onBlock": -1,
      "onHit": 7,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Punch",
      "input": "2hp",
      "startup": 8,
      "active": "8-13",
      "recovery": 17,
      "onBlock": -2,
      "onHit": 3,
      "notes": "Forces the opponent into a standing position"
    },
    {
      "name": "Crouching Light Kick",
      "input": "2lk",
      "startup": 5,
      "active": "5-7",
      "recovery": 7,
      "onBlock": -2,
      "onHit": 2,
      "notes": ""
    },
    {
      "name": "Crouching Medium Kick",
      "input": "2mk",
      "startup": 7,
      "active": "7-9",
      "recovery": 16,
      "onBlock": 1,
      "onHit": 5,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Kick",
      "input": "2hk",
      "startup": 8,
      "active": "8-10",
      "recovery": 24,
      "onBlock": -10,
      "onHit": "",
      "notes": "Knockdown time extended when attack lands as a counter or Punish Counter"
    },
    {
      "name": "Jumping Light Punch",
      "input": "j>lp",
      "startup": 4,
      "active": "4-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Punch",
      "input": "j>mp",
      "startup": 6,
      "active": "6-9",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Heavy Punch",
      "input": "j>hp",
      "startup": 8,
      "active": "8-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Light Kick",
      "input": "j>lk",
      "startup": 5,
      "active": "5-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Medium Kick",
      "input": "j>mk",
      "startup": 7,
      "active": "7-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Heavy Kick",
      "input": "j>hk",
      "startup": 9,
      "active": "9-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Water Slicer Slide",
      "input": "3mk",
      "startup": 11,
      "active": "11-20",
      "recovery": 16,
      "onBlock": -9,
      "onHit": -3,
      "notes": "Slide along the ground toward your opponent. This is a low attack that cannot be blocked standing"
    },
    {
      "name": "Windmill Kick",
      "input": "4hk",
      "startup": 22,
      "active": "22-23",
      "recovery": 19,
      "onBlock": -3,
      "onHit": 4,
      "notes": "An overhead attack that cannot be blocked while crouching; Forces opponent to crouch on hit"
    },
    {
      "name": "Hisen Kick",
      "input": "6hk",
      "startup": 27,
      "active": "27-29",
      "recovery": 21,
      "onBlock": -3,
      "onHit": 1,
      "notes": "A leaping kick with long reach. Useful as a counter to an opponent's sweeps; Considered airborne from frames 18 - 32; Forces a juggle state when hitting a mid-air opponent; Recovery is reduced by 8 frames when blocked"
    },
    {
      "name": "Step Up",
      "input": "7|8|9",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": -22,
      "onHit": -10,
      "notes": "After hisen kick; Performed from Hisen Kick, this maneuver can be used to jump in one of three directions"
    },
    {
      "name": "Elbow Drop",
      "input": "j>2mp",
      "startup": 13,
      "active": "13-25",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "At the peak of a forward jump; A descending attack with a long duration that can be performed while jumping; Forces a slam knockdown when hitting a mid-air opponent"
    },
    {
      "name": "Bushin Tiger Fangs",
      "input": "mp>hp",
      "startup": 10,
      "active": "10-12",
      "recovery": 26,
      "onBlock": -12,
      "onHit": "",
      "notes": "A quick series of attacks that can be canceled into special moves"
    },
    {
      "name": "Bushin Prism Strikes (2)",
      "input": "lp>mp",
      "startup": 6,
      "active": "6-8",
      "recovery": 18,
      "onBlock": -6,
      "onHit": 1,
      "notes": "A quick combination attack that hits multiple times"
    },
    {
      "name": "Bushin Prism Strikes (3)",
      "input": "lp>mp>hp",
      "startup": 12,
      "active": "12-13",
      "recovery": 25,
      "onBlock": -10,
      "onHit": "",
      "notes": "A quick combination attack that hits multiple times"
    },
    {
      "name": "Bushin Prism Strikes (4)",
      "input": "lp>mp>hp>hk",
      "startup": 26,
      "active": "26-28",
      "recovery": 24,
      "onBlock": -12,
      "onHit": "",
      "notes": "A quick combination attack that hits multiple times"
    },
    {
      "name": "Bushin Hellchain (3)",
      "input": "lp>mp>2hp",
      "startup": 10,
      "active": "10-11",
      "recovery": 25,
      "onBlock": -10,
      "onHit": 2,
      "notes": "A combination attack that sends an opponent flying"
    },
    {
      "name": "Bushin Hellchain (4)",
      "input": "lp>mp>2hp>hk",
      "startup": 15,
      "active": "15-17",
      "recovery": 24,
      "onBlock": -12,
      "onHit": "",
      "notes": "A combination attack that sends an opponent flying"
    },
    {
      "name": "Bushin Hellchain Throw",
      "input": "lp>mp>2hp>2hk",
      "startup": 15,
      "active": "15-17",
      "recovery": 23,
      "onBlock": -12,
      "onHit": "",
      "notes": "A combination attack that switches places with your opponent"
    },
    {
      "name": "Bushin Senpu-kyaku (Light)",
      "input": "214lk",
      "startup": 6,
      "active": "6-11-13-18-20-25-34-36",
      "recovery": "",
      "onBlock": -30,
      "onHit": "",
      "notes": "Unleash a series of spinning kicks while leaping into the air. Useful in combos and as an anti-air attack; Invincible against projectiles and strikes with mid-air hitboxes from frames 5 - 11; Considered airborne from frames 7 - 42; Invincible to throws from frames 7 - 11"
    },
    {
      "name": "Bushin Senpu-kyaku (Medium)",
      "input": "214mk",
      "startup": 7,
      "active": "7-12-14-19-21-26-35-37",
      "recovery": "",
      "onBlock": -32,
      "onHit": "",
      "notes": "Unleash a series of spinning kicks while leaping into the air. Useful in combos and as an anti-air attack; Invincible against projectiles and strikes with mid-air hitboxes from frames 6 - 12; Considered airborne from frames 8 - 45; Invincible to throws from frames 8 - 12"
    },
    {
      "name": "Bushin Senpu-kyaku (Heavy)",
      "input": "214hk",
      "startup": 8,
      "active": "8-13-15-20-22-27-36-38",
      "recovery": "",
      "onBlock": -35,
      "onHit": "",
      "notes": "Unleash a series of spinning kicks while leaping into the air. Useful in combos and as an anti-air attack; Invincible against projectiles and strikes with mid-air hitboxes from frames 7 - 13; Considered airborne from frames 9 - 49; Invincible to throws from frames 9 - 13"
    },
    {
      "name": "Bushin Senpu-kyaku (OD)",
      "input": "214(kk)",
      "startup": 6,
      "active": "6-11-13-18-20-25-27-32-34-35",
      "recovery": "",
      "onBlock": -40,
      "onHit": "",
      "notes": "Unleash a series of spinning kicks while leaping into the air. Useful in combos and as an anti-air attack; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 11; Considered airborne from frames 7 - 47; Invincible to throws from frames 7 - 11; Only the 4th hit can be canceled into a Level 2 Super Art"
    },
    {
      "name": "Aerial Bushin Senpu-kyaku",
      "input": "9>214*k",
      "startup": 8,
      "active": "8-9-17-18-26-27",
      "recovery": "",
      "onBlock": 1,
      "onHit": 5,
      "notes": "A Bushin Senpukyaku performed while jumping. Effective when used to combo opponents being juggled in the air"
    },
    {
      "name": "Aerial Bushin Senpu-kyaku (OD)",
      "input": "9>214(kk)",
      "startup": 8,
      "active": "8-9-12-14-17-18-21-23-26-27",
      "recovery": "",
      "onBlock": 1,
      "onHit": 5,
      "notes": "A Bushin Senpukyaku performed while jumping. Effective when used to combo opponents being juggled in the air; Has cross-up attack properties"
    },
    {
      "name": "Sprint",
      "input": "236*k",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Swiftly dash forward to close the distance with your opponent, during which a variety of moves can be performed; Kimberly can transition to branching attacks from the 8th frame; After the 16th frame, if the opponent is within a certain distance, Kimberly will automatically perform Arc Step"
    },
    {
      "name": "Emergency Stop",
      "input": "*p",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During Sprint; Halt Sprint's movement to adjust the distance you cover or as a way to reduce how much you leave yourself open following a Sprint"
    },
    {
      "name": "Torso Cleaver",
      "input": "lk",
      "startup": 21,
      "active": "21-27",
      "recovery": 16,
      "onBlock": 1,
      "onHit": "",
      "notes": "During Sprint; A somersault kick performed from Sprint. Effective as an anti-air attack targeting opponents who tend to jump around a lot"
    },
    {
      "name": "Shadow Slide",
      "input": "mk",
      "startup": 10,
      "active": "10-21",
      "recovery": 19,
      "onBlock": -12,
      "onHit": "",
      "notes": "During Sprint; A sliding attack aimed at an opponent's feet, performed from Sprint. It is a low attack that cannot be blocked standing, and is effective when used as a surprise attack from a distance"
    },
    {
      "name": "Neck Hunter",
      "input": "hk",
      "startup": 19,
      "active": "19-23",
      "recovery": 19,
      "onBlock": -3,
      "onHit": "",
      "notes": "During Sprint; An overhead swinging kick performed from Sprint. It cannot be blocked crouching, and is useful as a way to break through an opponent's guard"
    },
    {
      "name": "Arc Step",
      "input": "5",
      "startup": 8,
      "active": "8-9-16-17",
      "recovery": 26,
      "onBlock": -6,
      "onHit": 3,
      "notes": "Automatically activates after getting close with Sprint; Approach your opponent with Sprint and then kick off their body to leap backwards. Can be followed up with either an attack or a throw after the leap; Considered airborne from frames 10 - 43; Can transition into branching attacks from frame 35"
    },
    {
      "name": "Bushin Izuna Otoshi",
      "input": "*p",
      "startup": 13,
      "active": "13-18",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During Arc Step; A throw attack performed from Arc Step in which you leap onto and grab your opponent. Useful against opponents who keep their guard up after blocking Arc Step; With Classic Controls; Does 1656 individual damage when the attack lands as a Punish Counter; With Modern Controls; Does 1324 individual damage when the attack lands as a Punish Counter"
    },
    {
      "name": "Bushin Hojin Kick",
      "input": "*k",
      "startup": 13,
      "active": "13-18",
      "recovery": "",
      "onBlock": -8,
      "onHit": "",
      "notes": "During Arc Step; A move performed from Arc Step in which you descend diagonally with a swift kick. Useful in combos and as a way to lock down opponents who try to move after Arc Step"
    },
    {
      "name": "Sprint (OD)",
      "input": "236(kk)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Swiftly dash forward to close the distance with your opponent, during which a variety of moves can be performed; Kimberly can transition to Emergency Stop from the 6th frame; Kimberly can transition to Torso Cleaver, Shadow Slide and Neck Hunter from the 8th frame; After the 14th frame, if the opponent is within a certain distance, Kimberly will automatically perform Arc Step"
    },
    {
      "name": "Emergency Stop (OD)",
      "input": "*p",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During Sprint OD; Halt Sprint's movement to adjust the distance you cover or as a way to reduce how much you leave yourself open following a Sprint"
    },
    {
      "name": "Torso Cleaver (OD)",
      "input": "lk",
      "startup": 17,
      "active": "17-18-19-23",
      "recovery": 16,
      "onBlock": 3,
      "onHit": "",
      "notes": "During Sprint OD; A somersault kick performed from Sprint. Effective as an anti-air attack targeting opponents who tend to jump around a lot"
    },
    {
      "name": "Shadow Slide (OD)",
      "input": "mk",
      "startup": 8,
      "active": "8-15-16-19",
      "recovery": 19,
      "onBlock": -10,
      "onHit": "",
      "notes": "During Sprint OD; A sliding attack aimed at an opponent's feet, performed from Sprint. It is a low attack that cannot be blocked standing, and is effective when used as a surprise attack from a distance"
    },
    {
      "name": "Neck Hunter (OD)",
      "input": "hk",
      "startup": 15,
      "active": "15-16-17-19",
      "recovery": 19,
      "onBlock": -1,
      "onHit": "",
      "notes": "During Sprint OD; An overhead swinging kick performed from Sprint. It cannot be blocked crouching, and is useful as a way to break through an opponent's guard; Adds a floor bounding effect during a mid-air hit"
    },
    {
      "name": "Arc Step (OD)",
      "input": "5",
      "startup": 8,
      "active": "8-9-16-17",
      "recovery": 26,
      "onBlock": -6,
      "onHit": 3,
      "notes": "During Sprint OD; Approach your opponent with Sprint and then kick off their body to leap backwards. Can be followed up with either an attack or a throw after the leap; Considered airborne from frames 10 - 43; Can transition into branching attacks from frame 35"
    },
    {
      "name": "Bushin Izuna Otoshi (OD)",
      "input": "*p",
      "startup": 13,
      "active": "13-18",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During Arc Step OD; A throw attack performed from Arc Step in which you leap onto and grab your opponent. Useful against opponents who keep their guard up after blocking Arc Step; With Classic Controls; Does 1035 individual damage when the attack lands as a Punish Counter; With Modern Controls; Does 828 individual damage when the attack lands as a Punish Counter"
    },
    {
      "name": "Bushin Hojin Kick (OD)",
      "input": "*k",
      "startup": 13,
      "active": "13-18",
      "recovery": "",
      "onBlock": -8,
      "onHit": "",
      "notes": "During Arc Step OD; A move performed from Arc Step in which you descend diagonally with a swift kick. Useful in combos and as a way to lock down opponents who try to move after Arc Step; Only transitions to the 2nd attack on hit; Produces a wall splat on hit"
    },
    {
      "name": "Vagabond Edge (Light)",
      "input": "236lp",
      "startup": 10,
      "active": "10-12",
      "recovery": 21,
      "onBlock": -5,
      "onHit": 3,
      "notes": "Lunge forward while unleashing a powerful chop. Useful when canceled into from normal moves to create combos. The heavy and Overdrive versions can be canceled with a jump"
    },
    {
      "name": "Vagabond Edge (Medium)",
      "input": "236mp",
      "startup": 17,
      "active": "17-18-41-43",
      "recovery": 28,
      "onBlock": -12,
      "onHit": "",
      "notes": "Lunge forward while unleashing a powerful chop. Useful when canceled into from normal moves to create combos. The heavy and Overdrive versions can be canceled with a jump; Will only transition to 2nd attack if the first attack hits"
    },
    {
      "name": "Vagabond Edge (Heavy)",
      "input": "236hp",
      "startup": 24,
      "active": "24-25-45",
      "recovery": 28,
      "onBlock": -12,
      "onHit": "",
      "notes": "Lunge forward while unleashing a powerful chop. Useful when canceled into from normal moves to create combos. The heavy and Overdrive versions can be canceled with a jump; Will only transition to 2nd attack if the first attack hits; The 2nd attack can be canceled by a jump"
    },
    {
      "name": "Vagabond Edge (OD)",
      "input": "236(pp)",
      "startup": 17,
      "active": "17-18-38",
      "recovery": 28,
      "onBlock": -12,
      "onHit": "",
      "notes": "Lunge forward while unleashing a powerful chop. Useful when canceled into from normal moves to create combos. The heavy and Overdrive versions can be canceled with a jump; Will only transition to 2nd attack if the first attack hits; The 2nd attack can be canceled by a jump"
    },
    {
      "name": "Hidden Variable",
      "input": "214*p",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Conceal yourself with smoke and instantly appear before your opponent. Useful as a way to close the distance with your opponent or as a way to launch a surprise offensive; Completely invincible from frames 19 - 26; Can be canceled into anything except walk/dashes, Drive Parry, Block and Hidden Variable from the 34th frame"
    },
    {
      "name": "Hidden Variable (OD)",
      "input": "214(pp)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Conceal yourself with smoke and instantly appear before your opponent. Useful as a way to close the distance with your opponent or as a way to launch a surprise offensive; Completely invincible from frames 20 - 27; Can be canceled into a mid-air attack from the 34th frame; Landing recovery can be canceled by anything except walk/dashes"
    },
    {
      "name": "Genius at Play",
      "input": "22*p",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Tamper with a spray can to get an additional stock. Once stocked, input the same command again to activate a Shuriken Bomb; Adds a Shuriken Bomb stock on frame 43"
    },
    {
      "name": "Shuriken Bomb (Light)",
      "input": "22lp",
      "startup": 122,
      "active": "122-131",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "With at least 1 shuriken bomb stock; Toss out and set a spray can that will explode after a period of time. Best used to apply pressure that capitalizes on the duration between when the bomb is placed and its detonation; Fires a projectile on the 18th frame; Decreases the Shuriken Bomb stock by 1; Values represent when the attack is performed in the middle of the screen"
    },
    {
      "name": "Shuriken Bomb (Medium)",
      "input": "22mp",
      "startup": 124,
      "active": "124-133",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "With at least 1 shuriken bomb stock; Toss out and set two spray cans that will explode after a period of time. Can be used following an OD Genius at Play; Fires a projectile on the 18th frame; Decreases the Shuriken Bomb stock by 1; Values represent when the attack is performed in the middle of the screen"
    },
    {
      "name": "Shuriken Bomb (Heavy)",
      "input": "22hp",
      "startup": 128,
      "active": "128-137",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "With at least 1 shuriken bomb stock; Toss out and set two spray cans that will explode after a period of time. Can be used following an OD Genius at Play; Fires a projectile on the 18th frame; Decreases the Shuriken Bomb stock by 1; Values represent when the attack is performed in the middle of the screen"
    },
    {
      "name": "Genius at Play (OD)",
      "input": "22(pp)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Tamper with a spray can to get an additional stock. Once stocked, input the same command again to activate a Shuriken Bomb; Adds 2 Shuriken Bomb stock on frame 43"
    },
    {
      "name": "Shuriken Bomb Spread (Light)",
      "input": "22(lp+mp)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "With at least 2 shuriken bomb stocks; Toss out and set two spray cans that will explode after a period of time. Can be used following an OD Genius at Play; Fires 2 projectiles on the 18th frame (Light and Medium versions); Decreases the Shuriken Bomb stock by 2; Projectile properties are the same as the individual attacks"
    },
    {
      "name": "Shuriken Bomb Spread (Medium)",
      "input": "22(lp+hp)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "With at least 2 shuriken bomb stocks; Toss out and set two spray cans that will explode after a period of time. Can be used following an OD Genius at Play; Fires 2 projectiles on the 18th frame (Light and Heavy versions); Decreases the Shuriken Bomb stock by 2; Projectile properties are the same as the individual attacks"
    },
    {
      "name": "Shuriken Bomb Spread (Heavy)",
      "input": "22(mp+hp)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "With at least 2 shuriken bomb stocks; Toss out and set two spray cans that will explode after a period of time. Can be used following an OD Genius at Play; Fires 2 projectiles on the 18th frame (Medium and Heavy versions); Decreases the Shuriken Bomb stock by 2; Projectile properties are the same as the individual attacks"
    },
    {
      "name": "Nue Twister",
      "input": "j>236*p",
      "startup": 5,
      "active": "5-7",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Grab an airborne opponent and smash them into the ground below. Its high damage makes it an effective anti-air or mid-air combo option; Does 1656 individual damage when the attack lands as a Punish Counter"
    },
    {
      "name": "Nue Twister (OD)",
      "input": "j>236(pp)",
      "startup": 5,
      "active": "5-7",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Grab an airborne opponent and smash them into the ground below. Its high damage makes it an effective anti-air or mid-air combo option; Does 1035 individual damage when the attack lands as a Punish Counter"
    },
    {
      "name": "Bushin Beats",
      "input": "236236*k",
      "startup": 10,
      "active": "10-24",
      "recovery": 40,
      "onBlock": -25,
      "onHit": "",
      "notes": "Rush forward and knock down an opponent, then follow up with a flurry of attacks. Use this as a part of a combo while on the ground, or as a follow-up attack if they're airborne; Invincible to strikes and throws on frames 1 - 14; Minimum guaranteed damage is 30%; Values do not change on counter or Punish Counter"
    },
    {
      "name": "Bushin Thunderous Beats",
      "input": "236236*k",
      "startup": 10,
      "active": "10-24",
      "recovery": 40,
      "onBlock": -25,
      "onHit": "",
      "notes": "With at least 1 shuriken bomb stock; Hold to use shuriken; Adds a Shuriken Bomb follow-up attack after using Bushin Beats. Damage increases but requires one stock of Shuriken Bombs to activate; Invincible to strikes and throws on frames 1 - 14; Minimum guaranteed damage is 30%; Values do not change on counter or Punish Counter"
    },
    {
      "name": "Bushin Scramble",
      "input": "214214*p",
      "startup": 13,
      "active": "13-20",
      "recovery": "",
      "onBlock": -25,
      "onHit": "",
      "notes": "Ensnare the opponent with a dive bomb-like attack from the air, and then pelt them relentlessly with mid-air attacks. An excellent choice against projectiles or airborne opponents; Completely invincible on the 1st frame; Considered airborne from frames 1- 20; Minimum guaranteed damage is 40%; Values do not change on counter or Punish Counter"
    },
    {
      "name": "Soaring Bushin Scramble",
      "input": "9>214214*p",
      "startup": 13,
      "active": "13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Activate Bushin Scramble in mid-air to dive bomb the opponent and attack them relentlessly. Easy to use in a combo from a mid-air special move; Completely invincible on the 1st frame; Considered airborne from frame 1 and on; Minimum guaranteed damage is 40%; Values do not change on counter or Punish Counter"
    },
    {
      "name": "Bushin Ninjastar Cypher",
      "input": "236236*p",
      "startup": 8,
      "active": "8-13",
      "recovery": 51,
      "onBlock": -35,
      "onHit": "",
      "notes": "Launch the opponent into the air, and attack them while detonating numerous spray cans. After the attack, Kimberly's walk speed and attack power will be boosted; Completely invincible from frames 1 - 13; On the first frame, the following boosts are activated and remain until the end of the match; - Attack damage up 111%; - Walk speed increased; Minimum guaranteed damage is 50%; Values do not change on counter or Punish Counter; Can only be canceled into from special moves"
    },
    {
      "name": "Bushin Ninjastar Cypher (Critical Art)",
      "input": "236236*p",
      "startup": 8,
      "active": "8-13",
      "recovery": 51,
      "onBlock": -35,
      "onHit": "",
      "notes": "When under 25% vitality; Launch the opponent into the air, and attack them while detonating numerous spray cans. After the attack, Kimberly's walk speed and attack power will be boosted; Completely invincible from frames 1 - 13; On the first frame, the following boosts are activated and remain until the end of the match; - Attack damage up 111%; - Walk speed increased; Minimum guaranteed damage is 50%; Values do not change on counter or Punish Counter; Can only be canceled into from special moves"
    },
    {
      "name": "Ripcord Throw",
      "input": "(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Break your opponent's poise with a chop, leap over them to disrupt their balance, and toss them aside. Throws your opponent without switching places with them; Punish Counter properties; - Damage set to 1838 (1839); - Super Art gauge increases by 4000; - Produces a Hard Knockdown"
    },
    {
      "name": "Bell Ringer",
      "input": "(4lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Place both legs on your opponent's torso and perform a knee strike, then use the force of pulling them toward the ground to throw them behind you. Throws your opponent while switching places with them; Punish Counter properties; - Damage set to 1838 (1839); - Super Art gauge increases by 4000; - Produces a Hard Knockdown"
    }
  ],
  "lily": [
    {
      "name": "Standing Light Punch",
      "input": "5lp",
      "startup": 5,
      "active": "5-7",
      "recovery": 8,
      "onBlock": -1,
      "onHit": 6,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Standing Medium Punch",
      "input": "5mp",
      "startup": 9,
      "active": "9-12",
      "recovery": 17,
      "onBlock": -4,
      "onHit": 1,
      "notes": ""
    },
    {
      "name": "Standing Heavy Punch",
      "input": "5hp",
      "startup": 11,
      "active": "11-13",
      "recovery": 22,
      "onBlock": -5,
      "onHit": 0,
      "notes": "Produces a crumple stun on Punish Counter if the opponent is standing on the ground; Forces a juggle state on Punish Counter when hitting a mid-air opponent"
    },
    {
      "name": "Standing Light Kick",
      "input": "5lk",
      "startup": 4,
      "active": "4-6",
      "recovery": 8,
      "onBlock": -1,
      "onHit": 5,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Standing Medium Kick",
      "input": "5mk",
      "startup": 7,
      "active": "7-9",
      "recovery": 15,
      "onBlock": -1,
      "onHit": 2,
      "notes": ""
    },
    {
      "name": "Standing Heavy Kick",
      "input": "5hk",
      "startup": 14,
      "active": "14-17",
      "recovery": 21,
      "onBlock": -5,
      "onHit": 1,
      "notes": "Forces a juggle state on Punish Counter"
    },
    {
      "name": "Crouching Light Punch",
      "input": "2lp",
      "startup": 6,
      "active": "6-8",
      "recovery": 8,
      "onBlock": -1,
      "onHit": 5,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Punch",
      "input": "2mp",
      "startup": 8,
      "active": "8-10",
      "recovery": 18,
      "onBlock": -3,
      "onHit": 1,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Punch",
      "input": "2hp",
      "startup": 10,
      "active": "10-11-12-15",
      "recovery": 22,
      "onBlock": -2,
      "onHit": 0,
      "notes": "Forces a juggle state on counter or Punish Counter when hitting a mid-air opponent"
    },
    {
      "name": "Crouching Light Kick",
      "input": "2lk",
      "startup": 5,
      "active": "5-6",
      "recovery": 12,
      "onBlock": -2,
      "onHit": 2,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Kick",
      "input": "2mk",
      "startup": 9,
      "active": "9-11",
      "recovery": 18,
      "onBlock": -5,
      "onHit": 1,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Kick",
      "input": "2hk",
      "startup": 11,
      "active": "11-12-19-20",
      "recovery": 24,
      "onBlock": -12,
      "onHit": "",
      "notes": "Knockdown time extended when attack lands as a counter or Punish Counter; Second attack is considered a high attack only when the first attack is blocked"
    },
    {
      "name": "Jumping Light Punch",
      "input": "j>lp",
      "startup": 5,
      "active": "5-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Punch",
      "input": "j>mp",
      "startup": 9,
      "active": "9-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Heavy Punch",
      "input": "j>hp",
      "startup": 10,
      "active": "10-15",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a slam knockdown when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Light Kick",
      "input": "j>lk",
      "startup": 6,
      "active": "6-11",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Medium Kick",
      "input": "j>mk",
      "startup": 8,
      "active": "8-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Heavy Kick",
      "input": "j>hk",
      "startup": 11,
      "active": "11-16",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Condor Wind (Light)",
      "input": "214lp",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Twirl your clubs above your head to summon and envelop yourself in wind. This will grant you one Windclad stock, which powers up certain special moves; Adds 1 stock of Windclad on frame 46 if the button is released in the fastest situation; Adds 1 stock on frames 71 and 91 if the button is held; Changes the properties of Condor Spire, Tomahawk Buster, Condor Dive, Thunderbird and Sky Thunderbird after a stock is added"
    },
    {
      "name": "Condor Wind (Medium)",
      "input": "214mp",
      "startup": 23,
      "active": "23-26",
      "recovery": 25,
      "onBlock": -8,
      "onHit": "",
      "notes": "Twirl your clubs above your head to summon and envelop yourself in wind. This will grant you one Windclad stock, which powers up certain special moves; Adds 1 stock of Windclad on the 1st active frame of the attack if the button is released by frame 45; If the button is held, adds a Windclad stock on frames 46, 71 and 91; Changes the properties of Condor Spire, Tomahawk Buster, Condor Dive, Thunderbird and Sky Thunderbird after a stock is added; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Condor Wind (Heavy)",
      "input": "214hp",
      "startup": 25,
      "active": "25-28",
      "recovery": 25,
      "onBlock": -8,
      "onHit": "",
      "notes": "Twirl your clubs above your head to summon and envelop yourself in wind. This will grant you one Windclad stock, which powers up certain special moves; Adds 1 stock of Windclad on the 1st active frame of the attack if the button is released by frame 45; If the button is held, adds a Windclad stock on frames 46, 71 and 91; Changes the properties of Condor Spire, Tomahawk Buster, Condor Dive, Thunderbird and Sky Thunderbird after a stock is added"
    },
    {
      "name": "Condor Wind (OD)",
      "input": "214(pp)",
      "startup": 19,
      "active": "19-22",
      "recovery": 23,
      "onBlock": -5,
      "onHit": "",
      "notes": "Twirl your clubs above your head to summon and envelop yourself in wind. This will grant you one Windclad stock, which powers up certain special moves; Adds 1 stock of Windclad on the 1st active frame of the attack if the button is released by frame 25; If the button is held, adds a Windclad stock on frames 38, or for the full 40 frames of the move; Changes the properties of Condor Spire, Tomahawk Buster, Condor Dive, Thunderbird and Sky Thunderbird after a stock is added"
    },
    {
      "name": "Condor Spire (Light)",
      "input": "236lk",
      "startup": 17,
      "active": "17-29",
      "recovery": 16,
      "onBlock": -8,
      "onHit": "",
      "notes": "Leap into the air and charge forward while remaining low to the ground. Useful as a way of approaching from a distance; Considered airborne from frames 8 - 30"
    },
    {
      "name": "Condor Spire (Medium)",
      "input": "236mk",
      "startup": 21,
      "active": "21-33",
      "recovery": 16,
      "onBlock": -8,
      "onHit": "",
      "notes": "Leap into the air and charge forward while remaining low to the ground. Useful as a way of approaching from a distance; Considered airborne from frames 9 - 35"
    },
    {
      "name": "Condor Spire (Heavy)",
      "input": "236hk",
      "startup": 25,
      "active": "25-37",
      "recovery": 16,
      "onBlock": -8,
      "onHit": "",
      "notes": "Leap into the air and charge forward while remaining low to the ground. Useful as a way of approaching from a distance; Considered airborne from frames 11 - 39"
    },
    {
      "name": "Condor Spire (OD)",
      "input": "236(kk)",
      "startup": 15,
      "active": "15-27",
      "recovery": 16,
      "onBlock": -8,
      "onHit": "",
      "notes": "Leap into the air and charge forward while remaining low to the ground. Useful as a way of approaching from a distance; Considered airborne from frames 7 - 29; Can only be canceled by Level 2 Super Art Thunderbird"
    },
    {
      "name": "[Windclad] Condor Spire (Light)",
      "input": "236lk",
      "startup": 9,
      "active": "9-13-20-30-31-37",
      "recovery": 14,
      "onBlock": 1,
      "onHit": "",
      "notes": "Considered airborne from frames 9 - 39"
    },
    {
      "name": "[Windclad] Condor Spire (Medium)",
      "input": "236mk",
      "startup": 13,
      "active": "13-17-24-34-35-41",
      "recovery": 14,
      "onBlock": 1,
      "onHit": "",
      "notes": "Considered airborne from frames 13 - 43"
    },
    {
      "name": "[Windclad] Condor Spire (Heavy)",
      "input": "236hk",
      "startup": 17,
      "active": "17-21-28-38-39-45",
      "recovery": 14,
      "onBlock": 1,
      "onHit": "",
      "notes": "Considered airborne from frames 17 - 47"
    },
    {
      "name": "[Windclad] Condor Spire (OD)",
      "input": "236(kk)",
      "startup": 9,
      "active": "9-22-23-25-26-32",
      "recovery": 14,
      "onBlock": 2,
      "onHit": "",
      "notes": "Leap into the air and charge forward while remaining low to the ground. Useful as a way of approaching from a distance; Considered airborne from frames 9 - 34; Invincible to projectiles from frames 9 - 32; Can only be canceled by level 2 Super Art Sky Thunderbird"
    },
    {
      "name": "Tomahawk Buster (Light)",
      "input": "623lp",
      "startup": 6,
      "active": "6-16",
      "recovery": 20,
      "onBlock": -27,
      "onHit": "",
      "notes": "Use the momentum of swinging your arms to diagonally leap into the air with a tackle. It is invincible against jumping attacks, making it useful as an anti-air attack; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 10; Considered airborne from frames 7 - 37"
    },
    {
      "name": "Tomahawk Buster (Medium)",
      "input": "623mp",
      "startup": 8,
      "active": "8-19",
      "recovery": 24,
      "onBlock": -32,
      "onHit": "",
      "notes": "Use the momentum of swinging your arms to diagonally leap into the air with a tackle. It is invincible against jumping attacks, making it useful as an anti-air attack; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 12; Considered airborne from frames 9 - 44"
    },
    {
      "name": "Tomahawk Buster (Heavy)",
      "input": "623hp",
      "startup": 10,
      "active": "10-23",
      "recovery": 25,
      "onBlock": -35,
      "onHit": "",
      "notes": "Use the momentum of swinging your arms to diagonally leap into the air with a tackle. It is invincible against jumping attacks, making it useful as an anti-air attack; Invincible to mid-air attacks on frames 1- 14; Considered airborne from frames 11 - 49"
    },
    {
      "name": "Tomahawk Buster (OD)",
      "input": "623(pp)",
      "startup": 6,
      "active": "6-17",
      "recovery": 27,
      "onBlock": -35,
      "onHit": "",
      "notes": "Use the momentum of swinging your arms to diagonally leap into the air with a tackle. It is invincible against jumping attacks, making it useful as an anti-air attack; Invincible against projectiles and strikes with mid-air hitboxes from frames 11 - 14; Invincible to throws from frames 1 - 10; Considered airborne from frames 7 - 45; Can only transition into Overdrive Condor Dive"
    },
    {
      "name": "[Windclad] Tomahawk Buster (Light)",
      "input": "623lp",
      "startup": 4,
      "active": "4-7-8-16",
      "recovery": 20,
      "onBlock": -25,
      "onHit": "",
      "notes": "Use the momentum of swinging your arms to diagonally leap into the air with a tackle. It is invincible against jumping attacks, making it useful as an anti-air attack; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 10; Considered airborne from frames 7 - 37"
    },
    {
      "name": "[Windclad] Tomahawk Buster (Medium)",
      "input": "623mp",
      "startup": 6,
      "active": "6-9",
      "recovery": 24,
      "onBlock": -30,
      "onHit": "",
      "notes": "Use the momentum of swinging your arms to diagonally leap into the air with a tackle. It is invincible against jumping attacks, making it useful as an anti-air attack; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 12; Considered airborne from frames 9 - 44"
    },
    {
      "name": "[Windclad] Tomahawk Buster (Heavy)",
      "input": "623hp",
      "startup": 8,
      "active": "8-11-12-23",
      "recovery": 25,
      "onBlock": -33,
      "onHit": "",
      "notes": "Use the momentum of swinging your arms to diagonally leap into the air with a tackle. It is invincible against jumping attacks, making it useful as an anti-air attack; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 14; Considered airborne from frames 11 - 49"
    },
    {
      "name": "[Windclad] Tomahawk Buster (OD)",
      "input": "623(pp)",
      "startup": 4,
      "active": "4-5-6-7-8-17",
      "recovery": 27,
      "onBlock": -35,
      "onHit": "",
      "notes": "Use the momentum of swinging your arms to diagonally leap into the air with a tackle. It is invincible against jumping attacks, making it useful as an anti-air attack; Invincible against projectiles and strikes with mid-air hitboxes from frames 11 - 14; Invincible to throws from frames 1 - 10; Considered airborne from frames 7 - 45; Can only transition into Overdrive Condor Dive"
    },
    {
      "name": "Condor Dive",
      "input": "{8|9}+(pp)",
      "startup": 12,
      "active": "12",
      "recovery": "",
      "onBlock": -24,
      "onHit": "",
      "notes": "While airborne, diagonally descend with a powerful tackle. Useful for making surprise attacks from the air or as a way to counterattack someone after dodging a projectile; Has cross-up attack properties"
    },
    {
      "name": "Condor Dive (OD)",
      "input": "{8|9}+(ppp)",
      "startup": 12,
      "active": "12",
      "recovery": "",
      "onBlock": -24,
      "onHit": "",
      "notes": "During a neutral of forward jump; During Tomahawk Buster OD; While airborne, diagonally descend with a powerful tackle. Useful for making surprise attacks from the air or as a way to counterattack someone after dodging a projectile; Has cross-up attack properties; If transitioned from Overdrive Tomahawk Buster, combo scaling is 35%"
    },
    {
      "name": "[Windclad] Condor Dive",
      "input": "{8|9}+(pp)",
      "startup": 12,
      "active": "12",
      "recovery": "",
      "onBlock": -23,
      "onHit": "",
      "notes": "A more powerful Condor Dive. Can also be used after an OD Tomahawk Buster; Has cross-up attack properties; When the first attack hits, the 2nd hit will happen on the next frame"
    },
    {
      "name": "[Windclad] Condor Dive (OD)",
      "input": "{8|9}+(ppp)",
      "startup": 12,
      "active": "12",
      "recovery": "",
      "onBlock": -23,
      "onHit": "",
      "notes": "During a neutral of forward jump; During Tomahawk Buster OD; Has cross-up attack properties; When the first attack hits, the 2nd hit will happen on the next frame; If transitioned from Overdrive Tomahawk Buster, combo scaling is 35%"
    },
    {
      "name": "Mexican Typhoon (Light)",
      "input": "{360}+lp",
      "startup": 5,
      "active": "5-7",
      "recovery": 53,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab your opponent with both war clubs and smash them into the ground with a spinning slam. Useful for slipping through an opponent's guard at close range; Damage set to 2300 on Punish Counter"
    },
    {
      "name": "Mexican Typhoon (Medium)",
      "input": "{360}+mp",
      "startup": 5,
      "active": "5-7",
      "recovery": 53,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab your opponent with both war clubs and smash them into the ground with a spinning slam. Useful for slipping through an opponent's guard at close range; Damage set to 2760 on Punish Counter"
    },
    {
      "name": "Mexican Typhoon (Heavy)",
      "input": "{360}+hp",
      "startup": 5,
      "active": "5-7",
      "recovery": 53,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab your opponent with both war clubs and smash them into the ground with a spinning slam. Useful for slipping through an opponent's guard at close range; With Classic Controls; Does 3220 individual damage when the attack lands as a Punish Counter; With Modern Controls; Does 3220 individual damage when the attack lands as a Punish Counter; Does 2576 individual damage using simplified inputs"
    },
    {
      "name": "Mexican Typhoon (OD)",
      "input": "{360}+(pp)",
      "startup": 5,
      "active": "5-7",
      "recovery": 53,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab your opponent with both war clubs and smash them into the ground with a spinning slam. Useful for slipping through an opponent's guard at close range; With Classic Controls; Does 3350 individual damage when the attack lands as a Punish Counter; With Modern Controls; Does 3350 individual damage when the attack lands as a Punish Counter; Does 2680 individual damage using simplified inputs"
    },
    {
      "name": "Breezing Hawk",
      "input": "236236*p",
      "startup": 10,
      "active": "10-11-17-18-26-27-36-37-46-47",
      "recovery": 54,
      "onBlock": -36,
      "onHit": "",
      "notes": "After the attack begins, you'll unleash a series of spinning attacks centered around your opponent. It is slow to come out, but it does lots of damage and is invincible at the start; Invincible to strikes and throws from frames 1 - 14; Transitions to the full animation on the 2nd hit; Values do not change on counter or Punish Counter; Minimum guaranteed damage is set to 30%"
    },
    {
      "name": "Thunderbird",
      "input": "236236*k",
      "startup": 9,
      "active": "9-10-13-15-16-18-19-21-22-24-25-27-28-30-40-41",
      "recovery": 39,
      "onBlock": -48,
      "onHit": "",
      "notes": "Remaining in place, leap directly upwards while unleashing a series of spinning attacks. It executes quickly, making it useful as an anti-air attack or as a way to turn the tables while doing lots of damage; Fully invincible from frames 1 - 41; Considered airborne from frames 7 - 80; Values do not change on counter or Punish Counter; Minimum guaranteed damage is set to 40%"
    },
    {
      "name": "[Windclad] Thunderbird",
      "input": "236236*k",
      "startup": 9,
      "active": "9-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-25-26-27-28-29-30-31-33-40-41",
      "recovery": 39,
      "onBlock": -48,
      "onHit": "",
      "notes": "Thunderbird performed while airborne. It is primarily useful as a way to finish air combos; Fully invincible from frames 1 - 41; Considered airborne from frames 7 - 80; Values do not change on counter or Punish Counter; Minimum guaranteed damage is set to 40%"
    },
    {
      "name": "Soaring Thunderbird",
      "input": "j>236236*k",
      "startup": 9,
      "active": "9-10-13-15-16-18-19-21-22-24-25-27-28-30-40-41",
      "recovery": "",
      "onBlock": -54,
      "onHit": "",
      "notes": "Thunderbird performed while airborne. It is primarily useful as a way to finish air combos; Fully invincible from frames 1 - 41; Considered airborne; Values do not change on counter or Punish Counter; Minimum guaranteed damage is set to 40%"
    },
    {
      "name": "[Windclad] Soaring Thunderbird",
      "input": "j>236236*k",
      "startup": 9,
      "active": "9-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-25-26-27-28-29-30-31-33-40-41",
      "recovery": "",
      "onBlock": -51,
      "onHit": "",
      "notes": "Thunderbird performed while airborne. It is primarily useful as a way to finish air combos; Fully invincible from frames 1 - 41; Considered airborne; Values do not change on counter or Punish Counter; Minimum guaranteed damage is set to 40%"
    },
    {
      "name": "Raging Typhoon",
      "input": "214214*p",
      "startup": 7,
      "active": "7-8",
      "recovery": 106,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; A more powerful Mexican Typhoon in which you smash your opponent into the ground twice. Can be used to slip through an opponent's guard at close range and deal tons of damage all at once; Fully invincible from frames 1 - 8; Values do not change on counter or Punish Counter; Minimum guaranteed damage is set to 50%"
    },
    {
      "name": "Raging Typhoon (Critical Art)",
      "input": "214214*p",
      "startup": 7,
      "active": "7-8",
      "recovery": 106,
      "onBlock": "",
      "onHit": "",
      "notes": "When under 25% vitality; A more powerful Mexican Typhoon in which you smash your opponent into the ground twice. Can be used to slip through an opponent's guard at close range and deal tons of damage all at once; Fully invincible from frames 1 - 8; Values do not change on counter or Punish Counter; Minimum guaranteed damage is set to 50%"
    },
    {
      "name": "Ridge Thrust",
      "input": "3hp",
      "startup": 25,
      "active": "25-27",
      "recovery": 18,
      "onBlock": -3,
      "onHit": 2,
      "notes": "An overhead attack that cannot be blocked while crouching; Invincible to low attacks from frames 5 - 19"
    },
    {
      "name": "Horn Breaker",
      "input": "4hp",
      "startup": 14,
      "active": "14-17",
      "recovery": 18,
      "onBlock": -2,
      "onHit": 5,
      "notes": "An attack with long reach that can be canceled into special moves"
    },
    {
      "name": "Great Spin",
      "input": "j>2hp",
      "startup": 9,
      "active": "9-19",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A body press with an area of attack so wide that it can hit an opponent even if it crosses over them; Has cross-up attack properties"
    },
    {
      "name": "Double Arrow",
      "input": "j>5mp>5mp",
      "startup": 10,
      "active": "10-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A combination attack that is useful against jumping opponents; Forces a juggle state on a mid-air hit; Can only be canceled by Level 2 Super Art Thunderbird"
    },
    {
      "name": "Desert Storm (1)",
      "input": "6hp",
      "startup": 18,
      "active": "18-19",
      "recovery": 24,
      "onBlock": -5,
      "onHit": 1,
      "notes": "A sequence of attacks that deals big damage; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Desert Storm (2)",
      "input": "6hp>5hp",
      "startup": 20,
      "active": "20-21",
      "recovery": 27,
      "onBlock": -9,
      "onHit": 0,
      "notes": "A sequence of attacks that deals big damage; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Desert Storm (3)",
      "input": "6hp>5hp>5hp",
      "startup": 20,
      "active": "20-24",
      "recovery": 42,
      "onBlock": -26,
      "onHit": "",
      "notes": "A sequence of attacks that deals big damage"
    },
    {
      "name": "Canyon Throw",
      "input": "(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab an opponent's leg with your war clubs and toss them into the air. Throws your opponent without switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Falling Cliff",
      "input": "(4lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab an opponent's head between your war clubs and toss them behind you. Throws your opponent while switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    }
  ],
  "luke": [
    {
      "name": "Standing Light Punch",
      "input": "5lp",
      "startup": 7,
      "active": "7-8",
      "recovery": 11,
      "onBlock": -3,
      "onHit": 2,
      "notes": "3 frames of recovery added when the attack misses"
    },
    {
      "name": "Standing Medium Punch",
      "input": "5mp",
      "startup": 9,
      "active": "9-12",
      "recovery": 16,
      "onBlock": -3,
      "onHit": 2,
      "notes": ""
    },
    {
      "name": "Standing Heavy Punch",
      "input": "5hp",
      "startup": 10,
      "active": "10-12",
      "recovery": 23,
      "onBlock": -6,
      "onHit": 1,
      "notes": ""
    },
    {
      "name": "Standing Light Kick",
      "input": "5lk",
      "startup": 5,
      "active": "5-6",
      "recovery": 12,
      "onBlock": -2,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Standing Medium Kick",
      "input": "5mk",
      "startup": 8,
      "active": "8-10",
      "recovery": 16,
      "onBlock": -3,
      "onHit": 1,
      "notes": "3 frames of recovery added when the attack misses"
    },
    {
      "name": "Standing Heavy Kick",
      "input": "5hk",
      "startup": 10,
      "active": "10-16",
      "recovery": 16,
      "onBlock": -5,
      "onHit": 2,
      "notes": "Forces a juggle state when hitting a mid-air opponent; Forces a juggle state when the attack lands as a Punish Counter; Feet are Invincible from frame 8 to frame 15"
    },
    {
      "name": "Crouching Light Punch",
      "input": "2lp",
      "startup": 4,
      "active": "4-5",
      "recovery": 10,
      "onBlock": -2,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Punch",
      "input": "2mp",
      "startup": 6,
      "active": "6-7",
      "recovery": 14,
      "onBlock": 1,
      "onHit": 5,
      "notes": "3 frames of recovery added when the attack misses"
    },
    {
      "name": "Crouching Heavy Punch",
      "input": "2hp",
      "startup": 7,
      "active": "7-11",
      "recovery": 24,
      "onBlock": -13,
      "onHit": 1,
      "notes": "Forces the opponent into a standing position; This move can be canceled until the 1st active frame"
    },
    {
      "name": "Crouching Light Kick",
      "input": "2lk",
      "startup": 5,
      "active": "5-7",
      "recovery": 12,
      "onBlock": -5,
      "onHit": -1,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Kick",
      "input": "2mk",
      "startup": 8,
      "active": "8-10",
      "recovery": 19,
      "onBlock": -6,
      "onHit": -2,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Kick",
      "input": "2hk",
      "startup": 10,
      "active": "10-12",
      "recovery": 27,
      "onBlock": -9,
      "onHit": "",
      "notes": "Knockdown time extended when attack lands as a counter or Punish Counter"
    },
    {
      "name": "Jumping Light Punch",
      "input": "j>lp",
      "startup": 5,
      "active": "5-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Punch",
      "input": "j>mp",
      "startup": 9,
      "active": "9-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Heavy Punch",
      "input": "j>hp",
      "startup": 9,
      "active": "9-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a slam knockdown on counter or Punish Counter when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Light Kick",
      "input": "j>lk",
      "startup": 6,
      "active": "6-11",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Medium Kick",
      "input": "j>mk",
      "startup": 7,
      "active": "7-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Heavy Kick",
      "input": "j>hk",
      "startup": 10,
      "active": "10-15",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Rawhide",
      "input": "6mp",
      "startup": 21,
      "active": "21-22",
      "recovery": 21,
      "onBlock": -3,
      "onHit": 2,
      "notes": "An overhead attack that cannot be blocked while crouching; Forces a slam knockdown when hitting a mid-air opponent"
    },
    {
      "name": "Suppressor",
      "input": "4hp",
      "startup": 16,
      "active": "16-18",
      "recovery": 20,
      "onBlock": -3,
      "onHit": 3,
      "notes": "A strike unleashed after stepping backward. Can be canceled into special moves"
    },
    {
      "name": "Outlaw Kick",
      "input": "4hk",
      "startup": 12,
      "active": "12-15",
      "recovery": 24,
      "onBlock": -5,
      "onHit": 4,
      "notes": "A powerful anti-air high kick; 17 frames of advantage added when the attack lands as a Punish Counter; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Double Impact (1)",
      "input": "6hp",
      "startup": 16,
      "active": "16-18",
      "recovery": 15,
      "onBlock": -3,
      "onHit": 3,
      "notes": "A series of attacks performed while moving forward. The second attack can be canceled into special moves; 4 frames of recovery added when the attack misses"
    },
    {
      "name": "Double Impact (2)",
      "input": "6hp>hp",
      "startup": 11,
      "active": "11-12",
      "recovery": 34,
      "onBlock": -19,
      "onHit": "",
      "notes": "A series of attacks performed while moving forward. The second attack can be canceled into special moves"
    },
    {
      "name": "Triple Impact (2)",
      "input": "lp>mp",
      "startup": 8,
      "active": "8-11",
      "recovery": 20,
      "onBlock": -9,
      "onHit": -2,
      "notes": "A quick series of attacks that can be canceled into special moves"
    },
    {
      "name": "Triple Impact (3)",
      "input": "lp>mp>hp",
      "startup": 10,
      "active": "10-12",
      "recovery": 27,
      "onBlock": -14,
      "onHit": "",
      "notes": "A quick series of attacks that can be canceled into special moves"
    },
    {
      "name": "Nose Breaker",
      "input": "2mk>2hp",
      "startup": 9,
      "active": "9-11",
      "recovery": 25,
      "onBlock": -8,
      "onHit": 1,
      "notes": "An attack consisting of multiple hits, the first of which cannot be blocked while standing"
    },
    {
      "name": "Snapback Combo (2)",
      "input": "mp>mp",
      "startup": 12,
      "active": "12-13",
      "recovery": 23,
      "onBlock": -8,
      "onHit": 0,
      "notes": "A series of attacks, the first and second of which can be canceled into Super Arts"
    },
    {
      "name": "Snapback Combo (3)",
      "input": "mp>mp>mp",
      "startup": 11,
      "active": "11-12",
      "recovery": 29,
      "onBlock": -14,
      "onHit": -6,
      "notes": "A series of attacks, the first and second of which can be canceled into Super Arts"
    },
    {
      "name": "Snapback Combo (4)",
      "input": "mp>mp>mp>mp",
      "startup": 11,
      "active": "11-12",
      "recovery": 27,
      "onBlock": -12,
      "onHit": "",
      "notes": "A series of attacks, the first and second of which can be canceled into Super Arts"
    },
    {
      "name": "Sand Blast (Light)",
      "input": "236lp",
      "startup": 14,
      "active": "14-18",
      "recovery": "",
      "onBlock": -8,
      "onHit": -3,
      "notes": "Fire a shockwave of pressure from your fist. Useful for checking an opponent from a distance, and as a stopgap in combos"
    },
    {
      "name": "Sand Blast (Medium)",
      "input": "236mp",
      "startup": 17,
      "active": "17-23",
      "recovery": "",
      "onBlock": -5,
      "onHit": 0,
      "notes": "Fire a shockwave of pressure from your fist. Useful for checking an opponent from a distance, and as a stopgap in combos"
    },
    {
      "name": "Sand Blast (Heavy)",
      "input": "236hp",
      "startup": 20,
      "active": "20-29",
      "recovery": "",
      "onBlock": -2,
      "onHit": 3,
      "notes": "Fire a shockwave of pressure from your fist. Useful for checking an opponent from a distance, and as a stopgap in combos"
    },
    {
      "name": "Sand Blast (OD)",
      "input": "236(pp)",
      "startup": 16,
      "active": "",
      "recovery": "",
      "onBlock": -2,
      "onHit": "",
      "notes": "Fire a shockwave of pressure from your fist. Useful for checking an opponent from a distance, and as a stopgap in combos"
    },
    {
      "name": "Fatal Shot",
      "input": "(pp)",
      "startup": 12,
      "active": "",
      "recovery": "",
      "onBlock": -21,
      "onHit": "",
      "notes": "After an od sand blast; Fire an additional shockwave after an OD Sand Blast. Useful for securing some damage after trading projectiles; Consumes 10000 of the Drive gauge on activation"
    },
    {
      "name": "Flash Knuckle (Light)",
      "input": "214lp",
      "startup": 13,
      "active": "13-15",
      "recovery": 31,
      "onBlock": -18,
      "onHit": "",
      "notes": "A full powered, chargeable punch. Increase the damage output by holding down the button at the beginning. Release the button when you see a flash to further boost its properties; Hold the button for more than 18 frames to change properties; Perform the Perfect version by releasing the button between frames 18 - 20"
    },
    {
      "name": "Charged Flash Knuckle (Light)",
      "input": "214[lp]",
      "startup": 26,
      "active": "26-29",
      "recovery": 25,
      "onBlock": -8,
      "onHit": "",
      "notes": "A full powered, chargeable punch. Increase the damage output by holding down the button at the beginning. Release the button when you see a flash to further boost its properties; Has a clash hitbox from frame 28 to frame 29; Combo scaling added to 2nd hit"
    },
    {
      "name": "Perfect Flash Knuckle (Light)",
      "input": "214[lp]",
      "startup": 26,
      "active": "26-29",
      "recovery": 25,
      "onBlock": -8,
      "onHit": "",
      "notes": "A Flash Knuckle performed while jumping. Can be used to alter the trajectory of your jump, making it useful for surprise attacks. Can also be worked into aerial combos; Has a clash hitbox from frame 28 to frame 29; Combo scaling added to 2nd hit"
    },
    {
      "name": "Flash Knuckle (Medium)",
      "input": "214mp",
      "startup": 19,
      "active": "19-21",
      "recovery": 27,
      "onBlock": -10,
      "onHit": 3,
      "notes": "A full powered, chargeable punch. Increase the damage output by holding down the button at the beginning. Release the button when you see a flash to further boost its properties; Hold the button for more than 18 frames to change properties; Perform the Perfect version by releasing the button between frames 18 - 20"
    },
    {
      "name": "Charged Flash Knuckle (Medium)",
      "input": "214[mp]",
      "startup": 30,
      "active": "30-33",
      "recovery": 26,
      "onBlock": -3,
      "onHit": "",
      "notes": "A full powered, chargeable punch. Increase the damage output by holding down the button at the beginning. Release the button when you see a flash to further boost its properties; Has a clash hitbox from frame 32 to frame 33; Combo scaling added to 2nd hit; Recovery reduced by 4 frames on super armor hit"
    },
    {
      "name": "Perfect Flash Knuckle (Medium)",
      "input": "214[mp]",
      "startup": 29,
      "active": "29-32",
      "recovery": 26,
      "onBlock": -3,
      "onHit": "",
      "notes": "A Flash Knuckle performed while jumping. Can be used to alter the trajectory of your jump, making it useful for surprise attacks. Can also be worked into aerial combos; Has a clash hitbox from frame 31 to frame 32; Combo scaling added to 2nd hit"
    },
    {
      "name": "Flash Knuckle (Heavy)",
      "input": "214hp",
      "startup": 22,
      "active": "22-24",
      "recovery": 21,
      "onBlock": -4,
      "onHit": "",
      "notes": "A full powered, chargeable punch. Increase the damage output by holding down the button at the beginning. Release the button when you see a flash to further boost its properties; Hold the button for more than 18 frames to change properties; Perform the Perfect version by releasing the button between frames 18 - 20"
    },
    {
      "name": "Charged Flash Knuckle (Heavy)",
      "input": "214[hp]",
      "startup": 33,
      "active": "33-36",
      "recovery": 24,
      "onBlock": 4,
      "onHit": "",
      "notes": "A full powered, chargeable punch. Increase the damage output by holding down the button at the beginning. Release the button when you see a flash to further boost its properties; Has a clash hitbox from frame 35 to frame 36"
    },
    {
      "name": "Perfect Flash Knuckle (Heavy)",
      "input": "214[hp]",
      "startup": 33,
      "active": "33-36",
      "recovery": 24,
      "onBlock": 4,
      "onHit": "",
      "notes": "A Flash Knuckle performed while jumping. Can be used to alter the trajectory of your jump, making it useful for surprise attacks. Can also be worked into aerial combos; Has a clash hitbox from frame 35 to frame 36"
    },
    {
      "name": "Flash Knuckle (OD)",
      "input": "214(pp)",
      "startup": 15,
      "active": "15",
      "recovery": 39,
      "onBlock": -22,
      "onHit": "",
      "notes": "A full powered, chargeable punch. Increase the damage output by holding down the button at the beginning. Release the button when you see a flash to further boost its properties; Transitions to 2nd attack on hit; Can only be canceled into DDT on the 1st hit"
    },
    {
      "name": "Flash Knuckle (OD) (2)",
      "input": "214(pp)",
      "startup": 33,
      "active": "33-36",
      "recovery": 16,
      "onBlock": "",
      "onHit": "",
      "notes": "A full powered, chargeable punch. Increase the damage output by holding down the button at the beginning. Release the button when you see a flash to further boost its properties"
    },
    {
      "name": "DDT",
      "input": "(pp)",
      "startup": 1,
      "active": "1",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "After an Flash Knuckle OD; A powerful throw activated from the first hit of an OD Flash Knuckle. Useful for when you want to guarantee some extra damage; Consumes 10000 of the Drive gauge on activation"
    },
    {
      "name": "Aerial Flash Knuckle",
      "input": "{8|9}>214*p",
      "startup": 14,
      "active": "14-18",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A Flash Knuckle performed while jumping. Can be used to alter the trajectory of your jump, making it useful for surprise attacks. Can also be worked into aerial combos; +7 frames of recovery added when whiffing the attack high in the air."
    },
    {
      "name": "Aerial Flash Knuckle (Charged)",
      "input": "{8|9}>214[*p]",
      "startup": 23,
      "active": "23-28",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A Flash Knuckle performed while jumping. Can be used to alter the trajectory of your jump, making it useful for surprise attacks. Can also be worked into aerial combos"
    },
    {
      "name": "Aerial Flash Knuckle (OD)",
      "input": "{8|9}>214(pp)",
      "startup": 14,
      "active": "14-19",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A Flash Knuckle performed while jumping. Can be used to alter the trajectory of your jump, making it useful for surprise attacks. Can also be worked into aerial combos"
    },
    {
      "name": "Avenger",
      "input": "214*k",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Charge ahead in a forward-leaning stance. Other moves can be executed out of Avenger by pressing a button during its animation; Can transition to branching attacks from frames 13 - 31"
    },
    {
      "name": "No Chaser",
      "input": "*p",
      "startup": 12,
      "active": "12-21",
      "recovery": 16,
      "onBlock": -6,
      "onHit": "",
      "notes": "During Avenger; A powerful tackle that can be executed during Avenger. This attack is active for a while, making it a useful tool for closing in on your opponent"
    },
    {
      "name": "Avenger (OD)",
      "input": "214(kk)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During Avenger OD; Charge ahead in a forward-leaning stance. Other moves can be executed out of Avenger by pressing a button during its animation; Super Armor for 1 attack from frames 3 - 35; Can transition to branching attacks from frames 12 - 31"
    },
    {
      "name": "Impaler",
      "input": "*k",
      "startup": 13,
      "active": "13",
      "recovery": 22,
      "onBlock": -8,
      "onHit": "",
      "notes": "During Avenger; An overhead kick that can be executed during Avenger and cannot be blocked while crouching. Useful when trying to sneak through an opponent's guard, or as part of a combo; 5 frames of recovery added when the attack misses"
    },
    {
      "name": "No Chaser (OD)",
      "input": "*p",
      "startup": 12,
      "active": "12-21",
      "recovery": 16,
      "onBlock": -6,
      "onHit": "",
      "notes": "During Avenger OD; A powerful tackle that can be executed during Avenger. This attack is active for a while, making it a useful tool for closing in on your opponent"
    },
    {
      "name": "Impaler (OD)",
      "input": "*k",
      "startup": 13,
      "active": "13",
      "recovery": 19,
      "onBlock": -5,
      "onHit": "",
      "notes": "An overhead kick that can be executed during Avenger and cannot be blocked while crouching. Useful when trying to sneak through an opponent's guard, or as part of a combo"
    },
    {
      "name": "Rising Uppercut (Light)",
      "input": "623lp",
      "startup": 5,
      "active": "5-14",
      "recovery": 22,
      "onBlock": -27,
      "onHit": "",
      "notes": "Unleash a ferocious punch as you leap diagonally upwards. It grants immunity to jumping attacks, making it useful as an anti-air technique; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 14; Considered airborne from frames 8 - 36; Does 800 individual damage from the 3rd active frame and on"
    },
    {
      "name": "Rising Uppercut (Medium)",
      "input": "623mp",
      "startup": 6,
      "active": "6-15",
      "recovery": 24,
      "onBlock": -29,
      "onHit": "",
      "notes": "Unleash a ferocious punch as you leap diagonally upwards. It grants immunity to jumping attacks, making it useful as an anti-air technique; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 8; Considered airborne from frames 9 - 39; Does 800 individual damage from the 3rd active frame and on"
    },
    {
      "name": "Rising Uppercut (Heavy)",
      "input": "623hp",
      "startup": 9,
      "active": "9-18",
      "recovery": 25,
      "onBlock": -33,
      "onHit": "",
      "notes": "Unleash a ferocious punch as you leap diagonally upwards. It grants immunity to jumping attacks, making it useful as an anti-air technique; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 9; Considered airborne from frames 11 - 43; Does 800 individual damage from the 3rd active frame and on"
    },
    {
      "name": "Rising Uppercut (OD)",
      "input": "623(pp)",
      "startup": 6,
      "active": "6-8-9-15",
      "recovery": 35,
      "onBlock": -40,
      "onHit": "",
      "notes": "Unleash a ferocious punch as you leap diagonally upwards. It grants immunity to jumping attacks, making it useful as an anti-air technique; Completely invincible from frames 1 - 10; Considered airborne from frames 8 - 50; Can only transition to Slam Dunk on hit"
    },
    {
      "name": "Slam Dunk",
      "input": "(pp)",
      "startup": 16,
      "active": "16-18",
      "recovery": 14,
      "onBlock": "",
      "onHit": "",
      "notes": "After a Rising Uppercut OD; An attack executed from an OD Rising Uppercut that slams an opponent to the ground. In addition to its high damage, it leaves you in an advantageous position afterward; Consumes 10000 of the Drive gauge on activation"
    },
    {
      "name": "Vulcan Blast",
      "input": "236236*p",
      "startup": 6,
      "active": "",
      "recovery": "",
      "onBlock": -29,
      "onHit": "",
      "notes": "Fire multiple high-speed Sand Blasts. Its swift speed makes it useful in projectile wars and in combos; Invincible to strikes and throws from frames 1 - 6; Minimum guaranteed damage is 30%; Values do not change on counter or Punish Counter"
    },
    {
      "name": "Eraser",
      "input": "214214*p",
      "startup": 5,
      "active": "5-7",
      "recovery": 51,
      "onBlock": -29,
      "onHit": 0,
      "notes": "A series of punches punctuated by a powerful finishing blow that sends an opponent flying. Connecting with the first hit is enough to activate the combination attack that follows; Completely invincible from frames 1 - 7; Transitions to full attack after the 2nd hit; Minimum guaranteed damage is 40%; Values do not change on counter or Punish Counter"
    },
    {
      "name": "Pale Rider",
      "input": "236236*k",
      "startup": 10,
      "active": "10-13",
      "recovery": 92,
      "onBlock": -42,
      "onHit": "",
      "notes": "Charge and mount the opponent before unloading a flurry of powerful punches. It has long forward range, making it useful in combos, or as a way to deal with projectiles; Start up changes depending on the distance from the opponent; When activated from close range; Start up is 10 frames, and completely invincible from frames 1 - 13; When activated from furthest possible range; Start up is 27 frames, and completely invincible from frames 1 - 13; Minimum guaranteed damage is 50%; Values do not change on counter or Punish Counter; Can only be canceled into from special moves"
    },
    {
      "name": "Pale Rider (Critical Art)",
      "input": "236236*k",
      "startup": 10,
      "active": "10-13",
      "recovery": 92,
      "onBlock": -42,
      "onHit": "",
      "notes": "When under 25% vitality; Start up changes depending on the distance from the opponent; When activated from close range; Start up is 10 frames, and completely invincible from frames 1 - 13; When activated from furthest possible range; Start up is 27 frames, and completely invincible from frames 1 - 13; Minimum guaranteed damage is 50%; Values do not change on counter or Punish Counter; Can only be canceled into from special moves"
    },
    {
      "name": "Sweeper",
      "input": "(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab your opponent, lift them up, and slam them onto their back. Throws your opponent without switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Scrapper",
      "input": "(4lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab your opponent's head and send them flying with two knee strikes. Throws your opponent while switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    }
  ],
  "jamie": [
    {
      "name": "Standing Light Punch",
      "input": "5lp",
      "startup": 5,
      "active": "5-6",
      "recovery": 7,
      "onBlock": 0,
      "onHit": 5,
      "notes": ""
    },
    {
      "name": "Standing Medium Punch",
      "input": "5mp",
      "startup": 8,
      "active": "8-11",
      "recovery": 14,
      "onBlock": 2,
      "onHit": 5,
      "notes": ""
    },
    {
      "name": "Standing Heavy Punch",
      "input": "5hp",
      "startup": 5,
      "active": "5-5-7-12-14",
      "recovery": 20,
      "onBlock": -3,
      "onHit": 1,
      "notes": "Can be canceled until the 1st active frame; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Standing Light Kick",
      "input": "5lk",
      "startup": 5,
      "active": "5-6",
      "recovery": 11,
      "onBlock": -1,
      "onHit": 3,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Standing Medium Kick",
      "input": "5mk",
      "startup": 10,
      "active": "10-12",
      "recovery": 17,
      "onBlock": -3,
      "onHit": 2,
      "notes": ""
    },
    {
      "name": "Standing Heavy Kick",
      "input": "5hk",
      "startup": 15,
      "active": "15-17",
      "recovery": 21,
      "onBlock": -5,
      "onHit": 1,
      "notes": "Produces a crumple stun on Punish Counter; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Crouching Light Punch",
      "input": "2lp",
      "startup": 4,
      "active": "4-5",
      "recovery": 9,
      "onBlock": -1,
      "onHit": 5,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Punch",
      "input": "2mp",
      "startup": 6,
      "active": "6-8",
      "recovery": 13,
      "onBlock": -1,
      "onHit": 5,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Punch",
      "input": "2hp",
      "startup": 9,
      "active": "9-13",
      "recovery": 23,
      "onBlock": -8,
      "onHit": 0,
      "notes": "Forces the opponent into a standing position; Can be canceled until the 2nd active frame"
    },
    {
      "name": "Crouching Light Kick",
      "input": "2lk",
      "startup": 5,
      "active": "5-6",
      "recovery": 11,
      "onBlock": -3,
      "onHit": 1,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Kick",
      "input": "2mk",
      "startup": 7,
      "active": "7-9",
      "recovery": 18,
      "onBlock": -6,
      "onHit": -1,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Kick",
      "input": "2hk",
      "startup": 9,
      "active": "9-10-13-15",
      "recovery": 28,
      "onBlock": -11,
      "onHit": "",
      "notes": "Hard knockdown when hitting an opponent standing on the ground; Knockdown time extended when attack lands as a counter or Punish Counter; Forces a juggle state when hitting a mid-air opponent; 1 frames of recovery added when the attack misses; Second attack is considered a high attack only when the first attack is blocked"
    },
    {
      "name": "Jumping Light Punch",
      "input": "j>lp",
      "startup": 5,
      "active": "5-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Medium Punch",
      "input": "j>mp",
      "startup": 7,
      "active": "7-10",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Heavy Punch",
      "input": "j>hp",
      "startup": 10,
      "active": "10-15",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a slam knockdown when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Light Kick",
      "input": "j>lk",
      "startup": 6,
      "active": "6-11",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Kick",
      "input": "j>mk",
      "startup": 7,
      "active": "7-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Heavy Kick",
      "input": "j>hk",
      "startup": 8,
      "active": "8-10-16-19",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Tensei Kick",
      "input": "2(kk)",
      "startup": 9,
      "active": "9-11",
      "recovery": 22,
      "onBlock": -8,
      "onHit": "",
      "notes": "A launching kick that can immediately be jumped out of on hit; Can only be canceled into a jump if the attack hits"
    },
    {
      "name": "Phantom Sway (2)",
      "input": "2hk>hk",
      "startup": 12,
      "active": "12-14",
      "recovery": 43,
      "onBlock": -28,
      "onHit": "",
      "notes": "A sequence of attacks, the first of which cannot be blocked standing. Your drink level will go up after the part of the attack where you take a drink is complete"
    },
    {
      "name": "Phantom Sway (3)",
      "input": "2hk>hk>*p",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A sequence of attacks, the first of which cannot be blocked standing. Your drink level will go up after the part of the attack where you take a drink is complete; Adds 1 Drink level at frame 56; If Drink Level is at 4, recovers 10,000 Drive Gauge"
    },
    {
      "name": "Falling Star Kick",
      "input": "6mk",
      "startup": 22,
      "active": "22-24",
      "recovery": 20,
      "onBlock": -3,
      "onHit": 1,
      "notes": "An overhead attack that cannot be blocked while crouching"
    },
    {
      "name": "Hermit's Elbow",
      "input": "4hp",
      "startup": 18,
      "active": "18-21",
      "recovery": 20,
      "onBlock": -3,
      "onHit": 1,
      "notes": "An elbow strike that can be canceled into Super Arts. This move's effect changes at drink level 3, making it more powerful"
    },
    {
      "name": "Sensei Kick",
      "input": "6hk",
      "startup": 16,
      "active": "16-18",
      "recovery": 20,
      "onBlock": -3,
      "onHit": 3,
      "notes": "A lunging kick that can be canceled into Super Arts. This move's effect changes at drink level 4, making it more powerful"
    },
    {
      "name": "Bitter Strikes (1) (Drink level 1+)",
      "input": "5lp",
      "startup": 5,
      "active": "5-7",
      "recovery": 9,
      "onBlock": -3,
      "onHit": 2,
      "notes": "Available at Drink Level 1 or higher"
    },
    {
      "name": "Bitter Strikes (2) (Drink level 1+)",
      "input": "5lp>5lk",
      "startup": 6,
      "active": "6-7",
      "recovery": 16,
      "onBlock": -8,
      "onHit": -3,
      "notes": "Available at Drink Level 1 or higher"
    },
    {
      "name": "Bitter Strikes (3) (Drink level 1+)",
      "input": "5lp>5lk>5mp",
      "startup": 8,
      "active": "8-10",
      "recovery": 21,
      "onBlock": -10,
      "onHit": -2,
      "notes": "Available at Drink Level 1 or higher; 2 frames of recovery added when the attack misses"
    },
    {
      "name": "Full Moon Kick (1)",
      "input": "6mk",
      "startup": 22,
      "active": "22-24",
      "recovery": 20,
      "onBlock": -3,
      "onHit": 1,
      "notes": "A sequence of attacks, the first of which cannot be blocked crouching. Your drink level will go up after the part of the attack where you take a drink is complete"
    },
    {
      "name": "Full Moon Kick (2) (Drink level 2+)",
      "input": "6mk>5mk",
      "startup": 15,
      "active": "15-17-23-24",
      "recovery": 28,
      "onBlock": -14,
      "onHit": "",
      "notes": "Available at Drink Level 2 and higher"
    },
    {
      "name": "Full Moon Kick (3) (Drink level 2+)",
      "input": "6mk>5mk>*p",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Available at Drink Level 2 and higher; Adds 1 Drink level at frame 54; If Drink Level is at 4, recovers 10,000 Drive Gauge"
    },
    {
      "name": "Intoxicated Assault (1) (Drink level 3+)",
      "input": "4hp",
      "startup": 18,
      "active": "18-20",
      "recovery": 21,
      "onBlock": -3,
      "onHit": 1,
      "notes": "A counter followed by a sequence of attacks; Available at Drink Level 3 or higher"
    },
    {
      "name": "Intoxicated Assault (2) (Drink level 3+)",
      "input": "4hp>5hp",
      "startup": 21,
      "active": "21-24",
      "recovery": 20,
      "onBlock": -11,
      "onHit": 1,
      "notes": "A counter followed by a sequence of attacks; Available at Drink Level 3"
    },
    {
      "name": "Intoxicated Assault (3) (Drink level 3+)",
      "input": "4hp>5hp>5hk",
      "startup": 21,
      "active": "21-23",
      "recovery": 37,
      "onBlock": -20,
      "onHit": "",
      "notes": "A counter followed by a sequence of attacks; Available at Drink Level 3"
    },
    {
      "name": "Ransui Haze (1) (Drink level 4+)",
      "input": "6hk",
      "startup": 16,
      "active": "16-19",
      "recovery": 19,
      "onBlock": -3,
      "onHit": 3,
      "notes": "Drink level 4 or higher"
    },
    {
      "name": "Ransui Haze (2) (Drink level 4+)",
      "input": "6hk>4hk",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Available at Drink Level 4; Transitions even when the attack misses; During the attack, press an attack button with specific timing to change the transition attack; Frames 6-25: Ransui Haze 1; Frames 31-55: Ransui Haze 2; Frames 64-80: Ransui Haze 3"
    },
    {
      "name": "Ransui Haze (3 Immediate) (Drink level 4+)",
      "input": "6hk>4hk>*p",
      "startup": 15,
      "active": "15-18",
      "recovery": 28,
      "onBlock": -12,
      "onHit": "",
      "notes": "Available at Drink Level 4"
    },
    {
      "name": "Ransui Haze (3 Delayed) (Drink level 4+)",
      "input": "6hk>4hk>*p",
      "startup": 4,
      "active": "4-5-14-15-27-28",
      "recovery": 27,
      "onBlock": -9,
      "onHit": "",
      "notes": "Available at Drink Level 4"
    },
    {
      "name": "Ransui Haze (3 Maximum Delay) (Drink level 4+)",
      "input": "6hk>4hk>*p",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Available at Drink Level 4; Recovers 10,000 Drive Gauge"
    },
    {
      "name": "The Devil Inside",
      "input": "22*p",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Take out a gourd for a swig of a ki-unleashing drink. Raises your drink level, with higher levels unlocking access to additional moves; Adds a Drink level on frame 49; If Drink level is already at 4, recovers 5,000 Drive Gauge; Holding the button continues the action, and will only add to the Drink level for as long as the button is held; When the button is held for only one level, the entire move is 97 frames; Damage increases in line with Drink level, and new moves are available; Damage scaling per Drin kLevel; Drink Level 0: 90%; Drink Level 1: 95%; Drink Level 2: 100%; Drink Level 3: 105%; Drink Level 4: 110%; During The Devil\u2019s Song, damage is scaled to 105%"
    },
    {
      "name": "Freeflow Strikes (1) (Light)",
      "input": "236lp",
      "startup": 13,
      "active": "13-14",
      "recovery": 24,
      "onBlock": -6,
      "onHit": -1,
      "notes": "Move forward while performing three attacks with your fists. Useful for starting combos from regular attacks"
    },
    {
      "name": "Freeflow Strikes (1) (Light) (Drink level 4)",
      "input": "236lp>6*p",
      "startup": 13,
      "active": "13-14-24-26",
      "recovery": 19,
      "onBlock": -3,
      "onHit": 1,
      "notes": "Available at Drink Level 4"
    },
    {
      "name": "Freeflow Strikes (1) (Medium)",
      "input": "236mp",
      "startup": 16,
      "active": "16-17",
      "recovery": 24,
      "onBlock": -6,
      "onHit": -1,
      "notes": "Move forward while performing three attacks with your fists. Useful for starting combos from regular attacks"
    },
    {
      "name": "Freeflow Strikes (1) (Medium) (Drink level 4)",
      "input": "236mp>6*p",
      "startup": 16,
      "active": "16-17-27-29",
      "recovery": 19,
      "onBlock": -3,
      "onHit": 1,
      "notes": "Available at Drink Level 4"
    },
    {
      "name": "Freeflow Strikes (1) (Heavy)",
      "input": "236hp",
      "startup": 19,
      "active": "19-20",
      "recovery": 24,
      "onBlock": -6,
      "onHit": -1,
      "notes": "Move forward while performing three attacks with your fists. Useful for starting combos from regular attacks"
    },
    {
      "name": "Freeflow Strikes (1) (Heavy) (Drink level 4)",
      "input": "236hp>6*p",
      "startup": 19,
      "active": "19-20-30-32",
      "recovery": 19,
      "onBlock": -3,
      "onHit": 1,
      "notes": "Available at Drink Level 4"
    },
    {
      "name": "Freeflow Strikes (1) (OD)",
      "input": "236(pp)",
      "startup": 13,
      "active": "13-14",
      "recovery": 24,
      "onBlock": -3,
      "onHit": 1,
      "notes": "Move forward while performing three attacks with your fists. Useful for starting combos from regular attacks"
    },
    {
      "name": "Freeflow Strikes (1) (OD) (Drink level 4)",
      "input": "236(pp)>6*p",
      "startup": 13,
      "active": "16-17-24-26",
      "recovery": 19,
      "onBlock": -3,
      "onHit": 3,
      "notes": "Available at Drink Level 4"
    },
    {
      "name": "Freeflow Strikes (2) (Light)",
      "input": "236lp>6*p",
      "startup": 13,
      "active": "13-14",
      "recovery": 28,
      "onBlock": -13,
      "onHit": -3,
      "notes": "Move forward while performing three attacks with your fists. Useful for starting combos from regular attacks; Can transition to following attacks even if this attack misses"
    },
    {
      "name": "Freeflow Strikes (2) (Medium)",
      "input": "236mp>6*p",
      "startup": 16,
      "active": "16-17",
      "recovery": 28,
      "onBlock": -11,
      "onHit": -3,
      "notes": "Move forward while performing three attacks with your fists. Useful for starting combos from regular attacks; Can transition to following attacks even if this attack misses"
    },
    {
      "name": "Freeflow Strikes (2) (Heavy)",
      "input": "236hp>6*p",
      "startup": 19,
      "active": "19-20",
      "recovery": 28,
      "onBlock": -9,
      "onHit": -3,
      "notes": "Move forward while performing three attacks with your fists. Useful for starting combos from regular attacks; Can transition to following attacks even if this attack misses"
    },
    {
      "name": "Freeflow Strikes (2) (Drink level 4)",
      "input": "236lp>6*p",
      "startup": 15,
      "active": "15-16-22-23",
      "recovery": 27,
      "onBlock": -10,
      "onHit": -2,
      "notes": "Move forward while performing three attacks with your fists. Useful for starting combos from regular attacks; Available at Drink Level 4"
    },
    {
      "name": "Freeflow Strikes (2) (OD)",
      "input": "236(pp)>6*p",
      "startup": 13,
      "active": "13-14",
      "recovery": 28,
      "onBlock": -9,
      "onHit": -3,
      "notes": "Move forward while performing three attacks with your fists. Useful for starting combos from regular attacks; Can transition to following attacks even if this attack misses"
    },
    {
      "name": "Freeflow Strikes (2) (OD) (Drink level 4)",
      "input": "236(pp)>6*p",
      "startup": 15,
      "active": "15-16-22-23",
      "recovery": 27,
      "onBlock": -10,
      "onHit": -2,
      "notes": "Available at Drink Level 4"
    },
    {
      "name": "Freeflow Strikes (3) (Light)",
      "input": "236lp>6*p>6*p",
      "startup": 13,
      "active": "13-14",
      "recovery": 30,
      "onBlock": -17,
      "onHit": "",
      "notes": "Move forward while performing three attacks with your fists. Useful for starting combos from regular attacks; Can transition to following attacks even if this attack misses"
    },
    {
      "name": "Freeflow Strikes (3) (Medium)",
      "input": "236mp>6*p>6*p",
      "startup": 16,
      "active": "16-17",
      "recovery": 30,
      "onBlock": -15,
      "onHit": "",
      "notes": "Move forward while performing three attacks with your fists. Useful for starting combos from regular attacks; Can transition to following attacks even if this attack misses"
    },
    {
      "name": "Freeflow Strikes (3) (Heavy)",
      "input": "236hp>6*p>6*p",
      "startup": 19,
      "active": "19-20",
      "recovery": 30,
      "onBlock": -13,
      "onHit": "",
      "notes": "Move forward while performing three attacks with your fists. Useful for starting combos from regular attacks; Can transition to following attacks even if this attack misses"
    },
    {
      "name": "Freeflow Strikes (3) (Drink level 4)",
      "input": "236hp>6*p>6*p",
      "startup": 16,
      "active": "16-17-22-23-38-40",
      "recovery": 28,
      "onBlock": -14,
      "onHit": "",
      "notes": "Move forward while performing three attacks with your fists. Useful for starting combos from regular attacks; Available at Drink Level 4"
    },
    {
      "name": "Freeflow Strikes (3) (OD)",
      "input": "236(pp)>6*p>6*p",
      "startup": 13,
      "active": "13-14",
      "recovery": 30,
      "onBlock": -13,
      "onHit": "",
      "notes": "Move forward while performing three attacks with your fists. Useful for starting combos from regular attacks; Can transition to following attacks even if this attack misses"
    },
    {
      "name": "Freeflow Strikes (3) (OD) (Drink level 4)",
      "input": "236(pp)>6*p>6*p",
      "startup": 16,
      "active": "16-17-22-23-38-40",
      "recovery": 28,
      "onBlock": -14,
      "onHit": "",
      "notes": "Available at Drink Level 4"
    },
    {
      "name": "Freeflow Kicks (2) (Light)",
      "input": "236lp>6*k",
      "startup": 14,
      "active": "14-15",
      "recovery": 32,
      "onBlock": -15,
      "onHit": -7,
      "notes": "Perform an attack with your fists followed by a sequence of kicking attacks. Your drink level will go up once all parts of the move have finished"
    },
    {
      "name": "Freeflow Kicks (2) (Medium)",
      "input": "236mp>6*k",
      "startup": 17,
      "active": "17-18",
      "recovery": 32,
      "onBlock": -15,
      "onHit": -7,
      "notes": "Perform an attack with your fists followed by a sequence of kicking attacks. Your drink level will go up once all parts of the move have finished"
    },
    {
      "name": "Freeflow Kicks (2) (Heavy)",
      "input": "236hp>6*k",
      "startup": 20,
      "active": "20-21",
      "recovery": 32,
      "onBlock": -15,
      "onHit": -7,
      "notes": "Perform an attack with your fists followed by a sequence of kicking attacks. Your drink level will go up once all parts of the move have finished"
    },
    {
      "name": "Freeflow Kicks (2) (OD)",
      "input": "236(pp)>6*k",
      "startup": 14,
      "active": "14-15",
      "recovery": 32,
      "onBlock": -15,
      "onHit": -7,
      "notes": "Perform an attack with your fists followed by a sequence of kicking attacks. Your drink level will go up once all parts of the move have finished"
    },
    {
      "name": "Freeflow Kicks (3) (Light)",
      "input": "236lp>6*k>6*k",
      "startup": 18,
      "active": "18-19",
      "recovery": 64,
      "onBlock": -49,
      "onHit": "",
      "notes": "Perform an attack with your fists followed by a sequence of kicking attacks. Your drink level will go up once all parts of the move have finished; Adds one Drink level on frame 55; Recovers the Drive Gauge by 10,000 if the player is already at Drink level 4"
    },
    {
      "name": "Freeflow Kicks (3) (Medium)",
      "input": "236mp>6*k>6*k",
      "startup": 21,
      "active": "21-22",
      "recovery": 64,
      "onBlock": -49,
      "onHit": "",
      "notes": "Perform an attack with your fists followed by a sequence of kicking attacks. Your drink level will go up once all parts of the move have finished; Adds one Drink level on frame 59; Recovers the Drive Gauge by 10,000 if the player is already at Drink level 4"
    },
    {
      "name": "Freeflow Kicks (3) (Heavy)",
      "input": "236hp>6*k>6*k",
      "startup": 24,
      "active": "24-25",
      "recovery": 64,
      "onBlock": -49,
      "onHit": "",
      "notes": "Perform an attack with your fists followed by a sequence of kicking attacks. Your drink level will go up once all parts of the move have finished; Adds one Drink level on frame 62; Recovers the Drive Gauge by 10,000 if the player is already at Drink level 4"
    },
    {
      "name": "Freeflow Kicks (3) (OD)",
      "input": "236(pp)>6*k>6*k",
      "startup": 18,
      "active": "18-19",
      "recovery": 64,
      "onBlock": -49,
      "onHit": "",
      "notes": "Perform an attack with your fists followed by a sequence of kicking attacks. Your drink level will go up once all parts of the move have finished; Adds one Drink level on frame 56; Recovers the Drive Gauge by 10,000 if the player is already at Drink level 4"
    },
    {
      "name": "Swagger Step (Light)",
      "input": "214lp",
      "startup": 17,
      "active": "17-25",
      "recovery": 17,
      "onBlock": -6,
      "onHit": "",
      "notes": "Quickly lunge toward your opponent and strike with the heel of your palm. Useful as a surprise attack that closes the distance with your opponent"
    },
    {
      "name": "Swagger Step (Medium)",
      "input": "214mp",
      "startup": 20,
      "active": "20-28",
      "recovery": 17,
      "onBlock": -6,
      "onHit": "",
      "notes": "Quickly lunge toward your opponent and strike with the heel of your palm. Useful as a surprise attack that closes the distance with your opponent"
    },
    {
      "name": "Swagger Step (Heavy)",
      "input": "214hp",
      "startup": 25,
      "active": "25-33",
      "recovery": 16,
      "onBlock": -3,
      "onHit": "",
      "notes": "Quickly lunge toward your opponent and strike with the heel of your palm. Useful as a surprise attack that closes the distance with your opponent"
    },
    {
      "name": "Swagger Step (OD)",
      "input": "214(pp)",
      "startup": 20,
      "active": "20-28",
      "recovery": 15,
      "onBlock": -1,
      "onHit": "",
      "notes": "Quickly lunge toward your opponent and strike with the heel of your palm. Useful as a surprise attack that closes the distance with your opponent; Produces a wall splat on Punish Counter"
    },
    {
      "name": "Swagger Hermit Punch",
      "input": "214*p>6*p",
      "startup": 19,
      "active": "19-21",
      "recovery": 39,
      "onBlock": -23,
      "onHit": "",
      "notes": "A follow-up attack performed out of Swagger Step, unleashing an even more devastating strike with the heel of your palm. It does very high damage, making it particularly powerful in combos or as a surprise attack; Available at Drink Level 4"
    },
    {
      "name": "Swagger Hermit Punch (OD)",
      "input": "214(pp)>6*p",
      "startup": 19,
      "active": "19-21",
      "recovery": 39,
      "onBlock": -23,
      "onHit": "",
      "notes": "A follow-up attack performed out of Swagger Step, unleashing an even more devastating strike with the heel of your palm. It does very high damage, making it particularly powerful in combos or as a surprise attack; Available at Drink Level 4"
    },
    {
      "name": "Arrow Kick (Light)",
      "input": "623lk",
      "startup": 5,
      "active": "5-11-41-50",
      "recovery": 55,
      "onBlock": -45,
      "onHit": "",
      "notes": "Launch your opponent into the air with a kick, and then use the recoil to follow up with a flying kick. Useful as an anti-air counter to an opponent's jumping attacks, and as a way to close out combos; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 12; Will only transition to the 2nd hit and after when the first attack hits"
    },
    {
      "name": "Arrow Kick (Medium)",
      "input": "623mk",
      "startup": 8,
      "active": "8-14-39-43",
      "recovery": 53,
      "onBlock": -43,
      "onHit": "",
      "notes": "Launch your opponent into the air with a kick, and then use the recoil to follow up with a flying kick. Useful as an anti-air counter to an opponent's jumping attacks, and as a way to close out combos; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 14; Will only transition to the 2nd hit and after when the first attack hits"
    },
    {
      "name": "Arrow Kick (Heavy)",
      "input": "623hk",
      "startup": 10,
      "active": "10-16-41-45-54-57",
      "recovery": 53,
      "onBlock": -43,
      "onHit": "",
      "notes": "Launch your opponent into the air with a kick, and then use the recoil to follow up with a flying kick. Useful as an anti-air counter to an opponent's jumping attacks, and as a way to close out combos; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 16; Will only transition to the 2nd hit and after when the first attack hits"
    },
    {
      "name": "Arrow Kick (OD)",
      "input": "623(pp)",
      "startup": 6,
      "active": "6-12-37-38-50-51",
      "recovery": 53,
      "onBlock": -43,
      "onHit": "",
      "notes": "Launch your opponent into the air with a kick, and then use the recoil to follow up with a flying kick. Useful as an anti-air counter to an opponent's jumping attacks, and as a way to close out combos; Completely invincible from frames 1 - 9; Invincible against projectiles and strikes with mid-air hitboxes from frames 10 - 12; The second hit and subsequent attacks only come out if the first attack hits"
    },
    {
      "name": "Luminous Dive Kick (Light)",
      "input": "9>214lk",
      "startup": 11,
      "active": "11-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "While jumping, extend your leg and quickly descend to the ground. Useful as a surprise attack, or as a way to approach your opponent; Available at Drink Level 1 and higher"
    },
    {
      "name": "Luminous Dive Kick (Medium)",
      "input": "9>214mk",
      "startup": 11,
      "active": "11-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "While jumping, extend your leg and quickly descend to the ground. Useful as a surprise attack, or as a way to approach your opponent; Available at Drink Level 1 and higher"
    },
    {
      "name": "Luminous Dive Kick (Heavy)",
      "input": "9>214hk",
      "startup": 11,
      "active": "11-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "While jumping, extend your leg and quickly descend to the ground. Useful as a surprise attack, or as a way to approach your opponent; Available at Drink Level 1 and higher"
    },
    {
      "name": "Luminous Dive Kick (OD)",
      "input": "9>214(kk)",
      "startup": 11,
      "active": "11-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "While jumping, extend your leg and quickly descend to the ground. Useful as a surprise attack, or as a way to approach your opponent; Available at Drink Level 1 and higher"
    },
    {
      "name": "Bakkai (Light)",
      "input": "236lk",
      "startup": 18,
      "active": "18-19-22-24-29-30-42-43",
      "recovery": 24,
      "onBlock": -12,
      "onHit": "",
      "notes": "A series of rotating, upside-down kicks while sliding along the ground. This move does big damage, and is useful when performing combos against opponents that have left themselves wide open; Available at Drink Level 2 or higher; Invincible to projectiles from frames 3 - 24; The last hit can be canceled into SA3/Critical Art"
    },
    {
      "name": "Bakkai (Medium)",
      "input": "236mk",
      "startup": 22,
      "active": "22-23-25-26-30-31-37-38-51-52-58-59",
      "recovery": 31,
      "onBlock": -16,
      "onHit": "",
      "notes": "Available at Drink Level 2 or higher; Invincible to projectiles from frames 4 - 26; The last hit can be canceled into SA3/Critical Art"
    },
    {
      "name": "Bakkai (Heavy)",
      "input": "236hk",
      "startup": 26,
      "active": "26-27-34-35-42-43-50-51-65-66-74-75-91-92",
      "recovery": 32,
      "onBlock": -17,
      "onHit": "",
      "notes": "A series of rotating, upside-down kicks while sliding along the ground. This move does big damage, and is useful when performing combos against opponents that have left themselves wide open; Available at Drink Level 2 or higher; Invincible to projectiles from frames 5 - 33; The last hit can be canceled into SA3/Critical Art"
    },
    {
      "name": "Bakkai (OD)",
      "input": "236(kk)",
      "startup": 21,
      "active": "21-23-27-28-37-38-42-43-51-52-60-61-74-75-87-88-93-94-99-100",
      "recovery": 62,
      "onBlock": -46,
      "onHit": "",
      "notes": "Drink level 2 or higher; A series of rotating, upside-down kicks while sliding along the ground. This move does big damage, and is useful when performing combos against opponents that have left themselves wide open; Invincible to projectiles from frames 3 - 28; Only the 7th hit can be canceled into SA3/Critical Art"
    },
    {
      "name": "Tenshin",
      "input": "63214*k",
      "startup": 8,
      "active": "8-9",
      "recovery": 52,
      "onBlock": "",
      "onHit": 8,
      "notes": "When near opponent; A throw that stops the opponent's movements by thrusting a finger in front of their eyes. After the hit connects, it can be followed up with a swift attack; Available at Drink Level 3 or higher; Combo scaling starts from the 3rd hit"
    },
    {
      "name": "Tenshin (OD)",
      "input": "63214(kk)",
      "startup": 8,
      "active": "8-9",
      "recovery": 52,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; A throw that stops the opponent's movements by thrusting a finger in front of their eyes. After the hit connects, it can be followed up with a swift attack; Available at Drink Level 3 or higher; Produces a crumple stun on hit"
    },
    {
      "name": "Breakin'",
      "input": "236236*k",
      "startup": 8,
      "active": "8-16-23-27-34-35-43-44-52-53-60-61-68-69-75-76-106-107-117-118-125-126-132-133",
      "recovery": 74,
      "onBlock": "",
      "onHit": "",
      "notes": "A sequence of acrobatic rotating kicks at high speed. During the attack, keep holding down to raise your drink level; Invincible to throws and strikes from frames 1 - 12; Minimum guaranteed damage is set to 30%; Values do not change on counter or Punish Counter; While the attack is executed, continue to hold Down to change the attack\u2019s properties and raise your Drink level by 1"
    },
    {
      "name": "The Devil's Song",
      "input": "214214*p",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Unleash even stronger ki by taking a big gulp from your gourd. Your drink level will be maxed out for a period of time after finishing the move; Temporarily raises Drink level to 4; Note: Damage is increased to 105%; Timer is active for 900 frames; If this move is performed when the player is already at Drink level 4, the player instead recovers 30,000 to the Drive Gauge"
    },
    {
      "name": "Getsuga Saiho",
      "input": "236236*p",
      "startup": 10,
      "active": "10-12-26-28",
      "recovery": 42,
      "onBlock": -27,
      "onHit": "",
      "notes": "A sequence of attacks that breaks an opponent's posture, and then finishes by kicking them into the air after forcing them to take a swing at you. After the opponent has been launched, it is possible to continue your offensive with a follow-up attack; Completely invincible from frames 1 - 12; Minimum guaranteed damage is set to 50%; Values do not change on counter or Punish Counter; Produces a hard knockdown"
    },
    {
      "name": "Getsuga Saiho (Critical Art)",
      "input": "236236*p",
      "startup": 10,
      "active": "10-12-26-28",
      "recovery": 42,
      "onBlock": -27,
      "onHit": "",
      "notes": "When under 25% vitality; A sequence of attacks that breaks an opponent's posture, and then finishes by kicking them into the air after forcing them to take a swing at you. After the opponent has been launched, it is possible to continue your offensive with a follow-up attack; Completely invincible from frames 1 - 12; Minimum guaranteed damage is set to 50%; Values do not change on counter or Punish Counter; Forces a hard knockdown"
    },
    {
      "name": "Back Shaver",
      "input": "(4lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Lean your back into your opponent and send them tumbling backwards with three strong strikes. Throws your opponent without switching places with them; Hold down the button during the technique to change its properties and raise drink level by 1; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Wheel Punch",
      "input": "(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Crumple your opponent with a kick, then roll over them before sending them packing with another kick. Throws your opponent while switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    }
  ],
  "rashid": [
    {
      "name": "Standing Light Punch",
      "input": "5lp",
      "startup": 4,
      "active": "4-5",
      "recovery": 9,
      "onBlock": 1,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Standing Medium Punch",
      "input": "5mp",
      "startup": 6,
      "active": "6-8",
      "recovery": 14,
      "onBlock": 1,
      "onHit": 5,
      "notes": ""
    },
    {
      "name": "Standing Heavy Punch",
      "input": "5hp",
      "startup": 9,
      "active": "9-11",
      "recovery": 21,
      "onBlock": 4,
      "onHit": 1,
      "notes": ""
    },
    {
      "name": "Standing Light Kick",
      "input": "5lk",
      "startup": 4,
      "active": "4-6",
      "recovery": 10,
      "onBlock": 1,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Standing Medium Kick",
      "input": "5mk",
      "startup": 8,
      "active": "8-10",
      "recovery": 17,
      "onBlock": 3,
      "onHit": 6,
      "notes": "2 frames of recovery added when the attack misses"
    },
    {
      "name": "Standing Heavy Kick",
      "input": "5hk",
      "startup": 13,
      "active": "13-20",
      "recovery": 18,
      "onBlock": 5,
      "onHit": 1,
      "notes": "Forces a juggle state when hitting a mid-air opponent; Forces a juggle state when the attack lands as a Punish Counter"
    },
    {
      "name": "Crouching Light Punch",
      "input": "2lp",
      "startup": 5,
      "active": "5-7",
      "recovery": 7,
      "onBlock": 1,
      "onHit": 5,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Punch",
      "input": "2mp",
      "startup": 6,
      "active": "6-9",
      "recovery": 13,
      "onBlock": 1,
      "onHit": 4,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Punch",
      "input": "2hp",
      "startup": 12,
      "active": "12-14",
      "recovery": 21,
      "onBlock": 6,
      "onHit": 5,
      "notes": "2 frames of recovery added when the attack misses"
    },
    {
      "name": "Crouching Light Kick",
      "input": "2lk",
      "startup": 5,
      "active": "5-7",
      "recovery": 8,
      "onBlock": 1,
      "onHit": 3,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Kick",
      "input": "2mk",
      "startup": 7,
      "active": "7-9",
      "recovery": 18,
      "onBlock": 5,
      "onHit": 1,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Kick",
      "input": "2hk",
      "startup": 9,
      "active": "9-11",
      "recovery": 24,
      "onBlock": 11,
      "onHit": "",
      "notes": "Knockdown time extended when attack lands as a counter or Punish Counter"
    },
    {
      "name": "Jumping Light Punch",
      "input": "j>lp",
      "startup": 4,
      "active": "4-8",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Punch",
      "input": "j>mp",
      "startup": 9,
      "active": "9-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Heavy Punch",
      "input": "j>hp",
      "startup": 8,
      "active": "8-10-14-16",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a slam knockdown when hitting a mid-air opponent on the 2nd attack"
    },
    {
      "name": "Jumping Light Kick",
      "input": "j>lk",
      "startup": 5,
      "active": "5-9",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Kick",
      "input": "j>mk",
      "startup": 7,
      "active": "7-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Heavy Kick",
      "input": "j>hk",
      "startup": 10,
      "active": "10-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a slam knockdown when hitting a mid-air opponent when transitioning from Wing Stroke or Arabian Skyhigh"
    },
    {
      "name": "Run",
      "input": "6[6]",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Continue to hold forward and Rashid will break out into a sprint. Rashid will stop after covering a certain distance or if you release the input; Movement can be stoppped from frames 2 - 60; Can transition to either a branching attack or forward jump from frames 6 - 60; 5 frames of recovery added when movement is stopped; Can be affected by air currents from frames 1 - 60"
    },
    {
      "name": "Backup",
      "input": "6*p",
      "startup": 8,
      "active": "8-17",
      "recovery": 17,
      "onBlock": 10,
      "onHit": 7,
      "notes": "During run; A low attack that can be performed during Run. Moves you behind the opponent when it hits; Considered airborne from frames 1 - 17; Only the second attack can be canceled into a Super Art"
    },
    {
      "name": "Tempest Moon",
      "input": "6*k",
      "startup": 16,
      "active": "16-17-22-24",
      "recovery": 21,
      "onBlock": 4,
      "onHit": 3,
      "notes": "During run; An attack that can be performed during Run. This multi-hitting attack lets you expand your mix-up game; Can be affected by air currents from frames 1 - 15; Considered airborne from frames 6 - 21; Only the second attack can be canceled into a Super Art; 2\u6bb5\u76ee\u306e\u307fSA\u3067\u30ad\u30e3\u30f3\u30bb\u30eb\u53ef\u80fd"
    },
    {
      "name": "[Air Current Boosted] Tempest Moon",
      "input": "6*k",
      "startup": 9,
      "active": "9-11-33-34-38-40",
      "recovery": 22,
      "onBlock": 5,
      "onHit": "",
      "notes": "From run when coming in contact with an air current; Considered airborne from frames 20 - 35"
    },
    {
      "name": "Flapping Spin",
      "input": "6mp",
      "startup": 8,
      "active": "8-9-24-25",
      "recovery": 18,
      "onBlock": 3,
      "onHit": 1,
      "notes": "A two-hit combination attack. The first attack can be canceled into special moves; Forces a juggle state when hitting a mid-air opponent on the 1st attack; Can be affected by air currents from frames 3 - 10"
    },
    {
      "name": "Beak Assault",
      "input": "6hp",
      "startup": 22,
      "active": "22-24",
      "recovery": 21,
      "onBlock": 3,
      "onHit": 3,
      "notes": "An overhead attack that cannot be blocked while crouching; Can be affected by air currents from frames 4 - 25"
    },
    {
      "name": "Crescent Kick",
      "input": "6hk",
      "startup": 16,
      "active": "16-19",
      "recovery": 20,
      "onBlock": 3,
      "onHit": 2,
      "notes": "An advancing attack that's great against an opponent's low kicks; 3 frames of recovery added when the attack misses; Can be affected by air currents from frames 6 - 19"
    },
    {
      "name": "Blitz Strike",
      "input": "9>2hp",
      "startup": 10,
      "active": "10-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A jump attack that sends you bounding forward over your opponent when it hits or is blocked; Can transition to a mid-air special move from frames 12 - 23 when the attack hits or is blocked; Can transition to any mid-air normal attack or special move from frame 24 until landing on the ground; Produces a floor bound when hitting a mid-air opponent"
    },
    {
      "name": "Aerial Shot",
      "input": "8>8hk",
      "startup": 8,
      "active": "8-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A powerful move for dealing with opponents up above that can be performed during a neutral jump; Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Rising Kick",
      "input": "mp>hk",
      "startup": 13,
      "active": "13-16",
      "recovery": 36,
      "onBlock": 20,
      "onHit": "",
      "notes": "A two-hit combination attack that can be canceled into special moves"
    },
    {
      "name": "Side Flip",
      "input": "6(kk)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A quick, advancing side flip. You can perform Front Flip from this move; Can transition to Front Flip from frames 18 - 24; Can be affected by air currents from frames 2 - 20"
    },
    {
      "name": "Front Flip",
      "input": "{4|5|6}(kk)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During Side Flip; Flip through the air towards the opponent. Jump attacks can be performed while in mid-air; Considered airborne from frames 11 - 43; Can transition to any mid-air normal attack, unique attack or special move from frame 22 - 40; Can be affected by air currents from frames 1 - 36"
    },
    {
      "name": "Spinning Mixer (Light)",
      "input": "236lp",
      "startup": 8,
      "active": "8-8-16-17-22-23",
      "recovery": 19,
      "onBlock": 3,
      "onHit": 2,
      "notes": "Unleash multiple chops while spinning. Useful for combos and sequences, it also makes for a great anti-air attack; Attack properties changed by air currents are active from frames 2 - 17; 5 frames of recovery added when the attack misses"
    },
    {
      "name": "[Air Current Boosted] Spinning Mixer (Light)",
      "input": "236lp",
      "startup": 6,
      "active": "6-6-12-14-18-20-25-27-31-33-38-40-44-46-51-53-57-59",
      "recovery": 15,
      "onBlock": 2,
      "onHit": 4,
      "notes": "When coming in contact with an air current"
    },
    {
      "name": "Spinning Mixer (Medium)",
      "input": "236mp",
      "startup": 8,
      "active": "8-8-9-10-13-14-20-21-25-26",
      "recovery": "",
      "onBlock": 45,
      "onHit": "",
      "notes": "Unleash multiple chops while spinning. Useful for combos and sequences, it also makes for a great anti-air attack; Invincible against projectiles and strikes with mid-air hitboxes from frames 6 - 10; Considered airborne from frames 13 - 60; Attack properties changed by air currents are active from frames 2 - 9; 11 frames of landing recovery can be canceled by a special move or Super Art when the attack hits"
    },
    {
      "name": "[Air Current Boosted] Spinning Mixer (Medium)",
      "input": "236mp",
      "startup": 5,
      "active": "5-5-6-7-10-11-16-17-21-22-29-30-34-35-41-42-46-47-53-54-58-59",
      "recovery": "",
      "onBlock": 78,
      "onHit": "",
      "notes": "When coming in contact with an air current; Considered airborne from frames 10 -97"
    },
    {
      "name": "Spinning Mixer (Heavy)",
      "input": "236hp",
      "startup": 6,
      "active": "6-7-10-12-16-18-23-25-30-32-37-39",
      "recovery": "",
      "onBlock": 55,
      "onHit": "",
      "notes": "Unleash multiple chops while spinning. Useful for combos and sequences, it also makes for a great anti-air attack; Invincible against projectiles and strikes with mid-air hitboxes from frames 6 - 12; Considered airborne from frames 13 - 63; Invincible to throws from frames 8 - 10; Attack properties changed by air currents are active from frames 2 - 6"
    },
    {
      "name": "[Air Current Boosted] Spinning Mixer (Heavy)",
      "input": "236hp",
      "startup": 5,
      "active": "5-7-9-11-15-17-22-24-28-30-33-35-38-40-43-45-49-51",
      "recovery": "",
      "onBlock": 83,
      "onHit": "",
      "notes": "When coming in contact with an air current; Invincible against projectiles and strikes with mid-air hitboxes from frames 6 - 12; Considered airborne from frames 9 - 91"
    },
    {
      "name": "Spinning Mixer (OD)",
      "input": "236(pp)",
      "startup": 6,
      "active": "6-6-7-8-11-13-16-19-22-25-28-31-34-37-40-43-46-48",
      "recovery": "",
      "onBlock": 42,
      "onHit": "",
      "notes": "Unleash multiple chops while spinning. Useful for combos and sequences, it also makes for a great anti-air attack; Completely invincible from frames 1 - 8; Can be affected by air currents from frames 2 - 9"
    },
    {
      "name": "[Air Current Boosted] Spinning Mixer (OD)",
      "input": "236(pp)",
      "startup": 4,
      "active": "4-4-5-6-9-11-14-17-20-23-26-29-32-35-38-41-44-47-50-53-56-59",
      "recovery": "",
      "onBlock": 72,
      "onHit": "",
      "notes": "When coming in contact with an air current; Completely invincible from frames 1 - 6; Can transition to mid-air special moves from frames 67 - 71; Considered airborne from frames 10 - 97"
    },
    {
      "name": "Eagle Spike (Light)",
      "input": "214lk",
      "startup": 15,
      "active": "15-27",
      "recovery": 31,
      "onBlock": 36,
      "onHit": "",
      "notes": "Bound forward while delivering a powerful flying kick. Deals high damage and is easy to use to tack on an additional hit at the end of a combo; Attack properties changed by air currents are active from frames 4 - 15; Considered airborne from frames 9 - 38; Can only be canceled into Super Art 3 on hit"
    },
    {
      "name": "[Air Current Boosted] Eagle Spike (Light)",
      "input": "214lk",
      "startup": 14,
      "active": "14-26",
      "recovery": 33,
      "onBlock": 24,
      "onHit": "",
      "notes": "When coming in contact with an air current; Considered airborne from frames 9 - 38; Can only be canceled into Super Art 3 on hit"
    },
    {
      "name": "Eagle Spike (Medium)",
      "input": "214mk",
      "startup": 21,
      "active": "21-33",
      "recovery": 26,
      "onBlock": 36,
      "onHit": "",
      "notes": "Bound forward while delivering a powerful flying kick. Deals high damage and is easy to use to tack on an additional hit at the end of a combo; Attack properties changed by air currents are active from frames 6 - 28; Considered airborne from frames 12 - 38"
    },
    {
      "name": "[Air Current Boosted] Eagle Spike (Medium)",
      "input": "214mk",
      "startup": 17,
      "active": "17-31",
      "recovery": 50,
      "onBlock": 15,
      "onHit": "",
      "notes": "When coming in contact with an air current; Considered airborne from frames 17 - 45"
    },
    {
      "name": "Eagle Spike (Heavy)",
      "input": "214hk",
      "startup": 26,
      "active": "26-38",
      "recovery": 27,
      "onBlock": 36,
      "onHit": "",
      "notes": "Bound forward while delivering a powerful flying kick. Deals high damage and is easy to use to tack on an additional hit at the end of a combo; Attack properties changed by air currents are active from frames 6 - 31; Considered airborne from frames 15 - 44"
    },
    {
      "name": "[Air Current Boosted] Eagle Spike (Heavy)",
      "input": "214hk",
      "startup": 17,
      "active": "17-31",
      "recovery": 50,
      "onBlock": 15,
      "onHit": "",
      "notes": "When coming in contact with an air current; Considered airborne from frames 17 - 45"
    },
    {
      "name": "Eagle Spike (OD)",
      "input": "214(kk)",
      "startup": 21,
      "active": "21-33",
      "recovery": 26,
      "onBlock": 36,
      "onHit": "",
      "notes": "Bound forward while delivering a powerful flying kick. Deals high damage and is easy to use to tack on an additional hit at the end of a combo; Attack properties changed by air currents are active from frames 6 - 30; Considered airborne from frames 12 - 40"
    },
    {
      "name": "[Air Current Boosted] Eagle Spike (OD)",
      "input": "214(kk)",
      "startup": 18,
      "active": "18-31",
      "recovery": 22,
      "onBlock": 24,
      "onHit": "",
      "notes": "When coming in contact with an air current; Considered airborne from frames 12 - 40; Invincible to projectiles from frames 1 - 40"
    },
    {
      "name": "Whirlwind Shot (Light)",
      "input": "236lk",
      "startup": 17,
      "active": "",
      "recovery": "",
      "onBlock": 9,
      "onHit": 1,
      "notes": "Spin around quickly to whip up a whirlwind before launching it with a kick. Can be powered up by holding the attack button; Transition to variation attack by releasing the button between frames 29 and 48; Transition to maximum attack version by holding the button for over 48 frames"
    },
    {
      "name": "Charged Whirlwind Shot (Light)",
      "input": "236[lk]",
      "startup": 34,
      "active": "",
      "recovery": "",
      "onBlock": 0,
      "onHit": 5,
      "notes": "Spin around quickly to whip up a whirlwind before launching it with a kick. Can be powered up by holding the attack button"
    },
    {
      "name": "Fully Charged Whirlwind Shot (Light)",
      "input": "236[lk]",
      "startup": 53,
      "active": "",
      "recovery": "",
      "onBlock": 8,
      "onHit": 16,
      "notes": "After technique is finished, an air current that lasts 60 frames will be generated"
    },
    {
      "name": "Whirlwind Shot (Medium)",
      "input": "236mk",
      "startup": 17,
      "active": "",
      "recovery": "",
      "onBlock": 9,
      "onHit": 1,
      "notes": "Spin around quickly to whip up a whirlwind before launching it with a kick. Can be powered up by holding the attack button; Transition to variation attack by releasing the button between frames 29 and 48; Transition to maximum attack version by holding the button for over 48 frames"
    },
    {
      "name": "Charged Whirlwind Shot (Medium)",
      "input": "236[mk]",
      "startup": 34,
      "active": "",
      "recovery": "",
      "onBlock": 0,
      "onHit": 5,
      "notes": "Spin around quickly to whip up a whirlwind before launching it with a kick. Can be powered up by holding the attack button"
    },
    {
      "name": "Fully Charged Whirlwind Shot (Medium)",
      "input": "236[mk]",
      "startup": 53,
      "active": "",
      "recovery": "",
      "onBlock": 8,
      "onHit": 16,
      "notes": "After technique is finished, an air current that lasts 60 frames will be generated"
    },
    {
      "name": "Whirlwind Shot (Heavy)",
      "input": "236hk",
      "startup": 17,
      "active": "",
      "recovery": "",
      "onBlock": 9,
      "onHit": 1,
      "notes": "Spin around quickly to whip up a whirlwind before launching it with a kick. Can be powered up by holding the attack button; Transition to variation attack by releasing the button between frames 29 and 48; Transition to maximum attack version by holding the button for over 48 frames"
    },
    {
      "name": "Charged Whirlwind Shot (Heavy)",
      "input": "236[hk]",
      "startup": 34,
      "active": "",
      "recovery": "",
      "onBlock": 0,
      "onHit": 5,
      "notes": "Spin around quickly to whip up a whirlwind before launching it with a kick. Can be powered up by holding the attack button"
    },
    {
      "name": "Fully Charged Whirlwind Shot (Heavy)",
      "input": "236[hk]",
      "startup": 53,
      "active": "",
      "recovery": "",
      "onBlock": 8,
      "onHit": 16,
      "notes": "After technique is finished, an air current that lasts 60 frames will be generated"
    },
    {
      "name": "Whirlwind Shot (OD)",
      "input": "236(kk)",
      "startup": 17,
      "active": "",
      "recovery": "",
      "onBlock": 2,
      "onHit": "",
      "notes": "Spin around quickly to whip up a whirlwind before launching it with a kick. Can be powered up by holding the attack button; Transition to variation attack by holding the button for 36 frames"
    },
    {
      "name": "Charged Whirlwind Shot (OD)",
      "input": "236(kk)",
      "startup": 44,
      "active": "",
      "recovery": "",
      "onBlock": 10,
      "onHit": "",
      "notes": "Spin around quickly to whip up a whirlwind before launching it with a kick. Can be powered up by holding the attack button; After technique is finished, an air current that lasts 60 frames will be generated"
    },
    {
      "name": "Arabian Cyclone (Light)",
      "input": "214lp",
      "startup": 15,
      "active": "15-17",
      "recovery": 28,
      "onBlock": 9,
      "onHit": "",
      "notes": "A spinning kick attack that summons up a whirlwind in front of you. The move can be followed up with two different movement techniques; Can transition to branching attacks from frames 21 - 22"
    },
    {
      "name": "Arabian Cyclone (Medium)",
      "input": "214mp",
      "startup": 20,
      "active": "20-22",
      "recovery": 26,
      "onBlock": 7,
      "onHit": "",
      "notes": "A spinning kick attack that summons up a whirlwind in front of you. The move can be followed up with two different movement techniques; Can transition to branching attacks from frames 26- 27"
    },
    {
      "name": "Arabian Cyclone (Heavy)",
      "input": "214hp",
      "startup": 27,
      "active": "27-29",
      "recovery": "",
      "onBlock": 2,
      "onHit": "",
      "notes": "A spinning kick attack that summons up a whirlwind in front of you. The move can be followed up with two different movement techniques; Can transition to branching attacks from frames 33 - 34"
    },
    {
      "name": "Arabian Cyclone (OD)",
      "input": "214(pp)",
      "startup": 20,
      "active": "20-22",
      "recovery": "",
      "onBlock": 10,
      "onHit": "",
      "notes": "A spinning kick attack that summons up a whirlwind in front of you. The move can be followed up with two different movement techniques; Can transition to branching attacks from frames 26 - 27; 3 frames of recovery added when the attack is blocked; After technique is finished, an air current that lasts 60 frames will be generated"
    },
    {
      "name": "Wing Stroke",
      "input": "4*k",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During Arabian Cyclone; A majestic mid-air forward dash performed from Arabian Cyclone. Allows you to break into a jump attack at any point of the dash; Considered airborne from frames 22 - 61; Can transition to normal mid-air attacks from frames 32 - 51; Can be affected by air currents from frames 23 - 47"
    },
    {
      "name": "Rolling Assault",
      "input": "6*k",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During Arabian Cyclone; A move performed from Arabian Cyclone that sends you rolling forward. A great technique for closing the distance from far or keeping the pressure on when you're up close; Can transition to branching attacks from frames 17 - 20; Can be affected by air currents from frames 8 - 25"
    },
    {
      "name": "Nail Assault",
      "input": "*k",
      "startup": 17,
      "active": "17-19",
      "recovery": 26,
      "onBlock": 9,
      "onHit": "",
      "notes": "During Rolling Assault; A rolling kick delivered out of Rolling Assault. Very effective as a follow up attack on opponents launched by Arabian Cyclone"
    },
    {
      "name": "Arabian Skyhigh (Light)",
      "input": "9>214lk",
      "startup": 13,
      "active": "13-21",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Perform a spinning kick in mid-air that creates an air current that you then use to perform a mid-air jump. It's possible to perform jump attacks after the mid-air jump; Can be affected by air currents from frames 1 - 13; Can transition to any mid-air normal attack, unique attack or special move from frame 51 until landing on the ground; Can hit an opponent outside of a combo from frames 14 - 21"
    },
    {
      "name": "Arabian Skyhigh (Medium)",
      "input": "9>214mk",
      "startup": 18,
      "active": "18-26",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Perform a spinning kick in mid-air that creates an air current that you then use to perform a mid-air jump. It's possible to perform jump attacks after the mid-air jump; Can be affected by air currents from frames 1 - 18; Can transition to any mid-air normal attack, unique attack or special move from frame 59 until landing on the ground; Can hit an opponent outside of a combo from frames 19 - 26"
    },
    {
      "name": "Arabian Skyhigh (Heavy)",
      "input": "9>214hk",
      "startup": 21,
      "active": "21-29",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Perform a spinning kick in mid-air that creates an air current that you then use to perform a mid-air jump. It's possible to perform jump attacks after the mid-air jump; Can be affected by air currents from frames 1 - 21; Can transition to any mid-air normal attack, unique attack or special move from frame 62 until landing on the ground; Can hit an opponent outside of a combo from frames 21 - 29"
    },
    {
      "name": "Arabian Skyhigh (OD)",
      "input": "9>214kk",
      "startup": 13,
      "active": "13-21",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Perform a spinning kick in mid-air that creates an air current that you then use to perform a mid-air jump. It's possible to perform jump attacks after the mid-air jump; Can be affected by air currents from frames 1 - 13; Can transition to any mid-air normal attack, unique attack or special move from frame 51 until landing on the ground only when the attack is blocked or misses; Can hit an opponent outside of a combo from frames 14 - 21"
    },
    {
      "name": "Super Rashid Kick",
      "input": "236236*k",
      "startup": 9,
      "active": "9-15",
      "recovery": 76,
      "onBlock": 53,
      "onHit": "",
      "notes": "Offload a devastating kick while soaring forward and up through the air. Landing the initial hit on a grounded opponent will increase the move's damage; Invincible to strikes and throws from frames 1 - 16; During the attack\u2019s active frames from frames 3 - 7 on hit, when the attack hits an airborne opponent, the properties change and damage is set to 1800; Considered airborne from frames 10 - 36; The minimum guaranteed damage is 30%; Values do not change when the attack lands as a counter or Punish Counter"
    },
    {
      "name": "Ysaar",
      "input": "214214*k",
      "startup": 11,
      "active": "",
      "recovery": "",
      "onBlock": 33,
      "onHit": "",
      "notes": "Kick out with both legs to create a large advancing whirlwind. Movements or special moves that make contact with the whirlwind will have their properties changed; An air current is generated during the attack\u2019s entire active frame duration and for 100 frames after the active frames are finished; Ysaar becomes faster if Arabian Cyclone\u2019s first hit is collides with the attack during the active frames; The minimum guaranteed damage is 40%; Values do not change when the attack lands as a counter or Punish Counter"
    },
    {
      "name": "Altair",
      "input": "236236*p",
      "startup": 11,
      "active": "11-28",
      "recovery": 82,
      "onBlock": 75,
      "onHit": "",
      "notes": "Twirl around and summon a whirlwind that lifts up your opponent, before Rashid barrages them with a series of powerful blows. A versatile move, perfect for combos, reversals, and as a way of dealing with projectiles; Completely invincible from frame 1 to frame 16; Values do not change when the attack lands as a counter or Punish Counter; The minimum guaranteed damage is 50%; Note: Can only be canceled into from special moves"
    },
    {
      "name": "Altair (Critical Art)",
      "input": "236236*p",
      "startup": 11,
      "active": "11-28",
      "recovery": 82,
      "onBlock": 75,
      "onHit": "",
      "notes": "When under 25% vitality; Completely invincible from frame 1 to frame 16; Values do not change when the attack lands as a counter or Punish Counter; The minimum guaranteed damage is 50%; Note: Can only be canceled into from special moves"
    },
    {
      "name": "Riding Glider",
      "input": "(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab the opponent, get them off balance, then send them tumbling with a kick. Throws your opponent without switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Sunset Drop",
      "input": "(4lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab the opponent, disrupt their balance, then flip up before coming down with both feet to stomp them into the ground. Throws your opponent while switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Desert Slider",
      "input": "j>(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 3,
      "onBlock": "",
      "onHit": "",
      "notes": "During a jump; When near opponent; Grab the opponent, ride on their back as you descend, then send them skidding along the ground on impact. Throws your opponent without switching places with them; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    }
  ],
  "aki": [
    {
      "name": "Standing Light Punch",
      "input": "5lp",
      "startup": 5,
      "active": "5-6",
      "recovery": 7,
      "onBlock": -1,
      "onHit": 4,
      "notes": ""
    },
    {
      "name": "Standing Medium Punch",
      "input": "5mp",
      "startup": 6,
      "active": "6-10",
      "recovery": 16,
      "onBlock": -3,
      "onHit": 3,
      "notes": "2 frames of recovery added when the attack misses"
    },
    {
      "name": "Standing Heavy Punch",
      "input": "5hp",
      "startup": 12,
      "active": "12-14",
      "recovery": 21,
      "onBlock": -4,
      "onHit": 1,
      "notes": ""
    },
    {
      "name": "Standing Light Kick",
      "input": "5lk",
      "startup": 4,
      "active": "4-6",
      "recovery": 12,
      "onBlock": -3,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Standing Medium Kick",
      "input": "5mk",
      "startup": 8,
      "active": "8-10",
      "recovery": 15,
      "onBlock": -2,
      "onHit": 6,
      "notes": "2 frames of recovery added when the attack misses"
    },
    {
      "name": "Standing Heavy Kick",
      "input": "5hk",
      "startup": 9,
      "active": "9-12",
      "recovery": 19,
      "onBlock": -3,
      "onHit": 4,
      "notes": "12 frames of advantage added when the attack lands as a Punish Counter"
    },
    {
      "name": "Crouching Light Punch",
      "input": "2lp",
      "startup": 4,
      "active": "4-5",
      "recovery": 9,
      "onBlock": -1,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Punch",
      "input": "2mp",
      "startup": 8,
      "active": "8-10",
      "recovery": 18,
      "onBlock": -3,
      "onHit": 1,
      "notes": "3 frames of recovery added on hit or when blocked"
    },
    {
      "name": "Crouching Heavy Punch",
      "input": "2hp",
      "startup": 10,
      "active": "10-12",
      "recovery": 28,
      "onBlock": -8,
      "onHit": "",
      "notes": "Knockdown time extended when attack lands as a counter or Punish Counter"
    },
    {
      "name": "Crouching Light Kick",
      "input": "2lk",
      "startup": 5,
      "active": "5-7",
      "recovery": 8,
      "onBlock": -2,
      "onHit": 3,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Kick",
      "input": "2mk",
      "startup": 7,
      "active": "7-9",
      "recovery": 16,
      "onBlock": 1,
      "onHit": 5,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Kick",
      "input": "2hk",
      "startup": 10,
      "active": "10-15",
      "recovery": 20,
      "onBlock": -3,
      "onHit": 0,
      "notes": "Forces a juggle state when the attack lands as a Punish Counter"
    },
    {
      "name": "Jumping Light Punch",
      "input": "j>lp",
      "startup": 5,
      "active": "5-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Punch",
      "input": "j>mp",
      "startup": 7,
      "active": "7-10",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Heavy Punch",
      "input": "j>hp",
      "startup": 11,
      "active": "11-16",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a slam knockdown on counter or Punish Counter when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Light Kick",
      "input": "j>lk",
      "startup": 5,
      "active": "5-10",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Medium Kick",
      "input": "j>mk",
      "startup": 7,
      "active": "7-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Heavy Kick",
      "input": "j>hk",
      "startup": 8,
      "active": "8-15",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Pu Lao",
      "input": "3mp",
      "startup": 24,
      "active": "24-26",
      "recovery": 18,
      "onBlock": -2,
      "onHit": 3,
      "notes": "An overhead attack that cannot be blocked while crouching."
    },
    {
      "name": "Chi Wen",
      "input": "6hp",
      "startup": 16,
      "active": "16-18",
      "recovery": 21,
      "onBlock": -4,
      "onHit": 3,
      "notes": "An advancing lunge attack that can be canceled into Super Arts.; 1 frame of recovery added when the attack hits or is blocked"
    },
    {
      "name": "Qiu Niu",
      "input": "6hk",
      "startup": 14,
      "active": "14-16-22-24",
      "recovery": 16,
      "onBlock": 2,
      "onHit": 4,
      "notes": "A forward-moving attack that allows you to act before an opponent even if blocked.; 4 frames of recovery added when the attack misses"
    },
    {
      "name": "Gong Fu",
      "input": "9>6hp",
      "startup": 9,
      "active": "9-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A jumping attack that can hit an opponent even when they are behind you.; Forces a slam knockdown when hitting a mid-air opponent"
    },
    {
      "name": "Hun Dun",
      "input": "lp>lp",
      "startup": 8,
      "active": "8-9",
      "recovery": 14,
      "onBlock": -3,
      "onHit": 1,
      "notes": "A quick-hitting combo attack that can be canceled into a special move.; Can be canceled into special moves on hit or block"
    },
    {
      "name": "Qiong Qi",
      "input": "hp>hp",
      "startup": 14,
      "active": "14-16",
      "recovery": 24,
      "onBlock": -15,
      "onHit": "",
      "notes": "A long-reaching combo attack that poisons the opponent if it hits.; Puts the opponent in a poisoned state on hit; Toxic Blossom triggers on hit if the opponent is already in a poisoned state; Forces a juggle state when Toxic Bloom triggers"
    },
    {
      "name": "Nightshade Pulse",
      "input": "214lp",
      "startup": 17,
      "active": "",
      "recovery": "",
      "onBlock": -10,
      "onHit": -5,
      "notes": "Launch a poisonous bubble towards your opponent. Useful for checking your opponent from a distance, and poisons them if it hits.; Puts the opponent in a poisoned state on hit; Can be canceled into branching moves from frames 30 - 36; Can be canceled into Overdrive Snake Step from frames 35 - 36"
    },
    {
      "name": "Nightshade Chaser",
      "input": "6*p",
      "startup": 13,
      "active": "13-14",
      "recovery": 34,
      "onBlock": -16,
      "onHit": -4,
      "notes": "During Nightshade Pulse; Extends talons forward to burst the poisonous Nightshade Pulse bubble in transit. The burst widens the bubble's attack range, and the talons themselves can poison an opponent if they come in contact with them.; Puts the opponent in a poisoned state on hit; Toxic Blossom triggers on hit if the opponent is already in a poisoned state; Deals 800 damage and forces a juggle state on Toxic Blossom trigger; Clashes with projectiles"
    },
    {
      "name": "Nightshade Pulse (OD)",
      "input": "214(pp)",
      "startup": 16,
      "active": "",
      "recovery": "",
      "onBlock": 1,
      "onHit": "",
      "notes": "Launch a poisonous bubble towards your opponent. Useful for checking your opponent from a distance, and poisons them if it hits.; Puts the opponent in a poisoned state on hit; Can be canceled into branching moves from frames 34 - 35; Can be canceled into Overdrive Snake Step from frames 32 - 33"
    },
    {
      "name": "Nightshade Chaser (OD)",
      "input": "6*p",
      "startup": 13,
      "active": "13-17",
      "recovery": 28,
      "onBlock": -13,
      "onHit": "",
      "notes": "During Nightshade Pulse OD; Extends talons forward to burst the poisonous Nightshade Pulse bubble in transit. The burst widens the bubble's attack range, and the talons themselves can poison an opponent if they come in contact with them.; Puts the opponent in a poisoned state on hit; Toxic Blossom triggers on hit if the opponent is already in a poisoned state; Deals 800 damage and forces a juggle state on Toxic Blossom trigger; Clashes with projectiles"
    },
    {
      "name": "Nightshade Chaser (Burst)",
      "input": "5",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During Nightshade Pulse; Extends talons forward to burst the poisonous Nightshade Pulse bubble in transit. The burst widens the bubble's attack range, and the talons themselves can poison an opponent if they come in contact with them.; Puts the opponent in a poisoned state on hit"
    },
    {
      "name": "Nightshade Chaser (Burst OD)",
      "input": "5",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During Nightshade Pulse OD; Extends talons forward to burst the poisonous Nightshade Pulse bubble in transit. The burst widens the bubble's attack range, and the talons themselves can poison an opponent if they come in contact with them.; Puts the opponent in a poisoned state on hit"
    },
    {
      "name": "Orchid Spring",
      "input": "214mp",
      "startup": 26,
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Talons pierce the ground, creating a pool of poison. Opponents that touch the the pool will become poisoned.; Opponent enters poisoned state on contact with poison pool; Poison pool remains in place for 160 frames"
    },
    {
      "name": "Toxic Wreath",
      "input": "214hp",
      "startup": 13,
      "active": "13-15-30-38",
      "recovery": 13,
      "onBlock": -4,
      "onHit": "",
      "notes": "Slashes forward with talons while creating a poisonous bubble, and then immediately bursts it. Easy to use in combos or attack sequences, and poisons the opponent if it hits.; Puts the opponent in a poisoned state on hit"
    },
    {
      "name": "Serpent Lash (Light)",
      "input": "236lp",
      "startup": 14,
      "active": "14-16",
      "recovery": 26,
      "onBlock": -8,
      "onHit": 1,
      "notes": "Extends talons out a short distance to pierce opponents and poison them if the attack lands. Useful in combos or as a way of checking opponents from mid-range.; Puts the opponent in a poisoned state on hit; Toxic Blossom triggers on hit if the opponent is already in a poisoned state; Deals 800 damage and forces a juggle state on Toxic Blossom trigger; Clashes with projectiles; Produces a crumple stun on Punish Counter, and +16 frame advantage; +22 on Toxic Blossom"
    },
    {
      "name": "Serpent Lash (Medium)",
      "input": "236mp",
      "startup": 17,
      "active": "17-22",
      "recovery": 24,
      "onBlock": -12,
      "onHit": "",
      "notes": "Extends talons out a short distance to pierce opponents and poison them if the attack lands. Useful in combos or as a way of checking opponents from mid-range.; Puts the opponent in a poisoned state on hit; Toxic Blossom triggers on hit if the opponent is already in a poisoned state; Deals 700 damage and produces a crumple stun on Toxic Blossom trigger; Clashes with projectiles"
    },
    {
      "name": "Serpent Lash (Heavy)",
      "input": "236hp",
      "startup": 11,
      "active": "11-16",
      "recovery": 32,
      "onBlock": -20,
      "onHit": "",
      "notes": "Extends talons out a short distance to pierce opponents and poison them if the attack lands. Useful in combos or as a way of checking opponents from mid-range.; Invincible against projectiles and strikes with mid-air hitboxes from frames 6 - 16; Puts the opponent in a poisoned state on hit; Toxic Blossom triggers on hit if the opponent is already in a poisoned state; Deals 800 damage and forces a juggle state on Toxic Blossom trigger; Clashes with projectiles"
    },
    {
      "name": "Serpent Lash (OD)",
      "input": "236(pp)",
      "startup": 21,
      "active": "21-25",
      "recovery": 25,
      "onBlock": -14,
      "onHit": 4,
      "notes": "Extends talons out a short distance to pierce opponents and poison them if the attack lands. Useful in combos or as a way of checking opponents from mid-range.; Puts the opponent in a poisoned state on hit; Properties change and Toxic Blossom triggers on hit if the opponent is already in a poisoned state; Deals 800 damage and produces a crumple stun on Toxic Blossom trigger; Can be cancelled into SA2 or SA3 on Toxic Blossom trigger only; Clashes with projectiles"
    },
    {
      "name": "Cruel Fate (Light)",
      "input": "214lk",
      "startup": 24,
      "active": "24-25-31-32-37-38-44-45",
      "recovery": "",
      "onBlock": -3,
      "onHit": 1,
      "notes": "Leap forward into the air and unleash a series of piercing attacks on the downward arc. A useful surprise attack to get around an opponent's attempts to check you."
    },
    {
      "name": "Cruel Fate (Medium)",
      "input": "214mk",
      "startup": 28,
      "active": "28-29-35-36-41-42-48-49",
      "recovery": "",
      "onBlock": -3,
      "onHit": 3,
      "notes": "Leap forward into the air and unleash a series of piercing attacks on the downward arc. A useful surprise attack to get around an opponent's attempts to check you."
    },
    {
      "name": "Cruel Fate (Heavy)",
      "input": "214hk",
      "startup": 33,
      "active": "33-34-40-41-46-47-53-54",
      "recovery": "",
      "onBlock": -3,
      "onHit": 4,
      "notes": "Leap forward into the air and unleash a series of piercing attacks on the downward arc. A useful surprise attack to get around an opponent's attempts to check you."
    },
    {
      "name": "Cruel Fate (OD)",
      "input": "214(kk)",
      "startup": 28,
      "active": "28-30-35-36-41-42-48-49",
      "recovery": "",
      "onBlock": 2,
      "onHit": "",
      "notes": "Leap forward into the air and unleash a series of piercing attacks on the downward arc. A useful surprise attack to get around an opponent's attempts to check you.; Puts the opponent in a poisoned state on hit; Attack does not transition into the cinematic attack when hitting an airborne opponent; Deals 1000 damage and has floor bounding effect; Only the non-cinematic version can be canceled"
    },
    {
      "name": "Snake Step (Light)",
      "input": "236lk",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A quick, low-profile maneuver that carries you forward. An effective means of closing in on your opponent or avoiding attacks."
    },
    {
      "name": "Snake Step (Medium)",
      "input": "236mk",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A quick, low-profile maneuver that carries you forward. An effective means of closing in on your opponent or avoiding attacks."
    },
    {
      "name": "Snake Step (Heavy)",
      "input": "236hk",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A quick, low-profile maneuver that carries you forward. An effective means of closing in on your opponent or avoiding attacks.; Transitions to slip behind motion after passing through an opponent during movement; * Total becomes 50 frames when slipping behind opponents"
    },
    {
      "name": "Snake Step (OD)",
      "input": "236(kk)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A quick, low-profile maneuver that carries you forward. An effective means of closing in on your opponent or avoiding attacks.; Transitions to slip behind motion after passing through an opponent during movement; Invincible to strikes and projectiles from frames 1 - 34; * Total becomes 48 frames when slipping behind opponents; Invincible to strikes and projectiles from frames 1 - 48 when slipping behind opponents"
    },
    {
      "name": "Sinister Slide",
      "input": "2+(pp)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A technique that has you slither forward slowly on your back and can be followed up by three different attacks. Input up while slithering to cancel the movement.; Can transition to branching attacks from frames 11 - 179; Can halt movement from frames 28 - 179"
    },
    {
      "name": "Venomous Fang",
      "input": "*p",
      "startup": 19,
      "active": "19-33",
      "recovery": 30,
      "onBlock": -25,
      "onHit": "",
      "notes": "During sinister slide; A sudden, sharp forward charge out of Sinister Slide. Useful as a projectile attack deterrent, and poisons the opponent if it hits.; Puts the opponent in a poisoned state on hit; Toxic Blossom triggers on hit if the opponent is already in a poisoned state; * Deals 1100 damage and produces a crumple stun on Toxic Blossom trigger"
    },
    {
      "name": "Heel Strike",
      "input": "*k",
      "startup": 11,
      "active": "11-13-23-25",
      "recovery": 20,
      "onBlock": -3,
      "onHit": 4,
      "notes": "During sinister slide; Unleashes a pair of revolving kicks as you rise out of Sinister Slide. Effective for use in combos, or for maintaining offensive pressure up close."
    },
    {
      "name": "Entrapment",
      "input": "(lplk)",
      "startup": 23,
      "active": "23-25",
      "recovery": 55,
      "onBlock": "",
      "onHit": "",
      "notes": "During sinister slide; A constricting grab attack out of Sinister Slide. Useful as a way to break through an opponent's guard when they're wary of other Sinister Slide attacks.; Does 2222 individual damage when the attack lands as a Punish Counter"
    },
    {
      "name": "Deadly Implication",
      "input": "236236*k",
      "startup": 10,
      "active": "10-12",
      "recovery": 68,
      "onBlock": -46,
      "onHit": "",
      "notes": "Launch the opponent into the air with a kick, and entrap them in a gigantic poisonous bubble. Useful as a counterattack or follow-up, and poisons the opponent if it hits.; Puts the opponent in a poisoned state on hit; Minimum guaranteed damage is set to 30%; Values do not change on counter or Punish Counter"
    },
    {
      "name": "Tainted Talons",
      "input": "214214*p",
      "startup": 7,
      "active": "",
      "recovery": 65,
      "onBlock": -19,
      "onHit": "",
      "notes": "Extends multiple talons forward, and leaves a large pool of poison in its wake. Useful for attacking from a distance, and also poisons the opponent if it hits. Opponents will also become poisoned if they touch the pool.; Puts the opponent in a poisoned state on hit; Minimum guaranteed damage is set to 40%; Values do not change on counter or Punish Counter; Poison pool remains in place for 700 frames after this attack"
    },
    {
      "name": "Claws of Ya Zi",
      "input": "236236*p",
      "startup": 10,
      "active": "10-12",
      "recovery": 58,
      "onBlock": -36,
      "onHit": "",
      "notes": "Pierces various pressure points on the body and injects a poison that detonates from within. A versatile move that can get around projectiles, be used in combos, and serve as a potent counterattack.; Minimum guaranteed damage is set to 50%; Values do not change on counter or Punish Counter; Can only be canceled into from special moves"
    },
    {
      "name": "Claw of Ya Zi (Critical Art)",
      "input": "236236*p",
      "startup": 10,
      "active": "10-12",
      "recovery": 58,
      "onBlock": -36,
      "onHit": "",
      "notes": "When under 25% vitality; Pierces various pressure points on the body and injects a poison that detonates from within. A versatile move that can get around projectiles, be used in combos, and serve as a potent counterattack.; Minimum guaranteed damage is set to 50%; Values do not change on counter or Punish Counter; Can only be canceled into from special moves"
    },
    {
      "name": "Whisper",
      "input": "(lp+lk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab your opponent's arm to break their poise, before sweeping out their leg and sending them crashing to the ground. Throws your opponent without switching places with them.; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Gluttony",
      "input": "(4lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Grab and twist your opponent's arm, making them falter, and then blow them away with a painful thrust attack. Throws your opponent while switching places with them.; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    }
  ],
  "ed": [
    {
      "name": "Standing Light Punch",
      "input": "5lp",
      "startup": 4,
      "active": "4-6",
      "recovery": 7,
      "onBlock": -1,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Standing Medium Punch",
      "input": "5mp",
      "startup": 7,
      "active": "7-9",
      "recovery": 15,
      "onBlock": -1,
      "onHit": 6,
      "notes": ""
    },
    {
      "name": "Standing Heavy Punch",
      "input": "5hp",
      "startup": 10,
      "active": "10-13",
      "recovery": 18,
      "onBlock": -2,
      "onHit": 5,
      "notes": "Forces the opponent into a standing position; Hold the button to transition into Psycho Knuckle; Can be canceled into Kill Rush (Forward) while the button is held; Changes to Level 1 version if the button is held for more than 30 frames and then released; Changes to Level 2 version if the button is held for more than 60 frames and then released"
    },
    {
      "name": "Standing Light Kick",
      "input": "5lk",
      "startup": 6,
      "active": "6-7",
      "recovery": 13,
      "onBlock": -3,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Standing Medium Kick",
      "input": "5mk",
      "startup": 10,
      "active": "10-11",
      "recovery": 18,
      "onBlock": -5,
      "onHit": 0,
      "notes": ""
    },
    {
      "name": "Standing Heavy Kick",
      "input": "5hk",
      "startup": 10,
      "active": "10-12",
      "recovery": 12,
      "onBlock": 4,
      "onHit": 8,
      "notes": ""
    },
    {
      "name": "Crouching Light Punch",
      "input": "2lp",
      "startup": 4,
      "active": "4-6",
      "recovery": 10,
      "onBlock": -3,
      "onHit": 3,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Punch",
      "input": "2mp",
      "startup": 8,
      "active": "8-10",
      "recovery": 19,
      "onBlock": -6,
      "onHit": 2,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Punch",
      "input": "2hp",
      "startup": 10,
      "active": "10-13",
      "recovery": 24,
      "onBlock": -12,
      "onHit": "",
      "notes": "Knockdown time extended when attack lands as a counter or Punish Counter"
    },
    {
      "name": "Crouching Light Kick",
      "input": "2lk",
      "startup": 5,
      "active": "5-6",
      "recovery": 11,
      "onBlock": -4,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Crouching Medium Kick",
      "input": "2mk",
      "startup": 9,
      "active": "9-10",
      "recovery": 16,
      "onBlock": -1,
      "onHit": 8,
      "notes": "Forces the opponent into a standing position"
    },
    {
      "name": "Crouching Heavy Kick",
      "input": "2hk",
      "startup": 12,
      "active": "12-13",
      "recovery": 17,
      "onBlock": -4,
      "onHit": 1,
      "notes": ""
    },
    {
      "name": "Jumping Light Punch",
      "input": "j>lp",
      "startup": 5,
      "active": "5-9",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Punch",
      "input": "j>mp",
      "startup": 8,
      "active": "8-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Heavy Punch",
      "input": "j>hp",
      "startup": 9,
      "active": "9-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a slam knockdown on counter or Punish Counter when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Light Kick",
      "input": "j>lk",
      "startup": 8,
      "active": "8-10",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Kick",
      "input": "j>mk",
      "startup": 10,
      "active": "10-11",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Heavy Kick",
      "input": "j>hk",
      "startup": 8,
      "active": "8-9",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Psycho Knuckle (Charged Level 1)",
      "input": "5[hp]",
      "startup": 39,
      "active": "39-53",
      "recovery": 35,
      "onBlock": -2,
      "onHit": "",
      "notes": "A close-range punch that generates a ball of Psycho Power. Good for close-range combos or to cancel out an opponent's incoming projectile.; Produces a crumple stun for 41 frames when the attack lands; * +2 frames of advantage when blocked near the corner of the screen"
    },
    {
      "name": "Psycho Knuckle (Charged Level 2)",
      "input": "5[hp]",
      "startup": 69,
      "active": "69-83",
      "recovery": 35,
      "onBlock": 4,
      "onHit": "",
      "notes": "A close-range punch that generates a ball of Psycho Power. Good for close-range combos or to cancel out an opponent's incoming projectile.; Produces a crumple stun for 41 frames when the attack lands; Clashes with projectiles"
    },
    {
      "name": "Cobra Punch",
      "input": "6hp",
      "startup": 17,
      "active": "17-19",
      "recovery": 21,
      "onBlock": -3,
      "onHit": 1,
      "notes": "An advancing attack that's great against an opponent's low kicks.; Feet are invincible between frames 7 - 19; Forces a slam knockdown when hitting a mid-air opponent"
    },
    {
      "name": "Flicker Combination (2)",
      "input": "5lk>5lk",
      "startup": 7,
      "active": "7-9",
      "recovery": 15,
      "onBlock": -3,
      "onHit": 3,
      "notes": "A quick combination attack that hits multiple times."
    },
    {
      "name": "Flicker Combination (3)",
      "input": "5lk>5lk>5lk",
      "startup": 7,
      "active": "7-9",
      "recovery": 16,
      "onBlock": -8,
      "onHit": 1,
      "notes": "A quick combination attack that hits multiple times."
    },
    {
      "name": "Body Blow Combination",
      "input": "5mp>5hp",
      "startup": 13,
      "active": "13-14",
      "recovery": 23,
      "onBlock": -8,
      "onHit": "",
      "notes": "A quick series of attacks that can be canceled into any special move except for Kill Rush (Backward).; Can only be canceled into Kill Rush (Backward)"
    },
    {
      "name": "Hitman Combination (2)",
      "input": "5mk>5mk",
      "startup": 7,
      "active": "7-8",
      "recovery": 20,
      "onBlock": -6,
      "onHit": 0,
      "notes": "A sequence of attacks with long reach."
    },
    {
      "name": "Hitman Combination (3)",
      "input": "5mk>5mk>5hp",
      "startup": 11,
      "active": "11-15",
      "recovery": 23,
      "onBlock": -11,
      "onHit": "",
      "notes": "A sequence of attacks with long reach."
    },
    {
      "name": "Low Smash Combination",
      "input": "2hk>5hp",
      "startup": 12,
      "active": "12-16",
      "recovery": 19,
      "onBlock": -8,
      "onHit": "",
      "notes": "A series of attacks, the second of which can be canceled into Super Arts."
    },
    {
      "name": "Psycho Spark",
      "input": "236*p",
      "startup": 14,
      "active": "14-25",
      "recovery": 8,
      "onBlock": -5,
      "onHit": 3,
      "notes": "A close-range punch that generates a ball of Psycho Power. Good for close-range combos or to cancel out an opponent's incoming projectile.; Can transition to Psycho Shoot between frames 22 - 28"
    },
    {
      "name": "Psycho Spark (OD)",
      "input": "236(pp)",
      "startup": 14,
      "active": "14-25",
      "recovery": 7,
      "onBlock": -2,
      "onHit": "",
      "notes": "A close-range punch that generates a ball of Psycho Power. Good for close-range combos or to cancel out an opponent's incoming projectile.; Can transition to Psycho Shoot between frames 18 - 28"
    },
    {
      "name": "Psycho Shoot (Light)",
      "input": "6lp",
      "startup": 12,
      "active": "",
      "recovery": "",
      "onBlock": -8,
      "onHit": 3,
      "notes": "Sends the ball of Psycho Power generated by Psycho Spark flying forward. Useful for attacking opponents at range.; During od psycho spark; During psycho spark"
    },
    {
      "name": "Psycho Shoot (Medium)",
      "input": "6mp",
      "startup": 12,
      "active": "",
      "recovery": "",
      "onBlock": -8,
      "onHit": 3,
      "notes": "Sends the ball of Psycho Power generated by Psycho Spark flying forward. Useful for attacking opponents at range.; During psycho spark"
    },
    {
      "name": "Psycho Shoot (Heavy)",
      "input": "6hp",
      "startup": 12,
      "active": "",
      "recovery": "",
      "onBlock": -8,
      "onHit": 3,
      "notes": "Sends the ball of Psycho Power generated by Psycho Spark flying forward. Useful for attacking opponents at range.; During od psycho spark; During psycho spark"
    },
    {
      "name": "Psycho Shoot (OD Light)",
      "input": "6lp",
      "startup": 12,
      "active": "",
      "recovery": "",
      "onBlock": -2,
      "onHit": "",
      "notes": "Sends the ball of Psycho Power generated by Psycho Spark flying forward. Useful for attacking opponents at range."
    },
    {
      "name": "Psycho Shoot (OD Medium)",
      "input": "6mp",
      "startup": 12,
      "active": "",
      "recovery": "",
      "onBlock": -2,
      "onHit": "",
      "notes": "Sends the ball of Psycho Power generated by Psycho Spark flying forward. Useful for attacking opponents at range.; During od psycho spark"
    },
    {
      "name": "Psycho Shoot (OD Heavy)",
      "input": "6hp",
      "startup": 12,
      "active": "",
      "recovery": "",
      "onBlock": -2,
      "onHit": "",
      "notes": "Sends the ball of Psycho Power generated by Psycho Spark flying forward. Useful for attacking opponents at range."
    },
    {
      "name": "Psycho Uppercut (Light)",
      "input": "623lp",
      "startup": 10,
      "active": "10-17",
      "recovery": 28,
      "onBlock": -13,
      "onHit": "",
      "notes": "Unleash a powerful uppercut cloaked in Psycho Power. Useful for countering an opponent's jumping attacks, or as a way to close out combos.; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 15"
    },
    {
      "name": "Psycho Uppercut (Medium)",
      "input": "623mp",
      "startup": 14,
      "active": "14-19",
      "recovery": 32,
      "onBlock": -20,
      "onHit": "",
      "notes": "Unleash a powerful uppercut cloaked in Psycho Power. Useful for countering an opponent's jumping attacks, or as a way to close out combos.; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 19"
    },
    {
      "name": "Psycho Uppercut (Heavy)",
      "input": "623hp",
      "startup": 16,
      "active": "16-21",
      "recovery": 33,
      "onBlock": -21,
      "onHit": "",
      "notes": "Unleash a powerful uppercut cloaked in Psycho Power. Useful for countering an opponent's jumping attacks, or as a way to close out combos.; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 19"
    },
    {
      "name": "Psycho Uppercut (OD)",
      "input": "623(pp)",
      "startup": 13,
      "active": "13-18",
      "recovery": 36,
      "onBlock": -28,
      "onHit": "",
      "notes": "Unleash a powerful uppercut cloaked in Psycho Power. Useful for countering an opponent's jumping attacks, or as a way to close out combos.; Completely invincible between frames 1 - 16"
    },
    {
      "name": "Psycho Blitz (Light)",
      "input": "214lp",
      "startup": 11,
      "active": "11-13-17-19-26-29",
      "recovery": 14,
      "onBlock": -5,
      "onHit": 3,
      "notes": "Unleashes a combination of punches cloaked in Psycho Power. Useful when canceling from normal attacks, or as a way to close out combos."
    },
    {
      "name": "Psycho Blitz (Medium)",
      "input": "214mp",
      "startup": 13,
      "active": "13-14-22-24-34-36",
      "recovery": 16,
      "onBlock": -12,
      "onHit": "",
      "notes": "Unleashes a combination of punches cloaked in Psycho Power. Useful when canceling from normal attacks, or as a way to close out combos."
    },
    {
      "name": "Psycho Blitz (Heavy)",
      "input": "214hp",
      "startup": 15,
      "active": "15-16-28-29-36-37",
      "recovery": 23,
      "onBlock": -12,
      "onHit": "",
      "notes": "Unleashes a combination of punches cloaked in Psycho Power. Useful when canceling from normal attacks, or as a way to close out combos."
    },
    {
      "name": "Psycho Blitz (OD)",
      "input": "214(pp)",
      "startup": 13,
      "active": "13-13-18-18-22-22-26-26-30-30-34-34-43-44",
      "recovery": 20,
      "onBlock": -3,
      "onHit": "",
      "notes": "Unleashes a combination of punches cloaked in Psycho Power. Useful when canceling from normal attacks, or as a way to close out combos."
    },
    {
      "name": "Psycho Flicker (Light)",
      "input": "236lk",
      "startup": 16,
      "active": "16-19",
      "recovery": 26,
      "onBlock": -6,
      "onHit": 1,
      "notes": "A quick flicker jab cloaked in Psycho Power. Hold down the button to boost its attack properties, or cancel into Kill Rush.; Hold the button for more than 26 frames to change properties; Can be canceled into Kill Rush (Forward) and Kill Rush (Backward) while the button is held; Produces a crumple stun for 21 frames when the attack lands as a Punish Counter; Recovery is reduced by 2 frame on hit"
    },
    {
      "name": "Psycho Flicker (Light Charged)",
      "input": "236[lk]",
      "startup": 31,
      "active": "31-35",
      "recovery": 24,
      "onBlock": 4,
      "onHit": "",
      "notes": "A quick flicker jab cloaked in Psycho Power. Hold down the button to boost its attack properties, or cancel into Kill Rush.; Pulls the opponent towards Ed when the attack hits or is blocked; Launches the opponent when the attack hits while they are standing on the ground; Produces a slam knockdown when hitting a mid-air opponent"
    },
    {
      "name": "Psycho Flicker (Medium)",
      "input": "236mk",
      "startup": 20,
      "active": "20-23",
      "recovery": 26,
      "onBlock": -6,
      "onHit": 3,
      "notes": "A quick flicker jab cloaked in Psycho Power. Hold down the button to boost its attack properties, or cancel into Kill Rush.; Hold the button for more than 30 frames to change properties; Can be canceled into Kill Rush (Forward) or Kill Rush (Backward) while the button is held; Produces a crumple stun for 45 frames when the attack lands as a Punish Counter; Recovery is reduced by 1 frame on hit"
    },
    {
      "name": "Psycho Flicker (Medium Charged)",
      "input": "236[mk]",
      "startup": 35,
      "active": "35-39",
      "recovery": 24,
      "onBlock": 4,
      "onHit": "",
      "notes": "A quick flicker jab cloaked in Psycho Power. Hold down the button to boost its attack properties, or cancel into Kill Rush.; Pulls the opponent towards Ed when the attack hits or is blocked; Launches the opponent when the attack hits while they are standing on the ground; Produces a slam knockdown when hitting a mid-air opponent"
    },
    {
      "name": "Psycho Flicker (Heavy)",
      "input": "236hk",
      "startup": 17,
      "active": "17-24",
      "recovery": 18,
      "onBlock": "",
      "onHit": "",
      "notes": "A quick flicker jab cloaked in Psycho Power. Hold down the button to boost its attack properties, or cancel into Kill Rush.; Hold the button for more than 30 frames to change properties; Can be canceled into Kill Rush (Forward) or Kill Rush (Backward) while the button is held; Does not hit an opponent standing on the ground"
    },
    {
      "name": "Psycho Flicker (Heavy Charged)",
      "input": "236[hk]",
      "startup": 35,
      "active": "35-44",
      "recovery": 19,
      "onBlock": "",
      "onHit": "",
      "notes": "A quick flicker jab cloaked in Psycho Power. Hold down the button to boost its attack properties, or cancel into Kill Rush.; Does not hit an opponent standing on the ground; Produces a slam knockdown when hitting a mid-air opponent"
    },
    {
      "name": "Psycho Flicker (OD)",
      "input": "236(kk)",
      "startup": 25,
      "active": "25-28",
      "recovery": 32,
      "onBlock": 4,
      "onHit": "",
      "notes": "A quick flicker jab cloaked in Psycho Power. Hold down the button to boost its attack properties, or cancel into Kill Rush.; Pulls the opponent towards Ed when the attack hits or is blocked; Launches the opponent when the attack hits while they are standing on the ground; Produces a slam knockdown when hitting a mid-air opponent; * Damage when hitting a mid-air opponent is 1200"
    },
    {
      "name": "Kill Rush (Forward)",
      "input": "5(kk)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A technique that allows you to quickly move forward. Two different types of attacks are possible during the technique, which are timing dependent.; Can transition to Kill Switch Break between frames 11 - 12; Can transition to Kill Switch Chaser between frames 13 - 24"
    },
    {
      "name": "Kill Switch Break",
      "input": "6*p",
      "startup": 11,
      "active": "11-13",
      "recovery": 20,
      "onBlock": -4,
      "onHit": "",
      "notes": "Unleash a short uppercut from Kill Rush. Useful for attacking while closing the distance on an opponent.; During kill rush (forward)"
    },
    {
      "name": "Kill Switch Chaser",
      "input": "6*p",
      "startup": 11,
      "active": "11-13",
      "recovery": 20,
      "onBlock": -6,
      "onHit": "",
      "notes": "Unleash a powerful uppercut from Kill Rush. The opponent is launched into the air when this connects, making it easy to string together a combo.; During kill rush (forward"
    },
    {
      "name": "Kill Rush (Backward)",
      "input": "4(kk)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Perform a bob & weave while taking a step back. Useful for helping to create distance from the opponent while analyzing the situation."
    },
    {
      "name": "Psycho Storm",
      "input": "236236*k",
      "startup": 13,
      "active": "13-14-22-23-40-41-45-46-63-63-65-65-67-67",
      "recovery": 56,
      "onBlock": -32,
      "onHit": "",
      "notes": "Unleashes a series of high speed flicker jabs cloaked in Psycho Power. Useful as a combo ender, or as a counter attack by using its invincibility time.; Invincible to strikes and throws between frames 1 - 14; Values do not change when the attack lands as a counter or Punish Counter; The minimum guaranteed damage is 30%"
    },
    {
      "name": "Psycho Cannon",
      "input": "214214*p",
      "startup": 8,
      "active": "",
      "recovery": "",
      "onBlock": 65,
      "onHit": "",
      "notes": "Generates a ball of Psycho Power, then sends it flying straight ahead with a punch. This multi-hitting attack can be useful in combos.; Values do not change when the attack lands as a counter or Punish Counter; The minimum guaranteed damage is 40%"
    },
    {
      "name": "Psycho Chamber",
      "input": "236236*p",
      "startup": 10,
      "active": "10-19",
      "recovery": 64,
      "onBlock": -49,
      "onHit": "",
      "notes": "Ties together the feet and hands of an opponent before delivering a series of powerful shots all over their body. A versatile move that can counter projectiles, be used in combos, and can turn the tables when under pressure.; Completely invincible between frames 1 - 14; The minimum guaranteed damage is 50%; Values do not change when the attack lands as a counter or Punish Counter; Can only be canceled into from special moves; 30% Immediate Scaling added when canceled into from a Light or Medium Psycho Flicker"
    },
    {
      "name": "Psycho Chamber (Critical Art)",
      "input": "236236*p",
      "startup": 10,
      "active": "10-19",
      "recovery": 64,
      "onBlock": -49,
      "onHit": "",
      "notes": "Ties together the feet and hands of an opponent before delivering a series of powerful shots all over their body. A versatile move that can counter projectiles, be used in combos, and can turn the tables when under pressure.; Completely invincible between frames 1 - 14; Minimum guaranteed damage is set to 50%; Values do not change on counter or Punish Counter; * Can only be canceled into from special moves; * 30% Immediate Scaling added when canceled into from a Light or Medium Psycho Flicker"
    },
    {
      "name": "Face Buster",
      "input": "(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "Grab your opponent, then deliver a shoulder check to the head before punching them away. Throws your opponent without switching places with them.; When near opponent; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Rib Crusher",
      "input": "(4lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "Grab your opponent's arm to immobilize them, then deliver a couple of punches to send them away. Throws your opponent while switching places with them.; When near opponent; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    }
  ],
  "akuma": [
    {
      "name": "Standing Light Punch",
      "input": "5lp",
      "startup": 4,
      "active": "4-6",
      "recovery": 7,
      "onBlock": -1,
      "onHit": 4,
      "notes": ""
    },
    {
      "name": "Standing Medium Punch",
      "input": "5mp",
      "startup": 6,
      "active": "6-9",
      "recovery": 11,
      "onBlock": 1,
      "onHit": 4,
      "notes": ""
    },
    {
      "name": "Standing Heavy Punch",
      "input": "5hp",
      "startup": 9,
      "active": "9-13",
      "recovery": 18,
      "onBlock": -3,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Standing Light Kick",
      "input": "5lk",
      "startup": 5,
      "active": "5-7",
      "recovery": 11,
      "onBlock": -4,
      "onHit": 2,
      "notes": ""
    },
    {
      "name": "Standing Medium Kick",
      "input": "5mk",
      "startup": 7,
      "active": "7-11",
      "recovery": 15,
      "onBlock": -3,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Standing Heavy Kick",
      "input": "5hk",
      "startup": 13,
      "active": "13-15-24-27",
      "recovery": 15,
      "onBlock": 3,
      "onHit": 7,
      "notes": "Forces the opponent into a standing position; 1 frames of recovery added when the attack misses"
    },
    {
      "name": "Crouching Light Punch",
      "input": "2lp",
      "startup": 4,
      "active": "4-5",
      "recovery": 9,
      "onBlock": -1,
      "onHit": 5,
      "notes": ""
    },
    {
      "name": "Crouching Medium Punch",
      "input": "2mp",
      "startup": 6,
      "active": "6-8",
      "recovery": 14,
      "onBlock": -1,
      "onHit": 6,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Punch",
      "input": "2hp",
      "startup": 8,
      "active": "8-15",
      "recovery": 19,
      "onBlock": -8,
      "onHit": 0,
      "notes": ""
    },
    {
      "name": "Crouching Light Kick",
      "input": "2lk",
      "startup": 5,
      "active": "5-6",
      "recovery": 10,
      "onBlock": -3,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Crouching Medium Kick",
      "input": "2mk",
      "startup": 8,
      "active": "8-10",
      "recovery": 19,
      "onBlock": -6,
      "onHit": 1,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Kick",
      "input": "2hk",
      "startup": 9,
      "active": "9-11",
      "recovery": 23,
      "onBlock": -12,
      "onHit": "",
      "notes": "Knockdown time extended when attack lands as a counter or Punish Counter"
    },
    {
      "name": "Jumping Light Punch",
      "input": "j>lp",
      "startup": 4,
      "active": "4-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Punch",
      "input": "j>mp",
      "startup": 8,
      "active": "8-11",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Heavy Punch",
      "input": "j>hp",
      "startup": 9,
      "active": "9-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a slam knockdown on counter or Punish Counter when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Light Kick",
      "input": "j>lk",
      "startup": 6,
      "active": "6-15",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Medium Kick",
      "input": "j>mk",
      "startup": 7,
      "active": "7-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Heavy Kick",
      "input": "j>hk",
      "startup": 12,
      "active": "12-17",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Skull Splitter",
      "input": "6mp",
      "startup": 20,
      "active": "20-20-22-24",
      "recovery": 18,
      "onBlock": -1,
      "onHit": 3,
      "notes": "An overhead attack that cannot be blocked while crouching.; Second attack becomes an overhead only if the first attack whiffs"
    },
    {
      "name": "Resso Snap Kick",
      "input": "6mk",
      "startup": 10,
      "active": "10-12",
      "recovery": 18,
      "onBlock": -4,
      "onHit": 5,
      "notes": "A quick, long-reaching snap kick."
    },
    {
      "name": "Rago High Kick",
      "input": "4hk",
      "startup": 12,
      "active": "12-16",
      "recovery": 27,
      "onBlock": -15,
      "onHit": "",
      "notes": "A launching kick that can be canceled into special moves."
    },
    {
      "name": "Viscera Piercer",
      "input": "5mp>5mp",
      "startup": 7,
      "active": "7-9",
      "recovery": 21,
      "onBlock": -6,
      "onHit": -1,
      "notes": "A quick series of attacks that can be canceled by a special move to create combos, or eliminate gaps that would leave you open to counterattack."
    },
    {
      "name": "Bone Crusher Axe Kick",
      "input": "5mk>5hk",
      "startup": 20,
      "active": "20-22",
      "recovery": 20,
      "onBlock": -3,
      "onHit": 1,
      "notes": "A two-hit series of attacks, the second of which cannot be blocked crouching."
    },
    {
      "name": "Kikoku Combination (1)",
      "input": "6hp",
      "startup": 13,
      "active": "13-16",
      "recovery": 20,
      "onBlock": -3,
      "onHit": 4,
      "notes": "A multi-hit attack with a lenient input window for follow-ups."
    },
    {
      "name": "Kikoku Combination (2)",
      "input": "6hp>6hp",
      "startup": 10,
      "active": "10-12",
      "recovery": 21,
      "onBlock": -10,
      "onHit": "",
      "notes": "A multi-hit attack with a lenient input window for follow-ups."
    },
    {
      "name": "Kikoku Combination (3)",
      "input": "6hp>6hp>5hk",
      "startup": 9,
      "active": "9-11",
      "recovery": 24,
      "onBlock": -13,
      "onHit": "",
      "notes": "A multi-hit attack with a lenient input window for follow-ups."
    },
    {
      "name": "Tenmaku Blade Kick",
      "input": "9>2mk",
      "startup": 16,
      "active": "16",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A downward attack that doesn't leave you open, and allows you to change the trajectory of your forward jump.; During a forward jump"
    },
    {
      "name": "Gou Hadoken (Light)",
      "input": "236lp",
      "startup": 16,
      "active": "",
      "recovery": "",
      "onBlock": -4,
      "onHit": 0,
      "notes": "Fire a ki blast directly forward. Useful for attacking opponents at range.; Hold and release the button for 25 frames or more to activate Level 2; Hold and release the button for 49 frames or more to activate Level 3"
    },
    {
      "name": "Gou Hadoken (Light) (Charge Level 2)",
      "input": "236[lp]",
      "startup": 31,
      "active": "",
      "recovery": "",
      "onBlock": 2,
      "onHit": "",
      "notes": "Fire a ki blast directly forward. Useful for attacking opponents at range."
    },
    {
      "name": "Gou Hadoken (Light) (Charge Level 3)",
      "input": "236[lp]",
      "startup": 56,
      "active": "",
      "recovery": "",
      "onBlock": 5,
      "onHit": "",
      "notes": "Fire a ki blast directly forward. Useful for attacking opponents at range."
    },
    {
      "name": "Gou Hadoken (Medium)",
      "input": "236[mp]",
      "startup": 14,
      "active": "",
      "recovery": "",
      "onBlock": -6,
      "onHit": -2,
      "notes": "Fire a ki blast directly forward. Useful for attacking opponents at range.; Hold and release the button for 25 frames or more to activate Level 2; Hold and release the button for 49 frames or more to activate Level 3"
    },
    {
      "name": "Gou Hadoken (Medium) (Charge Level 2)",
      "input": "236[mp]",
      "startup": 31,
      "active": "",
      "recovery": "",
      "onBlock": 2,
      "onHit": "",
      "notes": "Fire a ki blast directly forward. Useful for attacking opponents at range."
    },
    {
      "name": "Gou Hadoken (Medium) (Charge Level 3)",
      "input": "236[mp]",
      "startup": 56,
      "active": "",
      "recovery": "",
      "onBlock": 5,
      "onHit": "",
      "notes": "Fire a ki blast directly forward. Useful for attacking opponents at range."
    },
    {
      "name": "Gou Hadoken (Heavy)",
      "input": "236[hp]",
      "startup": 12,
      "active": "",
      "recovery": "",
      "onBlock": -8,
      "onHit": -4,
      "notes": "Fire a ki blast directly forward. Useful for attacking opponents at range.; Charged; Hold and release the button for 25 frames or more to activate Level 2; Hold and release the button for 49 frames or more to activate Level 3"
    },
    {
      "name": "Gou Hadoken (Heavy) (Charge Level 2)",
      "input": "236[hp]",
      "startup": 31,
      "active": "",
      "recovery": "",
      "onBlock": 2,
      "onHit": "",
      "notes": "Fire a ki blast directly forward. Useful for attacking opponents at range."
    },
    {
      "name": "Gou Hadoken (Heavy) (Charge Level 3)",
      "input": "236[hp]",
      "startup": 56,
      "active": "",
      "recovery": "",
      "onBlock": 5,
      "onHit": "",
      "notes": "Fire a ki blast directly forward. Useful for attacking opponents at range."
    },
    {
      "name": "Gou Hadoken (OD)",
      "input": "236pp",
      "startup": 12,
      "active": "",
      "recovery": "",
      "onBlock": 2,
      "onHit": "",
      "notes": "Fire a ki blast directly forward. Useful for attacking opponents at range."
    },
    {
      "name": "Gou Hadoken (Charged) (OD)",
      "input": "236[pp]",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": 5,
      "onHit": "",
      "notes": "Fire a ki blast directly forward. Useful for attacking opponents at range.; Hold down the button for over 25 frames to change its properties"
    },
    {
      "name": "Zanku Hadoken",
      "input": "9>236*p",
      "startup": 13,
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Fire a ki blast from the air to the ground below. This attack is effective as a tool to shield your approach. The Overdrive version can also be performed from a neutral jump.; During a forward jump; Angle of the projectile changes depending on the button pressed"
    },
    {
      "name": "Zanku Hadoken (OD)",
      "input": "{8|9}>236pp",
      "startup": 6,
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Fire a ki blast from the air to the ground below. This attack is effective as a tool to shield your approach. The Overdrive version can also be performed from a neutral jump."
    },
    {
      "name": "Gou Shoryuken (Light)",
      "input": "623lp",
      "startup": 5,
      "active": "5-14",
      "recovery": 21,
      "onBlock": -23,
      "onHit": "",
      "notes": "Leap into the air and perform a powerful uppercut. A Gou Shoryuken is invincible to an opponent's jumping attacks, making it a great anti-air tool.; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 14; Considered airborne from frames 8 - 35"
    },
    {
      "name": "Gou Shoryuken (Medium)",
      "input": "623mp",
      "startup": 6,
      "active": "6-15",
      "recovery": 30,
      "onBlock": -30,
      "onHit": "",
      "notes": "Leap into the air and perform a powerful uppercut. A Gou Shoryuken is invincible to an opponent's jumping attacks, making it a great anti-air tool.; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 9; Considered airborne from frames 9 - 45"
    },
    {
      "name": "Gou Shoryuken (Heavy)",
      "input": "623hp",
      "startup": 7,
      "active": "7-17",
      "recovery": 35,
      "onBlock": -36,
      "onHit": "",
      "notes": "Leap into the air and perform a powerful uppercut. A Gou Shoryuken is invincible to an opponent's jumping attacks, making it a great anti-air tool.; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 9; Considered airborne from frames 7 - 52"
    },
    {
      "name": "Gou Shoryuken (OD)",
      "input": "623pp",
      "startup": 6,
      "active": "6-16",
      "recovery": 37,
      "onBlock": -39,
      "onHit": "",
      "notes": "Leap into the air and perform a powerful uppercut. A Gou Shoryuken is invincible to an opponent's jumping attacks, making it a great anti-air tool.; Completely invincible from frames 1 - 8.; Considered airborne from frames 8 - 53."
    },
    {
      "name": "Tatsumaki Zankukyaku (Light)",
      "input": "214lk",
      "startup": 12,
      "active": "12-13",
      "recovery": 21,
      "onBlock": -13,
      "onHit": "",
      "notes": "Unleash a series of roundhouse kicks while moving forward. Useful in combos as well as for sending opponents flying away.; 6 frames of recovery added when the attack misses"
    },
    {
      "name": "Tatsumaki Zankukyaku (Medium)",
      "input": "214mk",
      "startup": 11,
      "active": "11-12-26-27",
      "recovery": 31,
      "onBlock": -13,
      "onHit": "",
      "notes": "Unleash a series of roundhouse kicks while moving forward. Useful in combos as well as for sending opponents flying away."
    },
    {
      "name": "Tatsumaki Zankukyaku (Heavy)",
      "input": "214hk",
      "startup": 7,
      "active": "7-9-16-18-28-30-49-51",
      "recovery": 23,
      "onBlock": -59,
      "onHit": "",
      "notes": "Unleash a series of roundhouse kicks while moving forward. Useful in combos as well as for sending opponents flying away."
    },
    {
      "name": "Tatsumaki Zankukyaku (OD)",
      "input": "214kk",
      "startup": 13,
      "active": "13-14-19-20-25-26-30-31-36-37",
      "recovery": 26,
      "onBlock": -17,
      "onHit": "",
      "notes": "Unleash a series of roundhouse kicks while moving forward. Useful in combos as well as for sending opponents flying away."
    },
    {
      "name": "Aerial Tatsumaki Zankukyaku",
      "input": "9>214*k",
      "startup": 11,
      "active": "11-12-18-19-25-26",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A Tatsumaki Zanku-kyaku performed during a jump. Useful to change jump trajectory or to finish up combos.; During a forward jump; During a forward jump"
    },
    {
      "name": "Aerial Tatsumaki Zankukyaku (OD)",
      "input": "{8|9}>214kk",
      "startup": 11,
      "active": "11-12-14-16-18-20-22-24-27-28",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A Tatsumaki Zanku-kyaku performed during a jump. Useful to change jump trajectory or to finish up combos."
    },
    {
      "name": "Adamant Flame (Light 1)",
      "input": "214lp",
      "startup": 15,
      "active": "15-17",
      "recovery": 23,
      "onBlock": -8,
      "onHit": 1,
      "notes": "A quick thrust engulfed in flames. Useful for exploiting an opponent's opening, or in combos.; Can transition to branching attacks from frames 19 - 22"
    },
    {
      "name": "Adamant Flame (Light 2)",
      "input": "214lp>6*p",
      "startup": 7,
      "active": "7-10",
      "recovery": 18,
      "onBlock": -10,
      "onHit": 3,
      "notes": "A quick thrust engulfed in flames. Useful for exploiting an opponent's opening, or in combos."
    },
    {
      "name": "Adamant Flame (Medium 1)",
      "input": "214mp",
      "startup": 19,
      "active": "19-21",
      "recovery": 20,
      "onBlock": -4,
      "onHit": 2,
      "notes": "A quick thrust engulfed in flames. Useful for exploiting an opponent's opening, or in combos.; Can transition to branching attacks from frames 23 - 26; 3 frames of recovery added when the attack misses; Adds +10 frames of advantage on a Punish Counter"
    },
    {
      "name": "Adamant Flame (Medium 2)",
      "input": "214mp>6*p",
      "startup": 7,
      "active": "7-10",
      "recovery": 32,
      "onBlock": -18,
      "onHit": "",
      "notes": "A quick thrust engulfed in flames. Useful for exploiting an opponent's opening, or in combos."
    },
    {
      "name": "Adamant Flame (Heavy 1)",
      "input": "214hp",
      "startup": 23,
      "active": "23-25",
      "recovery": 19,
      "onBlock": -2,
      "onHit": 3,
      "notes": "A quick thrust engulfed in flames. Useful for exploiting an opponent's opening, or in combos.; Can transition to branching attacks from frames 27 - 30; 2 frames of recovery added when the attack misses; Adds +12 frames of advantage on a Punish Counter"
    },
    {
      "name": "Adamant Flame (Heavy 2)",
      "input": "214hp>6*p",
      "startup": 11,
      "active": "11-14",
      "recovery": 28,
      "onBlock": -14,
      "onHit": "",
      "notes": "A quick thrust engulfed in flames. Useful for exploiting an opponent's opening, or in combos."
    },
    {
      "name": "Adamant Flame (OD 1)",
      "input": "214pp",
      "startup": 18,
      "active": "18-20",
      "recovery": 23,
      "onBlock": -3,
      "onHit": 1,
      "notes": "A quick thrust engulfed in flames. Useful for exploiting an opponent's opening, or in combos.; Can transition to branching attacks from frames 22 - 25; Produces a crumple stun for 39 frames when the attack lands as a Punish Counter"
    },
    {
      "name": "Adamant Flame (OD 2)",
      "input": "214pp>6*p",
      "startup": 7,
      "active": "7-10-15-17",
      "recovery": 25,
      "onBlock": -18,
      "onHit": "",
      "notes": "A quick thrust engulfed in flames. Useful for exploiting an opponent's opening, or in combos."
    },
    {
      "name": "Demon Raid",
      "input": "236*k",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A quick leap towards the opponent that allows you to transition into various techniques. Clever use of these techniques will help strengthen your offense.; Can go into any transition attack except for Demon Low Slash and Demon Swoop between frames 18 - 40; Considered airborne after frame 7; Distance traveled is determined by the button pressed"
    },
    {
      "name": "Demon Raid (OD)",
      "input": "236kk",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A quick leap towards the opponent that allows you to transition into various techniques. Clever use of these techniques will help strengthen your offense.; Can go into any transition attack except for Demon Low Slash and Demon Swoop between frames 16 - 40; Considered airborne after frame 7"
    },
    {
      "name": "Demon Low Slash",
      "input": "5",
      "startup": 8,
      "active": "8-11",
      "recovery": 19,
      "onBlock": 2,
      "onHit": "",
      "notes": "Performs a low sweep the moment Demon Raid lands back on the ground. The kick has a long reach, and allows you to act before an opponent even if blocked.; During overdrive demon raid; No input"
    },
    {
      "name": "Demon Guillotine",
      "input": "*p",
      "startup": 16,
      "active": "16",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A vicious downward chop performed from Demon Raid. This is an overhead attack, and allows you to act before an opponent even if blocked.; During overdrive demon raid; Recovery changes depending strength of the attack blocked"
    },
    {
      "name": "Demon Blade Kick",
      "input": "*k",
      "startup": 13,
      "active": "13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A quick downward kick performed from Demon Raid. The button used determines your angle of descent.; During overdrive demon raid; Recovery changes depending on the height of the attack when it hits or is blocked; 5 frames of recovery added when the attack misses"
    },
    {
      "name": "Demon Swoop",
      "input": "2",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A sudden drop to the ground performed from Demon Raid that eliminates any openings. Mix this in with other Demon Raid finishers to keep your opponent guessing.; During overdrive demon raid"
    },
    {
      "name": "Demon Gou Zanku",
      "input": "236*p",
      "startup": 6,
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "An attack only available from Overdrive Demon Raid. Useful in combos or for a surprise attack, it doesn't consume any additional Drive.; During overdrive od demon raid"
    },
    {
      "name": "Demon Gou Rasen",
      "input": "214*k",
      "startup": 5,
      "active": "5-6-9-11-14-16-18-20-22-23",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "An attack only available from Overdrive Demon Raid. Useful in combos against an airborne opponent, it doesn't consume any additional Drive.; During overdrive od demon raid"
    },
    {
      "name": "Ashura Senku (Forward)",
      "input": "6kkk",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A technique that grants the user swift movement while cloaking them in illusions. Input forward or back together with the other buttons to move in that direction."
    },
    {
      "name": "Ashura Senku (Backward)",
      "input": "4kkk",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A technique that grants the user swift movement while cloaking them in illusions. Input forward or back together with the other buttons to move in that direction."
    },
    {
      "name": "Oboro Throw",
      "input": "lp+lk",
      "startup": 8,
      "active": "8-10",
      "recovery": 50,
      "onBlock": "",
      "onHit": "",
      "notes": "A throw available during Ashura Senku. Useful at mid-range against opponents with a tendency to block.; During ashura senku (forward); Properties change to the following when the attack lands as a Punish Counter:; - Deals 2900 damage; - Super Art gauge increases by 4000"
    },
    {
      "name": "Messatsu Gohado",
      "input": "236236*p",
      "startup": 10,
      "active": "",
      "recovery": "",
      "onBlock": -41,
      "onHit": "",
      "notes": "Fires a high-speed, concentrated ball of the Satsui no Hado forward. Has high attack power for a projectile-based Super Art.; Invincible to strikes and projectiles from frames 1 - 14; Minimum guaranteed damage is set to 30%; Values do not change on counter or Punish Counter"
    },
    {
      "name": "Tenma Gozanku",
      "input": "{8|9}>236236*k",
      "startup": 14,
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Fire a powerful ki blast from the air to the ground below. Useful for finishing combos from jump attacks that can be canceled.; During a neutral or forward jump; Minimum guaranteed damage is 30%; Values do not change on counter or Punish Counter"
    },
    {
      "name": "Empyrean\u2019s End",
      "input": "214214*p",
      "startup": 9,
      "active": "9-11",
      "recovery": 52,
      "onBlock": -35,
      "onHit": "",
      "notes": "Turns the Satsui no Hado into a powerful flame before piercing the opponent. Opponents are open to follow-up attacks if they reach the end of the stage after being launched.; Completely invincible from frame 1 to frame 11.; Produces a wall splat if the opponent reaches the wall; Minimum guaranteed damage is set to 40%; Values do not change on counter or Punish Counter"
    },
    {
      "name": "Sip of Calamity",
      "input": "236236*k",
      "startup": 8,
      "active": "8-11",
      "recovery": 58,
      "onBlock": -41,
      "onHit": "",
      "notes": "Knocks down an opponent with overwhelming strength before unleashing a single, devastating blow. It can be canceled into from a special move, making it particularly useful in combos.; When under 25% vitality; Completely invincible from frame 1 to frame 11.; Minimum guaranteed damage is set to 50%; Values do not change on counter or Punish Counter; * Can only be canceled into from special moves"
    },
    {
      "name": "Sip of Calamity (Critical Art)",
      "input": "236236*k",
      "startup": 8,
      "active": "8-11",
      "recovery": 58,
      "onBlock": -41,
      "onHit": "",
      "notes": "Knocks down an opponent with overwhelming strength before unleashing a single, devastating blow. It can be canceled into from a special move, making it particularly useful in combos.; Completely invincible from frame 1 to frame 11.; Minimum guaranteed damage is set to 50%; Values do not change on counter or Punish Counter; * Can only be canceled into from special moves"
    },
    {
      "name": "Shun Goku Satsu",
      "input": "lp>lp>6>lk>hp",
      "startup": 7,
      "active": "7-27",
      "recovery": 57,
      "onBlock": "",
      "onHit": "",
      "notes": "A secret technique that overwhelms an opponent with myriad of attacks made in a single second. Cannot be avoided if performed at close range while the opponent is standing on the ground.; Completely invincible on frame 1; Invincible to projectiles from frames 6 - 27; Minimum guaranteed damage is set to 50%; Values do not change on counter or Punish Counter; * Can only be canceled into from special moves"
    },
    {
      "name": "Goshoha",
      "input": "lp+lk",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "Grab your opponent, and send them flying away with two consecutive palm strikes. Throws your opponent without switching places with them.; When near opponent; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Shurettou",
      "input": "(4lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "Grab your opponent, and deliver a devastating downward chop. Throws your opponent while switching places with them.; When near opponent; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    }
  ],
  "mbison": [
    {
      "name": "Standing Light Punch",
      "input": "5lp",
      "startup": 5,
      "active": "5-7",
      "recovery": 9,
      "onBlock": -2,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Standing Medium Punch",
      "input": "5mp",
      "startup": 8,
      "active": "8-10",
      "recovery": 15,
      "onBlock": 0,
      "onHit": 6,
      "notes": ""
    },
    {
      "name": "Standing Heavy Punch",
      "input": "5hp",
      "startup": 19,
      "active": "19-21",
      "recovery": 17,
      "onBlock": 1,
      "onHit": 4,
      "notes": "Adds a floor bounding effect during a mid-air hit; 17 frames of advantage added when the attack lands as a Punish Counter"
    },
    {
      "name": "Standing Light Kick",
      "input": "5lk",
      "startup": 4,
      "active": "4-5",
      "recovery": 10,
      "onBlock": -1,
      "onHit": 3,
      "notes": ""
    },
    {
      "name": "Standing Medium Kick",
      "input": "5mk",
      "startup": 10,
      "active": "10-13",
      "recovery": 16,
      "onBlock": -3,
      "onHit": 2,
      "notes": ""
    },
    {
      "name": "Standing Heavy Kick",
      "input": "5hk",
      "startup": 13,
      "active": "13-16",
      "recovery": 19,
      "onBlock": -2,
      "onHit": 6,
      "notes": "Forces a juggle state when hitting a mid-air opponent; Produces a crumple stun for 32 frames when the attack lands as a Punish Counter; Juggle state time is extended when attack hits a mid-air opponent as a Punish Counter"
    },
    {
      "name": "Crouching Light Punch",
      "input": "2lp",
      "startup": 4,
      "active": "4-5",
      "recovery": 10,
      "onBlock": -2,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Punch",
      "input": "2mp",
      "startup": 6,
      "active": "6-8",
      "recovery": 14,
      "onBlock": -1,
      "onHit": 5,
      "notes": "3 frames of recovery added when the attack misses"
    },
    {
      "name": "Crouching Heavy Punch",
      "input": "2hp",
      "startup": 10,
      "active": "10-15",
      "recovery": 21,
      "onBlock": -9,
      "onHit": 0,
      "notes": "Forces the opponent into a standing position; Forces a juggle state when hitting a mid-air opponent on counter or Punish Counter"
    },
    {
      "name": "Crouching Light Kick",
      "input": "2lk",
      "startup": 5,
      "active": "5-6",
      "recovery": 10,
      "onBlock": -2,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Kick",
      "input": "2mk",
      "startup": 8,
      "active": "8-10",
      "recovery": 19,
      "onBlock": -6,
      "onHit": -2,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Kick",
      "input": "2hk",
      "startup": 11,
      "active": "11-13",
      "recovery": 26,
      "onBlock": -11,
      "onHit": "",
      "notes": "Knockdown time extended when attack lands as a counter or Punish Counter"
    },
    {
      "name": "Jumping Light Punch",
      "input": "j>lp",
      "startup": 5,
      "active": "5-8",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Punch",
      "input": "j>mp",
      "startup": 8,
      "active": "8-11",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Heavy Punch",
      "input": "j>hp",
      "startup": 9,
      "active": "9-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a slam knockdown on counter or Punish Counter when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Light Kick",
      "input": "j>lk",
      "startup": 5,
      "active": "5-11",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Kick",
      "input": "j>mk",
      "startup": 7,
      "active": "7-13",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Heavy Kick",
      "input": "j>hk",
      "startup": 10,
      "active": "10-15",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Psycho Hammer",
      "input": "6hp",
      "startup": 22,
      "active": "22-24",
      "recovery": 20,
      "onBlock": -3,
      "onHit": 3,
      "notes": "An overhead attack that cannot be blocked while crouching.; Adds a floor bounding effect during a mid-air hit"
    },
    {
      "name": "Evil Knee",
      "input": "4hk",
      "startup": 10,
      "active": "10-13",
      "recovery": 17,
      "onBlock": 1,
      "onHit": 4,
      "notes": "A knee strike that can be canceled into special moves."
    },
    {
      "name": "Hover Kick",
      "input": "3hk",
      "startup": 15,
      "active": "15-24",
      "recovery": 23,
      "onBlock": -15,
      "onHit": "",
      "notes": "A sliding low attack that cannot be blocked standing.; Knockdown time extended when attack lands as a counter or Punish Counter"
    },
    {
      "name": "Shadow Hammer",
      "input": "5mp>6hp",
      "startup": 22,
      "active": "22-24",
      "recovery": 20,
      "onBlock": -3,
      "onHit": 3,
      "notes": "A two-hit series of attacks, the second of which cannot be blocked crouching.; Adds a floor bounding effect during a mid-air hit"
    },
    {
      "name": "Shadow Spear",
      "input": "5mp>2hk",
      "startup": 16,
      "active": "16-19",
      "recovery": 20,
      "onBlock": -3,
      "onHit": 3,
      "notes": "An attack consisting of multiple hits that cannot be blocked while standing."
    },
    {
      "name": "Hell Attack",
      "input": "j>mp>mp",
      "startup": 7,
      "active": "7-10",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A combination attack that is useful against jumping opponents.; During a jump"
    },
    {
      "name": "Psycho Crusher Attack (Light)",
      "input": "[4]>6lp",
      "startup": 16,
      "active": "16-31",
      "recovery": 24,
      "onBlock": -20,
      "onHit": "",
      "notes": "A quick charge forward empowered by Psycho Power. It deals a large amount of damage, making it particularly effective in combos.; Invincible against projectiles and strikes with mid-air hitboxes from frames 6 - 17; Considered airborne from frames 22 - 31"
    },
    {
      "name": "[Psycho Mine] Psycho Crusher Attack (Light)",
      "input": "[4]>6lp",
      "startup": 16,
      "active": "16-31",
      "recovery": 24,
      "onBlock": 6,
      "onHit": "",
      "notes": "A quick charge forward empowered by Psycho Power. It deals a large amount of damage, making it particularly effective in combos.; Invincible against projectiles and strikes with mid-air hitboxes from frames 6 - 17; Considered airborne from frames 22 - 31; Detonates a Psycho Mine on block or on hit"
    },
    {
      "name": "Psycho Crusher Attack (Medium)",
      "input": "[4]>6mp",
      "startup": 20,
      "active": "20-35",
      "recovery": 24,
      "onBlock": -20,
      "onHit": "",
      "notes": "A quick charge forward empowered by Psycho Power. It deals a large amount of damage, making it particularly effective in combos.; Invincible against projectiles and strikes with mid-air hitboxes from frames 6 - 21; Considered airborne from frames 26 - 45"
    },
    {
      "name": "[Psycho Mine] Psycho Crusher Attack (Medium)",
      "input": "[4]>6mp",
      "startup": 20,
      "active": "20-35",
      "recovery": 24,
      "onBlock": 6,
      "onHit": "",
      "notes": "A quick charge forward empowered by Psycho Power. It deals a large amount of damage, making it particularly effective in combos.; Invincible against projectiles and strikes with mid-air hitboxes from frames 6 - 21; Considered airborne from frames 26 - 45; Detonates a Psycho Mine on block or on hit"
    },
    {
      "name": "Psycho Crusher Attack (Heavy)",
      "input": "[4]>6hp",
      "startup": 24,
      "active": "24-49",
      "recovery": 24,
      "onBlock": -23,
      "onHit": "",
      "notes": "A quick charge forward empowered by Psycho Power. It deals a large amount of damage, making it particularly effective in combos.; Invincible against projectiles and strikes with mid-air hitboxes from frames 6 - 25; Considered airborne from frames 30 - 49"
    },
    {
      "name": "[Psycho Mine] Psycho Crusher Attack (Heavy)",
      "input": "[4]>6hp",
      "startup": 24,
      "active": "24-49",
      "recovery": 24,
      "onBlock": 5,
      "onHit": "",
      "notes": "A quick charge forward empowered by Psycho Power. It deals a large amount of damage, making it particularly effective in combos.; Invincible against projectiles and strikes with mid-air hitboxes from frames 6 - 25; Considered airborne from frames 30 - 49; Detonates a Psycho Mine on block or on hit"
    },
    {
      "name": "Psycho Crusher Attack (OD)",
      "input": "[4]>6(pp)",
      "startup": 16,
      "active": "16-31",
      "recovery": 20,
      "onBlock": -3,
      "onHit": "",
      "notes": "A quick charge forward empowered by Psycho Power. It deals a large amount of damage, making it particularly effective in combos.; Invincible against projectiles and strikes with mid-air hitboxes from frames 7 - 17; Projectile invincible from frames 13 - 31; Considered airborne from frames 20 - 31"
    },
    {
      "name": "[Psycho Mine] Psycho Crusher Attack (OD)",
      "input": "[4]>6(pp)",
      "startup": 16,
      "active": "16-31",
      "recovery": 20,
      "onBlock": 10,
      "onHit": "",
      "notes": "A quick charge forward empowered by Psycho Power. It deals a large amount of damage, making it particularly effective in combos.; Invincible against projectiles and strikes with mid-air hitboxes from frames 7 - 17; Projectile invincible from frames 13 - 31; Considered airborne from frames 20 - 31; Detonates a Psycho Mine on block or on hit"
    },
    {
      "name": "Double Knee Press (Light)",
      "input": "236lk",
      "startup": 13,
      "active": "13-14-16-17",
      "recovery": 20,
      "onBlock": -5,
      "onHit": 2,
      "notes": "Flip and fly forward towards the opponent before hitting them multiple times. A powerful tool to control space at a distance."
    },
    {
      "name": "Double Knee Press (Medium)",
      "input": "236mk",
      "startup": 17,
      "active": "17-18-20-21",
      "recovery": 20,
      "onBlock": -5,
      "onHit": 3,
      "notes": "Flip and fly forward towards the opponent before hitting them multiple times. A powerful tool to control space at a distance."
    },
    {
      "name": "Double Knee Press (Heavy)",
      "input": "236hk",
      "startup": 22,
      "active": "22-23-25-26",
      "recovery": 20,
      "onBlock": -4,
      "onHit": 3,
      "notes": "Flip and fly forward towards the opponent before hitting them multiple times. A powerful tool to control space at a distance."
    },
    {
      "name": "Double Knee Press (OD)",
      "input": "236(kk)",
      "startup": 17,
      "active": "17-18-20-21-39-41",
      "recovery": 28,
      "onBlock": -15,
      "onHit": "",
      "notes": "Flip and fly forward towards the opponent before hitting them multiple times. A powerful tool to control space at a distance."
    },
    {
      "name": "Backfist Combo (Light)",
      "input": "214lp",
      "startup": 13,
      "active": "13-14-25-29",
      "recovery": 25,
      "onBlock": -14,
      "onHit": "",
      "notes": "Step forward and deliver a backhand blow into a powerful palm thrust. Plants a Psycho Mine on hit.; Implants a Psycho Mine into the opponent on hit"
    },
    {
      "name": "[Psycho Mine] Backfist Combo (Light)",
      "input": "214lp",
      "startup": 13,
      "active": "13-14-25-29",
      "recovery": 25,
      "onBlock": 6,
      "onHit": "",
      "notes": "Step forward and deliver a backhand blow into a powerful palm thrust. Plants a Psycho Mine on hit.; Detonates a Psycho Mine on block or on hit"
    },
    {
      "name": "Backfist Combo (Medium)",
      "input": "214mp",
      "startup": 17,
      "active": "17-18-29-33",
      "recovery": 26,
      "onBlock": -15,
      "onHit": "",
      "notes": "Step forward and deliver a backhand blow into a powerful palm thrust. Plants a Psycho Mine on hit.; Implants a Psycho Mine into the opponent on hit"
    },
    {
      "name": "[Psycho Mine] Backfist Combo (Medium)",
      "input": "214mp",
      "startup": 17,
      "active": "17-18-29-33",
      "recovery": 26,
      "onBlock": 6,
      "onHit": "",
      "notes": "Step forward and deliver a backhand blow into a powerful palm thrust. Plants a Psycho Mine on hit.; Detonates a Psycho Mine on block or on hit"
    },
    {
      "name": "Backfist Combo (Heavy)",
      "input": "214hp",
      "startup": 22,
      "active": "22-24-35-39",
      "recovery": 26,
      "onBlock": -15,
      "onHit": "",
      "notes": "Step forward and deliver a backhand blow into a powerful palm thrust. Plants a Psycho Mine on hit.; Implants a Psycho Mine into the opponent on hit"
    },
    {
      "name": "[Psycho Mine] Backfist Combo (Heavy)",
      "input": "214hp",
      "startup": 22,
      "active": "22-24-35-39",
      "recovery": 26,
      "onBlock": 6,
      "onHit": "",
      "notes": "Step forward and deliver a backhand blow into a powerful palm thrust. Plants a Psycho Mine on hit.; Detonates a Psycho Mine on block or on hit"
    },
    {
      "name": "Backfist Combo (OD)",
      "input": "214(pp)",
      "startup": 14,
      "active": "14-15-35-37-61-63",
      "recovery": 44,
      "onBlock": -25,
      "onHit": "",
      "notes": "Step forward and deliver a backhand blow into a powerful palm thrust. Plants a Psycho Mine on hit.; Adds a floor bounding effect on the final attack"
    },
    {
      "name": "[Psycho Mine] Backfist Combo (OD)",
      "input": "214(pp)",
      "startup": 14,
      "active": "14-15-35-37-61-63",
      "recovery": 44,
      "onBlock": -3,
      "onHit": "",
      "notes": "Step forward and deliver a backhand blow into a powerful palm thrust. Plants a Psycho Mine on hit.; Detonates a Psycho Mine on block or on hit"
    },
    {
      "name": "Psycho Mine (Self Detonation)",
      "input": "5",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Shadow Rise (Light)",
      "input": "[2]>8lk",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A quick and high-reaching jump. Two different follow-ups can be used from it.; Can transition to Head Press and Devil Reverse (including Overdrive versions) from frames 18-46; Is considered airborne from frame 9"
    },
    {
      "name": "Shadow Rise (Medium)",
      "input": "[2]>8mk",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A quick and high-reaching jump. Two different follow-ups can be used from it.; Can transition to Head Press and Devil Reverse (including Overdrive versions) from frames 18-46; Is considered airborne from frame 9"
    },
    {
      "name": "Shadow Rise (Heavy)",
      "input": "[2]>8hk",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A quick and high-reaching jump. Two different follow-ups can be used from it.; Can transition to Head Press and Devil Reverse (including Overdrive versions) from frames 18-46; Is considered airborne from frame 9"
    },
    {
      "name": "Shadow Rise (OD)",
      "input": "[2]>8(kk)",
      "startup": "",
      "active": "",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A quick and high-reaching jump. Two different follow-ups can be used from it.; Can transition to Overdrive Head Press and Devil\u2019s Reverse from frames 16-42; Invincible to throws from frames 1 - 8; Is considered airborne from frame 9"
    },
    {
      "name": "Head Press",
      "input": "*k",
      "startup": 15,
      "active": "15",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A technique from Shadow Rise that stomps on an opponent below you, and performs another jump if the first hit touches the opponent. Its direction can be controlled after use. It won't consume any additional Drive when used from Overdrive Shadow Rise.; During Shadow Rise; Recovery changes depending on the height of the attack when it hits or is blocked; Can transition to Somersault Skull Diver from frame 23 until landing when this attack hits or is blocked."
    },
    {
      "name": "Head Press (OD)",
      "input": "kk",
      "startup": 15,
      "active": "15",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A technique executed from Shadow Rise that stomps on an opponent. When performed from Overdrive Shadow Rise, it does not consume additional Drive gauge.; During Shadow Rise; Recovery changes depending on the height of the attack when it hits or is blocked; Adds a floor bounding effect during a mid-air hit"
    },
    {
      "name": "Head Press (OD Shadow Rise)",
      "input": "*k",
      "startup": 15,
      "active": "15",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "During Shadow Rise OD; Recovery changes depending on the height of the attack when it hits or is blocked; Adds a floor bounding effect during a mid-air hit"
    },
    {
      "name": "Somersault Skull Diver",
      "input": "*p",
      "startup": 12,
      "active": "12-21",
      "recovery": 29,
      "onBlock": "",
      "onHit": "",
      "notes": "A technique executed from the jump that occurs after Head Press. Will turn towards the enemy when used behind them. Its direction can be controlled back and forth after performing it.; After Head Press"
    },
    {
      "name": "Devil Reverse",
      "input": "*p",
      "startup": 16,
      "active": "16",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A technique that chops at the opponent, executed from Shadow Rise. Its direction can be controlled after use. It won't consume any additional Drive when used from Overdrive Shadow Rise.; During Shadow Rise; Recovery changes depending on the height of the attack when it hits or is blocked"
    },
    {
      "name": "[Psycho Mine] Devil Reverse",
      "input": "*p",
      "startup": 16,
      "active": "16",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "A technique that chops at the opponent, executed from Shadow Rise. Its direction can be controlled after use. It won't consume any additional Drive when used from Overdrive Shadow Rise.; During Shadow Rise; Recovery changes depending on the height of the attack when it hits or is blocked; Detonates a Psycho Mine on block or on hit"
    },
    {
      "name": "Devil Reverse (OD)",
      "input": "pp",
      "startup": 21,
      "active": "21",
      "recovery": "",
      "onBlock": 4,
      "onHit": "",
      "notes": "A technique that chops at the opponent, executed from Shadow Rise. Its direction can be controlled after use. It won't consume any additional Drive when used from Overdrive Shadow Rise.; During Shadow Rise"
    },
    {
      "name": "[Psycho Mine] Devil Reverse (OD)",
      "input": "pp",
      "startup": 21,
      "active": "21",
      "recovery": "",
      "onBlock": 24,
      "onHit": "",
      "notes": "A technique that chops at the opponent, executed from Shadow Rise. Its direction can be controlled after use. It won't consume any additional Drive when used from Overdrive Shadow Rise.; During Shadow Rise; Detonates a Psycho Mine on block or on hit"
    },
    {
      "name": "Devil Reverse (OD Shadow Rise)",
      "input": "*p",
      "startup": 21,
      "active": "21",
      "recovery": "",
      "onBlock": 4,
      "onHit": "",
      "notes": "During Shadow Rise OD; Detonates a Psycho Mine on block or on hit"
    },
    {
      "name": "[Psycho Mine] Devil Reverse (OD Shadow Rise)",
      "input": "*p",
      "startup": 21,
      "active": "21",
      "recovery": "",
      "onBlock": 24,
      "onHit": "",
      "notes": "During Shadow Rise OD; Detonates a Psycho Mine on block or on hit"
    },
    {
      "name": "Knee Press Nightmare",
      "input": "236236*k",
      "startup": 10,
      "active": "10-11-13-15-47-48-50-51",
      "recovery": 62,
      "onBlock": -41,
      "onHit": "",
      "notes": "Take aim at the opponent's legs with a series of crushing blows. Useful as a combo ender, or as a counter attack by making use of its invincibility.; Invincible to strikes and throws between frames 1 - 11; Values do not change when the attack lands as a counter or Punish Counter; The minimum guaranteed damage is 30%"
    },
    {
      "name": "Psycho Punisher",
      "input": "214214*k",
      "startup": 26,
      "active": "26-32",
      "recovery": 52,
      "onBlock": -34,
      "onHit": "",
      "notes": "Launch the opponent into the air with the shockwave from the landing of a powerful jump before following it up with a strong attack. Effective against enemies using projectiles from long range. Its direction can be controlled back and forth after performing it.; Completely invincible on frames 1 - 25; Values do not change when the attack lands as a counter or Punish Counter; The minimum guaranteed damage is 40%"
    },
    {
      "name": "Unlimited Psycho Crusher",
      "input": "236236*p",
      "startup": 10,
      "active": "10-15",
      "recovery": 65,
      "onBlock": -46,
      "onHit": "",
      "notes": "Rush towards the opponent before smashing them into the ground with devastating strength. A versatile move that can counter projectiles, be used in combos, and can turn the tables when under pressure.; When under 25% vitality; Completely invincible between frames 1 - 15; The minimum guaranteed damage is 50%; Values do not change when the attack lands as a counter or Punish Counter; * Can only be canceled into from special moves"
    },
    {
      "name": "Unlimitted Psycho Crusher (Critical Art)",
      "input": "236236*p",
      "startup": 10,
      "active": "10-15",
      "recovery": 65,
      "onBlock": -46,
      "onHit": "",
      "notes": "Completely invincible between frames 1 - 15; The minimum guaranteed damage is 50%; Values do not change when the attack lands as a counter or Punish Counter; * Can only be canceled into from special moves"
    },
    {
      "name": "Deadly Throw",
      "input": "(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Death Tower",
      "input": "(4lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "When near opponent; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    }
  ],
  "terry": [
    {
      "name": "Standing Light Punch",
      "input": "5lp",
      "startup": 4,
      "active": "4-6",
      "recovery": 7,
      "onBlock": -1,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Standing Medium Punch",
      "input": "5mp",
      "startup": 7,
      "active": "7-9",
      "recovery": 16,
      "onBlock": -3,
      "onHit": 1,
      "notes": ""
    },
    {
      "name": "Standing Heavy Punch",
      "input": "5hp",
      "startup": 9,
      "active": "9-12",
      "recovery": 18,
      "onBlock": -1,
      "onHit": 2,
      "notes": ""
    },
    {
      "name": "Standing Light Kick",
      "input": "5lk",
      "startup": 5,
      "active": "5-6",
      "recovery": 12,
      "onBlock": -2,
      "onHit": 2,
      "notes": ""
    },
    {
      "name": "Standing Medium Kick",
      "input": "5mk",
      "startup": 9,
      "active": "9-11",
      "recovery": 18,
      "onBlock": -2,
      "onHit": 5,
      "notes": ""
    },
    {
      "name": "Standing Heavy Kick",
      "input": "5hk",
      "startup": 12,
      "active": "12-15",
      "recovery": 21,
      "onBlock": -4,
      "onHit": 1,
      "notes": "Produces a crumple stun on Punish Counter, and +16 frame advantage"
    },
    {
      "name": "Crouching Light Punch",
      "input": "2lp",
      "startup": 4,
      "active": "4-6",
      "recovery": 8,
      "onBlock": -1,
      "onHit": 4,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Punch",
      "input": "2mp",
      "startup": 6,
      "active": "6-9",
      "recovery": 14,
      "onBlock": -1,
      "onHit": 5,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Punch",
      "input": "2hp",
      "startup": 8,
      "active": "8-13",
      "recovery": 22,
      "onBlock": -4,
      "onHit": 1,
      "notes": "Forces the opponent into a standing position; 3 frames of recovery added on hit or when blocked"
    },
    {
      "name": "Crouching Light Kick",
      "input": "2lk",
      "startup": 5,
      "active": "5-6",
      "recovery": 11,
      "onBlock": -3,
      "onHit": 3,
      "notes": "Can be rapid canceled"
    },
    {
      "name": "Crouching Medium Kick",
      "input": "2mk",
      "startup": 8,
      "active": "8-10",
      "recovery": 19,
      "onBlock": -6,
      "onHit": -2,
      "notes": ""
    },
    {
      "name": "Crouching Heavy Kick",
      "input": "2hk",
      "startup": 11,
      "active": "11-13",
      "recovery": 23,
      "onBlock": -11,
      "onHit": "",
      "notes": "Knockdown time extended when attack lands as a counter or Punish Counter"
    },
    {
      "name": "Jumping Light Punch",
      "input": "j>lp",
      "startup": 4,
      "active": "4-10",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Punch",
      "input": "j>mp",
      "startup": 7,
      "active": "7-12",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Has cross-up attack properties"
    },
    {
      "name": "Jumping Heavy Punch",
      "input": "j>hp",
      "startup": 9,
      "active": "9-14",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a slam knockdown on counter or Punish Counter when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Light Kick",
      "input": "j>lk",
      "startup": 5,
      "active": "5-11",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Jumping Medium Kick",
      "input": "j>mk",
      "startup": 7,
      "active": "7-10",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": "Forces a juggle state when hitting a mid-air opponent"
    },
    {
      "name": "Jumping Heavy Kick",
      "input": "j>hk",
      "startup": 10,
      "active": "10-16",
      "recovery": "",
      "onBlock": "",
      "onHit": "",
      "notes": ""
    },
    {
      "name": "Hammer Punch",
      "input": "6hp",
      "startup": 22,
      "active": "22-24",
      "recovery": 19,
      "onBlock": -2,
      "onHit": 2,
      "notes": "An overhead attack that cannot be blocked while crouching."
    },
    {
      "name": "Power Drive",
      "input": "5mp>5hp",
      "startup": 16,
      "active": "16-18",
      "recovery": 22,
      "onBlock": -5,
      "onHit": "",
      "notes": "A combination attack that's quick and doesn't leave you open for long even if it's blocked."
    },
    {
      "name": "Power Shoot",
      "input": "5mp>5hk",
      "startup": 18,
      "active": "18-20",
      "recovery": 31,
      "onBlock": -14,
      "onHit": "",
      "notes": "A counter followed by a sequence of attacks."
    },
    {
      "name": "Power Dunk",
      "input": "5mp>5hk>5hk",
      "startup": 18,
      "active": "18-20-42-47",
      "recovery": 33,
      "onBlock": "",
      "onHit": "",
      "notes": "A highly damaging transition attack from Power Shoot."
    },
    {
      "name": "Passing Sway",
      "input": "5mp>5mk",
      "startup": 13,
      "active": "13-14",
      "recovery": 27,
      "onBlock": -12,
      "onHit": -3,
      "notes": "A combination attack that can transition into two possible variations.; Fully invincible from frames 20 - 40 on hit only"
    },
    {
      "name": "Jumping Lariat",
      "input": "5mp",
      "startup": 24,
      "active": "24-25",
      "recovery": 18,
      "onBlock": 3,
      "onHit": 4,
      "notes": "An attack from Passing Sway that hits the opponent from the front. Hold forward to increase the distance you move forward.; Completely invincible between frames 1 - 25; Considered airborne from frames 14 - 25"
    },
    {
      "name": "Jumping Knee",
      "input": "5mk",
      "startup": 24,
      "active": "24-25",
      "recovery": 20,
      "onBlock": -2,
      "onHit": 3,
      "notes": "An attack from Passing Sway that hits the opponent from behind. Hold forward to increase the distance you move.; Completely invincible between frames 1 - 25; Considered airborne from frames 16 - 25"
    },
    {
      "name": "Fire Kick",
      "input": "2mk>2hk",
      "startup": 13,
      "active": "13-14",
      "recovery": 28,
      "onBlock": -16,
      "onHit": "",
      "notes": "A combination attack that can be canceled into a special move."
    },
    {
      "name": "Power Wave (Light)",
      "input": "236lp",
      "startup": 14,
      "active": "",
      "recovery": "",
      "onBlock": -9,
      "onHit": -3,
      "notes": "Smash the ground with your fist and let loose a wave of energy across the ground. Useful for checking an opponent from a distance, and as a stopgap in combos."
    },
    {
      "name": "Power Wave (Medium)",
      "input": "236mp",
      "startup": 16,
      "active": "",
      "recovery": "",
      "onBlock": -6,
      "onHit": 0,
      "notes": "Smash the ground with your fist and let loose a wave of energy across the ground. Useful for checking an opponent from a distance, and as a stopgap in combos."
    },
    {
      "name": "Round Wave",
      "input": "236hp",
      "startup": 29,
      "active": "",
      "recovery": "",
      "onBlock": 5,
      "onHit": 8,
      "notes": "Smash the ground with your fist and let loose a blast of energy in front of you. Easy to use up close, and allows you to act before an opponent even if blocked."
    },
    {
      "name": "Power Wave (OD)",
      "input": "236(pp)",
      "startup": 15,
      "active": "",
      "recovery": "",
      "onBlock": -2,
      "onHit": 2,
      "notes": "Smash the ground with your fist and let loose a blast of energy in front of you. Easy to use up close, and allows you to act before an opponent even if blocked."
    },
    {
      "name": "Quick Burn",
      "input": "214lp",
      "startup": 10,
      "active": "10-11-22-23",
      "recovery": 23,
      "onBlock": -5,
      "onHit": 2,
      "notes": "Reels off an energy cloaked hook before coming down with a downward punch. The second attack is an overhead that can't be blocked while crouching, making it good for breaking through defenses."
    },
    {
      "name": "Quick Burn (OD)",
      "input": "214(lpmp)",
      "startup": 10,
      "active": "10-11-22-23",
      "recovery": 23,
      "onBlock": -5,
      "onHit": "",
      "notes": "Reels off an energy cloaked hook before coming down with a downward punch. The second attack is an overhead that can't be blocked while crouching, making it good for breaking through defenses."
    },
    {
      "name": "Burning Knuckle (Medium)",
      "input": "214mp",
      "startup": 14,
      "active": "14-22",
      "recovery": 20,
      "onBlock": -6,
      "onHit": "",
      "notes": "Rush forward with a thrusting punch cloaked with energy. Useful as a surprise attack to close the distance between you and your opponent."
    },
    {
      "name": "Burning Knuckle (Heavy)",
      "input": "214hp",
      "startup": 23,
      "active": "23-36",
      "recovery": 17,
      "onBlock": -8,
      "onHit": "",
      "notes": "Rush forward with a thrusting punch cloaked with energy. Useful as a surprise attack to close the distance between you and your opponent."
    },
    {
      "name": "Burning Knuckle (OD)",
      "input": "214(pp)",
      "startup": 19,
      "active": "19-32",
      "recovery": 17,
      "onBlock": -8,
      "onHit": "",
      "notes": "Rush forward with a thrusting punch cloaked with energy. Useful as a surprise attack to close the distance between you and your opponent.; Juggle state time is extended when attack lands as a Punish Counter."
    },
    {
      "name": "Power Charge (Light)",
      "input": "236lk",
      "startup": 14,
      "active": "14-18",
      "recovery": 24,
      "onBlock": -9,
      "onHit": 3,
      "notes": "A quick, forward rushing bodycheck. Useful in a combo when canceling from normal attacks. The heavy version can be canceled into another special move on hit."
    },
    {
      "name": "Power Charge (Medium)",
      "input": "236mk",
      "startup": 20,
      "active": "20-25",
      "recovery": 23,
      "onBlock": -11,
      "onHit": "",
      "notes": "A quick, forward rushing bodycheck. Useful in a combo when canceling from normal attacks. The heavy version can be canceled into another special move on hit."
    },
    {
      "name": "Power Charge (Heavy)",
      "input": "236hk",
      "startup": 25,
      "active": "25-33",
      "recovery": 27,
      "onBlock": -16,
      "onHit": "",
      "notes": "A quick, forward rushing bodycheck. Useful in a combo when canceling from normal attacks. The heavy version can be canceled into another special move on hit.; Changes to juggle state on mid-air hit; Can cancel into other special moves except Power Charge only on hit"
    },
    {
      "name": "Power Charge (OD)",
      "input": "236(kk)",
      "startup": 19,
      "active": "19-26",
      "recovery": 24,
      "onBlock": -14,
      "onHit": "",
      "notes": "A quick, forward rushing bodycheck. Useful in a combo when canceling from normal attacks. The heavy version can be canceled into another special move on hit."
    },
    {
      "name": "Crack Shoot (Light)",
      "input": "214lk",
      "startup": 16,
      "active": "16-19",
      "recovery": 18,
      "onBlock": -3,
      "onHit": 1,
      "notes": "A quick, falling axe kick. It is very quick, making it easy to use in combos or as a way of checking your opponent.; Considered airborne from frames 7 - 23"
    },
    {
      "name": "Crack Shoot (Medium)",
      "input": "214mk",
      "startup": 17,
      "active": "17-23",
      "recovery": 18,
      "onBlock": -3,
      "onHit": 1,
      "notes": "A quick, falling axe kick. It is very quick, making it easy to use in combos or as a way of checking your opponent.; Considered airborne from frames 9 - 25"
    },
    {
      "name": "Crack Shoot (Heavy)",
      "input": "214hk",
      "startup": 23,
      "active": "23-33",
      "recovery": 19,
      "onBlock": -1,
      "onHit": "",
      "notes": "A quick, falling axe kick. It is very quick, making it easy to use in combos or as a way of checking your opponent.; Considered airborne from frames 12 - 34"
    },
    {
      "name": "Crack Shoot (OD)",
      "input": "214(kk)",
      "startup": 20,
      "active": "20-23",
      "recovery": 19,
      "onBlock": -2,
      "onHit": "",
      "notes": "A quick, falling axe kick. It is very quick, making it easy to use in combos or as a way of checking your opponent.; Considered airborne from frames 8 - 25; Produces a floor bound during a mid-air hit"
    },
    {
      "name": "Rising Tackle (Light)",
      "input": "623lp",
      "startup": 5,
      "active": "5-14",
      "recovery": 21,
      "onBlock": -25,
      "onHit": "",
      "notes": "A rising, rotating attack. It grants immunity to jumping attacks, making it useful as an anti-air technique.; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 14; Considered airborne from frames 6 - 35"
    },
    {
      "name": "Rising Tackle (Medium)",
      "input": "623mp",
      "startup": 6,
      "active": "6-15",
      "recovery": 28,
      "onBlock": -26,
      "onHit": "",
      "notes": "A rising, rotating attack. It grants immunity to jumping attacks, making it useful as an anti-air technique.; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 10; Considered airborne from frames 8 - 43"
    },
    {
      "name": "Rising Tackle (Heavy)",
      "input": "623hp",
      "startup": 7,
      "active": "7-26",
      "recovery": 27,
      "onBlock": -36,
      "onHit": "",
      "notes": "A rising, rotating attack. It grants immunity to jumping attacks, making it useful as an anti-air technique.; Invincible against projectiles and strikes with mid-air hitboxes from frames 1 - 8; Considered airborne from frames 8 - 53"
    },
    {
      "name": "Rising Tackle (OD)",
      "input": "623(pp)",
      "startup": 6,
      "active": "6-20",
      "recovery": 34,
      "onBlock": -42,
      "onHit": "",
      "notes": "A rising, rotating attack. It grants immunity to jumping attacks, making it useful as an anti-air technique.; Completely invincible between frames 1 - 10; Considered airborne from frames 7 - 54"
    },
    {
      "name": "Buster Wolf",
      "input": "236236*k",
      "startup": 7,
      "active": "7-18",
      "recovery": 60,
      "onBlock": -26,
      "onHit": "",
      "notes": "Charge forward with a piercing thrust, before firing a burst of energy. Its swift speed and invincibility can quickly turn the tables on an opponent.; Invincible to strikes and throws between frames 1 - 8; Values do not change when the attack lands as a counter or Punish Counter; The minimum guaranteed damage is 30%"
    },
    {
      "name": "Power Geyser",
      "input": "214214*p",
      "startup": 13,
      "active": "13-25",
      "recovery": 54,
      "onBlock": -27,
      "onHit": "",
      "notes": "Unleash a volcanic explosion of energy forward. If the attack hits, input a command to transition to Twin Geyser.; Can transition to Twin Geyser between frames 25 - 38 on hit only; Completely invincible on frames 1 - 17; Invincible against projectiles and strikes with mid-air hitboxes from frames 18 - 25; Values do not change when the attack lands as a counter or Punish Counter; The minimum guaranteed damage is 40%"
    },
    {
      "name": "Twin Geyser",
      "input": "pp",
      "startup": 22,
      "active": "22-27",
      "recovery": 43,
      "onBlock": "",
      "onHit": "",
      "notes": "Performs another volcanic explosion of energy after the initial Power Geyser. Input a command to transition to Triple Geyser.; Can transition to Triple Geyser or Triple Geyser (Dud) between frames 38 - 42 on hit only; The minimum guaranteed damage is 40%"
    },
    {
      "name": "Triple Geyser",
      "input": "pp",
      "startup": 14,
      "active": "14-14",
      "recovery": 125,
      "onBlock": "",
      "onHit": "",
      "notes": "Performs a meteoric explosion of energy after Twin Geyser. Useful for when you want to maximize your damage output.; Completely invincible between frames 1 - 139; The minimum guaranteed damage is 40%"
    },
    {
      "name": "Rising Fang",
      "input": "236236*p",
      "startup": 8,
      "active": "8-34",
      "recovery": 57,
      "onBlock": -50,
      "onHit": "",
      "notes": "Launches the opponent into the air, then smashes them with a fist cloaked in energy. It has invincibility at the beginning, making it useful as an anti-air attack or as a way to turn the tables on your opponent.; When under 25% vitality; Completely invincible between frames 1 - 16; The minimum guaranteed damage is 50%; Values do not change when the attack lands as a counter or Punish Counter; * Can only be canceled into from special moves"
    },
    {
      "name": "Rising Fang (Critical Art)",
      "input": "236236*p",
      "startup": 8,
      "active": "8-34",
      "recovery": 57,
      "onBlock": -50,
      "onHit": "",
      "notes": "Launches the opponent into the air, then smashes them with a fist cloaked in energy. It has invincibility at the beginning, making it useful as an anti-air attack or as a way to turn the tables on your opponent.; Completely invincible between frames 1 - 16; The minimum guaranteed damage is 50%; Values do not change when the attack lands as a counter or Punish Counter; * Can only be canceled into from special moves"
    },
    {
      "name": "Grasping Upper",
      "input": "(lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "Grab and knee the opponent in the gut before throwing them forward. Throws your opponent without switching places with them.; When near opponent; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    },
    {
      "name": "Buster Throw",
      "input": "(2lplk)",
      "startup": 5,
      "active": "5-7",
      "recovery": 23,
      "onBlock": "",
      "onHit": "",
      "notes": "Grab your opponent and toss them behind you, placing their weight on your arm and shoulder. Throws your opponent while switching places with them.; When near opponent; Properties change to the following when the attack lands as a Punish Counter:; - Deals 2040 damage; - Super Art gauge increases by 4000; - Forces a hard knockdown"
    }
  ]
};
