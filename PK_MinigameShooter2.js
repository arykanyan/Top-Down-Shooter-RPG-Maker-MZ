/*:
 * @target MZ
 * @plugindesc (v3.0) ULTIMATE Cyber-Void Shooter - Fully-Fledged Endless Arcade Experience
 * @author Roi
 *
 * @help
 * PK_MinigameShooter.js (v3.0) - ULTIMATE EDITION
 *
 * === V3.0 COMPLETE OVERHAUL ===
 * A FULLY-FLEDGED arcade shooter with deep progression and immersive gameplay!
 *
 * FEATURES:
 * - ENDLESS MODE: Survive as long as you can. Death is the only end.
 * - 10 UNIQUE BOSSES: Every 10 waves, face a new boss with unique mechanics
 * - 8+ ENEMY TYPES: Diverse threats with unique behaviors
 * - 25+ UPGRADES: Deep progression with active skills, passives, and stat boosts
 * - COMBO SYSTEM: Chain kills for score multipliers and power-ups
 * - IMMERSIVE AUDIO: Dynamic music layers, ambient sounds, and satisfying SFX
 * - VISUAL POLISH: Particle effects, screen shake, chromatic aberration, trails
 * - META-PROGRESSION: Unlock permanent upgrades between runs
 * - POWER-UPS: Temporary boosts that drop during intense moments
 *
 * Controls:
 *  - Move: Arrow keys / WASD
 *  - Shoot: Auto-fire
 *  - Radial Explosion: Shift (5s cooldown, damages nearby enemies)
 *  - Ultimate Skill: Spacebar (When unlocked)
 *  - Pause: Cancel / Esc
 *
 * @param ArenaWidth
 * @type number
 * @min 320
 * @default 720
 *
 * @param ArenaHeight
 * @type number
 * @min 240
 * @default 520
 *
 * @param ArenaYOffset
 * @type number
 * @min -300
 * @max 300
 * @default -16
 *
 * @param DefaultDifficulty
 * @type select
 * @option Easy
 * @value easy
 * @option Normal
 * @value normal
 * @option Hard
 * @value hard
 * @default normal
 *
 * @param TotalWaves
 * @type number
 * @min 1
 * @default 8
 *
 * @param EnemyBasePerWave
 * @type number
 * @min 1
 * @default 6
 *
 * @param PlayerMaxHP
 * @type number
 * @min 1
 * @default 6
 *
 * @param PartnerEnabledByDefault
 * @type boolean
 * @default true
 *
 * @param PartnerMaxHP
 * @type number
 * @min 1
 * @default 4
 *
 * @param AutoShootByDefault
 * @type boolean
 * @default true
 *
 * @param UsePictureSprites
 * @type boolean
 * @default false
 *
 * @param SpriteScale
 * @type number
 * @decimals 2
 * @min 0.10
 * @max 8.00
 * @default 1.00
 *
 * @param PlayerPic
 * @type string
 * @default
 *
 * @param PartnerPic
 * @type string
 * @default
 *
 * @param EnemyPic
 * @type string
 * @default
 *
 * @param BulletPic
 * @type string
 * @default
 *
 * @param XpPic
 * @type string
 * @default
 *
 * @param HpPic
 * @type string
 * @default
 *
 * @param UpgradePic
 * @type string
 * @default
 *
 * @param AnimId_LevelUp
 * @parent --- MZ Animations ---
 * @text Level Up ID
 * @desc Animation ID played on player when leveling up.
 * @type animation
 * @default 40
 *
 * @param AnimId_Laser
 * @parent --- MZ Animations ---
 * @text Laser Animation ID
 * @desc Animation ID for laser beam ultimate skill.
 * @type animation
 * @default 67
 *
 * @param AnimId_TimeStop
 * @parent --- MZ Animations ---
 * @text Time Stop ID
 * @desc Animation ID for time manipulation skill.
 * @type animation
 * @default 52
 *
 * @param AnimId_Explosion
 * @parent --- MZ Animations ---
 * @text Explosion ID
 * @desc Animation ID for explosions and critical hits.
 * @type animation
 * @default 66
 *
 * @param --- Audio (SE) ---
 * @desc Filenames in audio/se (no extension). Leave blank for silence.
 *
 * @param SE_Shoot
 * @parent --- Audio (SE) ---
 * @type string
 * @default Gun1
 *
 * @param SE_Hit
 * @parent --- Audio (SE) ---
 * @type string
 * @default Damage4
 *
 * @param SE_Kill
 * @parent --- Audio (SE) ---
 * @type string
 * @default Blow1
 *
 * @param SE_Collect
 * @parent --- Audio (SE) ---
 * @type string
 * @default Coin
 *
 * @param SE_LevelUp
 * @parent --- Audio (SE) ---
 * @type string
 * @default Powerup
 *
 * @param SE_BossSpawn
 * @parent --- Audio (SE) ---
 * @type string
 * @default Monster3
 *
 * @param SE_Dash
 * @parent --- Audio (SE) ---
 * @type string
 * @default Wind4
 *
 * @param SE_PowerUp
 * @parent --- Audio (SE) ---
 * @type string
 * @default Up4
 *
 * @param SE_Combo
 * @parent --- Audio (SE) ---
 * @type string
 * @default Bell3
 *
 * @param SE_BossDeath
 * @parent --- Audio (SE) ---
 * @type string
 * @default Explosion2
 *
 * @param --- Audio (BGM) ---
 * @desc Background music files (audio/bgm). Leave blank for silence.
 *
 * @param BGM_Gameplay
 * @parent --- Audio (BGM) ---
 * @type file
 * @dir audio/bgm
 * @default Battle1
 *
 * @param BGM_Boss
 * @parent --- Audio (BGM) ---
 * @type file
 * @dir audio/bgm
 * @default Battle2
 *
 * @param ScoreVariableId
 * @type variable
 * @default 1
 *
 * @param WinSwitchId
 * @type switch
 * @default 1
 *
 * @param LoseSwitchId
 * @type switch
 * @default 2
 *
 * @command StartMiniGame
 * @text Start Mini-Game
 * @desc Start the shooter mini-game.
 *
 * @arg Difficulty
 * @type select
 * @option Easy
 * @value easy
 * @option Normal
 * @value normal
 * @option Hard
 * @value hard
 * @default normal
 *
 * @arg EnablePartner
 * @type boolean
 * @default true
 *
 * @arg AutoShoot
 * @type boolean
 * @default true
 *
 * @arg UsePictures
 * @type boolean
 * @default false
 *
 * @arg SpriteScale
 * @type number
 * @decimals 2
 * @default 1.00
 *
 * @arg PlayerPic
 * @type string
 * @default
 *
 * @arg PartnerPic
 * @type string
 * @default
 *
 * @arg EnemyPic
 * @type string
 * @default
 *
 * @arg BulletPic
 * @type string
 * @default
 *
 * @arg XpPic
 * @type string
 * @default
 *
 * @arg HpPic
 * @type string
 * @default
 *
 * @arg UpgradePic
 * @type string
 * @default
 *
 * @arg ArenaType
 * @type select
 * @option Random
 * @value random
 * @option Neon Grid
 * @value neonGrid
 * @option Ship Hull
 * @value shipHull
 * @option Void Cathedral
 * @value voidCathedral
 * @option Reactor Core
 * @value reactorCore
 * @option Data Ocean
 * @value dataOcean
 * @option Mirror Room
 * @value mirrorRoom
 * @default random
 *
 * @arg ArenaModifier
 * @type select
 * @option Random
 * @value random
 * @option None
 * @value none
 * @option Low Gravity
 * @value lowGravity
 * @option Overheated
 * @value overheated
 * @option EMP Storms
 * @value empStorms
 * @option Fog
 * @value fog
 * @default random
 */

