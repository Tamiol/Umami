import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { selectAuthUser } from 'src/app/modules/auth/store/auth.selectors';
import { User } from '../../models/auth.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
//implements OnInit, OnDestroy
export class HeaderComponent {
  user$: Observable<User | null> = this.store.select(selectAuthUser);

  constructor(private store: Store<AppState>) {}

  // homePgae!: boolean;
  // $currentUrl!: Subscription;
  // urlcos!: UrlSegment[];
  // constructor(private route: ActivatedRoute) {}
  // ngOnInit(): void {
  //   this.$currentUrl = this.route.url
  //     .pipe((x) => {
  //       console.log(x);
  //       return x;
  //     })
  //     .subscribe((data) => (this.urlcos = data));
  //   // console.log(this.$currentUrl);
  // }
  // ngOnDestroy(): void {
  //   this.$currentUrl.unsubscribe();
  // }
}
