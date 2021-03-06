import SPELLS from 'common/SPELLS';

import EventsNormalizer from 'Parser/Core/EventsNormalizer';

class TipOfTheSpearNormalizer extends EventsNormalizer {
  /**
   * Tip of the Spear casts a buff on the player whenever he casts Kill Command. It's cluttering up the console, so tagging it as a tick fixes this issue. Since we can track the actual buff application, ensures it's not a problem.
   * @param {Array} events
   * @returns {Array}
   */
  normalize(events) {
    const fixedEvents = [];
    events.forEach(event => {
      if (event.type === 'cast' && event.ability.guid === SPELLS.TIP_OF_THE_SPEAR_CAST.id) {
        event.type = 'tick';
        event.__modified = true;
      }
      fixedEvents.push(event);
    });

    return fixedEvents;
  }
}

export default TipOfTheSpearNormalizer;
