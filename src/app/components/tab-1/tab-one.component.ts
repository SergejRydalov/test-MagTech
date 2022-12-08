import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: 'tab-one',
  templateUrl: './tab-one.component.html',
  styleUrls: ['./tab-one.component.css'],
})
export class TabOneComponent implements OnInit, OnDestroy {
  public form = this.fb.group({
    input1: [''],
    inputArr2: this.fb.array([this.fb.control('')]),
    select: [''],
    input3: { value: '', disabled: true },
  });

  public get inputArr(): FormArray {
    return this.form.get('inputArr2') as FormArray;
  }

  private controlSub: Subscription | undefined;

  constructor(private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.controlSub = this.form.get('select')!.valueChanges.subscribe((value) =>
      (!!value ? this.form.get('input3')?.enable() : this.form.get('input3')?.disable()))
  }

  public ngOnDestroy(): void {
    this.controlSub!.unsubscribe();
  }

  public addControl() {
    const control = new FormControl('');
    this.inputArr.push(control);
  }
}
