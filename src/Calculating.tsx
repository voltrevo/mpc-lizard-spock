import Ctx from './Ctx';
import ProgressBar from './ProgressBar';

export default function Calculating() {
  const ctx = Ctx.use();
  const mpcProgress = ctx.mpcProgress.use();

  // Small function to adjust the computation progress.
  // The first 20% of progress is amplified to take significantly more time,
  // while the remaining 80% is compressed to progress faster.
  function getEasedProgress(progress: number) {
    if (progress < 0.2) {
      return progress * 10;
    }

    return (1 + (progress - 0.2) * 0.1);
  }

  return <div>
    <ProgressBar progress={getEasedProgress(mpcProgress)} />
  </div>;
}
