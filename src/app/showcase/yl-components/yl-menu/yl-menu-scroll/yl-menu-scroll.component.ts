import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'yl-menu-scroll',
    templateUrl: './yl-menu-scroll.component.html',
    styleUrls: ['./yl-menu-scroll.component.css']
})
export class YlMenuScrollComponent implements OnInit, OnDestroy {
    @ViewChild('menuScroll') menuScroll!: ElementRef;
    scrollListener: any;

    constructor() {
    }

    ngOnInit(): void {
        this.bindScrollListener();
    }

    bindScrollListener(): void {
        if (!this.scrollListener) {
            this.scrollListener = () => {
                console.log(window.scrollY);
                if (window.scrollY > 0) {
                    this.menuScroll.nativeElement.classList.add('aaa');
                } else {
                    this.menuScroll.nativeElement.classList.remove('aaa');
                }
            };
        }
        window.addEventListener('scroll', this.scrollListener);
    }

    unbindScrollListener(): void {
        if (this.scrollListener) {
            window.removeEventListener('scroll', this.scrollListener);
            this.scrollListener = null;
        }
    }

    ngOnDestroy(): void {
        this.unbindScrollListener();
    }
}
