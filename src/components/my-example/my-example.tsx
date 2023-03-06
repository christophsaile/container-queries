import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-example',
  styleUrl: 'my-example.css',
  shadow: true,
})
export class MyExample {
  render() {
    return (
      <Host>
        <h1>Container Queries</h1>
        <section>
          <h2>card - full width</h2>
          <my-card></my-card>
        </section>
        <h2>card in 1fr 2fr - Grid</h2>
        <section class='grid'>
          <div>
            <h3>My Example</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ipsum justo, non
              laoreet mi hendrerit ac. Donec elementum vitae lorem id fermentum. Integer sed quam in
              leo pretium aliquet at fermentum erat. Curabitur mollis eros non metus sagittis, quis
              feugiat mauris convallis. Aliquam ultricies metus sollicitudin ligula porttitor
              fringilla. Sed a pharetra ligula, nec scelerisque tellus. Nulla id neque velit. Aenean
              ligula tellus, tempus in dolor sed, sagittis placerat magna. Phasellus ligula massa,
              interdum eu augue non, volutpat malesuada purus. Cras volutpat viverra dapibus. Nam
              vel mollis nulla. Aliquam a metus ultrices, feugiat libero et, lacinia augue.
            </p>
          </div>
          <div>
            <my-card></my-card>
          </div>
        </section>
      </Host>
    );
  }
}
