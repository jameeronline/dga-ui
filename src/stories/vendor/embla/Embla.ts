export interface EmblaSlide {
  content: string;
}

export interface EmblaProps {
  loop?: boolean;
  speed?: number;
  slidesPerPage?: number;
  items?: string[];
  dragFree?: boolean;
  containScroll?: boolean;
}

export const createEmbla = ({
  loop = true,
  speed = 10,
  slidesPerPage = 1,
  items = [],
  dragFree = false,
  containScroll = false,
}: EmblaProps): HTMLElement => {
  const emblaContainerId = `embla-${Math.random().toString(36).substr(2, 9)}`;

  const slidesPerView = slidesPerPage || 1;

  const slidesHtml = items
    .map(
      (item, index) => `
    <div class="embla__slide" style="flex: 0 0 ${100 / slidesPerView}%; min-width: ${100 / slidesPerView}%;">
      <div class="p-2">
        ${item}
      </div>
    </div>
  `,
    )
    .join('');

  const componentHtml = `
    <div id="${emblaContainerId}" class="embla overflow-hidden">
      <div class="embla__container flex">
        ${slidesHtml}
      </div>
    </div>
  `;

  const element = document.createElement('div');
  element.innerHTML = componentHtml;

  const emblaNode = element.querySelector(`#${emblaContainerId}`);

  setTimeout(() => {
    (async () => {
      const mod = await import('embla-carousel');
      const emblaFactory = (mod && (mod.default || mod)) as any;

      if (typeof emblaFactory === 'function') {
        const embla = emblaFactory(emblaNode, {
          loop: loop,
          speed: speed,
          slidesPerPage: slidesPerView,
          dragFree: dragFree,
          containScroll: containScroll,
        });

        window.emblaInstances = window.emblaInstances || {};
        window.emblaInstances[emblaContainerId] = embla;
      }
    })();
  }, 0);

  return element;
};

export const destroyEmbla = (containerId: string): void => {
  if (window.emblaInstances && window.emblaInstances[containerId]) {
    window.emblaInstances[containerId].destroy();
    delete window.emblaInstances[containerId];
  }
};

declare global {
  interface Window {
    emblaInstances?: Record<string, unknown>;
  }
}
