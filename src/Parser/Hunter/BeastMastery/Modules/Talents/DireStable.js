import React from 'react';

import SPELLS from 'common/SPELLS';
import { formatNumber } from 'common/format';
import StatisticBox from 'Interface/Others/StatisticBox';
import SpellIcon from 'common/SpellIcon';
import Analyzer from 'Parser/Core/Analyzer';

const ADDITIONAL_FOCUS_PER_SUMMON = 12;

const DIREBEAST_DURATION = 8000;

/**
 * Dire Beast or Dire Frenzy generates 12 additional Focus over its duration.
 */
class DireStable extends Analyzer {

  constructor(...args) {
    super(...args);
    this.active = this.selectedCombatant.hasTalent(SPELLS.DIRE_STABLE_TALENT.id);
  }

  get buffUptimeInSeconds() {
    return this.selectedCombatant.getBuffUptime(SPELLS.DIRE_BEAST_BUFF.id) / 1000;
  }
  get focusPerSecondFromDireStable() {
    //divided by 1000 to get it in seconds
    return ADDITIONAL_FOCUS_PER_SUMMON / (DIREBEAST_DURATION / 1000);
  }

  get gainedFocus() {
    return this.focusPerSecondFromDireStable * this.buffUptimeInSeconds;
  }

  statistic() {
    return (
      <StatisticBox
        icon={<SpellIcon id={SPELLS.DIRE_STABLE_TALENT.id} />}
        value={formatNumber(this.gainedFocus / this.owner.fightDuration * 60000)}
        label="Focus gain/minute"
      />
    );
  }
}

export default DireStable;
