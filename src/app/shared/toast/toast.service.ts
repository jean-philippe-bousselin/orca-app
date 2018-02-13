import { Injectable } from '@angular/core';
import { Toast } from "./toast.model"

@Injectable()
export class ToastService {

    TYPE_ERROR = "is-danger"
    TYPE_SUCCESS = "is-success"
    TYPE_INFO = "is-info"
    TYPE_WARNING = "is-warning"
    TOAST_DURATION = 2500

    toasts: Toast[] = []

    add(message: string, type: string = this.TYPE_INFO) : number {
      let id = this.toasts.length + 1
      this.toasts.push(new Toast(id, message, type))
      setTimeout(() => {
        this.remove(id)
      }, this.TOAST_DURATION)
      return id
    }

    remove(id: number) {
      this.toasts.splice(this.toasts.indexOf(this.toasts[id]), 1)
    }
}
