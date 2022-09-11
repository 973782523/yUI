import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {trigger, style, transition, animate, AnimationEvent} from '@angular/animations';

@Component({
    selector: 'yl-menu',
    templateUrl: './yl-menu.component.html',
    styleUrls: ['./yl-menu.component.css'],
    animations: [
        trigger('overlayMenuAnimation', [
            // 动画进入
            transition(':enter', [
                style({opacity: 0, transform: 'scaleY(0.8)'}),
                animate('.12s cubic-bezier(0, 0, 0.2, 1)', style({opacity: 1, transform: '*'})),
            ]),
            // 动画离开
            transition(':leave', [
                animate('.1s linear', style({opacity: 0}))
            ])
        ])
    ],
})
export class YlMenuComponent implements OnInit {
    activeMenuIndex: number | null = null;
    outsideClickListener: any;
    @ViewChild('topbarMenu') topbarMenu!: ElementRef;

    constructor() {
    }

    ngOnInit(): void {
    }

    onOverlayMenuEnter(event: AnimationEvent) {
        console.log(event);
        switch (event.toState) {
            case 'visible':
                this.bindOutsideClickListener();
                break;

            case 'void':
                this.unbindOutsideClickListener();
                break;
        }
    }

    bindOutsideClickListener() {
        if (!this.outsideClickListener) {
            this.outsideClickListener = (event: any) => {
                if (this.isOutsideTopbarMenuClicked(event)) {
                    this.activeMenuIndex = null;
                }
            };

            document.addEventListener('click', this.outsideClickListener);
        }
    }

    isOutsideTopbarMenuClicked(event: any): boolean {
        console.log(event.target);
        return !(this.topbarMenu.nativeElement.isSameNode(event.target) || this.topbarMenu.nativeElement.contains(event.target));
    }
    unbindOutsideClickListener() {
        if (this.outsideClickListener) {
            document.removeEventListener('click', this.outsideClickListener);
            this.outsideClickListener = null;
        }
    }

    toggleMenu(event: MouseEvent, index: number) {
        this.activeMenuIndex = this.activeMenuIndex === index ? null : index;
        console.log(this.activeMenuIndex);
        event.preventDefault();
    }
}
