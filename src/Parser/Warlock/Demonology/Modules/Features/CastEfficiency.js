import SPELLS from 'common/SPELLS';

import CoreCastEfficiency from 'Parser/Core/Modules/CastEfficiency';

/* eslint-disable no-unused-vars */

class CastEfficiency extends CoreCastEfficiency {
  static CPM_ABILITIES = [
    ...CoreCastEfficiency.CPM_ABILITIES,
    // Rotational spells
    {
      spell: SPELLS.DEMONIC_EMPOWERMENT,
      category: CastEfficiency.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.SHADOW_BOLT,
      category: CastEfficiency.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => null,
      isActive: combatant => !combatant.hasTalent(SPELLS.DEMONBOLT_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.DOOM,
      category: CastEfficiency.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.CALL_DREADSTALKERS,
      category: CastEfficiency.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => 15, // can be reset via T20 2pc
    },
    {
      spell: SPELLS.HAND_OF_GULDAN_CAST,
      category: CastEfficiency.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.DEMONWRATH_CAST,
      category: CastEfficiency.SPELL_CATEGORIES.ROTATIONAL_AOE,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.THALKIELS_CONSUMPTION_CAST,
      category: CastEfficiency.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => 45,
    },
    {
      spell: SPELLS.LIFE_TAP,
      category: CastEfficiency.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => null,
      extraSuggestion: 'If you\'re using Empowered Life Tap, you should keep a very high uptime on the Empowered Life Tap buff.',
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.SHADOWFLAME_TALENT,
      category: CastEfficiency.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => 14,
      charges: 2,
      isActive: combatant => combatant.hasTalent(SPELLS.SHADOWFLAME_TALENT.id),
    },
    {
      spell: SPELLS.SUMMON_DARKGLARE_TALENT,
      category: CastEfficiency.SPELL_CATEGORIES.ROTATIONAL_AOE,
      getCooldown: haste => 24,
      isActive: combatant => combatant.hasTalent(SPELLS.SUMMON_DARKGLARE_TALENT.id),
    },
    {
      spell: SPELLS.SHADOW_BOLT,
      category: CastEfficiency.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => null,
      isActive: combatant => combatant.hasTalent(SPELLS.DEMONBOLT_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },
    // Cooldowns
    {
      spell: SPELLS.SOUL_HARVEST_TALENT,
      category: CastEfficiency.SPELL_CATEGORIES.COOLDOWNS,
      getCooldown: haste => 120,
      isActive: combatant => combatant.hasTalent(SPELLS.SOUL_HARVEST_TALENT.id),
    },
    {
      spell: SPELLS.SUMMON_DOOMGUARD_UNTALENTED,
      category: CastEfficiency.SPELL_CATEGORIES.COOLDOWNS,
      getCooldown: haste => 180,
      isActive: combatant => !combatant.hasTalent(SPELLS.GRIMOIRE_OF_SUPREMACY_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.SUMMON_INFERNAL_UNTALENTED,
      category: CastEfficiency.SPELL_CATEGORIES.COOLDOWNS,
      getCooldown: haste => 180,
      isActive: combatant => !combatant.hasTalent(SPELLS.GRIMOIRE_OF_SUPREMACY_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.GRIMOIRE_IMP,
      category: CastEfficiency.SPELL_CATEGORIES.COOLDOWNS,
      getCooldown: haste => 90,
      isActive: combatant => combatant.hasTalent(SPELLS.GRIMOIRE_OF_SERVICE_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.GRIMOIRE_VOIDWALKER,
      category: CastEfficiency.SPELL_CATEGORIES.COOLDOWNS,
      getCooldown: haste => 90,
      isActive: combatant => combatant.hasTalent(SPELLS.GRIMOIRE_OF_SERVICE_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.GRIMOIRE_FELHUNTER,
      category: CastEfficiency.SPELL_CATEGORIES.COOLDOWNS,
      getCooldown: haste => 90,
      isActive: combatant => combatant.hasTalent(SPELLS.GRIMOIRE_OF_SERVICE_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.GRIMOIRE_SUCCUBUS,
      category: CastEfficiency.SPELL_CATEGORIES.COOLDOWNS,
      getCooldown: haste => 90,
      isActive: combatant => combatant.hasTalent(SPELLS.GRIMOIRE_OF_SERVICE_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.GRIMOIRE_FELGUARD,
      category: CastEfficiency.SPELL_CATEGORIES.COOLDOWNS,
      getCooldown: haste => 90,
      isActive: combatant => combatant.hasTalent(SPELLS.GRIMOIRE_OF_SERVICE_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },

    {
      spell: SPELLS.UNENDING_RESOLVE,
      category: CastEfficiency.SPELL_CATEGORIES.DEFENSIVE,
      getCooldown: haste => 180,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.DARK_PACT_TALENT,
      category: CastEfficiency.SPELL_CATEGORIES.DEFENSIVE,
      getCooldown: haste => 60,
      isActive: combatant => combatant.hasTalent(SPELLS.DARK_PACT_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.MORTAL_COIL_TALENT,
      category: CastEfficiency.SPELL_CATEGORIES.DEFENSIVE,
      getCooldown: haste => 45,
      isActive: combatant => combatant.hasTalent(SPELLS.MORTAL_COIL_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },
    // Utility
    {
      spell: SPELLS.BURNING_RUSH_TALENT,
      category: CastEfficiency.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      isActive: combatant => combatant.hasTalent(SPELLS.BURNING_RUSH_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.DEMONIC_CIRCLE_TALENT_SUMMON,
      category: CastEfficiency.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      isActive: combatant => combatant.hasTalent(SPELLS.DEMONIC_CIRCLE_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.DEMONIC_CIRCLE_TALENT_TELEPORT,
      category: CastEfficiency.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => 30,
      isActive: combatant => combatant.hasTalent(SPELLS.DEMONIC_CIRCLE_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.SOULSTONE,
      category: CastEfficiency.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => 600,
      // TODO: shares cooldown with other combat rezzes, don't know how to calculate properly
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.SUMMON_DOOMGUARD_TALENTED,
      category: CastEfficiency.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      isActive: combatant => combatant.hasTalent(SPELLS.GRIMOIRE_OF_SUPREMACY_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.SUMMON_INFERNAL_TALENTED,
      category: CastEfficiency.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      isActive: combatant => combatant.hasTalent(SPELLS.GRIMOIRE_OF_SUPREMACY_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.DEMONIC_GATEWAY_CAST,
      category: CastEfficiency.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => 10,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.SUMMON_FELGUARD,
      category: CastEfficiency.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.GRIMOIRE_OF_SACRIFICE_TALENT,
      category: CastEfficiency.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => 30,
      isActive: combatant => combatant.hasTalent(SPELLS.GRIMOIRE_OF_SACRIFICE_TALENT.id),
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.BANISH,
      category: CastEfficiency.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.CREATE_HEALTHSTONE,
      category: CastEfficiency.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.CREATE_SOULWELL,
      category: CastEfficiency.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => 120,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.ENSLAVE_DEMON,
      category: CastEfficiency.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.EYE_OF_KILROGG,
      category: CastEfficiency.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.FEAR_CAST,
      category: CastEfficiency.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.HEALTH_FUNNEL_CAST,
      category: CastEfficiency.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.SUMMON_IMP,
      category: CastEfficiency.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.SUMMON_VOIDWALKER,
      category: CastEfficiency.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.SUMMON_FELHUNTER,
      category: CastEfficiency.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.SUMMON_SUCCUBUS,
      category: CastEfficiency.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
    {
      spell: SPELLS.UNENDING_BREATH,
      category: CastEfficiency.SPELL_CATEGORIES.UTILITY,
      getCooldown: haste => null,
      noSuggestion: true,
      noCanBeImproved: true,
    },
  ];
}

export default CastEfficiency;