import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: []
})
export class AgregarComponent {
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  })

  constructor (
    private readonly fb: FormBuilder
  ) { }

  campoNoValido (campo: string): boolean {
    return this.miFormulario.controls[campo]?.invalid &&
    this.miFormulario.controls[campo].touched
  }
}
