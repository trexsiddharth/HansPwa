import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class UnderstandErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        // Understand.logError(error);
    }
}