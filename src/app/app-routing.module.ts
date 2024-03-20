// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { TemplateModule } from './template/template.module';

// function loadModuleWithDelay(path: string): () => Promise<any> {
//   return () => new Promise(resolve => {
//     setTimeout(() => resolve(import(path)), 3000); // Delay for 3 seconds
//   });
// }

 
// const routes: Routes = [
//    { path: 'lazy', loadChildren: loadModuleWithDelay('./template/template.module').then(m => m.TemplateModule) }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
