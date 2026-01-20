/**
 * Animation system for Canvas Chart Library
 */

export type EasingFunction = 'linear' | 'easeIn' | 'easeOut' | 'easeInOut';

/**
 * Easing functions for smooth animations
 */
const easingFunctions: Record<EasingFunction, (t: number) => number> = {
  linear: (t: number) => t,
  easeIn: (t: number) => t * t,
  easeOut: (t: number) => t * (2 - t),
  easeInOut: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
};

/**
 * ChartAnimator manages animations for chart rendering
 */
export class ChartAnimator {
  private animationFrameId: number | null = null;
  private startTime: number = 0;
  private isAnimating: boolean = false;

  /**
   * Animate a value from start to end
   */
  animate(
    from: number,
    to: number,
    duration: number,
    easing: EasingFunction,
    callback: (value: number) => void,
    delay: number = 0
  ): Promise<void> {
    return new Promise((resolve) => {
      if (delay > 0) {
        setTimeout(() => {
          this._startAnimation(from, to, duration, easing, callback, resolve);
        }, delay);
      } else {
        this._startAnimation(from, to, duration, easing, callback, resolve);
      }
    });
  }

  private _startAnimation(
    from: number,
    to: number,
    duration: number,
    easing: EasingFunction,
    callback: (value: number) => void,
    resolve: () => void
  ): void {
    this.isAnimating = true;
    this.startTime = performance.now();
    const easingFn = easingFunctions[easing] || easingFunctions.linear;
    const range = to - from;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - this.startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easingFn(progress);
      const currentValue = from + range * easedProgress;

      callback(currentValue);

      if (progress < 1) {
        this.animationFrameId = requestAnimationFrame(animate);
      } else {
        this.isAnimating = false;
        this.animationFrameId = null;
        resolve();
      }
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  /**
   * Cancel current animation
   */
  cancel(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
      this.isAnimating = false;
    }
  }

  /**
   * Check if currently animating
   */
  get animating(): boolean {
    return this.isAnimating;
  }

  /**
   * Animate multiple values in sequence
   */
  async animateSequence(
    animations: Array<{
      from: number;
      to: number;
      duration: number;
      easing: EasingFunction;
      callback: (value: number) => void;
      delay?: number;
    }>
  ): Promise<void> {
    for (const anim of animations) {
      await this.animate(
        anim.from,
        anim.to,
        anim.duration,
        anim.easing,
        anim.callback,
        anim.delay
      );
    }
  }

  /**
   * Animate multiple values in parallel
   */
  async animateParallel(
    animations: Array<{
      from: number;
      to: number;
      duration: number;
      easing: EasingFunction;
      callback: (value: number) => void;
      delay?: number;
    }>
  ): Promise<void> {
    await Promise.all(
      animations.map(anim =>
        this.animate(
          anim.from,
          anim.to,
          anim.duration,
          anim.easing,
          anim.callback,
          anim.delay
        )
      )
    );
  }
}
