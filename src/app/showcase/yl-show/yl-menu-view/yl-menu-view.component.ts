import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'yl-menu-view',
    templateUrl: './yl-menu-view.component.html',
    styleUrls: ['./yl-menu-view.component.css']
})
export class YlMenuViewComponent implements OnInit {
    str = `
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
    `;
    css = `
  .aaa{
            background-color: #880101!important;
            backdrop-filter: blur(12px);
      }
    `;
    html1 = `
     <div style="height: 32px;background-color: khaki;" #menuScroll></div>
     <div style="height: 50vh;"></div>
    `;

    constructor() {
    }

    ngOnInit(): void {
    }

}
