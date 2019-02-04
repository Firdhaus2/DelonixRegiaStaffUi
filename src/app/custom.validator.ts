import { FormControl, FormGroup, AbstractControl } from '@angular/forms';

export class CustomValidator {
}

export function AdminCodeValidation(adminCode: AbstractControl): { [key: string]: boolean } | null {
    if (!(adminCode.value === '123adminCodeabc')) return { 'notmatch': true };
    return null;
}
export function RoleValidation(role: AbstractControl): { [key: string]: boolean } | null {
    if (role.value === '0') return { 'notmatch': true };
    return null;
}