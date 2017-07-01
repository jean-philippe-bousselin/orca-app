import { Component, OnInit, OnDestroy } from '@angular/core'

import { ToastService } from "./toast.service"

@Component({
  selector: 'toasts',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class ToastComponent {

  constructor(private toastService: ToastService) {}

  private getToasts() {
    return this.toastService.toasts
  }

  private removeToast(id: number) {
    this.toastService.remove(id)
  }

}
