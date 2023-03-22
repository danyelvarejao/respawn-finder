import { Blessing } from 'src/types';

const getBlessingCost = (blessing: Blessing, level: number): number => {
  if (level <= 30) {
    if (blessing.type === 'enhanced') {
      return 2600;
    }
    return 2000;
  }

  if (level <= 120) {
    if (blessing.type === 'enhanced') {
      return 260 * (level - 20);
    } else {
      return 200 * (level - 20);
    }
  }

  if (blessing.type === 'enhanced') {
    return 26000 + 100 * (level - 120);
  } else if (blessing.type === 'regular') {
    return 20000 + 75 * (level - 120);
  }
  return 20000;
};

export { getBlessingCost };
