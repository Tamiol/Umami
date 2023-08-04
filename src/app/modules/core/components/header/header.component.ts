import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
//implements OnInit, OnDestroy
export class HeaderComponent {
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
