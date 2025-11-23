// credits to  NEON-XZR and meep of faith
/* let mod = Vars.mods.locateMod("newunits");
mod.meta.displayName = Core.bundle.get("mod.name");
mod.meta.description = Core.bundle.get("mod.description");
//is this relevant?^^^
// special thanks to meep for the help!!
*/
let day2 = Vars.tree.loadMusic("day2"); //new-world creepy vibes like / alternate
let day3 = Vars.tree.loadMusic("day3"); //ye
let day4 = Vars.tree.loadMusic("day4"); //ye
let seq = Vars.tree.loadMusic("seq"); //seq
let game10 = Vars.tree.loadMusic("game10"); //fanmade
let boss3 = Vars.tree.loadMusic("boss3"); //fanmade boss
let fine2 = Vars.tree.loadMusic("fine2"); //ye
let cosmos = Vars.tree.loadMusic("cosmos"); //ye
function clearMusic() {
  Vars.control.sound.ambientMusic = Seq.with();
  Vars.control.sound.darkMusic = Seq.with();
  Vars.control.sound.bossMusic = Seq.with();
};
function callOnPlanetChange(pl) {
  switch(pl) {
    case (Planets.serpulo):
    case (Planets.erekir):
        Vars.control.sound.ambientMusic = Seq.with(Musics.game1, Musics.game3, Musics.game6, Musics.game8, Musics.game9, Musics.fine);
        Vars.control.sound.darkMusic = Seq.with(Musics.game2, Musics.game5, Musics.game7, Musics.game4);
        Vars.control.sound.bossMusic = Seq.with(Musics.boss1, Musics.boss2, Musics.game2, Musics.game5);
        Vars.control.sound.ambientMusic.add(day2);
        Vars.control.sound.ambientMusic.add(fine2);
        Vars.control.sound.darkMusic.add(day3);
        Vars.control.sound.darkMusic.add(day4);
        Vars.control.sound.bossMusic.add(boss3);
        Vars.control.sound.bossMusic.add(seq); //duck it, seq is boss music
        Vars.control.sound.darkMusic.add(seq);
        return;
      case(Vars.content.planet("newunits-clexon")):
        clearMusic();
        Vars.control.sound.ambientMusic.add(cosmos);
        Vars.control.sound.ambientMusic.add(day3);
        Vars.control.sound.ambientMusic.add(day4);
        Vars.control.sound.darkMusic.add(cosmos);
        Vars.control.sound.darkMusic.add(game10);
        Vars.control.sound.darkMusic.add(seq);
        Vars.control.sound.bossMusic.add(seq);
        return;
  };
};
let planet = null, planetCur = null;
Events.run(Trigger.update, () => {
  if(Vars.state.isMenu() || Vars.state.isEditor()) return;
  planetCur = Vars.state.getPlanet();
  if(planetCur != planet) callOnPlanetChange(planetCur);
  planet = planetCur;
});
