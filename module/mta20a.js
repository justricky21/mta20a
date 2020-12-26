// Import Modules
import { MTA20AActor } from "./actor/actor.js";
import { MTA20AActorSheet } from "./actor/actor-sheet.js";
import { MTA20AItem } from "./item/item.js";
import { MTA20AItemSheet } from "./item/item-sheet.js";

Hooks.once('init', async function() {

  game.mta20a = {
    MTA20AActor,
    MTA20AItem
  };

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d20",
    decimals: 2
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = MTA20AActor;
  CONFIG.Item.entityClass = MTA20AItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("mta20a", MTA20AActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("mta20a", MTA20AItemSheet, { makeDefault: true });

  // If you need to add Handlebars helpers, here are a few useful examples:
  Handlebars.registerHelper('concat', function() {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });
});