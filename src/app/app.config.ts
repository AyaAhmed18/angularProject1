import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, HttpFeature, HttpFeatureKind, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    ProvideHttpClient(withFetch())]
};

////////////////////////////////////
function ProvideHttpClient(arg0: HttpFeature<HttpFeatureKind.Fetch>): import("@angular/core").Provider {
  return {
    provide: HttpClient, // Provide HttpClient token
    useClass: HttpClient // Use HttpClient class
  };
}

