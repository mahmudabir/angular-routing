import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {createLogErrorHandler} from '@angular/compiler-cli/ngcc/src/execution/tasks/completion';
import {templateJitUrl} from '@angular/compiler';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  myForm: FormGroup;
  idForm: AbstractControl;
  nameForm: AbstractControl;


  idValidator(control: AbstractControl): { [s: string]: boolean } {
    if (control.value.match(/^123/)) {
      console.log(control.value);
      return {invalidId: false};
    } else {
      console.log('Did not match \"123\" pattern');
      return {invalidId: true};
    }
  }

  nameValidator(control: AbstractControl): { [s: string]: boolean } {
    if ((control.value != null || control.value !== undefined || control.value !== '') && control.value === 'aaaa') {
      console.log(control.value);
      return {invalidName: false};
    } else {
      console.log('Did not match \"aaaa\" pattern');
      return {invalidName: true};
    }
  }


  constructor(private router: Router, private route: ActivatedRoute, fb: FormBuilder) {
    this.myForm = fb.group({
      id: ['123',
        [
          Validators.required, Validators.maxLength(4)]
      ],
      name: ['aaaa',
        [
          Validators.required, Validators.maxLength(4)]
      ],
      // id: ['',
      //   [Validators.required, Validators.maxLength(4)]],
      // name: ['',
      //   [Validators.required, Validators.maxLength(4)]]
    });

    this.idForm = this.myForm.controls.id;
    this.nameForm = this.myForm.controls.name;

    // console.log(this.idForm);
    // console.log(this.nameForm);
  }

  goToProduct(id: string, name: string): void {
    this.router.navigate(['./', id, 'name', name], {relativeTo: this.route});
  }

  ngOnInit(): void {
  }

  onSubmit(form?: any): void {
    if (form.valid) {
      console.log(this.myForm);
      console.log(this.myForm.hasError('required'));
      console.log(this.myForm.hasError('maxlength'));
    } else {
      console.log(form.valid);
      console.log('Invalid Form');
      console.log(this.myForm.hasError('invalidId'));
      console.log(this.myForm.hasError('invalidName'));
    }

  }
}
