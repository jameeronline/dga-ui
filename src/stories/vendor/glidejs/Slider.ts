export interface SliderProps {
  autoplay?: boolean;
  animationDuration?: number;
  perView?: number;
  type?: 'slider' | 'carousel';
  startAt?: number;
  gap?: number;
  bound?: boolean;
  rewind?: boolean;
  keyboard?: boolean;
  hoverpause?: boolean;
  items?: string[];
}

export const createSlider = ({
  autoplay = false,
  animationDuration = 2500,
  perView = 1,
  type = 'carousel',
  startAt = 0,
  gap = 10,
  bound = false,
  rewind = true,
  keyboard = true,
  hoverpause = true,
  items = [],
}: SliderProps): HTMLElement => {
  const autoplayValue = autoplay ? animationDuration : false;

  const sliderContainer = document.createElement('div');
  sliderContainer.classList.add('glide');

  sliderContainer.innerHTML = `
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides w-full">
        ${items.map((item) => `<li class="glide__slide w-full">${item}</li>`).join('')}
      </ul>
    </div>
    <div class="glide__arrows" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--left" data-glide-dir="<">Prev</button>
      <button class="glide__arrow glide__arrow--right" data-glide-dir=">">Next</button>
    </div>
  `;

  setTimeout(() => {
    import('@glidejs/glide').then((Glide) => {
      const glide = new Glide.default(sliderContainer, {
        type: type,
        autoplay: autoplayValue,
        animationDuration: animationDuration,
        perView: perView,
        startAt: startAt,
        gap: gap,
        bound: bound,
        rewind: rewind,
        keyboard: keyboard,
        hoverpause: hoverpause,
      });

      glide.mount();
    });
  }, 0);

  return sliderContainer;
};