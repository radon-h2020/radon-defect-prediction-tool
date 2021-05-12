import { Route } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';

// @formatter:off
// tslint:disable:max-line-length
export const appRoutes: Route[] = [

    // Landing routes
    {
        path: '',
        component  : LayoutComponent,
        loadChildren: () => import('app/modules/welcome/welcome.module').then(m => m.LandingWelcomeModule),
        data: {
            layout: 'empty'
        }
    },

    {
        path: 'repositories',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        loadChildren: () => import('app/modules/repository-list/repository-list.module').then(m => m.RepositoryListModule),
    },

    {
        path       : 'repository/:id/dashboard',
        component  : LayoutComponent,
        loadChildren: () => import('app/modules/dashboard/dashboard.module').then(m => m.DashboardModule),
        data: {
            layout: 'centered'
        }
    },
    {
        path       : 'repository/:id/models',
        component  : LayoutComponent,
        loadChildren: () => import('app/modules/dashboard/dashboard.module').then(m => m.DashboardModule),
        data: {
            layout: 'centered'
        }
    },
    {
        path       : 'repository/:id/tasks',
        component  : LayoutComponent,
        loadChildren: () => import('app/modules/tasks/tasks.module').then(m => m.TasksModule),
        data: {
            layout: 'centered'
        }
    },

//     {
//         path       : 'repository/:id',
//         component  : LayoutComponent,
//         //loadChildren: () => import('app/modules/dashboard/dashboard.module').then(m => m.DashboardModule),
//         data: {
//             layout: 'centered'
//         },
//         children   : [
//             {path: 'dashboard', loadChildren: () => import('app/modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
//             {path: 'models', loadChildren: () => import('app/modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
//         ]
//     },
];