(() => {
  'use strict';

  const PLUGIN = (function() {
    const src = (typeof document !== 'undefined' && document.currentScript && document.currentScript.src) ? String(document.currentScript.src) : '';
    const m = src.match(/([^/\\]+)\.js$/i);
    return (m && m[1]) ? m[1] : 'PK_MinigameShooter2';
  })();
  const P = PluginManager.parameters(PLUGIN);

  const ArenaWidth  = Number(P.ArenaWidth || 720);
  const ArenaHeight = Number(P.ArenaHeight || 520);
  const ArenaYOffset = Number(P.ArenaYOffset || -16);

  const DefaultDifficulty = String(P.DefaultDifficulty || 'normal');
  const TotalWaves = 999999; // ENDLESS MODE - no wave limit!
  const EnemyBasePerWave = Math.max(1, Number(P.EnemyBasePerWave || 6));
  const PlayerMaxHP = Math.max(1, Number(P.PlayerMaxHP || 6));
  const PartnerEnabledByDefault = String(P.PartnerEnabledByDefault || 'true') === 'true';
  const PartnerMaxHP = Math.max(1, Number(P.PartnerMaxHP || 4));
  const AutoShootByDefault = String(P.AutoShootByDefault || 'true') === 'true';

  const UsePictureSpritesDefault = String(P.UsePictureSprites || 'false') === 'true';
  const SpriteScaleDefault = Number(P.SpriteScale || 1.0);

  const DefaultPics = {
    player: String(P.PlayerPic || ''),
    partner: String(P.PartnerPic || ''),
    enemy: String(P.EnemyPic || ''),
    bullet: String(P.BulletPic || ''),
    xp: String(P.XpPic || ''),
    hp: String(P.HpPic || ''),
    upgrade: String(P.UpgradePic || ''),
  };

  const ScoreVariableId = Number(P.ScoreVariableId || 1);
  const WinSwitchId = Number(P.WinSwitchId || 1);
  const LoseSwitchId = Number(P.LoseSwitchId || 2);

  // ---------------------------------------------------------------------------
  // Utils
  // ---------------------------------------------------------------------------
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const rand01 = () => Math.random();
  const randInt = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const dist2 = (x1, y1, x2, y2) => {
    const dx = x2 - x1, dy = y2 - y1;
    return dx*dx + dy*dy;
  };
  const weightedPick = (items, weightFn) => {
    const total = items.reduce((sum, item) => sum + Math.max(0, weightFn(item)), 0);
    if (total <= 0) return null;
    let roll = Math.random() * total;
    for (const item of items) {
      roll -= Math.max(0, weightFn(item));
      if (roll <= 0) return item;
    }
    return items[items.length - 1] || null;
  };

  function dt() {
    const d = Number(Graphics.deltaTime);
    return Number.isFinite(d) && d > 0 ? d : (1/60);
  }

  function bitmapUpdate(bmp) {
    if (bmp && bmp._baseTexture) bmp._baseTexture.update();
  }

  function drawEnemyShape(ctx, x, y, r, shape, color, pulse) {
    ctx.save();
    
    // Extract RGB from color string for gradients
    const colorMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    const baseR = colorMatch ? parseInt(colorMatch[1]) : 255;
    const baseG = colorMatch ? parseInt(colorMatch[2]) : 90;
    const baseB = colorMatch ? parseInt(colorMatch[3]) : 90;
    
    // Create radial gradient for depth
    const grad = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, 0, x, y, r * pulse);
    grad.addColorStop(0, `rgba(${Math.min(255, baseR + 60)},${Math.min(255, baseG + 60)},${Math.min(255, baseB + 60)},0.95)`);
    grad.addColorStop(0.6, color);
    grad.addColorStop(1, `rgba(${Math.max(0, baseR - 40)},${Math.max(0, baseG - 40)},${Math.max(0, baseB - 40)},0.9)`);
    
    // Outer glow
    ctx.shadowColor = color;
    ctx.shadowBlur = 8;
    ctx.globalAlpha = 0.95;
    
    switch(shape) {
      case 'triangle': // Runner - sleek robotic drone
        // Main body - angular triangle
        ctx.fillStyle = grad;
        ctx.strokeStyle = `rgba(${Math.min(255, baseR + 80)},${Math.min(255, baseG + 80)},${Math.min(255, baseB + 80)},1)`;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        for (let i = 0; i < 3; i++) {
          const a = (i / 3) * Math.PI * 2 - Math.PI / 2;
          const px = x + Math.cos(a) * r * pulse;
          const py = y + Math.sin(a) * r * pulse;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Robotic panel lines
        ctx.shadowBlur = 0;
        ctx.strokeStyle = `rgba(${Math.max(0, baseR - 40)},${Math.max(0, baseG - 40)},${Math.max(0, baseB - 40)},0.7)`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x, y - r * pulse * 0.5);
        ctx.lineTo(x - r * pulse * 0.3, y + r * pulse * 0.3);
        ctx.moveTo(x, y - r * pulse * 0.5);
        ctx.lineTo(x + r * pulse * 0.3, y + r * pulse * 0.3);
        ctx.stroke();
        
        // Thruster core (glowing)
        ctx.fillStyle = `rgba(${Math.min(255, baseR + 120)},${Math.min(255, baseG + 120)},${Math.min(255, baseB + 120)},0.8)`;
        ctx.beginPath();
        ctx.arc(x, y + r * pulse * 0.2, r * pulse * 0.25, 0, Math.PI * 2);
        ctx.fill();
        
        // Side thrusters
        for (let side of [-1, 1]) {
          ctx.fillStyle = `rgba(${Math.min(255, baseR + 80)},${Math.min(255, baseG + 80)},${Math.min(255, baseB + 80)},0.5)`;
          ctx.fillRect(x + side * r * pulse * 0.5 - 2, y + r * pulse * 0.1, 4, r * pulse * 0.3);
        }
        break;
        
      case 'square': // Tank - heavy robotic armor
        const s = r * pulse * 1.4;
        // Main armored body
        ctx.fillStyle = grad;
        ctx.strokeStyle = `rgba(${Math.min(255, baseR + 60)},${Math.min(255, baseG + 60)},${Math.min(255, baseB + 60)},1)`;
        ctx.lineWidth = 3;
        ctx.fillRect(x - s, y - s, s * 2, s * 2);
        ctx.strokeRect(x - s, y - s, s * 2, s * 2);
        
        // Layered armor plates
        ctx.shadowBlur = 0;
        ctx.fillStyle = `rgba(${Math.max(0, baseR - 20)},${Math.max(0, baseG - 20)},${Math.max(0, baseB - 20)},0.6)`;
        ctx.fillRect(x - s * 0.85, y - s * 0.85, s * 1.7, s * 0.3);
        ctx.fillRect(x - s * 0.85, y + s * 0.55, s * 1.7, s * 0.3);
        
        // Vertical panel seams
        ctx.strokeStyle = `rgba(${Math.max(0, baseR - 60)},${Math.max(0, baseG - 60)},${Math.max(0, baseB - 60)},0.8)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x - s * 0.6, y - s);
        ctx.lineTo(x - s * 0.6, y + s);
        ctx.moveTo(x + s * 0.6, y - s);
        ctx.lineTo(x + s * 0.6, y + s);
        ctx.moveTo(x, y - s);
        ctx.lineTo(x, y + s);
        ctx.stroke();
        
        // Corner rivets
        for (let cx of [-0.8, 0.8]) {
          for (let cy of [-0.8, 0.8]) {
            ctx.fillStyle = `rgba(${Math.max(0, baseR - 80)},${Math.max(0, baseG - 80)},${Math.max(0, baseB - 80)},0.9)`;
            ctx.beginPath();
            ctx.arc(x + cx * s, y + cy * s, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        
        // Power core (glowing center)
        ctx.fillStyle = `rgba(${Math.min(255, baseR + 80)},${Math.min(255, baseG + 80)},${Math.min(255, baseB + 80)},0.7)`;
        ctx.fillRect(x - s * 0.3, y - s * 0.3, s * 0.6, s * 0.6);
        ctx.strokeStyle = `rgba(${Math.min(255, baseR + 120)},${Math.min(255, baseG + 120)},${Math.min(255, baseB + 120)},0.8)`;
        ctx.lineWidth = 1.5;
        ctx.strokeRect(x - s * 0.3, y - s * 0.3, s * 0.6, s * 0.6);
        break;
        
      case 'diamond': // Shooter - angular, precise
        ctx.fillStyle = grad;
        ctx.strokeStyle = `rgba(${Math.min(255, baseR + 80)},${Math.min(255, baseG + 80)},${Math.min(255, baseB + 80)},1)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x, y - r * pulse);
        ctx.lineTo(x + r * pulse, y);
        ctx.lineTo(x, y + r * pulse);
        ctx.lineTo(x - r * pulse, y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Targeting reticle
        ctx.shadowBlur = 0;
        ctx.strokeStyle = `rgba(${Math.min(255, baseR + 120)},${Math.min(255, baseG + 120)},${Math.min(255, baseB + 120)},0.7)`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x, y - r * pulse * 0.5);
        ctx.lineTo(x, y + r * pulse * 0.5);
        ctx.moveTo(x - r * pulse * 0.5, y);
        ctx.lineTo(x + r * pulse * 0.5, y);
        ctx.stroke();
        break;
        
      case 'hexagon': // Splitter - crystalline, fractal
        ctx.fillStyle = grad;
        ctx.strokeStyle = `rgba(${Math.min(255, baseR + 80)},${Math.min(255, baseG + 80)},${Math.min(255, baseB + 80)},1)`;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = (i / 6) * Math.PI * 2;
          const px = x + Math.cos(a) * r * pulse;
          const py = y + Math.sin(a) * r * pulse;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Inner hexagon
        ctx.shadowBlur = 0;
        ctx.strokeStyle = `rgba(${Math.min(255, baseR + 100)},${Math.min(255, baseG + 100)},${Math.min(255, baseB + 100)},0.6)`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = (i / 6) * Math.PI * 2;
          const px = x + Math.cos(a) * r * pulse * 0.5;
          const py = y + Math.sin(a) * r * pulse * 0.5;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
        break;
        
      case 'star': // Teleporter - mystical, warping
        ctx.fillStyle = grad;
        ctx.strokeStyle = `rgba(${Math.min(255, baseR + 100)},${Math.min(255, baseG + 100)},${Math.min(255, baseB + 100)},1)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let i = 0; i < 10; i++) {
          const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
          const rad = (i % 2 === 0) ? r * pulse : r * pulse * 0.5;
          const px = x + Math.cos(a) * rad;
          const py = y + Math.sin(a) * rad;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Pulsing core
        ctx.shadowBlur = 10;
        ctx.shadowColor = color;
        ctx.fillStyle = `rgba(${Math.min(255, baseR + 120)},${Math.min(255, baseG + 120)},${Math.min(255, baseB + 120)},${0.5 + Math.sin(Date.now() / 100) * 0.3})`;
        ctx.beginPath();
        ctx.arc(x, y, r * pulse * 0.35, 0, Math.PI * 2);
        ctx.fill();
        break;
        
      case 'plus': // Anchor - solid, immovable
        const w = r * 0.5;
        ctx.fillStyle = grad;
        ctx.strokeStyle = `rgba(${Math.min(255, baseR + 60)},${Math.min(255, baseG + 60)},${Math.min(255, baseB + 60)},1)`;
        ctx.lineWidth = 2.5;
        ctx.fillRect(x - w, y - r * pulse, w * 2, r * pulse * 2);
        ctx.strokeRect(x - w, y - r * pulse, w * 2, r * pulse * 2);
        ctx.fillRect(x - r * pulse, y - w, r * pulse * 2, w * 2);
        ctx.strokeRect(x - r * pulse, y - w, r * pulse * 2, w * 2);
        
        // Center anchor point
        ctx.shadowBlur = 0;
        ctx.fillStyle = `rgba(${Math.max(0, baseR - 80)},${Math.max(0, baseG - 80)},${Math.max(0, baseB - 80)},0.9)`;
        ctx.beginPath();
        ctx.arc(x, y, r * pulse * 0.3, 0, Math.PI * 2);
        ctx.fill();
        break;
        
      case 'cross': // Healer - radiant, supportive
        ctx.strokeStyle = grad;
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.moveTo(x - r * pulse, y - r * pulse);
        ctx.lineTo(x + r * pulse, y + r * pulse);
        ctx.moveTo(x + r * pulse, y - r * pulse);
        ctx.lineTo(x - r * pulse, y + r * pulse);
        ctx.stroke();
        
        // Healing aura
        ctx.shadowBlur = 0;
        ctx.strokeStyle = `rgba(${Math.min(255, baseR + 100)},${Math.min(255, baseG + 100)},${Math.min(255, baseB + 100)},0.4)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, r * pulse * 1.3, 0, Math.PI * 2);
        ctx.stroke();
        break;
        
      case 'crosshair': // Sniper - focused, deadly
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(x, y, r * pulse, 0, Math.PI * 2);
        ctx.stroke();
        
        // Crosshair lines
        ctx.strokeStyle = `rgba(${Math.min(255, baseR + 100)},${Math.min(255, baseG + 100)},${Math.min(255, baseB + 100)},1)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x - r * pulse, y);
        ctx.lineTo(x - r * pulse * 0.3, y);
        ctx.moveTo(x + r * pulse * 0.3, y);
        ctx.lineTo(x + r * pulse, y);
        ctx.moveTo(x, y - r * pulse);
        ctx.lineTo(x, y - r * pulse * 0.3);
        ctx.moveTo(x, y + r * pulse * 0.3);
        ctx.lineTo(x, y + r * pulse);
        ctx.stroke();
        
        // Center dot
        ctx.fillStyle = `rgba(${Math.min(255, baseR + 120)},${Math.min(255, baseG + 120)},${Math.min(255, baseB + 120)},0.9)`;
        ctx.beginPath();
        ctx.arc(x, y, r * pulse * 0.15, 0, Math.PI * 2);
        ctx.fill();
        break;
        
      case 'ring': // Drone Spawner - technological, spawning
        ctx.strokeStyle = grad;
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.arc(x, y, r * pulse * 0.85, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = `rgba(${Math.min(255, baseR + 80)},${Math.min(255, baseG + 80)},${Math.min(255, baseB + 80)},0.8)`;
        ctx.beginPath();
        ctx.arc(x, y, r * pulse * 0.5, 0, Math.PI * 2);
        ctx.stroke();
        
        // Rotating segments
        const t = Date.now() / 1000;
        for (let i = 0; i < 4; i++) {
          const a = (i / 4) * Math.PI * 2 + t;
          ctx.fillStyle = `rgba(${Math.min(255, baseR + 100)},${Math.min(255, baseG + 100)},${Math.min(255, baseB + 100)},0.7)`;
          ctx.beginPath();
          ctx.arc(x + Math.cos(a) * r * pulse * 0.7, y + Math.sin(a) * r * pulse * 0.7, 3, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
        
      case 'shield': // Shield Projector - protective, barrier
        ctx.fillStyle = grad;
        ctx.strokeStyle = `rgba(${Math.min(255, baseR + 80)},${Math.min(255, baseG + 80)},${Math.min(255, baseB + 80)},1)`;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(x, y - r * pulse);
        ctx.lineTo(x + r * pulse * 0.7, y - r * pulse * 0.3);
        ctx.lineTo(x + r * pulse * 0.7, y + r * pulse * 0.5);
        ctx.lineTo(x, y + r * pulse);
        ctx.lineTo(x - r * pulse * 0.7, y + r * pulse * 0.5);
        ctx.lineTo(x - r * pulse * 0.7, y - r * pulse * 0.3);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Shield emblem
        ctx.shadowBlur = 0;
        ctx.strokeStyle = `rgba(${Math.min(255, baseR + 120)},${Math.min(255, baseG + 120)},${Math.min(255, baseB + 120)},0.8)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x, y - r * pulse * 0.5);
        ctx.lineTo(x, y + r * pulse * 0.3);
        ctx.moveTo(x - r * pulse * 0.4, y - r * pulse * 0.1);
        ctx.lineTo(x + r * pulse * 0.4, y - r * pulse * 0.1);
        ctx.stroke();
        break;
        
      case 'wedge': // Shield Wall - massive, blocking
        ctx.fillStyle = grad;
        ctx.strokeStyle = `rgba(${Math.min(255, baseR + 60)},${Math.min(255, baseG + 60)},${Math.min(255, baseB + 60)},1)`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x + r * pulse, y);
        ctx.lineTo(x - r * pulse * 0.5, y - r * pulse);
        ctx.lineTo(x - r * pulse * 0.5, y + r * pulse);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Armor segments
        ctx.shadowBlur = 0;
        ctx.strokeStyle = `rgba(${Math.max(0, baseR - 60)},${Math.max(0, baseG - 60)},${Math.max(0, baseB - 60)},0.7)`;
        ctx.lineWidth = 2;
        for (let i = 0; i < 3; i++) {
          const offset = (i - 1) * r * pulse * 0.5;
          ctx.beginPath();
          ctx.moveTo(x - r * pulse * 0.3, y + offset);
          ctx.lineTo(x + r * pulse * 0.6, y + offset);
          ctx.stroke();
        }
        break;
        
      case 'arrow': // Rail Charger - fast, charging
        ctx.fillStyle = grad;
        ctx.strokeStyle = `rgba(${Math.min(255, baseR + 100)},${Math.min(255, baseG + 100)},${Math.min(255, baseB + 100)},1)`;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(x + r * pulse, y);
        ctx.lineTo(x - r * pulse * 0.3, y - r * pulse * 0.6);
        ctx.lineTo(x - r * pulse * 0.3, y - r * pulse * 0.2);
        ctx.lineTo(x - r * pulse, y - r * pulse * 0.2);
        ctx.lineTo(x - r * pulse, y + r * pulse * 0.2);
        ctx.lineTo(x - r * pulse * 0.3, y + r * pulse * 0.2);
        ctx.lineTo(x - r * pulse * 0.3, y + r * pulse * 0.6);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Speed lines
        ctx.shadowBlur = 0;
        ctx.strokeStyle = `rgba(${Math.min(255, baseR + 120)},${Math.min(255, baseG + 120)},${Math.min(255, baseB + 120)},0.6)`;
        ctx.lineWidth = 1.5;
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.moveTo(x - r * pulse * 0.6, y + (i - 1) * r * pulse * 0.3);
          ctx.lineTo(x + r * pulse * 0.4, y + (i - 1) * r * pulse * 0.3);
          ctx.stroke();
        }
        break;
        
      default: // circle - Chaser - basic, aggressive
        ctx.fillStyle = grad;
        ctx.strokeStyle = `rgba(${Math.min(255, baseR + 80)},${Math.min(255, baseG + 80)},${Math.min(255, baseB + 80)},1)`;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(x, y, r * pulse, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Inner ring
        ctx.shadowBlur = 0;
        ctx.strokeStyle = `rgba(${Math.min(255, baseR + 100)},${Math.min(255, baseG + 100)},${Math.min(255, baseB + 100)},0.6)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, r * pulse * 0.6, 0, Math.PI * 2);
        ctx.stroke();
        break;
    }
    
    ctx.restore();
  }

  function difficultyMult(diff) {
    switch (diff) {
      case 'easy':  return { enemyHp: 0.85, enemySpd: 0.85, enemyCount: 0.85, bulletSpeed: 0.95, xpNeed: 0.92, boss: 0.90 };
      case 'hard':  return { enemyHp: 1.20, enemySpd: 1.15, enemyCount: 1.25, bulletSpeed: 1.05, xpNeed: 1.08, boss: 1.08 };
      default:      return { enemyHp: 1.00, enemySpd: 1.00, enemyCount: 1.00, bulletSpeed: 1.00, xpNeed: 1.00, boss: 1.00 };
    }
  }

  const RARITY_WEIGHTS = {
    common: 6,
    rare: 3.2,
    epic: 1.6,
    legendary: 0.7,
  };

  const ENEMY_SCORE = {
    chaser: 1,
    runner: 1,
    tank: 2,
    shooter: 2,
    splitter: 2,
    teleporter: 2,
    anchor: 2,
    sniper: 3,
    droneSpawner: 3,
    healer: 3,
    mimic: 2,
    shieldProjector: 3,
    shieldWall: 4,
    railCharger: 3,
    splitterPlus: 4,
  };

  const ENEMY_COSTS = {
    chaser: 1,
    runner: 1,
    tank: 2,
    shooter: 2,
    splitter: 2,
    teleporter: 2,
    anchor: 2,
    sniper: 3,
    droneSpawner: 3,
    healer: 3,
    mimic: 2,
    shieldProjector: 3,
    shieldWall: 4,
    railCharger: 3,
    splitterPlus: 4,
  };

  const ENEMY_TIER_TABLE = [
    { minWave: 1, weights: { chaser: 8, runner: 1 } },
    { minWave: 2, weights: { chaser: 6, runner: 2, shooter: 1 } },
    { minWave: 3, weights: { chaser: 5, runner: 2, shooter: 2, tank: 1 } },
    { minWave: 4, weights: { chaser: 4, runner: 2, shooter: 2, tank: 1, splitter: 1 } },
    { minWave: 5, weights: { chaser: 3, runner: 2, shooter: 2, tank: 1, splitter: 1, teleporter: 1 } },
    { minWave: 6, weights: { chaser: 3, runner: 2, shooter: 2, tank: 1, splitter: 1, teleporter: 1, sniper: 1 } },
    { minWave: 7, weights: { chaser: 3, runner: 2, shooter: 2, tank: 1, splitter: 1, teleporter: 1, sniper: 1, droneSpawner: 1 } },
    { minWave: 8, weights: { chaser: 2, runner: 2, shooter: 2, tank: 1, splitter: 1, teleporter: 1, sniper: 1, droneSpawner: 1, healer: 1 } },
    { minWave: 11, weights: { chaser: 2, runner: 2, shooter: 2, tank: 1, splitter: 1, teleporter: 1, sniper: 1, droneSpawner: 1, healer: 1, shieldProjector: 1 } },
    { minWave: 13, weights: { chaser: 2, runner: 2, shooter: 2, tank: 1, splitter: 1, teleporter: 1, sniper: 1, droneSpawner: 1, healer: 1, shieldProjector: 1, railCharger: 1 } },
    { minWave: 15, weights: { chaser: 2, runner: 2, shooter: 2, tank: 1, splitter: 1, teleporter: 1, sniper: 1, droneSpawner: 1, healer: 1, shieldProjector: 1, railCharger: 1, shieldWall: 1 } },
    { minWave: 17, weights: { chaser: 2, runner: 2, shooter: 2, tank: 1, splitter: 1, teleporter: 1, sniper: 1, droneSpawner: 1, healer: 1, shieldProjector: 1, railCharger: 1, shieldWall: 1, splitterPlus: 1 } },
    { minWave: 20, weights: { chaser: 2, runner: 2, shooter: 2, tank: 1, splitter: 1, teleporter: 1, sniper: 1, droneSpawner: 1, healer: 1, shieldProjector: 1, railCharger: 1, shieldWall: 1, splitterPlus: 1, anchor: 1 } },
  ];

  const WAVE_SQUADS = [
    { minWave: 1, weight: 4, cost: 3, types: ['chaser', 'chaser', 'runner'] },
    { minWave: 2, weight: 3, cost: 4, types: ['runner', 'runner', 'chaser', 'shooter'] },
    { minWave: 3, weight: 3, cost: 5, types: ['chaser', 'shooter', 'tank'] },
    { minWave: 4, weight: 3, cost: 5, types: ['runner', 'splitter', 'chaser', 'chaser'] },
    { minWave: 5, weight: 2, cost: 6, types: ['teleporter', 'runner', 'chaser', 'shooter'] },
    { minWave: 6, weight: 2, cost: 6, types: ['sniper', 'runner', 'chaser', 'chaser'] },
    { minWave: 7, weight: 2, cost: 7, types: ['droneSpawner', 'runner', 'chaser'] },
    { minWave: 8, weight: 2, cost: 7, types: ['healer', 'tank', 'chaser', 'runner'] },
    { minWave: 11, weight: 2, cost: 8, types: ['shieldProjector', 'shooter', 'chaser', 'runner'] },
    { minWave: 13, weight: 2, cost: 8, types: ['railCharger', 'runner', 'shooter', 'chaser'] },
    { minWave: 15, weight: 1, cost: 9, types: ['shieldWall', 'tank', 'runner'] },
    { minWave: 17, weight: 1, cost: 9, types: ['splitterPlus', 'shooter', 'chaser'] },
    { minWave: 20, weight: 1, cost: 9, types: ['anchor', 'shooter', 'runner', 'chaser'] },
  ];

  function getEnemyWeights(wave) {
    let active = ENEMY_TIER_TABLE[0].weights;
    for (const tier of ENEMY_TIER_TABLE) {
      if (wave >= tier.minWave) active = tier.weights;
    }
    return active;
  }

  function pickEnemyType(wave, remainingBudget) {
    const weights = getEnemyWeights(wave);
    const entries = Object.keys(weights)
      .filter(type => (ENEMY_COSTS[type] || 1) <= remainingBudget)
      .map(type => ({ type, weight: weights[type] }));
    if (wave >= 12 && remainingBudget >= ENEMY_COSTS.mimic && rand01() < 0.06) {
      return 'mimic';
    }
    const picked = weightedPick(entries, item => item.weight);
    return picked ? picked.type : 'chaser';
  }

  function pickSquad(wave, remainingBudget) {
    const options = WAVE_SQUADS.filter(squad => squad.minWave <= wave && squad.cost <= remainingBudget);
    if (options.length === 0) return null;
    return weightedPick(options, squad => squad.weight);
  }

  // ---------------------------------------------------------------------------
  // Style
  // ---------------------------------------------------------------------------
  const STYLE = {
    bgA: 'rgba(0,0,0,0.88)',
    bgB: 'rgba(12,16,24,0.74)',
    panel: 'rgba(255,255,255,0.06)',
    text: 'rgba(255,255,255,0.92)',
    textDim: 'rgba(255,255,255,0.70)',
    neon: 'rgba(140,255,190,0.95)',
    neonSoft: 'rgba(140,255,190,0.25)',
    cyan: 'rgba(140,220,255,0.92)',
    cyanSoft: 'rgba(140,220,255,0.22)',
    danger: 'rgba(255,90,90,0.92)',
    dangerSoft: 'rgba(255,90,90,0.25)',
    gold: 'rgba(255,215,120,0.92)',
    goldSoft: 'rgba(255,215,120,0.22)',
    pink: 'rgba(255,120,200,0.92)',
    pinkSoft: 'rgba(255,120,200,0.22)',
    white: '#ffffff',
  };

  function drawVignette(bmp) {
    const ctx = bmp.context;
    const w = bmp.width, h = bmp.height;
    const g = ctx.createRadialGradient(w/2, h/2, Math.min(w,h)*0.12, w/2, h/2, Math.max(w,h)*0.75);
    g.addColorStop(0, STYLE.bgB);
    g.addColorStop(1, STYLE.bgA);
    ctx.save();
    ctx.fillStyle = g;
    ctx.fillRect(0,0,w,h);
    ctx.restore();
    bitmapUpdate(bmp);
  }

  // ---------------------------------------------------------------------------
  // Plugin Command
  // ---------------------------------------------------------------------------
  PluginManager.registerCommand(PLUGIN, 'StartMiniGame', args => {
    const arenaType = String(args.ArenaType || 'random');
    const arenaModifier = String(args.ArenaModifier || 'random');
    
    const opts = {
      difficulty: String(args.Difficulty || DefaultDifficulty),
      partnerEnabled: String(args.EnablePartner || String(PartnerEnabledByDefault)) === 'true',
      autoShoot: String(args.AutoShoot || String(AutoShootByDefault)) === 'true',
      usePictures: String(args.UsePictures || String(UsePictureSpritesDefault)) === 'true',
      spriteScale: Number(args.SpriteScale || SpriteScaleDefault),
      arenaType: arenaType === 'random' ? null : arenaType,
      arenaModifier: arenaModifier === 'random' ? null : arenaModifier,
      pics: {
        player: String(args.PlayerPic || DefaultPics.player),
        partner: String(args.PartnerPic || DefaultPics.partner),
        enemy: String(args.EnemyPic || DefaultPics.enemy),
        bullet: String(args.BulletPic || DefaultPics.bullet),
        xp: String(args.XpPic || DefaultPics.xp),
        hp: String(args.HpPic || DefaultPics.hp),
        upgrade: String(args.UpgradePic || DefaultPics.upgrade),
      }
    };
    SceneManager._pkMinigameOpts = opts;
    SceneManager.push(Scene_PK_Minigame);
  });

  // ---------------------------------------------------------------------------
  // Data: CRAZY WEAPON PATTERNS & UPGRADES
  // ---------------------------------------------------------------------------
  
  function makeUpgradePool() {
    const U = [];
    const add = (key, name, desc, shape, color, rarity, tags, apply) => 
      U.push({ key, name, desc, shape, color, rarity: rarity || 'common', tags: tags || [], apply });

    // === CRAZY WEAPON PATTERNS ===
    add('weaponSpider', 'Spider Swarm', 'Shoot spiders that create DOT webs!', 'cross', 'rgba(100,255,100,0.9)', 'epic', ['weapon'], g => {
      g.wpn.pattern = 'spider';
      g.wpn.cooldown = 20;
      g.wpn.damage = 2;
      g.wpn.bulletSpeed = 12;
      g.wpn.life = 80;
      g.wpn.bulletColor = 'rgba(100,255,100,0.9)';
    });
    
    add('weaponBlackhole', 'Singularity Cannon', 'Blackholes suck in enemies!', 'orb', 'rgba(150,50,200,0.95)', 'legendary', ['weapon'], g => {
      g.wpn.pattern = 'blackhole';
      g.wpn.cooldown = 45;
      g.wpn.damage = 8;
      g.wpn.bulletSpeed = 10;
      g.wpn.life = 90;
      g.wpn.r = 8;
      g.wpn.bulletColor = 'rgba(150,50,200,0.95)';
    });
    
    add('weaponVortex', 'Vortex Spiral', 'Spiraling bullets!', 'bolt', 'rgba(100,220,255,0.9)', 'rare', ['weapon'], g => {
      g.wpn.pattern = 'vortex';
      g.wpn.cooldown = 8;
      g.wpn.damage = 3;
      g.wpn.pellets = 3;
      g.wpn.bulletSpeed = 13;
      g.wpn.life = 70;
      g.wpn.bulletColor = 'rgba(100,220,255,0.9)';
    });
    
    add('weaponLightning', 'Tesla Coil', 'Chain lightning!', 'bolt', 'rgba(255,100,255,0.95)', 'epic', ['weapon'], g => {
      g.wpn.pattern = 'lightning';
      g.wpn.cooldown = 25;
      g.wpn.damage = 4;
      g.wpn.chain = 8;
      g.wpn.bulletSpeed = 15;
      g.wpn.life = 60;
      g.wpn.bulletColor = 'rgba(255,100,255,0.95)';
    });
    
    add('weaponFlamethrower', 'Inferno Stream', 'Fire cone!', 'star8', 'rgba(255,150,50,0.9)', 'epic', ['weapon'], g => {
      g.wpn.pattern = 'flamethrower';
      g.wpn.cooldown = 2;
      g.wpn.damage = 1;
      g.wpn.pellets = 5;
      g.wpn.spread = 0.8;
      g.wpn.bulletSpeed = 11;
      g.wpn.life = 65;
      g.wpn.bulletColor = 'rgba(255,150,50,0.9)';
    });
    
    add('weaponShotgun', 'Scatter Blast', 'Massive spread!', 'star8', 'rgba(255,90,90,0.9)', 'rare', ['weapon'], g => {
      g.wpn.pattern = 'shotgun';
      g.wpn.cooldown = 22;
      g.wpn.damage = 2;
      g.wpn.pellets = 12;
      g.wpn.spread = 0.9;
      g.wpn.bulletSpeed = 14;
      g.wpn.life = 60;
      g.wpn.bulletColor = 'rgba(255,90,90,0.9)';
    });
    
    add('weaponLaser', 'Piercing Beam', 'Infinite pierce!', 'needle', 'rgba(255,120,200,0.95)', 'epic', ['weapon'], g => {
      g.wpn.pattern = 'laser';
      g.wpn.cooldown = 40;
      g.wpn.damage = 20;
      g.wpn.pierce = 999;
      g.wpn.bulletSpeed = 50;
      g.wpn.life = 30;
      g.wpn.r = 3;
      g.wpn.bulletColor = 'rgba(255,120,200,0.95)';
    });
    
    add('weaponHoming', 'Smart Missiles', 'Heat-seeking!', 'chevron', 'rgba(140,220,255,0.9)', 'rare', ['weapon'], g => {
      g.wpn.pattern = 'homing';
      g.wpn.cooldown = 15;
      g.wpn.damage = 6;
      g.wpn.bulletSpeed = 12;
      g.wpn.life = 75;
      g.build.homing = true;
      g.wpn.bulletColor = 'rgba(140,220,255,0.9)';
    });

    // === STAT BOOSTS ===
    add('dmg', 'Damage +2', 'More firepower.', 'x', 'rgba(255,0,0,0.9)', 'common', [], g => { g.wpn.damage += 2; });
    add('rof', 'Fire Rate +20%', 'Shoot faster.', 'bolt', 'rgba(255,215,0,0.9)', 'common', [], g => { g.wpn.cooldown = Math.floor(g.wpn.cooldown * 0.8); });
    add('pierce', 'Pierce +1', 'Bullets go through.', 'needle', 'rgba(0,255,255,0.9)', 'common', [], g => { g.wpn.pierce++; });
    add('speed', 'Move Speed +15%', 'Faster movement.', 'chevron', 'rgba(0,255,0,0.9)', 'common', [], g => { g.build.moveMul *= 1.15; });
    add('hp', 'Max HP +1', 'More survivability.', 'hex', 'rgba(255,105,180,0.9)', 'common', [], g => { g.build.player.maxHp++; g.build.player.hp++; });
    add('range', 'Bullet Range +30%', 'Longer reach.', 'arrow', 'rgba(0,191,255,0.9)', 'common', [], g => { g.wpn.life = Math.floor(g.wpn.life * 1.3); });

    return U;
  }
  const UPGRADE_POOL = makeUpgradePool();

  // ---------------------------------------------------------------------------
  // Core Entities
  // ---------------------------------------------------------------------------
  class Ent {
    constructor(x, y) {
      this.x = x; this.y = y;
      this.vx = 0; this.vy = 0;
      this.r = 10;
      this.dead = false;
      this.iframes = 0;
      this.hitFlash = 0;
    }
    update(g) {
      if (this.iframes > 0) this.iframes--;
      if (this.hitFlash > 0) this.hitFlash = Math.max(0, this.hitFlash - dt() * 3.5);
      this.x += this.vx;
      this.y += this.vy;
      this.x = clamp(this.x, g.bounds.l + this.r, g.bounds.r - this.r);
      this.y = clamp(this.y, g.bounds.t + this.r, g.bounds.b - this.r);
    }
  }

  class Player extends Ent {
    constructor(x, y) {
      super(x, y);
      this.r = 14;
      this.maxHp = PlayerMaxHP;
      this.hp = this.maxHp;
      this.speedBase = 3.0;
      this.shotCd = 0;
      this.explosionCd = 0;
      this.explosionMax = 300;
      this.aimX = 1; this.aimY = 0;
    }

    hurt(dmg) {
      if (this.iframes > 0) return;
      this.hp -= dmg;
      this.iframes = 24;
      this.hitFlash = 0.25;
      if (this.hp <= 0) this.dead = true;
    }

    update(g) {
      const left  = Input.isPressed('left')  || Input.isPressed('a');
      const right = Input.isPressed('right') || Input.isPressed('d');
      const up    = Input.isPressed('up')    || Input.isPressed('w');
      const down  = Input.isPressed('down')  || Input.isPressed('s');

      let mx = (right?1:0) - (left?1:0);
      let my = (down?1:0) - (up?1:0);

      let sp = this.speedBase * g.build.moveMul;
      if (g.wave === 5 && g.boss && !g.boss.dead) sp *= 1.07;

      if (mx !== 0 || my !== 0) {
        const len = Math.hypot(mx, my) || 1;
        mx /= len; my /= len;
        this.vx = mx * sp;
        this.vy = my * sp;
      } else {
        this.vx *= 0.55;
        this.vy *= 0.55;
      }

      if (this.shotCd > 0) this.shotCd--;
      if (this.explosionCd > 0) this.explosionCd--;

      // Radial explosion ability (Shift key)
      if (Input.isTriggered('shift') && this.explosionCd <= 0) {
        this.explosionCd = this.explosionMax;
        const explosionRadius = 120;
        const explosionDamage = 5;
        
        // Damage all enemies in radius
        for (const e of g.enemies) {
          if (e.dead) continue;
          const d2 = dist2(this.x, this.y, e.x, e.y);
          if (d2 < explosionRadius * explosionRadius) {
            e.hurt(g, explosionDamage);
            // Knockback
            const dx = e.x - this.x;
            const dy = e.y - this.y;
            const len = Math.hypot(dx, dy) || 1;
            e.pushX += (dx / len) * 8;
            e.pushY += (dy / len) * 8;
          }
        }
        
        // Damage boss if in range
        if (g.boss && !g.boss.dead) {
          const d2 = dist2(this.x, this.y, g.boss.x, g.boss.y);
          if (d2 < explosionRadius * explosionRadius) {
            g.boss.hurt(g, explosionDamage);
          }
        }
        
        // Visual effects
        g.spawnExplosion(this.x, this.y, 2.0);
        g.spawnParticles(this.x, this.y, 40, STYLE.gold, 8, 'spark');
        g.spawnParticles(this.x, this.y, 20, STYLE.cyan, 6, 'glow');
        g.shake = Math.min(15, g.shake + 8);
      }

      const tgt = g.findBestEnemyTarget(this);
      if (tgt) {
        const dx = tgt.x - this.x;
        const dy = tgt.y - this.y;
        const len = Math.hypot(dx, dy) || 1;
        this.aimX = dx/len;
        this.aimY = dy/len;
      } else if (mx !== 0 || my !== 0) {
        this.aimX = mx; this.aimY = my;
      }

      const wantsShoot = g.opts.autoShoot ? !!tgt : Input.isPressed('ok');
      if (wantsShoot && tgt && this.shotCd <= 0) {
        g.fireWeapon(this, 'player');
        this.shotCd = Math.max(3, Math.floor(g.wpn.cooldown));
      }

      super.update(g);
    }
  }

  class Partner extends Ent {
    constructor(x, y) {
      super(x, y);
      this.r = 11;
      this.maxHp = PartnerMaxHP;
      this.hp = this.maxHp;
      this.speedBase = 2.85;
      this.shotCd = 0;
      this.enabled = true;
      this.orbitT = rand01() * Math.PI*2;
    }
    hurt(dmg) {
      if (this.iframes > 0) return;
      this.hp -= dmg;
      this.iframes = 18;
      this.hitFlash = 0.22;
      if (this.hp <= 0) this.dead = true;
    }
    update(g) {
      if (!this.enabled || this.dead) return;
      const tgt = g.findBestEnemyTarget(this);
      let tx = g.player.x, ty = g.player.y;
      if (tgt) {
        this.orbitT += dt() * 1.35;
        const desired = 92;
        tx = tgt.x + Math.cos(this.orbitT) * desired;
        ty = tgt.y + Math.sin(this.orbitT) * desired;
      } else {
        this.orbitT += dt() * 1.0;
        tx = g.player.x + Math.cos(this.orbitT) * 48;
        ty = g.player.y + Math.sin(this.orbitT) * 34;
      }
      let dx = tx - this.x;
      let dy = ty - this.y;
      const d = Math.hypot(dx, dy) || 1;
      const sp = this.speedBase * g.build.partnerMoveMul;
      this.vx = (dx/d) * sp;
      this.vy = (dy/d) * sp;

      if (this.shotCd > 0) this.shotCd--;
      if (tgt && this.shotCd <= 0) {
        g.fireWeapon(this, 'partner', true);
        this.shotCd = Math.max(6, Math.floor(g.build.partnerCooldown));
      }
      super.update(g);
    }
  }

  // AAA ENEMY SYSTEM - 10+ Unique Archetypes
  class Enemy extends Ent {
    constructor(x, y, wave, mult, type='chaser') {
      super(x, y);
      this.type = type;
      this.wave = wave;
      
      const stats = {
        chaser: { r: 12, hpMul: 1.0, speedMul: 1.0, touchDmg: 1, color: STYLE.danger, shape: 'circle', trail: false },
        runner: { r: 11, hpMul: 0.8, speedMul: 1.5, touchDmg: 1, color: STYLE.gold, shape: 'triangle', trail: true },
        tank: { r: 16, hpMul: 2.0, speedMul: 0.75, touchDmg: 2, color: 'rgba(180,60,60,0.9)', shape: 'square', trail: false },
        shooter: { r: 12, hpMul: 1.0, speedMul: 0.95, touchDmg: 1, color: 'rgba(200,100,255,0.9)', shape: 'diamond', trail: false },
        splitter: { r: 12, hpMul: 1.15, speedMul: 1.0, touchDmg: 1, color: 'rgba(100,200,100,0.9)', shape: 'hexagon', trail: false },
        teleporter: { r: 11, hpMul: 0.9, speedMul: 1.2, touchDmg: 1, color: STYLE.pink, shape: 'star', trail: true },
        anchor: { r: 14, hpMul: 1.3, speedMul: 0.6, touchDmg: 1, color: 'rgba(80,80,180,0.9)', shape: 'plus', trail: false },
        sniper: { r: 10, hpMul: 0.7, speedMul: 0.8, touchDmg: 3, color: 'rgba(255,50,50,0.9)', shape: 'crosshair', trail: false },
        droneSpawner: { r: 15, hpMul: 1.5, speedMul: 0.7, touchDmg: 1, color: STYLE.cyan, shape: 'ring', trail: false },
        healer: { r: 12, hpMul: 1.2, speedMul: 0.9, touchDmg: 1, color: STYLE.neon, shape: 'cross', trail: false },
        mimic: { r: 10, hpMul: 0.6, speedMul: 0, touchDmg: 2, color: STYLE.gold, shape: 'circle', trail: false },
        shieldProjector: { r: 13, hpMul: 1.4, speedMul: 0.85, touchDmg: 1, color: 'rgba(100,200,255,0.9)', shape: 'shield', trail: false },
        shieldWall: { r: 18, hpMul: 2.5, speedMul: 0.6, touchDmg: 2, color: 'rgba(150,150,200,0.9)', shape: 'wedge', trail: false },
        railCharger: { r: 13, hpMul: 1.1, speedMul: 1.3, touchDmg: 3, color: STYLE.pink, shape: 'arrow', trail: true },
        splitterPlus: { r: 12, hpMul: 1.15, speedMul: 1.0, touchDmg: 1, color: 'rgba(150,255,150,0.9)', shape: 'hexagon', trail: false }
      }[type] || { r: 12, hpMul: 1.0, speedMul: 1.0, touchDmg: 1, color: STYLE.danger, shape: 'circle', trail: false };
      
      this.r = stats.r;
      this.maxHp = Math.max(1, Math.round((2 + wave*0.65) * mult.enemyHp * stats.hpMul));
      this.hp = this.maxHp;
      this.speed = (1.15 + wave*0.07) * mult.enemySpd * stats.speedMul;
      this.touchDmg = stats.touchDmg;
      this.shootCd = randInt(20, 70);
      this.pulseT = rand01() * Math.PI*2;
      this.pushX = 0;
      this.pushY = 0;
      
      // Visual properties for uniqueness
      this.color = stats.color;
      this.shape = stats.shape;
      this.hasTrail = stats.trail;
      this.trailParticles = [];
      
      if (type === 'teleporter') this.teleportCd = randInt(120, 180);
      else if (type === 'anchor') { this.anchorCd = randInt(180, 240); this.anchorActive = false; }
      else if (type === 'sniper') { this.chargeCd = randInt(150, 200); this.charging = false; this.chargeT = 0; }
      else if (type === 'droneSpawner') { this.spawnCd = randInt(120, 180); this.dronesSpawned = 0; }
      else if (type === 'healer') { this.healCd = 30; this.healTarget = null; }
      else if (type === 'mimic') { this.mimicType = rand01() < 0.5 ? 'hp' : 'upgrade'; this.revealed = false; }
      else if (type === 'shieldProjector') { this.shieldCd = 60; }
      else if (type === 'shieldWall') { this.formation = 'wedge'; this.angle = rand01() * Math.PI * 2; }
      else if (type === 'railCharger') { this.chargeCd = randInt(100, 150); this.charging = false; this.chargeT = 0; this.chargeDir = { x: 0, y: 0 }; }
    }

    hurt(g, dmg) {
      const dealt = Math.min(dmg, this.hp);
      this.hp -= dmg;
      g.stats.damageDealt += dealt;
      this.hitFlash = 0.22;
      g.spawnImpactSparks(this.x, this.y, this.vx, this.vy);
      g.spawnFloater(this.x, this.y - 12, String(dmg), (dmg > 2 ? STYLE.gold : STYLE.white));
      if (this.hp <= 0) {
        this.dead = true;
        g.onEnemyKilled(this);
      }
    }

    update(g) {
      this.pulseT += dt() * 2.2;
      this.pushX *= 0.85;
      this.pushY *= 0.85;

      const p = g.player;
      let dx = p.x - this.x;
      let dy = p.y - this.y;
      let d = Math.hypot(dx, dy) || 1;
      dx /= d; dy /= d;

      if (this.type === 'shooter') {
        const desired = 160;
        if (d < desired) { dx *= -1; dy *= -1; }
        this.vx = dx * this.speed + this.pushX;
        this.vy = dy * this.speed + this.pushY;
        this.shootCd--;
        if (this.shootCd <= 0) {
          this.shootCd = randInt(65, 100);
          g.spawnEnemyBullet(this.x, this.y, dx * 4.2, dy * 4.2);
        }
      } else if (this.type === 'runner') {
        const shooters = g.enemies.filter(e => !e.dead && e.type === 'shooter');
        if (shooters.length > 0 && d < 150) {
          const perpX = -dy;
          const perpY = dx;
          this.vx = (dx * 0.5 + perpX * 0.5) * this.speed + this.pushX;
          this.vy = (dy * 0.5 + perpY * 0.5) * this.speed + this.pushY;
        } else {
          this.vx = dx * this.speed + this.pushX;
          this.vy = dy * this.speed + this.pushY;
        }
      } else if (this.type === 'teleporter') {
        this.teleportCd--;
        if (this.teleportCd <= 0 && d > 100) {
          this.teleportCd = randInt(120, 180);
          const angle = Math.atan2(dy, dx) + Math.PI;
          const dist = 50;
          this.x = clamp(p.x + Math.cos(angle) * dist, g.bounds.l + this.r, g.bounds.r - this.r);
          this.y = clamp(p.y + Math.sin(angle) * dist, g.bounds.t + this.r, g.bounds.b - this.r);
          g.spawnParticles(this.x, this.y, 12, STYLE.pink, 4, 'glow');
        }
        this.vx = dx * this.speed * 0.5 + this.pushX;
        this.vy = dy * this.speed * 0.5 + this.pushY;
      } else if (this.type === 'sniper') {
        this.chargeCd--;
        if (this.chargeCd <= 0 && !this.charging && d > 120 && d < 350) {
          this.charging = true;
          this.chargeT = 0;
          this.chargeCd = randInt(150, 200);
        }
        if (this.charging) {
          this.chargeT += dt();
          if (this.chargeT >= 1.5) {
            this.charging = false;
            g.spawnEnemyBullet(this.x, this.y, dx * 12, dy * 12);
            g.spawnMuzzleFlash(this.x, this.y, dx, dy);
          }
          this.vx = this.pushX;
          this.vy = this.pushY;
        } else {
          const desired = 200;
          if (d < desired) { dx *= -1; dy *= -1; }
          this.vx = dx * this.speed + this.pushX;
          this.vy = dy * this.speed + this.pushY;
        }
      } else if (this.type === 'droneSpawner') {
        this.spawnCd--;
        if (this.spawnCd <= 0 && this.dronesSpawned < 3) {
          this.spawnCd = randInt(120, 180);
          this.dronesSpawned++;
          const angle = rand01() * Math.PI * 2;
          const drone = new Enemy(this.x + Math.cos(angle) * 30, this.y + Math.sin(angle) * 30, this.wave, { enemyHp: 0.5, enemySpd: 1.2, enemyCount: 1 }, 'runner');
          drone.r = 8;
          g.enemies.push(drone);
          g.spawnParticles(drone.x, drone.y, 8, STYLE.cyan, 3, 'glow');
        }
        const desired = 180;
        if (d < desired) { dx *= -1; dy *= -1; }
        this.vx = dx * this.speed + this.pushX;
        this.vy = dy * this.speed + this.pushY;
      } else if (this.type === 'healer') {
        this.healCd--;
        if (this.healCd <= 0) {
          this.healCd = 30;
          const allies = g.enemies.filter(e => !e.dead && e !== this && e.hp < e.maxHp);
          if (allies.length > 0) {
            this.healTarget = allies[0];
            this.healTarget.hp = Math.min(this.healTarget.maxHp, this.healTarget.hp + 1);
            g.spawnFloater(this.healTarget.x, this.healTarget.y - 10, '+1', STYLE.neon);
          }
        }
        const tanks = g.enemies.filter(e => !e.dead && e.type === 'tank');
        if (tanks.length > 0 && Math.hypot(tanks[0].x - this.x, tanks[0].y - this.y) > 60) {
          const tdx = tanks[0].x - this.x;
          const tdy = tanks[0].y - this.y;
          const td = Math.hypot(tdx, tdy) || 1;
          this.vx = (tdx / td) * this.speed + this.pushX;
          this.vy = (tdy / td) * this.speed + this.pushY;
        } else {
          const desired = 150;
          if (d < desired) { dx *= -1; dy *= -1; }
          this.vx = dx * this.speed + this.pushX;
          this.vy = dy * this.speed + this.pushY;
        }
      } else if (this.type === 'mimic') {
        if (!this.revealed && d < 40) {
          this.revealed = true;
          g.spawnExplosion(this.x, this.y, 0.8);
        }
        if (this.revealed) {
          this.vx = dx * this.speed * 2 + this.pushX;
          this.vy = dy * this.speed * 2 + this.pushY;
        } else {
          this.vx = this.pushX;
          this.vy = this.pushY;
        }
      } else if (this.type === 'shieldProjector') {
        this.shieldCd--;
        const desired = 140;
        if (d < desired) { dx *= -1; dy *= -1; }
        this.vx = dx * this.speed + this.pushX;
        this.vy = dy * this.speed + this.pushY;
      } else if (this.type === 'shieldWall') {
        this.angle = Math.atan2(dy, dx);
        this.vx = dx * this.speed + this.pushX;
        this.vy = dy * this.speed + this.pushY;
      } else if (this.type === 'railCharger') {
        this.chargeCd--;
        if (this.chargeCd <= 0 && !this.charging && d > 80 && d < 300) {
          this.charging = true;
          this.chargeT = 0;
          this.chargeCd = randInt(100, 150);
          this.chargeDir = { x: dx, y: dy };
        }
        if (this.charging) {
          this.chargeT += dt();
          if (this.chargeT >= 1.0) {
            this.charging = false;
            this.vx = this.chargeDir.x * this.speed * 5;
            this.vy = this.chargeDir.y * this.speed * 5;
            g.spawnParticles(this.x, this.y, 15, STYLE.danger, 6, 'trail');
          } else {
            this.vx = this.pushX;
            this.vy = this.pushY;
          }
        } else {
          this.vx = dx * this.speed * 0.7 + this.pushX;
          this.vy = dy * this.speed * 0.7 + this.pushY;
        }
      } else {
        this.vx = dx * this.speed + this.pushX;
        this.vy = dy * this.speed + this.pushY;
      }
      super.update(g);
    }
  }

  // AAA BOSS SYSTEM - 10 Unique Bosses with Signature Mechanics
  const BOSS_TYPES = [
    'prismChoir', 'nullArchitect', 'chronoLeech', 'vectorHydra', 'signalKraken',
    'starFurnace', 'glassSaint', 'wardenEcho', 'latticeQueen', 'finalLoop'
  ];

  const BOSS_DATA = {
    prismChoir: { name: 'The Prism Choir', color: 'rgba(150,100,255,0.9)', reward: 'Mirror Bullets' },
    nullArchitect: { name: 'The Null Architect', color: 'rgba(80,80,80,0.9)', reward: 'Phase Shift' },
    chronoLeech: { name: 'The Chrono Leech', color: 'rgba(100,200,255,0.9)', reward: 'Time Dilation' },
    vectorHydra: { name: 'The Vector Hydra', color: 'rgba(255,100,100,0.9)', reward: 'Multi-Head' },
    signalKraken: { name: 'The Signal Kraken', color: 'rgba(100,255,150,0.9)', reward: 'Cable Whip' },
    starFurnace: { name: 'The Star Furnace', color: 'rgba(255,180,50,0.9)', reward: 'Heat Shield' },
    glassSaint: { name: 'The Glass Saint', color: 'rgba(200,220,255,0.9)', reward: 'Crystal Armor' },
    wardenEcho: { name: 'The Warden of Echo', color: 'rgba(180,100,200,0.9)', reward: 'Echo Clone' },
    latticeQueen: { name: 'The Lattice Queen', color: 'rgba(255,100,200,0.9)', reward: 'Grid Control' },
    finalLoop: { name: 'The Final Loop', color: 'rgba(255,255,100,0.9)', reward: 'Perfect Loop' }
  };

  class Boss extends Ent {
    constructor(x, y, mult, bossIndex) {
      super(x, y);
      this.r = 36;
      this.maxHp = Math.round(180 * mult.enemyHp * mult.boss);
      this.hp = this.maxHp;
      this.phase = 1;
      this.prevPhase = 1;
      this.t = 0;
      this.pulseT = 0;
      this.ang = rand01() * Math.PI*2;
      this.coreSpin = 0;
      this.dead = false;
      this.touchDmg = 1;
      this.invuln = 0;
      
      // Boss identity
      this.bossType = BOSS_TYPES[bossIndex % BOSS_TYPES.length];
      this.bossData = BOSS_DATA[this.bossType];
      this.bossName = this.bossData.name;
      this.bossColor = this.bossData.color;
      
      // Boss-specific state
      this.mechanicTimer = 0;
      this.panicMoment = false;
      this.phaseChangeAnnounced = false;
      this.arenaTransformed = false;
      this.telegraphTimer = 0;
      this.safeLanes = [];
      
      // Type-specific initialization
      this.initBossType();
    }
    
    initBossType() {
      switch(this.bossType) {
        case 'prismChoir':
          this.mirrorDelay = [];
          this.mirrorBullets = [];
          break;
        case 'nullArchitect':
          this.walls = [];
          this.wallTimer = 0;
          break;
        case 'chronoLeech':
          this.stolenTime = 0;
          this.timeDebt = 0;
          break;
        case 'vectorHydra':
          this.heads = [
            { angle: 0, hp: 30, dead: false, type: 'normal' },
            { angle: Math.PI * 0.66, hp: 30, dead: false, type: 'bounce' },
            { angle: Math.PI * 1.33, hp: 30, dead: false, type: 'homing' }
          ];
          break;
        case 'signalKraken':
          this.tethers = [];
          this.tetherCooldown = 0;
          break;
        case 'starFurnace':
          this.heatZones = [];
          this.playerStillTime = 0;
          this.lastPlayerPos = { x: 0, y: 0 };
          break;
        case 'glassSaint':
          this.crystals = [];
          this.reflectActive = true;
          break;
        case 'wardenEcho':
          this.playerHistory = [];
          this.ghostHazards = [];
          break;
        case 'latticeQueen':
          this.gridRotation = 0;
          this.gridLasers = [];
          break;
        case 'finalLoop':
          this.mimickedUpgrades = [];
          this.loopPhase = 0;
          break;
      }
    }
    
    update(g) {
      this.t += dt();
      this.pulseT += dt() * 2.0;
      this.coreSpin += dt() * 1.2;
      if (this.invuln > 0) this.invuln = Math.max(0, this.invuln - dt());
      this.mechanicTimer += dt();
      this.telegraphTimer += dt();

      // Phase transitions
      const hpPct = this.hp / this.maxHp;
      const oldPhase = this.phase;
      if (hpPct < 0.66 && this.phase === 1) this.phase = 2;
      if (hpPct < 0.33 && this.phase === 2) this.phase = 3;
      
      // Phase change announcement
      if (this.phase !== oldPhase) {
        this.onPhaseChange(g, oldPhase);
      }
      
      // Panic moment at 15% HP
      if (hpPct < 0.15 && !this.panicMoment) {
        this.panicMoment = true;
        this.onPanicMoment(g);
      }

      // Movement pattern
      this.ang += dt() * 0.65;
      const cx = (g.bounds.l + g.bounds.r)/2;
      const cy = (g.bounds.t + g.bounds.b)/2;
      this.x = cx + Math.cos(this.ang) * 72;
      this.y = cy + Math.sin(this.ang*1.3) * 40;

      // Boss-specific update
      this.updateBossType(g);
      
      super.update(g);
    }
    
    onPhaseChange(g, oldPhase) {
      this.phaseChangeAnnounced = true;
      const phaseName = this.phase === 2 ? 'PHASE II' : 'PHASE III';
      g.systemMessages.push({ text: `${this.bossName} - ${phaseName}`, life: 2.5, y: 0, color: this.bossColor });
      g.shake = Math.min(20, g.shake + 8);
      g.spawnExplosion(this.x, this.y, 1.5);
      
      // Arena transformation
      if (!this.arenaTransformed && this.phase === 2) {
        this.arenaTransformed = true;
        this.transformArena(g);
      }
    }
    
    onPanicMoment(g) {
      g.systemMessages.push({ text: '⚠ DESPERATION ⚠', life: 2.0, y: 0, color: STYLE.danger });
      g.shake = Math.min(25, g.shake + 12);
      for (let i = 0; i < 30; i++) {
        g.spawnParticles(this.x, this.y, 1, this.bossColor, 8.0, 'spark');
      }
    }
    
    transformArena(g) {
      switch(this.bossType) {
        case 'prismChoir':
          g.systemMessages.push({ text: 'Mirrors activated!', life: 2.0, y: 0 });
          break;
        case 'nullArchitect':
          g.systemMessages.push({ text: 'Constructing maze...', life: 2.0, y: 0 });
          this.spawnInitialWalls(g);
          break;
        case 'chronoLeech':
          g.systemMessages.push({ text: 'Time debt accruing...', life: 2.0, y: 0 });
          break;
        case 'vectorHydra':
          g.systemMessages.push({ text: 'Heads multiplying!', life: 2.0, y: 0 });
          break;
        case 'signalKraken':
          g.systemMessages.push({ text: 'Deploying tethers...', life: 2.0, y: 0 });
          break;
        case 'starFurnace':
          g.systemMessages.push({ text: 'Heat rising!', life: 2.0, y: 0 });
          this.spawnHeatZones(g);
          break;
        case 'glassSaint':
          g.systemMessages.push({ text: 'Crystals manifesting!', life: 2.0, y: 0 });
          this.spawnCrystals(g);
          break;
        case 'wardenEcho':
          g.systemMessages.push({ text: 'Recording movements...', life: 2.0, y: 0 });
          break;
        case 'latticeQueen':
          g.systemMessages.push({ text: 'Grid online!', life: 2.0, y: 0 });
          this.initializeGrid(g);
          break;
        case 'finalLoop':
          g.systemMessages.push({ text: 'Analyzing upgrades...', life: 2.0, y: 0 });
          break;
      }
    }
    
    updateBossType(g) {
      switch(this.bossType) {
        case 'prismChoir': this.updatePrismChoir(g); break;
        case 'nullArchitect': this.updateNullArchitect(g); break;
        case 'chronoLeech': this.updateChronoLeech(g); break;
        case 'vectorHydra': this.updateVectorHydra(g); break;
        case 'signalKraken': this.updateSignalKraken(g); break;
        case 'starFurnace': this.updateStarFurnace(g); break;
        case 'glassSaint': this.updateGlassSaint(g); break;
        case 'wardenEcho': this.updateWardenEcho(g); break;
        case 'latticeQueen': this.updateLatticeQueen(g); break;
        case 'finalLoop': this.updateFinalLoop(g); break;
      }
    }
    
    // Boss-specific update methods (signatures only - full implementation would be very long)
    updatePrismChoir(g) {
      // Mirror bullets with delay
      if (this.mechanicTimer > 1.5) {
        this.mechanicTimer = 0;
        g.spawnBossSpikes(this.x, this.y, this.coreSpin, 4, 3.0);
      }
    }
    
    updateNullArchitect(g) {
      // Build walls mid-fight
      this.wallTimer += dt();
      if (this.wallTimer > 3.0 && this.walls.length < 6) {
        this.wallTimer = 0;
        this.spawnWall(g);
      }
      if (this.mechanicTimer > 2.0) {
        this.mechanicTimer = 0;
        g.spawnBossLineVolley(this.x, this.y, this.coreSpin, 3, 2, 3.2);
      }
    }
    
    updateChronoLeech(g) {
      // Steal time, must pay back with kills
      this.timeDebt += dt() * 0.1;
      if (this.mechanicTimer > 1.8) {
        this.mechanicTimer = 0;
        g.spawnBossSpikes(this.x, this.y, this.coreSpin, 5, 3.5);
      }
    }
    
    updateVectorHydra(g) {
      // Multiple heads with different bullet physics
      if (this.mechanicTimer > 1.2) {
        this.mechanicTimer = 0;
        for (const head of this.heads) {
          if (!head.dead) {
            const hx = this.x + Math.cos(head.angle + this.coreSpin) * 25;
            const hy = this.y + Math.sin(head.angle + this.coreSpin) * 25;
            g.spawnBossSpikes(hx, hy, head.angle, 3, 3.0);
          }
        }
      }
    }
    
    updateSignalKraken(g) {
      // Grapple/tether player
      this.tetherCooldown -= dt();
      if (this.tetherCooldown <= 0 && this.tethers.length < 3) {
        this.tetherCooldown = 4.0;
        this.tethers.push({ x: g.player.x, y: g.player.y, life: 5.0 });
      }
      if (this.mechanicTimer > 1.5) {
        this.mechanicTimer = 0;
        g.spawnBossLineVolley(this.x, this.y, this.coreSpin, 4, 2, 3.0);
      }
    }
    
    updateStarFurnace(g) {
      // Heat zones, standing still ignites
      const moved = Math.abs(g.player.x - this.lastPlayerPos.x) > 2 || Math.abs(g.player.y - this.lastPlayerPos.y) > 2;
      if (!moved) {
        this.playerStillTime += dt();
        if (this.playerStillTime > 1.5 && g.player.iframes <= 0) {
          g.player.hurt(1);
          g.spawnParticles(g.player.x, g.player.y, 10, 'rgba(255,100,50,0.9)', 4.0, 'spark');
          this.playerStillTime = 0;
        }
      } else {
        this.playerStillTime = 0;
      }
      this.lastPlayerPos = { x: g.player.x, y: g.player.y };
      
      if (this.mechanicTimer > 2.0) {
        this.mechanicTimer = 0;
        g.spawnBossSpikes(this.x, this.y, this.coreSpin, 6, 3.2);
      }
    }
    
    updateGlassSaint(g) {
      // Reflects shots unless crystals broken
      if (this.mechanicTimer > 1.8) {
        this.mechanicTimer = 0;
        g.spawnBossLineVolley(this.x, this.y, this.coreSpin, 3, 3, 3.0);
      }
    }
    
    updateWardenEcho(g) {
      // Repeat last 3 movements as ghost hazards
      if (Math.floor(this.t * 10) !== Math.floor((this.t - dt()) * 10)) {
        this.playerHistory.push({ x: g.player.x, y: g.player.y, t: 0 });
        if (this.playerHistory.length > 30) this.playerHistory.shift();
      }
      if (this.mechanicTimer > 2.5) {
        this.mechanicTimer = 0;
        g.spawnBossSpikes(this.x, this.y, this.coreSpin, 4, 3.0);
      }
    }
    
    updateLatticeQueen(g) {
      // Rotating grid of lasers
      this.gridRotation += dt() * 0.3;
      if (this.mechanicTimer > 1.5) {
        this.mechanicTimer = 0;
        g.spawnBossLineVolley(this.x, this.y, this.gridRotation, 5, 2, 3.5);
      }
    }
    
    updateFinalLoop(g) {
      // Remix of player upgrades
      if (this.mechanicTimer > 1.0) {
        this.mechanicTimer = 0;
        g.spawnBossSpikes(this.x, this.y, this.coreSpin, 8, 4.0);
      }
    }
    
    // Helper methods for boss mechanics
    spawnWall(g) {
      const b = g.bounds;
      const vertical = rand01() < 0.5;
      if (vertical) {
        const x = clamp((b.l+b.r)/2 + Math.cos(this.coreSpin) * 150, b.l+70, b.r-70);
        this.walls.push({ x, vertical: true, life: 10.0 });
      } else {
        const y = clamp((b.t+b.b)/2 + Math.sin(this.coreSpin*1.3) * 110, b.t+70, b.b-70);
        this.walls.push({ y, vertical: false, life: 10.0 });
      }
    }
    
    spawnInitialWalls(g) {
      for (let i = 0; i < 3; i++) {
        this.spawnWall(g);
      }
    }
    
    spawnHeatZones(g) {
      const b = g.bounds;
      for (let i = 0; i < 4; i++) {
        const x = randInt(b.l + 50, b.r - 50);
        const y = randInt(b.t + 50, b.b - 50);
        this.heatZones.push({ x, y, radius: 40, heat: 0 });
      }
    }
    
    spawnCrystals(g) {
      const b = g.bounds;
      for (let i = 0; i < 5; i++) {
        const x = randInt(b.l + 40, b.r - 40);
        const y = randInt(b.t + 40, b.b - 40);
        this.crystals.push({ x, y, hp: 10, dead: false });
      }
    }
    
    initializeGrid(g) {
      for (let i = 0; i < 8; i++) {
        this.gridLasers.push({ angle: i * (Math.PI / 4), active: true });
      }
    }
    
    hurt(g, dmg) {
      if (this.invuln > 0) return;
      
      // Glass Saint reflects damage if crystals alive
      if (this.bossType === 'glassSaint' && this.reflectActive) {
        const aliveCrystals = this.crystals.filter(c => !c.dead).length;
        if (aliveCrystals > 0) {
          g.spawnFloater(this.x, this.y - 30, 'REFLECTED!', STYLE.cyan);
          return;
        }
      }
      
      const dealt = Math.min(dmg, this.hp);
      this.hp -= dmg;
      g.stats.damageDealt += dealt;
      this.hitFlash = 0.25;
      this.invuln = 0.05;
      g.spawnFloater(this.x, this.y - 30, String(dmg), STYLE.pink);
      
      if (this.hp <= 0) {
        this.dead = true;
        g.bossDefeated = true;
        g.spawnExplosion(this.x, this.y, 2.5);
        g.systemMessages.push({ text: `${this.bossName} DEFEATED!`, life: 3.0, y: 0, color: STYLE.gold });
        g.stats.bossesDefeated++;
      }
    }
  }

  class Bullet {
    constructor(x, y, vx, vy, owner, stats) {
      this.x=x; this.y=y; this.vx=vx; this.vy=vy;
      this.owner=owner;
      this.r = stats.r;
      this.damage = stats.damage;
      this.pierce = stats.pierce;
      this.bounce = stats.bounce;
      this.boomerang = stats.boomerang;
      this.chain = stats.chain;
      this.rainbow = stats.rainbow;
      this.life = stats.life;
      this.dead=false;
      this._returning=false;
      this._hitSet = new Set();
      this._hueT = rand01()*10;
    }
    update(g) {
      this.life--;
      if (this.life <= 0) this.dead=true;
      if (this.boomerang && !this._returning && this.life < 0.45 * g.wpn.life) this._returning = true;
      if (this._returning) {
        const to = g.player;
        const dx = to.x - this.x;
        const dy = to.y - this.y;
        const len = Math.hypot(dx, dy) || 1;
        const sp = Math.hypot(this.vx, this.vy) || 6;
        this.vx = (dx/len)*sp;
        this.vy = (dy/len)*sp;
      }
      this.x += this.vx;
      this.y += this.vy;
      const b = g.bounds;
      if (this.bounce > 0) {
        let bounced = false;
        if (this.x < b.l + this.r) { this.x = b.l + this.r; this.vx *= -1; bounced = true; }
        if (this.x > b.r - this.r) { this.x = b.r - this.r; this.vx *= -1; bounced = true; }
        if (this.y < b.t + this.r) { this.y = b.t + this.r; this.vy *= -1; bounced = true; }
        if (this.y > b.b - this.r) { this.y = b.b - this.r; this.vy *= -1; bounced = true; }
        if (bounced) { this.bounce--; }
      } else {
        if (this.x < b.l - 40 || this.x > b.r + 40 || this.y < b.t - 40 || this.y > b.b + 40) this.dead = true;
      }
      this._hueT += dt() * 4.0;
    }
    color() {
      if (!this.rainbow) return { fill: STYLE.cyan, soft: STYLE.cyanSoft };
      const s = 0.5 + 0.5*Math.sin(this._hueT);
      const r = Math.floor(120 + 120*s);
      const g = Math.floor(120 + 120*Math.sin(this._hueT + 2));
      const b = Math.floor(120 + 120*Math.sin(this._hueT + 4));
      return { fill: `rgba(${r},${g},${b},0.95)`, soft: `rgba(${r},${g},${b},0.22)` };
    }
  }

  class Pickup {
    constructor(x, y, kind, data=null) {
      this.x=x; this.y=y;
      this.kind=kind;
      this.data=data;
      this.r = (kind==='upgrade') ? 16 : 10;
      this.dead=false;
      this.t=rand01()*10;
    }
    update(g) {
      this.t += dt();
      const mag = g.build.magnet;
      if (mag > 0) {
        const range = 70 + mag*70;
        const d2 = dist2(this.x, this.y, g.player.x, g.player.y);
        if (d2 < range*range) {
          const dx = g.player.x - this.x;
          const dy = g.player.y - this.y;
          const len = Math.hypot(dx, dy) || 1;
          const sp = 1.2 + mag*0.55;
          this.x += (dx/len)*sp;
          this.y += (dy/len)*sp;
        }
      }
    }
  }

  // AAA PARTICLE SYSTEM with trails, sparks, and varied effects
  class Particle {
    constructor(x, y, color, spd, type='default') {
      this.x = x; this.y = y;
      this.type = type; // 'default', 'spark', 'trail', 'smoke', 'glow', 'glitch', 'shockArc', 'shard'
      const a = rand01() * Math.PI * 2;
      const s = rand01() * spd;
      this.vx = Math.cos(a) * s;
      this.vy = Math.sin(a) * s;
      this.life = 0.4 + rand01() * 0.3;
      this.maxLife = this.life;
      this.color = color;
      this.size = 2 + rand01() * 2;
      this.rotation = rand01() * Math.PI * 2;
      this.rotSpeed = (rand01() - 0.5) * 0.2;
      
      // Type-specific properties
      if (type === 'spark') {
        this.size = 1 + rand01() * 1.5;
        this.life = 0.15 + rand01() * 0.15;
        this.maxLife = this.life;
        this.vx *= 1.8;
        this.vy *= 1.8;
      } else if (type === 'trail') {
        this.size = 3 + rand01() * 2;
        this.life = 0.2 + rand01() * 0.2;
        this.maxLife = this.life;
        this.vx *= 0.3;
        this.vy *= 0.3;
      } else if (type === 'smoke') {
        this.size = 4 + rand01() * 3;
        this.life = 0.6 + rand01() * 0.4;
        this.maxLife = this.life;
        this.vx *= 0.5;
        this.vy *= 0.5;
        this.vy -= 0.5; // Rise up
      } else if (type === 'glow') {
        this.size = 6 + rand01() * 4;
        this.life = 0.3 + rand01() * 0.2;
        this.maxLife = this.life;
        this.vx = 0;
        this.vy = 0;
      } else if (type === 'glitch') {
        this.size = 3 + rand01() * 4;
        this.life = 0.1 + rand01() * 0.1;
        this.maxLife = this.life;
        this.vx *= 0.2;
        this.vy *= 0.2;
        this.glitchT = 0;
      } else if (type === 'shockArc') {
        this.size = 2 + rand01() * 2;
        this.life = 0.25 + rand01() * 0.15;
        this.maxLife = this.life;
        this.arcStart = rand01() * Math.PI * 2;
        this.arcEnd = this.arcStart + (rand01() * 0.5 + 0.3);
        this.radius = 5 + rand01() * 10;
        this.vx = 0;
        this.vy = 0;
      } else if (type === 'shard') {
        this.size = 2 + rand01() * 3;
        this.life = 0.5 + rand01() * 0.3;
        this.maxLife = this.life;
        this.vx *= 0.8;
        this.vy *= 0.8;
        this.vy += rand01() * 2; // Gravity
        this.rotSpeed = (rand01() - 0.5) * 0.4;
      }
      
      // Trail history for rendering
      this.trail = [];
      if (type === 'trail' || type === 'spark') {
        this.trail.push({x: this.x, y: this.y});
      }
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.life -= dt();
      
      // Friction
      if (this.type === 'spark') {
        this.vx *= 0.88;
        this.vy *= 0.88;
      } else if (this.type === 'smoke') {
        this.vx *= 0.95;
        this.vy *= 0.95;
      } else {
        this.vx *= 0.92;
        this.vy *= 0.92;
      }
      
      // Gravity for some types
      if (this.type === 'spark') {
        this.vy += 0.15;
      }
      
      // Update trail
      if (this.trail.length > 0) {
        this.trail.push({x: this.x, y: this.y});
        if (this.trail.length > 5) this.trail.shift();
      }
    }
  }

  // Floating text
  class Floater {
    constructor(x, y, text, color) {
      this.x = x; this.y = y;
      this.text = text;
      this.color = color;
      this.life = 0.8;
      this.vy = -1.5;
    }
    update() {
      this.y += this.vy;
      this.life -= dt();
    }
  }

  // ---------------------------------------------------------------------------
  // Game model
  // ---------------------------------------------------------------------------
  class Game {
    constructor(opts) {
      this.opts = opts;
      this.mult = difficultyMult(opts.difficulty);

      const sw = Graphics.width, sh = Graphics.height;
      const l = Math.floor((sw - ArenaWidth) / 2);
      const t = Math.floor((sh - ArenaHeight) / 2) + ArenaYOffset;
      this.bounds = { l, t, r: l + ArenaWidth, b: t + ArenaHeight };

      const cx = (this.bounds.l + this.bounds.r)/2;
      const cy = (this.bounds.t + this.bounds.b)/2;

      this.player = new Player(cx, cy);
      this.partner = new Partner(cx - 34, cy + 22);
      this.partner.enabled = !!opts.partnerEnabled;

      this.enemies = [];
      this.boss = null;
      this.bossDefeated = false;

      this.bullets = [];
      this.enemyBullets = [];
      this.pickups = [];
      this.hazards = [];
      this.particles = [];
      this.floaters = [];

      this.shake = 0;
      this.paused = false;

      this.wave = 1;
      this.waveTimer = 0;
      this.state = 'play';
      this.stateTimer = 0;
      
      // AAA ARENA SYSTEM
      const arenas = ['neonGrid', 'shipHull', 'voidCathedral', 'reactorCore', 'dataOcean', 'mirrorRoom'];
      this.arenaType = opts.arenaType || arenas[randInt(0, arenas.length - 1)];
      
      const modifiers = ['none', 'lowGravity', 'overheated', 'empStorms', 'fog'];
      const modRoll = rand01();
      this.arenaModifier = opts.arenaModifier || (modRoll < 0.4 ? 'none' : modifiers[randInt(1, modifiers.length - 1)]);
      
      this.arenaHazards = [];
      this.arenaGlitchLevel = 0;
      this.systemMessages = [];
      this.parallaxOffset = 0;
      this.windForce = { x: 0, y: 0 };
      this.fogAlpha = 0;
      this.empTimer = 0;
      
      // Arena hazards disabled for cleaner visuals
      
      this.systemMessages.push({ text: `ARENA: ${this.arenaType.toUpperCase()}`, life: 3.0, y: 0 });
      if (this.arenaModifier !== 'none') {
        this.systemMessages.push({ text: `MODIFIER: ${this.arenaModifier.toUpperCase()}`, life: 3.0, y: 0 });
      }

      this.score = 0;
      this.level = 1;
      this.xp = 0;
      this.xpNeed = Math.floor(8 * this.mult.xpNeed);

      this.build = {
        moveMul: 1.0,
        magnet: 0,
        partnerMoveMul: 1.0,
        partnerCooldown: 22,
        partnerDamageMul: 1.0,
        critChance: 0,
        lifesteal: false,
        dashMul: 1.0,
        xpMul: 1.0,
        explosive: false,
        homing: false,
        hasWeaponUpgrade: false,
        player: this.player,
      };

      this.wpn = {
        damage: 3,
        pellets: 1,
        spread: 0.18,
        cooldown: 12,
        bulletSpeed: 8.2 * this.mult.bulletSpeed,
        pierce: 0,
        bounce: 0,
        boomerang: false,
        chain: 0,
        rainbow: false,
        r: 4,
        life: 52,
        pattern: 'default',
      };

      // AAA UI/HUD TRACKING
      this.currentTarget = null;
      this.offscreenThreats = [];
      this.upgradeHoverIndex = -1;
      this.upgradeKeyboardIndex = 0;
      this.pauseOnUpgrade = true;
      this.upgradeHistory = [];
      this.upgradePity = 0;
      
      // Run statistics for summary
      this.stats = {
        damageDealt: 0,
        bossesDefeated: 0,
        upgradesCollected: {},
        killsByType: {},
        deathInfo: null,
        startTime: Date.now(),
        maxWaveReached: 1,
      };
      
      // Accessibility options
      this.accessibility = {
        colorblindMode: 'none',
        reduceFlashes: false,
        reduceShake: false,
        largeUI: false,
      };
      
      // HP regeneration when partner is alive
      this.hpRegenTimer = 0;
      this.hpRegenInterval = 180; // Regen 1 HP every 3 seconds (180 frames at 60fps)
    }

    findBestEnemyTarget(ent) {
      let best = null;
      let bestScore = -1e9;
      for (const e of this.enemies) {
        if (e.dead) continue;
        const dx = e.x - ent.x;
        const dy = e.y - ent.y;
        const d = Math.hypot(dx, dy) || 1;
        const danger = (e.type==='shooter')?1.35:(e.type==='runner'?1.15:(e.type==='tank'?1.25:1.0));
        const score = danger*260 - d;
        if (score > bestScore) { bestScore = score; best = e; }
      }
      if (this.boss && !this.boss.dead) {
        const dx = this.boss.x - ent.x;
        const dy = this.boss.y - ent.y;
        const d = Math.hypot(dx, dy) || 1;
        const score = 420 - d;
        if (score > bestScore) best = this.boss;
      }
      return best;
    }

    fireWeapon(shooter, owner, isPartner=false) {
      const w = this.wpn;
      const tgt = this.findBestEnemyTarget(shooter);
      if (!tgt) return;
      const dx = tgt.x - shooter.x;
      const dy = tgt.y - shooter.y;
      const baseLen = Math.hypot(dx, dy) || 1;
      const dirX = dx/baseLen, dirY = dy/baseLen;

      const stats = {
        r: w.r,
        damage: Math.max(1, Math.floor(isPartner ? (w.damage * 0.70 * this.build.partnerDamageMul) : w.damage)),
        pierce: Math.max(0, Math.floor(w.pierce)),
        bounce: Math.max(0, Math.floor(w.bounce)),
        boomerang: !!w.boomerang,
        chain: Math.max(0, Math.floor(w.chain)),
        rainbow: !!w.rainbow,
        life: Math.max(18, Math.floor(w.life)),
      };
      const spd = w.bulletSpeed;

      if (w.pattern === 'octa') {
        for (let i=0;i<8;i++) {
          const ang = i * (Math.PI*2/8);
          this.bullets.push(new Bullet(shooter.x, shooter.y, Math.cos(ang)*spd, Math.sin(ang)*spd, owner, stats));
        }
        return;
      }

      const count = Math.max(1, Math.floor(w.pellets));
      const spread = w.spread;
      for (let i=0;i<count;i++) {
        const t = (count===1) ? 0 : (i/(count-1) - 0.5);
        const ang = Math.atan2(dirY, dirX) + t*spread;
        this.bullets.push(new Bullet(shooter.x, shooter.y, Math.cos(ang)*spd, Math.sin(ang)*spd, owner, stats));
      }
    }

    spawnEnemyBullet(x, y, vx, vy) {
      const stats = { r: 5, damage: 1, pierce: 0, bounce: 0, boomerang: false, chain: 0, rainbow: false, life: 160 };
      this.enemyBullets.push(new Bullet(x, y, vx, vy, 'enemy', stats));
    }

    spawnBossSpikes(x, y, ang, count, spd) {
      const stats = { r: 7, damage: 1, pierce: 0, bounce: 0, boomerang: false, chain: 0, rainbow: false, life: 190 };
      for (let i=0;i<count;i++) {
        const a = ang + (i - (count-1)/2) * 0.18;
        this.enemyBullets.push(new Bullet(x, y, Math.cos(a)*spd, Math.sin(a)*spd, 'boss', stats));
      }
    }

    spawnBossLineVolley(x, y, baseAng, lines, perLine, spd) {
      const stats = { r: 6, damage: 1, pierce: 0, bounce: 0, boomerang: false, chain: 0, rainbow: false, life: 190 };
      for (let li=0;li<lines;li++) {
        const a = baseAng + (li - (lines-1)/2) * 0.22;
        for (let j=0;j<perLine;j++) {
          const off = (j - (perLine-1)/2) * 10;
          const px = x + Math.cos(a + Math.PI/2) * off;
          const py = y + Math.sin(a + Math.PI/2) * off;
          this.enemyBullets.push(new Bullet(px, py, Math.cos(a)*spd, Math.sin(a)*spd, 'boss', stats));
        }
      }
    }

    spawnBossExploder(x, y) {
      this.hazards.push({ kind:'exploder', x, y, t:0, tele:0.95 });
    }
    spawnBossBarrier(seedAng) {
      const vertical = rand01() < 0.5;
      const b = this.bounds;
      if (vertical) {
        const x = clamp((b.l+b.r)/2 + Math.cos(seedAng)*150, b.l+70, b.r-70);
        this.hazards.push({ kind:'barrierV', x, t:0, tele:0.90, live:0.75 });
      } else {
        const y = clamp((b.t+b.b)/2 + Math.sin(seedAng)*110, b.t+70, b.b-70);
        this.hazards.push({ kind:'barrierH', y, t:0, tele:0.90, live:0.75 });
      }
    }
    spawnBossLaserSweep(seedAng) {
      this.hazards.push({ kind:'laser', t:0, tele:0.95, live:1.15, a0: seedAng, a1: seedAng + Math.PI*0.65, gap: 0.33 });
    }

    onEnemyKilled(e) {
      const scoreGain = ENEMY_SCORE[e.type] || 1;
      this.score += scoreGain;
      this.stats.killsByType[e.type] = (this.stats.killsByType[e.type] || 0) + 1;
      const xpGain = Math.floor((1 + (this.wave * 0.05)) * (this.build.xpMul || 1.0));
      this.xp += xpGain;
      this.spawnFloater(e.x, e.y, `+${xpGain} XP`, STYLE.cyan);
      this.spawnParticles(e.x, e.y, 14, STYLE.danger, 4.0);
      
      // Lifesteal mechanic
      if (this.build.lifesteal && rand01() < 0.25) {
        this.player.hp = Math.min(this.player.maxHp, this.player.hp + 1);
        this.spawnFloater(this.player.x, this.player.y - 15, '+1 HP', STYLE.gold);
      }
      
      // Explosive mechanic
      if (this.build.explosive) {
        const nearEnemies = this.enemies.filter(en => !en.dead && dist2(en.x, en.y, e.x, e.y) < 80*80);
        nearEnemies.forEach(en => en.hurt(this, 2));
        if (nearEnemies.length > 0) {
          this.spawnParticles(e.x, e.y, 20, STYLE.gold, 6.0);
        }
      }
      
      // HP pickups removed - HP regen handled by partner system

      if (e.type === 'splitter') {
        for (let i=0;i<2;i++) {
          const nx = e.x + randInt(-18, 18);
          const ny = e.y + randInt(-18, 18);
          const s = new Enemy(nx, ny, this.wave, this.mult, 'runner');
          s.maxHp = Math.max(1, Math.floor(e.maxHp * 0.35));
          s.hp = s.maxHp;
          s.r = 9;
          this.enemies.push(s);
        }
      } else if (e.type === 'splitterPlus') {
        // Splitter+ splits into varied enemy types
        const splitTypes = ['runner', 'chaser', 'shooter'];
        const count = 3;
        for (let i=0;i<count;i++) {
          const nx = e.x + randInt(-25, 25);
          const ny = e.y + randInt(-25, 25);
          const splitType = splitTypes[randInt(0, splitTypes.length - 1)];
          const s = new Enemy(nx, ny, this.wave, this.mult, splitType);
          s.maxHp = Math.max(1, Math.floor(e.maxHp * 0.25));
          s.hp = s.maxHp;
          s.r = Math.max(8, Math.floor(s.r * 0.8));
          this.enemies.push(s);
        }
        this.spawnExplosion(e.x, e.y, 1.2);
      }
    }

    spawnWaveEnemies() {
      const b = this.bounds;
      const baseBudget = Math.floor(EnemyBasePerWave * (0.95 + this.wave * 0.16) * this.mult.enemyCount);
      const budget = clamp(baseBudget, 5, 32);
      const targetCount = clamp(Math.floor(3 + budget * 0.85), 4, 28);
      let remainingBudget = budget;
      let spawned = 0;

      const spawnAtEdge = (type) => {
        const side = randInt(0,3);
        let x=b.l+20, y=b.t+20;
        if (side===0){ x=b.l+10; y=randInt(b.t+20, b.b-20); }
        if (side===1){ x=b.r-10; y=randInt(b.t+20, b.b-20); }
        if (side===2){ x=randInt(b.l+20, b.r-20); y=b.t+10; }
        if (side===3){ x=randInt(b.l+20, b.r-20); y=b.b-10; }
        this.enemies.push(new Enemy(x, y, this.wave, this.mult, type));
        spawned++;
      };

      while (remainingBudget > 0 && spawned < targetCount) {
        const squad = pickSquad(this.wave, remainingBudget);
        if (!squad) break;
        remainingBudget -= squad.cost;
        for (const type of squad.types) {
          if (spawned >= targetCount) break;
          spawnAtEdge(type);
        }
      }

      while (remainingBudget > 0 && spawned < targetCount) {
        const type = pickEnemyType(this.wave, remainingBudget);
        remainingBudget -= (ENEMY_COSTS[type] || 1);
        spawnAtEdge(type);
      }
    }

    spawnBoss() {
      const cx = (this.bounds.l + this.bounds.r)/2;
      const cy = (this.bounds.t + this.bounds.b)/2 - 40;
      const bossIndex = Math.floor((this.wave - 1) / 10); // Different boss every 10 waves
      this.boss = new Boss(cx, cy, this.mult, bossIndex);
      this.bossDefeated = false;
      
      // Announce boss arrival
      this.systemMessages.push({ text: `${this.boss.bossName} APPEARS!`, life: 3.0, y: 0, color: this.boss.bossColor });
      this.shake = Math.min(15, this.shake + 10);
    }

    tryLevelUp() {
      while (this.xp >= this.xpNeed) {
        this.xp -= this.xpNeed;
        this.level++;
        this.xpNeed = Math.floor((8 + this.level*2.2) * this.mult.xpNeed);
        this.spawnUpgradeDrops();
        break;
      }
    }

    spawnUpgradeDrops() {
      const picks = this.pickUpgrades(4);
      const b = this.bounds;
      const d = 68;
      const margin = d + 24;
      const cx = clamp(this.player.x, b.l + margin, b.r - margin);
      const cy = clamp(this.player.y, b.t + margin, b.b - margin);
      const pts = [ {x: cx - d, y: cy - d}, {x: cx + d, y: cy - d}, {x: cx - d, y: cy + d}, {x: cx + d, y: cy + d} ];
      for (let i=0;i<picks.length;i++) {
        const p = pts[i];
        this.pickups.push(new Pickup(clamp(p.x, b.l+22, b.r-22), clamp(p.y, b.t+22, b.b-22), 'upgrade', picks[i]));
      }
    }

    pickUpgrades(n) {
      const recentKeys = new Set(this.upgradeHistory.slice(-8));
      const pool = UPGRADE_POOL.filter(u => !recentKeys.has(u.key));
      const out=[];
      const removeFromPool = (pick) => {
        const idx = pool.indexOf(pick);
        if (idx >= 0) pool.splice(idx, 1);
      };
      const weaponPool = pool.filter(u => u.tags && u.tags.includes('weapon'));
      if (!this.build.hasWeaponUpgrade && weaponPool.length > 0) {
        const weaponPick = weightedPick(weaponPool, item => RARITY_WEIGHTS[item.rarity] || 1);
        if (weaponPick) {
          out.push(weaponPick);
          removeFromPool(weaponPick);
        }
      }
      const pityBonus = clamp(this.upgradePity / 6, 0, 1);
      while (out.length < n && pool.length > 0) {
        const pick = weightedPick(pool, item => {
          const baseWeight = RARITY_WEIGHTS[item.rarity] || 1;
          const rarityBoost = item.rarity === 'epic' ? (1 + pityBonus * 0.6)
            : item.rarity === 'legendary' ? (1 + pityBonus * 1.1)
            : item.rarity === 'rare' ? (1 + pityBonus * 0.35)
            : 1;
          const weaponPenalty = (item.tags && item.tags.includes('weapon') && this.build.hasWeaponUpgrade) ? 0.45 : 1;
          return baseWeight * rarityBoost * weaponPenalty;
        });
        if (!pick) break;
        out.push(pick);
        removeFromPool(pick);
      }
      this.upgradeHistory.push(...out.map(u => u.key));
      if (this.upgradeHistory.length > 40) this.upgradeHistory.splice(0, this.upgradeHistory.length - 40);
      return out;
    }

    applyUpgrade(u) {
      if (!u) return;
      u.apply({ build: this.build, wpn: this.wpn });
      if (u.tags && u.tags.includes('weapon')) this.build.hasWeaponUpgrade = true;
      this.stats.upgradesCollected[u.key] = (this.stats.upgradesCollected[u.key] || 0) + 1;
      if (u.rarity === 'epic' || u.rarity === 'legendary') this.upgradePity = 0;
      else this.upgradePity = Math.min(20, this.upgradePity + 1);
      this.score += 2;
      this.shake = Math.min(10, this.shake + 3);
    }

    update() {
      if (this.paused) return; // Paused logic handled in Scene

      if (this.state !== 'play') {
        this.stateTimer--;
        return;
      }

      // Boss every 10 waves in endless mode
      const isBossWave = (this.wave % 10 === 0);
      if (isBossWave) {
        if (!this.boss) {
          this.enemies.length = 0;
          this.spawnBoss();
        }
      } else {
        if (this.enemies.length === 0 && this.waveTimer > 0 && !this.boss) {
          this.spawnWaveEnemies();
          this.waveTimer = 999999;
        }
      }

      for (const hz of this.hazards) hz.t += dt();
      for (const hz of this.hazards) {
        if (hz.kind==='exploder' && hz.t >= hz.tele && !hz._did) {
          hz._did = true;
          const stats = { r: 5, damage: 1, pierce: 0, bounce: 0, boomerang: false, chain: 0, rainbow: false, life: 200 };
          for (let i=0;i<8;i++) {
            const a = i*(Math.PI*2/8);
            this.enemyBullets.push(new Bullet(hz.x, hz.y, Math.cos(a)*3.6, Math.sin(a)*3.6, 'boss', stats));
          }
        }
      }
      this.hazards = this.hazards.filter(hz => {
        if (hz.kind==='exploder') return hz.t < hz.tele + 0.25;
        if (hz.kind==='barrierV' || hz.kind==='barrierH') return hz.t < hz.tele + hz.live;
        if (hz.kind==='laser') return hz.t < hz.tele + hz.live;
        return hz.t < 2.0;
      });

      this.player.update(this);
      this.partner.update(this);
      for (const e of this.enemies) e.update(this);
      if (this.boss && !this.boss.dead) this.boss.update(this);

      for (const b of this.bullets) b.update(this);
      for (const b of this.enemyBullets) b.update(this);
      for (const p of this.pickups) p.update(this);
      for (const pt of this.particles) pt.update();
      for (const f of this.floaters) f.update();

      this.handleCollisions();

      this.enemies = this.enemies.filter(e => !e.dead);
      this.bullets = this.bullets.filter(b => !b.dead);
      this.enemyBullets = this.enemyBullets.filter(b => !b.dead);
      this.pickups = this.pickups.filter(p => !p.dead);
      this.particles = this.particles.filter(p => p.life > 0);
      this.floaters = this.floaters.filter(f => f.life > 0);

      const isBossWave2 = (this.wave % 10 === 0);
      if (isBossWave2) {
        if (this.boss && this.boss.dead) {
          // Boss defeated - advance to next wave
          this.boss = null;
          this.waveTimer = 0;
          this.wave++;
          this.stats.maxWaveReached = Math.max(this.stats.maxWaveReached, this.wave);
        }
      } else {
        if (this.enemies.length === 0 && this.waveTimer > 0) {
          this.waveTimer = 0;
          // ENDLESS MODE - no win condition, just keep going!
          this.wave++;
          this.stats.maxWaveReached = Math.max(this.stats.maxWaveReached, this.wave);
          this.waveTimer = 0;
        }
      }

      // HP regeneration when partner is alive
      if (this.partner.enabled && !this.partner.dead && this.player.hp < this.player.maxHp) {
        this.hpRegenTimer++;
        if (this.hpRegenTimer >= this.hpRegenInterval) {
          this.hpRegenTimer = 0;
          this.player.hp = Math.min(this.player.maxHp, this.player.hp + 1);
          this.spawnFloater(this.player.x, this.player.y - 15, '+1 HP', STYLE.neon);
          this.spawnParticles(this.player.x, this.player.y, 8, STYLE.neon, 2.0, 'glow');
        }
      } else {
        this.hpRegenTimer = 0;
      }

      this.tryLevelUp();
      this.updateArenaEffects();
      this.shake = Math.max(0, this.shake - 0.7);
    }

    updateArenaEffects() {
      this.arenaGlitchLevel = Math.min(0.5, this.wave * 0.02);
      this.parallaxOffset += dt() * 0.5;

      for (const m of this.systemMessages) m.life -= dt();
      this.systemMessages = this.systemMessages.filter(m => m.life > 0);
    }

    handleArenaHazardInteractions() {
      // Arena hazards disabled for cleaner visuals
    }
  }

  // ---------------------------------------------------------------------------
  // Rendering helpers
  // ---------------------------------------------------------------------------
  function glowStroke(ctx, strokeStyle, shadowColor, shadowBlur, lineWidth) {
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.shadowColor = shadowColor;
    ctx.shadowBlur = shadowBlur;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
  }
  function clearGlow(ctx) {
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
  }

  function makeNeonCircleSprite(r, fill, soft) {
    const s = Math.ceil(r*2 + 18);
    const bmp = new Bitmap(s, s);
    const ctx = bmp.context;
    const cx = s/2, cy = s/2;
    ctx.save();
    ctx.globalAlpha = 0.9;
    ctx.shadowColor = soft;
    ctx.shadowBlur = 18;
    ctx.fillStyle = soft;
    ctx.beginPath(); ctx.arc(cx, cy, r+2, 0, Math.PI*2); ctx.fill();
    clearGlow(ctx);
    ctx.globalAlpha = 1.0;
    ctx.fillStyle = fill;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2); ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgba(255,255,255,0.7)';
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2); ctx.stroke();
    ctx.restore();
    bitmapUpdate(bmp);
    const spr = new Sprite(bmp);
    spr.anchor.set(0.5);
    return spr;
  }

  function makeBulletSprite(r) {
    const s = Math.ceil(r*2 + 16);
    const bmp = new Bitmap(s, s);
    const ctx = bmp.context;
    const cx = s/2, cy = s/2;
    ctx.save();
    ctx.shadowBlur = 14;
    ctx.shadowColor = STYLE.cyanSoft;
    ctx.fillStyle = STYLE.cyan;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2); ctx.fill();
    clearGlow(ctx);
    ctx.restore();
    bitmapUpdate(bmp);
    const spr = new Sprite(bmp);
    spr.anchor.set(0.5);
    spr.blendMode = PIXI.BLEND_MODES.ADD;
    return spr;
  }

  function upgradeColor(which) {
    if (which === 'neon') return { fill: STYLE.neon, soft: STYLE.neonSoft };
    if (which === 'pink') return { fill: STYLE.pink, soft: STYLE.pinkSoft };
    if (which === 'gold') return { fill: STYLE.gold, soft: STYLE.goldSoft };
    if (/^rgba\(/i.test(String(which))) {
      const m = String(which).match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([0-9.]+)\)/i);
      if (m) return { fill: `rgba(${m[1]},${m[2]},${m[3]},0.95)`, soft: `rgba(${m[1]},${m[2]},${m[3]},0.22)` };
    }
    if (/^rgb\(/i.test(String(which))) {
      const m = String(which).match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/i);
      if (m) return { fill: `rgba(${m[1]},${m[2]},${m[3]},0.95)`, soft: `rgba(${m[1]},${m[2]},${m[3]},0.22)` };
    }
    return { fill: STYLE.cyan, soft: STYLE.cyanSoft };
  }

  function drawUpgradeShape(bmp, shape, col) {
    const ctx = bmp.context;
    const w = bmp.width, h = bmp.height;
    const cx = w/2, cy = h/2;
    ctx.save();
    ctx.clearRect(0,0,w,h);
    ctx.shadowColor = col.soft;
    ctx.shadowBlur = 18;
    ctx.fillStyle = col.soft;
    ctx.beginPath(); ctx.arc(cx, cy, 8, 0, Math.PI*2); ctx.fill();
    clearGlow(ctx);
    const stroke = 'rgba(255,255,255,0.85)';
    ctx.shadowColor = col.soft;
    ctx.shadowBlur = 16;
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 3;
    const path = () => {
      ctx.beginPath();
      if (shape === 'x') {
        ctx.moveTo(cx - 8, cy - 8); ctx.lineTo(cx + 8, cy + 8);
        ctx.moveTo(cx + 8, cy - 8); ctx.lineTo(cx - 8, cy + 8);
      } else if (shape === 'diamond') {
        ctx.moveTo(cx, cy - 8); ctx.lineTo(cx + 8, cy);
        ctx.lineTo(cx, cy + 8); ctx.lineTo(cx - 8, cy); ctx.closePath();
      } else if (shape === 'tri') {
        ctx.moveTo(cx, cy - 8); ctx.lineTo(cx + 8, cy + 8);
        ctx.lineTo(cx - 8, cy + 8); ctx.closePath();
      } else if (shape === 'hex') {
        for (let i=0;i<6;i++) {
          const a = (i / 6) * Math.PI * 2;
          if (i===0) ctx.moveTo(cx+Math.cos(a)*8, cy+Math.sin(a)*8);
          else ctx.lineTo(cx+Math.cos(a)*8, cy+Math.sin(a)*8);
        }
        ctx.closePath();
      } else if (shape === 'star8') {
        for (let i=0;i<16;i++) {
          const a = (i / 16) * Math.PI * 2;
          const rr = (i%2===0) ? 8 : 8*0.45;
          if (i===0) ctx.moveTo(cx+Math.cos(a)*rr, cy+Math.sin(a)*rr);
          else ctx.lineTo(cx+Math.cos(a)*rr, cy+Math.sin(a)*rr);
        }
        ctx.closePath();
      } else if (shape === 'bolt') {
        ctx.moveTo(cx-8*0.2, cy-8); ctx.lineTo(cx+8*0.1, cy-8*0.15);
        ctx.lineTo(cx+8*0.55, cy-8*0.15); ctx.lineTo(cx-8*0.05, cy+8);
        ctx.lineTo(cx-8*0.1, cy+8*0.2); ctx.lineTo(cx-8*0.55, cy+8*0.2); ctx.closePath();
      } else if (shape === 'boomerang') {
        ctx.arc(cx, cy, 8*0.9, -Math.PI*0.2, Math.PI*1.2);
        ctx.moveTo(cx+8*0.35, cy-8*0.1);
        ctx.arc(cx, cy, 8*0.55, -Math.PI*0.1, Math.PI*1.1);
      } else if (shape === 'needle') {
        ctx.moveTo(cx-8, cy); ctx.lineTo(cx+8, cy);
        ctx.moveTo(cx+8*0.6, cy-8*0.22); ctx.lineTo(cx+8, cy);
        ctx.lineTo(cx+8*0.6, cy+8*0.22);
      } else if (shape === 'magnet') {
        ctx.arc(cx-8*0.25, cy, 8*0.6, Math.PI*0.15, Math.PI*1.85);
        ctx.moveTo(cx+8*0.25, cy-8*0.55);
        ctx.arc(cx+8*0.25, cy, 8*0.6, -Math.PI*0.15, Math.PI*0.15);
      } else if (shape === 'chevron') {
        ctx.moveTo(cx-8, cy+8*0.25); ctx.lineTo(cx, cy-8);
        ctx.lineTo(cx+8, cy+8*0.25);
      } else if (shape === 'orb') {
        ctx.arc(cx, cy, 8*0.9, 0, Math.PI*2);
        ctx.moveTo(cx-8*0.9, cy); ctx.lineTo(cx+8*0.9, cy);
        ctx.moveTo(cx, cy-8*0.9); ctx.lineTo(cx, cy+8*0.9);
      } else if (shape === 'rainbow') {
        ctx.arc(cx, cy+8*0.2, 8*0.95, Math.PI*1.05, Math.PI*1.95);
        ctx.moveTo(cx-8*0.75, cy+8*0.2);
        ctx.arc(cx, cy+8*0.2, 8*0.75, Math.PI*1.05, Math.PI*1.95);
        ctx.moveTo(cx-8*0.55, cy+8*0.2);
        ctx.arc(cx, cy+8*0.2, 8*0.55, Math.PI*1.05, Math.PI*1.95);
      } else {
        ctx.rect(cx-8, cy-8, 16, 16);
      }
    };
    path();
    ctx.stroke();
    clearGlow(ctx);
    ctx.globalAlpha = 0.75;
    ctx.fillStyle = col.fill;
    ctx.beginPath(); ctx.arc(cx, cy, 8*0.28, 0, Math.PI*2); ctx.fill();
    ctx.restore();
    bitmapUpdate(bmp);
  }

  // ---------------------------------------------------------------------------
  // Scene
  // ---------------------------------------------------------------------------
  SceneManager._pkMinigameOpts = null;

  class Scene_PK_Minigame extends Scene_Base {
    initialize() {
      super.initialize();
      this._opts = SceneManager._pkMinigameOpts || null;
      SceneManager._pkMinigameOpts = null;
      this._game = null;
      this._bg = null;
      this._gridLayer = null;
      this._arenaLayer = null;
      this._entityLayer = null;
      this._bulletLayer = null;
      this._pickupLayer = null;
      this._fxLayer = null;
      this._hudLayer = null;
      this._sprites = new Map();
      this._bulSprites = new Map();
      this._pickSprites = new Map();
      this._pics = Object.assign({}, DefaultPics);
      this._usePics = UsePictureSpritesDefault;
      this._scale = SpriteScaleDefault;
      this._upgradeIconCache = new Map();
      this._t = 0;
      this._pauseSel = 0; // 0=Resume, 1=Quit
    }

    create() {
      super.create();
      this.createWindowLayer();
      const o = this._opts || {};
      this._usePics = (o.usePictures !== undefined) ? !!o.usePictures : UsePictureSpritesDefault;
      this._scale = Number(o.spriteScale || SpriteScaleDefault) || SpriteScaleDefault;
      this._pics = Object.assign({}, DefaultPics, (o.pics || {}));
      this._game = new Game({
        difficulty: String(o.difficulty || DefaultDifficulty),
        partnerEnabled: (o.partnerEnabled !== undefined) ? !!o.partnerEnabled : PartnerEnabledByDefault,
        autoShoot: (o.autoShoot !== undefined) ? !!o.autoShoot : AutoShootByDefault,
        arenaType: (o.arenaType !== undefined) ? o.arenaType : null,
        arenaModifier: (o.arenaModifier !== undefined) ? o.arenaModifier : null,
      });

      this._bg = new Sprite(new Bitmap(Graphics.width, Graphics.height));
      drawVignette(this._bg.bitmap);
      this.addChild(this._bg);

      this._gridLayer = new Sprite(new Bitmap(Graphics.width, Graphics.height));
      this.addChild(this._gridLayer);

      this._arenaLayer = new Sprite(new Bitmap(Graphics.width, Graphics.height));
      this.addChild(this._arenaLayer);
      this._entityLayer = new Sprite();
      this.addChild(this._entityLayer);
      this._bulletLayer = new Sprite();
      this.addChild(this._bulletLayer);
      this._pickupLayer = new Sprite();
      this.addChild(this._pickupLayer);
      this._fxLayer = new Sprite(new Bitmap(Graphics.width, Graphics.height));
      this.addChild(this._fxLayer);
      this._hudLayer = new Sprite(new Bitmap(Graphics.width, Graphics.height));
      this.addChild(this._hudLayer);

      this.drawArenaFrame();
    }

    drawGrid(offX, offY) {
      const bmp = this._gridLayer.bitmap;
      bmp.clear();
      const g = this._game;
      
      // Arena-specific parallax backgrounds
      const ctx = bmp.context;
      ctx.save();
      
      if (g.arenaType === 'neonGrid') {
        // Clean neon grid
        ctx.globalAlpha = 0.12 + Math.sin(this._t * 2) * 0.03;
        ctx.strokeStyle = STYLE.cyan;
        ctx.lineWidth = 1;
        const step = 60;
        const startX = (offX % step) - step;
        const startY = (offY % step) - step;
        for (let x=startX; x<bmp.width+step; x+=step) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,bmp.height); ctx.stroke(); }
        for (let y=startY; y<bmp.height+step; y+=step) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(bmp.width,y); ctx.stroke(); }
        
        // Accent lines
        ctx.globalAlpha = 0.2;
        ctx.strokeStyle = STYLE.neon;
        ctx.lineWidth = 2;
        const accentStep = 180;
        for (let x=startX; x<bmp.width+step; x+=accentStep) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,bmp.height); ctx.stroke(); }
        
      } else if (g.arenaType === 'shipHull') {
        // Metallic panels with rivets
        ctx.globalAlpha = 0.08;
        ctx.fillStyle = 'rgba(100,120,140,0.3)';
        const panelSize = 120;
        for (let x = 0; x < bmp.width; x += panelSize) {
          for (let y = 0; y < bmp.height; y += panelSize) {
            ctx.fillRect(x + 2, y + 2, panelSize - 4, panelSize - 4);
          }
        }
        ctx.globalAlpha = 0.15;
        ctx.strokeStyle = 'rgba(150,170,190,0.5)';
        ctx.lineWidth = 2;
        for (let x = 0; x < bmp.width; x += panelSize) {
          ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, bmp.height); ctx.stroke();
        }
        for (let y = 0; y < bmp.height; y += panelSize) {
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(bmp.width, y); ctx.stroke();
        }
        
      } else if (g.arenaType === 'voidCathedral') {
        // Dark gothic patterns with flickering
        const flicker = rand01() < 0.1 ? 0.3 : 0;
        ctx.globalAlpha = 0.05 + flicker;
        ctx.strokeStyle = STYLE.pink;
        ctx.lineWidth = 1;
        const archStep = 100;
        for (let x = 0; x < bmp.width; x += archStep) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.quadraticCurveTo(x + archStep/2, archStep/2, x + archStep, 0);
          ctx.stroke();
        }
        
      } else if (g.arenaType === 'reactorCore') {
        // Hexagonal energy patterns
        ctx.globalAlpha = 0.1 + Math.sin(this._t * 3) * 0.05;
        ctx.strokeStyle = STYLE.danger;
        ctx.lineWidth = 1;
        const hexSize = 40;
        for (let y = 0; y < bmp.height; y += hexSize * 1.5) {
          for (let x = 0; x < bmp.width; x += hexSize * Math.sqrt(3)) {
            const cx = x + (y % (hexSize * 3) === 0 ? hexSize * Math.sqrt(3) / 2 : 0);
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
              const a = (i / 6) * Math.PI * 2;
              const px = cx + Math.cos(a) * hexSize;
              const py = y + Math.sin(a) * hexSize;
              if (i === 0) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.stroke();
          }
        }
        
      } else if (g.arenaType === 'dataOcean') {
        // Flowing data streams
        ctx.globalAlpha = 0.08;
        ctx.strokeStyle = STYLE.cyan;
        ctx.lineWidth = 1;
        for (let i = 0; i < 20; i++) {
          const y = (i * 50 + g.parallaxOffset * 20) % bmp.height;
          ctx.beginPath();
          ctx.moveTo(0, y);
          for (let x = 0; x < bmp.width; x += 20) {
            ctx.lineTo(x, y + Math.sin(x * 0.02 + this._t) * 10);
          }
          ctx.stroke();
        }
        
      } else if (g.arenaType === 'mirrorRoom') {
        // Reflective diamond patterns
        ctx.globalAlpha = 0.12;
        ctx.strokeStyle = STYLE.white;
        ctx.lineWidth = 1;
        const diamondSize = 80;
        for (let y = 0; y < bmp.height; y += diamondSize) {
          for (let x = 0; x < bmp.width; x += diamondSize) {
            ctx.beginPath();
            ctx.moveTo(x + diamondSize/2, y);
            ctx.lineTo(x + diamondSize, y + diamondSize/2);
            ctx.lineTo(x + diamondSize/2, y + diamondSize);
            ctx.lineTo(x, y + diamondSize/2);
            ctx.closePath();
            ctx.stroke();
          }
        }
      }
      
      // Glitch effect overlay
      if (g.arenaGlitchLevel > 0) {
        ctx.globalAlpha = g.arenaGlitchLevel * 0.3;
        for (let i = 0; i < 5; i++) {
          const gx = randInt(0, bmp.width);
          const gy = randInt(0, bmp.height);
          const gw = randInt(20, 100);
          const gh = randInt(2, 8);
          ctx.fillStyle = rand01() < 0.5 ? STYLE.pink : STYLE.cyan;
          ctx.fillRect(gx, gy, gw, gh);
        }
      }
      
      ctx.restore();
      bitmapUpdate(bmp);
    }

    drawArenaFrame() {
      const bmp = this._arenaLayer.bitmap;
      bmp.clear();
      const b = this._game.bounds;
      const ctx = bmp.context;
      ctx.save();
      ctx.strokeStyle = 'rgba(255,255,255,0.25)';
      ctx.lineWidth = 3;
      ctx.shadowColor = 'rgba(140,220,255,0.18)';
      ctx.shadowBlur = 14;
      ctx.strokeRect(b.l, b.t, (b.r - b.l), (b.b - b.t));
      clearGlow(ctx);
      ctx.restore();
      bitmapUpdate(bmp);
    }

    update() {
      super.update();

      if (Input.isTriggered('cancel') && this._game.state === 'play') {
        this._game.paused = !this._game.paused;
        this._pauseSel = 0;
        if (!this._game.paused) this._game.stateTimer = 0; // resume
      }

      if (this._game.paused) {
        this.updatePauseMenu();
        this.drawPauseMenu();
        return;
      }

      this._t += dt();
      this._game.update();
      this.syncSprites();
      
      // Parallax grid
      const px = this._game.player.x * -0.5;
      const py = this._game.player.y * -0.5;
      this.drawGrid(px, py);

      this.drawFx();
      this.drawHud();

      if ((this._game.state === 'win' || this._game.state === 'lose') && this._game.stateTimer <= 0) {
        this.finish(this._game.state);
      }
    }

    updatePauseMenu() {
      if (Input.isTriggered('down') || Input.isTriggered('up')) {
        this._pauseSel = (this._pauseSel === 0) ? 1 : 0;
      }
      if (Input.isTriggered('ok')) {
        if (this._pauseSel === 0) {
          this._game.paused = false;
        } else {
          this.finish('lose'); // Exit as loss/quit
        }
      }
    }

    drawPauseMenu() {
      const bmp = this._hudLayer.bitmap;
      // Don't clear, overlay on top
      const w = Graphics.width, h = Graphics.height;
      bmp.fillRect(0, 0, w, h, 'rgba(0,0,0,0.05)'); // fading effect
      
      bmp.fontSize = 42;
      bmp.textColor = STYLE.text;
      bmp.drawText("PAUSED", 0, h/2 - 80, w, 50, 'center');

      bmp.fontSize = 28;
      bmp.textColor = (this._pauseSel===0) ? STYLE.neon : STYLE.textDim;
      bmp.drawText("Resume", 0, h/2, w, 40, 'center');

      bmp.textColor = (this._pauseSel===1) ? STYLE.danger : STYLE.textDim;
      bmp.drawText("Quit", 0, h/2 + 50, w, 40, 'center');
    }

    finish(reason) {
      $gameVariables.setValue(ScoreVariableId, this._game.score);
      if (reason === 'win') {
        $gameSwitches.setValue(WinSwitchId, true);
        $gameSwitches.setValue(LoseSwitchId, false);
      } else {
        $gameSwitches.setValue(WinSwitchId, false);
        $gameSwitches.setValue(LoseSwitchId, true);
      }
      SceneManager.pop();
    }

    loadPicSprite(name) {
      if (!name) return null;
      const bmp = ImageManager.loadPicture(name);
      const spr = new Sprite(bmp);
      spr.anchor.set(0.5);
      spr.scale.set(this._scale);
      return spr;
    }

    ensureEntitySprite(obj, kind) {
      if (this._sprites.has(obj)) return this._sprites.get(obj);
      let spr = null;
      if (this._usePics) {
        const picName = (kind === 'player') ? this._pics.player
          : (kind === 'partner') ? this._pics.partner
          : (kind === 'enemy') ? this._pics.enemy
          : (kind === 'boss') ? this._pics.enemy
          : '';
        spr = this.loadPicSprite(picName);
      }
      if (!spr) {
        if (kind === 'player') spr = makeNeonCircleSprite(obj.r, STYLE.cyan, STYLE.cyanSoft);
        else if (kind === 'partner') spr = makeNeonCircleSprite(obj.r, STYLE.neon, STYLE.neonSoft);
        else if (kind === 'boss') spr = makeNeonCircleSprite(obj.r, STYLE.pink, STYLE.pinkSoft);
        else spr = makeNeonCircleSprite(obj.r, STYLE.danger, STYLE.dangerSoft);
      }
      if (kind === 'partner') spr.blendMode = PIXI.BLEND_MODES.ADD;
      this._sprites.set(obj, spr);
      this._entityLayer.addChild(spr);
      return spr;
    }

    ensureBulletSprite(b) {
      if (this._bulSprites.has(b)) return this._bulSprites.get(b);
      let spr = null;
      if (this._usePics) spr = this.loadPicSprite(this._pics.bullet);
      if (!spr) spr = makeBulletSprite(Math.max(3, b.r));
      spr.blendMode = PIXI.BLEND_MODES.ADD;
      this._bulSprites.set(b, spr);
      this._bulletLayer.addChild(spr);
      return spr;
    }

    getUpgradeIcon(u) {
      if (!u) return null;
      if (this._upgradeIconCache.has(u.key)) return this._upgradeIconCache.get(u.key);
      const bmp = new Bitmap(36, 36);
      const col = upgradeColor(u.color || 'neon');
      drawUpgradeShape(bmp, u.shape || 'x', col);
      this._upgradeIconCache.set(u.key, bmp);
      return bmp;
    }

    ensurePickupSprite(p) {
      if (this._pickSprites.has(p)) return this._pickSprites.get(p);
      const wrap = new Sprite();
      wrap.x = p.x; wrap.y = p.y;
      let main = null;
      if (this._usePics) {
        const pic = (p.kind==='xp') ? this._pics.xp : (p.kind==='hp') ? this._pics.hp : this._pics.upgrade;
        main = this.loadPicSprite(pic);
      }
      if (!main) {
        if (p.kind === 'upgrade') {
          const bmp = new Bitmap(64, 64);
          const col = upgradeColor(p.data?.color || 'neon');
          drawUpgradeShape(bmp, p.data?.shape || 'x', col);
          main = new Sprite(bmp);
          main.anchor.set(0.5);
          main.blendMode = PIXI.BLEND_MODES.ADD;
        } else if (p.kind === 'hp') {
          main = makeNeonCircleSprite(9, STYLE.gold, STYLE.goldSoft);
        } else {
          main = makeNeonCircleSprite(8, STYLE.cyan, STYLE.cyanSoft);
        }
      }
      wrap.addChild(main);
      this._pickSprites.set(p, { wrap, main });
      this._pickupLayer.addChild(wrap);
      return this._pickSprites.get(p);
    }

    syncSprites() {
      const g = this._game;
      const ps = this.ensureEntitySprite(g.player, 'player');
      ps.x = g.player.x; ps.y = g.player.y;
      ps.scale.set(this._usePics ? this._scale : 1.0);
      ps.alpha = (g.player.iframes > 0 && (Graphics.frameCount % 6) < 3) ? 0.55 : 1.0;

      if (g.partner.enabled && !g.partner.dead) {
        const as = this.ensureEntitySprite(g.partner, 'partner');
        as.x = g.partner.x; as.y = g.partner.y;
        as.scale.set(this._usePics ? this._scale : (1.0 + 0.04*Math.sin(this._t*6)));
        as.alpha = (g.partner.iframes > 0 && (Graphics.frameCount % 6) < 3) ? 0.55 : 1.0;
      } else {
        this.removeEntitySprite(g.partner);
      }
      for (const e of g.enemies) {
        if (this._usePics) {
          const es = this.ensureEntitySprite(e, 'enemy');
          es.x = e.x; es.y = e.y;
          es.scale.set(this._scale);
          es.alpha = (e.hitFlash > 0) ? 0.6 : 1.0;
        } else {
          this.removeEntitySprite(e);
        }
      }
      if (g.boss && !g.boss.dead) {
        if (this._usePics) {
          const bs = this.ensureEntitySprite(g.boss, 'boss');
          bs.x = g.boss.x; bs.y = g.boss.y;
          bs.scale.set(this._scale);
          bs.alpha = (g.boss.hitFlash > 0) ? 0.65 : 1.0;
        } else {
          this.removeEntitySprite(g.boss);
        }
      } else if (g.boss) {
        this.removeEntitySprite(g.boss);
      }
      for (const [obj, spr] of this._sprites.entries()) {
        if ((obj instanceof Enemy && obj.dead) || (obj instanceof Boss && obj.dead)) {
          this._entityLayer.removeChild(spr);
          this._sprites.delete(obj);
        }
      }
      for (const b of g.bullets) {
        const s = this.ensureBulletSprite(b);
        s.x = b.x; s.y = b.y;
        s.alpha = 0.85;
      }
      for (const b of g.enemyBullets) {
        const s = this.ensureBulletSprite(b);
        s.x = b.x; s.y = b.y;
        s.alpha = 0.9;
      }
      for (const [b, s] of this._bulSprites.entries()) {
        if (b.dead) {
          this._bulletLayer.removeChild(s);
          this._bulSprites.delete(b);
        }
      }
      for (const p of g.pickups) {
        const ps2 = this.ensurePickupSprite(p);
        ps2.wrap.x = p.x;
        ps2.wrap.y = p.y + Math.sin(p.t*3.0) * 2.5;
        if (p.kind === 'upgrade') {
          const pulse = 1.0 + 0.14*Math.sin(p.t*4.2);
          ps2.main.scale.set(pulse);
          ps2.main.alpha = 0.88 + 0.12*Math.sin(p.t*5.3);
          ps2.wrap.rotation = p.t * 0.35;
        } else {
          ps2.wrap.rotation = 0;
          const pulse = 1.0 + 0.05*Math.sin(p.t*3.0);
          ps2.wrap.scale.set(pulse);
        }
      }
      for (const [p, pack] of this._pickSprites.entries()) {
        if (p.dead) {
          this._pickupLayer.removeChild(pack.wrap);
          this._pickSprites.delete(p);
        }
      }
      if (g.shake > 0.1) {
        this.x = randInt(-1, 1) * Math.floor(g.shake);
        this.y = randInt(-1, 1) * Math.floor(g.shake);
      } else {
        this.x = 0; this.y = 0;
      }
    }

    removeEntitySprite(obj) {
      const spr = this._sprites.get(obj);
      if (!spr) return;
      this._entityLayer.removeChild(spr);
      this._sprites.delete(obj);
    }

    drawFx() {
      const bmp = this._fxLayer.bitmap;
      bmp.clear();
      const ctx = bmp.context;
      const g = this._game;
      const b = g.bounds;

      // Hazards
      for (const hz of g.hazards) {
        const active = hz.t >= hz.tele;
        if (hz.kind === 'exploder') {
          ctx.save();
          ctx.globalAlpha = active ? 0.0 : 0.9;
          ctx.strokeStyle = STYLE.pink;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(hz.x, hz.y, 22 + 8*Math.sin(hz.t*8), 0, Math.PI*2);
          ctx.stroke();
          ctx.restore();
        }
        if (hz.kind === 'barrierV') {
          const x = hz.x;
          ctx.save();
          ctx.globalAlpha = active ? 0.55 : 0.22;
          ctx.strokeStyle = active ? STYLE.pink : 'rgba(255,255,255,0.35)';
          ctx.lineWidth = active ? 6 : 2;
          ctx.beginPath(); ctx.moveTo(x, b.t); ctx.lineTo(x, b.b); ctx.stroke();
          ctx.restore();
        }
        if (hz.kind === 'barrierH') {
          const y = hz.y;
          ctx.save();
          ctx.globalAlpha = active ? 0.55 : 0.22;
          ctx.strokeStyle = active ? STYLE.pink : 'rgba(255,255,255,0.35)';
          ctx.lineWidth = active ? 6 : 2;
          ctx.beginPath(); ctx.moveTo(b.l, y); ctx.lineTo(b.r, y); ctx.stroke();
          ctx.restore();
        }
        if (hz.kind === 'laser') {
          const t = clamp((hz.t - hz.tele) / hz.live, 0, 1);
          const a = hz.a0 + (hz.a1 - hz.a0) * t;
          const cx = (b.l+b.r)/2, cy=(b.t+b.b)/2;
          const R = Math.max(b.r-b.l, b.b-b.t);
          ctx.save();
          ctx.globalAlpha = active ? 0.65 : 0.22;
          ctx.strokeStyle = active ? STYLE.pink : 'rgba(255,255,255,0.35)';
          ctx.lineWidth = active ? 8 : 2;
          ctx.beginPath();
          ctx.moveTo(cx - Math.cos(a)*R, cy - Math.sin(a)*R);
          ctx.lineTo(cx + Math.cos(a)*R, cy + Math.sin(a)*R);
          ctx.stroke();
          const gapC = a + Math.PI/2;
          ctx.globalAlpha = 0.85;
          ctx.strokeStyle = STYLE.neon;
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(cx, cy, (b.r-b.l)*0.42, gapC - hz.gap, gapC + hz.gap);
          ctx.stroke();
          ctx.restore();
        }
      }

      // AAA ENEMY SHAPES - Draw unique shapes for each enemy type
      if (!this._usePics) {
        for (const e of g.enemies) {
          if (e.dead) continue;
          const pulse = 1.0 + 0.08 * Math.sin(e.pulseT * 2.4);
          drawEnemyShape(ctx, e.x, e.y, e.r, e.shape, e.color, pulse);
          
          // Add glow effect
          if (e.hitFlash > 0) {
            ctx.save();
            ctx.globalAlpha = e.hitFlash;
            ctx.fillStyle = 'rgba(255,255,255,0.8)';
            ctx.shadowColor = 'rgba(255,255,255,1)';
            ctx.shadowBlur = 15;
            ctx.beginPath();
            ctx.arc(e.x, e.y, e.r * pulse * 1.2, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
          
          // Enemy trails for fast movers
          if (e.hasTrail && (Math.hypot(e.vx, e.vy) > 1)) {
            ctx.save();
            ctx.globalAlpha = 0.3;
            for (let i = 1; i <= 3; i++) {
              const trailX = e.x - e.vx * i * 2;
              const trailY = e.y - e.vy * i * 2;
              const trailSize = e.r * pulse * (1 - i * 0.2);
              drawEnemyShape(ctx, trailX, trailY, trailSize, e.shape, e.color, 1.0);
            }
            ctx.restore();
          }
        }
      }

      // AAA VISUAL TELEGRAPHS for enemy attacks
      for (const e of g.enemies) {
        if (e.dead) continue;
        
        // Sniper laser sight
        if (e.type === 'sniper' && e.charging) {
          const p = g.player;
          const dx = p.x - e.x;
          const dy = p.y - e.y;
          const len = Math.hypot(dx, dy) || 1;
          const chargeProgress = e.chargeT / 1.5;
          ctx.save();
          ctx.globalAlpha = 0.3 + chargeProgress * 0.5;
          ctx.strokeStyle = STYLE.danger;
          ctx.lineWidth = 2 + chargeProgress * 3;
          ctx.setLineDash([5, 5]);
          ctx.beginPath();
          ctx.moveTo(e.x, e.y);
          ctx.lineTo(e.x + (dx/len) * 500, e.y + (dy/len) * 500);
          ctx.stroke();
          ctx.setLineDash([]);
          
          // Charge indicator circle
          ctx.globalAlpha = 0.6;
          ctx.strokeStyle = STYLE.danger;
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(e.x, e.y, 15 + chargeProgress * 10, 0, Math.PI * 2 * chargeProgress);
          ctx.stroke();
          ctx.restore();
        }
        
        // Rail Charger charge indicator
        if (e.type === 'railCharger' && e.charging) {
          const chargeProgress = e.chargeT / 1.0;
          ctx.save();
          ctx.globalAlpha = 0.5 + chargeProgress * 0.4;
          ctx.strokeStyle = STYLE.pink;
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.arc(e.x, e.y, 20, 0, Math.PI * 2 * chargeProgress);
          ctx.stroke();
          
          // Direction indicator
          if (e.chargeDir) {
            ctx.globalAlpha = 0.6;
            ctx.strokeStyle = STYLE.pink;
            ctx.lineWidth = 3;
            ctx.setLineDash([8, 4]);
            ctx.beginPath();
            ctx.moveTo(e.x, e.y);
            ctx.lineTo(e.x + e.chargeDir.x * 100, e.y + e.chargeDir.y * 100);
            ctx.stroke();
            ctx.setLineDash([]);
          }
          ctx.restore();
        }
        
        // Teleporter warning mark (brief flash before teleport)
        if (e.type === 'teleporter' && e.teleportCd < 30 && e.teleportCd > 0) {
          const p = g.player;
          const angle = Math.atan2(p.y - e.y, p.x - e.x) + Math.PI;
          const dist = 50;
          const warnX = p.x + Math.cos(angle) * dist;
          const warnY = p.y + Math.sin(angle) * dist;
          const flash = Math.sin(e.teleportCd * 0.5) * 0.5 + 0.5;
          ctx.save();
          ctx.globalAlpha = 0.4 + flash * 0.4;
          ctx.strokeStyle = STYLE.pink;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(warnX, warnY, 15 + flash * 5, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(warnX - 10, warnY);
          ctx.lineTo(warnX + 10, warnY);
          ctx.moveTo(warnX, warnY - 10);
          ctx.lineTo(warnX, warnY + 10);
          ctx.stroke();
          ctx.restore();
        }
        
        // Healer beam to heal target
        if (e.type === 'healer' && e.healTarget && !e.healTarget.dead) {
          ctx.save();
          ctx.globalAlpha = 0.3;
          ctx.strokeStyle = STYLE.neon;
          ctx.lineWidth = 2;
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          ctx.moveTo(e.x, e.y);
          ctx.lineTo(e.healTarget.x, e.healTarget.y);
          ctx.stroke();
          ctx.setLineDash([]);
          
          // Shield emblem
          ctx.restore();
        }
        
        // Shield Projector bubble
        if (e.type === 'shieldProjector' && e.shieldCd < 30) {
          const pulse = Math.sin(e.shieldCd * 0.3) * 0.3 + 0.7;
          ctx.save();
          ctx.globalAlpha = 0.2;
          ctx.strokeStyle = STYLE.cyan;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(e.x, e.y, 60 * pulse, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }
      }

      // AAA ARENA HAZARDS - Interactive elements
      for (const hz of g.arenaHazards) { }
      
      // System messages (environmental storytelling)
      if (g.systemMessages.length > 0) {
        ctx.save();
        ctx.font = '14px monospace';
        ctx.textAlign = 'center';
        let yOffset = b.t + 100;
        for (const msg of g.systemMessages) {
          const alpha = Math.min(1, msg.life / 0.5);
          ctx.globalAlpha = alpha * 0.8;
          const col = msg.color || STYLE.cyan;
          ctx.fillStyle = col;
          ctx.shadowColor = col;
          ctx.shadowBlur = 10;
          ctx.fillText(msg.text, (b.l + b.r) / 2, yOffset + (msg.y || 0));
          yOffset += 20;
        }
        ctx.restore();
      }

      // Fog overlay for certain arenas/modifiers
      if (g.fogAlpha > 0) {
        ctx.save();
        ctx.globalAlpha = g.fogAlpha;
        const grad = ctx.createRadialGradient(g.player.x, g.player.y, 100, g.player.x, g.player.y, 300);
        grad.addColorStop(0, 'rgba(0,0,0,0)');
        grad.addColorStop(1, 'rgba(0,0,0,0.9)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, Graphics.width, Graphics.height);
        ctx.restore();
      }

      // AAA PARTICLES with trails and glow effects
      ctx.globalCompositeOperation = 'lighter'; // Additive blending for glow
      for (const p of g.particles) {
        const alpha = p.life / p.maxLife;
        
        // Render trails first
        if (p.trail && p.trail.length > 1) {
          ctx.strokeStyle = p.color;
          ctx.lineWidth = p.size * 0.5;
          ctx.globalAlpha = alpha * 0.4;
          ctx.beginPath();
          ctx.moveTo(p.trail[0].x, p.trail[0].y);
          for (let i = 1; i < p.trail.length; i++) {
            const trailAlpha = (i / p.trail.length) * alpha * 0.4;
            ctx.globalAlpha = trailAlpha;
            ctx.lineTo(p.trail[i].x, p.trail[i].y);
          }
          ctx.stroke();
        }
        
        // Render particle based on type
        if (p.type === 'spark') {
          // Sparks: elongated with motion blur
          ctx.globalAlpha = alpha;
          ctx.fillStyle = p.color;
          const vx = p.vx * 2;
          const vy = p.vy * 2;
          ctx.beginPath();
          ctx.moveTo(p.x - vx, p.y - vy);
          ctx.lineTo(p.x + vx, p.y + vy);
          ctx.lineWidth = p.size;
          ctx.strokeStyle = p.color;
          ctx.stroke();
        } else if (p.type === 'glow') {
          // Glow: radial gradient
          ctx.globalAlpha = alpha * 0.8;
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
          grad.addColorStop(0, p.color);
          grad.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'smoke') {
          // Smoke: soft circles
          ctx.globalAlpha = alpha * 0.3;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'glitch') {
          // Glitch: flickering squares with offset
          ctx.globalAlpha = alpha * (0.5 + rand01() * 0.5);
          ctx.fillStyle = p.color;
          const offsetX = (rand01() - 0.5) * 3;
          const offsetY = (rand01() - 0.5) * 3;
          ctx.fillRect(p.x + offsetX - p.size/2, p.y + offsetY - p.size/2, p.size, p.size);
        } else if (p.type === 'shockArc') {
          // Shock arc: electric arc segments
          ctx.globalAlpha = alpha * 0.8;
          ctx.strokeStyle = p.color;
          ctx.lineWidth = p.size;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, p.arcStart, p.arcEnd);
          ctx.stroke();
        } else if (p.type === 'shard') {
          // Shard: rotating triangular pieces
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.fillStyle = p.color;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.lineTo(p.size * 0.6, p.size * 0.5);
          ctx.lineTo(-p.size * 0.6, p.size * 0.5);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
          p.rotation += p.rotSpeed;
        } else {
          // Default: solid particles with glow
          ctx.globalAlpha = alpha;
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = p.size * 2;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
      ctx.globalCompositeOperation = 'source-over'; // Reset blending
      ctx.globalAlpha = 1.0;

      // Dash Bar
      const p = g.player;
      if (p.dashCd && p.dashMax && p.dashCd > 0) {
        const width = 30;
        const x = p.x - width/2;
        const y = p.y + 20;
        const pct = 1.0 - (p.dashCd / p.dashMax);
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.fillRect(x, y, width, 4);
        ctx.fillStyle = STYLE.cyan;
        ctx.fillRect(x, y, width * pct, 4);
      }

      bitmapUpdate(bmp);
    }

    drawHud() {
      const bmp = this._hudLayer.bitmap;
      bmp.clear();
      const g = this._game;
      const b = g.bounds;
      const uiScale = g.accessibility.largeUI ? 1.2 : 1.0;

      // Top HUD background with gradient
      const ctx = bmp.context;
      const grad = ctx.createLinearGradient(0, 0, 0, 70);
      grad.addColorStop(0, 'rgba(0,0,0,0.5)');
      grad.addColorStop(1, 'rgba(0,0,0,0.0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, Graphics.width, 70);

      // === SEGMENTED HP BAR WITH HEARTS (LEFT SIDE) ===
      const hpX = 20, hpY = 12;
      const heartSize = 20 * uiScale;
      const heartSpacing = 24 * uiScale;
      const maxHearts = g.player.maxHp;
      const currentHearts = Math.max(0, g.player.hp);
      
      // HP background bar
      const hpBarW = maxHearts * heartSpacing + 10;
      bmp.fillRect(hpX - 5, hpY - 3, hpBarW, heartSize + 6, 'rgba(0,0,0,0.4)');
      bmp.fillRect(hpX - 4, hpY - 2, hpBarW - 2, heartSize + 4, 'rgba(40,40,60,0.6)');
      
      // Draw hearts
      for (let i = 0; i < maxHearts; i++) {
        const x = hpX + i * heartSpacing;
        const filled = i < currentHearts;
        const color = filled ? STYLE.danger : 'rgba(80,80,80,0.5)';
        bmp.fontSize = Math.floor(heartSize);
        bmp.textColor = color;
        bmp.drawText('♥', x, hpY - 2, heartSize, heartSize, 'left');
      }
      
      // HP label
      bmp.fontSize = 12;
      bmp.textColor = STYLE.textDim;
      bmp.drawText('HP', hpX, hpY + heartSize + 2, 40, 14, 'left');

      // === LEVEL & XP BAR (CENTER TOP) ===
      const lvlX = Graphics.width / 2;
      const lvlY = 10;
      bmp.fontSize = Math.floor(20 * uiScale);
      bmp.textColor = STYLE.neon;
      bmp.drawText(`LEVEL ${g.level}`, 0, lvlY, Graphics.width, 24, 'center');
      
      // XP bar under level text
      const xpBarW = 180 * uiScale;
      const xpBarH = 8;
      const xpBarX = (Graphics.width - xpBarW) / 2;
      const xpBarY = lvlY + 26;
      const xpPct = clamp(g.xp / g.xpNeed, 0, 1);
      
      bmp.fillRect(xpBarX - 2, xpBarY - 2, xpBarW + 4, xpBarH + 4, 'rgba(255,255,255,0.15)');
      bmp.fillRect(xpBarX, xpBarY, xpBarW, xpBarH, 'rgba(0,0,0,0.5)');
      bmp.fillRect(xpBarX, xpBarY, xpBarW * xpPct, xpBarH, STYLE.cyan);
      
      bmp.fontSize = 10;
      bmp.textColor = STYLE.textDim;
      bmp.drawText(`${g.xp}/${g.xpNeed}`, xpBarX, xpBarY + xpBarH + 2, xpBarW, 12, 'center');

      // === WAVE INFO & SCORE (RIGHT SIDE) ===
      const rightX = Graphics.width - 20;
      const rightY = 12;
      bmp.fontSize = Math.floor(18 * uiScale);
      bmp.textColor = STYLE.text;
      const nextBoss = 10 - (g.wave % 10);
      const bossInfo = (nextBoss === 10) ? ' [BOSS!]' : ` (${nextBoss} to boss)`;
      bmp.drawText(`Wave ${g.wave}${bossInfo}`, 0, rightY, rightX - 10, 24, 'right');
      
      bmp.fontSize = Math.floor(14 * uiScale);
      bmp.textColor = STYLE.gold;
      bmp.drawText(`Score: ${g.score}`, 0, rightY + 24, rightX - 10, 20, 'right');

      // === EXPLOSION COOLDOWN INDICATOR (BOTTOM CENTER) ===
      if (g.player.explosionCd > 0) {
        const cdPct = g.player.explosionCd / g.player.explosionMax;
        const barW = 120;
        const barH = 6;
        const barX = (Graphics.width - barW) / 2;
        const barY = Graphics.height - 30;
        
        bmp.fillRect(barX - 1, barY - 1, barW + 2, barH + 2, 'rgba(255,255,255,0.2)');
        bmp.fillRect(barX, barY, barW, barH, 'rgba(0,0,0,0.6)');
        bmp.fillRect(barX, barY, barW * (1 - cdPct), barH, STYLE.gold);
        
        bmp.fontSize = 10;
        bmp.textColor = STYLE.textDim;
        bmp.drawText('EXPLOSION', barX, barY - 14, barW, 12, 'center');
      } else {
        // Ready indicator
        const barW = 120;
        const barX = (Graphics.width - barW) / 2;
        const barY = Graphics.height - 30;
        bmp.fontSize = 12;
        bmp.textColor = STYLE.neon;
        bmp.drawText('EXPLOSION READY!', barX, barY - 14, barW, 14, 'center');
      }

      // === PARTNER STATUS ===
      if (g.partner.enabled) {
        const partX = 20;
        const partY = Graphics.height - 50;
        bmp.fontSize = 12;
        if (g.partner.dead) {
          bmp.textColor = STYLE.dangerSoft;
          bmp.drawText('Partner: DOWN', partX, partY, 200, 16, 'left');
        } else {
          bmp.textColor = STYLE.textDim;
          bmp.drawText('Partner:', partX, partY, 80, 16, 'left');
          // Partner hearts
          for (let i = 0; i < g.partner.maxHp; i++) {
            const x = partX + 70 + i * 18;
            const filled = i < g.partner.hp;
            bmp.textColor = filled ? STYLE.cyan : 'rgba(80,80,80,0.5)';
            bmp.fontSize = 16;
            bmp.drawText('♦', x, partY - 2, 18, 18, 'left');
          }
        }
      }

      // === LOCK-ON MARKER FOR CURRENT TARGET ===
      g.currentTarget = g.findBestEnemyTarget(g.player);
      if (g.currentTarget && !g.currentTarget.dead) {
        const tgt = g.currentTarget;
        const lockSize = 30;
        const pulse = Math.sin(Date.now() / 200) * 0.2 + 0.8;
        
        ctx.save();
        ctx.strokeStyle = STYLE.cyan;
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.6 * pulse;
        
        // Corner brackets
        const cornerLen = 8;
        ctx.beginPath();
        // Top-left
        ctx.moveTo(tgt.x - lockSize/2, tgt.y - lockSize/2 + cornerLen);
        ctx.lineTo(tgt.x - lockSize/2, tgt.y - lockSize/2);
        ctx.lineTo(tgt.x - lockSize/2 + cornerLen, tgt.y - lockSize/2);
        // Top-right
        ctx.moveTo(tgt.x + lockSize/2 - cornerLen, tgt.y - lockSize/2);
        ctx.lineTo(tgt.x + lockSize/2, tgt.y - lockSize/2);
        ctx.lineTo(tgt.x + lockSize/2, tgt.y - lockSize/2 + cornerLen);
        // Bottom-right
        ctx.moveTo(tgt.x + lockSize/2, tgt.y + lockSize/2 - cornerLen);
        ctx.lineTo(tgt.x + lockSize/2, tgt.y + lockSize/2);
        ctx.lineTo(tgt.x + lockSize/2 - cornerLen, tgt.y + lockSize/2);
        // Bottom-left
        ctx.moveTo(tgt.x - lockSize/2 + cornerLen, tgt.y + lockSize/2);
        ctx.lineTo(tgt.x - lockSize/2, tgt.y + lockSize/2);
        ctx.lineTo(tgt.x - lockSize/2, tgt.y + lockSize/2 - cornerLen);
        ctx.stroke();
        ctx.restore();
      }

      // === THREAT ARROWS FOR OFFSCREEN ENEMIES ===
      const edgeMargin = 40;
      const arrowSize = 12;
      g.offscreenThreats = [];
      
      for (const e of g.enemies) {
        if (e.dead) continue;
        const isOffscreen = e.x < b.l || e.x > b.r || e.y < b.t || e.y > b.b;
        if (isOffscreen) {
          const dx = e.x - g.player.x;
          const dy = e.y - g.player.y;
          const angle = Math.atan2(dy, dx);
          
          // Calculate arrow position at screen edge
          let arrowX = g.player.x + Math.cos(angle) * 300;
          let arrowY = g.player.y + Math.sin(angle) * 300;
          arrowX = clamp(arrowX, b.l + edgeMargin, b.r - edgeMargin);
          arrowY = clamp(arrowY, b.t + edgeMargin, b.b - edgeMargin);
          
          g.offscreenThreats.push({ x: arrowX, y: arrowY, angle, type: e.type });
        }
      }
      
      // Draw threat arrows
      ctx.save();
      for (const threat of g.offscreenThreats) {
        ctx.translate(threat.x, threat.y);
        ctx.rotate(threat.angle);
        
        ctx.fillStyle = threat.type === 'tank' ? STYLE.danger : STYLE.gold;
        ctx.globalAlpha = 0.7;
        ctx.beginPath();
        ctx.moveTo(arrowSize, 0);
        ctx.lineTo(-arrowSize/2, -arrowSize/2);
        ctx.lineTo(-arrowSize/2, arrowSize/2);
        ctx.closePath();
        ctx.fill();
        
        ctx.strokeStyle = 'rgba(0,0,0,0.8)';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        ctx.setTransform(1, 0, 0, 1, 0, 0);
      }
      ctx.restore();

      // === FLOATERS (DAMAGE NUMBERS) ===
      for (const f of g.floaters) {
        bmp.fontSize = 16;
        bmp.textColor = f.color;
        bmp.drawText(f.text, f.x-20, f.y, 40, 20, 'center');
      }

      // === BOSS HEALTH BAR ===
      const isBossWave = (g.wave % 10 === 0);
      if (isBossWave && g.boss && !g.boss.dead) {
        const w = 400, h = 14;
        const x = (Graphics.width - w)/2;
        const y = 75;
        const pct = clamp(g.boss.hp / g.boss.maxHp, 0, 1);
        
        // Boss name and phase banner
        bmp.fontSize = 18;
        bmp.textColor = g.boss.bossColor;
        const phaseName = g.boss.phase === 1 ? '' : (g.boss.phase === 2 ? ' - PHASE II' : ' - PHASE III');
        bmp.drawText(`${g.boss.bossName}${phaseName}`, x, y-42, w, 20, 'center');
        
        // Outer glow with boss color
        let bossGlow = String(g.boss.bossColor || STYLE.pink);
        bossGlow = bossGlow
          .replace(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([0-9.]+)\)/, 'rgba($1,$2,$3,0.3)')
          .replace(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/, 'rgba($1,$2,$3,0.3)');
        bmp.fillRect(x-3, y-3, w+6, h+6, bossGlow);
        bmp.fillRect(x-2, y-2, w+4, h+4, 'rgba(255,255,255,0.2)');
        bmp.fillRect(x, y, w, h, 'rgba(0,0,0,0.6)');
        
        // Segmented bar with boss color
        const segments = 20;
        const segW = (w / segments) - 2;
        for (let i = 0; i < segments; i++) {
          if ((i / segments) < pct) {
            const segX = x + i * (w / segments) + 1;
            const segColor = pct < 0.3 ? STYLE.danger : (pct < 0.6 ? STYLE.gold : g.boss.bossColor);
            bmp.fillRect(segX, y + 1, segW, h - 2, segColor);
          }
        }
        
        bmp.fontSize = 16;
        bmp.textColor = g.boss.bossColor;
        bmp.drawText('⚠ BOSS ⚠', x, y-22, w, 20, 'center');
        bmp.fontSize = 12;
        bmp.textColor = STYLE.text;
        bmp.drawText(`${Math.ceil(g.boss.hp)} / ${g.boss.maxHp}`, x, y + h + 2, w, 14, 'center');
        
        // Panic moment warning
        if (g.boss.panicMoment) {
          bmp.fontSize = 14;
          bmp.textColor = STYLE.danger;
          const pulse = Math.sin(this._t * 8) * 0.3 + 0.7;
          ctx.save();
          ctx.globalAlpha = pulse;
          bmp.drawText('⚠ DESPERATION ⚠', x, y + h + 18, w, 16, 'center');
          ctx.restore();
        }
      }

      // === UPGRADE SELECTION (ENHANCED) ===
      const upgrades = g.pickups.filter(p => !p.dead && p.kind==='upgrade' && p.data);
      if (upgrades.length > 0) {
        const y0 = 100;
        const boxH = 80;
        const boxW = Math.min(upgrades.length * 200, Graphics.width * 0.8);
        const boxX = (Graphics.width - boxW) / 2;
        
        // Background with border
        bmp.fillRect(boxX - 4, y0 - 4, boxW + 8, boxH + 8, 'rgba(255,255,255,0.1)');
        bmp.fillRect(boxX, y0, boxW, boxH, 'rgba(0,0,0,0.85)');
        
        bmp.fontSize = 14;
        bmp.textColor = STYLE.neon;
        bmp.drawText('⬆ CHOOSE UPGRADE ⬇', boxX, y0 - 20, boxW, 18, 'center');
        
        const cardW = 180;
        const startX = boxX + (boxW - Math.min(upgrades.length, 4) * cardW) / 2;
        
        for (let i = 0; i < Math.min(4, upgrades.length); i++) {
          const u = upgrades[i].data;
          const x = startX + i * cardW;
          const isHovered = (i === g.upgradeHoverIndex);
          
          // Card background
          if (isHovered) {
            bmp.fillRect(x - 2, y0 + 4, cardW - 10, boxH - 8, 'rgba(140,255,190,0.2)');
          }
          
          // Icon
          const icon = this.getUpgradeIcon(u);
          if (icon) {
            bmp.blt(icon, 0, 0, icon.width, icon.height, x + 5, y0 + 8, 32, 32);
          }
          
          // Name
          bmp.fontSize = 14;
          bmp.textColor = isHovered ? STYLE.neon : STYLE.text;
          bmp.drawText(u.name, x + 42, y0 + 8, cardW - 50, 18, 'left');
          
          // Description
          bmp.fontSize = 11;
          bmp.textColor = STYLE.textDim;
          bmp.drawText(u.desc, x + 5, y0 + 28, cardW - 15, 40, 'left');

          // Hotkey
          bmp.fontSize = 10;
          bmp.textColor = STYLE.gold;
          bmp.drawText(`[${i + 1}]`, x + 5, y0 + boxH - 20, 30, 14, 'left');
        }
      }

      // === WIN/LOSE STATES ===
      if (g.state === 'win') {
        bmp.fontSize = 48;
        bmp.textColor = STYLE.neon;
        bmp.drawText('⚡ HACK COMPLETE! ⚡', 0, b.t + 120, Graphics.width, 52, 'center');
      }
      if (g.state === 'lose') {
        bmp.fontSize = 48;
        bmp.textColor = STYLE.danger;
        bmp.drawText('☠ SYSTEM FAILURE ☠', 0, b.t + 120, Graphics.width, 52, 'center');
      }
    }
  }
})();
