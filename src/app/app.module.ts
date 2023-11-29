import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { WebComponents } from './web-components';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
    this.initElements(injector);

  }
  ngDoBootstrap() { }
  async initElements(injector: Injector) {
    WebComponents.forEach(async (item) => {
      
      const el = createCustomElement(item.component, { injector });
      customElements.define(item.elementName, el);
    })
  }
}
