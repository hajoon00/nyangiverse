// src/lib/result.ts

import { Choice } from '@/data/questions';

export function calculateResult(answers: Choice[]) {
  const total = answers.length;
  const hasomCount = answers.filter((a) => a === 'hasom').length;
 

  const hasomPercent = Math.round((hasomCount / total) * 100);
  const haronPercent = 100 - hasomPercent;

  return {
    hasom: hasomPercent,
    haron: haronPercent,
  };
}
