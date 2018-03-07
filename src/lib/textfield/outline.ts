import {
  Component,
  Directive,
  ElementRef,
  HostBinding,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MdcRipple } from '@angular-mdc/web/ripple';

import { MDCTextFieldOutlineAdapter } from '@material/textfield/outline/adapter';
import { MDCTextFieldOutlineFoundation } from '@material/textfield/outline';

@Directive({
  selector: 'mdc-text-field-idle-outline',
})
export class MdcTextFieldIdleOutline {
  @HostBinding('class.mdc-text-field__idle-outline') isHostClass = true;

  constructor(public elementRef: ElementRef) { }
}

@Component({
  moduleId: module.id,
  selector: 'mdc-text-field-outline',
  template: `
  <svg>
    <path #svgpath class="mdc-text-field__outline-path"/>
  </svg>
  `,
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  providers: [MdcRipple],
})
export class MdcTextFieldOutline implements OnInit, OnDestroy {
  private _idleOutline: MdcTextFieldIdleOutline;

  @HostBinding('class.mdc-text-field__outline') isHostClass = true;
  @ViewChild('svgpath') svgpath: ElementRef;

  get idleOutline(): MdcTextFieldIdleOutline { return this._idleOutline; }
  set idleOutline(idleOutline: MdcTextFieldIdleOutline) {
    this._idleOutline = idleOutline;
  }

  private _mdcAdapter: MDCTextFieldOutlineAdapter = {
    getWidth: () => this.elementRef.nativeElement.offsetWidth,
    getHeight: () => this.elementRef.nativeElement.offsetHeight,
    setOutlinePathAttr: (value: string) => {
      this._renderer.setAttribute(this.svgpath.nativeElement, 'd', value);
    },
    getIdleOutlineStyleValue: (propertyName: string) => {
      return window.getComputedStyle(this.idleOutline.elementRef.nativeElement).getPropertyValue(propertyName);
    },
  };

  foundation: {
    init(): void,
    destroy(): void,
    updateSvgPath(labelWidth: number, isRtl: boolean): void
  } = new MDCTextFieldOutlineFoundation(this._mdcAdapter);

  constructor(
    private _renderer: Renderer2,
    public elementRef: ElementRef,
    private _ripple: MdcRipple) {
    this._ripple.init();
  }

  ngOnInit(): void {
    this.foundation = new MDCTextFieldOutlineFoundation(this._mdcAdapter);
    this.foundation.init();

    this._ripple.init();
  }

  ngOnDestroy(): void {
    this._ripple.destroy();
    this.foundation.destroy();
  }

  /**
     * Updates the SVG path of the focus outline element based on the given width of the
     * label element and the RTL context.
     */
  updateSvgPath(labelWidth: number, isRtl: boolean): void {
    this.foundation.updateSvgPath(labelWidth, isRtl);
  }

  getWidth(): number {
    return this._mdcAdapter.getWidth();
  }

  getHeight(): number {
    return this._mdcAdapter.getHeight();
  }
}
