import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

export class Article {
    constructor(public Title: string,
                public Summary: string,
                public ImageUrl: string,
                public Url: string) {
    }
}
class Manufacturer {
    constructor(public Id: number,
                public Name: string) {
    }
}
class Range {
    constructor(public Id: number,
                public Name: string,
                public ManufacturerId: number) {
    }
}
class Offers {
    constructor(public Title: string,
                public ImageUrl: string,
                public Price: number,
                public Saving: number,
                public Url: string,
                public RangeId: number) {
    }
}
interface Isearch {
    manufacturerId: number;
    rangeId: number;
}

@Component({
    selector: 'cars',
    template: require('./cars.html'),
    styles: [String(require('./cars.less'))]

})
export class CarsComponent {
    public carArticles: Article[];
    public manufacturers: Manufacturer[];
    public ranges: Range[];
    public range: Range;
    public offers: Offers = {
        Title: '',
        ImageUrl: '',
        Price: null,
        Saving: null,
        Url: '',
        RangeId: null
    };
    public offerShow = false;
    public searchData: Isearch = {
        manufacturerId: null,
        rangeId: null
    };

    constructor(public http: Http) {
        this.getManufacturers().subscribe(
            result => this.manufacturers = result
        );
        this.getArticles().subscribe(
            result => this.carArticles = result
        );
    }
    /* tslint:disable */
    manufacturerChanged() {
        this.searchData.rangeId = null;
        if (this.searchData.manufacturerId) {
            this.getRanges().subscribe(
                result => this.ranges = result.filter(item => item.ManufacturerId == this.searchData.manufacturerId)
            );
        } else {
            this.ranges = [];
        }
        this.offers = {
            Title: '',
            ImageUrl: '',
            Price: null,
            Saving: null,
            Url: '',
            RangeId: null
        };
        this.offerShow = false;
    }

    rangeChanged() {
        if (!this.searchData.rangeId) {
            this.offers = {
                Title: '',
                ImageUrl: '',
                Price: null,
                Saving: null,
                Url: '',
                RangeId: null
            };
            this.offerShow = false;
        }
    }

    getArticles(): Observable<Article[]> {
        return this.http
        //  .get('/api/carArticles')  //  prepared for backend implementation. No current api now
            .get('app/cars/newsArticles.json')
            .map(response => response.json());
    }

    getManufacturers(): Observable<Manufacturer[]> {
        return this.http
        //  .get('/api/manufacturers')  //  prepared for backend implementation
            .get('app/cars/manufacturers.json')
            .map(response => response.json());
    }

    getRanges(): Observable<Range[]> {
        return this.http
        //  .get(`/api/manufacturers/${this.search.manufacturerId}/ranges`)  //  prepared for backend implementation
            .get('app/cars/ranges.json')
            .map(response => response.json());
    }

    getOffers() {
        this.http
        //  .get(`/api/manufacturers/${this.search.manufacturerId}/ranges/${this.search.rangeId}/offers`)  //  prepared for backend implementation
            .get('app/cars/offers.json')
            .map(response => response.json())
            .subscribe(
                result => {
                    let offersList = (result.filter(item => item.RangeId == this.searchData.rangeId));
                    if (offersList.length > 0) {
                        this.offers = (result.filter(item => item.RangeId == this.searchData.rangeId))[0];
                        this.offerShow = true;
                    } else {
                        alert('No Data');
                    }
                }
            );
    }

    prev() {
        let pos = $(".articles").scrollLeft();
        $(".articles").animate({
            scrollLeft: pos - $(".articles").width()
        }, 300);
    }

    next() {
        let pos = $(".articles").scrollLeft();
        $(".articles").animate({
            scrollLeft: pos + $(".articles").width()
        }, 300);
    }

}
