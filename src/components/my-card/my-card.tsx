import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: false,
})
export class MyCard {
  private wrapper: HTMLElement;

  private resizeObserver: ResizeObserver;

  componentDidLoad() {
    this.resizeObserver = new ResizeObserver(([entry]) => {
      const { width } = entry.contentRect;
      if (width < 400) {
        this.wrapper.style.flexDirection = 'column';
      } else {
        this.wrapper.style.flexDirection = 'row';
      }
    });
    this.resizeObserver.observe(this.wrapper);
  }

  disconnectedCallback() {
    this.resizeObserver.disconnect();
  }

  render() {
    return (
      <Host>
        <div
          class='wrapper'
          ref={(el) => {
            this.wrapper = el;
          }}
        >
          <span></span>
          <div>
            <h2>My Card</h2>
            <p>My Card is a component that does something.</p>
          </div>
        </div>
      </Host>
    );
  }
}
