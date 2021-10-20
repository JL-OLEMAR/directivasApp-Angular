import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: []
})
export class AgregarComponent {
  texto1: string = 'Pepito Lopez'
  color: string = '#f00'

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  })

  constructor (private readonly fb: FormBuilder) { }

  campoNoValido (campo: string): boolean {
    return this.miFormulario.controls[campo]?.invalid &&
      this.miFormulario.controls[campo]?.touched
  }

  cambiarNombre (): void {
    this.texto1 = Math.random().toString()
  }

  cambiarColor (): void {
    const color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16))
    this.color = color
  }
}
