import {
  Component,
  ViewChild,
  ElementRef
} from '@angular/core';

import { SceneService } from './services';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [SceneService]
})
export class AppComponent  {
  constructor(
    private scene: SceneService
  ) { }

  @ViewChild('container')
  set container(container: ElementRef) {
    this.scene.initialize(container.nativeElement);
  }
}
