/* eslint-disable accessor-pairs */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {
  // se ejecuta, si cambia la propiedad de la directiva customIf
  @Input() set customIf (condicion: boolean) {
    if (condicion) {
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainerRef.clear()
    }
  }

  constructor (
    private readonly templateRef: TemplateRef<HTMLElement>,
    private readonly viewContainerRef: ViewContainerRef
  ) {}
}
