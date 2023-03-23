import { Blessing } from 'src/types';

const getBlessingCost = (blessing: Blessing, level: number): number => {
  if (blessing.type === 'regular') {
    if (level <= 30) {
      return 2000;
    } else if (level <= 120) {
      return 200 * (level - 20);
    } else {
      return 20000 + 75 * (level - 120);
    }
  } else if (blessing.type === 'enhanced') {
    if (level <= 30) {
      return 2600;
    } else if (level <= 120) {
      return 260 * (level - 20);
    } else {
      return 26000 + 100 * (level - 120);
    }
  } else if (blessing.type === 'pvp') {
    if (level <= 30) {
      return 2000;
    } else if (level <= 120) {
      return 200 * (level - 20);
    } else if (level <= 270) {
      return 200 * (level - 20);
    } else {
      return 50000;
    }
  }
  return 0;
};

export { getBlessingCost };
