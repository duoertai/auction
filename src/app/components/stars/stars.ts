import {Component, EventEmitter, Input, Output} from '@angular/core'; // <1>

@Component({
    templateUrl: 'stars.html',
    styles: [` .starrating { color: #d17581; }`],
    selector: 'auction-stars'
})
export default class {
    private _rating: number;
    private stars: boolean[];

    private maxStars: number = 5;

    @Input()
    readonly: boolean = true;

    @Input()
    public get rating() : number {
        return this._rating;
    }

    public set rating(v : number) {
        this._rating = v | 0;
        this.stars = Array(this.maxStars).fill(true, 0, this.rating);
    }

    @Output()
    ratingChange: EventEmitter<number> = new EventEmitter();

    fillStarsWithColor(index) {
        if (!this.readonly) {
            this.rating = index + 1;
            this.ratingChange.emit(this.rating);
        }
    }

}
