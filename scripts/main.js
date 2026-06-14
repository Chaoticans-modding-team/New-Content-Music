// credits to  NEON-XZR and meep of faith
/* let mod = Vars.mods.locateMod("newunits");
mod.meta.displayName = Core.bundle.get("mod.name");
mod.meta.description = Core.bundle.get("mod.description");
//is this relevant?^^^
// special thanks to meep for the help!!
*/
function mus(e) {
  return Vars.tree.loadMusic(e);
}
var newcontent = Vars.mods.locateMod("newunits") != null;
var clexon = newcontent ? Vars.content.planet("newunits-clexon") : null;
function clearMusic() {
  Vars.control.sound.ambientMusic = Seq.with();
  Vars.control.sound.darkMusic = Seq.with();
  Vars.control.sound.bossMusic = Seq.with();
};
function callOnPlanetChange(pl) {
  switch(pl) {
    case (Planets.serpulo):
    case (Planets.sun): //So apparently the "<Any>" option in Mindustry sets the planet to the sun... wonderful.
    case (Planets.erekir):
        Vars.control.sound.ambientMusic = Seq.with(Musics.game1, Musics.game3, Musics.game6, Musics.game8, Musics.game9, Musics.fine);
        Vars.control.sound.darkMusic = Seq.with(Musics.game2, Musics.game5, Musics.game7, Musics.game4);
        Vars.control.sound.bossMusic = Seq.with(Musics.boss1, Musics.boss2, Musics.game2);
        Vars.control.sound.ambientMusic.add(mus("day2"));
        Vars.control.sound.ambientMusic.add(mus("fine2"));
        Vars.control.sound.darkMusic.add(mus("day3"));
        Vars.control.sound.darkMusic.add(mus("day4"));
        Vars.control.sound.bossMusic.add(mus("boss3"));
        Vars.control.sound.bossMusic.add(mus("seq"));
        Vars.control.sound.darkMusic.add(mus("seq"));
        if(!newcontent) {
          Vars.control.sound.ambientMusic.add(mus("cosmos"));
          Vars.control.sound.ambientMusic.add(mus("day3"));
          Vars.control.sound.ambientMusic.add(mus("day4"));
          Vars.control.sound.darkMusic.add(mus("cosmos"));
          Vars.control.sound.darkMusic.add(mus("game10"));
        }
        return;
      case(clexon):
        clearMusic();
        Vars.control.sound.ambientMusic.add(mus("cosmos"));
        Vars.control.sound.ambientMusic.add(mus("day3"));
        Vars.control.sound.ambientMusic.add(mus("day4"));
        Vars.control.sound.darkMusic.add(mus("cosmos"));
        Vars.control.sound.darkMusic.add(mus("game10"));
        Vars.control.sound.darkMusic.add(mus("seq"));
        Vars.control.sound.bossMusic.add(mus("seq"));
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
