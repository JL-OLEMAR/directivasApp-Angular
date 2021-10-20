/* eslint-disable accessor-pairs */
import { Directive, ElementRef, Input, OnInit } from '@angular/core'

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {
  private _mensaje: string = 'Este campo es requerido'
  private _color: string = '#f00'

  htmlElement: ElementRef<HTMLElement>

  // se ejecuta si cambia el mensaje por parte del padre
  @Input() set mensaje (valor: string) {
    this._mensaje = valor
    this.setMensaje()
  }

  // se ejecuta si cambia el color por parte del padre
  @Input() set color (valor: string) {
    this._color = valor
    this.setColor()
  }

  constructor (private readonly el: ElementRef<HTMLElement>) {
    this.htmlElement = el
  }

  ngOnInit (): void {
    this.setColor()
    this.setEstilo()
    this.setMensaje()
  }

  setColor (): void {
    this.htmlElement.nativeElement.style.color = this._color
  }

  setEstilo (): void {
    this.htmlElement.nativeElement.classList.add('form-text')
  }

  setMensaje (): void {
    this.htmlElement.nativeElement.innerText = this._mensaje
  }
}
