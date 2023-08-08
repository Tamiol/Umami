import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Recipe } from '../../shared/interfaces/recipes-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements AfterViewInit {
  @Input() recipe!: Recipe;
  @ViewChild('imgContainer') imgContainer!: ElementRef;

  constructor(private router: Router) {}

  navigateToDetails() {
    this.router.navigate(['/recipe', this.recipe.id]);
  }

  ngAfterViewInit(): void {
    if (this.imgContainer) {
      const elem = this.imgContainer.nativeElement as HTMLDivElement;
      elem.style.backgroundImage = this.recipe.imageUrl
        ? `url( "${this.recipe.imageUrl}" )`
        : 'url("assets/images/dish-icon.png")';
    }
  }
}
