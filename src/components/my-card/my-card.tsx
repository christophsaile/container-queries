import { Component, Host, h } from '@stencil/core';
@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  // private wrapper: HTMLElement;

  // private resizeObserver = new ResizeObserver(([entry]) => {
  //   const { width } = entry.contentRect;
  //   if (width < 600) {
  //     this.wrapper.style.flexDirection = 'column';
  //   } else {
  //     this.wrapper.style.flexDirection = 'row';
  //   }
  // });

  // componentDidLoad() {
  //   this.resizeObserver.observe(this.wrapper);
  // }

  // disconnectedCallback() {
  //   this.resizeObserver.disconnect();
  // }

  render() {
    return (
      <Host>
        <div
          class='wrapper'
          // ref={(el) => {
          //   this.wrapper = el;
          // }}
        >
          <img
            src='https://images.unsplash.com/photo-1675789652587-5765ab02ec80?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODEzMTk0Mw&ixlib=rb-4.0.3&q=80&w=300'
            alt=''
          />
          <div>
            <h2>My Card</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ipsum justo, non
              laoreet mi hendrerit ac. Donec elementum vitae lorem id fermentum. Integer sed quam in
              leo pretium aliquet at fermentum erat. Curabitur mollis eros non metus sagittis, quis
              feugiat mauris convallis. Aliquam ultricies metus sollicitudin ligula porttitor
              fringilla. Sed a pharetra ligula, nec scelerisque tellus. Nulla id neque velit. Aenean
              ligula tellus, tempus in dolor sed, sagittis placerat magna. Phasellus ligula massa,
              interdum eu augue non, volutpat malesuada purus. Cras volutpat viverra dapibus. Nam
              vel mollis nulla. Aliquam a metus ultrices, feugiat libero et, lacinia augue..
            </p>
          </div>
        </div>
      </Host>
    );
  }
}
