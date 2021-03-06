import React from 'react';

import Analyzer from 'Parser/Core/Analyzer';

import SPELLS from 'common/SPELLS';
import SpellLink from "common/SpellLink";
import ItemDamageDone from 'Interface/Others/ItemDamageDone';
import { formatPercentage } from 'common/format';
import StatisticBox from 'Interface/Others/StatisticBox';
import SpellIcon from 'common/SpellIcon';
import Enemies from 'Parser/Core/Modules/Enemies';

/**
 * Fire a shot that poisons your target, causing them to take (15% of Attack power) Nature damage instantly and an additional (60% of Attack power) Nature damage over 12 sec.
 */

class SerpentSting extends Analyzer {
  static dependencies = {
    enemies: Enemies,
  };
  
  damage = 0;

  constructor(...args) {
    super(...args);
    this.active = this.selectedCombatant.hasTalent(SPELLS.SERPENT_STING_TALENT.id);
  }

  on_byPlayer_damage(event) {
    const spellId = event.ability.guid;
    if (spellId !== SPELLS.SERPENT_STING_TALENT.id) {
      return;
    }
    this.damage += event.amount + (event.absorbed || 0);
  }
  get uptimePercentage() {
    return this.enemies.getBuffUptime(SPELLS.SERPENT_STING_TALENT.id) / this.owner.fightDuration;
  }
  statistic() {
    return (
      <StatisticBox
        icon={<SpellIcon id={SPELLS.SERPENT_STING_TALENT.id} />}
        value={`${formatPercentage(this.uptimePercentage)}%`}
        label="Serpent Sting Uptime"
      />
    );
  }

  subStatistic() {
    return (
      <div className="flex">
        <div className="flex-main">
          <SpellLink id={SPELLS.SERPENT_STING_TALENT.id} />
        </div>
        <div className="flex-sub text-right">
          <ItemDamageDone amount={this.damage} />
        </div>
      </div>
    );
  }
}

export default SerpentSting;
