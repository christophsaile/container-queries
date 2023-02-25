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
        <section>
          <div>
            <h1>My Example</h1>
            <p>My Example is a component that does something.</p>
          </div>
          <div>
            <my-card></my-card>
          </div>
        </section>
      </Host>
    );
  }
}
