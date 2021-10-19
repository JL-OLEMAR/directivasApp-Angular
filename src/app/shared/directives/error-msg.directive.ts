import { Directive, ElementRef, Input, OnInit } from '@angular/core'

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {
  htmlElement: ElementRef<HTMLElement>
  @Input() color: string = '#f00'

  constructor (private readonly el: ElementRef<HTMLElement>) {
    this.htmlElement = el
  }

  ngOnInit (): void {
    console.log('NgOnInit directiva')
    this.setColor()
  }

  setColor (): void {
    this.htmlElement.nativeElement.style.color = this.color
  }
}
