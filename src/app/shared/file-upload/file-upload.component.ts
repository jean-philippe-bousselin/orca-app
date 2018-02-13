/**
* Upload component
* Source code found here : https://stackoverflow.com/a/39862337/4700087
*/
import { Component, ElementRef, Input, Output, ViewChild, EventEmitter } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'

@Component({
    selector: 'file-upload',
    template: '<input class="input" type="file" (change)="upload()" [multiple]="multiple" #fileInput>'
})
export class FileUploadComponent {

    @Input() uploadUrl: string
    @Input() multiple: boolean = false

    @Output() onStart: EventEmitter<any> = new EventEmitter()
    @Output() onFinish: EventEmitter<any> = new EventEmitter()
    @Output() onError: EventEmitter<any> = new EventEmitter()

    @ViewChild('fileInput') inputEl: ElementRef

    constructor(private http: Http) {}

    upload() {
        if(!this.uploadUrl) {
          throw new Error("Missing upload url")
        }
        let inputEl: HTMLInputElement = this.inputEl.nativeElement;
        let fileCount: number = inputEl.files.length;
        let formData = new FormData();
        if (fileCount > 0) { // a file was selected
            for (let i = 0; i < fileCount; i++) {
                formData.append('file[]', inputEl.files.item(i));
            }
            this.onStart.emit()
            this.http.post(this.uploadUrl, formData).subscribe(
              response => this.uploadFinished(response),
              error => this.onError.emit(error)
            )
        }
    }

    uploadFinished(response) {
      this.onFinish.emit(response)
      this.inputEl.nativeElement.files.value = ""
    }
}
