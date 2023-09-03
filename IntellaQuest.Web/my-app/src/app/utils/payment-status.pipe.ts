import { Pipe, PipeTransform } from '@angular/core';
import { PaymentType } from '../models/enum/payment-type';

@Pipe({
  name: 'paymentType'
})
export class PaymentStatusPipe implements PipeTransform {

  transform(value: PaymentType | undefined): string{
    switch (value) {
      case PaymentType.Cash:
        return 'Cash';
      case PaymentType.Card:
        return 'Card';
      default:
        return '/';
    }
  }

}
