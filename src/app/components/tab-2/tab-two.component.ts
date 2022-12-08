import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Subscription } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'tab-two',
  templateUrl: './tab-two.component.html',
  styleUrls: ['./tab-two.component.css'],
})
export class TabTwoComponent implements OnInit, OnDestroy {
  public input4: FormControl = new FormControl('');
  public controlSub: Subscription | undefined;
  public hasNotify: boolean = false

  public ngOnInit(): void {
    this.controlSub = this.input4.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value) => (
        this.hasNotify = (value as string).toLowerCase() === 'опасность'));
  }

  public ngOnDestroy(): void {
    this.controlSub!.unsubscribe();
  }

}
