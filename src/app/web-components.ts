import { AonProductComponent } from './aon-product/aon-product.component';
import { AppComponent } from './app.component';
export const WebComponents = [
    {
        component: AppComponent,
        elementName: 'main-app',
        inputs: ['data', 'config']
    },
    {
        component: AonProductComponent,
        elementName: 'aon-product',
        inputs: ['data', 'config']
    }
]