import {Component} from '@angular/core'

@Component({
selector: 'app-success-alert',
template: `
<div>This is a success message!</div>
`,
styles: [`
div {
    padding: 20px;
    background-color: palegreen;
    border: 1px solid green;
}
`]
})

export class SuccessAlertComponent {

}