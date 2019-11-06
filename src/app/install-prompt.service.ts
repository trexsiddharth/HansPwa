import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstallPromptService {
  event: any;
  constructor() { }
savePrompt() {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
  });
}
getPrompt() {
  if (this.event) {
    return this.event;
  } else {
    return null;
  }
}

}
