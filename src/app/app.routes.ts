import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component'),
    children: [
      {
        path: 'summary',
        title: 'Summary',
        loadComponent: () => import('./resume/components/summary/summary.component')
      },
      {
        path: 'aboutme',
        title: 'About Me',
        loadComponent: () => import('./resume/components/about-me/about-me.component')
      },
      {
        path: 'certifications',
        title: 'Certifications',
        loadComponent: () => import('./resume/components/certifications/certifications.component')
      },
      {
        path: 'education',
        title: 'Education',
        loadComponent: () => import('./resume/components/education/education.component')
      },
      {
        path: 'experience',
        title: 'Experience',
        loadComponent: () => import('./resume/components/experience/experience.component')
      },
      {
        path: 'languajes',
        title: 'Languajes',
        loadComponent: () => import('./resume/components/languajes/languajes.component')
      },
      {
        path: 'other-courses',
        title: 'Other Courses',
        loadComponent: () => import('./resume/components/other-courses/other-courses.component')
      },
      {
        path:'',
        redirectTo: 'summary',
        pathMatch: 'full'
      }
    ]
  },
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];
