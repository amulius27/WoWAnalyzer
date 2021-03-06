import React from 'react';

import ITEMS from 'common/ITEMS';
import Analyzer from 'Parser/Core/Analyzer';
import SPELLS from 'common/SPELLS';
import SpellLink from 'common/SpellLink';

/**
 * Frizzo's Fingertrap
 * Equip: When you Butchery or Carve an enemy affected by Lacerate, Lacerate spreads to 1 other targets hit by Butchery or Carve
 */

const MS_BUFFER = 50;

class FrizzosFingertrap extends Analyzer {
  spreadLacerates = 0;
  castTimestamp = 0;
  constructor(...args) {
    super(...args);
    this.active = this.selectedCombatant.hasFinger(ITEMS.FRIZZOS_FINGERTRAP.id);
  }
  on_byPlayer_cast(event) {
    const spellID = event.ability.guid;
    if (spellID === SPELLS.BUTCHERY_TALENT.id || spellID === SPELLS.CARVE.id) {
      this.castTimestamp = event.timestamp;
    }
  }
  on_byPlayer_applydebuff(event) {
    const spellID = event.ability.guid;
    if (spellID !== SPELLS.LACERATE.id) {
      return;
    }
    if (event.timestamp < this.castTimestamp + MS_BUFFER) {
      this.spreadLacerates++;
    }
  }
  item() {
    return {
      item: ITEMS.FRIZZOS_FINGERTRAP,
      result: <React.Fragment>Spread <SpellLink id={SPELLS.LACERATE.id} /> to {this.spreadLacerates} additional targets. </React.Fragment>,
    };
  }
}

export default FrizzosFingertrap;
